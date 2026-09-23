import { siteConfig } from '@/content/site';

const contactCards = [
  {
    label: 'Phone / WhatsApp',
    title: siteConfig.contact.phoneDisplay,
    description:
      'Direct phone calls and WhatsApp business inquiries available Monday through Saturday.',
    primaryHref: `tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, '')}`,
    primaryLabel: 'Call Now',
    secondaryHref: siteConfig.contact.whatsappUrl,
    secondaryLabel: 'WhatsApp',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.527-.735.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    ),
  },
  {
    label: 'Business',
    title: siteConfig.business.name,
    description:
      'Paper dona and paper-plate manufacturing desk for wholesale buyers, caterers, retailers, and distributors.',
    primaryHref: '/products',
    primaryLabel: 'View Range',
    secondaryHref: '/wholesale',
    secondaryLabel: 'Wholesale',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3.75 21h16.5M4.5 21V8.25l7.5-4.5 7.5 4.5V21M9 9.75h6M9 13.5h6M9 17.25h6"
      />
    ),
  },
  {
    label: 'Contact Person',
    title: siteConfig.business.owner,
    description:
      'Primary contact for product availability, carton packaging, wholesale quotations, and dispatch coordination.',
    primaryHref: `tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, '')}`,
    primaryLabel: 'Call Desk',
    secondaryHref: siteConfig.contact.whatsappUrl,
    secondaryLabel: 'Message',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
      />
    ),
  },
  {
    label: 'Factory Address',
    title: 'Mirzapur, Uttar Pradesh',
    description: siteConfig.business.address,
    primaryHref: '#location',
    primaryLabel: 'See Location',
    secondaryHref: 'https://maps.google.com/?q=Civil+Line+Road+Saripur+Jalalpur+Mirzapur+231001',
    secondaryLabel: 'Map',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 21s7.5-6.45 7.5-12A7.5 7.5 0 0 0 4.5 9c0 5.55 7.5 12 7.5 12Zm0-9.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      />
    ),
  },
];

export function ContactInfoGrid() {
  return (
    <section className="py-16 md:py-24 border-b border-stone bg-paper" id="reach-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs">GET IN TOUCH</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1 tracking-tight">
            We&apos;re Easy to Reach.
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2">
            Connect directly with our desk for wholesale dispatches, product queries, or ongoing distributor pricing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card) => (
            <article
              key={card.label}
              className="bg-white p-6 border border-stone rounded-lg flex min-h-[260px] flex-col justify-between hover:border-brass transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-paper border border-stone flex items-center justify-center text-brick mb-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    {card.icon}
                  </svg>
                </div>
                <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs block mb-1">{card.label}</span>
                <h3 className="text-lg font-bold text-ink leading-snug">{card.title}</h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">{card.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone/40 flex items-center gap-3 text-xs font-semibold">
                <a className="text-brick hover:underline" href={card.primaryHref}>
                  {card.primaryLabel}
                </a>
                <span className="text-stone" aria-hidden="true">|</span>
                <a
                  className="text-brick hover:underline"
                  href={card.secondaryHref}
                  target={card.secondaryHref.startsWith('http') ? '_blank' : undefined}
                  rel={card.secondaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {card.secondaryLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
