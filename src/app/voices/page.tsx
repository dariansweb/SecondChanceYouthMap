"use client";

import VoiceCard from "@/components/voices/VoiceCard";

const voiceData = {
  entryPoints: [
    {
      title: "Educators",
      href: "/voices/educators",
      emoji: "🏫",
      intro:
        "You see the patterns first — truancy, IEPs, unmet needs. You are the early responders.",
    },
    {
      title: "Parents & Guardians",
      href: "/voices/guardians",
      emoji: "👨‍👩‍👧",
      intro:
        "Before systems step in, you’re the first to notice the struggle — and the first to ask for help.",
    },
  ],
  intake: [
    {
      title: "Intake Officers",
      href: "/voices/intake-officers",
      emoji: "🛂",
      intro:
        "The gatekeepers of every youth journey — where compassion meets assessment.",
    },
    {
      title: "Mental Health Professionals",
      href: "/voices/mental-health",
      emoji: "🧠",
      intro:
        "You translate pain into possibility. Your screenings, sessions, and overrides guide the system.",
    },
  ],
  legal: [
    {
      title: "Judges",
      href: "/voices/judges",
      emoji: "⚖️",
      intro:
        "Your decisions define trajectories. You weigh law, data, and humanity every day.",
    },
    {
      title: "Diversion Program Staff",
      href: "/voices/diversion",
      emoji: "🔁",
      intro:
        "You reroute youth before court ever begins. You offer second chances that prevent system entry.",
    },
    {
      title: "Juvenile Defense Attorneys",
      href: "/voices/defenders",
      emoji: "🛡️",
      intro:
        "You protect futures by slowing down systems. Your defense is more than legal — it’s human.",
    },
  ],
  supervision: [
    {
      title: "Probation Officers",
      href: "/voices/probation-officers",
      emoji: "🧭",
      intro:
        "Balancing accountability with mentorship. You walk beside youth through supervision and support.",
    },
    {
      title: "Community Advocates",
      href: "/voices/community-advocates",
      emoji: "🤝",
      intro:
        "You show up when others don’t. You connect youth to hope, to mentorship, to healing.",
    },
  ],
  residential: [
    {
      title: "Residential Staff",
      href: "/voices/residential",
      emoji: "🏠",
      intro:
        "You show up every morning and every midnight. You’re the stable presence during unstable times.",
    },
  ],
  reentry: [
    {
      title: "Reentry & Aftercare Teams",
      href: "/voices/reentry",
      emoji: "🏡",
      intro:
        "You don’t just close the file. You help youth step into something new — and stay there.",
    },
    {
      title: "Workforce Mentors",
      href: "/voices/workforce",
      emoji: "💼",
      intro:
        "You don’t just talk about second chances — you hire them. You build bridges from survival to purpose.",
    },
  ],
};

const sectionTitles: Record<keyof typeof voiceData, string> = {
  entryPoints: "📍 Entry Points – First to Notice",
  intake: "🔍 Intake & Screening – First to Listen",
  legal: "⚖️ Legal & Disposition – First to Decide",
  supervision: "🧭 Supervision & Support – Walking Beside",
  residential: "🏠 Residential – The Daily Bridge",
  reentry: "🏡 Reentry – Returning to Life",
};

export default function VoicesHomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Path to Help</h1>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
          <strong>SCYM — the Second Chance Youth Map</strong> — was created to
          chart the journey a youth takes through the justice system and to
          recognize the people who help guide that journey. From the first
          school referral to reentry after placement, this map honors the
          professionals who walk beside youth — and equips them with tools to
          learn, reflect, and respond.
        </p>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base">
          These are the <strong>Voices</strong> that change outcomes not through
          power, but through presence. Each role featured here plays a vital
          part in shaping paths of care, courage, and consistency — from
          educators and intake officers to residential staff and workforce
          mentors.
        </p>
      </header>
      <div className="mt-8 mb-16 text-center">
        <p className="text-slate-700 text-lg">
          🔍 <strong>Select a Voice below</strong> to explore their impact,
          tools, and role on the path.
        </p>
        <p className="text-slate-500 text-sm mt-2 italic">
          Every one of these people changes outcomes. Some in courtrooms. Some
          at midnight check-ins. Some with clipboards. Some with coffee and
          quiet listening.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {Object.entries(voiceData).map(([groupKey, roles]) => (
          <section key={groupKey} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-700 mb-4">
              {sectionTitles[groupKey as keyof typeof voiceData]}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {roles.map((role) => (
                <VoiceCard key={role.title} {...role} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
