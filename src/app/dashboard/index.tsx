import Link from "next/link";

export default function DashboardHome() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-slate-800">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        📊 SCYM Dashboard Insights
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Each article below explores a critical aspect of juvenile justice —
        backed by real research, state models, and civic design principles.
      </p>

      <ul className="space-y-4 text-blue-700 text-lg">
        <li>
          <Link href="/dashboard/charts/diversion" className="hover:underline">
            🚨 Diversion vs. Custody Decisions
          </Link>
        </li>
        <li>
          <Link href="/dashboard/charts/risk-tools" className="hover:underline">
            📋 Risk Tools Used Across States
          </Link>
        </li>
        <li>
          <Link href="/dashboard/charts/education" className="hover:underline">
            🎓 Education Needs: Truancy and IEPs
          </Link>
        </li>
        <li>
          <Link href="/dashboard/charts/confidence" className="hover:underline">
            📶 Confidence Levels in Policy Data
          </Link>
        </li>
        <li>
          <Link href="/dashboard/charts/sources" className="hover:underline">
            📚 Most Referenced Sources by State
          </Link>
        </li>
      </ul>
    </main>
  );
}
