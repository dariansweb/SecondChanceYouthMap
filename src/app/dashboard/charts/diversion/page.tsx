import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import DiversionChart from "@/components/dashboard/DiversionChart";

export default function DiversionPage() {
  return (
    <ChartArticleLayout title="Diversion Outcomes by State">
      <p className="mb-4">
        This chart visualizes how frequently youth are recommended for diversion programs,
        rather than being sent through formal adjudication or committed to state custody.
        Each bar represents not just a policy choice — but a philosophical stance on
        whether youth are treated as problems to be punished, or people to be redirected.
      </p>

      <p className="mb-4">
        Diversion-first philosophies are now the cornerstone of modern juvenile justice reform.
        Missouri and Louisiana, for example, have deeply invested in front-end alternatives to detention:
        Missouri&apos;s DYS grants local circuits funding to support informal adjustments,
        and Louisiana dedicates over $5 million annually to local diversion programming. These aren&apos;t just numbers —
        they&apos;re signals of a cultural shift toward rehabilitation, healing, and long-term reintegration.
      </p>

      <DiversionChart />

      <p className="mt-6 mb-4">
        In Arkansas, diversion decisions begin at the very first intake encounter, where validated tools like
        the SAVRY assessment guide officers in determining risk and need. For low-risk youth, diversion is not only
        preferred — it&apos;s codified. Per Arkansas Code §9-27-323, these cases can be dismissed entirely after successful
        completion of a diversion plan, giving youth the opportunity to reset their trajectory without the lifelong
        stain of formal justice system involvement.
      </p>

      <p className="mb-4">
        These charts remind us that data is not sterile — it is soaked in policy, intent, and lived experience.
        Every bar that rises for “diversion” is a decision to believe in the potential of youth to do better
        with guidance, mentorship, and community support. Every bar that rises for “custody” is a signal of
        fear, liability, or systemic distrust.
      </p>

      <p className="font-semibold text-blue-700">
        At SCYM, we believe in the power of second chances. This work is not about reducing charts —
        it&apos;s about restoring lives. When diversion succeeds, it doesn&apos;t just prevent recidivism —
        it tells a young person, often for the first time: *“You are worth investing in.”*
      </p>
    </ChartArticleLayout>
  );
}
