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
          Learning doesn&apos;t stop when justice begins. SCYM ensures every youth’s
          academic story is seen, supported, and sustained.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-16">
        {/* Education as Stabilizer */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📘 Education is Protective
          </h2>
          <p>
            From Arkansas to Missouri to Texas, one principle rings true:
            education is the greatest stabilizer in a youth’s life. It is both
            an anchor and a launchpad. SCYM captures educational factors *at
            intake* to ensure nothing interrupts that momentum.
          </p>
        </section>

        {/* Academic Snapshot */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🧾 What to Capture at Intake
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            {[
              {
                icon: "🎓",
                title: "Current School Status",
                desc: "Enrolled, suspended, expelled, withdrawn, or unknown",
              },
              {
                icon: "📚",
                title: "Grade Level",
                desc: "Include current grade, GED, or alternative programs",
              },
              {
                icon: "📖",
                title: "IEP / 504 Plan",
                desc: "Identify any formal educational supports and accommodations",
              },
              {
                icon: "📈",
                title: "Credits Earned",
                desc: "Estimates help determine placement alignment if removed from current school",
              },
              {
                icon: "⏰",
                title: "Attendance & Truancy",
                desc: "Missed days, chronic lateness, prior suspensions or absences",
              },
              {
                icon: "🧠",
                title: "Learning Profile",
                desc: "Visual learner, ELL needs, attention challenges, reading/writing fluency",
              },
              {
                icon: "📞",
                title: "School Contact",
                desc: "Counselor, IEP coordinator, or principal name and email (if known)",
              },
              {
                icon: "🎒",
                title: "Special Programs",
                desc: "ESL, Gifted, Vocational, Work-Study, or Alternative Ed",
              },
              {
                icon: "📅",
                title: "Discipline History",
                desc: "Recent suspension or expulsion dates, if available",
              },
              {
                icon: "🌍",
                title: "Contact Region",
                desc: "Capture the school’s county/state in case of out-of-region placement planning",
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

        {/* Policy Anchor */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📜 Legal & Procedural Frameworks
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>
                IDEA (Individuals with Disabilities Education Act)
              </strong>{" "}
              — ensures continuation of special education services across
              placements
            </li>
            <li>
              <strong>FERPA</strong> — mandates privacy and secure data transfer
              of academic records
            </li>
            <li>
              <strong>ESSA (Every Student Succeeds Act)</strong> — requires
              timely re-enrollment and protections for justice-involved youth
            </li>
            <li>
              <strong>McKinney-Vento Act</strong> — supports youth experiencing
              homelessness or unstable housing transitions
            </li>
          </ul>
        </section>

        {/* System Design */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🛠️ Design Considerations
          </h2>
          <p>
            SCYM front-loads academic intake to avoid last-minute scrambles.
            Whether youth are routed to detention or diversion, their learning
            plan stays visible to every team member — intake workers, probation
            officers, educators, and case managers alike.
          </p>
        </section>

        {/* Inspiration */}
        <section className="text-center italic text-slate-500 pt-6 border-t border-slate-200">
          “A detained youth without an IEP transition plan is a lost scholar.”
          <br />
          <span className="text-sm">
            — Missouri Education Justice Audit, 2021
          </span>
        </section>

        {/* CTA */}
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
