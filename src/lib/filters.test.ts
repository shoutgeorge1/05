import { describe, expect, it } from "vitest";
import { brands } from "@/data/brands";
import { evidence } from "@/data/evidence";
import { properties } from "@/data/properties";
import { feedControlProducts } from "@/data/prototypes";

describe("portfolio filtering", () => {
  it("returns only likely-relevant brands", () => {
    const result = brands.filter((b) => b.roleRelevance === "likely-relevant");
    expect(result.map((b) => b.id).sort()).toEqual(
      ["billabong", "dickies", "eddie-bauer", "quiksilver"].sort(),
    );
  });

  it("searches by brand name", () => {
    const result = brands.filter((b) => b.name.toLowerCase().includes("eddie"));
    expect(result).toHaveLength(1);
    expect(result[0].roleRelevance).toBe("likely-relevant");
  });
});

describe("evidence filtering", () => {
  it("filters confirmed items", () => {
    const result = evidence.filter((e) => e.confidence === "confirmed");
    expect(result.length).toBeGreaterThan(0);
  });
});

describe("property inventory", () => {
  it("includes three O5-related DTC storefronts", () => {
    const dtc = properties.filter(
      (p) => p.o5Operated === true && p.propertyType === "dtc-storefront",
    );
    expect(dtc.map((p) => p.domain).sort()).toEqual(
      ["billabong.com", "eddiebauer.com", "quiksilver.com"].sort(),
    );
  });
});

describe("feed control filters", () => {
  it("can suppress critical inventory fictional SKUs", () => {
    const critical = feedControlProducts.filter((p) => p.inventory === "critical");
    expect(critical.length).toBeGreaterThan(0);
    expect(critical.every((p) => p.bidHint.toLowerCase().includes("suppress") || !p.include || p.bidHint.toLowerCase().includes("bid"))).toBe(true);
  });
});
