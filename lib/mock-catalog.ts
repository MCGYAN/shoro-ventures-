/**
 * Frontend-only mock catalog, Shoro Ventures products.
 * Replace with live data once NEXT_PUBLIC_SUPABASE_* env vars are set.
 */

import { isSupabaseConfigured } from '@/lib/supabase';

export function isMockCatalogMode(): boolean {
  return !isSupabaseConfigured();
}

export const MOCK_SHOP_CATEGORIES = [
  {
    id: 'slip-ons',
    label: 'Slip-Ons',
    href: '/shop?category=slip-ons',
    image: '/products/two-tone-slip-on-slate.jpg',
  },
  {
    id: 'loafers',
    label: 'Loafers',
    href: '/shop?category=loafers',
    image: '/products/moc-toe-loafer-tan.jpg',
  },
  {
    id: 'knit-shoes',
    label: 'Knit Shoes',
    href: '/shop?category=knit-shoes',
    image: '/products/knit-slip-on-beige.jpg',
  },
  {
    id: 'clothing',
    label: 'Clothing',
    href: '/shop?category=clothing',
    image: '/products/linen-sleeveless-two-piece.jpg',
  },
] as const;

export type MockCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  parent_id: string | null;
  position: number;
};

export const MOCK_CATEGORIES: MockCategory[] = [
  {
    id: 'cat-slip-ons',
    name: 'Slip-Ons',
    slug: 'slip-ons',
    description: 'Easy on, sharp all day. Stitched and two-tone slip-ons with cushioned soles.',
    image_url: '/products/two-tone-slip-on-slate.jpg',
    parent_id: null,
    position: 1,
  },
  {
    id: 'cat-loafers',
    name: 'Loafers',
    slug: 'loafers',
    description: 'Casual and moc-toe loafers in rich, versatile tones that go from office to weekend.',
    image_url: '/products/moc-toe-loafer-tan.jpg',
    parent_id: null,
    position: 2,
  },
  {
    id: 'cat-knit',
    name: 'Knit Shoes',
    slug: 'knit-shoes',
    description: 'Lightweight, breathable knit shoes built for comfort without losing the clean look.',
    image_url: '/products/knit-slip-on-beige.jpg',
    parent_id: null,
    position: 3,
  },
  {
    id: 'cat-clothing',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Polished, easy-to-wear pieces that complete the look.',
    image_url: '/products/linen-sleeveless-two-piece.jpg',
    parent_id: null,
    position: 4,
  },
];

export type MockProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compare_at_price?: number;
  category: string;
  categorySlug: string;
  image: string;
  images?: string[];
  tagline?: string;
  rating_avg: number;
  quantity: number;
  moq: number;
  featured?: boolean;
};

const img = (slug: string) => `/products/${slug}.jpg`;

