"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "🏠 Home" },
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
  const pathname = usePathname();

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white px-3 py-2 rounded shadow-md"
      >
        ☰ Docs
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 z-50 w-64 bg-white md:bg-transparent shadow-lg md:shadow-none h-full md:h-auto overflow-y-auto transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <nav className="space-y-2 p-4 text-sm md:p-0 md:pt-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded font-medium hover:bg-blue-100 ${
                pathname === link.href
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
