// src/app/docs/[slug]/page.tsx

import { getDoc } from "@/lib/parseMarkdown";
import DocsSidebar from "@/components/DocsSidebar.";

export default async function DocPage({
  params,
}: {
  params: { slug: string };
}) {
  const { htmlContent } = await getDoc(params.slug);

  return (
    <div className="flex">
      <div className="w-64">
        <DocsSidebar />
      </div>
      <main
        className="prose prose-slate max-w-none p-8"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
