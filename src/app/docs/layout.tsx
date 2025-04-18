import DocsSidebar from "@/components/DocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <aside className="md:w-64 border-r border-slate-200 bg-white">
          <DocsSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
