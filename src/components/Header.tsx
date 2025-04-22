"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "🔎 About" },
  { href: "/docs", label: "📘 Docs" },
  { href: "/voices", label: "🗣️ Voices" },
  { href: "/matrix", label: "📊 Matrix" },
  { href: "/glossary", label: "📚 Glossary" },
  { href: "/intake", label: "🚀 Intake" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
        {/* Logo & Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <Link
            href="/"
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-lg font-extrabold tracking-wide shadow-sm border border-blue-200"
          >
            SCYM
          </Link>
          <span className="text-sm font-medium bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 bg-clip-text text-transparent animate-text-glow sm:mt-0 leading-snug drop-shadow-sm">
            Second Chance Youth Map
          </span>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-wrap justify-center sm:justify-end items-center gap-2 text-sm">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-1 px-3 py-1 rounded-md font-medium transition-colors ${
                pathname === href
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
