// 🔥 ChatGPT Solo Mode: Activated
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SecondChanceYouthMap",
  description: "Empowering Juvenile Justice with Data, Direction, and Dignity.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <p className="text-xs text-center text-slate-400 mt-2">
        Disclaimer: This is a personal civic tech project and is not an official
        product of DHS or DYS.
      </p>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
            Second Chance Youth Map
          </h1>
          <p className="text-2xl font-semibold text-slate-700 mb-4">
            🌟 Empowering Juvenile Justice with Data, Direction, and Dignity.
          </p>
          <p className="text-lg text-slate-600">
            A modern intake and decision tool for youth justice — combining the
            best practices of seven states into one transparent, compassionate,
            and data-driven platform.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🧭 What is This?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Second Chance Youth Map is more than a form — it&apos;s a reflection
            of the philosophies, workflows, and language shared across juvenile
            justice systems. Designed for intake officers, data teams, and civic
            reformers, this tool brings together **documentation**, **state
            policy comparison**, and **shared vocabulary**.
          </p>
          <p className="mt-4">
            It offers dynamic guidance during intake, and it invites users to
            explore a comprehensive glossary of justice terms, and a cross-state
            **Matrix** of decision points like Diversion, Risk Tools, Education
            Support, and Custody Planning.
          </p>
          <div className="text-center mt-8">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 hover:border-blue-700 font-semibold text-lg px-6 py-3 rounded-lg shadow-sm transition duration-200"
            >
              📘 View Documentation
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            📚 What&apos;s New?
          </h2>
          <ul className="list-disc list-inside list-none text-slate-700 space-y-2">
            <li>
              <strong>🧾 Glossary of Juvenile Justice Terms</strong> — A
              searchable, categorized glossary of over 100 terms, acronyms, and
              policy labels used across the youth justice system — complete with
              definitions, source links, and tags.
            </li>
            <li>
              <strong>📊 Matrix Tool</strong> — Visually compare how 7 Southern
              states handle risk tools, diversion eligibility, legal decision
              points, and reentry processes. Includes hover-to-expand detail
              cards and glossary-rich popups.
            </li>
            <li>
              <strong>📝 Intake Form Prototype</strong> — A full intake
              simulation based on cross-state form research. Tracks education
              flags, custody history, risk instruments, and support systems —
              all exportable as PDF.
            </li>
            <li>
              <strong>📈 SCYM Insights Dashboard</strong> — Live data
              visualizations from our state matrix and research — including
              diversion trends, risk tool consistency, IEP/truancy patterns,
              intake recommendations, and policy confidence scores.
            </li>
            <li>
              <strong>🗣️ Voices Directory</strong> — Real profiles of the people
              who guide youth through the system: intake officers, judges,
              educators, mental health staff, probation officers, advocates,
              residential teams, and reentry mentors — all linked to the data
              they influence.
            </li>
            <li>
              <strong>🧭 “Path to Help” Navigation</strong> — A restructured
              experience to guide professionals, students, and agencies through
              role-specific insights, system touchpoints, and practical tools
              for every stage of the youth journey.
            </li>
            <li>
              <strong>🚀 Voices Tool Dashboard Rebuild</strong> — A fully
              updated workflow hub that now includes 15 interactive role
              profiles (aka “voices”) such as Judge, Intake Officer, Probation,
              Reentry, and Advocate. Each voice is connected to dynamic forms,
              conditional logic flows, and a visual dashboard. You can now
              filter by youth journey phase and view real-time progress stats
              for each role.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🧠 What Inspired It?
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>
              <strong>Arkansas</strong>: Risk-based commitments (SAVRY), 90-day
              treatment windows
            </li>
            <li>
              <strong>Texas</strong>: JCMS system + Risk/Needs Assessment
              (RANA/RAI)
            </li>
            <li>
              <strong>Missouri</strong>: The Missouri Model — therapeutic
              environments
            </li>
            <li>
              <strong>Louisiana</strong>: Family Team Meetings & diversion-first
              decision trees
            </li>
            <li>
              <strong>Oklahoma</strong>: Real-time bed tracking and digital data
              entry
            </li>
            <li>
              <strong>Mississippi & Tennessee</strong>: Informal adjustments and
              family-linked diversion routes
            </li>
          </ul>
          <div className="text-center mt-8">
            <Link
              href="/matrix"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 hover:border-blue-700 font-semibold text-lg px-6 py-3 rounded-lg shadow-sm transition duration-200"
            >
              📊 Explore Matrix
            </Link>
          </div>
        </section>

        {/* ✨ Dashboard Highlights */}
        <section className="mt-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            📈 Real-Time Insights from Across the Region
          </h2>
          <p className="text-center text-slate-600 mb-6 max-w-2xl mx-auto">
            Tap into trends in diversion, risk tools, education supports, and
            custody decisions — all modeled from real practices in Arkansas,
            Texas, Missouri, Louisiana, Oklahoma, Mississippi, and Tennessee.
          </p>

          <div className="text-center mt-8">
            <Link
              href="/dashboard/"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 hover:border-blue-700 font-semibold text-lg px-6 py-3 rounded-lg shadow-sm transition duration-200"
            >
              🔎 Explore Full Dashboard
            </Link>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row justify-center gap-4 text-center mt-24">
          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white hover:bg-blue-800 font-semibold text-lg px-6 py-3 rounded-lg shadow-sm transition duration-200"
          >
            🚀 Begin Intake Survey
          </Link>
        </section>
      </div>

      <footer className="text-center text-sm text-slate-700 mt-12 py-6 border-t border-slate-400">
        <p>
          Built independently by <strong>Darian Ross</strong> — IT Support,
          Arkansas DHS.
        </p>
        <p>
          Inspired by the mission and practices of the{" "}
          <a
            href="https://humanservices.arkansas.gov/divisions-shared-services/youth-services/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Division of Youth Services
          </a>{" "}
          and juvenile justice reform across the region.
        </p>
        <p className="mt-2">
          This application is not an official DHS product and is offered as an
          open-source civic tech prototype.
        </p>
      </footer>
    </main>
  );
}
