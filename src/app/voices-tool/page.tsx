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
        Voices Journey
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-4xl">
        The Voices Journey Tool is built for those who guide, redirect, and
        speak into the lives of youth navigating the <strong>journey</strong>{" "}
        through the justice system. These are the roles a young person sees,
        hears, and feels as they move through care, consequence, and recovery.
        From intake to reentry, from defense to education, every voice becomes
        part of the youth’s lived experience.
        <br />
        <br />
        This tool presents 15 professional roles as interactive, decision-based
        workflows — each reflecting the real choices and responsibilities that
        shape a youth’s journey. Whether you are an advocate, a judge, a mentor,
        or a service provider, your presence is not just part of the process —
        <strong>it is the voice of you that guide their journey.</strong>
        <br />
        <br />
        Step into your role. Trace your impact. Let your voice lead the way.
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