const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: 'stitched-slip-on-black-grey',
    slug: 'stitched-slip-on-black-grey',
    name: 'Stitched Slip-On, Black & Grey',
    description:
      'Black suede-look upper with grey toe and collar panels, finished with bold hand-style stitching. Elastic side gussets, cushioned insole and a clean white sole for an easy, confident everyday look.',
    price: 380,
    compare_at_price: 450,
    category: 'Slip-Ons',
    categorySlug: 'slip-ons',
    image: img('stitched-slip-on-black-grey'),
    tagline: 'Two-tone, Hand-stitch detail, White sole',
    rating_avg: 4.9,
    quantity: 10,
    moq: 1,
    featured: true,
  },
  {
    id: 'knit-slip-on-beige',
    slug: 'knit-slip-on-beige',
    name: 'Knit Slip-On, Beige',
    description:
      'A breathable sock-fit knit upper with ribbed detailing and a pull tab for quick wear. Light on your feet and easy to pair with chinos, joggers or denim.',
    price: 320,
    category: 'Knit Shoes',
    categorySlug: 'knit-shoes',
    image: img('knit-slip-on-beige'),
    tagline: 'Breathable knit, Sock fit, Lightweight',
    rating_avg: 4.8,
    quantity: 12,
    moq: 1,
    featured: true,
  },
  {
    id: 'two-tone-slip-on-brown',
    slug: 'two-tone-slip-on-brown',
    name: 'Two-Tone Slip-On, Brown',
    description:
      'Warm brown upper with darker leather-look toe and collar panels and contrast stitching. A smart-casual slip-on that dresses up jeans and chinos effortlessly.',
    price: 380,
    category: 'Slip-Ons',
    categorySlug: 'slip-ons',
    image: img('two-tone-slip-on-brown'),
    tagline: 'Two-tone, Smart casual, Cushioned',
    rating_avg: 4.8,
    quantity: 8,
    moq: 1,
    featured: true,
  },
  {
    id: 'casual-loafer-olive',
    slug: 'casual-loafer-olive',
    name: 'Casual Loafer, Olive',
    description:
      'Olive suede-look loafer with tonal stitching, a padded mustard-lined collar and a chunky brown sole. Relaxed, rugged and comfortable all day.',
    price: 420,
    compare_at_price: 480,
    category: 'Loafers',
    categorySlug: 'loafers',
    image: img('casual-loafer-olive'),
    images: [img('casual-loafer-olive'), img('casual-loafer-olive-2')],
    tagline: 'Suede look, Padded collar, Chunky sole',
    rating_avg: 4.9,
    quantity: 6,
    moq: 1,
    featured: true,
  },
  {
    id: 'two-tone-slip-on-slate',
    slug: 'two-tone-slip-on-slate',
    name: 'Two-Tone Slip-On, Slate Blue',
    description:
      'Slate blue upper with black leather-look panels and stitched detailing on a cream sole. A standout colour that still keeps things clean.',
    price: 380,
    category: 'Slip-Ons',
    categorySlug: 'slip-ons',
    image: img('two-tone-slip-on-slate'),
    tagline: 'Two-tone, Slate blue, Cream sole',
    rating_avg: 4.7,
    quantity: 7,
    moq: 1,
  },
  {
    id: 'stitched-slip-on-black',
    slug: 'stitched-slip-on-black',
    name: 'Stitched Slip-On, Black',
    description:
      'All-black suede-look upper with tonal hand-style stitching and a crisp white sole. Minimal, versatile and easy to style.',
    price: 360,
    category: 'Slip-Ons',
    categorySlug: 'slip-ons',
    image: img('stitched-slip-on-black'),
    tagline: 'All black, Stitch detail, White sole',
    rating_avg: 4.8,
    quantity: 9,
    moq: 1,
  },
  {
    id: 'perforated-slip-on-taupe',
    slug: 'perforated-slip-on-taupe',
    name: 'Perforated Slip-On, Taupe',
    description:
      'Taupe suede-look upper with a perforated check pattern for airflow, on a raised cream sole. Clean, breathable and made for warm days.',
    price: 350,
    category: 'Slip-Ons',
    categorySlug: 'slip-ons',
    image: img('perforated-slip-on-taupe'),
    tagline: 'Perforated, Breathable, Platform sole',
    rating_avg: 4.7,
    quantity: 8,
    moq: 1,
  },
  {
    id: 'moc-toe-loafer-tan',
    slug: 'moc-toe-loafer-tan',
    name: 'Moc-Toe Loafer, Tan',
    description:
      'Tan nubuck-look loafer with moc-toe stitching and a tan leather-look heel trim. Classic shape, everyday comfort.',
    price: 450,
    category: 'Loafers',
    categorySlug: 'loafers',
    image: img('moc-toe-loafer-tan'),
    tagline: 'Moc toe, Nubuck look, Classic',
    rating_avg: 4.8,
    quantity: 6,
    moq: 1,
  },
  {
    id: 'moc-toe-loafer-grey',
    slug: 'moc-toe-loafer-grey',
    name: 'Moc-Toe Loafer, Grey',
    description:
      'Charcoal grey moc-toe loafer with tonal stitching and a tan heel trim. Understated and easy to wear with almost anything.',
    price: 450,
    category: 'Loafers',
    categorySlug: 'loafers',
    image: img('moc-toe-loafer-grey'),
    tagline: 'Moc toe, Charcoal, Tan trim',
    rating_avg: 4.7,
    quantity: 5,
    moq: 1,
  },
  {
    id: 'casual-loafer-tan',
    slug: 'casual-loafer-tan',
    name: 'Casual Loafer, Tan',
    description:
      'Tan suede-look loafer with a padded mustard-lined collar, tonal stitching and a gum-style sole.',
    price: 420,
    category: 'Loafers',
    categorySlug: 'loafers',
    image: img('casual-loafer-tan'),
    tagline: 'Suede look, Padded collar, Gum sole',
    rating_avg: 4.8,
    quantity: 7,
    moq: 1,
  },
  {
    id: 'casual-loafer-grey',
    slug: 'casual-loafer-grey',
    name: 'Casual Loafer, Grey',
    description:
      'Cool grey suede-look loafer with a padded collar and contrast stitching. A neutral pair that works every day.',
    price: 420,
    category: 'Loafers',
    categorySlug: 'loafers',
    image: img('casual-loafer-grey'),
    tagline: 'Suede look, Neutral grey, Padded collar',
    rating_avg: 4.7,
    quantity: 6,
    moq: 1,
  },
  {
    id: 'denim-maxi-shirt-dress',
    slug: 'denim-maxi-shirt-dress',
    name: 'Denim Maxi Shirt Dress',
    description:
      'Full-length button-through denim dress with chest pockets, side pockets and a raw frayed hem. Fitted through the waist with a relaxed flare.',
    price: 450,
    category: 'Clothing',
    categorySlug: 'clothing',
    image: img('denim-maxi-shirt-dress'),
    tagline: 'Denim, Button-through, Maxi length',
    rating_avg: 4.8,
    quantity: 5,
    moq: 1,
  },
  {
    id: 'linen-sleeveless-two-piece',
    slug: 'linen-sleeveless-two-piece',
    name: 'Linen Sleeveless Two-Piece',
    description:
      'Sleeveless linen-look shirt with patch pockets and matching wide-leg trousers in a soft sand tone. Effortless and breathable.',
    price: 400,
    category: 'Clothing',
    categorySlug: 'clothing',
    image: img('linen-sleeveless-two-piece'),
    tagline: 'Linen look, Two-piece, Wide leg',
    rating_avg: 4.8,
    quantity: 6,
    moq: 1,
  },
  {
    id: 'print-shirt-wide-leg-set',
    slug: 'print-shirt-wide-leg-set',
    name: 'Print Shirt & Wide-Leg Trouser Set',
    description:
      'Textured wine-and-cream print shirt with three-quarter sleeves, paired with wine wide-leg trousers.',
    price: 420,
    category: 'Clothing',
    categorySlug: 'clothing',
    image: img('print-shirt-wide-leg-set'),
    tagline: 'Print shirt, Wide leg, Two-piece',
    rating_avg: 4.7,
    quantity: 5,
    moq: 1,
  },
];

