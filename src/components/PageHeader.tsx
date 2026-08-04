import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Array<{ href: string; label: string }>;
}) {
  return (
    <header className="mb-8 border-b border-[var(--line)] pb-6">
      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-3 flex flex-wrap gap-1 text-sm text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--ink)]">
            Command Center
          </Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex items-center gap-1">
              <span aria-hidden>/</span>
              <Link href={c.href} className="hover:text-[var(--ink)]">
                {c.label}
              </Link>
            </span>
          ))}
        </nav>
      )}
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h1 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      )}
    </header>
  );
}
