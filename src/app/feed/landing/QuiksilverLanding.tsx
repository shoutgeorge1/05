"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  QS_COLLECTION,
  QS_STORE,
  qsFitNotes,
  qsLandingProducts,
  qsTrust,
  type LandingProduct,
} from "@/data/quiksilver-landing";
import { hourShowcase } from "@/data/hour-showcase";

type LengthFilter = "all" | '19"' | '20"' | '21"';
type TraitFilter = "all" | "stretch" | "surfsilk" | "highline";
type LayoutId = "a" | "b" | "c" | "d" | "e" | "f" | "g";

const LAYOUTS: Record<
  LayoutId,
  { letter: string; name: string; blurb: string }
> = {
  a: {
    letter: "A",
    name: "Product",
    blurb: "Packshot hero, trust bar, then a clean shop grid.",
  },
  b: {
    letter: "B",
    name: "Lifestyle",
    blurb: "Full-bleed beach story, then larger product cards.",
  },
  c: {
    letter: "C",
    name: "Colors",
    blurb: "Flat-lay mosaic of available colors, dense catalog below.",
  },
  d: {
    letter: "D",
    name: "Split",
    blurb: "Half lifestyle / half shop controls, two-column cards.",
  },
  e: {
    letter: "E",
    name: "Story+Shop",
    blurb: "Editorial chapters alternating with product rows.",
  },
  f: {
    letter: "F",
    name: "Length first",
    blurb: "Pick outseam length first, then see matching styles.",
  },
  g: {
    letter: "G",
    name: "Dense PLP",
    blurb: "Thin banner, filters above the fold, compact grid.",
  },
};

const COLOR_MOSAIC = [
  { src: "/landing/fl-highline-camo.jpg", label: "Camo" },
  { src: "/landing/fl-kaimana-black.jpg", label: "Black" },
  { src: "/landing/fl-blockchild.jpg", label: "Anthracite" },
  { src: "/landing/fl-tijuana.jpg", label: "Skyway" },
  { src: "/landing/fl-nature-tile.jpg", label: "Quiet Harbor" },
  { src: "/landing/om-salsa.jpg", label: "Salsa" },
];

const LENGTH_CARDS: {
  id: Exclude<LengthFilter, "all">;
  title: string;
  body: string;
  src: string;
}[] = [
  {
    id: '19"',
    title: '19" outseam',
    body: "Core surf length — coverage without drag.",
    src: "/landing/hero-product.jpg",
  },
  {
    id: '20"',
    title: '20" outseam',
    body: "Everyday coverage for Surfsilk and classic cuts.",
    src: "/landing/om-salsa.jpg",
  },
  {
    id: '21"',
    title: '21" outseam',
    body: "Longer coverage for bigger days and Young Guns.",
    src: "/landing/om-steelhead.jpg",
  },
];

function matches(p: LandingProduct, length: LengthFilter, trait: TraitFilter) {
  if (length !== "all" && p.length !== length) return false;
  if (trait === "stretch" && !p.stretch) return false;
  if (trait === "surfsilk" && !p.surfsilk) return false;
  if (trait === "highline" && !p.highline) return false;
  return true;
}

