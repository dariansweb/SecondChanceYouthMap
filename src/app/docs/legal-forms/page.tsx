import Link from "next/link";

export default function LegalFormsPage() {
  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen pb-20">
      <header className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          📝 Legal Forms & Privacy
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Legal compliance isn&apos;t optional — it&apos;s structural integrity.
          Our tools are built with those laws in mind.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-16">
        {/* Core Laws */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📚 Core Privacy and Education Laws
          </h2>
          <ul className="list-disc list-inside space-y-3 text-sm">
            <li>
              <strong>FERPA</strong> (Family Educational Rights and Privacy
              Act): Controls the sharing of school records. Youth must sign
              release forms to share with probation or court officials.
            </li>
            <li>
              <strong>HIPAA</strong> (Health Insurance Portability and
              Accountability Act): Protects therapy, medication, and
              health-related services. Consent forms are required.
            </li>
            <li>
              <strong>IDEA</strong> (Individuals with Disabilities Education
              Act): Ensures continuation of services if the youth has an IEP.
            </li>
            <li>
              <strong>JJDPA</strong> (Juvenile Justice and Delinquency
              Prevention Act): Requires procedural protections during intake and
              custody placement.
            </li>
          </ul>
        </section>

        {/* Digital Forms */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📄 Forms Included in This System
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                ✔️ Consent to Share School Records
              </h3>
              Covers IEPs, credit summaries, attendance records
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                ✔️ Therapy and Case Notes Release
              </h3>
              Optional but critical when building a support plan
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                ✔️ Intake Packet Authorization
              </h3>
              Signatures from guardian, case worker, or supervising agency
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <h3 className="font-semibold text-blue-700 mb-2">
                ✔️ Digital Signature Declaration
              </h3>
              Ensures all digital forms are acknowledged with a valid timestamp
              and guardian verification
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🔐 Security & Best Practices
          </h2>
          <p>
            All submitted data must be encrypted in transit and at rest. Intake
            forms should be stored in compliant systems and only accessible to
            authorized personnel. Every county or district must establish a
            chain of custody for the form.
          </p>
        </section>

        <section className="text-center italic text-slate-500 pt-6 border-t border-slate-200">
          “You cannot build trust without protecting the stories people entrust
          you with.”
        </section>
        <div className="mt-8">
          <Link
            href="/docs/references"
            className="inline-block bg-blue-700 text-white text-sm px-4 py-2 rounded hover:bg-blue-800 transition"
          >
            📚 Continue to References
          </Link>
        </div>
      </main>
    </div>
  );
}
