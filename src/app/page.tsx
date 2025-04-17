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
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
            Second Chance Youth Map
          </h1>
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

        <section className="text-center">
          <Link
            href="/intake"
            className="inline-block bg-blue-700 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            🚀 Begin Intake Survey
          </Link>
        </section>
      </div>

      <footer className="text-center text-sm text-slate-500 py-10 border-t border-slate-200 mt-20">
        © {new Date().getFullYear()} Second Chance Youth Map · Built with 💙 by
        DYS & ChatGPT
      </footer>
    </main>
  );
}
