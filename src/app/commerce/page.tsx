import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { EvidenceChips } from "@/components/EvidenceChips";

export const metadata: Metadata = { title: "Storefront signals" };

const signals = [
  {
    brand: "Quiksilver",
    need: "Shopping landings + feed attributes",
    note: "Shopify DTC (O5 BNG). Category queries need length/fabric match — see the boardshorts concept.",
    evidenceIds: ["ev-003", "ev-011"],
  },
  {
    brand: "Billabong",
    need: "Separate measurement clarity",
    note: "Sibling DTC (O5 BILL). Keep brand intent clean vs Quik; confirm GA4 source of truth before scaling.",
    evidenceIds: ["ev-004", "ev-020"],
  },
  {
    brand: "Eddie Bauer",
    need: "Availability ↔ Merchant Center (product feed)",
    note: "Outdoor calendar + OMS (order/inventory system) complexity. Search wastes money when stock/attributes lag.",
    evidenceIds: ["ev-005", "ev-006"],
  },
  {
    brand: "Dickies",
    need: "Channel map for ads",
    note: "Working assumption for this role — confirm which feeds/accounts it actually runs.",
    evidenceIds: ["ev-008"],
  },
];

export default function CommercePage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Storefront signals"
        title="What Search needs from commerce — light version"
        description="Not a tech SEO tour. Just the storefront facts that change how I’d run Paid Search & Shopping for the four brands in scope."
        crumbs={[{ href: "/commerce", label: "Storefront signals" }]}
      />

      <section className="panel mb-6 rounded-lg p-5">
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          Discovery → focused landing or collection → Shopify checkout → conversion ping →
          product/inventory signals back into Merchant Center (the product feed). I partner
          with ecommerce and merch; I don’t try to own the whole stack.
        </p>
      </section>

      <div className="space-y-3">
        {signals.map((s) => (
          <article key={s.brand} className="panel rounded-lg p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-semibold">{s.brand}</h2>
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--accent)]">
                {s.need}
              </p>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">{s.note}</p>
            <div className="mt-2">
              <EvidenceChips ids={s.evidenceIds} />
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm">
        <Link
          href="/feed/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--accent)] hover:underline"
        >
          Quiksilver landing concept ↗
        </Link>
        {" · "}
        <Link href="/feed" className="font-medium text-[var(--accent)] hover:underline">
          Search system →
        </Link>
      </p>
    </div>
  );
}
