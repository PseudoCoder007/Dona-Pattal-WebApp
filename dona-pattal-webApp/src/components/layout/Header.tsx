'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { MobileNav } from './MobileNav';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-stone ${className || ''}`}>
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <Link className="flex items-center gap-3 group" href="/" title="Sahlok Eco Products LLP">
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight text-ink group-hover:text-brick transition-colors">
              SAHLOK ECO PRODUCTS <span className="text-xs uppercase px-1.5 py-0.5 rounded bg-stone/30 text-ink/80 font-sans font-semibold tracking-wider ml-1">LLP</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-muted font-semibold">Mirzapur, Uttar Pradesh · Bulk Tableware</span>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-7 text-[13px] font-semibold tracking-wider uppercase text-ink/80">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} className="hover:text-brick transition-colors" href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            className="items-center justify-center px-5 py-2.5 rounded-sm bg-brick hover:bg-brick/90 text-white text-xs font-bold tracking-widest uppercase transition-all shadow-sm hover:shadow hidden sm:inline-flex"
            href="/wholesale"
          >
            Get Bulk Pricing
          </Link>

          <WhatsAppButton
            message={siteConfig.contact.wholesaleEnquiryMessage}
            size="sm"
          />

          <button
            className="md:hidden p-1.5 text-ink hover:text-brick transition-colors focus:outline-none"
            aria-label="Open Navigation"
            onClick={() => setMobileNavOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileNavOpen && (
        <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
      )}
    </header>
  );
}
