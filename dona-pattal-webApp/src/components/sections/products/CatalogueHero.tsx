'use client';

import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

type ProductFilter = 'all' | 'dona' | 'plate';

interface CatalogueHeroProps {
  activeFilter: ProductFilter;
  onFilterChange: (filter: ProductFilter) => void;
}

const filters: { label: string; value: ProductFilter }[] = [
  { label: 'All Products (6)', value: 'all' },
  { label: 'Paper Dona (2)', value: 'dona' },
  { label: 'Paper Plates (4)', value: 'plate' },
];

export function CatalogueHero({ activeFilter, onFilterChange }: CatalogueHeroProps) {
  return (
    <section className="pt-8 sm:pt-14 pb-12 sm:pb-16 px-6 lg:px-8 border-b border-stone">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] font-bold text-brick uppercase mb-3">
              <span className="w-5 h-[1.5px] bg-brass inline-block" />
              PRODUCT RANGE
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.15] tracking-tight">
              Paper Tableware for Everyday Food Service
            </h1>
            <p className="mt-4 text-muted text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              A focused range of paper dona and plates for caterers, distributors, restaurants, sweet shops, events and other bulk buyers. Manufactured with high-precision pressing in Mirzapur, Uttar Pradesh.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-paper text-xs font-bold uppercase tracking-wider text-muted rounded-lg border border-stone">
                <span className="w-1.5 h-1.5 rounded-full bg-brick" />
                6 sizes currently listed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-paper text-xs font-bold uppercase tracking-wider text-muted rounded-lg border border-stone">
                Wholesale enquiries welcome
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-paper text-xs font-bold uppercase tracking-wider text-muted rounded-lg border border-stone">
                Mirzapur, UP Unit
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/wholesale">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                Get Bulk Pricing
              </Button>
              <WhatsAppButton message="Hello Sahlok Eco Products, I am interested in your Paper Dona and Paper Plates catalogue. Please share wholesale rates." label="Chat On WhatsApp" />
            </div>
          </div>
          <div className="lg:col-span-4 bg-paper p-6 rounded-lg border border-stone">
            <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-2">FACTORY DIRECT SUPPLY</div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-3">Guaranteed B2B Consistency</h3>
            <ul className="text-xs text-muted space-y-2.5 leading-relaxed">
              <li className="flex items-start gap-2"><span className="text-brass">✓</span><span>Food-grade unbleached & virgin-finish kraft materials</span></li>
              <li className="flex items-start gap-2"><span className="text-brass">✓</span><span>Standardized rim fluting for high mechanical rigidity</span></li>
              <li className="flex items-start gap-2"><span className="text-brass">✓</span><span>Nested packaging in heavy moisture-safe corrugation</span></li>
              <li className="flex items-start gap-2"><span className="text-brass">✓</span><span>Direct truckload & partial load dispatch across UP / Bihar / Delhi NCR</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between flex-wrap gap-4 border-t border-stone/60 pt-6">
          <div className="flex items-center gap-2" id="filter-tabs">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  className={`filter-btn px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-lg border transition-colors ${
                    isActive
                      ? 'active-filter bg-ink text-paper border-ink'
                      : 'bg-paper text-muted hover:text-ink border-stone'
                  }`}
                  aria-pressed={isActive}
                  onClick={() => onFilterChange(filter.value)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
          <div className="text-xs text-muted">Showing factory stock specifications</div>
        </div>
      </div>
    </section>
  );
}
