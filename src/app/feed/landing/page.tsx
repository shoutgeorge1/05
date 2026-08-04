import type { Metadata } from "next";
import { QuiksilverLanding } from "./QuiksilverLanding";

export const metadata: Metadata = {
  title: "Quiksilver Boardshorts · Concept Landing",
};

export default function CollectionLandingPrototypePage() {
  return <QuiksilverLanding />;
}
