import { SectionHeading } from '@/components/ui/SectionHeading';
import React from 'react';

const sectors = [
  { icon: 'ramen_dining', title: 'Chaat Shops', desc: 'Deep leak-proof 6" bowls for golgappa & dahi vada' },
  { icon: 'bakery_dining', title: 'Sweet Shops', desc: '4" and 6" mini donas for rasgulla, laddoos & snacks' },
  { icon: 'room_service', title: 'Caterers', desc: 'Sturdy 10" & 12" banquet plates for weddings & gatherings' },
  { icon: 'restaurant', title: 'Restaurants', desc: 'Reliable side tableware for breakfast & fast food meals' },
  { icon: 'storefront', title: 'Food Vendors', desc: 'Cost-effective, hygienic disposable paper tableware' },
  { icon: 'festival', title: 'Events & Mandis', desc: 'High-volume corrugated carton bulk shipments' },
];

const iconMap: Record<string, React.ReactElement> = {
  ramen_dining: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12h14"/></svg>,
  bakery_dining: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"/></svg>,
  room_service: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>,
  restaurant: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h8M8 15h8"/></svg>,
  storefront: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  festival: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>,
};

export function SectorsGrid() {
  return (
    <section className="py-14 px-6 lg:px-8 max-w-7xl mx-auto" id="sectors">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-2">COMMERCIAL CLIENTELE</div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          Engineered for Commercial Food Service
        </h2>
        <p className="text-xs sm:text-sm text-muted mt-2">
          From street food stalls to state-level catering tenders, our standardized paper donas and plates meet daily operational demands.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {sectors.map((sector) => (
          <div key={sector.title} className="p-4 bg-white rounded-lg border border-stone text-center hover:border-brick transition-colors">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-paper flex items-center justify-center text-brick">
              {iconMap[sector.icon]}
            </div>
            <h4 className="font-serif font-bold text-sm text-ink">{sector.title}</h4>
            <p className="text-[11px] text-muted mt-1">{sector.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}