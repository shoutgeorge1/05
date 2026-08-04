import { describe, expect, it } from "vitest";
import { opportunities } from "@/data/opportunities";
import { rankOpportunities, sortKey } from "@/lib/scoring";

describe("opportunity sorting", () => {
  it("ranks confirmed high-impact items above unknown low-impact items", () => {
    const high = sortKey({
      ...opportunities[0],
      commercialImpact: "high",
      confidence: "confirmed",
      speedToValue: "high",
      technicalDifficulty: "low",
      organizationalDependency: "low",
    });
    const low = sortKey({
      ...opportunities[0],
      commercialImpact: "low",
      confidence: "unknown",
      speedToValue: "low",
      technicalDifficulty: "high",
      organizationalDependency: "high",
    });
    expect(high).toBeGreaterThan(low);
  });

  it("returns stable descending order", () => {
    const ranked = rankOpportunities(opportunities);
    for (let i = 1; i < ranked.length; i++) {
      expect(sortKey(ranked[i - 1])).toBeGreaterThanOrEqual(sortKey(ranked[i]));
    }
  });

  it("uses qualitative ratings only", () => {
    for (const op of opportunities) {
      expect(["high", "medium", "low"]).toContain(op.commercialImpact);
      expect(["high", "medium", "low"]).toContain(op.speedToValue);
    }
  });
});
