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
          The <em>Second Chance Youth Map</em> intake flow is grounded in best practices across seven states — designed to guide, not just gather.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <section className="space-y-12 leading-relaxed text-base">

          {/* STEP 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🚨 Step 1: Youth Encounter / Referral
            </h2>
            <p className="mt-2">
              A youth enters the system via a catalyst — arrest, school report, or self-disclosure. At this initial threshold, accurate documentation is critical.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Referral types: arrest, citation, probation violation, school-based, self-report</li>
              <li>Initial data includes:
                <ul className="list-disc pl-6 mt-1">
                  <li>Full name, date of birth, demographics</li>
                  <li>Referral type and originating agency</li>
                  <li>Intake date and intake officer</li>
                </ul>
              </li>
            </ul>
            <p className="mt-2 italic text-sm text-slate-500">
              Both Arkansas and Tennessee stress the importance of early referral precision to avoid misclassification and barriers to diversion.
            </p>
          </div>

          {/* STEP 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              📋 Step 2: Intake Form Completion
            </h2>
            <p className="mt-2">
              This isn’t just form-filling — it’s a structured diagnostic. Inputs shape what comes next. Texas and Louisiana provided blueprints for intake modularity and flexibility.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Offense type, date, severity, and contextual notes
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Risk assessment score + tool used (SAVRY, RAI, YASI, etc.)
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Contacts: Guardians, school staff, case managers, judges
              </div>
              <div className="bg-white p-4 rounded shadow-sm border border-slate-200">
                Education: Current status, credits, IEP/504, truancy
              </div>
            </div>
            <p className="mt-4 italic text-sm text-slate-500">
              Dynamic fields adjust based on risk, legal history, and support needs.
            </p>
          </div>

          {/* STEP 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🧠 Step 3: Risk Assessment Integration
            </h2>
            <p className="mt-2">
              Each state utilizes some form of structured risk or needs assessment — but tools vary. SCYM allows intake officers to log the tool used and record the resulting tier or score.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>SAVRY (AR) – violence risk & structured reoffense prediction</li>
              <li>RAI (TX, OK) – intake triage & detention mitigation</li>
              <li>YLS/CMI (MO, LA) – services alignment & intervention planning</li>
              <li>YASI (MS) – youth strengths and needs inventory</li>
            </ul>
            <p className="mt-2 text-sm text-slate-500">
              Scores guide the “track” — diversion, probation, or commitment — but do not dictate outcomes alone.
            </p>
          </div>

          {/* STEP 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              ⚖️ Step 4: Recommendation & MDT Review
            </h2>
            <p className="mt-2">
              The form culminates in a proposed pathway. A multidisciplinary team (MDT) or judge uses the full record to validate or modify that recommendation.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Diversion (restorative, outpatient, or informal adjustment)</li>
              <li>Probation (community-based with supports)</li>
              <li>State Custody (with 90-day assessment or long-term commitment)</li>
              <li>Detention (short-term holding, if necessary)</li>
            </ul>
            <p className="mt-2 text-sm italic text-slate-500">
              Justification notes, next court date, restitution need, and youth willingness are included.
            </p>
          </div>

          {/* STEP 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              🏫 Step 5: Education Continuity Planning
            </h2>
            <p className="mt-2">
              A robust education snapshot travels with the youth. SCYM captures enrollment status, academic progress, truancy indicators, and support programs to ensure no learning is lost.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>IEP/504 status, earned credits, and truancy history</li>
              <li>Learning style and classroom support needs</li>
              <li>Participation in ESL, vocational, or special programs</li>
              <li>Suspension dates and recent discipline notes (optional)</li>
            </ul>
            <p className="mt-2 text-sm text-slate-500">
              Mississippi and Missouri emphasize real-time academic data in placement planning.
            </p>
          </div>

          {/* STEP 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              📝 Step 6: Final Review & Submission
            </h2>
            <p className="mt-2">
              The completed form is automatically converted into a PDF summary, routed to all necessary stakeholders:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Juvenile Court Judge</li>
              <li>Probation Officer / Caseworker</li>
              <li>Education Liaison</li>
              <li>Behavioral or Health Coordinator</li>
            </ul>
            <p className="mt-2 text-sm text-slate-500">
              Forms are exportable and secure — available for recordkeeping, hearings, or team reviews.
            </p>
          </div>

          {/* FINAL THOUGHT */}
          <div className="pt-6 border-t border-slate-200 mt-10">
            <p className="text-sm text-slate-500 italic">
              This intake system reflects the convergence of seven state systems —
              unified into one modern workflow that prioritizes fairness, flexibility, and follow-through.
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
