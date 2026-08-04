#!/usr/bin/env node
/**
 * Reproducible public storefront probe for O5-related properties.
 * Does not require secrets. Writes a JSON summary to stdout.
 *
 * Usage: npm run research:probe
 */

const TARGETS = [
  "https://www.o5group.com/",
  "https://www.quiksilver.com/",
  "https://www.billabong.com/",
  "https://www.eddiebauer.com/",
  "https://www.dickies.com/policies/privacy-policy",
  "https://www.quiksilver.com/robots.txt",
  "https://www.billabong.com/robots.txt",
  "https://www.eddiebauer.com/robots.txt",
];

const PATTERNS = [
  /Shopify\.shop\s*=\s*"([^"]+)"/i,
  /GTM-[A-Z0-9]+/g,
  /G-[A-Z0-9]+/g,
  /AW-\d+/g,
  /liberated-platform-version="([^"]+)"/i,
  /OneTrust/i,
  /Klaviyo/i,
  /Attentive/i,
  /Yotpo/i,
];

async function probe(url) {
  const started = Date.now();
  try {
    const res = await fetch(url, {
      headers: { "user-agent": "O5-XrayResearchBot/1.0 (+local research script)" },
      redirect: "follow",
    });
    const text = await res.text();
    const hits = {};
    for (const pattern of PATTERNS) {
      const flags = pattern.flags.includes("g") ? pattern : new RegExp(pattern.source, pattern.flags + "g");
      const matches = text.match(flags);
      if (matches?.length) hits[pattern.source] = [...new Set(matches)].slice(0, 12);
    }
    return {
      url,
      status: res.status,
      ms: Date.now() - started,
      bytes: text.length,
      hits,
      accessed: new Date().toISOString().slice(0, 10),
    };
  } catch (error) {
    return {
      url,
      error: String(error),
      accessed: new Date().toISOString().slice(0, 10),
    };
  }
}

const results = [];
for (const url of TARGETS) {
  results.push(await probe(url));
}

console.log(JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2));
