export default function ReferencesPage() {
  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen pb-20">
      <header className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">📚 References</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Our work stands on the shoulders of those who mapped the territory
          first. Here are the models, documents, and laws that inspired us.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-12 space-y-12 text-sm">
        {/* State Systems */}
        <section>
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            📍 State-Level Systems & Models
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Arkansas Division of Youth Services – Risk-Based Commitment
              Framework (SAVRY)
            </li>
            <li>
              Missouri Juvenile Justice System – The Missouri Model for youth
              rehabilitation
            </li>
            <li>
              Texas Juvenile Justice Department – JCMS data management and
              referral system
            </li>
            <li>
              Louisiana Office of Juvenile Justice – Family MDT protocols and
              aftercare transitions
            </li>
            <li>
              Oklahoma Juvenile Affairs – Bed tracking and diversion scoring
              tools
            </li>
          </ul>
        </section>

        {/* Federal Policies */}
        <section>
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            📜 Federal Laws & Resources
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Family Educational Rights and Privacy Act (FERPA)</li>
            <li>Individuals with Disabilities Education Act (IDEA)</li>
            <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
            <li>McKinney-Vento Homeless Assistance Act</li>
            <li>Every Student Succeeds Act (ESSA)</li>
          </ul>
        </section>

        {/* Reports and Whitepapers */}
        <section>
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            🧠 Research & Thought Leadership
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              “Reclaiming Futures” – National evidence-based diversion model
            </li>
            <li>
              Annie E. Casey Foundation – Juvenile detention alternatives
              initiative
            </li>
            <li>
              Vera Institute of Justice – Youth incarceration trends and equity
              research
            </li>
            <li>
              National Center for Youth Opportunity – Community-based
              alternatives
            </li>
          </ul>
        </section>

        {/* Closing Note */}
        <section className="text-center text-slate-500 italic pt-8 border-t border-slate-200">
          We honor the ongoing work of youth advocates, researchers, probation
          officers, educators, and community leaders across the country. This
          platform exists because of your decades of work.
        </section>
      </main>
    </div>
  );
}
