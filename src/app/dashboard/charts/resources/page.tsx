import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import Link from "next/link";

export default function SourcesPage() {
  return ( 
      <ChartArticleLayout title="Top Cited Sources by State">
        <p>
          While we’ve embedded citations across the app, this article serves as
          a launchpad for source transparency and civic accountability.
        </p>
        <p>
          Please visit the{" "}
          <Link
            href="/docs/references"
            className="text-blue-700 hover:underline"
          >
            full References page
          </Link>{" "}
          to see every URL and policy document consulted in this project.
        </p>
        <p>
          Our visual matrix and glossary are both powered by cross-state source
          review — from statutes to toolkits to risk manuals.
        </p>
      </ChartArticleLayout>
  );
}
