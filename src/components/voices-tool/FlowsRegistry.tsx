import React, { useContext } from "react";
import { FlowStateContext } from "@/context/voices-tool/FlowStateContext";
import { useRouter } from "next/navigation";

const flows = [
  { id: "intake-officer", label: "Intake", path: "/voices-tool/intake-officer" },
  { id: "judge", label: "Judge", path: "/voices-tool/judges" },
  { id: "guardian", label: "Guardian", path: "/voices-tool/guardians" },
  { id: "educator", label: "Educator", path: "/voices-tool/educators" },
  { id: "defense", label: "Defense", path: "/voices-tool/defense" },
  { id: "prosecutor", label: "Prosecutor", path: "/voices-tool/prosecutor" },
  { id: "residential", label: "Residential", path: "/voices-tool/residential" },
  { id: "reentry", label: "Reentry", path: "/voices-tool/reentry" },
  { id: "probation-officer", label: "Probation", path: "/voices-tool/probation-officer" },
  { id: "mental-health", label: "Mental Health", path: "/voices-tool/mental-health" },
  { id: "workforce", label: "Workforce", path: "/voices-tool/workforce" },
  { id: "community-advocate", label: "Community Advocate", path: "/voices-tool/community-advocates" },
];

export default function FlowsRegistry() {
  const { completedFlows, resetRegistry } = useContext(FlowStateContext);
  const router = useRouter();

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-700 mb-4">
        {completedFlows.length} of {flows.length} flows completed
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {flows.map((flow) => (
          <div
            key={flow.id}
            onClick={() =>
              router.push(
                completedFlows.includes(flow.id)
                  ? `/voices-tool/summary/${flow.id}`
                  : flow.path
              )
            }
            className={`cursor-pointer p-6 rounded shadow border transition ${
              completedFlows.includes(flow.id)
                ? "bg-green-100 border-green-400"
                : "bg-white hover:bg-blue-50 border-gray-300"
            }`}
          >
            <div className="text-lg font-semibold text-gray-800">
              {flow.label}
            </div>
            {completedFlows.includes(flow.id) && (
              <div className="text-green-700 mt-1">✅ Completed</div>
            )}
          </div>
        ))}
        {completedFlows.length > 0 && (
          <button
            onClick={resetRegistry}
            className="text-sm text-red-600 underline mt-4"
          >
            🔄 Reset Registry
          </button>
        )}
      </div>
    </div>
  );
}
