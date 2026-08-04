import { describe, expect, it } from "vitest";
import { brands, likelyRoleBrands } from "@/data/brands";
import { evidence } from "@/data/evidence";
import { opportunities } from "@/data/opportunities";
import { properties } from "@/data/properties";
import { feedDisclaimer } from "@/data/feeds";
import { ILLUSTRATIVE } from "@/data/prototypes";
import { workingNotes } from "@/data/company";
import { DEMO_PATH, NAV_ITEMS } from "@/lib/nav";

describe("data integrity", () => {
  it("uses unique evidence IDs with doesNotProve", () => {
    const ids = evidence.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const e of evidence) {
      expect(e.doesNotProve.length).toBeGreaterThan(10);
    }
  });

  it("links brand evidence IDs to ledger entries", () => {
    const set = new Set(evidence.map((e) => e.id));
    for (const brand of brands) {
      for (const id of brand.evidenceIds) {
        expect(set.has(id)).toBe(true);
      }
      expect(brand.interviewQuestion.length).toBeGreaterThan(10);
      expect(brand.roleRelevance).toBeTruthy();
    }
  });

  it("links property and opportunity evidence IDs", () => {
    const set = new Set(evidence.map((e) => e.id));
    for (const prop of properties) {
      for (const id of prop.evidenceIds) expect(set.has(id)).toBe(true);
    }
    for (const op of opportunities) {
      for (const id of op.evidenceIds) expect(set.has(id)).toBe(true);
    }
  });

  it("never uses Zero Five naming", () => {
    const blob = JSON.stringify({ brands, properties, evidence });
    expect(blob.toLowerCase()).not.toContain("zero five");
  });

  it("keeps a short insights-only nav", () => {
    expect(NAV_ITEMS.map((n) => n.href)).toEqual([
      "/",
      "/portfolio",
      "/feed",
      "/tech",
      "/feed/landing",
      "/plan",
    ]);
  });

  it("defines a three-stop follow-up path ending on the landing", () => {
    expect(DEMO_PATH).toHaveLength(3);
    expect(DEMO_PATH[0].href).toBe("/");
    expect(DEMO_PATH[1].href).toBe("/portfolio");
    expect(DEMO_PATH[2].href).toBe("/feed/landing");
  });

  it("marks four brands for this role and four with other teams", () => {
    expect(likelyRoleBrands.map((b) => b.id).sort()).toEqual(
      ["billabong", "dickies", "eddie-bauer", "quiksilver"].sort(),
    );
    for (const id of ["champion", "hurley", "izod", "lucky-brand"]) {
      expect(brands.find((b) => b.id === id)?.roleRelevance).toBe("not-paid-media");
    }
    expect(brands.find((b) => b.id === "dickies")?.dtcOperator).toMatch(/WRK/i);
    expect(workingNotes.brandsForThisRole).toHaveLength(4);
    expect(workingNotes.otherTeams).toHaveLength(4);
  });

  it("keeps illustrative disclaimers visible in data", () => {
    expect(feedDisclaimer.toLowerCase()).toContain("illustrative");
    expect(ILLUSTRATIVE.toLowerCase()).toContain("not o5");
  });
});
