import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import RiskToolUsageChart from "@/components/dashboard/RiskToolUsageChart";
import RiskToolHeatmap from "@/components/dashboard/RiskToolHeatmap";

export default function RiskToolsPage() {
  return (
    <ChartArticleLayout title="Risk Tool Usage & Heatmap Across States">
      {/* INTRO */}
      <p className="mb-4">
        Risk tools are not just paperwork — they are decision-making instruments
        that influence who is diverted, detained, or sent deeper into the juvenile
        justice system. In SCYM&apos;s multi-state study of southern juvenile systems,
        we found not just variations in <strong>which tools</strong> are used,
        but striking inconsistency in <strong>how</strong> they are applied.
      </p>

      <p className="mb-4">
        Instruments like <strong>SAVRY</strong> (Structured Assessment of Violence
        Risk in Youth), <strong>RAI</strong> (Risk Assessment Instrument), and
        <strong>YLS/CMI</strong> (Youth Level of Service / Case Management Inventory)
        are designed to reduce subjectivity — but only when used faithfully. Some
        counties automated detention eligibility. Others still rely solely on
        <em>“professional judgment.”</em> The result is a system where outcomes may
        depend more on geography than on need.
      </p>

      {/* CHART 1 */}
      <div className="my-10">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          📊 Risk Tool Usage Across States
        </h2>
        <RiskToolUsageChart />
      </div>

      <p className="mb-4">
        Arkansas integrates the <strong>SAVRY</strong> into law via Act 189,
        using it to determine whether a youth should be committed to DYS. Only
        those assessed as moderate or high risk may be considered for custody —
        making the SAVRY not just a guide, but a gatekeeper. Texas favors the
        RAI within its Juvenile Case Management System (JCMS), applied at county
        discretion. Louisiana and Missouri, meanwhile, emphasize therapeutic alignment
        over strict scoring — sometimes allowing risk evaluation to emerge from
        a multidisciplinary team process rather than a tool.
      </p>

      <p className="mt-4 text-sm italic text-slate-500">
        “A tool should never replace human discernment, but it should inform it.
        When tools are ignored or inconsistently applied, equity erodes.”
      </p>

      <hr className="my-12 border-slate-300" />

      {/* HEATMAP CONTEXT */}
      <p className="mb-4">
        But presence alone isn&apos;t enough. SCYM developed a parallel framework to
        assess <strong>confidence</strong> in each state&apos;s use of risk tools —
        based on what&apos;s public: training manuals, court documents, intake guidelines,
        and agency reports. Confidence reflects transparency, not effectiveness.
        A missing tool may not mean it&apos;s unused — but it does mean it&apos;s undocumented,
        unverified, and unauditable.
      </p>

      <p className="mb-4">
        Some states publish their full screening tools. Others mention them only
        in brief references or internal memos. Mississippi, for example, showed
        almost no publicly accessible evidence of tool usage — not in legislation,
        not in court guidance, not in agency reports.
      </p>

      {/* CHART 2 */}
      <div className="my-10">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          🔥 Risk Tool Confidence Heatmap
        </h2>
        <RiskToolHeatmap />
      </div>

      <p className="mb-4">
        This heatmap visualizes not just adoption, but the opacity of the system.
        A green square signals documentation and public access. Medium means the tool
        is mentioned but not shared. Low reflects anecdotal or outdated reference.
        A dash (—) means no confirmation at all.
      </p>

      <p className="mt-4 text-sm italic text-slate-500">
        What we don&apos;t know can hurt kids. What we can&apos;t verify, we can&apos;t improve.
      </p>

      <hr className="my-12 border-slate-300" />

      {/* CLOSING */}
      <p className="mb-4">
        Inconsistent application of tools isn&apos;t a small detail — it shapes lives.
        One youth in Arkansas may receive a structured assessment, leading to
        diversion. A youth in Mississippi may face secure detention based solely
        on officer discretion. These are not anomalies — they are system truths.
      </p>

      <p className="font-semibold text-blue-700">
        At SCYM, we believe that transparency is the first step toward equity.
        A tool that is buried or ignored cannot be held accountable.
        Uniform access and honest application of risk instruments
        must be part of the path forward — because real reform requires both heart
        and infrastructure.
      </p>
    </ChartArticleLayout>
  );
}
