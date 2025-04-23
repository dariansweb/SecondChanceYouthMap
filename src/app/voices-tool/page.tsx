// src/app/voices-tool/page.tsx

"use client";

import { useEffect, useState } from "react";
import RoleCard from "@/components/voices-tool/RoleCards/RoleCard";

type Role = {
  title: string;
  description: string;
  path: string;
  category: string;
  phase: string;
};

const phaseFilters = [
  "All",
  "Intake",
  "Court",
  "Post-Disposition",
  "Reentry",
  "Any",
];

export default function VoicesToolHome() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [selectedPhase, setSelectedPhase] = useState<string>("All");

  useEffect(() => {
    const loadRoles = async () => {
      const res = await import("@/data/voices-tool/roles.json");
      setRoles(res.default);
    };

    loadRoles();
  }, []);

  // Filter roles by phase
  const filteredRoles = roles.filter((role) => {
    if (selectedPhase === "All") return true;
    return role.phase === selectedPhase || role.phase === "Any";
  });

  // Group roles by category
  const groupedByCategory = filteredRoles.reduce(
    (groups: Record<string, Role[]>, role) => {
      if (!groups[role.category]) {
        groups[role.category] = [];
      }
      groups[role.category].push(role);
      return groups;
    },
    {}
  );

  return (
    <div className="p-10">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4 tracking-tight">
        Voices Tool Dashboard
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-4xl">
        This dashboard represents the core of the SCYM framework — a
        constellation of 15 distinct roles, each shaping a youth’s journey
        through care, consequence, and community support. From intake to
        diversion, from courtroom to reentry, every workflow is purpose-built to
        reflect the real decisions and challenges faced by professionals,
        advocates, and guardians. <br />
        <br />
        Select a voice to step into its perspective, or filter by the current
        phase in a youth’s timeline. Each tool here isn’t just a form — it’s a
        window into a system, a responsibility, and a chance to change outcomes.
      </p>

      {/* Phase Filter */}
      <div className="mb-8 flex flex-wrap gap-4">
        {phaseFilters.map((phase) => (
          <button
            key={phase}
            onClick={() => setSelectedPhase(phase)}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              selectedPhase === phase
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-blue-700 hover:bg-blue-100"
            }`}
          >
            {phase}
          </button>
        ))}
      </div>

      {/* Grouped Roles */}
      <div className="space-y-10">
        {Object.entries(groupedByCategory).map(([category, roles]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <RoleCard
                  key={role.title}
                  title={role.title}
                  description={role.description}
                  path={role.path}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
