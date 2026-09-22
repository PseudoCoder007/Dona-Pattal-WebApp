import React from 'react';

const buyerTypes = [
  { icon: 'warehouse', number: '01', title: 'Wholesalers', desc: 'For regional distributors and commodity traders purchasing full cartons in consistent monthly volumes with scheduled transit.', cta: 'Full Carton Dispatches' },
  { icon: 'hub', number: '02', title: 'Distributors', desc: 'For regional stockists supplying multiple retail or food-service vendors across urban and peri-urban hubs.', cta: 'Multi-Tier Logistics' },
  { icon: 'soup_kitchen', number: '03', title: 'Caterers', desc: 'For catering businesses managing regular banquets, weddings, and recurring corporate or seasonal dining events.', cta: 'High GSM & Rigidity' },
  { icon: 'restaurant', number: '04', title: 'Restaurants', desc: 'For quick-service outlets, canteens, and dhabas requiring uniform, hygienic disposable tableware with zero smell.', cta: 'Food-Safe Odorless' },
  { icon: 'bakery_dining', number: '05', title: 'Sweet & Chaat Shops', desc: 'High-volume daily serving specialists requiring leak-resistant 4-inch and 6-inch deep paper dona.', cta: '4" & 6" Dona Specialists' },
  { icon: 'groups', number: '06', title: 'Event & Community Catering', desc: 'For festivals, community bhandaras, temple trusts, and mass congregation feeding initiatives across North India.', cta: 'Bulk Batch Direct Loading' },
];

const iconMap: Record<string, React.ReactElement> = {
  warehouse: <svg className="w-8 h-8 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>,
  hub: <svg className="w-8 h-8 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M12 2a10 10 0 010 20M12 2a10 10 0 000 20"/></svg>,
  soup_kitchen: <svg className="w-8 h-8 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12M8 15l4 4 4-4M4 15h16"/></svg>,
  restaurant: <svg className="w-8 h-8 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={2}/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h8M8 15h8"/></svg>,
  bakery_dining: <svg className="w-8 h-8 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5"/></svg>,
  groups: <svg className="w-8 h-8 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
};

export function BuyerTypeGrid() {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone" id="who-we-work-with">
      <div className="max-w-3xl mb-12">
        <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-2">WHO WE WORK WITH</div>
        <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight mb-3">Built Around Bulk Buyers</h2>
        <p className="text-muted text-base">Structured supply for businesses handling food service, catering, and regional trade.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buyerTypes.map((buyer) => (
          <div key={buyer.title} className="bg-white border border-stone p-6 hover:border-brick transition-colors flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span>{iconMap[buyer.icon]}</span>
                <span className="text-xs font-mono font-bold text-muted">{buyer.number}</span>
              </div>
              <h3 className="font-serif text-xl text-ink font-semibold mb-2">{buyer.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{buyer.desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone/40 text-xs font-bold uppercase tracking-wider text-brass font-medium">{buyer.cta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
