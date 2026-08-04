import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./landing.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-qs",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Men's Boardshorts · Quiksilver Concept Landing",
  description:
    "High-intent Quiksilver boardshorts landing concept — message-matched paid traffic, then hand off to Shopify checkout.",
  robots: { index: false, follow: false },
};

export default function QuiksilverLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`qs-landing ${poppins.variable}`}>{children}</div>;
}
