/**
 * Shoro Ventures, brand identity & site copy
 */

export const SITE_NAME = 'Shoro Ventures';
export const SITE_SHORT_NAME = 'Shoro';
export const SITE_DESCRIPTION =
  'Shoro Ventures is a modern fashion and lifestyle brand offering stylish shoes and clothing for men who value quality, comfort and a sharp appearance.';
export const SITE_TAGLINE = 'Style That Speaks.';
export const SITE_HERO_TAGLINE = 'Dressed with intent.';
export const SITE_LOCATION_TAGLINE = "Men's Shoes & Clothing";

export const HERO_HEADLINE = 'Style That Speaks.';
export const HERO_SUBHEADLINE =
  'Quality shoes and clothing for men who show up looking sharp. Clean lines, premium comfort, a confident finish.';

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

export const LOGO_VERSION = '3';
export const LOGO_PATH = `/logo.png?v=${LOGO_VERSION}`;
export const HEADER_LOGO_PATH = `/logo-header.png?v=${LOGO_VERSION}`;
export const FOOTER_LOGO_PATH = `/logo-footer.png?v=${LOGO_VERSION}`;

export function resolveSiteLogo(cmsValue?: string | null): string {
  const v = (cmsValue ?? '').trim().toLowerCase();
  if (!v) return LOGO_PATH;
  return LOGO_PATH;
}

export const OG_IMAGE_PATH = '/og-image.png';
export const HERO_IMAGE_VERSION = '4';
export const HERO_IMAGE_PATH = `/hero.jpg?v=${HERO_IMAGE_VERSION}`;

export const HERO_SLIDES = [
  {
    src: `/hero.jpg?v=${HERO_IMAGE_VERSION}`,
    mobileSrc: `/hero-mobile.jpg?v=${HERO_IMAGE_VERSION}`,
    alt: 'Shoro Ventures slip-on shoes, shirts, denim and a watch styled on sunlit stone steps',
  },
] as const;

export const SOCIAL_INSTAGRAM = '';
export const SOCIAL_FACEBOOK = '';
export const SOCIAL_TIKTOK = '';
export const SOCIAL_SNAPCHAT = '';

export const DEFAULT_PRODUCT_BRAND = 'Shoro Ventures';
export const CATALOG_PDF_PREFIX = 'shoro-ventures-catalog';

export const SHOP_CATEGORIES = [
  { label: 'Formal Shoes', href: '/shop?category=formal-shoes' },
  { label: 'Sneakers', href: '/shop?category=sneakers' },
  { label: 'Shirts', href: '/shop?category=shirts' },
  { label: 'Trousers', href: '/shop?category=trousers' },
] as const;

export const CUSTOMER_REVIEWS = [
  {
    text: 'The leather on my Oxfords is excellent and they were comfortable from day one. Wore them to a wedding and got compliments all night.',
    rating: 5,
  },
  {
    text: 'Clean sneakers that actually go with everything. Fast delivery and the fit was exactly right.',
    rating: 5,
  },
  {
    text: 'Finally a shirt that fits properly through the shoulders. The quality feels premium for the price.',
    rating: 5,
  },
  {
    text: 'Ordered on WhatsApp, got my chinos and loafers the next day. Shoro is my go-to now.',
    rating: 5,
  },
] as const;

export const ABOUT_HEADLINE = 'Built For Men Who Mean Business';
export const ABOUT_BODY =
  'Shoro Ventures brings together stylish shoes and clothing for men who value quality, comfort and a good appearance. We pair a clean, professional look with a bold contemporary edge, so whether you are heading to the office, an event or the weekend, you walk in looking the part. Order online, on WhatsApp, or visit us in store.';

export const BRAND_COLORS = {
  navy: '#142B4A',
  gold: '#D4AF37',
  white: '#FFFFFF',
  lightGrey: '#F3F5F7',
  charcoal: '#1E1E1E',
} as const;
