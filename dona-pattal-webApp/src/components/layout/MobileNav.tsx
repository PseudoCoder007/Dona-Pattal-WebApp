'use client';

import Link from 'next/link';
import { siteConfig } from '@/content/site';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="fixed inset-y-0 left-0 z-50 flex flex-col p-6 w-80 bg-paper shadow-xl border-r border-stone" role="navigation" aria-label="Mobile navigation">
        <div className="flex items-center justify-between pb-5 mb-4 border-b border-stone">
          <div>
            <h2 className="font-serif text-xl font-bold text-ink">Sahlok Eco Products</h2>
            <p className="text-xs text-muted mt-0.5">B2B Manufacturing · Mirzapur</p>
          </div>
          <button
            aria-label="Close Drawer"
            className="p-1.5 text-muted hover:text-ink"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              className="flex items-center gap-3 px-4 py-3 text-muted hover:text-ink rounded-sm font-medium text-sm uppercase tracking-wider transition-colors"
              href={item.href}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="pt-4 border-t border-stone text-xs text-muted flex flex-col gap-2">
          <div className="font-semibold text-ink">Factory Direct Sales</div>
          <div>Alok Dwivedi · +91 87872 01971</div>
          <div>Civil Line Rd, Saripur Jalalpur, Mirzapur</div>
          <a
            className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold tracking-widest uppercase rounded transition-colors mt-2 self-start"
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.115-.527-1.745-.724-2.883-2.493-2.971-2.607-.088-.114-.707-.942-.707-1.796 0-.854.444-1.275.602-1.448.158-.173.346-.217.461-.217.115 0 .23.002.331.007.107.006.251-.041.393.299.144.347.49 1.199.533 1.286.044.087.073.188.015.304-.058.115-.087.188-.173.289-.087.101-.184.226-.263.304-.088.087-.18.182-.077.359.102.177.456.751.98 1.218.674.6 1.242.787 1.419.874.177.087.28.073.385-.044.105-.116.447-.521.567-.7.12-.178.239-.148.403-.088.164.06 1.042.492 1.22.58.178.089.297.132.34.204.044.073.044.421-.1 1.826z" />
            </svg>
            CHAT ON WHATSAPP
          </a>
        </div>
      </aside>
    </>
  );
}
