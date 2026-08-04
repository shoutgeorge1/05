import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";

describe("retired route redirects", () => {
  it("maps encyclopedia routes to consolidated destinations", async () => {
    const redirects = await nextConfig.redirects!();
    const map = Object.fromEntries(redirects.map((r) => [r.source, r.destination]));
    expect(map["/company"]).toBe("/");
    expect(map["/properties"]).toBe("/portfolio");
    expect(map["/performance"]).toBe("/tech");
    expect(map["/seo"]).toBe("/tech");
    expect(map["/commerce"]).toBe("/tech");
    expect(map["/interview"]).toBe("/");
    expect(map["/evidence"]).toBe("/");
    expect(map["/feed-lab"]).toBe("/feed");
    expect(map["/paid-media"]).toBe("/feed");
    expect(map["/opportunities"]).toBe("/plan");
    expect(map["/prototypes/collection-landing"]).toBe("/feed/landing");
  });
});
