"use client";

import { useEffect, useState } from "react";
import MatrixCard from "./MatrixCard";
import MatrixFilterPanel from "./MatrixFilterPanel";
import MatrixModal from "./MatrixModal";
import { MatrixDataset, MatrixData } from "@/lib/loadMatrixData";

export default function MatrixGrid() {
  const [data, setData] = useState<MatrixData[]>(MatrixDataset);
  const [filteredData, setFilteredData] = useState<MatrixData[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<MatrixData | null>(null);

  const [selectedStates, setSelectedStates] = useState<string[]>([
    "Arkansas",
    "Texas",
    "Missouri",
    "Louisiana",
    "Oklahoma",
    "Mississippi",
    "Tennessee",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedDecision, setSelectedDecision] = useState<string>("");

  const allStates: string[] = [
    "Arkansas",
    "Texas",
    "Missouri",
    "Louisiana",
    "Oklahoma",
    "Mississippi",
    "Tennessee",
  ];

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data/matrix-data.json");
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);
  <MatrixModal
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
    entry={
      selectedEntry
        ? {
            ...selectedEntry,
            confidence:
              typeof selectedEntry.confidence === "boolean"
                ? {
                    value: selectedEntry.confidence ? "high" : "low",
                    notes: "",
                    source: "",
                    confidence: selectedEntry.confidence ? "high" : "low",
                  }
                : typeof selectedEntry.confidence === "object" &&
                  selectedEntry.confidence !== null &&
                  "value" in selectedEntry.confidence
                ? {
                    value: String(selectedEntry.confidence.value),
                    notes: selectedEntry.confidence.notes || "",
                    source: selectedEntry.confidence.source || "",
                    confidence: String(selectedEntry.confidence.confidence),
                  }
                : {
                    value: "",
                    notes: "",
                    source: "",
                    confidence: "",
                  },
          }
        : null
    }
  />;

  useEffect(() => {
    const filtered = data
      .filter((entry) => {
        const inSelectedStates = selectedStates.some((state) => {
          const stateVal = entry[state as keyof MatrixData];
          return (
            typeof stateVal === "object" &&
            stateVal !== null &&
            "value" in stateVal
          );
        });

        const matchesSearch = entry.decisionPoint
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        const matchesDecision =
          !selectedDecision || entry.decisionPoint === selectedDecision;

        return inSelectedStates && matchesSearch && matchesDecision;
      })
      .sort((a, b) =>
        sortAsc
          ? a.decisionPoint.localeCompare(b.decisionPoint)
          : b.decisionPoint.localeCompare(a.decisionPoint)
      );

    setFilteredData(filtered);
  }, [data, selectedStates, searchQuery, selectedDecision, sortAsc]);

  const toggleState = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  const decisionPoints = [...new Set(data.map((entry) => entry.decisionPoint))];

  function handleOpenModal(entry: MatrixData): void {
    console.log("Opening modal for entry:", entry);
    // Here you can implement logic to open a modal and display the details of the entry.
    // For example, you might set a state variable to the selected entry and use it to render a modal.
    setSelectedEntry(entry);
    setModalOpen(true);
  }

  return (
    <>
      <MatrixFilterPanel
        states={allStates}
        selectedStates={selectedStates}
        onToggleState={toggleState}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSortToggle={() => setSortAsc(!sortAsc)}
        sortAsc={sortAsc}
        decisionPoints={decisionPoints}
        selectedDecision={selectedDecision}
        onDecisionChange={setSelectedDecision}
      />

      {filteredData.length === 0 ? (
        <div className="text-center text-slate-500 mt-10">
          No matching decision points.
        </div>
      ) : (
        <>
          <p className="text-sm text-slate-600 mb-4">
            Showing {filteredData.length} decision point
            {filteredData.length > 1 ? "s" : ""}.
          </p>
          <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-10">
            {filteredData.map((entry, index) => (
              <MatrixCard
                key={index}
                entry={{
                  ...entry,
                  confidence: entry.confidence as "low" | "medium" | "high",
                }}
                visibleStates={selectedStates}
                onOpenModal={handleOpenModal}
              />
            ))}
          </section>

          <MatrixModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            entry={
              selectedEntry
                ? {
                    ...selectedEntry,
                    confidence:
                      typeof selectedEntry.confidence === "boolean"
                        ? {
                            value: selectedEntry.confidence ? "high" : "low",
                            notes: "",
                            source: "",
                            confidence: selectedEntry.confidence ? "high" : "low",
                          }
                        : typeof selectedEntry.confidence === "object" &&
                          selectedEntry.confidence !== null &&
                          "value" in selectedEntry.confidence
                        ? {
                            value: String(selectedEntry.confidence.value),
                            notes: selectedEntry.confidence.notes || "",
                            source: selectedEntry.confidence.source || "",
                            confidence: String(selectedEntry.confidence.confidence),
                          }
                        : {
                            value: "",
                            notes: "",
                            source: "",
                            confidence: "",
                          },
                  }
                : null
            }
          />
        </>
      )}
    </>
  );
}
