export default function EducationSupportPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold flex justify-center items-center gap-4">
          🎓 Education Support
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Maintaining IEPs, credit continuity, and academic lifelines through
          every step of justice involvement.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-slate-700">
        {/* Why Education Matters */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            📚 Why Education Matters
          </h2>
          <p className="mt-2">
            Youth in the justice system face serious risk of academic
            disruption. This project emphasizes continuity of education —
            ensuring every student continues progressing toward graduation, even
            while in placement.
          </p>
        </div>

        {/* Key Educational Data Collected */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            📝 Key Educational Data Collected
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>IEP / 504 plan status</li>
            <li>School enrollment & current standing</li>
            <li>Estimated earned credits</li>
            <li>Truancy concerns or patterns</li>
            <li>Learning style or support needs</li>
          </ul>
        </div>

        {/* Planning for Every Pathway */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            🛤️ Planning for Every Pathway
          </h2>
          <p className="mt-2">
            Whether youth are diverted, placed on probation, or committed to a
            facility, this system ensures education follows them. Educational
            liaisons and case managers coordinate with schools to keep services
            consistent.
          </p>
          <p className="mt-2">
            This data ensures youth don&apos;t fall behind while navigating the
            justice system.
          </p>
        </div>
      </section>
    </main>
  );
}
