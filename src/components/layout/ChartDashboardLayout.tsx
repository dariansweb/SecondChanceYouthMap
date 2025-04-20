"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },  
  { href: "/dashboard/charts/diversion", label: "Diversion Outcomes" },
  { href: "/dashboard/charts/risk-tools", label: "Risk Tool Usage" },
  { href: "/dashboard/charts/education", label: "Truancy & IEP Patterns" },
  {
    href: "/dashboard/charts/recommendations",
    label: "Recommendation Outcomes",
  },
  { href: "/dashboard/charts/confidence", label: "Confidence by State" },
  { href: "/dashboard/charts/sources", label: "Research Source Depth" },
  { href: "/dashboard/charts/comparison", label: "Multi-State Comparison" },
  { href: "/dashboard/charts/timeline", label: "Intake-to-Outcome Timeline" },
];

export default function ChartDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      {/* Sidebar - desktop only */}
      <aside className="hidden md:block w-64 bg-white border-r border-slate-200 p-4">
        <h2 className="text-xl font-bold text-blue-700 mb-4">
          📊 SCYM Articles
        </h2>
        <nav className="space-y-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "block px-3 py-2 rounded hover:bg-blue-50 transition",
                pathname === item.href
                  ? "bg-blue-100 text-blue-900 font-semibold"
                  : "text-slate-700"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-blue-600 text-white rounded-md shadow-lg"
      >
        ☰ SCYM
      </button>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 w-64 h-full bg-white border-r border-slate-200 p-4 z-50">
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              📊 SCYM Articles
            </h2>
            <nav className="space-y-2 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "block px-3 py-2 rounded hover:bg-blue-50 transition",
                    pathname === item.href
                      ? "bg-blue-100 text-blue-900 font-semibold"
                      : "text-slate-700"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
