/**
 * Frontend-only mock catalog, Shoro Ventures sample products.
 * Replace with live data once NEXT_PUBLIC_SUPABASE_* env vars are set.
 */

import { isSupabaseConfigured } from '@/lib/supabase';

export function isMockCatalogMode(): boolean {
  return !isSupabaseConfigured();
}

export const MOCK_SHOP_CATEGORIES = [
  {
    id: 'formal-shoes',
    label: 'Formal Shoes',
    href: '/shop?category=formal-shoes',
    image: '',
  },
  {
    id: 'sneakers',
    label: 'Sneakers',
    href: '/shop?category=sneakers',
    image: '',
  },
  {
    id: 'shirts',
    label: 'Shirts',
    href: '/shop?category=shirts',
    image: '',
  },
  {
    id: 'trousers',
    label: 'Trousers',
    href: '/shop?category=trousers',
    image: '',
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
    id: 'cat-formal',
    name: 'Formal Shoes',
    slug: 'formal-shoes',
    description: 'Oxfords, loafers and brogues in quality leather, made for the office and the occasion.',
    image_url: '',
    parent_id: null,
    position: 1,
  },
  {
    id: 'cat-sneakers',
    name: 'Sneakers',
    slug: 'sneakers',
    description: 'Clean, versatile sneakers that keep your off-duty look sharp.',
    image_url: '',
    parent_id: null,
    position: 2,
  },
  {
    id: 'cat-shirts',
    name: 'Shirts',
    slug: 'shirts',
    description: 'Well-cut shirts in breathable fabrics, from crisp formal to relaxed linen.',
    image_url: '',
    parent_id: null,
    position: 3,
  },
  {
    id: 'cat-trousers',
    name: 'Trousers',
    slug: 'trousers',
    description: 'Chinos and tailored trousers with a modern fit and all-day comfort.',
    image_url: '',
    parent_id: null,
    position: 4,
  },
  {
    id: 'cat-new',
    name: 'New Arrivals',
    slug: 'new-arrivals',
    description: 'Fresh drops just in. Grab yours before they sell out.',
    image_url: '',
    parent_id: null,
    position: 5,
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

const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: 'mock-oxford-black',
    slug: 'classic-leather-oxford-black',
    name: 'Classic Leather Oxford, Black',
    description:
      'A timeless cap-toe Oxford in polished black leather. Cushioned insole and a durable sole, sharp enough for the boardroom and comfortable enough to wear all day.',
    price: 650,
    compare_at_price: 750,
    category: 'Formal Shoes',
    categorySlug: 'formal-shoes',
    image: '',
    tagline: 'Genuine leather, Cap toe, Cushioned',
    rating_avg: 4.9,
    quantity: 10,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-loafer-brown',
    slug: 'suede-penny-loafer-brown',
    name: 'Suede Penny Loafer, Brown',
    description:
      'Soft brown suede loafers that slip on easily and dress up chinos or tailored trousers. Smart, relaxed and effortlessly confident.',
    price: 580,
    category: 'Formal Shoes',
    categorySlug: 'formal-shoes',
    image: '',
    tagline: 'Suede, Slip-on, Smart casual',
    rating_avg: 4.8,
    quantity: 8,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-sneaker-white',
    slug: 'minimal-leather-sneaker-white',
    name: 'Minimal Leather Sneaker, White',
    description:
      'Clean white leather sneakers with a low profile and padded collar. The one pair that works with jeans, chinos and smart-casual fits.',
    price: 520,
    compare_at_price: 600,
    category: 'Sneakers',
    categorySlug: 'sneakers',
    image: '',
    tagline: 'Leather, Low-top, Everyday',
    rating_avg: 4.9,
    quantity: 12,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-sneaker-navy',
    slug: 'knit-runner-navy',
    name: 'Knit Runner, Navy',
    description:
      'Lightweight breathable knit with a cushioned sole. Built for comfort on busy days without giving up a clean look.',
    price: 450,
    category: 'Sneakers',
    categorySlug: 'sneakers',
    image: '',
    tagline: 'Breathable knit, Lightweight',
    rating_avg: 4.7,
    quantity: 9,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-shirt-oxford',
    slug: 'slim-fit-oxford-shirt-white',
    name: 'Slim Fit Oxford Shirt, White',
    description:
      'A crisp white cotton Oxford shirt with a modern slim fit. Tuck it in for the office or wear it open over a tee on the weekend.',
    price: 280,
    category: 'Shirts',
    categorySlug: 'shirts',
    image: '',
    tagline: '100% cotton, Slim fit',
    rating_avg: 4.8,
    quantity: 15,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-shirt-linen',
    slug: 'linen-short-sleeve-shirt-navy',
    name: 'Linen Short Sleeve Shirt, Navy',
    description:
      'Breathable navy linen with a relaxed cut, made for warm days when you still want to look put together.',
    price: 260,
    compare_at_price: 300,
    category: 'Shirts',
    categorySlug: 'shirts',
    image: '',
    tagline: 'Linen, Relaxed fit, Breathable',
    rating_avg: 4.7,
    quantity: 11,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-chino-khaki',
    slug: 'stretch-chino-khaki',
    name: 'Stretch Chino, Khaki',
    description:
      'Tapered chinos in soft stretch cotton. A versatile staple that pairs with sneakers, loafers or Oxfords.',
    price: 320,
    category: 'Trousers',
    categorySlug: 'trousers',
    image: '',
    tagline: 'Stretch cotton, Tapered',
    rating_avg: 4.8,
    quantity: 14,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-trouser-charcoal',
    slug: 'tailored-trouser-charcoal',
    name: 'Tailored Trouser, Charcoal',
    description:
      'Sharp charcoal trousers with a clean crease and a modern slim leg. Polished enough for formal events, comfortable enough for long days.',
    price: 380,
    compare_at_price: 440,
    category: 'Trousers',
    categorySlug: 'trousers',
    image: '',
    tagline: 'Tailored, Slim leg, Formal',
    rating_avg: 4.7,
    quantity: 7,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-chelsea-new',
    slug: 'leather-chelsea-boot-new-arrival',
    name: 'Leather Chelsea Boot (New Arrival)',
    description:
      'Just landed, a sleek dark-brown leather Chelsea boot with elastic side panels. Limited stock, once it is gone, it is gone.',
    price: 780,
    compare_at_price: 880,
    category: 'New Arrivals',
    categorySlug: 'new-arrivals',
    image: '',
    tagline: 'New drop, Leather, Limited',
    rating_avg: 5.0,
    quantity: 4,
    moq: 1,
    featured: true,
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
