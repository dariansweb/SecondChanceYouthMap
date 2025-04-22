"use client";

import Link from "next/link";

interface VoiceCardProps {
  title: string;
  emoji: string;
  intro: string;
  href: string;
}

export default function VoiceCard({
  title,
  emoji,
  intro,
  href,
}: VoiceCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-200 ease-in-out"
    >
      <h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span> {title}
      </h3>
      <p className="mt-2 text-slate-600 text-sm">{intro}</p>
      <p className="mt-3 text-sm text-blue-600 font-medium">
        → Read Their Story
      </p>
    </Link>
  );
}
