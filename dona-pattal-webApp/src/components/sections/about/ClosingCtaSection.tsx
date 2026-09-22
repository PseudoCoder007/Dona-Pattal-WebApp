import { siteConfig } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function ClosingCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-paper" id="contact">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-white border border-stone p-8 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold mb-2 block">WORK WITH SAHLOK</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink mb-4">Looking for Paper Tableware in Bulk?</h2>
              <p className="font-sans text-base text-muted font-light leading-relaxed mb-6">
                Tell us what you need, how much you need and where it needs to go. We will respond with honest carton-tier rates and realistic transit timelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button variant="primary" href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, '')}`} className="flex-1">
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  GET BULK PRICING
                </Button>
                <WhatsAppButton message="Hello Sahlok Eco Products, I am looking for bulk paper tableware pricing." label="CHAT ON WHATSAPP (+91 87872 01971)" className="flex-1" />
              </div>
            </div>
            <div className="lg:col-span-5 bg-paper p-6 border border-stone/60">
              <h3 className="font-serif text-lg font-bold text-ink mb-4">B2B Quick Connect</h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-muted block text-[10px] uppercase font-bold">Lead Representative</span>
                  <span className="font-semibold text-ink">Alok Dwivedi (Proprietor)</span>
                </div>
                <div>
                  <span className="text-muted block text-[10px] uppercase font-bold">Direct Phone / WhatsApp</span>
                  <a className="font-semibold text-brick hover:underline" href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, '')}`}>{siteConfig.contact.phoneDisplay}</a>
                </div>
                <div>
                  <span className="text-muted block text-[10px] uppercase font-bold">Facility Address</span>
                  <span className="text-ink leading-relaxed block">Civil Line Road, Saripur Jalalpur, Mirzapur - 231001, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}