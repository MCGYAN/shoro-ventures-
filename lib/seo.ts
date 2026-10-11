import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  BUSINESS_CITY,
  BUSINESS_COUNTRY,
  OG_IMAGE_PATH,
  SITE_URL,
} from '@/lib/site-brand';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || SITE_URL;

export const SEO_KEYWORDS = [
  SITE_NAME,
  'online store',
  'shop online',
  `shop ${BUSINESS_CITY}`,
  `delivery ${BUSINESS_COUNTRY}`,
  BUSINESS_CITY,
  BUSINESS_COUNTRY,
].filter(Boolean);

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = '',
  image = OG_IMAGE_PATH,
}: SeoInput): Metadata {
  return {
    title,
    description,
    keywords: SEO_KEYWORDS.join(', '),
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${siteUrl}${path}`,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const pageSeoTemplates = {
  home: () =>
    buildPageMetadata({
      title: `${SITE_NAME} | ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
      path: '/',
    }),
  shop: () =>
    buildPageMetadata({
      title: `Shop | ${SITE_NAME}`,
      description: `Browse the full collection at ${SITE_NAME}. Order online or via WhatsApp.`,
      path: '/shop',
    }),
  categories: () =>
    buildPageMetadata({
      title: `Categories | ${SITE_NAME}`,
      description: `Shop by category at ${SITE_NAME}.`,
      path: '/categories',
    }),
  about: () =>
    buildPageMetadata({
      title: `About | ${SITE_NAME}`,
      description: `Meet ${SITE_NAME} in ${BUSINESS_CITY}. ${SITE_TAGLINE}`,
      path: '/about',
    }),
  contact: () =>
    buildPageMetadata({
      title: `Contact | ${SITE_NAME}`,
      description: `Call or WhatsApp ${SITE_NAME} to place an order, visit our store in ${BUSINESS_CITY}, or ask a question.`,
      path: '/contact',
    }),
};
