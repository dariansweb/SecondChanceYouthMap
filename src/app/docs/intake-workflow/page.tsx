// src/app/docs/intake-workflow/page.tsx
export default function IntakeWorkflowPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <header className="bg-blue-900 text-white py-12 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight">
            🧭 Intake Workflow
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-slate-200">
            A walkthrough of the structured, compassionate, and legally-aligned
            intake process powering the Second Chance Youth Map.
          </p>
        </div>
      </header>

      {/* Content Sections */}
      <main className="max-w-5xl mx-auto px-6 mt-16 space-y-16">
        {/* Step 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            🚨 Step 1: Youth Encounter / Referral
          </h2>
          <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-1">
            <li>Arrest, citation, school referral, or probation violation</li>
            <li>
              Initial data collected:
              <ul className="list-disc list-inside ml-6">
                <li>Youth’s full name, date of birth, demographics</li>
                <li>Referral type, referring agency</li>
                <li>Current school status</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Step 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            📋 Step 2: Intake Form Completion
          </h2>
          <p className="text-slate-700 mb-4">
            Typically completed by an Intake Officer or Case Manager.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Offense details & context",
              "Risk assessment tool results (SAVRY, RAI, etc.)",
              "IEP/504 status, academic standing",
              "Stakeholders (guardian, school, caseworker)",
              "Initial recommendation (diversion, probation, etc.)",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm"
              >
                <p className="text-slate-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Step 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            🧠 Step 3: Risk Assessment Integration
          </h2>
          <ul className="list-disc list-inside text-slate-700 leading-relaxed space-y-1">
            <li>Use of validated, culturally neutral assessment tools</li>
            <li>Clear documentation of scoring thresholds</li>
            <li>Risk levels help guide placement and supervision path</li>
          </ul>
        </section>

        {/* Step 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            ⚖️ Step 4: Recommendation + Legal Review
          </h2>
          <p className="text-slate-700 mb-4">
            Final decision crafted with legal staff and MDT review before
            judicial consideration.
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Diversion Program</li>
            <li>Community Probation</li>
            <li>State Custody / Commitment (up to 90 days)</li>
            <li>Short-Term Detention (with review date)</li>
          </ul>
        </section>

        {/* Step 5 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            🏫 Step 5: Education Continuity Planning
          </h2>
          <p className="text-slate-700">
            Education services must be continued uninterrupted. If the youth is
            placed into custody, an immediate academic placement is assigned.
            Documentation of credits and IEP/504 transfer is required.
          </p>
        </section>

        {/* Step 6 */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            📝 Step 6: Final Review & Submission
          </h2>
          <p className="text-slate-700 mb-2">
            Once reviewed, a final PDF summary is created and securely submitted
            to:
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Juvenile Judge</li>
            <li>Probation Supervisor</li>
            <li>Educational Liaison</li>
          </ul>
        </section>

        <footer className="text-center text-sm text-slate-500 pt-8 border-t border-slate-200">
          <p>
            This workflow was developed using best practices from Arkansas,
            Texas, Missouri, Louisiana, and Oklahoma.
          </p>
        </footer>
      </main>
    </div>
  );
}
