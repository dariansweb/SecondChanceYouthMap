export default function RiskAssessmentsPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold flex justify-center items-center gap-4">
          📊 Risk Assessments
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Tools that guide intake decisions, rooted in evidence and fairness.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <p className="text-slate-700 text-lg">
          Risk assessment tools help intake officers determine the likelihood
          of re-offense and guide case pathway decisions. Tools must be valid,
          culturally neutral, and legally defensible.
        </p>

        {/* Tools Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            🛠️ Commonly Used Tools
          </h2>
          <ul className="list-disc pl-6 mt-3 text-slate-700 space-y-1">
            <li>
              <strong className="text-slate-900">SAVRY:</strong> Structured Assessment of Violence Risk in Youth
            </li>
            <li>
              <strong className="text-slate-900">RAI:</strong> Risk Assessment Instrument
            </li>
            <li>
              <strong className="text-slate-900">YLS/CMI:</strong> Youth Level of Service / Case Management Inventory
            </li>
          </ul>
        </div>

        {/* Use in Decision Making */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            🎯 Use in Decision Making
          </h2>
          <ul className="list-disc pl-6 mt-3 text-slate-700 space-y-1">
            <li>Low scores = Diversion or community-based support</li>
            <li>Moderate scores = Probation pathway</li>
            <li>High scores = MDT and court review for custody</li>
          </ul>
          <p className="italic text-slate-600 mt-2">
            Scores must never be used alone to justify confinement — they support,
            not replace, professional judgment.
          </p>
        </div>
      </section>
    </main>
  );
}
