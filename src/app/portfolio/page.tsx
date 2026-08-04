import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { broaderPortfolioBrands, likelyRoleBrands } from "@/data/brands";

export const metadata: Metadata = { title: "Brand scope" };

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="Brand scope"
        title="Quiksilver, Billabong, Eddie Bauer, and Dickies"
        description="This paid search role covers these four brands. Other licensed names may exist at the company; they’re not the focus here. Open to more if the team adds them."
        crumbs={[{ href: "/portfolio", label: "Brand scope" }]}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--ok)]">
            Brands for this role
          </h2>
          <div className="space-y-2">
            {likelyRoleBrands.map((b) => (
              <article
                key={b.id}
                className="panel rounded-lg border-[var(--ok)]/20 px-4 py-3 sm:px-5"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">{b.name}</h3>
                  {b.statusLabel ? (
                    <span className="text-xs font-semibold uppercase tracking-wide text-[var(--ok)]">
                      {b.statusLabel}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-base leading-relaxed text-[var(--muted)]">
                  {b.roleRelevanceNote}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
            Other licensed names
          </h2>
          <div className="panel divide-y divide-[var(--line-soft)] rounded-lg">
            {broaderPortfolioBrands.map((b) => (
              <div key={b.id} className="px-4 py-3 sm:px-5">
                <p className="text-base font-medium">{b.name}</p>
                <p className="mt-0.5 text-sm text-[var(--muted)]">
                  Not the focus of this paid search role.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
