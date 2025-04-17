export default function ReferencesPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold flex justify-center items-center gap-4">
          📚 References & Source Materials
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Citations, models, laws, and research behind the design of the SCYM
          platform.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-slate-700">
        {/* Source Systems */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            📖 Source Documents & Systems
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <strong>Arkansas:</strong> SAVRY Intake Model, 90-day treatment
              windows, DYS guidance materials
            </li>
            <li>
              <strong>Texas:</strong> JCMS (Juvenile Case Management System),
              Diversion Referral Forms
            </li>
            <li>
              <strong>Missouri:</strong> Missouri Model — Short-Term,
              Youth-Centered Treatment Approach
            </li>
            <li>
              <strong>Louisiana:</strong> MDT (Multi-Disciplinary Team)
              frameworks, Family Involvement Protocols
            </li>
            <li>
              <strong>Oklahoma:</strong> Real-time data entry dashboards, Bed
              tracking, Diversion triggers
            </li>
          </ul>
        </div>

        {/* Legal Standards */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            📄 Legal and Educational Regulations
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>FERPA — Family Educational Rights and Privacy Act</li>
            <li>HIPAA — Health Insurance Portability and Accountability Act</li>
            <li>IDEA — Individuals with Disabilities Education Act</li>
            <li>
              28 CFR Part 31 — Federal regulations on juvenile justice planning
            </li>
            <li>
              JJDPA — Juvenile Justice and Delinquency Prevention Act (core
              protections & system improvements)
            </li>
          </ul>
        </div>

        {/* System Design */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            🧠 Design Influences
          </h2>
          <p className="mt-2">
            This tool was inspired by open-source ideals, modern UX for
            government, and a belief that justice systems deserve software that
            is transparent, human-centered, and built with compassion at its
            core.
          </p>
        </div>
      </section>
    </main>
  );
}
