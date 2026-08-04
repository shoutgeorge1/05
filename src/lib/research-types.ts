/** Shared research enums and types for the O5 Paid Search follow-up notes. */

export type Confidence =
  | "confirmed"
  | "strong-indicator"
  | "inference"
  | "unknown";

export type EvidenceType =
  | "official-site"
  | "legal-policy"
  | "storefront-html"
  | "robots-sitemap"
  | "trade-press"
  | "press-release"
  | "job-listing"
  | "corporate-page"
  | "technical-signal"
  | "secondary-index";

export type RelationshipType =
  | "corporate-entity"
  | "parent-related"
  | "licensee"
  | "dtc-operator"
  | "wholesale"
  | "marketplace"
  | "reported-license"
  | "requires-verification"
  | "former-or-unclear";

/** How relevant a brand/property appears to the advertised Paid Search role. */
export type RoleRelevance =
  | "likely-relevant"
  | "relevance-unclear"
  | "broader-portfolio"
  | "not-paid-media";

export type PropertyType =
  | "corporate"
  | "dtc-storefront"
  | "wholesale"
  | "marketplace"
  | "careers"
  | "help"
  | "loyalty"
  | "finance"
  | "logistics"
  | "landing"
  | "tracking"
  | "other";

export type ChannelModel =
  | "dtc"
  | "wholesale"
  | "marketplace"
  | "hybrid"
  | "unknown";

export type ReadinessState =
  | "strong"
  | "functional"
  | "friction"
  | "gap"
  | "unknown";

export type TimingBucket = "7-days" | "30-days" | "30-90-days" | "12-months";

export type QualitativeLevel = "high" | "medium" | "low";

export interface EvidenceItem {
  id: string;
  finding: string;
  companyOrBrand: string;
  property?: string;
  category: string;
  evidenceType: EvidenceType;
  sourceUrl: string;
  sourceTitle: string;
  dateAccessed: string;
  observation: string;
  confidence: Confidence;
  businessImplication: string;
  doesNotProve: string;
  relatedRecommendationIds?: string[];
  contradictoryEvidence?: string;
  unknowns?: string;
  nextInvestigation?: string;
  roleRelevant?: boolean;
}

export interface BrandProfile {
  id: string;
  name: string;
  relationship: RelationshipType;
  relationshipSummary: string;
  reportedO5Relationship: string;
  confidence: Confidence;
  productScope: string;
  geography: string;
  websites: string[];
  commercePlatform?: string;
  channelModel: ChannelModel;
  knownChannel: string;
  dtcOperationStatus: string;
  dtcOperator?: string;
  brandOwner?: string;
  roleRelevance: RoleRelevance;
  roleRelevanceNote: string;
  interviewQuestion: string;
  evidenceIds: string[];
  unknowns: string[];
  businessImplication: string;
  paidSearchImplication: string;
  accent?: string;
  statusLabel?: string;
}

export interface WebProperty {
  id: string;
  domain: string;
  url: string;
  propertyType: PropertyType;
  brand: string;
  region: string;
  platform: string;
  purpose: string;
  customerJourneyRole: string;
  o5OperationalRelationship: string;
  roleRelevance: RoleRelevance;
  trackingObservations: string[];
  ownershipConfidence: Confidence;
  o5Operated: boolean | "unknown";
  status: "active" | "transition" | "blocked" | "unverified";
  evidenceIds: string[];
  lastChecked: string;
  nextInvestigation: string;
}

export interface TechFinding {
  id: string;
  propertyId: string;
  brand: string;
  layer: string;
  technology: string;
  detail: string;
  confidence: Confidence;
  evidenceIds: string[];
  operationalConsequence: string;
}

export interface ReadinessRow {
  id: string;
  brand: string;
  dimension: string;
  state: ReadinessState;
  explanation: string;
  confidence: Confidence;
  evidenceIds: string[];
}

export interface Opportunity {
  id: string;
  title: string;
  brandOrProperty: string;
  problem: string;
  evidenceIds: string[];
  confidence: Confidence;
  commercialImpact: QualitativeLevel;
  speedToValue: QualitativeLevel;
  technicalDifficulty: QualitativeLevel;
  organizationalDependency: QualitativeLevel;
  measurementRequirement: string;
  recommendedOwner: string;
  timing: TimingBucket;
  nextAction: string;
  category: string;
}

export interface PlanItem {
  id: string;
  phase: TimingBucket;
  title: string;
  description: string;
  dependencies: string[];
  doNotChangeUntil?: string;
  relatedOpportunityIds?: string[];
}

export interface InterviewSection {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
}

export const CONFIDENCE_LABEL: Record<Confidence, string> = {
  confirmed: "Confirmed",
  "strong-indicator": "Strong technical indicator",
  inference: "Reasonable inference",
  unknown: "Unknown / requires internal access",
};

export const READINESS_LABEL: Record<ReadinessState, string> = {
  strong: "Strong",
  functional: "Functional",
  friction: "Friction present",
  gap: "Material gap",
  unknown: "Unknown",
};

export const ROLE_RELEVANCE_LABEL: Record<RoleRelevance, string> = {
  "likely-relevant": "Likely relevant to advertised role",
  "relevance-unclear": "Associated with O5 — role responsibility unclear",
  "broader-portfolio": "Broader corporate relationship — not shown as paid-media ownership",
  "not-paid-media": "Not a paid-media surface for this role",
};
