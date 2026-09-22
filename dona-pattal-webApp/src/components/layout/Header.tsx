'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { MobileNav } from './MobileNav';

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
            <span className="text-[10px] tracking-widest uppercase text-muted font-semibold">Mirzapur, Uttar Pradesh \u00b7 Bulk Tableware</span>
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
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm bg-brick hover:bg-brick/90 text-white text-xs font-bold tracking-widest uppercase transition-all shadow-sm hover:shadow hidden sm:inline-flex"
            href="/wholesale"
          >
            Get Bulk Pricing
          </Link>

          <a
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow transition-all"
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.115-.527-1.745-.724-2.883-2.493-2.971-2.607-.088-.114-.707-.942-.707-1.796 0-.854.444-1.275.602-1.448.158-.173.346-.217.461-.217.115 0 .23.002.331.007.107.006.251-.041.393.299.144.347.49 1.199.533 1.286.044.087.073.188.015.304-.058.115-.087.188-.173.289-.087.101-.184.226-.263.304-.088.087-.18.182-.077.359.102.177.456.751.98 1.218.674.6 1.242.787 1.419.874.177.087.28.073.385-.044.105-.116.447-.521.567-.7.12-.178.239-.148.403-.088.164.06 1.042.492 1.22.58.178.089.297.132.34.204.044.073.044.421-.1 1.826z" />
            </svg>
            CHAT ON WHATSAPP
          </a>

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
