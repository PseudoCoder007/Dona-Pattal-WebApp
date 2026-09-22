import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  { number: '01', title: 'Share Your Requirement', desc: 'Tell us what product sizes and approximate volume you need, either through our web form or direct WhatsApp message.' },
  { number: '02', title: 'We Review', desc: 'We evaluate live stock, production schedules, and calculate freight logistics from our Mirzapur manufacturing unit.' },
  { number: '03', title: 'Discuss Pricing', desc: 'We respond directly with trade rate sheets, indicative GSM options, transit durations, and physical sample availability.' },
  { number: '04', title: 'Plan the Supply', desc: 'Finalize carton packaging specs, confirm the dispatch schedule, and track road transport until final delivery at your hub.' },
];

export function EnquiryProcessSteps() {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone">
      <div className="max-w-3xl mb-12">
        <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-2">THE PROCESS</div>
        <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight mb-3">From Enquiry to Dispatch</h2>
        <p className="text-muted text-base">A transparent, direct factory workflow designed without ecommerce friction or intermediaries.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="bg-white border border-stone p-6 relative">
            <div className="font-serif text-3xl font-light text-brass/60 mb-4">{step.number}</div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">{step.title}</h3>
            <p className="text-muted text-xs leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}