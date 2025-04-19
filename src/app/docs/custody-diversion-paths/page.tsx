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
          This is the fork in the road — the defining moment that determines
          whether a youth is redirected back into community or placed in confinement.
          SCYM makes this judgment traceable, collaborative, and accountable.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-16">
        {/* Intro */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🧠 Why This Step Matters
          </h2>
          <p>
            This is more than a checkbox. It’s a philosophical and ethical fulcrum. A premature custody placement can upend a youth’s trajectory — while timely, thoughtful diversion can restore hope and build trust. In every state we studied — from Texas to Tennessee — one lesson echoed:
            <strong className="text-blue-700"> detention must be rare, necessary, and humanely justified.</strong>
          </p>
        </section>

        {/* Decision Criteria */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📋 Critical Decision Criteria
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Legal Eligibility</strong> — Does the charge qualify for secure custody?</li>
            <li><strong>Risk Score</strong> — Is the youth’s risk tier supported by the assessment tool?</li>
            <li><strong>Protective Factors</strong> — Are stable housing and adult supervision confirmed?</li>
            <li><strong>Community Resources</strong> — Can restorative or treatment-based diversion meet the need?</li>
          </ul>
        </section>

        {/* Intake Grid */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🧾 SCYM Decision Grid
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            {[
              {
                icon: "📄",
                title: "Legal",
                desc: "Charge level, prior offenses, jurisdictional limits",
              },
              {
                icon: "🧪",
                title: "Risk Tool",
                desc: "Validated score (SAVRY, RAI, YASI, YLS/CMI)",
              },
              {
                icon: "🏠",
                title: "Environment",
                desc: "Housing stability, guardianship, family risk",
              },
              {
                icon: "🎓",
                title: "Education",
                desc: "IEP/504 status, truancy history, school engagement",
              },
              {
                icon: "🧍",
                title: "Stakeholders",
                desc: "Case manager, judge, counselor, parent/guardian",
              },
              {
                icon: "🧩",
                title: "Prior Interventions",
                desc: "Diversion attempts, therapy history, past placements",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border rounded p-4 shadow"
              >
                <h3 className="font-semibold text-blue-700 mb-2">
                  {item.icon} {item.title}
                </h3>
                {item.desc}
              </div>
            ))}
          </div>
        </section>

        {/* Threshold Checklist */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            ✅ Custody Threshold Checklist
          </h2>
          <p className="mb-4 italic text-slate-600">
            Secure detention should only be considered if <strong>all</strong> of the following conditions are true:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>Youth poses imminent risk to others or themselves</li>
            <li>No safe alternative living arrangement exists</li>
            <li>Court or judge has legally mandated the hold</li>
            <li>All diversion options have been explored and documented</li>
          </ul>
        </section>

        {/* MDT Requirement */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            👥 MDT Review Required
          </h2>
          <p>
            States like Missouri, Louisiana, and Arkansas use a <strong>Multi-Disciplinary Team (MDT)</strong> to ensure custody decisions are not made in isolation. SCYM enables this collaboration by making every field and justification transparent and printable.
          </p>
        </section>

        {/* Quote */}
        <section className="text-center italic text-slate-500 pt-6 border-t border-slate-200">
          “Every youth placed in detention who could have succeeded in diversion
          is an institutional failure.”
          <br />
          <span className="text-sm">— Texas Diversion Study, 2020</span>
        </section>

        {/* CTA */}
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
