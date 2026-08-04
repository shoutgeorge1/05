/** All figures are illustrative sample data — not O5 internal metrics. */

export const ILLUSTRATIVE =
  "Illustrative model—not O5 internal data.";

export const shoppingCommandBrands = [
  {
    brand: "Quiksilver",
    status: "Watch",
    mcHealth: "Issues elevated",
    feedIssues: 42,
    budgetPacing: "92% of plan",
    inventoryPressure: "Boardshorts deep / tees low",
    promo: "Full-price posture",
    anomaly: "Spike in disapproved GTIN missing",
    decision: "Pause weak non-brand Search; clear GTIN queue",
  },
  {
    brand: "Billabong",
    status: "Stable",
    mcHealth: "Mostly clean",
    feedIssues: 11,
    budgetPacing: "78% of plan",
    inventoryPressure: "Healthy",
    promo: "Full-price posture",
    anomaly: "Dual GA4 reporting mismatch (ops)",
    decision: "Lock GA4 source of truth before scaling",
  },
  {
    brand: "Eddie Bauer",
    status: "Stabilize",
    mcHealth: "New catalog risk",
    feedIssues: 67,
    budgetPacing: "110% early test",
    inventoryPressure: "Outerwear deep",
    promo: "Seasonal push (illustrative)",
    anomaly: "Availability mismatches vs OMS",
    decision: "Cap spend until availability SLA met",
  },
];

export const experimentQueue = [
  {
    id: "EX-01",
    brand: "Quiksilver",
    hypothesis: "Attribute-forward titles lift Shopping CTR on boardshorts",
    status: "Ready",
    owner: "Paid Search",
  },
  {
    id: "EX-02",
    brand: "Billabong",
    hypothesis: "Category LP beats lifestyle collection for “women’s surf jacket”",
    status: "Needs creative",
    owner: "Paid + Ecommerce",
  },
  {
    id: "EX-03",
    brand: "Eddie Bauer",
    hypothesis: "Suppress critical-stock SKUs reduces wasted Shopping clicks",
    status: "Blocked on inventory feed",
    owner: "Paid + Ops",
  },
];

export const promoCalendar = [
  { week: "W1", brand: "Quiksilver", event: "No sitewide MD (policy)" },
  { week: "W1", brand: "Billabong", event: "Athlete drop — creative only" },
  { week: "W2", brand: "Eddie Bauer", event: "Outerwear layering story" },
  { week: "W3", brand: "Quiksilver", event: "New boardshort color options" },
  { week: "W4", brand: "Portfolio", event: "Reporting retro — feed SLAs" },
];

export const feedControlProducts = [
  {
    id: "SKU-100",
    brand: "Harbor Co.",
    name: "19\" Performance Boardshort",
    margin: "A",
    inventory: "healthy",
    promo: "full-price",
    priority: "hero",
    bidHint: "Protect / maintain",
    include: true,
  },
  {
    id: "SKU-220",
    brand: "Trail North",
    name: "Insulated Parka Olive",
    margin: "B",
    inventory: "deep",
    promo: "approved-promo",
    priority: "core",
    bidHint: "Push inventory",
    include: true,
  },
  {
    id: "SKU-318",
    brand: "Harbor Co.",
    name: "Classic Logo Tee White",
    margin: "C",
    inventory: "critical",
    promo: "full-price",
    priority: "long-tail",
    bidHint: "Suppress",
    include: false,
  },
  {
    id: "SKU-441",
    brand: "Trail North",
    name: "Fleece Half-Zip Navy",
    margin: "A",
    inventory: "low",
    promo: "full-price",
    priority: "core",
    bidHint: "Bid down",
    include: true,
  },
  {
    id: "SKU-512",
    brand: "Harbor Co.",
    name: "Women's Crop Zip Hoodie",
    margin: "B",
    inventory: "healthy",
    promo: "markdown",
    priority: "exit",
    bidHint: "Promo segment only",
    include: true,
  },
  {
    id: "SKU-608",
    brand: "Trail North",
    name: "Trail Sock 3-Pack",
    margin: "C",
    inventory: "deep",
    promo: "full-price",
    priority: "long-tail",
    bidHint: "Low priority",
    include: true,
  },
];

export const collectionLandingCopy = {
  brand: "Harbor Co.",
  category: "Men's Performance Boardshorts",
  eyebrow: "High-intent concept · fictional merchandise",
  headline: "Boardshorts built for long water days",
  subhead:
    "Filter by length and stretch. Land paid traffic on category intent—not a lifestyle homepage—then hand off to the existing store checkout.",
  trust: [
    "Free shipping threshold (illustrative)",
    "Easy returns window (illustrative)",
    "Fit notes from real product attributes",
  ],
  groups: [
    {
      name: "19\" performance",
      intent: "Core surf performance length",
      products: ["Black Performance 19\"", "Navy Performance 19\"", "Olive Performance 19\""],
    },
    {
      name: "Stretch comfort",
      intent: "Buyers searching stretch / 4-way",
      products: ["Stretch Volley 18\"", "Hybrid Stretch 17\""],
    },
    {
      name: "Complete the kit",
      intent: "Cross-sell without hijacking intent",
      products: ["UV Surf Tee", "Traction Sandal"],
    },
  ],
  businessCase:
    "Paid category queries convert better on focused merchandising than on brand homepages. A thin Next.js (or enriched Shopify) layer can improve message match without replacing Shopify checkout—avoid headless rewrites for sport.",
  tradeoffs: [
    "Extra surface to maintain vs editing Shopify collections",
    "Must sync price/availability or trust erodes",
    "SEO benefit only if indexable and canonical strategy is clean",
    "Brand team may prefer lifestyle storytelling—align before launch",
  ],
};
