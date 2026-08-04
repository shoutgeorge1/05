import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { HourShowcase } from "@/components/HourShowcase";
import { workingNotes, roleContext } from "@/data/company";
import { LANDING_HREF, LANDING_LINK_PROPS } from "@/lib/nav";
import { QS_COLLECTION } from "@/data/quiksilver-landing";

export default function ApproachPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Paid Search & Shopping · Follow-up notes"
        title={workingNotes.headline}
        description={workingNotes.subhead}
      />

      <section className="mb-6 grid gap-3 sm:grid-cols-2">
        <div className="panel rounded-lg border-[var(--ok)]/30 p-4 sm:p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ok)]">
            Brands for this role
          </h2>
          <ul className="mt-2 space-y-1.5 text-base font-medium">
            {workingNotes.brandsForThisRole.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="panel rounded-lg p-4 sm:p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
            Other licensed names
          </h2>
          <ul className="mt-2 space-y-1.5 text-base text-[var(--muted)]">
            {workingNotes.otherTeams.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Present at the company; not the focus of this paid search role.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Where I&apos;d help</h2>
        <ul className="space-y-2">
          {workingNotes.valueProps.map((v) => (
            <li key={v.title} className="panel rounded-lg px-4 py-3 text-base leading-relaxed">
              <span className="font-semibold">{v.title}.</span>{" "}
              <span className="text-[var(--muted)]">{v.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <HourShowcase />

      <section className="panel mb-6 rounded-lg p-4 sm:p-5">
        <h2 className="text-base font-semibold">Quiksilver boardshorts example</h2>
        <p className="mt-1.5 text-base leading-relaxed text-[var(--muted)]">
          A focused page for that search intent, then checkout on Quiksilver.com. Open it
          to see the idea in practice.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href={LANDING_HREF}
            {...LANDING_LINK_PROPS}
            className="rounded-md bg-[var(--ink)] px-3.5 py-2 text-base font-semibold text-white hover:opacity-90"
          >
            Open landing ↗
          </Link>
          <a
            href={QS_COLLECTION}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--line)] px-3.5 py-2 text-base font-semibold hover:border-[var(--accent)]"
          >
            Live collection ↗
          </a>
          <Link
            href="/tech"
            className="rounded-md border border-[var(--line)] px-3.5 py-2 text-base font-semibold hover:border-[var(--accent)]"
          >
            Quiksilver tech
          </Link>
        </div>
      </section>

      <section className="mb-6 grid gap-3 sm:grid-cols-2">
        <div className="panel rounded-lg p-4 sm:p-5">
          <h2 className="text-base font-semibold">First moves</h2>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-base leading-relaxed text-[var(--muted)]">
            <li>Confirm accounts and product feeds</li>
            <li>Align on what counts as a conversion</li>
            <li>Clean up product listings in Google (price, stock, titles)</li>
            <li>One focused landing test</li>
          </ol>
          <Link
            href="/plan"
            className="mt-3 inline-block text-base font-medium text-[var(--accent)] hover:underline"
          >
            90-day example →
          </Link>
        </div>
        <div className="panel rounded-lg p-4 sm:p-5">
          <h2 className="text-base font-semibold">Not aiming for</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-[var(--muted)]">
            {workingNotes.notThisRole.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <p className="text-sm text-[var(--muted)]">
        {roleContext.title} · {roleContext.locationListed} · reports to{" "}
        {roleContext.reportsTo}. Built to show how I&apos;d collaborate — not to audit
        your storefront.
      </p>
    </div>
  );
}
