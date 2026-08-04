import type { EvidenceItem } from "@/lib/research-types";

export const RESEARCH_DATE = "2026-08-01";

export const evidence: EvidenceItem[] = [
  {
    id: "ev-001",
    finding: "O5 Group is a multi-division holding group rebranded from Oved Group in 2022",
    companyOrBrand: "O5 Group",
    property: "o5group.com",
    category: "company",
    evidenceType: "official-site",
    sourceUrl: "https://www.o5group.com/",
    sourceTitle: "O5 Group — Official site",
    dateAccessed: RESEARCH_DATE,
    observation:
      "About copy states Oved Group launched 1981; Five Star Apparel partnered 2003; 2022 rebrand to O5 Apparel and O5 Group. O5 Apparel operates 5 Star Apparel LLC and Oved Apparel Corporation, LLC. O5 Group includes O5 Apparel, Blue Label Apparel LLC and Brand X, LLC. Divisions: O5 Finance (IceCap), O5 Apparel, O5 Logistics (EMG9), O5 Realty.",
    confidence: "confirmed",
    businessImplication:
      "Interview framing should treat O5 as a multi-entity operator/investor group, not a single-brand retailer.",
    doesNotProve:
      "Does not prove channel mix, revenue, or which brands a Paid Search role owns.",
    relatedRecommendationIds: ["opp-001"],
    nextInvestigation: "Confirm which legal entities own Ads / Merchant Center accounts.",
  },
  {
    id: "ev-002",
    finding: "O5 Apparel positions as a fashion powerhouse across men’s, women’s, and children’s categories",
    companyOrBrand: "O5 Apparel",
    property: "o5group.com/o5apparel",
    category: "company",
    evidenceType: "corporate-page",
    sourceUrl: "https://www.o5group.com/o5apparel",
    sourceTitle: "O5 Apparel | O5 Group",
    dateAccessed: RESEARCH_DATE,
    observation:
      "HQ NYC; 40+ years; categories include outerwear, activewear, sportswear, jeans, pajamas/loungewear, childrenswear, layette. Leadership includes President E-Comm (Sam Ashkenazie), President Amazon (Morris Dabah), CIO, CFO Eric Spiel.",
    confidence: "confirmed",
    businessImplication:
      "Commercial model spans wholesale, marketplace, and e-comm—not DTC-only. Paid media role sits inside a broader channel portfolio.",
    doesNotProve:
      "Does not prove DTC ownership of any specific consumer brand.com.",
    unknowns: "Exact revenue mix by channel not public.",
  },
  {
    id: "ev-003",
    finding: "Quiksilver US DTC is operated by O5 BNG, LLC on Shopify shop quiksilver-us-o5",
    companyOrBrand: "Quiksilver",
    property: "quiksilver.com",
    category: "dtc-ownership",
    evidenceType: "legal-policy",
    sourceUrl: "https://www.quiksilver.com/policies/privacy-policy",
    sourceTitle: "Quiksilver Privacy Policy",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Privacy contact references O5 BNG, LLC / Quiksilver, 31 West 34th Street, New York NY 10001; email sashkenazie@ovedapparel.com. HTML also exposes Shopify.shop = quiksilver-us-o5.myshopify.com and liberated-platform-version attribute.",
    confidence: "confirmed",
    businessImplication:
      "Quiksilver.com is a confirmed O5-operated DTC property and a strong candidate surface for a DTC Paid Search role—ownership of Ads/Merchant still requires confirmation.",
    doesNotProve:
      "Does not prove Google Ads / Merchant Center / feed ownership for a specific employee role.",
    roleRelevant: true,
    relatedRecommendationIds: ["opp-002", "opp-003", "opp-007"],
  },
  {
    id: "ev-004",
    finding: "Billabong US DTC is operated by O5 BILL, LLC on Shopify shop billabong-us-o5",
    companyOrBrand: "Billabong",
    property: "billabong.com",
    category: "dtc-ownership",
    evidenceType: "legal-policy",
    sourceUrl: "https://www.billabong.com/policies/privacy-policy",
    sourceTitle: "Billabong Privacy Policy",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Privacy names O5 BILL, LLC / BILLABONG; effective date 07/15/2026. HTML: Shopify.shop = billabong-us-o5.myshopify.com; liberated-platform-version=\"2.1\". Separate GTM container from Quiksilver.",
    confidence: "confirmed",
    businessImplication:
      "Second confirmed O5-operated DTC with its own GTM/GA4 footprint—suggests a separate measurement environment if both brands are in-scope.",
    doesNotProve:
      "Does not prove Ads account topology or that this job owns Billabong media.",
    roleRelevant: true,
    relatedRecommendationIds: ["opp-002", "opp-003"],
  },
  {
    id: "ev-005",
    finding: "Eddie Bauer NA digital storefront operated under OUTDOOR 5, LLC with Shopify + Deck Commerce",
    companyOrBrand: "Eddie Bauer",
    property: "eddiebauer.com",
    category: "dtc-ownership",
    evidenceType: "legal-policy",
    sourceUrl: "https://www.eddiebauer.com/policies/privacy-policy",
    sourceTitle: "Eddie Bauer Privacy Policy",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Privacy: OUTDOOR 5, LLC / EDDIE BAUER; mail 31 W 34th St NYC; effective Jan 1, 2026. Shopify shop 4gqgby-g9.myshopify.com.",
    confidence: "confirmed",
    businessImplication:
      "Third confirmed O5 DTC property; outdoor/lifestyle catalog differs from Quik/Billabong surf stack—separate merchandising calendars likely.",
    doesNotProve:
      "Does not prove the Costa Mesa Paid Search role owns Eddie Bauer Ads or Merchant Center.",
    relatedRecommendationIds: ["opp-002", "opp-008"],
  },
  {
    id: "ev-006",
    finding: "Deck Commerce PR confirms O5 operates 26+ brands and launched Shopify Eddie Bauer storefront",
    companyOrBrand: "O5 Group",
    property: "eddiebauer.com",
    category: "commerce-stack",
    evidenceType: "press-release",
    sourceUrl:
      "https://www.prnewswire.com/news-releases/deck-commerce-powers-eddie-bauers-digital-expansion-with-o5-group-302718495.html",
    sourceTitle: "Deck Commerce Powers Eddie Bauer's Digital Expansion with O5 Group",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Mar 25, 2026 PR: O5 selected Deck Commerce; operates more than 26 consumer brands; demand from Shopify, Amazon, Cymbio; first major initiative was new Shopify Eddie Bauer storefront in ~2 months.",
    confidence: "confirmed",
    businessImplication:
      "OMS/order orchestration is a portfolio concern. Shopping/feed work must align with multi-channel inventory reality.",
    doesNotProve:
      "Does not prove Deck Commerce covers all brands or quantify order volumes.",
    relatedRecommendationIds: ["opp-008"],
    unknowns: "Which brands beyond Eddie Bauer are already on Deck Commerce.",
  },
  {
    id: "ev-007",
    finding: "O5 secured Eddie Bauer NA wholesale+ecom license and Dickies men’s NA license (trade press)",
    companyOrBrand: "Eddie Bauer / Dickies",
    category: "licensing",
    evidenceType: "trade-press",
    sourceUrl: "https://sgbonline.com/o5-group-secures-eddie-bauer-and-dickies-licenses/",
    sourceTitle: "O5 Group Secures Eddie Bauer and Dickies Licenses | SGB Media",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Jan 5, 2026: O5 secured Eddie Bauer men’s and women’s NA wholesale and e-commerce; Dickies men’s NA. Notes O5 holds licenses for Authentic-owned Champion, Billabong, Quiksilver, Lucky Brand, Izod, and Bluestar’s Hurley. LinkedIn quote from CFO Eric Spiel referenced.",
    confidence: "confirmed",
    businessImplication:
      "License scope can be category/territory-specific. Dickies license ≠ Dickies.com operation.",
    doesNotProve:
      "Does not prove O5 operates every listed brand’s DTC storefront.",
    relatedRecommendationIds: ["opp-001"],
    contradictoryEvidence:
      "Dickies.com privacy names WRK Apparel, LLC as seller of record—not O5.",
  },
  {
    id: "ev-008",
    finding: "Dickies.com DTC is operated by WRK Apparel, LLC—not O5",
    companyOrBrand: "Dickies",
    property: "dickies.com",
    category: "dtc-ownership",
    evidenceType: "legal-policy",
    sourceUrl: "https://www.dickies.com/policies/privacy-policy",
    sourceTitle: "Dickies Privacy Policy",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Site states independently operated by WRK Apparel, LLC as seller of record. Shopify shop dickies-amer.myshopify.com.",
    confidence: "confirmed",
    businessImplication:
      "Do not assume Dickies Shopping campaigns sit in O5 Ads accounts. Ask which licensed products sell via O5 wholesale/marketplace vs other operators’ DTC.",
    doesNotProve:
      "Does not prove O5 has no wholesale/marketplace Dickies activity.",
  },
  {
    id: "ev-009",
    finding: "Champion.com DTC operated by ABG-Champion LLC; Hurley by ULAC; IZOD by Centric",
    companyOrBrand: "Champion / Hurley / IZOD",
    category: "dtc-ownership",
    evidenceType: "legal-policy",
    sourceUrl: "https://www.champion.com/policies/privacy-policy",
    sourceTitle: "Champion / Hurley / IZOD privacy pages",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Champion privacy: ABG-Champion LLC. Hurley: United Legwear & Apparel Co. IZOD: Centric Fashion, LLC (izod-centric.myshopify.com). SGB lists O5 among licensees—license ≠ storefront operator.",
    confidence: "confirmed",
    businessImplication:
      "Reported licenses for these brands likely mean product/category manufacturing or wholesale rights, not performance-marketing ownership of brand.com.",
    doesNotProve:
      "Does not define the exact SKU/category scope of any O5 license.",
    unknowns: "Exact SKU/category scopes of each O5 license.",
  },
  {
    id: "ev-010",
    finding: "O5 announced intention to run premium full-price Quiksilver.com and Billabong.com",
    companyOrBrand: "Quiksilver / Billabong",
    category: "strategy",
    evidenceType: "trade-press",
    sourceUrl:
      "https://shop-eat-surf-outdoor.com/news/billabong-leadership-update-under-new-licensee-o5-apparel/603836/",
    sourceTitle: "Billabong Leadership Update Under New Licensee O5 Apparel",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Ryan Mangan (O5 SVP action sports / Quiksilver GM): long-term agreements; taking over Quiksilver.com and Billabong.com; premium, full-price website strategy; ~115 employees and 35 reps across Quik + Billabong at time of interview.",
    confidence: "confirmed",
    businessImplication:
      "Paid media strategy should respect full-price positioning—promo-heavy Shopping may conflict with brand strategy. Verify current promo posture before restructuring.",
    doesNotProve:
      "Does not prove current promo execution matches the full-price statement on every SKU.",
    relatedRecommendationIds: ["opp-009"],
  },
  {
    id: "ev-011",
    finding: "Quiksilver and Billabong share Liberated Platform theme residue and OneTrust→Shopify consent bridge",
    companyOrBrand: "Quiksilver / Billabong",
    category: "technology",
    evidenceType: "storefront-html",
    sourceUrl: "https://www.quiksilver.com/",
    sourceTitle: "Quiksilver / Billabong HTML head",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Both sites: liberated-platform-version=\"2.1\"; OneTrust → Shopify Bridge v2.3 | Solvation LLC | May 2026; Consent Mode defaults with regional denial including US-CA; separate GTM IDs (GTM-TXGB3SJ6 vs GTM-5WX96S89).",
    confidence: "confirmed",
    businessImplication:
      "Inherited Liberated stack + consent tooling affect tracking reliability and Shopping attribution. Consent Mode configuration is a day-one measurement question.",
    doesNotProve:
      "Does not prove Consent Mode is correct in all regions or that tags fire purchase correctly.",
    relatedRecommendationIds: ["opp-003", "opp-004"],
  },
  {
    id: "ev-012",
    finding: "O5 DTC cluster shows GTM, GA4, Google Ads tags, Klaviyo, Yotpo; QS/BB also Attentive",
    companyOrBrand: "Quiksilver / Billabong / Eddie Bauer",
    category: "measurement",
    evidenceType: "technical-signal",
    sourceUrl: "https://www.quiksilver.com/",
    sourceTitle: "Storefront HTML tag inventory",
    dateAccessed: RESEARCH_DATE,
    observation:
      "QS: GTM-TXGB3SJ6, G-T61R2Q07N0, AW-16930042143, Klaviyo, Attentive, Yotpo, OneTrust. BB: GTM-5WX96S89, GA4 IDs G-1M15FCQGHG & G-SQ1JD6CHH1, AW-16942401759. EB: GTM-NQ9ZMKHG, G-S8W0Y2N5PK, AW-17923505335. Meta/TikTok IDs not in initial HTML (may load post-consent).",
    confidence: "strong-indicator",
    businessImplication:
      "Google Ads conversion plumbing appears present per brand; Billabong dual GA4 IDs suggest possible duplication or migration residue—validate after access.",
    doesNotProve:
      "Does not prove conversion accuracy, enhanced conversions, or bidding setup.",
    relatedRecommendationIds: ["opp-003", "opp-004"],
    unknowns: "Enhanced conversions, offline imports, CRM revenue feedback, actual conversion actions used for bidding.",
  },
  {
    id: "ev-013",
    finding: "Paid Search and Shopping Specialist role at Oved Group / o5 group — Costa Mesa, $70–75k",
    companyOrBrand: "O5 Group",
    category: "role",
    evidenceType: "job-listing",
    sourceUrl:
      "https://www.career.com/job/oved-group/paid-search-and-shopping-specialist/j202601142238514034430",
    sourceTitle: "Paid Search and Shopping Specialist | Career.com (Oved Group)",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Reports to Senior Manager of Performance Marketing. Owns Google Ads & Microsoft Ads including Search, Shopping, PMax, Brand/Non-Brand; Merchant Center feeds; ROAS/CAC/CPA; partners with Ecommerce, Merchandising, Creative, SEO, analytics. Listing cites 5 years experience (LinkedIn variant cites 2–4). Salary $70,000–$75,000. Location Costa Mesa, CA. Hybrid/flexible noted. Official o5group.com/careers page (checked same day) listed NYC roles only—CA paid-search role not on that Wix list.",
    confidence: "confirmed",
    businessImplication:
      "Role is explicitly multi-channel search/shopping for DTC, with feed ownership and cross-functional inventory alignment. Scope vs compensation is a private decision input.",
    doesNotProve:
      "Does not prove which brands the role owns or onsite cadence details.",
    relatedRecommendationIds: ["opp-001"],
    unknowns: "Exact brand ownership for the role; onsite days in Costa Mesa vs Irvine; agency presence.",
  },
  {
    id: "ev-014",
    finding: "O5 corporate site is Wix; IceCap WordPress; EMG9 Wix—separate from Shopify DTC stack",
    companyOrBrand: "O5 Group",
    category: "technology",
    evidenceType: "technical-signal",
    sourceUrl: "https://www.o5group.com/",
    sourceTitle: "Corporate and sister property platforms",
    dateAccessed: RESEARCH_DATE,
    observation:
      "o5group.com and emg9.com appear Wix-hosted. icecapgroup.com WordPress + Elementor. No GTM/GA4 observed in corporate HTML scrape.",
    confidence: "strong-indicator",
    businessImplication:
      "Corporate web stack is marketing/corporate only; performance marketing work concentrates on brand Shopify properties.",
    doesNotProve:
      "Does not prove anything about DTC paid-media stack quality.",
  },
  {
    id: "ev-015",
    finding: "Shopify robots.txt confirms platform and faceted-nav crawl controls on O5 DTCs",
    companyOrBrand: "Quiksilver / Billabong / Eddie Bauer",
    category: "seo",
    evidenceType: "robots-sitemap",
    sourceUrl: "https://www.billabong.com/robots.txt",
    sourceTitle: "Billabong / Quiksilver / Eddie Bauer robots.txt",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Billabong robots explicitly: “we use Shopify as our ecommerce platform”; disallows sort_by, multi-filter, /search, /policies/. QS and EB use newer Shopify agent-oriented robots with UCP/MCP notes; disallow facet sort traps and cart/checkout.",
    confidence: "confirmed",
    businessImplication:
      "Faceted navigation and search URLs are constrained—Shopping landing pages and SEO collection strategy must work within Shopify URL patterns.",
    doesNotProve:
      "Does not prove collection content quality or indexation health beyond crawl rules.",
    relatedRecommendationIds: ["opp-005"],
  },
  {
    id: "ev-016",
    finding: "Lucky Brand DTC operator could not be verified live (Akamai 403); indexed legal points to Catalyst/Lucky OpCo",
    companyOrBrand: "Lucky Brand",
    property: "luckybrand.com",
    category: "dtc-ownership",
    evidenceType: "secondary-index",
    sourceUrl: "https://www.luckybrand.com/privacy-policy.html",
    sourceTitle: "Lucky Brand privacy (indexed) / live 403",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Live fetch returned HTTP 403 via Akamai from research environment. Indexed terms/privacy reference Lucky OpCo LLC / Catalyst family. SGB lists O5 among Lucky licensees.",
    confidence: "unknown",
    businessImplication:
      "Treat Lucky Brand DTC as Requires verification. Do not claim O5 runs luckybrand.com.",
    doesNotProve:
      "Does not prove O5 has no Lucky relationship—only that DTC ops were not verified live.",
    nextInvestigation: "Ask hiring manager which Lucky products/channels O5 controls.",
  },
  {
    id: "ev-017",
    finding: "Orange County footprint: Quiksilver/Billabong teams and Irvine office expansion reported",
    companyOrBrand: "O5 Apparel",
    category: "organization",
    evidenceType: "trade-press",
    sourceUrl:
      "https://www.ocbj.com/oc-homepage/new-billabong-volcom-and-rvca-operators-expand-orange-county-footprint/",
    sourceTitle: "OCBJ — New Billabong operators expand OC footprint",
    dateAccessed: RESEARCH_DATE,
    observation:
      "OCBJ: Billabong going to O5 Apparel; shared Costa Mesa office dedicated to Quiksilver; new Irvine lease as Billabong joins. Ryan Mangan cited on talent pool and brand heritage.",
    confidence: "confirmed",
    businessImplication:
      "Role location (Costa Mesa listing) aligns with action-sports brand ops in OC—not NYC HQ.",
    doesNotProve:
      "Does not prove the Paid Search role’s office days or reporting line beyond the job listing.",
  },
  {
    id: "ev-018",
    finding: "O5 careers page emphasizes Retail & E-comm partners; hybrid schedule; Blue Cherry systems role",
    companyOrBrand: "O5 Apparel",
    property: "o5group.com/careers",
    category: "organization",
    evidenceType: "corporate-page",
    sourceUrl: "https://www.o5group.com/careers",
    sourceTitle: "Careers | O5 Apparel",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Open positions listed were NYC-centric on access date. Copy: “great fashion brands to our Retail & E-comm partners.” Benefits include hybrid work. Director–Blue Cherry Systems Admin role indicates ERP/wholesale systems importance.",
    confidence: "confirmed",
    businessImplication:
      "Wholesale/ERP systems (Blue Cherry) matter operationally; paid search sits beside B2B systems, not instead of them.",
    doesNotProve:
      "Does not prove CA roles are absent—only that they were not listed on that page that day.",
    unknowns: "Whether CA DTC roles are posted only on LinkedIn/third-party boards.",
  },
  {
    id: "ev-019",
    finding: "Creator program claims O5 manages 25+ brands across mens/womens/kids",
    companyOrBrand: "O5 Apparel",
    property: "o5group.com/o5apparel/creators",
    category: "portfolio",
    evidenceType: "corporate-page",
    sourceUrl: "https://www.o5group.com/o5apparel/creators",
    sourceTitle: "O5 Apparel Creator Program",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Page states “We manage 25+ brands across menswear, womenswear, and kidswear.” Aligns directionally with Deck Commerce “more than 26 consumer brands.”",
    confidence: "strong-indicator",
    businessImplication:
      "Portfolio breadth is real; research inventory of public DTC properties is not comprehensive of all 25+ brands.",
    doesNotProve:
      "Does not enumerate the 25+ brands or their relationship types.",
    unknowns: "Full public brand list with relationship types.",
  },
  {
    id: "ev-020",
    finding: "Billabong dual GA4 property IDs observed in HTML",
    companyOrBrand: "Billabong",
    property: "billabong.com",
    category: "measurement",
    evidenceType: "technical-signal",
    sourceUrl: "https://www.billabong.com/",
    sourceTitle: "Billabong HTML analytics IDs",
    dateAccessed: RESEARCH_DATE,
    observation:
      "Two GA4 IDs observed: G-1M15FCQGHG and G-SQ1JD6CHH1 alongside GTM-5WX96S89.",
    confidence: "strong-indicator",
    businessImplication:
      "Possible migration residue or intentional split (e.g., legacy vs new). Validate in GA4 admin before trusting reports.",
    doesNotProve:
      "Does not prove which GA4 property is authoritative or that reporting is wrong today.",
    relatedRecommendationIds: ["opp-004"],
  },
];

export function getEvidence(id: string): EvidenceItem | undefined {
  return evidence.find((e) => e.id === id);
}

export function getEvidenceByIds(ids: string[]): EvidenceItem[] {
  return ids
    .map((id) => getEvidence(id))
    .filter((e): e is EvidenceItem => Boolean(e));
}
