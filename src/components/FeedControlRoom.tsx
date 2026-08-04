"use client";

import { useState } from "react";
import { feedControlProducts, ILLUSTRATIVE } from "@/data/prototypes";

export function FeedControlRoom({ embedded = false }: { embedded?: boolean }) {
  const [brand, setBrand] = useState("all");
  const [margin, setMargin] = useState("all");
  const [inventory, setInventory] = useState("all");
  const [promo, setPromo] = useState("all");
  const [priority, setPriority] = useState("all");
  const [onlyInclude, setOnlyInclude] = useState(false);

  const rows = feedControlProducts.filter((p) => {
    if (brand !== "all" && p.brand !== brand) return false;
    if (margin !== "all" && p.margin !== margin) return false;
    if (inventory !== "all" && p.inventory !== inventory) return false;
    if (promo !== "all" && p.promo !== promo) return false;
    if (priority !== "all" && p.priority !== priority) return false;
    if (onlyInclude && !p.include) return false;
    return true;
  });

  const suppressCount = rows.filter(
    (r) => !r.include || r.bidHint.toLowerCase().includes("suppress"),
  ).length;

  const brands = Array.from(new Set(feedControlProducts.map((p) => p.brand)));

  return (
    <div
      id="control-room"
      className={
        embedded
          ? "scroll-mt-24 rounded-lg border border-[var(--line)] bg-[var(--panel)]"
          : "min-h-screen bg-[#f4f1ec] text-[#171a1f]"
      }
    >
      <div
        className={
          embedded
            ? "border-b border-[var(--line)] bg-[var(--shell)] px-4 py-4 text-[var(--shell-text)]"
            : "border-b border-[#ddd6cc] bg-[#14171c] px-4 py-4 text-[#e8edf4] sm:px-8"
        }
      >
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
          Illustrative example
        </p>
        <h2 className="mt-1 text-xl font-semibold">Product feed decisions</h2>
        <p className="mt-3 rounded border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
          {ILLUSTRATIVE}
        </p>
      </div>

      <div className="px-4 py-5 sm:px-6">
        <p className="mb-4 text-base leading-relaxed text-[var(--muted)]">
          Good product data → Google Merchant Center (where the feed lives) → Shopping /
          Performance Max ads → results → update the feed. Filters show the decision
          logic — not live O5 data.
        </p>

        <div className="mb-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <Select label="Brand" value={brand} onChange={setBrand} options={["all", ...brands]} />
          <Select
            label="Margin (A = best)"
            value={margin}
            onChange={setMargin}
            options={["all", "A", "B", "C"]}
          />
          <Select
            label="Stock level"
            value={inventory}
            onChange={setInventory}
            options={["all", "deep", "healthy", "low", "critical"]}
          />
          <Select
            label="Promo status"
            value={promo}
            onChange={setPromo}
            options={["all", "full-price", "approved-promo", "markdown"]}
          />
          <Select
            label="Priority"
            value={priority}
            onChange={setPriority}
            options={["all", "hero", "core", "long-tail", "exit"]}
          />
          <label className="flex items-end gap-2 pb-2 text-base">
            <input
              type="checkbox"
              checked={onlyInclude}
              onChange={(e) => setOnlyInclude(e.target.checked)}
            />
            Show included products only
          </label>
        </div>

        <p className="mb-2 text-sm text-[var(--muted)]">
          {rows.length} sample products · {suppressCount} pause or bid-down suggestions
        </p>

        <div className="overflow-x-auto rounded-lg border border-[var(--line)]">
          <table className="data">
            <thead>
              <tr>
                <th>SKU</th>
                <th>Brand</th>
                <th>Product</th>
                <th>Margin</th>
                <th>Stock</th>
                <th>Promo</th>
                <th>Priority</th>
                <th>Suggested action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => (
                <tr key={p.id}>
                  <td className="font-mono text-sm">{p.id}</td>
                  <td>{p.brand}</td>
                  <td>{p.name}</td>
                  <td>{p.margin}</td>
                  <td>{p.inventory}</td>
                  <td>{p.promo}</td>
                  <td>{p.priority}</td>
                  <td className="font-medium">{p.bidHint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {[
            {
              action: "Protect bestsellers",
              need: "Bestseller / revenue rank from merch or the store platform",
              logic: "Make sure top products aren’t drowned out by automation",
              risk: "Protecting products that are no longer strong sellers",
              validate: "Compare spend vs revenue by product",
            },
            {
              action: "Pause or reduce low-stock products",
              need: "Reliable stock levels from Shopify or the order system (OMS)",
              logic: "Critical stock → pause ads or bid less",
              risk: "Stale stock data pauses products that are actually available",
              validate: "Spot-check availability on site vs the feed",
            },
            {
              action: "Keep clearance separate from full price",
              need: "Merch-approved promo calendar",
              logic: "Markdown products shouldn’t run under a full-price brand strategy",
              risk: "Mixed messaging hurts brand positioning",
              validate: "Review sale prices with the brand team",
            },
            {
              action: "Fix weak titles and disapprovals",
              need: "Merchant Center issue list + catalog export",
              logic: "Clear titles; fix GTINs (product barcodes) and images",
              risk: "Title changes without brand approval",
              validate: "Reopen disapprovals; check click-through on a sample",
            },
          ].map((card) => (
            <article
              key={card.action}
              className="rounded border border-[var(--line)] p-4 text-base leading-relaxed"
            >
              <p className="font-semibold">{card.action}</p>
              <p className="mt-1.5 text-[var(--muted)]">
                <span className="font-medium text-[var(--ink)]">Needs:</span>{" "}
                {card.need}
              </p>
              <p className="text-[var(--muted)]">
                <span className="font-medium text-[var(--ink)]">Why:</span> {card.logic}
              </p>
              <p className="text-[var(--muted)]">
                <span className="font-medium text-[var(--ink)]">Watch out for:</span>{" "}
                {card.risk}
              </p>
              <p className="text-[var(--muted)]">
                <span className="font-medium text-[var(--ink)]">Check:</span>{" "}
                {card.validate}
              </p>
            </article>
          ))}
        </div>
      </div>
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
    <label className="text-sm">
      <span className="eyebrow">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded border border-[var(--line)] bg-[var(--panel)] px-2 py-1.5 text-base"
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
