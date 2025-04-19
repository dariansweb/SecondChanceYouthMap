import Link from "next/link";

export default function DocsHome() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <section className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            📘 Second Chance Youth Map Docs
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the foundations, flow, and features behind SCYM — a
            cross-state juvenile justice toolkit that blends real-world practice
            with modern design, transparency, and second chances.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "🧭 Intake Workflow",
              href: "/docs/intake-workflow",
              desc: "Every step of the youth intake journey — now with fields pulled directly from 7+ state systems.",
            },
            {
              title: "📊 Risk Assessments",
              href: "/docs/risk-assessments",
              desc: "SAVRY, RAI, YASI, YLS/CMI — explained with scoring impact and contextual usage across jurisdictions.",
            },
            {
              title: "⚖️ Custody vs. Diversion",
              href: "/docs/custody-diversion-paths",
              desc: "Which path, why, and when — including MDT logic and structured pathway decisions.",
            },
            {
              title: "🎓 Education Support",
              href: "/docs/education-support",
              desc: "IEPs, truancy, grade recovery, learning style insights — how school data supports justice decisions.",
            },
            {
              title: "📝 Legal Forms & Privacy",
              href: "/docs/legal-forms",
              desc: "FERPA, HIPAA, IDEA, and court orders. Consent, sharing, and safeguarding sensitive youth data.",
            },
            {
              title: "📚 References",
              href: "/docs/references",
              desc: "The citations, models, and research that fuel the philosophy and structure of SCYM.",
            },
            {
              title: "📚 Matrix: State Comparisons",
              href: "/matrix",
              desc: "Explore how Arkansas, Texas, Louisiana, and more approach decisions — side by side.",
            },
            {
              title: "📖 Glossary of Terms",
              href: "/glossary",
              desc: "Tap into plain-language definitions for tools, acronyms, roles, and programs used across systems.",
            },
          ].map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group border border-slate-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition duration-200 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold text-blue-700 group-hover:underline">
                {doc.title}
              </h3>
              <p className="text-slate-600 mt-2 text-sm">{doc.desc}</p>
            </Link>
          ))}
        </section>

        <section className="mt-20 text-center text-slate-500 text-sm max-w-xl mx-auto">
          <p>
            “A map is not the territory — but it can change the way we walk
            through it.”
          </p>
          <p className="mt-1">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </section>
      </main>
    </div>
  );
}
