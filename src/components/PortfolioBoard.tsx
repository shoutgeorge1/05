"use client";

import { useState } from "react";
import { brands } from "@/data/brands";
import { properties } from "@/data/properties";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";
import { EvidenceChips } from "@/components/EvidenceChips";
import { ROLE_RELEVANCE_LABEL } from "@/lib/research-types";

export function PortfolioBoard() {
  const [confidence, setConfidence] = useState("all");
  const [dtc, setDtc] = useState("all");
  const [role, setRole] = useState("all");
  const [platform, setPlatform] = useState("all");

  const filtered = brands.filter((b) => {
    if (confidence !== "all" && b.confidence !== confidence) return false;
    if (role !== "all" && b.roleRelevance !== role) return false;
    if (dtc === "operated" && b.relationship !== "dtc-operator") return false;
    if (dtc === "relationship-only" && b.relationship === "dtc-operator") return false;
    if (dtc === "unknown" && b.confidence === "unknown") return true;
    if (platform !== "all") {
      const p = (b.commercePlatform ?? "").toLowerCase();
      if (!p.includes(platform.toLowerCase())) return false;
    }
    return true;
  });

  const usefulProps = properties.filter(
    (p) =>
      p.propertyType === "dtc-storefront" ||
      p.propertyType === "corporate" ||
      p.propertyType === "careers",
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <Select
          label="Confidence"
          value={confidence}
          onChange={setConfidence}
          options={["all", "confirmed", "strong-indicator", "inference", "unknown"]}
        />
        <Select
          label="DTC status"
          value={dtc}
          onChange={setDtc}
          options={["all", "operated", "relationship-only"]}
        />
        <Select
          label="Role relevance"
          value={role}
          onChange={setRole}
          options={[
            "all",
            "likely-relevant",
            "relevance-unclear",
            "broader-portfolio",
          ]}
        />
        <Select
          label="Platform contains"
          value={platform}
          onChange={setPlatform}
          options={["all", "Shopify", "Wix"]}
        />
      </div>

      <div className="table-wrap rounded-lg">
        <table className="data">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Underlying brand owner</th>
              <th>Reported O5 relationship</th>
              <th>Category / territory</th>
              <th>Known channel</th>
              <th>DTC operation status</th>
              <th>Likely relevance to this role</th>
              <th>Confidence</th>
              <th>Evidence</th>
              <th>Interview verification question</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b.id}>
                <td className="font-medium whitespace-nowrap">{b.name}</td>
                <td>{b.brandOwner ?? "Not publicly verified"}</td>
                <td>{b.reportedO5Relationship}</td>
                <td>
                  {b.productScope}; {b.geography}
                </td>
                <td>{b.knownChannel}</td>
                <td>{b.dtcOperationStatus}</td>
                <td>{ROLE_RELEVANCE_LABEL[b.roleRelevance]}</td>
                <td>
                  <ConfidenceBadge confidence={b.confidence} compact />
                </td>
                <td>
                  <EvidenceChips ids={b.evidenceIds} />
                </td>
                <td className="min-w-[200px]">{b.interviewQuestion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[var(--muted)]">
        On small screens, scroll horizontally. Unknown cells intentionally say “Not
        publicly verified” rather than inventing values.
      </p>

      <section className="panel rounded-lg p-5">
        <h2 className="text-base font-semibold">
          Quiksilver & Billabong — Liberated Brands transition
        </h2>
        <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <p className="font-medium text-[var(--confirmed)]">Confirmed</p>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-[var(--muted)]">
              <li>
                Trade press: O5 taking over Quiksilver.com and Billabong.com; premium
                full-price DTC strategy stated.
              </li>
              <li>
                Live privacy/legal: O5 BNG, LLC / O5 BILL, LLC; Shopify shops
                *-us-o5.
              </li>
              <li>OC footprint and transferred functional teams reported in trade press.</li>
            </ul>
            <EvidenceChips ids={["ev-003", "ev-004", "ev-010", "ev-017"]} />
          </div>
          <div>
            <p className="font-medium text-[var(--indicator)]">
              Observed technical indicator
            </p>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-[var(--muted)]">
              <li>
                HTML attribute liberated-platform-version=&quot;2.1&quot; on Quiksilver and
                Billabong — legacy theme/platform residue, not a scandal.
              </li>
              <li>Separate GTM containers per brand; OneTrust→Shopify consent bridge.</li>
            </ul>
            <EvidenceChips ids={["ev-011"]} />
          </div>
          <div>
            <p className="font-medium text-[var(--inference)]">Reasonable inference</p>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-[var(--muted)]">
              <li>
                Some systems or workflows may have been inherited and may still be
                undergoing standardization—a transitional architecture signal.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-[var(--unknown)]">Unknown</p>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-[var(--muted)]">
              <li>
                Whether Google Ads accounts, Merchant Centers, feeds, GA4 properties,
                customer data, or vendor contracts were transferred.
              </li>
              <li>What was rebuilt versus retained.</li>
              <li>Whether this Paid Search role owns those systems.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-base font-semibold">Property inventory (useful fields)</h2>
        <div className="table-wrap rounded-lg">
          <table className="data">
            <thead>
              <tr>
                <th>Domain</th>
                <th>Brand</th>
                <th>Purpose</th>
                <th>Region</th>
                <th>Platform</th>
                <th>Customer journey role</th>
                <th>O5 operational relationship</th>
                <th>Role relevance</th>
                <th>Tracking observations</th>
                <th>Evidence</th>
                <th>Last checked</th>
              </tr>
            </thead>
            <tbody>
              {usefulProps.map((p) => (
                <tr key={p.id}>
                  <td>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--accent)] hover:underline"
                    >
                      {p.domain}
                    </a>
                  </td>
                  <td>{p.brand}</td>
                  <td>{p.purpose}</td>
                  <td>{p.region}</td>
                  <td>{p.platform}</td>
                  <td>{p.customerJourneyRole}</td>
                  <td>{p.o5OperationalRelationship}</td>
                  <td>{ROLE_RELEVANCE_LABEL[p.roleRelevance]}</td>
                  <td className="min-w-[180px] text-xs">
                    {p.trackingObservations.join(" · ")}
                  </td>
                  <td>
                    <EvidenceChips ids={p.evidenceIds} />
                  </td>
                  <td className="font-mono text-[11px]">{p.lastChecked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="text-xs">
      <span className="eyebrow">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded border border-[var(--line)] bg-[var(--panel)] px-2 py-1.5 text-sm"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
