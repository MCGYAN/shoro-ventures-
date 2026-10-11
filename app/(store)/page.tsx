'use client';

import {
  SITE_LOCATION_TAGLINE,
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_SLIDES,
  FEATURED_BENEFITS,
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
import NewsletterSection from '@/components/NewsletterSection';
import { usePageTitle } from '@/hooks/usePageTitle';

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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[calc(4.75rem+env(safe-area-inset-top,0px)+0.75rem)] pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-16 md:pb-24 lg:pt-[calc(7.25rem+3rem)] lg:pb-28">
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
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/shop"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 min-h-[48px] bg-brand-gold text-brand-plum rounded-full font-semibold text-sm tracking-wide shadow-boutique transition-all duration-300 hover:bg-[#e0c158] active:scale-[0.98]"
              >
                Shop the collection
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 min-h-[48px] border border-brand-cream/45 text-brand-cream rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-brand-cream/10 active:scale-[0.98]"
              >
                Order on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2, TRUST STRIP (tablet & desktop only) */}
      <section className="hidden md:block py-10 md:py-14 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl glass-frosted overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-rose/30 to-transparent"
              aria-hidden
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-rose/10">
              {FEATURED_BENEFITS.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="group relative px-6 py-8 md:px-8 md:py-10 text-center"
                >
                  <span
                    className={`block font-serif text-2xl md:text-3xl tabular-nums mb-3 transition-colors duration-300 ${
                      i === 0 ? 'text-brand-rose/40 group-hover:text-brand-rose' : 'text-brand-rose/15 group-hover:text-brand-rose/35'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="block w-6 h-px bg-brand-rose/25 mx-auto mb-4 group-hover:w-10 group-hover:bg-brand-rose/50 transition-all duration-300" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-plum/45 mb-2">
                    {benefit.label}
                  </p>
                  <p className="font-serif text-base md:text-lg text-brand-plum leading-snug">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3, SHOP BY CATEGORY */}
      <section id="shop-by-category" className="py-12 sm:py-16 md:py-24 bg-brand-cream scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="boutique-section-eyebrow">Explore</span>
            <h2 className="boutique-section-title mb-3">Shop By Category</h2>
            <p className="text-brand-plum/70 max-w-xl mx-auto text-sm sm:text-base px-1">
              From polished formal shoes to everyday essentials, everything you need to look sharp.
            </p>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-6">
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
      <section id="featured-products" className="py-12 sm:py-16 md:py-24 bg-white/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="boutique-section-eyebrow">Best Sellers</span>
            <h2 className="boutique-section-title mb-3">The Essentials</h2>
            <p className="text-brand-plum/70 max-w-xl mx-auto text-sm sm:text-base">
              Our most-wanted pieces, chosen by men who know what looks good.
            </p>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6 md:gap-8">
            {MOCK_FEATURED_PRODUCTS.map((product) => (
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
          <div className="text-center mt-12">
            <Link href="/shop" className="boutique-btn-secondary">
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5, CUSTOMER REVIEWS */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="boutique-section-eyebrow">Reviews</span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-brand-plum mb-3 leading-snug px-1">
              What Our Customers Say
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CUSTOMER_REVIEWS.map((review, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 boutique-card-hover"
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

      {/* SECTION 7, NEWSLETTER */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="glass-frosted rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <NewsletterSection />
          </div>
        </div>
      </section>
    </main>
  );
}
