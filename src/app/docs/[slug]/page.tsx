import { getDoc } from "@/lib/parseMarkdown";
import DocsSidebar from "@/components/DocsSidebar";
import { notFound } from "next/navigation";

// Update the Props type to make searchParams optional
type Props = {
  params: {
    slug: string;
  };
  // Make searchParams optional with '?'
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Remove searchParams from the destructuring if you're not using it
export default async function DocPage({ params }: Props) {
  try {
    const { htmlContent } = await getDoc(params.slug);

    if (!htmlContent) {
      notFound();
    }

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
  } catch (error) {
    console.error("Error loading doc:", error);
    notFound();
  }
}
