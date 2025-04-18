// src/app/docs/intake-workflow/page.tsx

import Link from "next/link";

export default function IntakeWorkflowPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20 text-slate-700">
      {/* HERO HEADER */}
      <header className="bg-blue-900 text-white py-16 text-center px-4 shadow-md">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex justify-center items-center gap-3">
          <span>🧭</span> Intake Workflow
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl font-light">
          The <em>Second Chance Youth Map</em> intake flow is built on a blend of best
          practices, legal mandates, and decades of learned wisdom. What you’re
          reading here isn’t just a form — it’s the <strong>first path a youth takes toward transformation.</strong>
        </p>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <section className="space-y-12 leading-relaxed text-base">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🚨 Step 1: Youth Encounter / Referral
            </h2>
            <p className="mt-2">
              Intake begins with a trigger — a referral, arrest, or school citation. The youth is at a crossroads,
              and how their journey begins will deeply shape their trajectory.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Arrest, citation, school referral, or probation violation</li>
              <li>
                Initial data collected:
                <ul className="list-disc pl-6 mt-1">
                  <li>Youth’s full name, date of birth, demographics</li>
                  <li>Referral type and source agency</li>
                  <li>Current school status</li>
                </ul>
              </li>
            </ul>
            <p className="mt-2 italic text-sm text-slate-500">
              Arkansas and Oklahoma highlight the importance of referral accuracy, as early mistakes can derail the
              entire diversion process.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              📋 Step 2: Intake Form Completion
            </h2>
            <p className="mt-2">
              This form isn’t merely a checklist — it’s a diagnostic intake tool that drives downstream decisions.
              Missouri’s youth services model stresses <strong>therapeutic alignment</strong> and tailoring services
              from the very first contact.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Offense details & context
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Risk assessment tool results (SAVRY, RAI, etc.)
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Educational profile (IEP/504, credits, attendance)
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Key stakeholders (guardian, school rep, case manager)
              </div>
            </div>
            <p className="mt-4 italic text-sm text-slate-500">
              Texas and Louisiana&apos;s structured intake models were foundational in shaping this structure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🧠 Step 3: Risk Assessment Integration
            </h2>
            <p className="mt-2">
              Every state we studied uses structured decision-making tools to increase fairness. But these tools must
              be viewed as guides — not gospel. <strong>Judgment and nuance matter.</strong>
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>SAVRY (Arkansas): Structured for violent-risk prediction</li>
              <li>RAI (Oklahoma): Used at intake to avoid over-detention</li>
              <li>YLS/CMI (Louisiana): Focused on service pairing</li>
            </ul>
            <p className="mt-2 text-sm text-slate-500">
              Risk tiering aligns with diversion or custody tracks. No single score should determine a youth’s fate.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              ⚖️ Step 4: Recommendation & Legal Review
            </h2>
            <p className="mt-2">
              After form completion, the intake officer proposes a pathway. Multidisciplinary Teams (MDTs) or
              Juvenile Judges then review, adjust, or affirm the recommendation.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Diversion (restorative or treatment-based)</li>
              <li>Probation (supervised or community-based)</li>
              <li>State Custody (90-day assessment period)</li>
            </ul>
            <p className="mt-2 italic text-sm text-slate-500">
              Louisiana’s MDT framework ensures decisions are vetted by education, mental health, legal, and probation
              experts — not just one department.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🏫 Step 5: Education Continuity Planning
            </h2>
            <p className="mt-2">
              Every youth has a right to uninterrupted learning. Missouri, Texas, and Arkansas emphasize tracking
              credits, ensuring IEP/504 follow-through, and re-enrolling quickly after placement.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Credits earned or lost during time away</li>
              <li>IEP and learning accommodations history</li>
              <li>Truancy and dropout risk indicators</li>
            </ul>
            <p className="mt-2 text-sm text-slate-500">
              Oklahoma pioneered real-time educational dashboards that follow youth between community and custody.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              📝 Step 6: Final Review & Submission
            </h2>
            <p className="mt-2">
              The completed form is exported as a standardized PDF packet that becomes part of the youth’s official
              record — reviewed by:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Juvenile Court Judge</li>
              <li>Probation Officer</li>
              <li>Educational Liaison</li>
              <li>Case Management Supervisor</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-200 mt-10">
            <p className="text-sm text-slate-500 italic">
              This intake system reflects the best practices of multiple states — blended to support flexibility,
              reduce bias, and promote clarity.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/docs/risk-assessments"
              className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              📊 Continue to Risk Assessments
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
