import type { ReadinessRow } from "@/lib/research-types";

/** Cross-brand commerce / marketing readiness — evidence-based, not invented KPIs. */
export const readinessMatrix: ReadinessRow[] = [
  {
    id: "r-nav-qs",
    brand: "Quiksilver",
    dimension: "Navigation & discovery",
    state: "functional",
    explanation:
      "Full Shopify collection IA with lifestyle categories. Depth and filter UX need session-level audit; not claiming conversion quality from homepage alone.",
    confidence: "inference",
    evidenceIds: ["ev-003"],
  },
  {
    id: "r-nav-bb",
    brand: "Billabong",
    dimension: "Navigation & discovery",
    state: "functional",
    explanation: "Parallel Liberated-derived Shopify IA. Specialty positioning may conflict with broad paid landing if collections are lifestyle-heavy.",
    confidence: "inference",
    evidenceIds: ["ev-004", "ev-010"],
  },
  {
    id: "r-nav-eb",
    brand: "Eddie Bauer",
    dimension: "Navigation & discovery",
    state: "friction",
    explanation:
      "Post-relaunch Shopify property (early 2026). New launches often show incomplete taxonomy or thin collection content until merchandising catches up—verify with crawl.",
    confidence: "inference",
    evidenceIds: ["ev-005", "ev-006"],
  },
  {
    id: "r-track-qs",
    brand: "Quiksilver",
    dimension: "Paid measurement plumbing",
    state: "functional",
    explanation:
      "GTM + GA4 + AW tag + Consent Mode observed. Cannot confirm enhanced conversions, purchase value accuracy, or new-customer signals from outside.",
    confidence: "strong-indicator",
    evidenceIds: ["ev-012", "ev-011"],
  },
  {
    id: "r-track-bb",
    brand: "Billabong",
    dimension: "Paid measurement plumbing",
    state: "friction",
    explanation: "Dual GA4 IDs plus separate GTM suggest migration residue risk. Validate before trusting ROAS.",
    confidence: "strong-indicator",
    evidenceIds: ["ev-020", "ev-012"],
  },
  {
    id: "r-track-eb",
    brand: "Eddie Bauer",
    dimension: "Paid measurement plumbing",
    state: "functional",
    explanation: "GTM/GA4/AW present. New storefront + OMS means conversion QA is mandatory before scaling spend.",
    confidence: "strong-indicator",
    evidenceIds: ["ev-012", "ev-006"],
  },
  {
    id: "r-feed-all",
    brand: "O5 DTC cluster",
    dimension: "Merchant Center / feeds",
    state: "unknown",
    explanation:
      "Shopify makes a base product feed possible, but custom labels, margin tiers, GTIN quality, and multi-brand governance require account access.",
    confidence: "unknown",
    evidenceIds: ["ev-013"],
  },
  {
    id: "r-seo-qs",
    brand: "Quiksilver",
    dimension: "SEO technical baseline",
    state: "functional",
    explanation:
      "robots.txt allows product/collection crawl with facet disallows; sitemap expected via Shopify. Content depth and duplicate PDP risk unknown without crawl.",
    confidence: "strong-indicator",
    evidenceIds: ["ev-015"],
  },
  {
    id: "r-seo-bb",
    brand: "Billabong",
    dimension: "SEO technical baseline",
    state: "functional",
    explanation:
      "robots explicitly Shopify; disallows /search and multi-filter. Policies disallowed—fine for commerce SEO, watch collection thinness.",
    confidence: "confirmed",
    evidenceIds: ["ev-015"],
  },
  {
    id: "r-price-pos",
    brand: "Quiksilver / Billabong",
    dimension: "Price / promo positioning",
    state: "friction",
    explanation:
      "Public strategy is premium full-price DTC. On-site promo banners can still appear—paid media must reconcile brand policy with Shopping sale_price.",
    confidence: "inference",
    evidenceIds: ["ev-010"],
  },
  {
    id: "r-checkout",
    brand: "O5 DTC cluster",
    dimension: "Checkout & payments",
    state: "functional",
    explanation:
      "Shopify checkout with Shop Pay / BNPL signals observed. Completion rates unknown externally.",
    confidence: "strong-indicator",
    evidenceIds: ["ev-003", "ev-004", "ev-005"],
  },
  {
    id: "r-lifecycle",
    brand: "O5 DTC cluster",
    dimension: "Email / SMS lifecycle",
    state: "functional",
    explanation:
      "Klaviyo + Attentive (QS/BB) indicate lifecycle stack exists. Paid↔lifecycle handoff quality unknown.",
    confidence: "strong-indicator",
    evidenceIds: ["ev-012"],
  },
  {
    id: "r-org",
    brand: "Portfolio",
    dimension: "Org / account clarity",
    state: "unknown",
    explanation:
      "Separate legal entities, GTM containers, and brand offices suggest possible fragmented ownership. Fragmentation is a hypothesis—confirm with access map.",
    confidence: "inference",
    evidenceIds: ["ev-003", "ev-004", "ev-005", "ev-017"],
  },
];

