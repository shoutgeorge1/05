import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { planItems } from "@/data/plans";
import type { TimingBucket } from "@/lib/research-types";
import { LANDING_HREF, LANDING_LINK_PROPS } from "@/lib/nav";

export const metadata: Metadata = { title: "90-day example" };

const PHASES: { id: TimingBucket; title: string }[] = [
  { id: "7-days", title: "First week" },
  { id: "30-days", title: "First month" },
  { id: "30-90-days", title: "Days 30–90" },
];

const DO_NOT = [
  "Large campaign rebuilds",
  "Switching primary conversions without a baseline",
  "Broad budget reallocations",
  "Feed changes without merchandising approval",
  "Proposals to replace Shopify's storefront wholesale",
  "Public criticism of inherited systems",
];

export default function PlanPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="90-day example"
        title="Example first steps if I joined"
        description="Basics that protect what’s working, make the team look good, and don’t blow up accounts. Partner with the manager who took Search in-house. Looker stays the dashboard."
        crumbs={[{ href: "/plan", label: "90-day example" }]}
      />

      <section className="panel mb-6 rounded-lg border-[var(--accent)]/30 p-4 sm:p-5">
        <h2 className="text-base font-semibold">Tone</h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-[var(--muted)]">
          <li>Steady help — not a transformation speech.</li>
          <li>Feeds, measurement, one thin landing test when useful.</li>
          <li>
            Checkout stays on Shopify.{" "}
            <Link
              href={LANDING_HREF}
              {...LANDING_LINK_PROPS}
              className="font-medium text-[var(--accent)] hover:underline"
            >
              Boardshorts concept ↗
            </Link>
          </li>
        </ul>
      </section>

      <section className="panel mb-6 rounded-lg border-[var(--warn)]/40 bg-[var(--warn-bg)]/50 p-4 sm:p-5">
        <h2 className="text-base font-semibold">What not to change yet</h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base leading-relaxed">
          {DO_NOT.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </section>

      <div className="space-y-8">
        {PHASES.map((phase) => {
          const items = planItems.filter((p) => p.phase === phase.id);
          return (
            <section key={phase.id}>
              <h2 className="text-lg font-semibold">{phase.title}</h2>
              <ol className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item.id} className="panel rounded-lg px-4 py-3 sm:px-5">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
      </div>
    </div>
  );
}
