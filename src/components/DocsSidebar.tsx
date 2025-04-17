// components/DocsSidebar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/docs", label: "📘 Introduction" },
  { href: "/docs/intake-workflow", label: "🧭 Intake Workflow" },
  { href: "/docs/risk-assessments", label: "📊 Risk Assessments" },
  { href: "/docs/custody-diversion-paths", label: "⚖️ Custody vs Diversion" },
  { href: "/docs/education-support", label: "🎓 Education Support" },
  { href: "/docs/legal-forms", label: "📝 Legal Forms & Privacy" },
  { href: "/docs/references", label: "📚 References" },
];

export default function DocsSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="md:w-64 w-full bg-white border-r border-slate-200 shadow-sm">
      <div className="md:hidden flex justify-between items-center p-4 border-b border-slate-200">
        <h2 className="text-base font-semibold text-slate-700">Docs Menu</h2>
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-600 hover:text-blue-600 text-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      <nav
        className={`${
          open ? "block" : "hidden"
        } md:block px-4 md:px-6 py-4 md:py-6 space-y-3`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block text-sm text-slate-700 hover:text-blue-600 transition font-medium"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
