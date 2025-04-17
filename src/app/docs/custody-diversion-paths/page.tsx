import React from "react";

export default function CustodyDiversionPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold flex justify-center items-center gap-4">
          ⚖️ Custody vs. Diversion
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          How youth are routed and why: decision tiers, MDT logic, and placement
          options.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <p className="text-slate-700 text-lg">
          The intake process leads to a recommendation of diversion, probation,
          or custody. This decision depends on multiple factors: offense
          severity, risk score, and stakeholder input.
        </p>

        {/* Diversion First Philosophy */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            🌱 Diversion-First Philosophy
          </h2>
          <ul className="list-disc pl-6 mt-3 text-slate-700 space-y-1">
            <li>Low-risk youth are routed toward community-based services</li>
            <li>Focus on rehabilitation over punishment</li>
            <li>Minimizes youth exposure to confinement</li>
          </ul>
        </div>

        {/* MDT and Court Review */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            🧠 MDT & Court Collaboration
          </h2>
          <p className="text-slate-700 mt-2">
            Moderate to high-risk cases are reviewed by a Multi-Disciplinary
            Team (MDT). Judges, probation staff, and educational liaisons
            collaborate to determine the best path forward.
          </p>
        </div>

        {/* Custody Pathway */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            🔒 Custody Consideration
          </h2>
          <ul className="list-disc pl-6 mt-3 text-slate-700 space-y-1">
            <li>
              Reserved for youth with serious offenses or repeated violations
            </li>
            <li>90-day treatment or evaluation window (per Arkansas model)</li>
            <li>Educational services must continue uninterrupted</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
