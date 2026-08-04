/** Quiksilver high-intent collection landing concept.
 * Product titles, prices, and images pulled from the live US storefront
 * (base: /collections/mens-clothing-boardshorts).
 * Not an official Quiksilver page — concept prototype for paid category message match.
 */

export type LandingProduct = {
  title: string;
  handle: string;
  price: string;
  image: string;
  url: string;
  length: string;
  stretch: boolean;
  surfsilk: boolean;
  highline: boolean;
  badge?: string;
};

export const QS_STORE = "https://www.quiksilver.com";
export const QS_COLLECTION =
  "https://www.quiksilver.com/collections/mens-clothing-boardshorts";

export const qsLandingProducts: LandingProduct[] = [
  {
    title: 'Highline Aero 19" Boardshorts - Black',
    handle: "highline-aero-19-qs000255-blk",
    price: "86.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS000255_BLK_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/highline-aero-19-qs000255-blk`,
    length: '19"',
    stretch: true,
    surfsilk: false,
    highline: true,
    badge: "Performance",
  },
  {
    title: 'Highline Aero 19" Boardshorts - Camo',
    handle: "highline-aero-19-qs000255-gra0",
    price: "86.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS000255_GRA0_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/highline-aero-19-qs000255-gra0`,
    length: '19"',
    stretch: true,
    surfsilk: false,
    highline: true,
    badge: "Performance",
  },
  {
    title: 'Surfsilk Kaimana 20" Boardshorts - Salsa',
    handle: "surfsilk-kaimana-20-qsm15bs029-ssa",
    price: "54.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QSM15BS029_SSA_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/surfsilk-kaimana-20-qsm15bs029-ssa`,
    length: '20"',
    stretch: true,
    surfsilk: true,
    highline: false,
    badge: "Surfsilk",
  },
  {
    title: 'Surfsilk Kaimana 20" Boardshorts - Black',
    handle: "surfsilk-kaimana-20-qsm15bs029-blk",
    price: "54.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QSM15BS029_BLK_OM-F_c9dba54c-040a-4c74-ab5a-eb05fee77fce.jpg?width=800",
    url: `${QS_STORE}/products/surfsilk-kaimana-20-qsm15bs029-blk`,
    length: '20"',
    stretch: true,
    surfsilk: true,
    highline: false,
    badge: "Surfsilk",
  },
  {
    title: 'Surfsilk Hawaii Blockchild 19" Boardshorts - Anthracite',
    handle: "hi-blockchild-19-qs000263y-anh",
    price: "66.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS000263Y_ANH_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/hi-blockchild-19-qs000263y-anh`,
    length: '19"',
    stretch: true,
    surfsilk: true,
    highline: false,
    badge: "Surfsilk",
  },
  {
    title: 'Nature Tile 19" Boardshorts - Peyote',
    handle: "nature-tile-19-qs000765y-pey",
    price: "66.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS000765Y_PEY_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/nature-tile-19-qs000765y-pey`,
    length: '19"',
    stretch: false,
    surfsilk: false,
    highline: false,
  },
  {
    title: 'Tijuana 19" Boardshorts - Skyway',
    handle: "tijuana-19-qs001346y-swy",
    price: "66.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS001346Y_SWY_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/tijuana-19-qs001346y-swy`,
    length: '19"',
    stretch: false,
    surfsilk: false,
    highline: false,
  },
  {
    title: 'Homeslicer 19" Boardshorts - Skyway',
    handle: "homeslicer-19-qs000776y-swy",
    price: "66.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS000776Y_SWY_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/homeslicer-19-qs000776y-swy`,
    length: '19"',
    stretch: false,
    surfsilk: false,
    highline: false,
  },
  {
    title: 'Hawaii Spearhead 20" Boardshorts - Black',
    handle: "hi-spearhead-20-qs000941y-blk",
    price: "66.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS000941Y_BLK_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/hi-spearhead-20-qs000941y-blk`,
    length: '20"',
    stretch: false,
    surfsilk: false,
    highline: false,
  },
  {
    title: 'Waterman Boca 19" Boardshorts - Blue Nights',
    handle: "boca-19wm-qs000843m-blni",
    price: "69.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS000843M_BLNI_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/boca-19wm-qs000843m-blni`,
    length: '19"',
    stretch: false,
    surfsilk: false,
    highline: false,
    badge: "Waterman",
  },
  {
    title: 'Young Guns Steelhead 21" Boardshorts - Black',
    handle: "yg-steelhead-21-qs000860y-blk",
    price: "76.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS000860Y_BLK_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/yg-steelhead-21-qs000860y-blk`,
    length: '21"',
    stretch: false,
    surfsilk: false,
    highline: false,
  },
  {
    title: 'Young Guns Intercepter 21" Boardshorts - Bright White',
    handle: "yg-intercepter-21-qs001344y-bte",
    price: "74.00",
    image:
      "https://cdn.shopify.com/s/files/1/0687/6856/3337/files/QS001344Y_BTE_OM-F.jpg?width=800",
    url: `${QS_STORE}/products/yg-intercepter-21-qs001344y-bte`,
    length: '21"',
    stretch: false,
    surfsilk: false,
    highline: false,
  },
];

export const qsFitNotes = [
  {
    title: '19"',
    body: "Core surf length — coverage without drag. Most Highline performance fits.",
  },
  {
    title: '20–21"',
    body: "Longer coverage for bigger days and Waterman / Young Guns styles.",
  },
  {
    title: "Surfsilk",
    body: "4-way stretch recycled fabric — built for movement in and out of the water.",
  },
];

export const qsTrust = [
  "Free shipping over $75",
  "Free returns within 30 days",
  "Live inventory from Quiksilver.com",
];
