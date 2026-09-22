import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { EditorialImage } from '@/components/ui/EditorialImage';

export function ContactHero() {
  return (
    <section className="relative pt-12 pb-20 md:py-24 border-b border-stone overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold mb-3">CONTACT SAHLOK</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.1] mb-6">
              Let\u2019s Talk About Your Requirement.
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-8">
              Looking for paper dona, paper plates or food-service tableware in bulk? Get in touch with Sahlok Eco Products to discuss products, quantities, pricing and supply requirements directly from our production unit in Mirzapur.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" href="#contact-form">GET BULK PRICING</Button>
              <WhatsAppButton message="Hello Sahlok Eco Products, I would like to discuss a wholesale requirement for paper dona / paper plates. Please share product options, pricing and availability." label="CHAT ON WHATSAPP (+91 87872 01971)" />
            </div>
            <div className="mt-10 pt-8 border-t border-stone/60 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-brass font-bold">Facility Location</span>
                <span className="text-sm font-semibold text-ink">Mirzapur, Uttar Pradesh</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-brass font-bold">Supply Radius</span>
                <span className="text-sm font-semibold text-ink">UP, Bihar & North India</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[11px] uppercase tracking-wider text-brass font-bold">Response Speed</span>
                <span className="text-sm font-semibold text-ink">Within 2 to 4 Hours</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative bg-white p-3 border border-stone rounded-lg shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-paper/60">
                <EditorialImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjBvIK4GkbNtiAqXpFsC-ZmuTS9MwDiYvaSCxeO_3AET7DH3rpQ-k7UVcXaBH-Hd_DQYwSJuMpGE5bBvVweOVNglT-spyzLtKjyJMMtRgOOcw-W66bsIb5Q8cwKFzRLPCAjewL7O0egPrU0iTv4MQTJ8-ir4MArYVKnnFcBZHZSBL4y7-6viJT9lAn1eB8DilCpK0HAafE03cOwGTKB1A4bE9_iwjWfXfkshZseIL3M5DCO_M3CNa0A"
                  alt="Stacked natural kraft paper bowls, dona and plates on sandstone"
                  aspectRatio="4/3"
                />
              </div>
              <div className="pt-3 px-1 flex items-center justify-between border-t border-stone/40 mt-2">
                <span className="font-bold uppercase tracking-[0.14em] text-brass text-[10px]">DIRECT DESK \u00b7 ALOK DWIVEDI \u00b7 MIRZAPUR</span>
                <span className="text-[11px] text-muted font-mono">25.1337\u00b0 N, 82.5644\u00b0 E</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
