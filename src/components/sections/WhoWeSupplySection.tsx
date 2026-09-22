import { SectionHeading } from '@/components/ui/SectionHeading';

const clientele = [
  { number: '01', category: 'CATERING', title: 'Caterers', desc: 'Wedding buffets, community banquets, feast service.' },
  { number: '02', category: 'DINING', title: 'Restaurants', desc: 'Takeaway, chaat counters, quick-service dining.' },
  { number: '03', category: 'CONFECTIONERY', title: 'Sweet Shops', desc: 'Mithai packaging, dry snacks, prasad distribution.' },
  { number: '04', category: 'QUICK BITES', title: 'Street-Food Businesses', desc: 'Chaat, golgappe, bhel, fast snacks.' },
  { number: '05', category: 'HOSPITALITY', title: 'Hotels & Banquets', desc: 'Outdoor dining, room breakfast setups, event lawns.' },
  { number: '06', category: 'EVENTS', title: 'Banquet & Event Suppliers', desc: 'Bulk party supplies, decor & dining setups.' },
  { number: '07', category: 'COMMUNITY', title: 'Bhandara & Community Meals', desc: 'Religious yatras, melas, mass feeding programs.' },
  { number: '08', category: 'TRADE HUBS', title: 'Wholesalers & Distributors', desc: 'Regional bulk supply, transport carton dispatch.' },
  { number: '09', category: 'RETAIL', title: 'Local Retailers', desc: 'Packaged tableware for retail store stock.' },
];

export function WhoWeSupplySection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 border-b border-stone bg-paper/50" id="who-we-supply">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs tracking-[0.25em] font-bold text-brick uppercase">WHO WE SUPPLY</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink">Built for Businesses That Serve Food Every Day</h2>
          <p className="text-xs sm:text-sm text-muted">Practical paper tableware supply geared for wholesale, commercial catering, events, and trade buyers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {clientele.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded border border-stone hover:border-brick/40 transition-colors space-y-2">
              <span className="text-[11px] font-mono font-bold text-brick">{item.number} / {item.category}</span>
              <h3 className="text-base font-bold text-ink">{item.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}