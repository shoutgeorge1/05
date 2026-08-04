import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { EvidenceExplorer } from "@/components/EvidenceExplorer";
import { CONFIDENCE_LABEL } from "@/lib/research-types";
import { SCORING_DOC } from "@/lib/scoring";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Evidence" };

export default function EvidencePage() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="Evidence"
        title="Evidence ledger"
        description="Material claims elsewhere link here by ID. Prefer official pages, legal entities, storefront HTML, robots, job listings, and reputable trade press."
        crumbs={[{ href: "/evidence", label: "Evidence" }]}
      />
      <EvidenceExplorer />

      <section id="methodology" className="panel mt-10 scroll-mt-24 rounded-lg p-5">
        <h2 className="text-base font-semibold">Methodology & classifications</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {Object.entries(CONFIDENCE_LABEL).map(([k, v]) => (
            <li key={k}>
              <span className="font-medium">{v}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Opportunity sorting: {SCORING_DOC.formula}. UI shows High/Medium/Low—not fake
          precision scores.
        </p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Illustrative-data policy: Feed Control Room, collection landing, and demo SKUs are
          planning models labeled in the UI. They are not O5 internal data.
        </p>
        <p className="mt-2 text-xs text-[var(--muted)]">
          Last research refresh: {company.researchMeta.lastUpdated}. Update findings in{" "}
          <code>src/data/evidence.ts</code>, dependent records, and <code>research/</code>,
          then run tests and build.
        </p>
      </section>
    </div>
  );
}
