import { SectionHeading } from '@/components/ui/SectionHeading';
import React from 'react';

const buyers = [
  { icon: 'storefront', title: 'Wholesalers', desc: 'Businesses purchasing products for further distribution. High-volume pricing schedules with dependable reorder turnaround.' },
  { icon: 'local_shipping', title: 'Distributors', desc: 'Businesses supplying multiple regional retail shops, mandis, or district centers requiring periodic scheduled dispatches.' },
  { icon: 'soup_kitchen', title: 'Caterers', desc: 'Businesses with recurring food-service requirements across wedding banquets, religious gatherings, and festive feasts.' },
  { icon: 'restaurant', title: 'Restaurants', desc: 'Food businesses and quick-service diners requiring hygienic, reliable disposable tableware for daily in-house serving and takeaway.' },
  { icon: 'bakery_dining', title: 'Sweet & Chaat Shops', desc: 'Businesses serving snacks, sweets, pani puri, and prepared street foods requiring leak-resistant small-format dona bowls.' },
  { icon: 'groups', title: 'Event & Community Catering', desc: 'Bulk requirements for ashrams, community kitchens, charitable trusts, and institutional gatherings needing straightforward supply.' },
];

const iconMap: Record<string, React.ReactElement> = {
  storefront: <svg className="w-6 h-6 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  local_shipping: <svg className="w-6 h-6 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  soup_kitchen: <svg className="w-6 h-6 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12M8 15l4 4 4-4M4 15h16"/></svg>,
  restaurant: <svg className="w-6 h-6 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h8M8 15h8"/></svg>,
  bakery_dining: <svg className="w-6 h-6 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"/></svg>,
  groups: <svg className="w-6 h-6 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
};

export function BuyerSegmentsSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-stone/50 bg-stone/15" id="who-we-supply">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold mb-2 block">OUR BUYERS</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink">Designed Around the People Who Buy in Volume.</h2>
          <p className="font-sans text-muted text-sm mt-2 font-light">Reliable delivery schedules aligned with seasonal feasts and daily consumption cycles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyers.map((buyer) => (
            <div key={buyer.title} className="p-6 bg-white border border-stone">
              <div className="flex items-center gap-3 mb-3">
                <span>{iconMap[buyer.icon]}</span>
                <h3 className="font-serif text-xl text-ink">{buyer.title}</h3>
              </div>
              <p className="font-sans text-xs text-muted font-light leading-relaxed">{buyer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}