import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { HourShowcase } from "@/components/HourShowcase";
import { qsTech } from "@/data/quiksilver-tech";
import { LANDING_HREF, LANDING_LINK_PROPS } from "@/lib/nav";

export const metadata: Metadata = { title: "Quiksilver tech" };

export default function QuiksilverTechPage() {
  const lh = qsTech.lighthouse;

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Worked example · quiksilver.com"
        title="A quick technical look at Quiksilver.com"
        description="Not a full site audit — a short, concrete read so recommendations about paid entry pages have something real to stand on."
        crumbs={[{ href: "/tech", label: "Quiksilver tech" }]}
      />

      <section className="panel mb-6 rounded-lg p-5 sm:p-6">
        <h2 className="text-lg font-semibold">How to read this page</h2>
        <dl className="mt-4 space-y-4 text-base leading-relaxed">
          <div>
            <dt className="font-semibold text-[var(--ink)]">What this is</dt>
            <dd className="mt-1 text-[var(--muted)]">
              A quick technical look at Quiksilver.com — a worked example for this
              conversation, not a formal deliverable.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--ink)]">What I did</dt>
            <dd className="mt-1 text-[var(--muted)]">
              Checked live homepage and storefront signals: page weight, scripts,
              speed-ish metrics (Lighthouse on mobile), and basic structure. Enough
              to see the shape of the problem — not a full audit.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--ink)]">Why</dt>
            <dd className="mt-1 text-[var(--muted)]">
              So ideas like a lighter entry / Next.js marketing layer for paid
              intent — with Shopify still handling checkout — rest on something
              concrete, not vibes.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--ink)]">What this is not</dt>
            <dd className="mt-1 text-[var(--muted)]">
              Not comprehensive. An illustrative snapshot of how I&apos;d think
              about the site — not a complete Quiksilver.com audit.
            </dd>
          </div>
        </dl>
      </section>

      <section className="panel mb-6 rounded-lg border-[var(--accent)]/30 bg-[var(--accent-soft)]/40 p-5 sm:p-6">
        <h2 className="text-lg font-semibold">Working opinion</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
          <li>
            The Shopify storefront handles cart and checkout well — keep commerce
            there.
          </li>
          <li>
            Paid traffic sometimes benefits from a lighter, intent-matched entry
            page in front of it (for example, boardshorts instead of the full
            lifestyle homepage).
          </li>
          <li>
            Hand product page, cart, and checkout back to Shopify. No full rebuild
            that replaces the storefront.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <h2 className="text-lg font-semibold">Mobile Lighthouse · homepage</h2>
          <p className="text-sm text-[var(--muted)]">Measured {qsTech.measuredAt}</p>
        </div>
        <article className="panel rounded-lg p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-base font-semibold">{lh.page}</p>
              <a
                href={qsTech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-block text-sm text-[var(--accent)] hover:underline"
              >
                quiksilver.com ↗
              </a>
            </div>
            <p className="text-4xl font-semibold tabular-nums text-[var(--warn)]">
              {lh.score}
            </p>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-4 text-base sm:grid-cols-3">
            {[
              ["LCP", "how fast the main content shows up", lh.lcp],
              ["TBT", "how long the page feels frozen when you tap", lh.tbt],
              ["CLS", "how much the page jumps while loading", lh.cls],
              ["Weight", "total download size", lh.weight],
              ["Requests", "number of file downloads", String(lh.requests)],
              ["Scripts", "script files loaded (many third-party)", String(lh.scripts)],
            ].map(([k, gloss, v]) => (
              <div key={k}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                  {k}
                </dt>
                <dd className="mt-0.5 text-sm leading-snug text-[var(--muted)]">{gloss}</dd>
                <dd className="mt-0.5 font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-[var(--muted)]">{lh.note}</p>
        </article>
      </section>

      <section className="mb-6 grid gap-3 sm:grid-cols-2">
        {qsTech.htmlSignals.map((s) => (
          <div key={s.label} className="panel rounded-lg p-4 sm:p-5">
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
              {s.label}
            </p>
            <p className="mt-1.5 text-base font-medium">{s.value}</p>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-lg font-semibold">What showed up</h2>
        <div className="space-y-3">
          {qsTech.findings.map((f) => (
            <article key={f.title} className="panel rounded-lg p-4 sm:p-5">
              <h3 className="text-base font-semibold leading-snug">{f.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel mb-6 rounded-lg p-5 sm:p-6">
        <h2 className="text-lg font-semibold">Tags / apps seen (homepage HTML)</h2>
        <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">
          {qsTech.stackSeen.join(" · ")}
        </p>
        <p className="mt-3 text-sm text-[var(--muted)]">Theme: {qsTech.theme}</p>
      </section>

      <section className="mb-6">
        <h2 className="mb-3 text-lg font-semibold">Stance</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {qsTech.verdict.map((v) => (
            <article key={v.area} className="panel rounded-lg p-4 sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
                {v.stance}
              </p>
              <h3 className="mt-1.5 text-base font-semibold">{v.area}</h3>
              <p className="mt-1.5 text-base leading-relaxed text-[var(--muted)]">
                {v.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <HourShowcase />

      <p className="text-base text-[var(--muted)]">
        Live collection base:{" "}
        <a
          href={qsTech.collectionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--accent)] hover:underline"
        >
          mens-clothing-boardshorts ↗
        </a>
        {" · "}
        <Link
          href={LANDING_HREF}
          {...LANDING_LINK_PROPS}
          className="font-medium text-[var(--accent)] hover:underline"
        >
          Landing example ↗
        </Link>
      </p>
    </div>
  );
}
