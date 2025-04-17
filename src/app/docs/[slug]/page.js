// src/app/docs/[slug]/page.js

import { getDoc } from "@/lib/parseMarkdown";
import DocsSidebar from "@/components/DocsSidebar";

export default async function DocPage({ params }) {
  const { htmlContent, title } = await getDoc(params.slug);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar (collapsible idea later) */}
      <aside className="w-full lg:w-64 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 min-h-screen p-4">
        <DocsSidebar />
      </aside>

      {/* Main Content */}
      <main className="prose prose-slate dark:prose-invert max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-3xl font-bold mb-4">{title || "Documentation"}</h1>
        <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </main>
    </div>
  );
}
