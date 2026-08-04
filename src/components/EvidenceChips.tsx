import Link from "next/link";

export function EvidenceChips({ ids }: { ids: string[] }) {
  if (!ids.length) {
    return (
      <span className="font-mono text-[11px] text-[var(--muted)]">No evidence linked</span>
    );
  }
  return (
    <span className="flex flex-wrap gap-1.5">
      {ids.map((id) => (
        <Link
          key={id}
          href={`/evidence#${id}`}
          className="rounded border border-[var(--line)] bg-[var(--line-soft)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
        >
          {id}
        </Link>
      ))}
    </span>
  );
}
