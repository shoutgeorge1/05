"use client";

import { useState } from "react";
import { evidence } from "@/data/evidence";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";

export function EvidenceExplorer() {
  const [q, setQ] = useState("");
  const [confidence, setConfidence] = useState("all");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [roleOnly, setRoleOnly] = useState(false);

  const brands = Array.from(new Set(evidence.map((e) => e.companyOrBrand))).sort();
  const categories = Array.from(new Set(evidence.map((e) => e.category))).sort();

  const filtered = evidence.filter((e) => {
    if (confidence !== "all" && e.confidence !== confidence) return false;
    if (category !== "all" && e.category !== category) return false;
    if (brand !== "all" && e.companyOrBrand !== brand) return false;
    if (roleOnly && e.roleRelevant === false) return false;
    if (q) {
      const hay =
        `${e.id} ${e.finding} ${e.observation} ${e.companyOrBrand} ${e.sourceTitle}`.toLowerCase();
      if (!hay.includes(q.toLowerCase())) return false;
    }
    return true;
  });

  return (
    <div>
      <div className="mb-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        <label className="text-xs">
          <span className="eyebrow">Search</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="mt-1 w-full rounded border border-[var(--line)] bg-[var(--panel)] px-2 py-1.5 text-sm"
          />
        </label>
        <label className="text-xs">
          <span className="eyebrow">Confidence</span>
          <select
            value={confidence}
            onChange={(e) => setConfidence(e.target.value)}
            className="mt-1 w-full rounded border border-[var(--line)] bg-[var(--panel)] px-2 py-1.5 text-sm"
          >
            {["all", "confirmed", "strong-indicator", "inference", "unknown"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs">
          <span className="eyebrow">Subject</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 w-full rounded border border-[var(--line)] bg-[var(--panel)] px-2 py-1.5 text-sm"
          >
            <option value="all">all</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="text-xs">
          <span className="eyebrow">Brand / entity</span>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 w-full rounded border border-[var(--line)] bg-[var(--panel)] px-2 py-1.5 text-sm"
          >
            <option value="all">all</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-end gap-2 pb-2 text-xs">
          <input
            type="checkbox"
            checked={roleOnly}
            onChange={(e) => setRoleOnly(e.target.checked)}
          />
          Prefer role-relevant records
        </label>
      </div>

      <p className="mb-3 text-xs text-[var(--muted)]">
        {filtered.length} of {evidence.length} evidence items
      </p>

      <div className="space-y-4">
        {filtered.map((e) => (
          <article key={e.id} id={e.id} className="panel scroll-mt-24 rounded-lg p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-mono text-[11px] text-[var(--muted)]">
                  {e.id} · {e.evidenceType} · {e.dateAccessed}
                </p>
                <h3 className="mt-1 font-semibold">{e.finding}</h3>
              </div>
              <ConfidenceBadge confidence={e.confidence} />
            </div>
            <p className="mt-2 text-sm">
              <span className="font-medium">{e.companyOrBrand}</span>
              {e.property ? ` · ${e.property}` : ""} · {e.category}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              <span className="font-medium text-[var(--ink)]">Observation:</span>{" "}
              {e.observation}
            </p>
            <p className="mt-2 text-sm">
              <span className="font-medium">Business implication:</span>{" "}
              {e.businessImplication}
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              <span className="font-medium text-[var(--ink)]">Does not prove:</span>{" "}
              {e.doesNotProve}
            </p>
            {e.nextInvestigation && (
              <p className="mt-1 text-xs text-[var(--muted)]">Next: {e.nextInvestigation}</p>
            )}
            <a
              href={e.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-[var(--accent)] hover:underline"
            >
              {e.sourceTitle} →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
