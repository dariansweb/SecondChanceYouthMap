import Link from "next/link";

export default function CustodyDiversionPage() {
  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen pb-20">
      {/* Hero Header */}
      <header className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          ⚖️ Custody vs. Diversion
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          At the pivotal moment of intake, this decision determines a
          youth&apos;s path — toward confinement or toward community-centered
          transformation.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-16">
        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🧠 Why This Step Matters
          </h2>
          <p>
            This isn’t about paperwork — it’s about life-altering consequences.
            The choice to divert or detain must be built on data, legality, and
            compassion. Every state we studied made one truth clear:
            <strong>
              {" "}
              detention should be rare, documented, and ethically defensible
            </strong>
            .
          </p>
        </section>

        {/* Critical Criteria */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📋 Critical Decision Criteria
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Legal Eligibility</strong> – Does the charge allow for
              custody?
            </li>
            <li>
              <strong>Risk Score</strong> – What does the SAVRY / RAI / YLS/CMI
              indicate?
            </li>
            <li>
              <strong>Protective Factors</strong> – Is there a guardian or
              support system in place?
            </li>
            <li>
              <strong>Community Resources</strong> – Are there diversion
              alternatives available?
            </li>
          </ul>
        </section>

        {/* Data Table */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🧾 Data Intake Grid
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">📄 Legal</h3>
              Charge level, prior offenses, jurisdictional eligibility
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">🧪 Risk Tool</h3>
              SAVRY / RAI / YLS/CMI score breakdown with thresholds
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                🏠 Environment
              </h3>
              Home stability, safe housing, guardianship
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">🎓 Education</h3>
              IEP/504, truancy concerns, credit status
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                🧍 Stakeholders
              </h3>
              School, caseworkers, probation, parent(s)
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                🧩 Prior Interventions
              </h3>
              History of diversion, therapy, or program participation
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            ✅ Detention Threshold Checklist
          </h2>
          <p className="mb-4 italic text-slate-600">
            Detain only if all of the following are true:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>Youth poses imminent harm to others or self</li>
            <li>No safe alternative living arrangement exists</li>
            <li>Court or judge mandates hold</li>
            <li>All diversion options have been documented and declined</li>
          </ul>
        </section>

        {/* Collaboration */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            👥 MDT Review Required
          </h2>
          <p>
            Missouri, Louisiana, and Arkansas require custody decisions to be
            reviewed by a <strong>multi-disciplinary team</strong> (MDT). This
            ensures no one person decides alone.
          </p>
        </section>

        {/* Quote */}
        <section className="text-center italic text-slate-500 pt-6 border-t border-slate-200">
          “Every youth placed in detention who could have succeeded in diversion
          is an institutional failure.”
          <br />
          <span className="text-sm">— Texas Diversion Study, 2020</span>
        </section>
        <div className="mt-8">
          <Link
            href="/docs/education-support"
            className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            🎓 Continue to Education Support
          </Link>
        </div>
      </main>
    </div>
  );
}
