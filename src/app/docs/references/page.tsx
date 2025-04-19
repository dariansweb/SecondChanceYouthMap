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
        <section className="space-y-12 mt-12">
          {/* Appendix I: State-Level Models */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-blue-900 mb-1 border-l-4 border-blue-600 pl-3">
            📍 Appendix I — State-Level Systems & Models
            </h2>
            <ul className="space-y-2 pl-5 list-none border-l border-blue-100 mt-4">
              {[
                {
                  label: "Arkansas Division of Youth Services",
                  link: "https://humanservices.arkansas.gov",
                  note: "Risk-Based Commitment Framework (SAVRY)",
                },
                {
                  label: "Missouri Juvenile Justice System",
                  link: "https://dss.mo.gov",
                  note: "The Missouri Model for youth rehabilitation",
                },
                {
                  label: "Texas Juvenile Justice Department",
                  link: "https://tjjd.texas.gov",
                  note: "JCMS data management and referral system",
                },
                {
                  label: "Louisiana Office of Juvenile Justice",
                  link: "https://ojj.la.gov",
                  note: "Family MDT protocols and aftercare transitions",
                },
                {
                  label: "Oklahoma Juvenile Affairs",
                  link: "https://www.ok.gov/oja",
                  note: "Bed tracking and diversion scoring tools",
                },
              ].map((item, index) => (
                <li key={index} className="pl-3 relative">
                  <span className="absolute left-0 text-blue-500">📍</span>
                  <a
                    href={item.link}
                    target="_blank"
                    className="font-medium text-blue-700 underline hover:text-blue-900"
                  >
                    {item.label}
                  </a>{" "}
                  – <span className="text-slate-600">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Repeat same structure for other appendices... */}
        </section>

        {/* Federal Policies */}
        <section>
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            📜 Federal Laws & Resources
          </h2>
          {/* Appendix II: Federal Laws */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-blue-900 mb-1 border-l-4 border-green-600 pl-3">
              Appendix II — Federal Laws & Resources
            </h2>
            <ul className="space-y-2 pl-5 list-none border-l border-blue-100 mt-4">
              {[
                {
                  label: "Family Educational Rights and Privacy Act (FERPA)",
                  link: "https://studentprivacy.ed.gov",
                },
                {
                  label: "Individuals with Disabilities Education Act (IDEA)",
                  link: "https://sites.ed.gov/idea/",
                },
                {
                  label:
                    "Health Insurance Portability and Accountability Act (HIPAA)",
                  link: "https://www.hhs.gov/hipaa/index.html",
                },
                {
                  label: "McKinney-Vento Homeless Assistance Act",
                  link: "https://nche.ed.gov/mckinney-vento/",
                },
                {
                  label: "Every Student Succeeds Act (ESSA)",
                  link: "https://www.ed.gov/essa",
                },
              ].map((item, index) => (
                <li key={index} className="pl-3 relative">
                  <span className="absolute left-0 text-yellow-600">📜</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 underline hover:text-blue-900 hover:shadow-sm hover:underline-offset-2 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Research */}
        <section>
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            🧠 Research & Thought Leadership
          </h2>
          {/* Appendix III: Research & Leadership */}
          <div>
            <h2 className="text-xl font-serif font-semibold text-blue-900 mb-1 border-l-4 border-pink-500 pl-3">
              Appendix III — Research & Thought Leadership
            </h2>
            <ul className="space-y-2 pl-5 list-none border-l border-pink-100 mt-4">
              {[
                {
                  label: "“Reclaiming Futures”",
                  link: "https://www.reclaimingfutures.org/",
                  desc: "National evidence-based diversion model",
                },
                {
                  label: "Annie E. Casey Foundation",
                  link: "https://www.aecf.org/",
                  desc: "Juvenile Detention Alternatives Initiative (JDAI)",
                },
                {
                  label: "Vera Institute of Justice",
                  link: "https://www.vera.org/",
                  desc: "Youth incarceration trends and equity research",
                },
                {
                  label: "National Center for Youth Opportunity",
                  link: "https://youthopportunitycenter.org/",
                  desc: "Community-based alternatives",
                },
              ].map((item, index) => (
                <li key={index} className="pl-3 relative">
                  <span className="absolute left-0 text-pink-600">🧠</span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 underline hover:text-blue-900 hover:shadow-sm hover:underline-offset-2 transition"
                  >
                    {item.label}
                  </a>{" "}
                  <span className="text-slate-600">– {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center text-slate-500 italic pt-8 border-t border-slate-200">
          We honor the ongoing work of youth advocates, researchers, probation
          officers, educators, and community leaders across the country. This
          platform exists because of your decades of work.
        </section>
      </main>
    </div>
  );
}