export const performanceFindings = [
  {
    id: "perf-01",
    brand: "Quiksilver / Billabong",
    issue: "Potential performance risk — third-party and theme signals",
    observation:
      "Observed implementation signal: liberated-platform-version 2.1 plus GTM, OneTrust, Klaviyo, Attentive, Yotpo references. This can affect performance, but impact was not quantified.",
    commercialTie:
      "Measurement required (PageSpeed/CrUX) before claiming Shopping LP harm. Do not assert the site is slow.",
    confidence: "inference" as const,
    evidenceIds: ["ev-011", "ev-012"],
  },
  {
    id: "perf-02",
    brand: "Eddie Bauer",
    issue: "Potential performance / catalog risk — new Shopify + OMS",
    observation:
      "PR describes accelerated Shopify launch with Deck Commerce OMS. Suggests transitional architecture; not proof of bloat or poor CWV.",
    commercialTie: "Validate availability, attributes, and lab performance after access.",
    confidence: "inference" as const,
    evidenceIds: ["ev-006"],
  },
  {
    id: "perf-03",
    brand: "All O5 DTC",
    issue: "No preserved PageSpeed / Lighthouse measurements",
    observation:
      "No URL/device/date/result triad stored. Any speed claim beyond “potential risk” would be unsupported.",
    commercialTie: "Attach measured results before diagnosing conversion impact.",
    confidence: "unknown" as const,
    evidenceIds: [],
  },
];

export const seoFindings = [
  {
    id: "seo-01",
    title: "Shopify crawl controls are in place",
    detail:
      "Facet sort and multi-filter URLs disallowed on Billabong; QS/EB use Shopify’s current robots pattern with cart/checkout disallows. Good baseline hygiene.",
    confidence: "confirmed" as const,
    evidenceIds: ["ev-015"],
  },
  {
    id: "seo-02",
    title: "Collection content & intent coverage unknown",
    detail:
      "Cannot verify buying guides, size/fit hubs, or thin collection copy without a full crawl. High-intent paid landings may need a thin Next.js layer or enriched Shopify templates.",
    confidence: "unknown" as const,
    evidenceIds: [],
  },
  {
    id: "seo-03",
    title: "Do not blame “Shopify SEO” generically",
    detail:
      "Constraints are implementation-specific: product copy quality, variant canonicals, OOS handling, and app-injected content. Diagnose per brand after access.",
    confidence: "inference" as const,
    evidenceIds: ["ev-015"],
  },
];

export const measurementMap = [
  {
    area: "GTM installed per O5 DTC brand",
    status: "observed",
    accessNeeded: "GTM publish rights",
    testAfterAccess: "Preview purchase path; confirm consent gates",
    decisionSupported: "Whether Ads conversions fire once per order",
  },
  {
    area: "GA4 property hygiene (esp. Billabong dual IDs)",
    status: "partially observed",
    accessNeeded: "GA4 admin",
    testAfterAccess: "Event continuity 14-day compare",
    decisionSupported: "Which property is source of truth for ROAS",
  },
  {
    area: "Google Ads conversion actions / enhanced conversions",
    status: "tag present; config unknown",
    accessNeeded: "Google Ads + GTM",
    testAfterAccess: "Conversion accuracy audit vs Shopify orders",
    decisionSupported: "Bidding trustworthiness",
  },
  {
    area: "Merchant Center diagnostics",
    status: "not publicly visible",
    accessNeeded: "GMC + Microsoft MC",
    testAfterAccess: "Disapproval / attribute / price mismatch report",
    decisionSupported: "Feed repair priority",
  },
  {
    area: "New-customer vs returning definition",
    status: "unknown",
    accessNeeded: "Ads + Shopify/Klaviyo",
    testAfterAccess: "Customer Match + new-customer conversion setup",
    decisionSupported: "Acquisition vs efficiency budget split",
  },
  {
    area: "Margin / inventory signals in bidding",
    status: "unknown",
    accessNeeded: "Feed pipeline + merchandising",
    testAfterAccess: "Custom label population rate",
    decisionSupported: "Profit-aware structure readiness",
  },
  {
    area: "Meta / TikTok pixels",
    status: "not in initial HTML",
    accessNeeded: "GTM + consent",
    testAfterAccess: "Network waterfall logged-in preview",
    decisionSupported: "Cross-channel remarketing overlap",
  },
  {
    area: "Offline / CRM revenue feedback",
    status: "unknown",
    accessNeeded: "Analytics + finance",
    testAfterAccess: "Return-adjusted value import design",
    decisionSupported: "Whether platform ROAS overstates contribution",
  },
];
