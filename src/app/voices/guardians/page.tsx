"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";

export default function GuardiansPage() {
  return (
    <ImpactLayout title="Parents & Guardians: The First and Last Line of Care">
      <p>
        You know the story before the system does. You carry the worry, the
        confusion, the appointments, the outbursts, the paperwork, and the hope.
        Sometimes you’re asked to step back. Other times, you’re asked to do the
        impossible. But at every step — you are the one they come home to.
      </p>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “They said I was the problem. But I was the one who showed up to court,
        who did the intake paperwork, who picked him up after school suspension.
        I just wanted someone to help us before it got worse.”
        <br />— Parent interview, SCYM narrative survey
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🫶 What You’re Changing
      </h2>
      <p>
        You are the thread that holds every stage of the journey together. You
        advocate. You learn policy on the fly. You chase signatures,
        transportation, therapy, phone calls, missed meds, late buses, group
        home paperwork. You are the one who fights to keep the story moving
        forward.
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
            Diversion Recommendations — Parental Consent Rates
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/intake"
            className="text-blue-600 underline"
          >
            Intake Form Participation by Guardians
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/timeline"
            className="text-blue-600 underline"
          >
            Parent Involvement Across the Youth Timeline
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
