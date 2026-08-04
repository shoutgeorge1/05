/** Illustrative feed operating model — not O5 internal data. */

export const feedDisclaimer =
  "Illustrative example — needs real product and margin data from your systems. Not O5’s live feed.";

export const normalizedFeedSchema = [
  { field: "brand", purpose: "Which brand — for campaign filters", required: true },
  { field: "id / item_group_id", purpose: "Group color/size variants of one product", required: true },
  { field: "title", purpose: "What shoppers see in Shopping ads", required: true },
  { field: "description", purpose: "Product detail / compliance text", required: true },
  { field: "link / image_link", purpose: "Where the ad sends people + product image", required: true },
  { field: "price / sale_price", purpose: "Correct offer price (and approved sale price)", required: true },
  { field: "availability", purpose: "In stock or not — avoid ads for out-of-stock items", required: true },
  { field: "gtin / mpn / identifier_exists", purpose: "Product IDs (barcodes) so Google can match items", required: true },
  { field: "google_product_category", purpose: "Google’s product category", required: true },
  { field: "product_type", purpose: "Your own merchandising category path", required: true },
  { field: "gender / age_group", purpose: "Required apparel attributes", required: true },
  { field: "color / size / material", purpose: "Variant details shoppers filter on", required: true },
  { field: "season / collection", purpose: "Season or collection tags", required: false },
  { field: "custom_label_0", purpose: "Priority (hero / core / etc.)", required: false },
  { field: "custom_label_1", purpose: "Margin tier (if finance provides it)", required: false },
  { field: "custom_label_2", purpose: "Stock depth", required: false },
  { field: "custom_label_3", purpose: "New / bestseller / clearance", required: false },
  { field: "custom_label_4", purpose: "Promo status / return risk", required: false },
];

export const customLabelFramework = [
  {
    label: "custom_label_0 — Strategic priority",
    values: ["hero", "core", "long-tail", "exit"],
    use: "Budget & bid modifiers; protect hero SKUs in peak",
  },
  {
    label: "custom_label_1 — Margin tier",
    values: ["A", "B", "C", "unknown"],
    use: "Suppress low-margin acquisition when CAC tight; requires finance data",
  },
  {
    label: "custom_label_2 — Inventory",
    values: ["deep", "healthy", "low", "critical"],
    use: "Low-stock suppression; deep-stock push during season",
  },
  {
    label: "custom_label_3 — Lifecycle",
    values: ["new", "bestseller", "seasonal", "clearance"],
    use: "New-product testing budgets; bestseller protection",
  },
  {
    label: "custom_label_4 — Promo / risk",
    values: ["full-price", "approved-promo", "markdown", "high-return"],
    use: "Align with premium full-price strategy on Quik/Billabong",
  },
];

export const feedQualityChecklist = [
  "Unique IDs stable across refreshes",
  "item_group_id groups color/size variants correctly",
  "Titles: Brand + Product + Key Attribute + Gender (no keyword stuffing)",
  "product_type normalized across brands (not free-text chaos)",
  "GTIN present where required; identifier_exists accurate",
  "Image: clean packshot or approved lifestyle; correct variant color",
  "sale_price ≤ price; only when merch-approved",
  "availability matches site + OMS within SLA",
  "Shipping / returns grounded in Merchant Center config",
  "Disapproval workflow: owner, SLA, severity, reopen test",
];

export const titleLogic = {
  beforeExample: "Mens Shirt Blue",
  afterExample: "Quiksilver Men's Waterman Short Sleeve Shirt - Blue - Surf",
  rules: [
    "Lead with brand when brand is a query magnet",
    "Include gender and primary product type early",
    "Add differentiator (fit, collection, use-case) once",
    "Keep under practical Shopping length; avoid promo language in title",
    "Sync title tokens with landing H1 where possible",
  ],
  note: "Examples use fictional demonstration products—not scraped O5 catalog facts.",
};

export const demoProducts = [
  {
    id: "demo-001",
    brand: "Harbor Co. (fictional)",
    titleBefore: "Boardshort",
    titleAfter: "Harbor Co. Men's 19\" Performance Boardshort - Black",
    productTypeBefore: "shorts",
    productTypeAfter: "Apparel > Swim > Boardshorts > Mens",
    price: 64.95,
    salePrice: null,
    availability: "in_stock",
    inventoryDepth: "healthy",
    marginTier: "A",
    bestsellerTier: "bestseller",
    customLabels: {
      c0: "hero",
      c1: "A",
      c2: "healthy",
      c3: "bestseller",
      c4: "full-price",
    },
    decision: "Protect in Shopping; allow brand Search; careful PMax asset overlap",
  },
  {
    id: "demo-002",
    brand: "Trail North (fictional)",
    titleBefore: "Jacket sale!!!!",
    titleAfter: "Trail North Women's Insulated Parka - Olive - Outdoor",
    productTypeBefore: "jackets women",
    productTypeAfter: "Apparel > Outerwear > Parkas > Womens",
    price: 198,
    salePrice: 149,
    availability: "in_stock",
    inventoryDepth: "deep",
    marginTier: "B",
    bestsellerTier: "seasonal",
    customLabels: {
      c0: "core",
      c1: "B",
      c2: "deep",
      c3: "seasonal",
      c4: "approved-promo",
    },
    decision: "Promo overlay only if merch-approved; push inventory-aware bids",
  },
  {
    id: "demo-003",
    brand: "Harbor Co. (fictional)",
    titleBefore: "Tee",
    titleAfter: "Harbor Co. Men's Classic Logo Tee - White",
    productTypeBefore: "tshirt",
    productTypeAfter: "Apparel > Tops > T-Shirts > Mens",
    price: 29.95,
    salePrice: null,
    availability: "in_stock",
    inventoryDepth: "critical",
    marginTier: "C",
    bestsellerTier: "long-tail",
    customLabels: {
      c0: "long-tail",
      c1: "C",
      c2: "critical",
      c3: "long-tail",
      c4: "full-price",
    },
    decision: "Suppress or bid down — low stock + low margin",
  },
];

export const feedConcepts = [
  {
    title: "Inventory-aware bidding",
    detail:
      "Use custom_label_2 + availability to reduce bids or exclude critical stock; accelerate deep stock in-season. Requires OMS-trusted quantities—not homepage guesses.",
  },
  {
    title: "Margin-aware bidding",
    detail:
      "custom_label_1 is a proxy until unit economics land in the feed. Do not invent margins. Prefer suppressing known loss-leaders over fake precision CPA targets.",
  },
  {
    title: "Seasonal merchandising",
    detail:
      "Surf vs outdoor calendars differ. Label season/collection; align budgets to launch weeks communicated by merch.",
  },
  {
    title: "New-product testing",
    detail:
      "Isolate newness labels with capped exploration budget; graduate winners to core.",
  },
  {
    title: "Bestseller protection",
    detail:
      "Ensure bestsellers aren’t crowded out by PMax creative randomness; monitor query/product report.",
  },
  {
    title: "Disapproval workflow",
    detail:
      "Severity → owner → fix → reopen → monitor recurrence. Apparel image/GTIN/size issues recur without process.",
  },
];
