"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";

export default function DiversionPage() {
  return (
    <ImpactLayout title="Diversion Program Staff: Redirecting Before the Damage Is Done">
      <p>
        You’re the ones who *see the fork in the road*. Before there’s a court
        date, before there&apos;s a record, before trauma calcifies — you&apos;re the
        intervention team. Your role might not make headlines, but it changes
        lives. And in the SCYM system, your decisions light the earliest exit
        signs for at-risk youth.
      </p>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “They said I could do this program and get it off my record. I thought I
        was done for, but they gave me a plan. I did it. I’m not in the system
        anymore.”
        <br />— Youth from pre-court diversion interview, Arkansas
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🌱 What You’re Changing
      </h2>
      <p>
        You step in early. You connect the dots. You talk with youth *and* their
        families, offer timelines, listen to root causes, and build alternatives
        — therapy, community service, skill-building, restoration. You don’t
        punish. You invite growth.
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
            Diversion Outcomes by State
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/recommendations"
            className="text-blue-600 underline"
          >
            Intake Recommendation Breakdown
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/confidence"
            className="text-blue-600 underline"
          >
            Confidence in Diversion Policy Transparency
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
