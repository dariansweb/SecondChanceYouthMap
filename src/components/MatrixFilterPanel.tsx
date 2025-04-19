"use client";

type MatrixFilterPanelProps = {
  states: string[];
  selectedStates: string[];
  onToggleState: (state: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSortToggle: () => void;
  sortAsc: boolean;
};

export default function MatrixFilterPanel({
  states,
  selectedStates,
  onToggleState,
  searchQuery,
  onSearchChange,
  onSortToggle,
  sortAsc,
}: MatrixFilterPanelProps) {
  return (
    <div className="mb-8 space-y-4">
      {/* Search Field */}
      <div>
        <label className="block font-semibold mb-1 text-slate-700">
          Search Decision Points
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-slate-300 rounded shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. Diversion Allowed"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* State Checkboxes */}
      <div>
        <label className="block font-semibold mb-1 text-slate-700">
          Filter by State
        </label>
        <div className="flex flex-wrap gap-4">
          {states.map((state) => (
            <label
              key={state}
              className="flex items-center gap-2 text-slate-600"
            >
              <input
                type="checkbox"
                checked={selectedStates.includes(state)}
                onChange={() => onToggleState(state)}
              />
              {state}
            </label>
          ))}
        </div>
      </div>

      {/* Sort Button */}
      <div>
        <button
          onClick={onSortToggle}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Sort {sortAsc ? "Z → A" : "A → Z"}
        </button>
      </div>
    </div>
  );
}
