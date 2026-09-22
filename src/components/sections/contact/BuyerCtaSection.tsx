import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function BuyerCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-paper border-b border-stone text-center" id="buyer-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold">FOR WHOLESALE BUYERS</span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mt-2 tracking-tight">Have a Bulk Requirement?</h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
          Tell us the product, approximate quantity and delivery location. We will discuss the requirement with you, share volume slabs, and organize direct carton shipments.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="/contact" className="w-full sm:w-auto">GET BULK PRICING</Button>
          <WhatsAppButton message="Hello Sahlok Eco Products, I have a bulk wholesale requirement for paper dona and plates. Please share bulk pricing and availability." label="CHAT ON WHATSAPP" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
