"use client";

import { useEffect, useState } from "react";
import MatrixCard from "./MatrixCard";
import MatrixFilterPanel from "./MatrixFilterPanel";
import { MatrixData } from "@/lib/loadMatrixData";

export default function MatrixGrid() {
  const [data, setData] = useState<MatrixData[]>([]);
  const [filteredData, setFilteredData] = useState<MatrixData[]>([]);
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

  useEffect(() => {
    const filtered = data
      .filter((entry) => {
        return selectedStates.some((state) => {
          const stateVal = entry[state as keyof MatrixData];
          return (
            typeof stateVal === "object" &&
            stateVal !== null &&
            "value" in stateVal
          );
        });
      })
      .filter((entry) =>
        entry.decisionPoint.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) =>
        sortAsc
          ? a.decisionPoint.localeCompare(b.decisionPoint)
          : b.decisionPoint.localeCompare(a.decisionPoint)
      );

    setFilteredData(filtered);
  }, [data, selectedStates, searchQuery, sortAsc]);

  const toggleState = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

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
                entry={entry}
                visibleStates={selectedStates}
              />
            ))}
          </section>
        </>
      )}
    </>
  );
}