export const MOCK_FEATURED_PRODUCTS = MOCK_PRODUCTS.filter((p) => p.featured).map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  category: p.category,
  price: p.price,
  originalPrice: p.compare_at_price,
  image: p.image,
  tagline: p.tagline,
}));

export function getMockCategories(): MockCategory[] {
  return MOCK_CATEGORIES;
}

export function getMockProductBySlug(slug: string): MockProduct | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
}

export type MockShopFilters = {
  search?: string | null;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  minRating?: number;
  sortBy?: string;
  page?: number;
  perPage?: number;
};

export function filterMockProducts(filters: MockShopFilters = {}) {
  const {
    search,
    category = 'all',
    priceMin = 0,
    priceMax = 5000,
    minRating = 0,
    sortBy = 'popular',
    page = 1,
    perPage = 9,
  } = filters;

  let results = [...MOCK_PRODUCTS];

  if (search?.trim()) {
    const q = search.trim().toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tagline?.toLowerCase().includes(q) ?? false)
    );
  }

  if (category !== 'all') {
    if (category === 'new-arrivals') {
      results = results.filter((p) => p.categorySlug === 'new-arrivals');
    } else {
      results = results.filter((p) => p.categorySlug === category);
    }
  } else if (sortBy === 'new' || sortBy === 'newest') {
    results = results.filter((p) => p.categorySlug === 'new-arrivals' || p.featured);
  }

  if (priceMax < 5000) {
    results = results.filter((p) => p.price >= priceMin && p.price <= priceMax);
  }

  if (minRating > 0) {
    results = results.filter((p) => p.rating_avg >= minRating);
  }

  switch (sortBy) {
    case 'price-low':
      results.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      results.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      results.sort((a, b) => b.rating_avg - a.rating_avg);
      break;
    case 'new':
    case 'newest':
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
    default:
      results.sort((a, b) => b.rating_avg - a.rating_avg);
      break;
  }

  const total = results.length;
  const from = (page - 1) * perPage;
  const pageItems = results.slice(from, from + perPage);

  return { products: pageItems, total, totalPages: Math.ceil(total / perPage) || 1 };
}

export function mockProductToCard(product: MockProduct) {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    price: product.price,
    originalPrice: product.compare_at_price,
    image: product.image,
    rating: product.rating_avg,
    reviewCount: 0,
    badge: product.compare_at_price && product.compare_at_price > product.price ? 'Sale' : undefined,
    inStock: product.quantity > 0,
    maxStock: product.quantity,
    moq: product.moq,
    category: product.category,
    hasVariants: false,
    minVariantPrice: undefined,
    colorVariants: [] as { name: string; hex: string }[],
  };
}

export function mockProductToDetail(product: MockProduct) {
  const images = (product.images?.length ? product.images : [product.image]).filter((src) =>
    Boolean(src?.trim())
  );
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description,
    price: product.price,
    compare_at_price: product.compare_at_price,
    images,
    category: product.category,
    rating: product.rating_avg,
    rating_avg: product.rating_avg,
    reviewCount: 0,
    stockCount: product.quantity,
    quantity: product.quantity,
    moq: product.moq,
    colors: [] as string[],
    colorHexMap: {} as Record<string, string>,
    variants: [] as unknown[],
    sizes: [] as string[],
    features: ['Premium quality', 'All-day comfort', 'Order via WhatsApp'],
    featured: ['Premium quality', 'All-day comfort', 'Order via WhatsApp'],
    care: 'Follow the care label. Clean leather and suede with a soft brush and store shoes with shoe trees to keep their shape.',
    preorderShipping: null,
  };
}

export function getRelatedMockProducts(product: MockProduct, limit = 4) {
  return MOCK_PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit)
    .map(mockProductToCard);
}
