import type { BrandProfile } from "@/lib/research-types";

/**
 * Working assumption (from conversation): this Paid Search & Shopping role
 * covers Quiksilver, Billabong, Eddie Bauer, and Dickies. Other licensed brands
 * stay listed for corporate context — other teams / not day-to-day for this role.
 */

export const brands: BrandProfile[] = [
  {
    id: "quiksilver",
    name: "Quiksilver",
    relationship: "dtc-operator",
    relationshipSummary:
      "US DTC storefront operated by O5 BNG, LLC (Shopify shop quiksilver-us-o5).",
    reportedO5Relationship:
      "Licensee / O5-operated US DTC after Liberated Brands transition",
    confidence: "confirmed",
    productScope: "Surf / snowboard lifestyle apparel on US site",
    geography: "US DTC confirmed",
    websites: ["https://www.quiksilver.com/"],
    commercePlatform: "Shopify",
    channelModel: "hybrid",
    knownChannel: "DTC + wholesale (specialty)",
    dtcOperationStatus: "O5-operated DTC (O5 BNG, LLC)",
    dtcOperator: "O5 BNG, LLC",
    brandOwner: "Authentic Brands Group (IP — not O5)",
    roleRelevance: "likely-relevant",
    roleRelevanceNote:
      "Main worked example for Search and Shopping — keep it clearly separate from Billabong in ads and messaging.",
    interviewQuestion:
      "How are Quiksilver Ads, Merchant Center, and feeds split from Billabong day to day?",
    evidenceIds: ["ev-003", "ev-010", "ev-011", "ev-012"],
    unknowns: [
      "Ads / Merchant Center account topology",
      "Margin and inventory fields available to paid media",
    ],
    businessImplication:
      "Core DTC for this role. Feed health and message-matched landings matter immediately.",
    paidSearchImplication:
      "Own Search, Shopping, PMax, and feed hygiene for this storefront.",
    accent: "#3b82c4",
    statusLabel: "This role",
  },
  {
    id: "billabong",
    name: "Billabong",
    relationship: "dtc-operator",
    relationshipSummary:
      "US DTC operated by O5 BILL, LLC (billabong-us-o5).",
    reportedO5Relationship:
      "Licensee / O5-operated US DTC after Liberated Brands transition",
    confidence: "confirmed",
    productScope: "Surf lifestyle; specialty + premium DTC posture",
    geography: "US DTC confirmed; Orange County brand ops reported",
    websites: ["https://www.billabong.com/"],
    commercePlatform: "Shopify",
    channelModel: "hybrid",
    knownChannel: "DTC + specialty wholesale",
    dtcOperationStatus: "O5-operated DTC (O5 BILL, LLC)",
    dtcOperator: "O5 BILL, LLC",
    brandOwner: "Authentic Brands Group (IP — not O5)",
    roleRelevance: "likely-relevant",
    roleRelevanceNote:
      "Same role as Quiksilver — run as its own brand so searches and ads don’t blur the two.",
    interviewQuestion:
      "Separate Ads accounts and Merchant Centers, or one structure with brand partitions?",
    evidenceIds: ["ev-004", "ev-010", "ev-011", "ev-012", "ev-020"],
    unknowns: ["GA4 source of truth (dual IDs observed)", "Shared vs separate Merchant Center"],
    businessImplication: "Sibling DTC — don’t blend brand intent carelessly.",
    paidSearchImplication: "Own Search / Shopping with clear Quik separation.",
    accent: "#0ea5a0",
    statusLabel: "This role",
  },
  {
    id: "eddie-bauer",
    name: "Eddie Bauer",
    relationship: "dtc-operator",
    relationshipSummary:
      "NA wholesale + e-commerce license; live DTC under OUTDOOR 5, LLC.",
    reportedO5Relationship:
      "NA men’s & women’s wholesale + e-commerce license; DTC under OUTDOOR 5, LLC",
    confidence: "confirmed",
    productScope: "Outdoor apparel men’s and women’s NA",
    geography: "North America wholesale and e-commerce (reported)",
    websites: ["https://www.eddiebauer.com/"],
    commercePlatform: "Shopify + Deck Commerce OMS",
    channelModel: "hybrid",
    knownChannel: "DTC + wholesale + marketplace demand",
    dtcOperationStatus: "O5-related DTC (OUTDOOR 5, LLC)",
    dtcOperator: "OUTDOOR 5, LLC",
    brandOwner: "Authentic Brands Group (IP)",
    roleRelevance: "likely-relevant",
    roleRelevanceNote:
      "Outdoor seasons and inventory timing differ from action sports — plan Search around Eddie Bauer’s calendar, not Quiksilver’s.",
    interviewQuestion:
      "How do EB seasonality, inventory, and promos get into Shopping labels for this role?",
    evidenceIds: ["ev-005", "ev-006", "ev-007"],
    unknowns: ["Feed maturity post Shopify relaunch", "OMS → Merchant Center SLA"],
    businessImplication:
      "Different calendar and catalog risk profile — still this role’s Search job.",
    paidSearchImplication:
      "Own Search / Shopping; partner hard with merch and ops on availability truth.",
    accent: "#b45309",
    statusLabel: "This role · outdoor",
  },
  {
    id: "dickies",
    name: "Dickies",
    relationship: "reported-license",
    relationshipSummary:
      "Reported men’s NA license for O5. Public dickies.com seller of record is WRK Apparel, LLC — channel path for paid search still needs internal clarity.",
    reportedO5Relationship: "Reported men’s NA license (category/territory)",
    confidence: "confirmed",
    productScope: "Men’s NA (reported license)",
    geography: "North America (license)",
    websites: ["https://www.dickies.com/"],
    commercePlatform: "Shopify (WRK Apparel on public .com)",
    channelModel: "wholesale",
    knownChannel: "Licensed product; DTC operator on .com appears separate",
    dtcOperationStatus: "Public .com not O5-operated (WRK Apparel, LLC)",
    dtcOperator: "WRK Apparel, LLC (public .com)",
    brandOwner: "Bluestar Alliance",
    roleRelevance: "likely-relevant",
    roleRelevanceNote:
      "In scope for this role — confirm early which Dickies channels and products this seat actually advertises.",
    interviewQuestion:
      "Which Dickies channels and product feeds does this role support — and who owns dickies.com media?",
    evidenceIds: ["ev-007", "ev-008"],
    unknowns: [
      "Exact paid-search surfaces for Dickies under this role",
      "Marketplace vs wholesale vs any DTC ads ownership",
    ],
    businessImplication:
      "In portfolio for Search — don’t assume dickies.com Shopping equals O5 Ads without confirmation.",
    paidSearchImplication:
      "Support the Dickies work this role is assigned; clarify feed + account path in week one.",
    accent: "#c4a35a",
    statusLabel: "This role · confirm channel",
  },
  {
    id: "champion",
    name: "Champion",
    relationship: "reported-license",
    relationshipSummary:
      "Trade press lists O5 among Authentic licensees. champion.com operated by ABG-Champion LLC.",
    reportedO5Relationship: "Reported category license — other teams",
    confidence: "inference",
    productScope: "Not day-to-day for this Paid Search role",
    geography: "N/A for this role",
    websites: ["https://www.champion.com/"],
    commercePlatform: "Shopify (ABG-Champion)",
    channelModel: "unknown",
    knownChannel: "Other teams / licensing",
    dtcOperationStatus: "Not O5-operated (ABG-Champion LLC)",
    dtcOperator: "ABG-Champion LLC",
    brandOwner: "Authentic Brands Group",
    roleRelevance: "not-paid-media",
    roleRelevanceNote:
      "Corporate / license portfolio — not this person’s Paid Search ownership. Other teams.",
    interviewQuestion: "Confirm Champion stays with other teams for Paid Search.",
    evidenceIds: ["ev-007", "ev-009"],
    unknowns: [],
    businessImplication: "Leave it. Don’t assume day-one Champion Shopping for this role.",
    paidSearchImplication: "Other teams — not day-to-day for this role.",
    accent: "#6b7280",
    statusLabel: "Other teams",
  },
  {
    id: "hurley",
    name: "Hurley",
    relationship: "reported-license",
    relationshipSummary:
      "Listed among O5 licenses. hurley.com operated by United Legwear & Apparel Co.",
    reportedO5Relationship: "Reported license — other teams",
    confidence: "inference",
    productScope: "Not day-to-day for this Paid Search role",
    geography: "N/A for this role",
    websites: ["https://www.hurley.com/"],
    commercePlatform: "Shopify (ULAC)",
    channelModel: "unknown",
    knownChannel: "Other teams / licensing",
    dtcOperationStatus: "Not O5-operated (ULAC)",
    dtcOperator: "United Legwear & Apparel Co.",
    brandOwner: "Bluestar Alliance",
    roleRelevance: "not-paid-media",
    roleRelevanceNote:
      "Corporate / license portfolio — not this person’s Paid Search ownership.",
    interviewQuestion: "Confirm Hurley stays with other teams for Paid Search.",
    evidenceIds: ["ev-007", "ev-009"],
    unknowns: [],
    businessImplication: "Other teams.",
    paidSearchImplication: "Other teams — not day-to-day for this role.",
    accent: "#6b7280",
    statusLabel: "Other teams",
  },
  {
    id: "izod",
    name: "IZOD",
    relationship: "reported-license",
    relationshipSummary:
      "Listed among Authentic licenses held by O5. izod.com operated by Centric Fashion, LLC.",
    reportedO5Relationship: "Reported license — other teams",
    confidence: "inference",
    productScope: "Not day-to-day for this Paid Search role",
    geography: "N/A for this role",
    websites: ["https://izod.com/"],
    commercePlatform: "Shopify (Centric)",
    channelModel: "unknown",
    knownChannel: "Other teams / licensing",
    dtcOperationStatus: "Not O5-operated (Centric)",
    dtcOperator: "Centric Fashion, LLC",
    brandOwner: "Authentic Brands Group",
    roleRelevance: "not-paid-media",
    roleRelevanceNote:
      "Corporate / license portfolio — not this person’s Paid Search ownership.",
    interviewQuestion: "Confirm IZOD stays with other teams for Paid Search.",
    evidenceIds: ["ev-007", "ev-009"],
    unknowns: [],
    businessImplication: "Other teams.",
    paidSearchImplication: "Other teams — not day-to-day for this role.",
    accent: "#6b7280",
    statusLabel: "Other teams",
  },
  {
    id: "lucky-brand",
    name: "Lucky Brand",
    relationship: "requires-verification",
    relationshipSummary:
      "Listed among O5 licenses. Not treated as this role’s day-to-day Paid Search ownership.",
    reportedO5Relationship: "Reported license — other teams",
    confidence: "unknown",
    productScope: "Not day-to-day for this Paid Search role",
    geography: "N/A for this role",
    websites: ["https://www.luckybrand.com/"],
    commercePlatform: "Not verified for this role",
    channelModel: "unknown",
    knownChannel: "Other teams / licensing",
    dtcOperationStatus: "Not mapped to this role",
    dtcOperator: "Other teams",
    brandOwner: "Authentic Brands Group (IP)",
    roleRelevance: "not-paid-media",
    roleRelevanceNote:
      "Corporate / license portfolio — not this person’s Paid Search ownership.",
    interviewQuestion: "Confirm Lucky Brand stays with other teams for Paid Search.",
    evidenceIds: ["ev-007", "ev-016"],
    unknowns: [],
    businessImplication: "Other teams.",
    paidSearchImplication: "Other teams — not day-to-day for this role.",
    accent: "#6b7280",
    statusLabel: "Other teams",
  },
];

export function getBrand(id: string): BrandProfile | undefined {
  return brands.find((b) => b.id === id);
}

export const likelyRoleBrands = brands.filter((b) => b.roleRelevance === "likely-relevant");
export const unclearRoleBrands = brands.filter((b) => b.roleRelevance === "relevance-unclear");
export const broaderPortfolioBrands = brands.filter(
  (b) => b.roleRelevance === "broader-portfolio" || b.roleRelevance === "not-paid-media",
);
export const roleBrandIds = ["quiksilver", "billabong", "eddie-bauer", "dickies"] as const;
