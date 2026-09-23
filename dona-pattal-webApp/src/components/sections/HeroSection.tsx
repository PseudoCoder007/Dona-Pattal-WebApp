import Image from 'next/image';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative border-b border-stone overflow-hidden" id="home">
      <Image
        src="/images/hero/cover-background.png"
        alt="Paper dona and pattal tableware stacked on a rustic wooden table with green leaves"
        fill
        priority
        className="object-cover object-[75%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/20 md:to-transparent md:w-3/5 lg:w-1/2" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20 lg:py-28 flex items-center min-h-[540px] lg:min-h-[600px]">
        <div className="w-full max-w-xl space-y-6 bg-paper/70 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-4 md:p-0 rounded">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs tracking-[0.2em] text-brick font-extrabold uppercase">SAHLOK ECO PRODUCTS LLP</span>
              <span className="text-stone">·</span>
              <span className="text-xs tracking-[0.16em] text-muted uppercase font-semibold">PAPER DONA & TABLEWARE</span>
            </div>
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 bg-paper text-ink/90 border border-stone/50 rounded-full text-[11px] font-bold tracking-wider uppercase max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brick" />
              NATURAL TABLEWARE · BULK B2B SUPPLY · MIRZAPUR, UP
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink leading-[1.12] tracking-tight">
            Paper Tableware, <span className="italic font-normal font-serif block text-brick">Built for Bulk Supply.</span>
          </h1>
          <p className="text-base text-ink/80 leading-relaxed font-normal">
            Starting from Mirzapur, Sahlok Eco Products is building a dependable B2B supply line for paper dona, plates and food-service tableware.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button variant="primary" href="/wholesale">GET BULK PRICING</Button>
            <WhatsAppButton
              message="Hi, I'm interested in bulk wholesale pricing for Sahlok Eco Products. Please share product details and current pricing."
              label="CHAT ON WHATSAPP"
            />
          </div>
          <div className="pt-4 border-t border-stone">
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-muted">
              <span className="px-2.5 py-1 bg-paper rounded border border-stone/50">Mirzapur Facility</span>
              <span className="px-2.5 py-1 bg-paper rounded border border-stone/50">Direct B2B Supply</span>
              <span className="px-2.5 py-1 bg-paper rounded border border-stone/50">Wholesale Enquiries Across India</span>
              <span className="px-2.5 py-1 bg-paper rounded border border-stone/50">100% Food-Grade Paper</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
