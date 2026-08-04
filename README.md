# O5 · Paid Search & Shopping follow-up notes

Short follow-up artifact for the **Paid Search & Shopping Specialist** conversation — how George would approach the role, the brands he'd support, and a Quiksilver landing concept.

**Not** a full ecommerce encyclopedia. **Not** an audit of their stack.

## Brand scope (working assumption)

**This role:** Quiksilver · Billabong · Eddie Bauer · Dickies  

**Other teams:** Champion · Hurley · IZOD · Lucky Brand

## How I'd approach this

Partner on Search end-to-end: accounts → feeds → Shopping → message-matched landings → clean conversion truth → **Looker-ready** reporting. After an agency handoff, tighten the operating links with the manager — respect what's already working, offer systems help where it pays off.

## Quiksilver landing concept

`/feed/landing` is a **new concept prototype**: a lightweight marketing / landing layer for paid category traffic (boardshorts). Keep PDP/cart/checkout on Shopify; stand up a focused merchandising surface when the main lifestyle homepage is too broad for Shopping/Search intent. Quik first — same pattern can apply across Billabong, Eddie Bauer, and Dickies.

Base collection: [quiksilver.com/collections/mens-clothing-boardshorts](https://www.quiksilver.com/collections/mens-clothing-boardshorts)

## Routes (keep it short)

| Route | Job |
|-------|-----|
| `/` | How I'd approach this |
| `/portfolio` | Brand scope |
| `/feed` | Search system + Feed Control Room (illustrative) |
| `/feed/landing` | Quiksilver boardshorts concept (on-brand demo) |
| `/plan` | 90-day plan |
| `/commerce` | Light storefront signals (Detail mode) |
| `/interview` | Talk track + private eval (Detail mode) |
| `/evidence` | Evidence ledger (Detail mode) |

**2-min path:** How I'd approach this → Brand scope → Quiksilver landing (`/?demo=1`).

## Illustrative data

Feed Control Room SKUs and planning figures are labeled illustrative — not O5 internal data. Landing products/prices pull from the live Quiksilver storefront for realism; the page itself is a concept prototype.

## Dev

```bash
npm run dev
```

Open `http://localhost:3000`.
