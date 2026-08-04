"use client";

import { useState } from "react";
import { opportunities } from "@/data/opportunities";
import { rankOpportunities, SCORING_DOC } from "@/lib/scoring";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";
import { EvidenceChips } from "@/components/EvidenceChips";

export function OpportunityMatrix() {
  const [timing, setTiming] = useState("all");

  const ranked = rankOpportunities(opportunities).filter((op) => {
    if (timing !== "all" && op.timing !== timing) return false;
    return true;
  });

  return (
    <div>
      <div className="panel mb-4 rounded-lg p-4 text-sm">
        <p className="font-medium">Prioritization (directional, not precise)</p>
        <p className="mt-1 text-xs text-[var(--muted)]">{SCORING_DOC.formula}</p>
        <ul className="mt-2 list-disc pl-4 text-xs text-[var(--muted)]">
          {SCORING_DOC.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>

      <label className="mb-4 block text-xs">
        <span className="eyebrow">Timing filter</span>
        <select
          value={timing}
          onChange={(e) => setTiming(e.target.value)}
          className="mt-1 rounded border border-[var(--line)] bg-[var(--panel)] px-2 py-1.5 text-sm"
        >
          {["all", "7-days", "30-days", "30-90-days", "12-months"].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <div className="space-y-3">
        {ranked.map((op) => (
          <article key={op.id} className="panel rounded-lg p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-mono text-[11px] text-[var(--muted)]">
                  {op.id} · {op.timing} · {op.category}
                </p>
                <h3 className="text-base font-semibold">{op.title}</h3>
                <p className="text-xs text-[var(--muted)]">{op.brandOrProperty}</p>
              </div>
              <ConfidenceBadge confidence={op.confidence} compact />
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">{op.problem}</p>
            <dl className="mt-3 grid gap-2 text-xs sm:grid-cols-4">
              <div>Impact: {op.commercialImpact}</div>
              <div>Speed: {op.speedToValue}</div>
              <div>Difficulty: {op.technicalDifficulty}</div>
              <div>Org dependency: {op.organizationalDependency}</div>
            </dl>
            <p className="mt-2 text-sm">
              <span className="font-medium">Next:</span> {op.nextAction}
            </p>
            <div className="mt-2">
              <EvidenceChips ids={op.evidenceIds} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
