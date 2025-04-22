"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";

export default function WorkforceMentorsPage() {
  return (
    <ImpactLayout title="Workforce Mentors: Path to Purpose">
      <p>
        You don&apos;t just talk about second chances — you hire them. You build
        resumes, give references, help with IDs, GED signups, interviews, and
        those awkward first days. For many youth, you&apos;re the *first adult
        who believes they can build something instead of break something*.
      </p>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “He told me I didn’t need to hide my story — I could use it. And now I
        work part-time at the same place I volunteered during diversion.”
        <br />— Youth from employment transition pilot, Texas
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        💼 What You’re Changing
      </h2>
      <p>
        You shift the lens from *risk to readiness*. While others close files,
        you open doors. You show youth how to become more than their past — you
        show them how to build something that lasts. Whether it’s trades, tech,
        service, or school, you make restoration tangible.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🔗 Related Resources
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/dashboard/charts/timeline"
            className="text-blue-600 underline"
          >
            Intake-to-Outcome Timeline
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/confidence"
            className="text-blue-600 underline"
          >
            Confidence Ratings – Reentry & Support Continuity
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/education"
            className="text-blue-600 underline"
          >
            IEP & Education Transition Supports
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