function money(price: string) {
  const n = Number(price);
  if (Number.isNaN(n)) return `$${price}`;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function ProductCard({
  p,
  variant = "standard",
}: {
  p: LandingProduct;
  variant?: "standard" | "large" | "compact" | "row";
}) {
  return (
    <a
      className={`qs-card qs-card-${variant}`}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="qs-card-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.title} loading="lazy" />
        {p.badge ? <span className="qs-badge">{p.badge}</span> : null}
      </div>
      <div className="qs-card-body">
        <h3 className="qs-card-title">{p.title}</h3>
        <div className="qs-card-meta">
          <span>{p.length} outseam</span>
          <span className="qs-card-price">{money(p.price)}</span>
        </div>
        <span className="qs-card-cta">Shop on Quiksilver.com →</span>
      </div>
    </a>
  );
}

function Filters({
  length,
  trait,
  setLength,
  setTrait,
  dense,
}: {
  length: LengthFilter;
  trait: TraitFilter;
  setLength: (v: LengthFilter) => void;
  setTrait: (v: TraitFilter) => void;
  dense?: boolean;
}) {
  return (
    <div className={`qs-filters-wrap${dense ? " is-dense" : ""}`}>
      <div className="qs-filters" role="group" aria-label="Length">
        {(
          [
            ["all", "All lengths"],
            ['19"', '19"'],
            ['20"', '20"'],
            ['21"', '21"'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`qs-chip${length === id ? " is-active" : ""}`}
            onClick={() => setLength(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="qs-filters" role="group" aria-label="Fabric and line">
        {(
          [
            ["all", "All styles"],
            ["stretch", "Stretch"],
            ["surfsilk", "Surfsilk"],
            ["highline", "Highline"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`qs-chip${trait === id ? " is-active" : ""}`}
            onClick={() => setTrait(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="qs-header">
      <div className="qs-header-inner">
        <a
          href={QS_STORE}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Quiksilver"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="qs-logo"
            src="/landing/quiksilver-logo.png"
            alt="Quiksilver"
          />
        </a>
        <nav className="qs-nav" aria-label="Primary">
          <a href="#shop">Men</a>
          <a href="#shop">Boardshorts</a>
          <a href="#fit">Fit guide</a>
          <a href={QS_COLLECTION} target="_blank" rel="noopener noreferrer">
            Full collection
          </a>
        </nav>
        <a
          className="qs-header-cta"
          href={QS_COLLECTION}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Quiksilver.com
        </a>
      </div>
    </header>
  );
}

function TrustBar({ className = "" }: { className?: string }) {
  return (
    <div className={`qs-trust ${className}`.trim()}>
      {qsTrust.map((t) => (
        <div key={t}>{t}</div>
      ))}
    </div>
  );
}

function FitBlock({ mediaSrc }: { mediaSrc: string }) {
  return (
    <section className="qs-fit" id="fit">
      <div className="qs-fit-media" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mediaSrc} alt="" loading="lazy" />
      </div>
      <div className="qs-fit-copy">
        <h2>Length & fabric, made easy</h2>
        <p>
          High-intent shoppers already know the category. Give them the details
          that decide the click — then hand off to Quiksilver.com.
        </p>
        <div className="qs-fit-list">
          {qsFitNotes.map((n) => (
            <div className="qs-fit-item" key={n.title}>
              <strong>{n.title}</strong>
              <span>{n.body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Handoff() {
  return (
    <section className="qs-handoff">
      <div className="qs-handoff-inner">
        <div>
          <h2>Checkout stays on Quiksilver.com</h2>
          <p>
            Product page, cart, and payment stay on the existing Shopify
            storefront. This page is only the paid-path merchandising layer.
          </p>
        </div>
        <div>
          <a
            className="qs-btn qs-btn-primary"
            href={QS_COLLECTION}
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue on Quiksilver.com
          </a>
        </div>
      </div>
    </section>
  );
}

function ConceptBlock() {
  return (
    <section className="qs-concept">
      <p className="qs-concept-kicker">Concept · not an official page</p>
      <h2>{hourShowcase.title}</h2>
      <p className="qs-concept-lead">{hourShowcase.lead}</p>
      <div className="qs-concept-cards">
        {hourShowcase.cards.map((card) => (
          <article className="qs-concept-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
      <div className="qs-concept-how">
        <h3>How a paid click could use this</h3>
        <ul>
          {hourShowcase.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
      <p className="qs-concept-proof">{hourShowcase.proof}</p>
      <p className="qs-concept-base">
        Live base collection:{" "}
        <a href={QS_COLLECTION} target="_blank" rel="noopener noreferrer">
          {QS_COLLECTION.replace("https://www.", "")}
        </a>
      </p>
    </section>
  );
}

export function QuiksilverLanding() {
  const [length, setLength] = useState<LengthFilter>("all");
  const [trait, setTrait] = useState<TraitFilter>("all");
  const [layout, setLayout] = useState<LayoutId>("a");

  const products = useMemo(
    () => qsLandingProducts.filter((p) => matches(p, length, trait)),
    [length, trait],
  );

  const featured = products[0] ?? qsLandingProducts[0];
  const mid = products.slice(0, 3);
  const rest = products.slice(3);

  const pickLength = (id: Exclude<LengthFilter, "all">) => {
    setLength(id);
    requestAnimationFrame(() => {
      document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const selectLayout = (id: LayoutId) => {
    setLayout(id);
    requestAnimationFrame(() => {
      document
        .getElementById("qs-layout-stage")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const active = LAYOUTS[layout];

  return (
    <>
      <div className="qs-demo-bar">
        Concept prototype · Live Quiksilver catalog data · Not an official page ·{" "}
        <a href={QS_COLLECTION} target="_blank" rel="noopener noreferrer">
          mens-clothing-boardshorts
        </a>{" "}
        · <Link href="/feed">Back to Feed</Link>
      </div>

      <div className="qs-layout-bar" role="region" aria-label="Layout test A through G">
        <div className="qs-layout-bar-copy">
          <p className="qs-layout-bar-eyebrow">Demo control · try this first</p>
          <p className="qs-layout-bar-title">
            Layout test A–G — same products, different pages
          </p>
          <p className="qs-layout-bar-sub">
            Click a letter below to swap the full page layout. Products and prices
            stay the same — you&apos;re testing which presentation converts better
            for paid boardshorts traffic.
          </p>
        </div>
        <div className="qs-layout-switch" role="group" aria-label="Choose layout A through G">
          {(Object.keys(LAYOUTS) as LayoutId[]).map((id) => (
            <button
              key={id}
              type="button"
              className={`qs-layout-btn${layout === id ? " is-active" : ""}`}
              onClick={() => selectLayout(id)}
              aria-pressed={layout === id}
              title={`${LAYOUTS[id].letter} · ${LAYOUTS[id].name}: ${LAYOUTS[id].blurb}`}
            >
              <span className="qs-layout-letter">{LAYOUTS[id].letter}</span>
              <span className="qs-layout-name">{LAYOUTS[id].name}</span>
            </button>
          ))}
        </div>
        <div className="qs-layout-active" aria-live="polite">
          <span className="qs-layout-active-badge">
            Viewing {active.letter}
          </span>
          <div>
            <strong>{active.name}</strong>
            <span>{active.blurb}</span>
          </div>
          <p className="qs-layout-active-hint">
            Tip: click B, then F, then G — each rebuilds the whole page.
          </p>
        </div>
      </div>

      <div className="qs-announcement">
        Free shipping on orders $75+ · Easy returns
      </div>

      <SiteHeader />

      <div
        id="qs-layout-stage"
        className={`qs-layout qs-layout-${layout}`}
        data-layout={layout}
      >
        {/* ── A · Product-forward ── */}
        {layout === "a" && (
          <>
            <section className="qs-hero qs-hero-product">
              <div className="qs-hero-media" aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/hero-product.jpg"
                  alt=""
                  fetchPriority="high"
                />
                <div className="qs-hero-scrim" />
              </div>
              <div className="qs-hero-copy">
                <p className="qs-hero-kicker">Men&apos;s · Boardshorts</p>
                <h1>Boardshorts, front and center</h1>
                <p className="qs-hero-sub">
                  Product-first entry for paid category intent — live styles and
                  prices, then shop the collection on Quiksilver.com.
                </p>
                <div className="qs-hero-actions">
                  <a className="qs-btn qs-btn-primary" href="#shop">
                    Shop boardshorts
                  </a>
                  <a className="qs-btn qs-btn-ghost" href="#fit">
                    Length & fit
                  </a>
                </div>
              </div>
            </section>
            <TrustBar />
            <main className="qs-main" id="shop">
              <div className="qs-shop-head">
                <div>
                  <h2>Men&apos;s boardshorts</h2>
                  <p>
                    Filter by length and fabric, then open the live product page
                    on Quiksilver.com.
                  </p>
                </div>
              </div>
              <Filters
                length={length}
                trait={trait}
                setLength={setLength}
                setTrait={setTrait}
              />
              <p className="qs-count">
                {products.length} style{products.length === 1 ? "" : "s"} · prices
                from live storefront
              </p>
              <div className="qs-grid">
                {products.map((p) => (
                  <ProductCard key={p.handle} p={p} />
                ))}
              </div>
              {!products.length ? (
                <p className="qs-count" style={{ marginTop: "1.5rem" }}>
                  No styles match those filters — clear a chip to widen the set.
                </p>
              ) : null}
              <FitBlock mediaSrc="/landing/fit-lifestyle.jpg" />
            </main>
          </>
        )}

        {/* ── B · Lifestyle editorial ── */}
        {layout === "b" && (
          <>
            <section className="qs-hero qs-hero-life">
              <div className="qs-hero-media" aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/hero-lifestyle-2.jpg"
                  alt=""
                  fetchPriority="high"
                  style={{ objectPosition: "center 22%" }}
                />
                <div className="qs-hero-scrim" />
              </div>
              <div className="qs-hero-copy qs-hero-copy-wide">
                <p className="qs-hero-kicker">In the water · On the sand</p>
                <h1>Built for the session</h1>
                <p className="qs-hero-sub">
                  Lifestyle that shows the short clearly — then filters for length
                  and fabric, with checkout on Quiksilver.com.
                </p>
                <div className="qs-hero-actions">
                  <a className="qs-btn qs-btn-primary" href="#shop">
                    Shop the lineup
                  </a>
                  <a className="qs-btn qs-btn-ghost" href="#fit">
                    Fit guide
                  </a>
                </div>
              </div>
            </section>
            <main className="qs-main qs-main-editorial" id="shop">
              <div className="qs-editorial-intro">
                <h2>From the beach to the cart</h2>
                <p>
                  Lead with the moment, then make it easy to choose a length and
                  open a live product page.
                </p>
              </div>
              <Filters
                length={length}
                trait={trait}
                setLength={setLength}
                setTrait={setTrait}
              />
              <p className="qs-count">
                {products.length} style{products.length === 1 ? "" : "s"} · prices
                from live storefront
              </p>
              <div className="qs-grid qs-grid-large">
                {products.map((p) => (
                  <ProductCard key={p.handle} p={p} variant="large" />
                ))}
              </div>
              <TrustBar className="qs-trust-inset" />
              <FitBlock mediaSrc="/landing/hero-lifestyle.jpg" />
            </main>
          </>
        )}

        {/* ── C · Color options mosaic ── */}
        {layout === "c" && (
          <>
            <section className="qs-mosaic-hero">
              <div className="qs-mosaic-copy">
                <p className="qs-hero-kicker qs-kicker-dark">
                  Assortment · Available colors
                </p>
                <h1>Pick a color. Keep moving.</h1>
                <p>
                  Flat-lay energy for campaign and Shopping creative — still hands
                  off to the same storefront with live prices.
                </p>
                <div className="qs-hero-actions">
                  <a className="qs-btn qs-btn-dark" href="#shop">
                    Shop available colors
                  </a>
                </div>
              </div>
              <div className="qs-mosaic" aria-hidden>
                {COLOR_MOSAIC.map((c) => (
                  <figure key={c.src} className="qs-mosaic-cell">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.src} alt="" fetchPriority="high" />
                    <figcaption>{c.label}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
            <main className="qs-main" id="shop">
              <div className="qs-shop-head">
                <div>
                  <h2>Shop by style</h2>
                  <p>
                    Same live catalog — browse available colors and lengths, then
                    continue on Quiksilver.com.
                  </p>
                </div>
              </div>
              <Filters
                length={length}
                trait={trait}
                setLength={setLength}
                setTrait={setTrait}
              />
              <p className="qs-count">
                {products.length} style{products.length === 1 ? "" : "s"} · prices
                from live storefront
              </p>
              <div className="qs-grid qs-grid-dense">
                {products.map((p) => (
                  <ProductCard key={p.handle} p={p} variant="compact" />
                ))}
              </div>
              <FitBlock mediaSrc="/landing/story-beach.jpg" />
            </main>
            <TrustBar />
          </>
        )}

        {/* ── D · Split ── */}
        {layout === "d" && (
          <>
            <section className="qs-split-hero">
              <div className="qs-split-media" aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/hero-lifestyle.jpg"
                  alt=""
                  fetchPriority="high"
                />
              </div>
              <div className="qs-split-panel">
                <p className="qs-hero-kicker qs-kicker-dark">
                  Men&apos;s boardshorts
                </p>
                <h1>Find your short. Filter first.</h1>
                <p className="qs-split-sub">
                  Split layout: lifestyle on one side, shopping controls on the
                  other — then open live PDPs on Quiksilver.com.
                </p>
                <Filters
                  length={length}
                  trait={trait}
                  setLength={setLength}
                  setTrait={setTrait}
                  dense
                />
                <a className="qs-btn qs-btn-dark" href="#shop">
                  See {products.length} matching style
                  {products.length === 1 ? "" : "s"}
                </a>
              </div>
            </section>
            <main className="qs-main qs-main-split" id="shop">
              <div className="qs-shop-head">
                <div>
                  <h2>Matching styles</h2>
                  <p>Live prices · opens Quiksilver.com in a new tab</p>
                </div>
              </div>
              <div className="qs-grid qs-grid-rows">
                {products.map((p) => (
                  <ProductCard key={p.handle} p={p} variant="row" />
                ))}
              </div>
              <FitBlock mediaSrc="/landing/om-camo.jpg" />
            </main>
            <TrustBar />
          </>
        )}

        {/* ── E · Story + shop ── */}
        {layout === "e" && (
          <>
            <section className="qs-story-hero">
              <div className="qs-story-hero-media" aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/story-beach.jpg"
                  alt=""
                  fetchPriority="high"
                />
              </div>
              <div className="qs-story-hero-copy">
                <p className="qs-hero-kicker">Chapter 01 · The short</p>
                <h1>A page that reads like a session</h1>
                <p>
                  Story blocks guide the browse; product rows keep shopping close.
                  Checkout still lands on Quiksilver.com.
                </p>
              </div>
            </section>
            <TrustBar />
            <main className="qs-main qs-story" id="shop">
              <section className="qs-chapter">
                <div className="qs-chapter-copy">
                  <p className="qs-chapter-label">Chapter 02 · Choose</p>
                  <h2>Start with length and fabric</h2>
                  <p>
                    Narrow the set the way a shopper already thinks — then jump to
                    a live product page.
                  </p>
                  <Filters
                    length={length}
                    trait={trait}
                    setLength={setLength}
                    setTrait={setTrait}
                  />
                </div>
                <div className="qs-chapter-media" aria-hidden>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/landing/om-salsa.jpg" alt="" loading="lazy" />
                </div>
              </section>

              <p className="qs-count">
                Featured picks · {mid.length} of {products.length} matching
              </p>
              <div className="qs-grid qs-grid-story">
                {mid.map((p) => (
                  <ProductCard key={p.handle} p={p} variant="large" />
                ))}
              </div>

              <section className="qs-chapter qs-chapter-reverse">
                <div className="qs-chapter-copy">
                  <p className="qs-chapter-label">Chapter 03 · In the water</p>
                  <h2>Performance that still looks like Quik</h2>
                  <p>
                    Highline and Surfsilk sit next to classics — same brand voice,
                    clearer path from ad click to checkout.
                  </p>
                </div>
                <div className="qs-chapter-media" aria-hidden>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/landing/hero-lifestyle-3.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </section>

              {rest.length ? (
                <>
                  <p className="qs-count">More from the collection</p>
                  <div className="qs-grid">
                    {rest.map((p) => (
                      <ProductCard key={p.handle} p={p} />
                    ))}
                  </div>
                </>
              ) : null}

              <FitBlock mediaSrc="/landing/fit-lifestyle.jpg" />
            </main>
          </>
        )}

        {/* ── F · Length-filter first ── */}
        {layout === "f" && (
          <>
            <section className="qs-length-hero">
              <div className="qs-length-intro">
                <p className="qs-hero-kicker qs-kicker-dark">
                  Start with fit
                </p>
                <h1>What length are you shopping?</h1>
                <p>
                  Length is often the first real decision. Pick an outseam, see
                  matching live styles, then continue on Quiksilver.com.
                </p>
              </div>
              <div className="qs-length-cards">
                {LENGTH_CARDS.map((card) => (
                  <button
                    key={card.id}
                    type="button"
                    className={`qs-length-card${length === card.id ? " is-active" : ""}`}
                    onClick={() => pickLength(card.id)}
                  >
                    <span className="qs-length-card-media" aria-hidden>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={card.src} alt="" />
                    </span>
                    <span className="qs-length-card-body">
                      <strong>{card.title}</strong>
                      <span>{card.body}</span>
                      <em>Shop {card.id}</em>
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="qs-text-link"
                onClick={() => {
                  setLength("all");
                  document
                    .getElementById("shop")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Or browse all lengths
              </button>
            </section>
            <main className="qs-main" id="shop">
              <div className="qs-shop-head">
                <div>
                  <h2>
                    {length === "all"
                      ? "All boardshorts"
                      : `${length} boardshorts`}
                  </h2>
                  <p>
                    Refine by fabric if you like — prices from the live
                    storefront.
                  </p>
                </div>
              </div>
              <Filters
                length={length}
                trait={trait}
                setLength={setLength}
                setTrait={setTrait}
              />
              <p className="qs-count">
                {products.length} style{products.length === 1 ? "" : "s"} · prices
                from live storefront
              </p>
              <div className="qs-grid">
                {products.map((p) => (
                  <ProductCard key={p.handle} p={p} />
                ))}
              </div>
              <TrustBar className="qs-trust-inset" />
              <FitBlock mediaSrc="/landing/hero-product.jpg" />
            </main>
          </>
        )}

        {/* ── G · Dense PLP ── */}
        {layout === "g" && (
          <>
            <section className="qs-plp-banner">
              <div className="qs-plp-banner-media" aria-hidden>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/landing/hero-lifestyle-3.jpg"
                  alt=""
                  fetchPriority="high"
                />
              </div>
              <div className="qs-plp-banner-copy">
                <p className="qs-hero-kicker">Men&apos;s boardshorts</p>
                <h1>Shop the collection</h1>
                <p>
                  Dense catalog layout for shoppers who already know what they
                  want — filters up top, checkout on Quiksilver.com.
                </p>
              </div>
            </section>
            <div className="qs-plp-sticky" id="shop">
              <div className="qs-plp-sticky-inner">
                <p className="qs-plp-count">
                  {products.length} style{products.length === 1 ? "" : "s"}
                  {featured ? ` · from ${money(featured.price)}` : ""}
                </p>
                <Filters
                  length={length}
                  trait={trait}
                  setLength={setLength}
                  setTrait={setTrait}
                  dense
                />
              </div>
            </div>
            <main className="qs-main qs-main-plp">
              <div className="qs-grid qs-grid-plp">
                {products.map((p) => (
                  <ProductCard key={p.handle} p={p} variant="compact" />
                ))}
              </div>
              {!products.length ? (
                <p className="qs-count" style={{ marginTop: "1.5rem" }}>
                  No styles match those filters — clear a chip to widen the set.
                </p>
              ) : null}
              <FitBlock mediaSrc="/landing/fit-lifestyle.jpg" />
            </main>
            <TrustBar />
          </>
        )}
      </div>

      <Handoff />
      <ConceptBlock />

      <footer className="qs-footer">
        Quiksilver® product imagery and trademarks belong to their owners ·
        Concept for O5 Paid Search conversation ·{" "}
        <a href={QS_COLLECTION} target="_blank" rel="noopener noreferrer">
          mens-clothing-boardshorts
        </a>{" "}
        · <Link href="/feed">Back to Feed</Link>
      </footer>
    </>
  );
}
