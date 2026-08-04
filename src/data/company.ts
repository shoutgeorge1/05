import { RESEARCH_DATE } from "./evidence";

export const company = {
  name: "O5 Group",
  plainEnglish:
    "O5 Group licenses and operates apparel brands — wholesale, marketplace, and select DTC. Not the IP owner of Quiksilver, Billabong, or Eddie Bauer.",
  whyComplicated:
    "Multi-brand accounts, separate calendars, Merchant Center (product feed) truth, and landings that match search intent — with Looker as the reporting layer.",
  centralThesis:
    "Accounts → feeds → Shopping → focused landings → clean conversion truth → Looker-ready reporting. Commerce stays on Shopify. Thin marketing layer when category intent needs focus.",
  legalNote:
    "Formerly the Oved Group (rebranded 2022). O5 Apparel operates licensed fashion brands across wholesale, marketplace, and select DTC.",
  tagline:
    "Paid Search & Shopping for Quiksilver, Billabong, Eddie Bauer, and Dickies — feeds, Shopping, landings, and clean inputs for Looker.",
  headquarters: "New York City (31 W 34th St referenced on brand privacy pages)",
  brandOffices:
    "California — Costa Mesa / Irvine footprint for action-sports brands (trade press)",
  founded: "Oved Group 1981; Five Star Apparel 2003; O5 rebrand 2022",
  firstActions: [
    {
      title: "Confirm brand & account scope",
      detail: "Ads, Merchant Centers, feeds, Looker partners for the four brands.",
    },
    {
      title: "Align conversion definitions",
      detail: "One purchase/revenue definition Ads, GA4, Shopify, and Looker can share.",
    },
    {
      title: "Merchant Center hygiene (product feed)",
      detail: "Issues, availability, titles — before reshuffling campaigns.",
    },
    {
      title: "One focused landing win",
      detail: "Quiksilver boardshorts concept — query → merch → Shopify checkout.",
    },
  ],
  doNotOverread: [
    "This prototype is a thinking artifact — not a claim that O5 systems are broken.",
    "A corporate license list is not this role’s day-to-day media list.",
    "Public tags prove presence, not conversion quality.",
    "Dickies .com operator and this role’s Dickies ads path still need a clean internal map.",
    "Looker is their dashboard home — partner there; don’t replace BI with a side project.",
  ],
  leadership: [
    { name: "Isaac Oved", title: "Chairman" },
    { name: "David Oved", title: "Chief Executive Officer" },
    { name: "Ronnie Oved", title: "President, Oved Apparel" },
    { name: "Mike Oved", title: "President, Operations" },
    { name: "Albert Pardo", title: "President, Five Star Apparel" },
    { name: "Eric Spiel", title: "Chief Financial Officer" },
    { name: "Sam Ashkenazie", title: "President, E-Comm" },
    { name: "Morris Dabah", title: "President, Amazon" },
    { name: "Mark Olivero", title: "Chief Information Officer" },
  ],
  divisions: [
    {
      id: "apparel",
      name: "O5 Apparel",
      aka: "Formerly Oved Five Star Apparel",
      summary:
        "Licensed and operated fashion portfolio — wholesale, marketplace, and DTC where applicable.",
      url: "https://www.o5group.com/o5apparel",
    },
    {
      id: "finance",
      name: "O5 Finance",
      aka: "IceCap Group",
      summary: "Private lender — short-term residential real estate loans in the Northeast.",
      url: "https://icecapgroup.com/",
    },
    {
      id: "logistics",
      name: "O5 Logistics",
      aka: "EMG9 shipping",
      summary: "Import, export, and domestic shipping support for SMEs.",
      url: "https://www.emg9.com/",
    },
    {
      id: "realty",
      name: "O5 Realty",
      aka: undefined,
      summary: "Office and retail real estate portfolio in NY and across the US.",
      url: "https://www.o5group.com/",
    },
  ],
  operatingModel: [
    {
      title: "Licensee / operator, not IP owner",
      detail:
        "Brand IP stays with Authentic / Bluestar etc. O5 runs licenses and, for select brands, DTC.",
    },
    {
      title: "This role = Paid Search & Shopping",
      detail:
        "Other functions have teams. The ask is ownership of Search — not a full ecommerce rebuild.",
    },
    {
      title: "Four brands in scope; rest with other teams",
      detail:
        "Working assumption: Quiksilver, Billabong, Eddie Bauer, Dickies. Champion / Hurley / IZOD / Lucky stay corporate portfolio.",
    },
  ],
  researchMeta: {
    lastUpdated: RESEARCH_DATE,
    propertiesResearched: 12,
    confirmedO5Dtc: 3,
    likelyRoleDtc: 4,
    roleUnclearDtc: 0,
    reportedLicensesNeedingScope: 1,
    confidenceSummary:
      "Working scope: Quiksilver, Billabong, Eddie Bauer, Dickies. Public DTC strong for Quik/Billabong/EB. Dickies channel path to confirm. Ads topology unknown until access.",
  },
};

