'use client';

import {
  SITE_LOCATION_TAGLINE,
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_SLIDES,
  CUSTOMER_REVIEWS,
  ABOUT_HEADLINE,
  ABOUT_BODY,
  WHATSAPP_URL,
} from '@/lib/site-brand';
import { MOCK_SHOP_CATEGORIES, MOCK_FEATURED_PRODUCTS } from '@/lib/mock-catalog';
import Link from 'next/link';
import MockCategoryCard from '@/components/MockCategoryCard';
import MockProductCard from '@/components/MockProductCard';
import AnimatedSection, { AnimatedGrid } from '@/components/AnimatedSection';
import { usePageTitle } from '@/hooks/usePageTitle';

function MobileSectionHeader({ eyebrow, title, href }: { eyebrow: string; title: string; href?: string }) {
  return (
    <div className="lg:hidden flex items-end justify-between gap-4 mb-4">
      <div>
        <span className="block text-[10px] font-semibold tracking-[0.26em] uppercase text-brand-gold mb-1">{eyebrow}</span>
        <h2 className="font-serif text-[1.6rem] leading-none text-brand-plum">{title}</h2>
      </div>
      {href && (
        <Link
          href={href}
          className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-brand-plum/70 active:text-brand-plum"
        >
          See all <i className="ri-arrow-right-s-line text-base" />
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  usePageTitle('');

  return (
    <main className="min-h-screen bg-brand-cream">
      {/* SECTION 1 HERO, full-bleed photo */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden -mt-[calc(4.75rem+env(safe-area-inset-top,0px))] lg:-mt-[7.25rem] lg:items-center">
        <picture>
          <source media="(max-width: 767px)" srcSet={HERO_SLIDES[0].mobileSrc} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_SLIDES[0].src}
            alt={HERO_SLIDES[0].alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </picture>
        <div
          className="absolute inset-0 bg-[rgba(20,43,74,0.18)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[rgba(20,43,74,0.55)] via-[rgba(20,43,74,0.2)] to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 lg:hidden bg-gradient-to-t from-[rgba(20,43,74,0.85)] via-[rgba(20,43,74,0.3)] to-transparent"
          aria-hidden
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[calc(4.75rem+env(safe-area-inset-top,0px)+0.75rem)] pb-[calc(7rem+env(safe-area-inset-bottom,0px))] sm:pb-16 md:pb-24 lg:pt-[calc(7.25rem+3rem)] lg:pb-28">
          <AnimatedSection className="max-w-xl text-left">
            <p className="text-[10px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-gold mb-3 sm:mb-5">
              {SITE_LOCATION_TAGLINE}
            </p>
            <h1 className="font-serif text-[2.15rem] leading-[1.08] sm:text-5xl md:text-6xl text-brand-cream mb-4 sm:mb-5">
              {HERO_HEADLINE}
            </h1>
            <p className="text-brand-cream/90 text-[0.95rem] sm:text-base md:text-lg max-w-md mb-7 sm:mb-9 leading-relaxed font-light">
              {HERO_SUBHEADLINE}
            </p>
            <div className="flex gap-2.5 sm:gap-4">
              <Link
                href="/shop"
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 px-5 sm:px-8 py-3.5 min-h-[50px] bg-brand-gold text-brand-plum rounded-full font-semibold text-sm tracking-wide shadow-boutique transition-all duration-300 hover:bg-[#e0c158] active:scale-[0.97]"
              >
                Shop now <i className="ri-arrow-right-line" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 px-5 sm:px-8 py-3.5 min-h-[50px] bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white/20 active:scale-[0.97]"
              >
                <i className="ri-whatsapp-line text-base" /> WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3, SHOP BY CATEGORY */}
      <section id="shop-by-category" className="pt-9 pb-8 sm:py-16 md:py-24 bg-brand-cream scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MobileSectionHeader eyebrow="Explore" title="Categories" href="/categories" />
          <AnimatedSection className="hidden lg:block text-center mb-16">
            <span className="boutique-section-eyebrow">Explore</span>
            <h2 className="boutique-section-title mb-3">Shop By Category</h2>
            <p className="text-brand-plum/70 max-w-xl mx-auto text-base">
              Slip-ons, loafers, knit shoes and clothing, everything you need to look sharp.
            </p>
          </AnimatedSection>
          <AnimatedGrid
            className="mobile-rail lg:grid lg:grid-cols-4 lg:gap-6"
            itemClassName="w-[40vw] max-w-[210px] lg:w-auto lg:max-w-none"
          >
            {MOCK_SHOP_CATEGORIES.map((cat, i) => (
              <MockCategoryCard
                key={cat.id}
                label={cat.label}
                href={cat.href}
                image={cat.image}
                index={i}
              />
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* SECTION 4, FEATURED PRODUCTS */}
      <section id="featured-products" className="pt-6 pb-10 sm:py-16 md:py-24 bg-brand-cream lg:bg-white/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MobileSectionHeader eyebrow="Best Sellers" title="The Essentials" href="/shop" />
          <AnimatedSection className="hidden lg:block text-center mb-16">
            <span className="boutique-section-eyebrow">Best Sellers</span>
            <h2 className="boutique-section-title mb-3">The Essentials</h2>
            <p className="text-brand-plum/70 max-w-xl mx-auto text-base">
              Our most-wanted pieces, chosen by men who know what looks good.
            </p>
          </AnimatedSection>
          <AnimatedGrid
            className="mobile-rail lg:grid lg:grid-cols-4 lg:gap-8"
            itemClassName="w-[58vw] max-w-[260px] lg:w-auto lg:max-w-none"
          >
            {MOCK_FEATURED_PRODUCTS.slice(0, 4).map((product) => (
              <MockProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                category={product.category}
                price={product.price}
                originalPrice={'originalPrice' in product ? product.originalPrice : undefined}
                image={product.image}
                tagline={product.tagline}
              />
            ))}
          </AnimatedGrid>
          <div className="hidden lg:block text-center mt-12">
            <Link href="/shop" className="boutique-btn-secondary">
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5, CUSTOMER REVIEWS */}
      <section className="py-10 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MobileSectionHeader eyebrow="Reviews" title="What Customers Say" />
          <AnimatedSection className="hidden lg:block text-center mb-16">
            <span className="boutique-section-eyebrow">Reviews</span>
            <h2 className="font-serif text-5xl text-brand-plum mb-3 leading-snug">
              What Our Customers Say
            </h2>
          </AnimatedSection>
          <div className="mobile-rail lg:grid lg:grid-cols-4 lg:gap-6">
            {CUSTOMER_REVIEWS.map((review, i) => (
              <div
                key={i}
                className="w-[78vw] max-w-[320px] lg:w-auto lg:max-w-none rounded-[1.25rem] bg-brand-cream lg:bg-transparent p-5 lg:glass-card lg:rounded-2xl lg:p-8 boutique-card-hover"
              >
                <div className="flex gap-0.5 text-brand-plum/30 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <i key={j} className="ri-star-fill text-sm text-brand-rose/70" />
                  ))}
                </div>
                <p className="text-brand-plum/90 text-sm md:text-base leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6, ABOUT */}
      <section className="py-12 sm:py-16 md:py-24 bg-brand-latte/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-brand-plum mb-4 sm:mb-6 leading-snug">{ABOUT_HEADLINE}</h2>
            <p className="text-brand-plum/80 text-base sm:text-lg leading-relaxed">{ABOUT_BODY}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-brand-plum font-semibold hover:text-brand-rose transition-colors"
            >
              Learn more <i className="ri-arrow-right-line" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
