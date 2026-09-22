import { Button } from '@/components/ui/Button';

const tiers = [
  { level: 'TIER 1', title: 'Small Bulk', desc: 'For local sweet shops, chaat stalls, and smaller recurring weekly requirements. Great for testing size-fit and paper rigidity.', features: ['Minimum carton quantities', 'Standard local transporter options', 'Standard GSM ready stock'], badge: null, cta: 'Talk to us about your requirement' },
  { level: 'TIER 2', title: 'Regular Bulk', desc: 'For caterers, restaurants, banquet halls, and regional distributors needing continuous batch supplies and predictable delivery.', features: ['Scheduled bi-weekly / monthly dispatches', 'Tiered pricing concessions', 'Custom pack size / sleeve counting'], badge: 'Most Common', cta: 'Talk to us about your requirement' },
  { level: 'TIER 3', title: 'Large Bulk', desc: 'For large-scale events, religious bhandaras, state distribution hubs, and full truckload shipments across UP, Bihar & MP.', features: ['Full truckload (FTL) direct factory loading', 'Custom GSM raw material sourcing', 'Dedicated production queue'], badge: null, cta: 'Talk to us about your requirement' },
];

export function QuantityTierGrid() {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone" id="quantity-guide">
      <div className="max-w-3xl mb-12">
        <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-2">NOT SURE HOW MUCH YOU NEED?</div>
        <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight mb-3">Start With an Approximate Quantity</h2>
        <p className="text-muted text-base">You don\u2019t need to know the exact final quantity before contacting Sahlok. We work with buyers at various stages of order planning.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div key={tier.level} className={`bg-white border border-stone p-8 flex flex-col justify-between relative ${tier.badge ? 'border-2 border-brick/70 shadow-sm' : ''}`}>
            {tier.badge && (
              <div className="absolute -top-3 right-4 bg-brick text-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded">{tier.badge}</div>
            )}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-brass mb-2">{tier.level}</div>
              <h3 className="font-serif text-2xl text-ink font-medium mb-3">{tier.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{tier.desc}</p>
              <ul className="text-xs space-y-2 text-muted border-t border-stone/40 pt-4">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-brass">\u2713</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <Button variant="secondary" href="/wholesale" className="w-full text-xs">{tier.cta} \u2192</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
