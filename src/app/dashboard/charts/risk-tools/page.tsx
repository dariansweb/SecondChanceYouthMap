"use client";

import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import RiskToolUsageChart from "@/components/dashboard/RiskToolUsageChart";
import RiskToolHeatmap from "@/components/dashboard/RiskToolHeatmap";

export default function RiskToolsPage() {
  return (
      <ChartArticleLayout title="Risk Tool Usage & Heatmap Across States">
        {/* INTRO */}
        <p>
          Risk tools are not just forms — they are gatekeepers. They influence
          who is diverted, detained, or sent deeper into the juvenile justice
          system. In the SCYM analysis of seven Southern states, we found
          significant differences in both <strong>what tools</strong> are used
          and <strong>how consistently</strong> they are applied.
        </p>

        <p className="mt-4">
          Tools like <strong>SAVRY</strong> (Structured Assessment of Violence
          Risk in Youth), <strong>RAI</strong> (Risk Assessment Instrument), and{" "}
          <strong>YLS/CMI</strong> (Youth Level of Service / Case Management
          Inventory) were common, but rarely universal. Some counties within a
          state applied tools differently — or not at all. Some relied on{" "}
          <em>&ldquo;professional judgment&rdquo;</em> while others automated
          detention eligibility.
        </p>

        {/* CHART 1: Risk Tool Usage */}
        <div className="my-10">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            📊 Risk Tool Usage Across States
          </h2>
          <RiskToolUsageChart />
        </div>

        <p>
          As shown above, Arkansas prioritizes the <strong>SAVRY</strong>, which
          was integrated into its risk-based commitment system by legislative
          design. Texas, on the other hand, uses a broader <strong>RAI</strong>{" "}
          approach, often embedded within its JCMS (Juvenile Case Management
          System). Missouri and Louisiana have shifted toward case-by-case
          evaluations, sometimes favoring therapeutic alignment over strict
          scoring.
        </p>

        <p className="mt-4 text-sm italic text-slate-500">
          “A tool should never replace human discernment, but it should inform
          it. When tools are ignored or inconsistently applied, equity erodes.”
        </p>

        <hr className="my-12 border-slate-300" />

        {/* NARRATIVE: Heatmap Context */}
        <p>
          But the presence of a tool isn’t the whole story. SCYM also tracks how{" "}
          <strong>confident</strong> we are that each tool is in use — based on
          public documentation, state publications, training manuals, and intake
          handbooks. Confidence here reflects research clarity, not tool
          efficacy.
        </p>

        <p className="mt-4">
          Some states publicly post their full tools and scoring systems. Others
          mention their use in court memos or agency PowerPoints. A few — like
          Mississippi — had <em>almost no traceable data</em> outside of vague
          mention in court diversion programs.
        </p>

        {/* CHART 2: Risk Tool Heatmap */}
        <div className="my-10">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            🔥 Risk Tool Confidence Heatmap
          </h2>
          <RiskToolHeatmap />
        </div>

        <p>
          This heatmap offers a powerful visual comparison: not only which tools
          are present, but how <strong>reliable</strong> our data is about their
          use. It highlights the fragmentation of policy knowledge across state
          lines, and the opportunity for unified reform through transparency.
        </p>

        <p className="mt-4 text-sm italic text-slate-500">
          A <strong>green high-confidence</strong> square means public
          verification exists. A <strong>medium</strong> rating means tools are
          cited but not accessible. A <strong>low</strong> rating suggests
          anecdotal use or outdated references. A <strong>dash (—)</strong>{" "}
          means no tool was confirmed.
        </p>

        <hr className="my-12 border-slate-300" />

        {/* CLOSING NOTE */}
        <p>
          Inconsistent tool use can lead to detention disparities. A youth in
          Arkansas may be scored with SAVRY and diverted, while a youth in
          neighboring Mississippi may face secure custody with no formal tool
          used at all. SCYM believes transparency in tool adoption is the first
          step toward system alignment and youth-centered fairness.
        </p>
      </ChartArticleLayout>
  );
}
