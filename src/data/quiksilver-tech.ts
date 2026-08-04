/** Quick tech read on quiksilver.com — factual, scannable. Measured 2026-08-04. */

export const qsTech = {
  url: "https://www.quiksilver.com/",
  collectionUrl:
    "https://www.quiksilver.com/collections/mens-clothing-boardshorts",
  measuredAt: "2026-08-04",
  theme:
    "o5 | Quiksilver | Production Base @SLTWTR · Liberated Platform schema",
  lighthouse: {
    page: "Homepage (mobile, simulated)",
    score: 21,
    lcp: "11.8 s",
    tbt: "5,450 ms",
    cls: "0.222",
    weight: "~37 MiB",
    requests: 523,
    scripts: 144,
    note: "Local Lighthouse 11 · directional snapshot of how heavy the page feels — not a formal lab CI score.",
  },
  htmlSignals: [
    { label: "Homepage HTML", value: "~750 KB" },
    { label: "Script tags (HTML)", value: "114" },
    { label: "Collection HTML", value: "~1.1 MB · 159 scripts" },
    { label: "Theme", value: "Custom Liberated Platform (not Dawn)" },
  ],
  stackSeen: [
    "Shopify + web pixels",
    "GTM / gtag (tag manager for analytics & ads)",
    "Klaviyo",
    "Attentive",
    "Gorgias",
    "Yotpo",
    "OneTrust",
    "Clarity",
    "Forter (heavy main-thread in this run)",
    "Facebook / Pinterest / Snap / Bing",
  ],
  findings: [
    {
      title: "Homepage is for brand browsing; paid category search wants focus",
      body: "Video, promos, broad navigation — fine for direct traffic. Someone searching a specific product type (e.g. men’s boardshorts) usually does better on a tighter first page.",
    },
    {
      title: "Weight comes from theme, media, and tags — not “Shopify is slow”",
      body: "Server response was fine (~60 ms). Slowdown shows up in main-content speed (LCP — largest contentful paint), JavaScript, and third-party tags. Commerce can stay; the paid entry can be leaner.",
    },
    {
      title: "Category search is hard on a heavy lifestyle shell",
      body: "Piling more content onto the lifestyle homepage is the hard path. High-intent pages fit better on a light marketing layer; product page, cart, and checkout stay on Shopify.",
    },
  ],
  verdict: [
    {
      area: "Shopify commerce",
      stance: "Keep",
      note: "Product page, cart, checkout, and inventory stay here.",
    },
    {
      area: "Theme / homepage",
      stance: "Leave for brand",
      note: "Optional improvements for the web team — not a paid-search rebuild.",
    },
    {
      area: "Paid + SEO entry",
      stance: "Light marketing layer",
      note: "Intent-matched pages; live product data from the Shopify catalog. Checkout still on Quiksilver.com.",
    },
  ],
};
