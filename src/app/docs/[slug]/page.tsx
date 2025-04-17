// src/app/docs/[slug]/page.tsx

import { getDoc } from "@/lib/parseMarkdown";
import DocsSidebar from "@/components/DocsSidebar.";

interface DocPageProps {
  params: {
    slug: string;
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { htmlContent } = await getDoc(params.slug);

  return (
    <div className="flex">
      <div className="w-64 bg-white border-r border-slate-200 p-4">
        <DocsSidebar />
      </div>
      <main
        className="prose prose-slate bg-white text-slate-800 max-w-none p-8 rounded shadow"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
