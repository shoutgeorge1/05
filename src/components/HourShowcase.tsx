import Link from "next/link";
import { hourShowcase } from "@/data/hour-showcase";
import { LANDING_HREF, LANDING_LINK_PROPS } from "@/lib/nav";

export function HourShowcase({
  showLandingLink = true,
}: {
  showLandingLink?: boolean;
}) {
  return (
    <section className="panel mb-6 rounded-lg border-[var(--accent)]/30 p-5">
      <p className="eyebrow">Example · not a store rebuild</p>
      <h2 className="mt-1 text-lg font-semibold">{hourShowcase.title}</h2>
      <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">
        {hourShowcase.lead}
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed">
        {hourShowcase.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="mt-3 text-sm text-[var(--muted)]">{hourShowcase.proof}</p>
      {showLandingLink ? (
        <Link
          href={LANDING_HREF}
          {...LANDING_LINK_PROPS}
          className="mt-3 inline-block text-base font-medium text-[var(--accent)] hover:underline"
        >
          Open boardshorts example ↗
        </Link>
      ) : null}
    </section>
  );
}
