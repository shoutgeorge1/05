import type { InterviewSection } from "@/lib/research-types";

export const interviewSections: InterviewSection[] = [
  {
    id: "company-60",
    title: "60-second company explanation",
    body: "O5 Group licenses and operates apparel brands — wholesale, marketplace, and select DTC. You’re not the IP owner of Quiksilver or Eddie Bauer; Authentic and others are. For this role, the operating question is simple: which brands’ Search and Shopping would I support? Working answer from our conversation: Quiksilver, Billabong, Eddie Bauer, and Dickies. The rest of the license deck is other teams.",
  },
  {
    id: "job-60",
    title: "60-second job explanation",
    body: "Paid Search & Shopping Specialist under the Senior Manager of Performance Marketing. Support Google and Microsoft Search, Shopping, and PMax — including Merchant Center — for the brands in scope. The manager has been running it after an agency handoff. Success is efficient acquisition and revenue, with Looker as the business dashboard layer. I’d want to be a strong partner on the systems side — feeds, Shopping hygiene, landings, measurement — not just day-to-day clicks.",
  },
  {
    id: "why-george",
    title: "Why I’m useful here",
    body: "I like the connective tissue of Paid Search: feeds, Shopping hygiene, a lightweight marketing layer for category intent when the main site path is too broad, measurement definitions, and reporting Looker can trust. Commerce stays on Shopify. You’ve already taken Search back — I’d want to help raise the ceiling alongside the manager, respectfully.",
  },
];

export const goNoGoScorecard = [
  {
    id: "g1",
    factor: "Brand scope clarity (four brands)",
    weight: "High",
    acceptSignal: "Quik / Billabong / EB / Dickies confirmed with account access",
    declineSignal: "Nobody can say which brands the role supports",
  },
  {
    id: "g2",
    factor: "Feed ownership",
    weight: "High",
    acceptSignal: "Named owner + Search can drive Merchant Center hygiene",
    declineSignal: "Feed is ‘whoever has time’ forever",
  },
  {
    id: "g3",
    factor: "Room to improve systems",
    weight: "High",
    acceptSignal: "Room to improve feeds, landings, measurement, Looker inputs with the team",
    declineSignal: "Only want a clicker who can’t change anything",
  },
  {
    id: "g4",
    factor: "Looker partnership",
    weight: "Medium",
    acceptSignal: "BI owns Looker; Search owns clean inputs",
    declineSignal: "Expect Search to also build shadow dashboards with no access",
  },
  {
    id: "g5",
    factor: "Scope vs salary realism",
    weight: "Medium",
    acceptSignal: "Four brands + feeds with merch/ecom support",
    declineSignal: "Twenty-five brands, no feed help, same $70–75k",
  },
];

export const privateNotesFramework = {
  warning:
    "Private evaluation for George only — do not screen-share. They’re competent; lead with partnership and useful ideas, not a roast.",
  notes: [
    "Manager owns Search now post-agency — respect that and offer to help.",
    "Hiring manager ~7 months — may want stability. Be ambitious but warm; systems help, not swagger.",
    "Looker is their dashboard bet — align hard.",
    "Dickies channel path is the fuzzy one publicly — ask early.",
  ],
};
