/**
 * Brand identity & site copy — replace every YOUR_* placeholder (see CUSTOMIZE.md)
 */

export const SITE_NAME = 'YOUR_STORE_NAME';
export const SITE_SHORT_NAME = 'YOUR_SHORT_NAME';
export const SITE_DESCRIPTION =
  'YOUR_STORE_DESCRIPTION — one or two sentences describing what you sell and who it is for.';
export const SITE_TAGLINE = 'Your tagline goes here.';
export const SITE_HERO_TAGLINE = 'Your hero tagline.';
export const SITE_LOCATION_TAGLINE = 'YOUR_CITY';

export const HERO_HEADLINE = 'Your headline goes here.';
export const HERO_SUBHEADLINE =
  'A short line about your products and how customers can order, online, on WhatsApp or in store.';

export const SITE_URL = 'https://yourdomain.com';
export const CONTACT_EMAIL = 'hello@yourdomain.com';
export const CONTACT_PHONE = '0000000000';
export const CONTACT_PHONE_DISPLAY = '000 000 0000';
export const CONTACT_PHONE_SECONDARY = '';
export const CONTACT_PHONE_SECONDARY_DISPLAY = '';
export const WHATSAPP_URL = 'https://wa.me/000000000000';
export const BUSINESS_ADDRESS = 'YOUR_STREET_ADDRESS, YOUR_CITY';
export const BUSINESS_CITY = 'YOUR_CITY';
export const BUSINESS_COUNTRY = 'Ghana';

export const LOGO_VERSION = '1';
export const LOGO_PATH = `/logo.png?v=${LOGO_VERSION}`;
export const HEADER_LOGO_PATH = `/logo-header.png?v=${LOGO_VERSION}`;
export const FOOTER_LOGO_PATH = `/logo-footer.png?v=${LOGO_VERSION}`;

export function resolveSiteLogo(cmsValue?: string | null): string {
  const v = (cmsValue ?? '').trim().toLowerCase();
  if (!v) return LOGO_PATH;
  return LOGO_PATH;
}

export const OG_IMAGE_PATH = '/og-image.png';
export const HERO_IMAGE_VERSION = '1';
export const HERO_IMAGE_PATH = `/hero.jpg?v=${HERO_IMAGE_VERSION}`;

export const HERO_SLIDES = [
  {
    src: `/hero.jpg?v=${HERO_IMAGE_VERSION}`,
    alt: 'YOUR_HERO_IMAGE_DESCRIPTION',
  },
] as const;

export const SOCIAL_INSTAGRAM = '';
export const SOCIAL_FACEBOOK = '';
export const SOCIAL_TIKTOK = '';
export const SOCIAL_SNAPCHAT = '';

export const DEFAULT_PRODUCT_BRAND = 'YOUR_STORE_NAME';
export const CATALOG_PDF_PREFIX = 'store-catalog';

export const FEATURED_BENEFITS = [
  { label: 'Quality', title: 'Products You Can Trust' },
  { label: 'Fast', title: 'Quick, Reliable Delivery' },
  { label: 'Local', title: 'Easy In-Store Pickup' },
  { label: 'Support', title: 'WhatsApp When You Need Us' },
] as const;

export const SHOP_CATEGORIES = [
  { label: 'Category One', href: '/shop?category=category-one' },
  { label: 'Category Two', href: '/shop?category=category-two' },
  { label: 'Category Three', href: '/shop?category=category-three' },
  { label: 'Category Four', href: '/shop?category=category-four' },
] as const;

export const CUSTOMER_REVIEWS = [
  {
    text: 'Replace this with a real customer review. Short, specific quotes work best.',
    rating: 5,
  },
  {
    text: 'Another customer review about product quality or the buying experience.',
    rating: 5,
  },
  {
    text: 'A review that mentions delivery speed, pickup, or customer service.',
    rating: 5,
  },
  {
    text: 'A review from a repeat customer explaining why they keep coming back.',
    rating: 5,
  },
] as const;

export const ABOUT_HEADLINE = 'About Our Store';
export const ABOUT_BODY =
  'YOUR_ABOUT_TEXT — tell customers who you are, what you sell, where you are based and why they should shop with you. Order online, on WhatsApp, or visit us in store.';

export const BRAND_COLORS = {
  plum: '#4A183D',
  gold: '#D8B06A',
  ivory: '#FFF8F2',
  charcoal: '#1E1E1E',
  blush: '#E8C7CF',
  white: '#FFFFFF',
} as const;
