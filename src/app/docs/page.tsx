import Link from "next/link";

export default function DocsHome() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 prose prose-slate bg-white text-slate-800 p-8 rounded shadow">
      <section className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
          📘 Second Chance Youth Map Docs
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore the philosophy, models, and design logic behind the SCYM
          platform. Built from real practices. Designed for youth. Open for
          everyone.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "🧭 Intake Workflow",
            href: "/docs/intake-workflow",
            desc: "Step-by-step breakdown of the full intake process, from referral to recommendation.",
          },
          {
            title: "📊 Risk Assessments",
            href: "/docs/risk-assessments",
            desc: "SAVRY, RAI, YLS/CMI — tools, scoring tiers, and decision impact explained.",
          },
          {
            title: "⚖️ Custody vs. Diversion",
            href: "/docs/custody-diversion-paths",
            desc: "How youth are routed and why. Decision criteria, pathways, and MDT logic.",
          },
          {
            title: "🎓 Education Support",
            href: "/docs/education-support",
            desc: "Maintaining IEPs, credit continuity, and academic lifelines through every path.",
          },
          {
            title: "📝 Legal Forms & Privacy",
            href: "/docs/legal-forms",
            desc: "FERPA, HIPAA, IDEA, court compliance. Consent forms and safeguards.",
          },
          {
            title: "📚 References",
            href: "/docs/references",
            desc: "Citations, laws, tools, and inspiration that shaped this system.",
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
  );
}
