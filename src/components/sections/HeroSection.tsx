import { siteConfig } from '@/content/site';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { EditorialImage } from '@/components/ui/EditorialImage';

export function HeroSection() {
  return (
    <section className="relative pt-10 pb-16 lg:py-20 px-6 lg:px-8 border-b border-stone overflow-hidden" id="home">
      <div className="absolute -top-32 right-0 w-2/3 h-96 bg-gradient-to-b from-paper/70 to-transparent pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs tracking-[0.2em] text-brick font-extrabold uppercase">SAHLOK ECO PRODUCTS LLP</span>
              <span className="text-stone">\u00b7</span>
              <span className="text-xs tracking-[0.16em] text-muted uppercase font-semibold">PAPER DONA & TABLEWARE</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-paper text-ink/90 border border-stone/50 rounded-full text-[11px] font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brick" />
              NATURAL TABLEWARE \u00b7 BULK B2B SUPPLY \u00b7 MIRZAPUR, UP
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

        <div className="col-span-12 lg:col-span-7 relative">
          <EditorialImage
            src="https://lh3.googleusercontent.com/aida/AEtjO1W5OkYT7sZx188nBPewNqDBoXaR_dpEzCj3YNTug3S1PWFhgENVyGm91LkNozRvXOCFJMH-G6z1wTuj2z5yY3xRqnOPPofNjmbYIhTtydxlxbSJUpvPfpnYQWPKd1uA1Vl6vq4IpAH5KG6uuLeE_9SHMv8HUTkf_hRFsZLygkkcse9YxAoCQxOA-0D816muGb4E9ixI1WV8F4jlRp1F60w-53O-_0rO19eSRViwqTDgQOtfV6Z7SSmcxvvT"
            alt="Sahlok authentic Indian disposable paper dona and tableware stacked with ribbed fluted edges"
            badge="Emerging B2B Unit \u00b7 Mirzapur"
            badgePosition="top-right"
            caption="PAPER TABLEWARE \u00b7 MIRZAPUR, UTTAR PRADESH"
            aspectRatio="16/10"
          />
        </div>
      </div>
    </section>
  );
}