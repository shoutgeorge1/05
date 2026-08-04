# Pre-revision audit — O5 Portfolio Commerce X-ray

**Date:** 2026-08-01  
**Repo:** `~/Developer/05` (github.com/shoutgeorge1/05)  
**Baseline QA:** 18 tests pass · lint clean · typecheck clean · prior production build succeeded  
**Dev server:** running at http://localhost:3000 during audit

## Pre-revision route inventory (20 pages)

| Route | Unique useful material? | Problem |
|-------|-------------------------|---------|
| `/` Command Center | Yes — executive read, counters | Too many cards; could imply conglomerate sprawl |
| `/company` | Partial — entity/history | Overlaps Command Center |
| `/portfolio` | Yes — brand relationship map | Strong; keep & expand |
| `/properties` | Yes — domain inventory | Duplicate framing vs portfolio |
| `/commerce` | Yes — stack matrix | Tool-logo heavy |
| `/performance` | Weak | Speculative “may feel slow” without measured CWV |
| `/seo` | Weak/generic | Platform dogma risk |
| `/paid-media` | Yes — 3 scenarios | Orphaned from feeds |
| `/measurement` | Yes — confidence map | Should live inside systems |
| `/feed-lab` | Yes — strongest operator content | Separate from paid media |
| `/opportunities` | Partial | Numeric scores feel precise (87-style risk) |
| `/plan` | Yes — 7/30/90 | Split from opportunities |
| `/prototypes` + 3 | Yes — Feed Control best | Top-level prototype theater |
| `/interview` | Yes | Separate from private eval |
| `/private-notes` | Yes | Should nest under interview |
| `/evidence` | Yes | Keep |
| `/methodology` | Partial | Belongs under Evidence/footer |

## Duplication & editorial risks

1. **Route sprawl (17 nav items)** — followed the original spec literally; hard to demo in 2 minutes.
2. **“O5 brand” shorthand risk** — some copy could be read as ownership.
3. **Eddie Bauer role relevance overstated** — DTC under Outdoor 5 is confirmed; **job ownership of EB paid search is not**. Must downgrade role relevance to unresolved.
4. **Performance claims** — Liberated theme + scripts framed as LCP risk without measured scores → must soften to “potential risk / measurement required.”
5. **Opportunity scores** — transparent formula but presents as hard ranking; simplify to qualitative + optional directional sort.
6. **Shopping Command prototype** — useful illustrative operator view but competes with Feed Control as the interview demo.
7. **Repeated definitions** of license≠DTC across too many pages without a guided path.

## Strongest assets to preserve

- Evidence ledger with classifications and source URLs
- Quiksilver / Billabong / Outdoor 5 legal + Shopify shop-handle confirmations
- Liberated platform HTML observation (`liberated-platform-version`)
- Deck Commerce PR for Eddie Bauer OMS
- Job listing capture (Costa Mesa, $70–75k, Sr. Manager Perf Marketing)
- Feed Lab schema + Feed Control Room filters
- Three campaign architecture scenarios
- Interview talk tracks and go/no-go framework
- Design tokens (graphite shell / warm content / Plex)

## Claims to re-verify or downgrade in revision

| Claim | Action |
|-------|--------|
| Eddie Bauer “high-priority” for the seat | Downgrade: DTC confirmed; **role relevance unresolved** |
| Sites “feel slow” / theme weight causation | Downgrade: potential risk only; no PSI preserved |
| “Fragmentation” as fact | Keep as hypothesis / inheritance signal |
| Ads/Merchant Centers “inherited” | Unknown — do not assert account transfer |
| Numeric opportunity scores as precision | Soften to qualitative ratings |

## Target IA (post-revision)

1. Executive X-ray `/`
2. Portfolio & Properties `/portfolio`
3. Commerce Systems `/commerce`
4. Feed & Paid Media `/feed` (+ landing demo)
5. Action Plan `/plan`
6. Interview Room `/interview`
7. Evidence `/evidence`

Retired routes redirect. Interview Demo Path: Executive → Portfolio → Feed Control Room.