export const roleContext = {
  title: "Paid Search and Shopping Specialist",
  employerListingName: "Oved Group / o5 group",
  reportsTo: "Senior Manager of Performance Marketing",
  locationListed: "Costa Mesa, CA",
  salaryListed: "$70,000 – $75,000",
  experienceVariants: [
    "Career.com listing: 5 years hands-on DTC/ecommerce paid search & shopping",
    "LinkedIn variant observed in search: 2–4 years",
  ],
  hybridNote: "Listing mentions hybrid/flexible schedule; exact onsite cadence unknown",
  coreScope: [
    "Google Ads & Microsoft Ads — Search, Shopping, Performance Max, Brand/Non-Brand",
    "Google Merchant Center & Microsoft Merchant Center product feeds",
    "Keyword research, query mining, bidding, budget pacing",
    "ROAS, CAC, CPA, revenue reporting — Looker as the business dashboard layer",
    "Testing: creative, landing match, bidding, automation",
    "Partnership with Ecommerce, Merchandising, Creative, Analytics / BI",
  ],
  sourceUrl:
    "https://www.career.com/job/oved-group/paid-search-and-shopping-specialist/j202601142238514034430",
  sourceConfidence: "confirmed" as const,
  notOnOfficialCareersPage:
    "As of 2026-08-01, o5group.com/careers listed NYC roles only; CA paid-search role found on third-party boards under Oved Group.",
};

/** Collaborative follow-up notes — short, scannable */
export const workingNotes = {
  headline: "How I'd approach this",
  subhead:
    "You’ve already brought paid search in-house. I’d work alongside the person who already runs it — after the agency handoff — on product data in Google, focused entry pages when a search is specific, and trustworthy numbers for Looker (your dashboard tool). Checkout stays on Shopify. Quiksilver is the worked example here; the same approach would apply across the brands in this role.",
  brandsForThisRole: ["Quiksilver", "Billabong", "Eddie Bauer", "Dickies"],
  otherTeams: ["Champion", "Hurley", "IZOD", "Lucky Brand"],
  valueProps: [
    {
      title: "Accurate product listings in Google",
      detail:
        "Keep price, availability, and titles correct in the product feed so Shopping ads don’t pay for clicks that can’t convert.",
    },
    {
      title: "Focused pages when the search is specific",
      detail:
        "If someone searches a product type (e.g. boardshorts), send them to a page built for that — not the busy homepage. They still check out on Shopify.",
    },
    {
      title: "Trustworthy numbers for Looker",
      detail:
        "Your BI team owns Looker dashboards. Paid search keeps campaign and feed data accurate underneath so reports match what actually happened.",
    },
    {
      title: "Brand rhythm",
      detail:
        "Keep Quiksilver and Billabong clearly separate in ads. Run Eddie Bauer on its outdoor seasons. Confirm which Dickies channels this role actually advertises.",
    },
  ],
  notThisRole: [
    "Campaign ops with no room to improve how the system works",
    "Rebuilding the whole Shopify store",
    "Replacing Looker",
    "Day-to-day media for every licensed brand at the company",
  ],
};
