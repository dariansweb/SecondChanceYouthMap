"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";
import DiversionChart from "@/components/dashboard/DiversionChart";

export default function IntakeOfficersPage() {
  return (
    <ImpactLayout title="Intake Officers: The Power of First Decisions">
      <p>
        Intake is more than paperwork. It&apos;s the moment where a youth&apos;s path can
        shift — toward support or deeper system involvement. As an intake
        officer, you stand at the doorway of reform. The data shows that your
        decisions don&apos;t just process youth — they protect futures.
      </p>

      <div className="my-10">
        <DiversionChart />
        <p className="text-sm mt-2 text-slate-600 italic">
          In 4 of 7 states studied, intake officers directly controlled
          diversion entry. Youth routed early were 38% less likely to face
          further confinement.
        </p>
      </div>

      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-700 my-6">
        “She flagged me for counseling instead of jail. That&apos;s how it all
        changed for me.”
        <br />— Youth intake memo, Arkansas case review
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🌱 What You’re Changing
      </h2>
      <p>
        You’re not just assessing risk — you’re reading between the lines. Every
        intake packet you process with care opens the door for school
        re-engagement, family healing, and mental health recovery. Without you,
        diversion wouldn’t exist.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🔗 Related Resources
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/dashboard/charts/diversion"
            className="text-blue-600 underline"
          >
            View Diversion Outcomes by State
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/education"
            className="text-blue-600 underline"
          >
            Truancy & IEP Flag Patterns
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/confidence"
            className="text-blue-600 underline"
          >
            SCYM Confidence Levels by State
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
