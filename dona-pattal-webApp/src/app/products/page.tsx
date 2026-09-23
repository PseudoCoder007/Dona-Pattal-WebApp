'use client';

import { useState } from 'react';
import { products } from '@/content/products';
import { CatalogueHero } from '@/components/sections/products/CatalogueHero';
import { FactoryDirectBanner } from '@/components/sections/products/FactoryDirectBanner';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductSpecTable } from '@/components/product/ProductSpecTable';
import { SectorsGrid } from '@/components/sections/products/SectorsGrid';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function ProductsPage() {
  const [filter, setFilter] = useState<'all' | 'dona' | 'plate'>('all');
  const [selectedSpec, setSelectedSpec] = useState(1);

  const filteredProducts = filter === 'all'
    ? products
    : products.filter((p) => p.category === filter);

  return (
    <>
      <CatalogueHero activeFilter={filter} onFilterChange={setFilter} />
      <FactoryDirectBanner />
      <section className="py-12 px-6 lg:px-8 max-w-7xl mx-auto">
        <ProductGrid products={filteredProducts} />
        <div className="mt-8 p-4 bg-paper rounded border border-stone text-xs text-muted flex items-start gap-2.5">
          <span className="text-brick font-bold">*</span>
          <p><strong className="text-ink">Note:</strong> GSM and pack quantities are current working/indicative specifications. Custom sizes and specifications available on enquiry. Contact our Mirzapur facility desk for exact carton counts and sample packs.</p>
        </div>
      </section>
      <section className="py-14 px-6 lg:px-8 bg-paper/60 border-y border-stone">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-2">TECHNICAL DOSSIER & SPECIFICATIONS</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-bold">Factory Specification Deep-Dive</h2>
              <p className="text-sm text-muted mt-1">Select any catalogue item to review manufacturing parameters and packing dimensions.</p>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
              {products.map((p, i) => (
                <button
                  key={p.slug}
                  onClick={() => setSelectedSpec(i)}
                  className={`spec-tab-btn px-3 py-1.5 text-xs font-bold rounded-lg border whitespace-nowrap transition-colors ${i === selectedSpec ? 'border-brick bg-brick text-white' : 'border-stone bg-white text-muted hover:text-ink'}`}
                >
                  {p.name.replace('Paper ', '').replace('Mini ', '')}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-stone p-6 sm:p-10 shadow-sm">
            <ProductSpecTable product={products[selectedSpec]} />
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" href="/wholesale" className="flex-1">Get Bulk Pricing</Button>
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-oxblood hover:bg-ink text-paper text-xs font-bold tracking-widest uppercase rounded transition-colors flex-1 justify-center"
                href={`https://wa.me/918787201971?text=${encodeURIComponent(products[selectedSpec].whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat On WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <SectorsGrid />
      <section className="py-16 px-6 lg:px-8 bg-paper border-t border-stone">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="DIRECT FACTORY QUOTATION" title="Need This In Bulk?" description="Tell us your required quantity and delivery location. We'll respond with current stock availability, trade discounts, and dispatch timelines from our Mirzapur facility." />
            </div>
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-stone shadow-sm">
              <EnquiryForm defaultProduct={products[selectedSpec].slug} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
