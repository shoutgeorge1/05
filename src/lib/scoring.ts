import type { Opportunity, QualitativeLevel } from "./research-types";

const LEVEL: Record<QualitativeLevel, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

function confidenceWeight(confidence: Opportunity["confidence"]): number {
  switch (confidence) {
    case "confirmed":
      return 3;
    case "strong-indicator":
      return 2.5;
    case "inference":
      return 1.5;
    case "unknown":
      return 0.5;
  }
}

/**
 * Directional sort key only (not a precise score).
 * Privileges confidence and speed; penalizes difficulty and org dependency.
 */
export function sortKey(op: Opportunity): number {
  return (
    LEVEL[op.commercialImpact] * 3 +
    confidenceWeight(op.confidence) * 4 +
    LEVEL[op.speedToValue] * 2 -
    LEVEL[op.technicalDifficulty] -
    LEVEL[op.organizationalDependency]
  );
}

export function rankOpportunities(ops: Opportunity[]): Opportunity[] {
  return [...ops].sort((a, b) => sortKey(b) - sortKey(a));
}

/** @deprecated Use qualitative ratings in UI; kept for tests of sort order. */
export function scoreOpportunity(op: Opportunity): number {
  return Math.round(sortKey(op) * 10);
}

export const SCORING_DOC = {
  formula:
    "Directional sort only: impact×3 + confidence×4 + speed×2 − difficulty − org dependency",
  notes: [
    "UI shows High / Medium / Low ratings—not fake-precision scores like 87.4.",
    "Confidence and operational feasibility outrank spectacle.",
    "Do not treat sort order as a financial forecast.",
  ],
};
