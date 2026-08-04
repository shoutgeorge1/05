import { describe, expect, it } from "vitest";
import { architectureScenarios } from "@/data/paid-media";

describe("account architecture scenarios", () => {
  it("defines three named scenarios with invalidators", () => {
    expect(architectureScenarios).toHaveLength(3);
    for (const s of architectureScenarios) {
      expect(s.requiredData.length).toBeGreaterThan(0);
      expect(s.invalidators.length).toBeGreaterThan(0);
      expect(s.whenToUse.length).toBeGreaterThan(10);
    }
  });

  it("keeps advanced profit-aware scenario gated on finance data", () => {
    const advanced = architectureScenarios.find((s) => s.id === "C");
    expect(advanced?.requiredData.join(" ")).toMatch(/margin/i);
  });
});
