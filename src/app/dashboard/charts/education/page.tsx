import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import EducationNeedsChart from "@/components/dashboard/EducationNeedsChart";

export default function EducationPage() {
  return (
    <ChartArticleLayout title="Truancy & IEP Patterns">
      <p>
        Educational instability is one of the clearest indicators of youth
        justice involvement. Many youth entering intake report a combination of{" "}
        <strong>chronic truancy</strong> and learning support needs such as{" "}
        <strong>IEPs</strong> or <strong>504 Plans</strong>. These aren&apos;t
        just academic challenges — they&apos;re signals of deeper disconnection
        from school systems that failed to intervene in time.
      </p>

      <p className="mt-4">
        This chart visualizes the percentage of youth flagged for IEPs and
        truancy concerns at intake. In Arkansas, this data is collected as part
        of the standard intake workflow and used to refer youth directly to
        education liaisons. Missouri integrates special education tracking into
        its individualized treatment planning. Other states do not consistently
        collect or act on this data — leaving gaps in early educational
        intervention.
      </p>

      <div className="my-8">
        <EducationNeedsChart />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-blue-700">
        📌 Why It Matters
      </h2>

      <p className="mt-4">
        Missed days often mask unmet needs. Truancy is rarely just about
        skipping school — it&apos;s often rooted in disability, trauma, housing
        instability, or disengagement. When intake fails to ask about IEP status
        or school connection, it misses a key opportunity to reroute the youth
        toward stability.
      </p>

      <p className="mt-4">
        This is why SCYM embeds these fields directly into the intake process —
        not as a post-custody audit, but as a frontline filter for services. If
        a youth discloses an IEP, an educational advocate is looped in from day
        one. If they report chronic truancy, a root-cause plan begins. This
        approach isn&apos;t just paperwork — it&apos;s equity in action.
      </p>

      <p className="mt-4 font-semibold text-blue-700">
        When we fail to track education needs early, we push youth deeper into
        systems that can&apos;t support them. When we track it with intention,
        we start to meet them where they are — and finally give them a fair shot
        at staying out for good.
      </p>
    </ChartArticleLayout>
  );
}
