import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { FeedControlRoom } from "@/components/FeedControlRoom";
import { architectureScenarios } from "@/data/paid-media";
import {
  customLabelFramework,
  feedDisclaimer,
  normalizedFeedSchema,
} from "@/data/feeds";
import { ILLUSTRATIVE } from "@/data/prototypes";

export const metadata: Metadata = { title: "Search system" };

export default function FeedPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="Search system"
        title="How paid search and Shopping fit together"
        description="Accounts, product data, Shopping ads, focused landings, and clean reporting — for the four brands in scope. Illustrative examples only, not your internal numbers."
        crumbs={[{ href: "/feed", label: "Search system" }]}
      />

      <section className="panel mb-6 rounded-lg p-5 text-base leading-relaxed text-[var(--muted)]">
        <p>
          Shopping ads need a clean product feed — the file Google uses for price,
          availability, titles, and images. With good product data you can pause
          out-of-stock items, push high-margin or in-stock winners, and avoid paying
          for clicks that can’t convert.
        </p>
        <p className="mt-3">
          The controls below are an illustrative example of that operating logic. They’re
          not a claim that you lack tools — you’ll use your own stack and proprietary
          systems. This shows how I’d think about the job day to day.
        </p>
      </section>

      <p className="mb-6 text-base">
        <Link
          href="/feed/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--accent)] hover:underline"
        >
          Quiksilver boardshorts landing example ↗
        </Link>
        {" · "}
        <Link href="/tech" className="font-medium text-[var(--accent)] hover:underline">
          Quiksilver tech →
        </Link>
      </p>

      <div className="mb-6 rounded-lg border border-[var(--warn)] bg-[var(--warn-bg)] px-4 py-3 text-base font-medium">
        {feedDisclaimer}
      </div>

      <FeedControlRoom embedded />

      <section className="mt-10 mb-8">
        <h2 className="text-lg font-semibold">Product feed fields (illustrative)</h2>
        <p className="mt-1 text-base text-[var(--muted)]">{ILLUSTRATIVE}</p>
        <div className="table-wrap mt-3 rounded-lg">
          <table className="data">
            <thead>
              <tr>
                <th>Field</th>
                <th>Purpose</th>
                <th>Required</th>
              </tr>
            </thead>
            <tbody>
              {normalizedFeedSchema.map((f) => (
                <tr key={f.field}>
                  <td className="font-mono text-sm">{f.field}</td>
                  <td>{f.purpose}</td>
                  <td>{f.required ? "Yes" : "Optional"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {customLabelFramework.map((c) => (
            <article key={c.label} className="panel rounded-lg p-4 text-base leading-relaxed">
              <p className="font-semibold">{c.label}</p>
              <p className="mt-1 font-mono text-sm text-[var(--muted)]">
                {c.values.join(" · ")}
              </p>
              <p className="mt-1 text-[var(--muted)]">{c.use}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold">Account structure options</h2>
        <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">
          Don’t split campaigns more finely than conversion volume, product-data quality,
          margin data, and team capacity can support. More complexity is not automatically
          better.
        </p>
        <div className="mt-4 space-y-4">
          {architectureScenarios.map((s) => (
            <article key={s.id} className="panel rounded-lg p-4 sm:p-5">
              <p className="eyebrow">Option {s.id}</p>
              <h3 className="text-base font-semibold">{s.name}</h3>
              <p className="mt-1.5 text-base leading-relaxed text-[var(--muted)]">
                {s.summary}
              </p>
              <div className="mt-3 grid gap-3 text-base leading-relaxed md:grid-cols-2">
                <div>
                  <p className="font-medium">When it fits</p>
                  <p className="text-[var(--muted)]">{s.whenToUse}</p>
                </div>
                <div>
                  <p className="font-medium">Day-to-day effort</p>
                  <p className="text-[var(--muted)]">{s.operationalBurden}</p>
                </div>
                <div>
                  <p className="font-medium">Data required</p>
                  <ul className="list-disc pl-5 text-[var(--muted)]">
                    {s.requiredData.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium">What would make this a bad fit</p>
                  <ul className="list-disc pl-5 text-[var(--muted)]">
                    {s.invalidators.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel rounded-lg p-5">
        <h2 className="text-lg font-semibold">
          Quiksilver boardshorts landing example
        </h2>
        <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">
          A lighter page for people searching a specific product type — then hand off to
          Shopify checkout on Quiksilver.com. Built from the live{" "}
          <a
            href="https://www.quiksilver.com/collections/mens-clothing-boardshorts"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            mens-clothing-boardshorts
          </a>{" "}
          collection. Quiksilver first; same pattern possible for the other brands later.
        </p>
        <Link
          href="/feed/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-base font-medium text-[var(--accent)] hover:underline"
        >
          Open landing example ↗
        </Link>
      </section>
    </div>
  );
}
