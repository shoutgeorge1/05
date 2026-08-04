import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import {
  goNoGoScorecard,
  interviewSections,
  privateNotesFramework,
} from "@/data/interview";
import { workingNotes, roleContext } from "@/data/company";

export const metadata: Metadata = { title: "Talk track" };

const QUESTIONS = [
  {
    q: "Confirm: Quiksilver, Billabong, Eddie Bauer, and Dickies are the four Ads / Merchant surfaces for this role?",
    follow: [
      "Ask for account list + who partners on Looker.",
      "For Dickies: which channel/feed path is actually in scope?",
    ],
  },
  {
    q: "Who owns feed transforms and Merchant Center issues today?",
    follow: [
      "If still fuzzy post-agency: offer to own the Search-side SLA.",
    ],
  },
  {
    q: "What does Looker need from Search in the first 90 days?",
    follow: [
      "Brand splits, conversion definition, product/feed performance — not a shadow BI rebuild.",
    ],
  },
  {
    q: "How do inventory and promos reach Shopping labels today?",
    follow: ["Calendar artifact + who can approve exceptions under full-price posture."],
  },
  {
    q: "MCC vs inherited brand accounts from the agency era?",
    follow: ["Quik vs Billabong exclusions; EB seasonality separate."],
  },
];

export default function InterviewPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader
        eyebrow="Talk track"
        title="Partner on Search. Raise the ceiling together."
        description={`${roleContext.title} · ${roleContext.locationListed}. Warm and clear — they’re competent operators who took Search back from an agency. Offer systems help as collaboration.`}
        crumbs={[{ href: "/interview", label: "Talk track" }]}
      />

      <section className="panel mb-4 rounded-lg border-[var(--accent)]/40 bg-[var(--accent-soft)]/40 p-5">
        <h2 className="text-base font-semibold">{workingNotes.headline}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
          {workingNotes.subhead}
        </p>
      </section>

      <div className="mb-6 space-y-3">
        {interviewSections.map((s) => (
          <article key={s.id} className="panel rounded-lg p-4">
            <h2 className="text-sm font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
          </article>
        ))}
      </div>

      <section className="panel mb-6 rounded-lg p-5">
        <h2 className="text-base font-semibold">2-minute follow-up path</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-[var(--muted)]">
          <li>
            <span className="font-medium text-[var(--ink)]">How I&apos;d approach this</span>{" "}
            — four brands; feeds / Shopping / landings; Looker partnership
          </li>
          <li>
            <span className="font-medium text-[var(--ink)]">Brand scope</span> — this role vs
            other teams
          </li>
          <li>
            <span className="font-medium text-[var(--ink)]">Quiksilver landing</span> —
            thin marketing layer for category intent; Shopify checkout stays
          </li>
        </ol>
        <Link
          href="/?demo=1"
          className="mt-4 inline-flex rounded-md bg-[var(--shell)] px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Launch path
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold">Questions to ask</h2>
        <div className="space-y-3">
          {QUESTIONS.map((item, i) => (
            <article key={item.q} className="panel rounded-lg p-4">
              <p className="font-mono text-[11px] text-[var(--muted)]">Q{i + 1}</p>
              <p className="font-medium">{item.q}</p>
              <ul className="mt-2 list-disc pl-4 text-xs text-[var(--muted)]">
                {item.follow.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="private-evaluation" className="scroll-mt-24">
        <div className="mb-3 rounded-lg border border-[var(--critical)] bg-[var(--critical-bg)] px-4 py-3 text-sm">
          <p className="font-semibold">Private evaluation</p>
          <p className="mt-1">{privateNotesFramework.warning}</p>
          <ul className="mt-2 list-disc pl-4 text-[var(--muted)]">
            {privateNotesFramework.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>

        <div className="table-wrap mt-4 rounded-lg">
          <table className="data">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Weight</th>
                <th>Accept</th>
                <th>Walk</th>
              </tr>
            </thead>
            <tbody>
              {goNoGoScorecard.map((row) => (
                <tr key={row.id}>
                  <td className="font-medium">{row.factor}</td>
                  <td>{row.weight}</td>
                  <td className="text-[var(--muted)]">{row.acceptSignal}</td>
                  <td className="text-[var(--muted)]">{row.declineSignal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
