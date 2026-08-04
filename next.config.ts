import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/company", destination: "/", permanent: false },
      { source: "/properties", destination: "/portfolio", permanent: false },
      { source: "/performance", destination: "/tech", permanent: false },
      { source: "/seo", destination: "/tech", permanent: false },
      { source: "/measurement", destination: "/feed", permanent: false },
      { source: "/feed-lab", destination: "/feed", permanent: false },
      { source: "/paid-media", destination: "/feed", permanent: false },
      { source: "/opportunities", destination: "/plan", permanent: false },
      { source: "/commerce", destination: "/tech", permanent: false },
      { source: "/interview", destination: "/", permanent: false },
      { source: "/evidence", destination: "/", permanent: false },
      { source: "/private-notes", destination: "/", permanent: false },
      { source: "/methodology", destination: "/", permanent: false },
      { source: "/prototypes", destination: "/feed", permanent: false },
      {
        source: "/prototypes/feed-control",
        destination: "/feed#control-room",
        permanent: false,
      },
      {
        source: "/prototypes/shopping-command",
        destination: "/feed#control-room",
        permanent: false,
      },
      {
        source: "/prototypes/collection-landing",
        destination: "/feed/landing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
