export const campaignBuildingBlocks = [
  {
    name: "Brand Search",
    purpose: "Defend brand queries; control message and LP",
    notes: "Separate Quiksilver vs Billabong; watch rivalry conquest carefully vs policy/brand guidelines",
  },
  {
    name: "Non-brand Search",
    purpose: "Category and problem intents with query mining",
    notes: "Only where LP quality exists; else wasteful",
  },
  {
    name: "Shopping",
    purpose: "Product inventory capture",
    notes: "Feed quality is the campaign",
  },
  {
    name: "Performance Max",
    purpose: "Scaled automation across surfaces",
    notes: "Needs clean conversion value + asset groups; not a substitute for feed work",
  },
  {
    name: "Microsoft Ads",
    purpose: "Incremental Search/Shopping",
    notes: "Stand up after Google hygiene; share feed via MMC",
  },
  {
    name: "Remarketing",
    purpose: "Site engagers / cart abandoners",
    notes: "Consent and audience eligibility may limit CA reach",
  },
];

export const separationDimensions = [
  {
    dimension: "Brand",
    when: "Separate legal entities, brand rivalry, or distinct KPIs (Quik vs Billabong)",
  },
  {
    dimension: "Country / storefront",
    when: "Different domains, currencies, or Merchant Centers",
  },
  {
    dimension: "Product category",
    when: "Materially different margins, seasonality, or LP templates",
  },
  {
    dimension: "Margin / inventory",
    when: "Reliable custom labels exist—otherwise wait",
  },
  {
    dimension: "Business objective",
    when: "New-customer acquisition vs efficiency need different bidding and creative",
  },
  {
    dimension: "Promotional calendar",
    when: "Approved promo windows differ by brand",
  },
  {
    dimension: "Conversion action",
    when: "Purchase vs lead vs wholesale inquiry (rare for these DTCs)",
  },
  {
    dimension: "Data volume",
    when: "Low volume → consolidate; high volume → finer splits",
  },
];

export const architectureScenarios = [
  {
    id: "A",
    name: "Conservative consolidation",
    summary:
      "Limited conversion volume or early post-transition. Fewer campaigns, stronger negatives, shared learning where brands are similar.",
    structure: [
      "Per brand: Brand Search + one non-brand Search (if volume) + Shopping or Performance Max (pick one primary)",
      "Shared negative keyword lists by theme",
      "Single reporting taxonomy",
    ],
    requiredData: [
      "Working purchase conversions",
      "Clean availability in feed",
      "Brand list for the role",
    ],
    benefits: [
      "Lower ops burden",
      "Faster learning",
      "Fewer self-competition bugs",
    ],
    risks: [
      "Less control by category",
      "Harder margin segmentation",
      "Performance Max opacity (harder to see query detail)",
    ],
    operationalBurden: "Low–medium",
    whenToUse:
      "First 30–60 days on inherited accounts; Eddie Bauer post-launch; unclear conversion quality",
    invalidators: [
      "High volume with conflicting brand strategies",
      "Need strict Quik vs Billabong query separation immediately",
    ],
  },
  {
    id: "B",
    name: "Balanced multi-brand control",
    summary:
      "Steady volume and clean conversions. Brand-separated accounts or campaign groups with shared feed standards.",
    structure: [
      "Brand Search per brand",
      "Non-brand Search for proven categories",
      "Shopping with priority splits (hero / core / remainder) OR Shopping + Performance Max with brand exclusions",
      "Microsoft mirror for top brands",
    ],
    requiredData: [
      "Stable conversions 30+ days",
      "Feed title/product_type hygiene",
      "Merch calendar visibility",
    ],
    benefits: [
      "Brand-level accountability",
      "Better query governance",
      "Room for category tests",
    ],
    risks: [
      "More maintenance",
      "Budget fragmentation",
      "Inconsistent naming if undisciplined",
    ],
    operationalBurden: "Medium",
    whenToUse:
      "Default once Quik/Billabong/EB foundations are trustworthy",
    invalidators: [
      "Insufficient conversions per brand for Smart Bidding",
      "Single operator without time for three structures",
    ],
  },
  {
    id: "C",
    name: "Advanced profit- & inventory-aware",
    summary:
      "Trusted margin proxies and OMS (order/inventory) data in custom labels. Structure follows economics, not just brand vanity.",
    structure: [
      "Label-based bid landscapes (hero/deep/A-margin vs suppress)",
      "Seasonal budget overlays",
      "New-customer conversion bidding where available",
      "Experiment layer with fixed learning budgets",
    ],
    requiredData: [
      "Finance-approved margin tiers",
      "Inventory depth feed",
      "Return-risk or contribution feedback",
      "Strong measurement hygiene",
    ],
    benefits: [
      "Closer to contribution profit",
      "Fewer wasted clicks on low stock/low margin",
      "Executive-grade story",
    ],
    risks: [
      "Bad cost data → systematically wrong bids",
      "High org dependency",
      "Over-engineering before readiness",
    ],
    operationalBurden: "High",
    whenToUse: "After 90 days foundations + data contracts",
    invalidators: [
      "Margin unknown",
      "Inventory lag > decision cycle",
      "Leadership still scores only blended ROAS (return on ad spend)",
    ],
  },
];

export const paidReadinessQuestions = [
  "Which conversion actions currently train Smart Bidding?",
  "Is enhanced conversions enabled and accurate vs Shopify?",
  "Who fixes GMC disapprovals within 24–48 hours?",
  "Are Quiksilver and Billabong allowed to bid on each other’s brand terms?",
  "What is the new-customer definition across Klaviyo/Shopify/Ads?",
  "Does Deck Commerce / 3PL availability lag create Shopping mismatches?",
  "What agency or freelancer still has edit access?",
];
