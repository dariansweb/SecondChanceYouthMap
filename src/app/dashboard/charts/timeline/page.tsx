"use client";

import ChartArticleLayout from "@/components/layout/ChartArticleLayout";

export default function TimelinePage() {
  return (
    <ChartArticleLayout title="Intake-to-Outcome Timeline">
      <p>
        Every step in the youth intake process builds upon the last — from
        referral to assessment, from service planning to eventual outcome. This
        timeline maps out a model progression of decision points that shape a
        youth&apos;s experience — not as a static sequence, but as a dynamic
        flow of influence, accountability, and care.
      </p>

      <div className="my-10">
        {/* Timeline component placeholder */}
        <div className="p-6 text-center border border-dashed border-slate-300 rounded-md text-slate-500 italic">
          ⏳ Animated intake-to-outcome flow coming soon — decision gates,
          service touchpoints, and real-time markers of change.
        </div>
      </div>

      <p className="mt-4 text-sm italic text-slate-500">
        💡 <strong>Coming soon:</strong> Click any stage in the timeline to
        explore what&apos;s typically required, who is involved, and what
        policies govern that step.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-blue-700">
        🧭 The Goal of This Timeline
      </h2>

      <p className="mt-4">
        It&apos;s not just a map — it&apos;s a mirror. Intake without reflection
        often leads to procedural overreach or missed moments of grace. When
        youth fall through the cracks, it&apos;s often because no one stopped to
        ask where they were on the journey — and whether they belonged in that
        path at all.
      </p>

      <p className="mt-4">
        By visualizing the full lifecycle — from first contact to community
        reentry — we uncover critical windows for <strong>diversion</strong>,{" "}
        <strong>intervention</strong>, and <strong>support planning</strong>. It
        becomes easier to see when delays stack up, when evaluations are
        skipped, or when services are offered too late to help.
      </p>

      <p className="mt-4 font-semibold text-blue-700">
        At SCYM, we believe that timelines should serve youth — not systems. A
        just path is not just one that moves forward — it&apos;s one that
        listens, redirects, and restores at every gate.
      </p>
    </ChartArticleLayout>
  );
}
