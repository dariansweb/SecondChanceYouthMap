export default function LegalFormsPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold flex justify-center items-center gap-4">
          📝 Legal Forms & Privacy
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Ensuring that every intake honors confidentiality, parental rights,
          and federal protections.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-slate-700">
        {/* Core Compliance Standards */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            📜 Core Compliance Standards
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <strong>FERPA</strong>: Family Educational Rights and Privacy Act
              — protects school records
            </li>
            <li>
              <strong>HIPAA</strong>: Health Insurance Portability and
              Accountability Act — protects health data
            </li>
            <li>
              <strong>IDEA</strong>: Individuals with Disabilities Education Act
              — ensures appropriate accommodations
            </li>
          </ul>
        </div>

        {/* Consent Requirements */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            ✍️ Consent & Disclosure
          </h2>
          <p className="mt-2">
            Certain sections of the intake form require documented consent —
            especially when sensitive health, mental health, or education
            services are discussed or recommended. Signature fields may be
            physical or digital.
          </p>
          <p className="mt-2">
            Youths and guardians must be informed about how their data will be
            used, stored, and protected.
          </p>
        </div>

        {/* Court-Ready Documents */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            🧾 Court-Ready Documents
          </h2>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Intake Summary PDF</li>
            <li>Consent & Privacy Acknowledgment</li>
            <li>School Record Transfer Form</li>
            <li>Risk Tool Transparency Notice</li>
          </ul>
          <p className="mt-2">
            These are exported in secure format and submitted to the appropriate
            court or supervision agency.
          </p>
        </div>
      </section>
    </main>
  );
}
