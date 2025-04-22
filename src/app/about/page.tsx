"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Second Chance Youth Map
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Mapping the juvenile justice journey — and empowering the people who
            guide it.
          </p>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            <strong>
              SCYM exists to chart the journey of youth through the justice
              system —
            </strong>{" "}
            and to equip those who walk beside them with clarity, compassion,
            and tools for change.
          </p>
        </div>
      </section>

      {/* PURPOSE + CONCEPT */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              What We’re Building
            </h3>
            <p className="text-slate-700 leading-relaxed">
              SCYM is not just a dashboard. It’s a living, evolving map of how
              youth move through complex systems — from school referrals to
              reentry. It documents who helps, when they intervene, and how
              policies, tools, and people shape outcomes.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              It brings together data, design, and human-centered storytelling
              to support everyone from intake officers and public defenders to
              residential staff and workforce mentors.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-slate-200 p-6">
            <h4 className="text-lg font-semibold text-blue-700 mb-2">
              Why It Matters
            </h4>
            <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
              <li>
                Too many systems operate in silos — SCYM bridges the gaps.
              </li>
              <li>
                Professionals need tools that reflect their real
                responsibilities.
              </li>
              <li>
                Youth deserve a system that works together on their behalf.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* HOW WE BUILT THE MAP */}
      <section className="py-20 px-6 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            How We Built the Map
          </h3>
          <div className="grid md:grid-cols-2 gap-10 items-start text-slate-700">
            <div>
              <p className="mb-4 leading-relaxed">
                SCYM began as a collaborative civic-tech experiment: what if we
                mapped not just one state’s juvenile system, but compared them
                side by side? What if we broke down every intake form, tool,
                risk screen, and legal policy — and built a{" "}
                <strong>shared matrix</strong> of who does what, when, and how?
              </p>
              <p className="leading-relaxed">
                We started with <strong>Arkansas</strong> — then expanded to its
                neighbors:
                <em>
                  {" "}
                  Texas, Louisiana, Mississippi, Missouri, Tennessee, Oklahoma
                </em>
                . We documented tools, forms, court patterns, placement
                practices, and policy gaps. And from that, we built a dynamic,
                visual map of what works — and what still needs work.
              </p>

              {/* STYLIZED STATE GRID */}
              <div className="mt-10 text-center">
                <h4 className="text-lg font-semibold text-slate-700 mb-2">
                  Cross-State Comparison Includes:
                </h4>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {[
                    "Arkansas",
                    "Texas",
                    "Louisiana",
                    "Mississippi",
                    "Missouri",
                    "Tennessee",
                    "Oklahoma",
                  ].map((state) => (
                    <span
                      key={state}
                      className="px-4 py-2 text-sm font-medium text-blue-800 bg-blue-100 border border-blue-200 rounded-full shadow-sm"
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* MATRIX CARD */}
            <div className="bg-white rounded-lg shadow border border-slate-200 p-6">
              <h4 className="text-blue-700 font-semibold mb-2 text-lg">
                The Matrix & Glossary
              </h4>
              <ul className="list-disc list-inside text-sm space-y-2">
                <li>
                  <strong>📊 The Matrix:</strong> A role-by-role comparison of
                  state intake tools, decision points, and form fields.
                </li>
                <li>
                  <strong>📚 The Glossary:</strong> A shared language repository
                  so everyone — from intake officers to advocates — can speak
                  the same system.
                </li>
                <li>
                  <strong>🔍 Research Driven:</strong> Every entry is sourced
                  from real policies, court documents, intake handbooks, and
                  state manuals.
                </li>
              </ul>
              <p className="mt-4 text-sm text-blue-600">
                <Link href="/matrix" className="underline hover:text-blue-800">
                  View the Matrix →
                </Link>{" "}
                |{" "}
                <Link
                  href="/glossary"
                  className="underline hover:text-blue-800"
                >
                  Browse the Glossary →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Voices on the Path
          </h3>
          <p className="text-center text-slate-700 text-base max-w-3xl mx-auto mb-10">
            The map isn’t just data — it&apos;s human. These are the professionals
            who stand at each stage of a youth&apos;s journey.
            <strong>
              SCYM listens to them, learns from them, and builds tools to
              support them.
            </strong>
            From intake to reentry, these roles shape how justice is experienced
            — and they deserve systems that reflect the depth of their work.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-center text-slate-700">
            {[
              { icon: "🛂", role: "Intake Officers" },
              { icon: "⚖️", role: "Judges & Defense Attorneys" },
              { icon: "🏫", role: "Educators" },
              { icon: "🤝", role: "Advocates & Mentors" },
              { icon: "🏠", role: "Residential Staff" },
              { icon: "💼", role: "Workforce Mentors" },
            ].map((r) => (
              <div
                key={r.role}
                className="bg-slate-100 rounded-lg shadow-sm p-6 border border-slate-200"
              >
                <div className="text-3xl mb-2">{r.icon}</div>
                <div className="font-semibold">{r.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Want to learn more?</h3>
          <p className="mb-8 text-lg">
            Explore the <strong>Voices</strong> behind the system, or dive into
            the data that’s changing how we support youth.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/voices"
              className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-100 transition"
            >
              🗣️ Meet the Team
            </Link>
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              📊 Explore the Dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
