"use client";

import Link from "next/link";

const voices = [
  {
    title: "Intake Officers",
    path: "/voices/intake-officers",
    emoji: "🛂",
    intro:
      "The gatekeepers of every youth journey — where compassion meets assessment.",
  },
  {
    title: "Probation Officers",
    path: "/voices/probation-officers",
    emoji: "🧭",
    intro:
      "Balancing accountability with mentorship. You walk beside youth through supervision and support.",
  },
  {
    title: "Judges",
    path: "/voices/judges",
    emoji: "⚖️",
    intro:
      "Your decisions define trajectories. You weigh law, data, and humanity every day.",
  },
  {
    title: "Educators",
    path: "/voices/educators",
    emoji: "🏫",
    intro:
      "You see the patterns first — truancy, IEPs, unmet needs. You are the early responders.",
  },
  {
    title: "Mental Health Professionals",
    path: "/voices/mental-health",
    emoji: "🧠",
    intro:
      "You translate pain into possibility. Your screenings, sessions, and overrides guide the system.",
  },
  {
    title: "Community Advocates",
    path: "/voices/community-advocates",
    emoji: "🤝",
    intro:
      "You show up when others don’t. You connect youth to hope, to mentorship, to healing.",
  },
  {
    title: "Reentry & Aftercare Teams",
    path: "/voices/reentry",
    emoji: "🏡",
    intro:
      "You don’t just close the file. You help youth step into something new — and stay there.",
  },
];

export default function VoicesHomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-900">SCYM Voices</h1>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            This is more than a dashboard — it&apos;s a reflection of those who
            shape justice from the inside out. Explore the real-world impact of
            every role that guides youth through the system.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {voices.map((voice) => (
            <Link
              key={voice.path}
              href={voice.path}
              className="block bg-slate-50 border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-200 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
                <span>{voice.emoji}</span> {voice.title}
              </h2>
              <p className="mt-2 text-slate-600 text-sm">{voice.intro}</p>
              <p className="mt-3 text-sm text-blue-600 font-medium">
                → Read Their Story
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
