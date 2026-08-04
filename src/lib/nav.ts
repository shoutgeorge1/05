/** Primary nav — insights only. Long reference lives in research/*.md */

export const LANDING_HREF = "/feed/landing";

export const LANDING_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function isLandingHref(href: string) {
  return href.split("#")[0] === LANDING_HREF;
}

export const NAV_ITEMS = [
  { href: "/", label: "Partnering on paid search" },
  { href: "/portfolio", label: "Brand scope" },
  { href: "/feed", label: "Search system" },
  { href: "/tech", label: "Quiksilver tech" },
  { href: LANDING_HREF, label: "Quiksilver landing" },
  { href: "/plan", label: "90-day example" },
] as const;

/** Short follow-up path — approach → brand scope → landing concept */
export const DEMO_PATH = [
  { href: "/", label: "Partnering on paid search", seconds: "0:00–0:40" },
  { href: "/portfolio", label: "Brand scope", seconds: "0:40–1:10" },
  {
    href: LANDING_HREF,
    label: "Quiksilver landing",
    seconds: "1:10–2:00",
  },
] as const;

export function navLabel(href: string): string {
  const exact = NAV_ITEMS.find((n) => n.href === href);
  if (exact) return exact.label;
  return "O5 Paid Search";
}
