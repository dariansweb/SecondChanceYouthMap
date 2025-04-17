// components/DocsSidebar.tsx

'use client';

import Link from 'next/link';

const docsNav = [
  { slug: 'intro', label: '📘 Introduction' },
  { slug: 'intake-workflow', label: '🧭 Intake Workflow' },
  { slug: 'risk-assessments', label: '📊 Risk Assessments' },
  { slug: 'custody-diversion-paths', label: '⚖️ Custody vs Diversion' },
  { slug: 'education-support', label: '🎓 Education Support' },
  { slug: 'legal-forms', label: '📝 Legal Forms' },
  { slug: 'references', label: '📚 References' },
];

export default function DocsSidebar() {
  return (
    <aside className="bg-white p-6 border-r border-slate-200 h-full sticky top-0">
      <nav className="space-y-4">
        {docsNav.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="block text-blue-700 hover:underline text-sm"
          >
            {doc.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
