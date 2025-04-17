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
            and data-driven app.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🧭 What is This?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            This project is the result of deep research across Arkansas and its
            surrounding states to create a unified and replicable model for
            juvenile intake, diversion, and custody planning.
          </p>
          <p className="mt-4">
            Youth enter the system at a crossroads. This app guides intake
            officers and staff to document every necessary piece — risk scores,
            educational needs, guardian info, caseworkers, and more — while
            dynamically suggesting whether a youth’s pathway should be
            Diversion, Probation, or State Custody.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🧠 What Inspired It?
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>
              <strong>Arkansas</strong>: Risk-based commitments (SAVRY), 90-day
              treatment window
            </li>
            <li>
              <strong>Texas</strong>: JCMS system, structured diversion forms
            </li>
            <li>
              <strong>Missouri</strong>: The Missouri Model – short-term
              therapeutic programming
            </li>
            <li>
              <strong>Louisiana</strong>: Family engagement + MDT decision trees
            </li>
            <li>
              <strong>Oklahoma</strong>: Real-time data entry and bed tracking
            </li>
          </ul>
        </section>

        <section className="flex flex-col sm:flex-row justify-center gap-4 text-center mt-8">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 hover:border-blue-700 font-semibold text-lg px-6 py-3 rounded-lg shadow-sm transition duration-200"
          >
            📘 View Documentation
          </Link>

          <Link
            href="/intake"
            className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white hover:bg-blue-800 font-semibold text-lg px-6 py-3 rounded-lg shadow-sm transition duration-200"
          >
            🚀 Begin Intake Survey
          </Link>
        </section>
      </div>

      <footer className="text-center text-sm text-slate-500 mt-12 py-6 border-t border-slate-200">
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
