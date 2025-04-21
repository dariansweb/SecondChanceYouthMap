"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";
import EducationNeedsChart from "@/components/dashboard/EducationNeedsChart";

export default function EducatorsPage() {
  return (
    <ImpactLayout title="Educators: You See the Signals First">
      <p>
        Long before a youth enters the system, they&apos;re often struggling in
        school. You see the missed days, the frustrated eyes, the incomplete
        IEPs. SCYM data reveals a clear pattern: educational instability is one
        of the strongest predictors of future system involvement — but also one
        of the most powerful opportunities for early intervention.
      </p>

      <div className="my-10">
        <EducationNeedsChart />
        <p className="text-sm mt-2 text-slate-600 italic">
          In multiple states, youth flagged for IEPs and truancy during intake
          were nearly twice as likely to require multi-agency coordination. Your
          records, referrals, and school-based interventions are critical system
          signals.
        </p>
      </div>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “They called my mom because I missed 17 days, but it was the teacher who
        stayed after class and asked if I was okay. That was the first time I
        told anyone about what was happening at home.”
        <br />— Student intake summary, Arkansas diversion case
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🌱 What You&apos;re Changing
      </h2>
      <p>
        Every time you document attendance with care, file an IEP properly, or
        advocate for school-based supports instead of suspension — you become
        the frontline of justice reform. You help youth get seen, not sentenced.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🔗 Related Resources
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/dashboard/charts/education"
            className="text-blue-600 underline"
          >
            Truancy & IEP Pattern Data
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/diversion"
            className="text-blue-600 underline"
          >
            Diversion Outcomes and Education Indicators
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/timeline"
            className="text-blue-600 underline"
          >
            Intake-to-Outcome Journey View
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
