import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function WhatsAppBanner() {
  return (
    <section className="bg-ink text-paper py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-stone">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold">FASTEST WAY TO REACH US</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mt-1 text-paper">Prefer WhatsApp?</h2>
          <p className="text-sm sm:text-base text-stone/80 max-w-xl mt-2 leading-relaxed">
            Send us your product requirement directly and start a conversation about wholesale supply, packaging counts, and dispatch dates.
          </p>
        </div>
        <div>
          <WhatsAppButton
            message="Hello Sahlok Eco Products, I would like to discuss a wholesale requirement for paper dona / paper plates. Please share product options, pricing and availability."
            label="CHAT ON WHATSAPP (+91 87872 01971)"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
