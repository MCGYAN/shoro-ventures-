'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const NAV_ITEMS = [
  { href: '/', label: 'Home', iconActive: 'ri-home-5-fill', iconInactive: 'ri-home-5-line' },
  { href: '/shop', label: 'Shop', iconActive: 'ri-store-3-fill', iconInactive: 'ri-store-3-line' },
  {
    href: '/cart',
    label: 'Cart',
    iconActive: 'ri-shopping-cart-fill',
    iconInactive: 'ri-shopping-cart-line',
    badgeKey: 'cart' as const,
  },
  {
    href: '/wishlist',
    label: 'Wishlist',
    iconActive: 'ri-heart-3-fill',
    iconInactive: 'ri-heart-3-line',
    badgeKey: 'wishlist' as const,
  },
  { href: '/account', label: 'Account', iconActive: 'ri-user-3-fill', iconInactive: 'ri-user-3-line' },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [isStandalone, setIsStandalone] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  useEffect(() => {
    setMounted(true);
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);
  }, []);

  const nav = (
    <nav
      className="lg:hidden mobile-bottom-nav-fixed"
      aria-label="Mobile navigation"
    >
      <div
        className={`px-3 ${
          isStandalone ? 'pb-[max(0.75rem,env(safe-area-inset-bottom))]' : 'pb-3'
        }`}
      >
        <div className="mobile-bottom-nav-glass mx-auto max-w-md grid grid-cols-5 p-1.5">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const badge =
              item.badgeKey === 'cart' ? cartCount : item.badgeKey === 'wishlist' ? wishlistCount : 0;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-0.5 h-[3.4rem] rounded-[1.35rem] relative active:scale-95 transition-transform duration-200"
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
              >
                <span
                  className={`relative flex items-center justify-center h-8 rounded-full transition-all duration-300 ease-boutique ${
                    active ? 'w-12 bg-brand-plum text-brand-gold shadow-[0_4px_12px_rgba(20,43,74,0.3)]' : 'w-8 text-brand-plum/45'
                  }`}
                >
                  <i className={`${active ? item.iconActive : item.iconInactive} text-[19px] leading-none`} />
                  {badge > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 bg-brand-gold text-brand-plum text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                      {badge > 99 ? '99+' : badge}
                    </span>
                  )}
                </span>
                <span
                  className={`text-[10px] tracking-wide transition-colors ${
                    active ? 'text-brand-plum font-semibold' : 'text-brand-plum/45 font-medium'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );

  if (!mounted) return null;

  return createPortal(nav, document.body);
}
