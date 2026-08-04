import type { PlanItem } from "@/lib/research-types";

export const planItems: PlanItem[] = [
  {
    id: "p7-01",
    phase: "7-days",
    title: "Access inventory",
    description:
      "Google Ads (all brand accounts/MCC), Microsoft Ads, Google & Microsoft Merchant Centers, GA4, GTM (tag manager), Shopify (or feed exports), Looker/Sheets reporting, any agency logins.",
    dependencies: ["IT / manager provisioning"],
  },
  {
    id: "p7-02",
    phase: "7-days",
    title: "Stakeholder & ownership map",
    description:
      "Name owners for feeds, Merch calendar, creative, analytics, each brand P&L, and any agency. Confirm which brands the role actually runs.",
    dependencies: ["Sr. Manager intro meetings"],
    relatedOpportunityIds: ["opp-001"],
  },
  {
    id: "p7-03",
    phase: "7-days",
    title: "Conversion validation",
    description:
      "Purchase path QA on Quiksilver, Billabong, Eddie Bauer. Check consent, value, dedupe, and Billabong dual GA4.",
    dependencies: ["GTM/GA4/Ads access"],
    relatedOpportunityIds: ["opp-002", "opp-004"],
    doNotChangeUntil: "Baseline conversion counts documented for 7–14 days",
  },
  {
    id: "p7-04",
    phase: "7-days",
    title: "Merchant Center diagnostics",
    description:
      "Export item issues; flag outages, price mismatches, missing identifiers; identify feed owner and update SLA.",
    dependencies: ["GMC/MMC access"],
    relatedOpportunityIds: ["opp-003", "opp-008"],
  },
  {
    id: "p7-05",
    phase: "7-days",
    title: "Budget & objective reconciliation",
    description:
      "What is success: platform ROAS (return on ad spend), contribution, new customers, revenue? Map budgets to brands and seasons.",
    dependencies: ["Finance / manager"],
    relatedOpportunityIds: ["opp-012"],
  },
  {
    id: "p7-06",
    phase: "7-days",
    title: "Immediate waste scan",
    description:
      "Brand query leakage, competitor policy violations, disapproved products absorbing spend, broken landing URLs.",
    dependencies: ["Ads + GMC access"],
    doNotChangeUntil: "Changes that alter learning documented with before/after",
  },
  {
    id: "p30-01",
    phase: "30-days",
    title: "Measurement foundation",
    description:
      "Lock source-of-truth GA4 properties; define conversion actions used for bidding; document Consent Mode impact.",
    dependencies: ["p7-03"],
    relatedOpportunityIds: ["opp-002", "opp-011"],
  },
  {
    id: "p30-02",
    phase: "30-days",
    title: "Feed cleanup sprint",
    description:
      "Title patterns, product types, GTIN, color/size, image, sale_price rules aligned to full-price strategy.",
    dependencies: ["p7-04", "Merch policy"],
    relatedOpportunityIds: ["opp-003", "opp-008", "opp-009"],
  },
  {
    id: "p30-03",
    phase: "30-days",
    title: "Campaign taxonomy draft",
    description:
      "Choose conservative vs balanced structure based on conversion volume; implement naming and negatives hygiene.",
    dependencies: ["p30-01"],
    relatedOpportunityIds: ["opp-006"],
    doNotChangeUntil: "Do not rip-and-replace Performance Max until baseline + feed health known",
  },
  {
    id: "p30-04",
    phase: "30-days",
    title: "Reporting standard",
    description:
      "Weekly brand scorecard: spend, revenue (platform), new customers if available, feed health, top wastes, tests.",
    dependencies: ["KPI agreement"],
    relatedOpportunityIds: ["opp-012"],
  },
  {
    id: "p30-05",
    phase: "30-days",
    title: "Landing-page diagnosis backlog",
    description:
      "Top paid queries → landing URLs → friction notes. Queue 1–2 experiments.",
    dependencies: ["Ads search terms + Shopify"],
    relatedOpportunityIds: ["opp-005"],
  },
  {
    id: "p90-01",
    phase: "30-90-days",
    title: "Controlled restructuring",
    description:
      "Execute chosen account architecture with change control; brand exclusions between Quik/Billabong.",
    dependencies: ["p30-03", "stable conversions"],
    relatedOpportunityIds: ["opp-006"],
  },
  {
    id: "p90-02",
    phase: "30-90-days",
    title: "Feed enrichment & custom labels",
    description:
      "Populate custom labels 0–4 for priority, inventory, newness, promo, margin proxy where data exists.",
    dependencies: ["Merch + IT data"],
    relatedOpportunityIds: ["opp-007"],
  },
  {
    id: "p90-03",
    phase: "30-90-days",
    title: "Performance Max / Search coordination",
    description:
      "Query governance, brand protections, category insights shared between Search and Shopping / Performance Max.",
    dependencies: ["p90-01"],
  },
  {
    id: "p90-04",
    phase: "30-90-days",
    title: "Microsoft Ads development",
    description: "Stand up MMC + Search/Shopping after Google hygiene.",
    dependencies: ["p30-01", "p30-02"],
    relatedOpportunityIds: ["opp-010"],
  },
  {
    id: "p90-05",
    phase: "30-90-days",
    title: "Landing experiments live",
    description:
      "Ship one high-intent collection experience; measure assisted CVR vs control collection.",
    dependencies: ["Creative + eng capacity"],
    relatedOpportunityIds: ["opp-005"],
  },
  {
    id: "p12-01",
    phase: "12-months",
    title: "Profit- and inventory-aware bidding",
    description:
      "Only if margin and inventory pipelines are reliable—advance to Scenario C architecture.",
    dependencies: ["Trusted cost data", "OMS (order/inventory) feed"],
    doNotChangeUntil: "Finance signs off on margin proxies",
  },
  {
    id: "p12-02",
    phase: "12-months",
    title: "Portfolio operating cadence",
    description:
      "Shared Shopping command rituals across brands; experiment library; seasonal playbooks for surf vs outdoor.",
    dependencies: ["Org buy-in"],
  },
];
