'use client';

import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

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
          <WhatsAppButton
            message="Hello Sahlok Eco Products, I would like to discuss a wholesale requirement for paper dona / paper plates. Please share product options, pricing and availability."
            size="sm"
            className="mt-2 self-start"
            onClick={onClose}
          />
        </div>
      </aside>
    </>
  );
}
