/**
 * Frontend-only mock catalog, placeholder sample products.
 * Replace with live data once NEXT_PUBLIC_SUPABASE_* env vars are set.
 */

import { isSupabaseConfigured } from '@/lib/supabase';

export function isMockCatalogMode(): boolean {
  return !isSupabaseConfigured();
}

export const MOCK_SHOP_CATEGORIES = [
  {
    id: 'category-one',
    label: 'Category One',
    href: '/shop?category=category-one',
    image: '',
  },
  {
    id: 'category-two',
    label: 'Category Two',
    href: '/shop?category=category-two',
    image: '',
  },
  {
    id: 'category-three',
    label: 'Category Three',
    href: '/shop?category=category-three',
    image: '',
  },
  {
    id: 'category-four',
    label: 'Category Four',
    href: '/shop?category=category-four',
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
    id: 'cat-one',
    name: 'Category One',
    slug: 'category-one',
    description: 'A short description of your first product category.',
    image_url: '',
    parent_id: null,
    position: 1,
  },
  {
    id: 'cat-two',
    name: 'Category Two',
    slug: 'category-two',
    description: 'A short description of your second product category.',
    image_url: '',
    parent_id: null,
    position: 2,
  },
  {
    id: 'cat-three',
    name: 'Category Three',
    slug: 'category-three',
    description: 'A short description of your third product category.',
    image_url: '',
    parent_id: null,
    position: 3,
  },
  {
    id: 'cat-four',
    name: 'Category Four',
    slug: 'category-four',
    description: 'A short description of your fourth product category.',
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

const SAMPLE_DESCRIPTION =
  'This is a sample product used to preview the storefront. Replace it with your real products by connecting Supabase and adding items in the admin dashboard.';

const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: 'mock-sample-1',
    slug: 'sample-product-1',
    name: 'Sample Product 1',
    description: SAMPLE_DESCRIPTION,
    price: 150,
    compare_at_price: 180,
    category: 'Category One',
    categorySlug: 'category-one',
    image: '',
    tagline: 'Short product highlight',
    rating_avg: 4.9,
    quantity: 8,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-sample-2',
    slug: 'sample-product-2',
    name: 'Sample Product 2',
    description: SAMPLE_DESCRIPTION,
    price: 220,
    category: 'Category One',
    categorySlug: 'category-one',
    image: '',
    tagline: 'Short product highlight',
    rating_avg: 4.8,
    quantity: 6,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-sample-3',
    slug: 'sample-product-3',
    name: 'Sample Product 3',
    description: SAMPLE_DESCRIPTION,
    price: 95,
    category: 'Category Two',
    categorySlug: 'category-two',
    image: '',
    tagline: 'Short product highlight',
    rating_avg: 4.9,
    quantity: 10,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-sample-4',
    slug: 'sample-product-4',
    name: 'Sample Product 4',
    description: SAMPLE_DESCRIPTION,
    price: 130,
    compare_at_price: 160,
    category: 'Category Two',
    categorySlug: 'category-two',
    image: '',
    tagline: 'Short product highlight',
    rating_avg: 4.7,
    quantity: 7,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-sample-5',
    slug: 'sample-product-5',
    name: 'Sample Product 5',
    description: SAMPLE_DESCRIPTION,
    price: 310,
    compare_at_price: 350,
    category: 'Category Three',
    categorySlug: 'category-three',
    image: '',
    tagline: 'Short product highlight',
    rating_avg: 4.9,
    quantity: 5,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-sample-6',
    slug: 'sample-product-6',
    name: 'Sample Product 6',
    description: SAMPLE_DESCRIPTION,
    price: 275,
    category: 'Category Three',
    categorySlug: 'category-three',
    image: '',
    tagline: 'Short product highlight',
    rating_avg: 4.8,
    quantity: 4,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-sample-7',
    slug: 'sample-product-7',
    name: 'Sample Product 7',
    description: SAMPLE_DESCRIPTION,
    price: 180,
    category: 'Category Four',
    categorySlug: 'category-four',
    image: '',
    tagline: 'Short product highlight',
    rating_avg: 4.8,
    quantity: 9,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-sample-8',
    slug: 'sample-product-8',
    name: 'Sample Product 8',
    description: SAMPLE_DESCRIPTION,
    price: 240,
    compare_at_price: 280,
    category: 'Category Four',
    categorySlug: 'category-four',
    image: '',
    tagline: 'Short product highlight',
    rating_avg: 4.7,
    quantity: 8,
    moq: 1,
    featured: false,
  },
  {
    id: 'mock-sample-new',
    slug: 'sample-new-arrival',
    name: 'Sample New Arrival',
    description: SAMPLE_DESCRIPTION,
    price: 199,
    compare_at_price: 230,
    category: 'New Arrivals',
    categorySlug: 'new-arrivals',
    image: '',
    tagline: 'New drop, Limited stock',
    rating_avg: 5.0,
    quantity: 3,
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
    features: ['Quality guaranteed', 'Fast delivery', 'Order via WhatsApp'],
    featured: ['Quality guaranteed', 'Fast delivery', 'Order via WhatsApp'],
    care: 'Add care or usage instructions for this product here.',
    preorderShipping: null,
  };
}

export function getRelatedMockProducts(product: MockProduct, limit = 4) {
  return MOCK_PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit)
    .map(mockProductToCard);
}
