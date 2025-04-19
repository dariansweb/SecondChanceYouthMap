import Link from "next/link";

export default function LegalFormsPage() {
  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen pb-20">
      {/* Hero Header */}
      <header className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          📝 Legal Forms & Privacy
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Legal compliance isn’t optional — it’s structural integrity. SCYM is
          built to honor confidentiality, parental rights, and federal
          protections for every youth.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12 space-y-16">
        {/* Core Laws */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📚 Core Privacy & Youth Protection Laws
          </h2>
          <ul className="list-disc list-inside space-y-3 text-sm">
            <li>
              <strong>FERPA</strong> (Family Educational Rights and Privacy
              Act): Governs access to academic records. Youth and/or guardians
              must authorize any educational data sharing.
            </li>
            <li>
              <strong>HIPAA</strong> (Health Insurance Portability and
              Accountability Act): Secures health information, including
              counseling, medications, and evaluations. Consent is always
              required.
            </li>
            <li>
              <strong>IDEA</strong> (Individuals with Disabilities Education
              Act): Guarantees continuation of special education services (e.g.,
              IEP/504) even during custody transitions.
            </li>
            <li>
              <strong>JJDPA</strong> (Juvenile Justice and Delinquency
              Prevention Act): Requires procedural safeguards and minimal use of
              detention for non-violent cases.
            </li>
          </ul>
        </section>

        {/* Digital Forms */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            📄 Forms Built Into This Intake System
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            {[
              {
                title: "✔️ Consent to Share School Records",
                desc: "Allows release of attendance, grades, IEP/504, and truancy data.",
              },
              {
                title: "✔️ Therapy and Case Notes Release",
                desc: "Enables communication with therapists or behavioral health providers.",
              },
              {
                title: "✔️ Intake Packet Authorization",
                desc: "Digital or handwritten signatures from responsible adults and officials.",
              },
              {
                title: "✔️ Digital Signature Declaration",
                desc: "Ensures forms are timestamped and verified through guardian confirmation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border rounded p-4 shadow"
              >
                <h3 className="font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                {item.desc}
              </div>
            ))}
          </div>
        </section>

        {/* Security Practices */}
        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            🔐 Security & Best Practices
          </h2>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>
              Data should be encrypted <strong>in transit and at rest</strong>.
            </li>
            <li>
              Forms must be stored on <strong>compliant infrastructure</strong>{" "}
              (CJIS or HIPAA-aligned where necessary).
            </li>
            <li>
              Every jurisdiction should define a clear{" "}
              <strong>chain of custody</strong> for digital forms.
            </li>
            <li>
              PDF summaries and electronic forms should be access-controlled
              based on user role and clearance.
            </li>
          </ul>
        </section>

        {/* Trust Quote */}
        <section className="text-center italic text-slate-500 pt-6 border-t border-slate-200">
          “You cannot build trust without protecting the stories people entrust
          you with.”
        </section>

        {/* Continue CTA */}
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
