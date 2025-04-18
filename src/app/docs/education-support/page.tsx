import Link from "next/link";

export default function EducationSupportPage() {
  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen pb-20">
      {/* Hero Header */}
      <header className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          🎓 Education Support
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Because learning shouldn&apos;t stop when justice begins. Every youth
          deserves an unbroken academic path.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-16">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📘 Education is Protective
          </h2>
          <p>
            Educational stability is one of the most powerful buffers against
            recidivism. States like Missouri and Texas integrate education
            tracking *into* juvenile intake tools — not as an afterthought, but
            as a backbone.
          </p>
        </section>

        {/* Academic Snapshot */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🧾 What to Capture at Intake
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                🎓 Current School Status
              </h3>
              Enrolled, withdrawn, suspended, expelled
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                📚 Grade Level
              </h3>
              Include last completed grade, current grade, or GED program
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                📖 IEP / 504 Plan
              </h3>
              Capture the presence of a support plan — IDEA protections follow
              the youth
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                📈 Credits Earned
              </h3>
              Even estimated credit count helps determine educational placement
              during custody
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                ⏰ Truancy / Attendance
              </h3>
              Patterns of absence, suspension days, frequent tardiness
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                🧠 Learning Style
              </h3>
              Self-reported or observed — visual, auditory, ELL needs, attention
              concerns
            </div>
          </div>
        </section>

        {/* Policy Reference */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📜 Legal & Procedural Supports
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>
                IDEA (Individuals with Disabilities Education Act)
              </strong>{" "}
              — ensures continuation of special education during placement
            </li>
            <li>
              <strong>FERPA</strong> — protects the privacy of educational
              records
            </li>
            <li>
              <strong>Every Student Succeeds Act (ESSA)</strong> — includes
              specific protections for youth in foster care and juvenile justice
              systems
            </li>
            <li>
              <strong>McKinney-Vento Act</strong> — helps if a youth is deemed
              homeless or in transitional housing
            </li>
          </ul>
        </section>

        {/* Design Insight */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🛠️ Design Notes
          </h2>
          <p>
            Our system asks these questions early in the intake process to
            ensure academic support is triggered *before* a youth’s trajectory
            is disrupted. Intake staff, probation, and educational liaisons can
            all collaborate here.
          </p>
        </section>

        {/* Quote */}
        <section className="text-center italic text-slate-500 pt-6 border-t border-slate-200">
          “A detained youth without an IEP transition plan is a lost scholar.”
          <br />
          <span className="text-sm">
            — Missouri Education Justice Audit, 2021
          </span>
        </section>
        <div className="mt-8">
          <Link
            href="/docs/legal-forms"
            className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            📝 Continue to Legal Forms and Privacy
          </Link>
        </div>        
      </main>
    </div>
  );
}
