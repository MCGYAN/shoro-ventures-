'use client';

import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  LOGO_PATH,
  BUSINESS_ADDRESS,
  BUSINESS_CITY,
  BUSINESS_COUNTRY,
  ABOUT_BODY,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/site-brand';
import Link from 'next/link';
import { useCMS } from '@/context/CMSContext';
import PageHero from '@/components/PageHero';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function AboutPage() {
  usePageTitle('Our Story');
  const { getSetting } = useCMS();

  const siteName = getSetting('site_name') || SITE_NAME;

  const values = [
    {
      icon: 'ri-award-line',
      title: 'Uncompromising Quality',
      description:
        'Quality leather, well-cut fabrics and solid construction, chosen to look sharp and last.',
    },
    {
      icon: 'ri-checkbox-circle-line',
      title: 'Comfort That Lasts',
      description:
        'Shoes and clothing designed to feel as good at the end of the day as they do first thing in the morning.',
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'Easy Ordering',
      description:
        `Call ${CONTACT_PHONE_DISPLAY} or message us on WhatsApp. We guide you from first question to delivery with zero stress.`,
    },
    {
      icon: 'ri-truck-line',
      title: 'Delivery & Pickup',
      description: `Pickup from our store in ${BUSINESS_CITY}, or delivery across ${BUSINESS_COUNTRY}.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Our Story"
        title={`About ${SITE_NAME}`}
        subtitle={SITE_DESCRIPTION}
      />

      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>{ABOUT_BODY}</p>
                <p>
                  We believe a man&apos;s appearance speaks before he does. That is why every pair of shoes and every piece of clothing we offer is chosen for a clean, timeless look and the comfort to carry it with confidence.
                </p>
                <div className="pt-4">
                  <Link
                    href="#our-story"
                    className="inline-flex items-center text-pink-700 font-medium hover:text-pink-800 transition-colors group"
                  >
                    <span className="border-b border-transparent group-hover:border-pink-800 transition-colors">Read Our Story</span>
                    <i className="ri-arrow-right-line ml-2 transition-transform group-hover:translate-x-1"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative bg-brand-cream flex items-center justify-center p-6 sm:p-10">
                <img
                  src={LOGO_PATH}
                  alt={siteName}
                  className="w-full h-full max-h-[320px] object-contain"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 sm:right-auto sm:-left-6 bg-white p-5 sm:p-6 rounded-xl shadow-xl border border-gray-100 z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                    <i className="ri-store-2-line text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{SITE_TAGLINE}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{BUSINESS_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="inline-block text-pink-600 text-xs tracking-[0.24em] uppercase font-bold mb-3">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">What We Offer</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-pink-50 p-10 rounded-3xl border border-pink-100">
            <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              <i className="ri-shopping-bag-3-line text-3xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Shoes &amp; Clothing</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Formal shoes, sneakers, shirts and trousers for men, from boardroom-ready Oxfords to clean weekend essentials. Premium, versatile and built to last.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              <i className="ri-customer-service-2-line text-3xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Order Your Way</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              WhatsApp us, call {CONTACT_PHONE_DISPLAY}, or visit our store in {BUSINESS_CITY}. We make ordering simple.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Customers Choose {siteName}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Premium quality, clean design and comfort you can feel. Style that speaks.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                  <i className={`${value.icon} text-xl sm:text-2xl text-pink-600 drop-shadow-sm`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 py-24 border-y border-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to Upgrade Your Look?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Browse the collection online, or WhatsApp us and we will help you find the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-3 bg-brand-plum text-brand-cream px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:bg-[#1E3D66] hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Shop the collection
              <i className="ri-arrow-right-line"></i>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-brand-plum text-brand-plum px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-plum hover:text-brand-cream transition-all"
            >
              <i className="ri-whatsapp-line"></i>
              WhatsApp to order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
