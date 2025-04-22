"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";

export default function ResidentialStaffPage() {
  return (
    <ImpactLayout title="Residential Staff: Where Care Lives Daily">
      <p>
        You see it all. The fear on intake. The silence in group. The fight
        after visitation. The breakthrough on the basketball court. You don’t
        clock in for paperwork — you clock in for people. Because when youth are
        in residential placement, you are the closest thing to family they’ve
        got.
      </p>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “My GL Supervisor was the only one who saw me when I wasn’t acting out.
        He said I was still worth it — even when I didn’t believe it.”
        <br />— Youth reflection, 3 months post-release
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🏡 What You’re Changing
      </h2>
      <p>
        You bring structure and safety. But more than that — you bring presence.
        While others see a file, you see the kid in the bunk. You de-escalate,
        redirect, hold accountable, and encourage. You are witness and warrior
        in the daily grind of growth. And SCYM honors the data that proves your
        proximity matters.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🔗 Related Resources
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/dashboard/charts/confidence"
            className="text-blue-600 underline"
          >
            Confidence in Residential Program Transparency
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/risk-tools"
            className="text-blue-600 underline"
          >
            Risk Tools Used in Facility Settings
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/timeline"
            className="text-blue-600 underline"
          >
            Timeline of Placement and Transition to Reentry
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
