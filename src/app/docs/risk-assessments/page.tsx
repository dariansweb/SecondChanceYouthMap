// src/app/docs/risk-assessments/page.tsx

import Link from "next/link";

export default function RiskAssessmentsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 text-slate-700">
      {/* HERO HEADER */}
      <header className="bg-blue-900 text-white py-16 text-center px-4 shadow-md">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex justify-center items-center gap-3">
          <span>📊</span> Risk Assessments
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl font-light">
          Tools that guide intake decisions, rooted in fairness, defensibility,
          and the psychological science of risk management. These aren’t just
          scores—they’re *safety beacons and ethical gates*.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <section className="space-y-12 leading-relaxed text-base">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🔍 Why Use Risk Assessments?
            </h2>
            <p className="mt-2">
              Risk assessments help ensure that decisions about youth aren’t
              made based on fear, assumption, or bias. Instead, they’re made on
              structured criteria proven to correlate with outcomes like
              re-offense, treatment responsiveness, and diversion success.
            </p>
            <p className="mt-2 text-sm italic text-slate-500">
              According to the Annie E. Casey Foundation, jurisdictions that
              implement validated tools see a reduction in unnecessary detention
              by up to 40%.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🛠️ Commonly Used Tools Across States
            </h2>
            <ul className="list-disc pl-6 mt-3">
              <li>
                <strong>SAVRY</strong>: Structured Assessment of Violence Risk
                in Youth
                <br />
                <span className="text-sm text-slate-500">
                  Used in Arkansas, this tool focuses on dynamic and static risk
                  factors. Emphasis is placed on protective traits such as
                  empathy, peer relationships, and future orientation.
                </span>
              </li>
              <li className="mt-2">
                <strong>RAI</strong>: Risk Assessment Instrument
                <br />
                <span className="text-sm text-slate-500">
                  Oklahoma uses this as a gatekeeper for detention. Youth
                  scoring below a threshold must be diverted. The goal is to
                  prevent default-to-detention errors.
                </span>
              </li>
              <li className="mt-2">
                <strong>YLS/CMI</strong>: Youth Level of Service / Case
                Management Inventory
                <br />
                <span className="text-sm text-slate-500">
                  Louisiana’s preferred tool. Highly detailed, designed to
                  inform service planning, not just legal decisions.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🎯 How They Impact Decisions
            </h2>
            <p className="mt-2">
              These tools don’t determine outcomes — they *inform them*. The
              final decision is still made through collaboration with legal
              parties, MDT (multi-disciplinary teams), and court officials.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                <strong>Low Scores</strong>
                <p className="text-sm mt-1">
                  Youth is referred to diversion or community-based support.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                <strong>Moderate Scores</strong>
                <p className="text-sm mt-1">
                  Assigned to probation and monitored service plans.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                <strong>High Scores</strong>
                <p className="text-sm mt-1">
                  Reviewed for court intervention or possible commitment.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm italic text-slate-500">
              Missouri’s model warns that over-reliance on scores alone
              undermines the therapeutic nature of juvenile justice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🧩 Ethics and Cautions
            </h2>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Scores should never be the sole factor in confinement decisions.
              </li>
              <li>
                Bias audits must be run annually to ensure cultural fairness.
              </li>
              <li>
                Every tool must be updated to reflect evolving psychological and
                sociological research.
              </li>
            </ul>
            <p className="mt-2 text-sm text-slate-500 italic">
              One study in Texas found racial disproportionality in tool
              application until community stakeholders were brought into
              oversight.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200 mt-10">
            <p className="text-sm text-slate-500 italic">
              Risk tools do not predict future behavior. They highlight current
              needs, structure supervision, and offer a map for the safest, most
              productive pathway forward.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/docs/custody-diversion-paths"
              className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              ⚖️ Continue to Custody vs. Diversion
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
