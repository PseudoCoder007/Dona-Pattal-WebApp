import { siteConfig } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function ContactSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-paper border-b border-stone" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs tracking-[0.25em] font-bold text-brick uppercase">CONTACT DESK</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink">Get in Touch Directly</h2>
          <p className="text-xs sm:text-sm text-muted">Connect directly with our facility for orders, samples, and transport queries.</p>
        </div>
        <div className="bg-white rounded-lg border border-stone p-8 md:p-10 shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-brick">Legal Business Entity</span>
                <h3 className="text-xl font-bold text-ink mt-0.5">Sahlok Eco Products LLP</h3>
                <p className="text-xs text-muted">Registered Partnership in Mirzapur, Uttar Pradesh</p>
              </div>
              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-start gap-2.5 text-ink/80">
                  <span className="font-bold text-ink min-w-[90px]">Owner:</span>
                  <span>{siteConfig.footer.contact.owner}</span>
                </div>
                <div className="flex items-start gap-2.5 text-ink/80">
                  <span className="font-bold text-ink min-w-[90px]">Call / WhatsApp:</span>
                  <a className="text-brick font-bold hover:underline" href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, '')}`}>{siteConfig.contact.phoneDisplay}</a>
                </div>
                <div className="flex items-start gap-2.5 text-ink/80">
                  <span className="font-bold text-ink min-w-[90px]">Address:</span>
                  <span>Civil Line Road, Saripur Jalalpur, Mirzapur \u2013 231001, Uttar Pradesh</span>
                </div>
              </div>
            </div>
            <div className="p-6 bg-paper/60 rounded border border-stone space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-ink">B2B Wholesale Enquiries</span>
              <p className="text-xs text-muted leading-relaxed">
                We welcome bulk orders from distributors, wholesale traders, and catering contractors. Contact us with your destination city and estimated volume.
              </p>
              <div className="pt-2 text-[11px] text-ink/80 space-y-1">
                <p><strong>Supply Line:</strong> Direct from Mirzapur factory</p>
                <p><strong>Dispatch:</strong> Regional transport & logistics</p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-stone flex flex-wrap items-center justify-center gap-3">
            <Button variant="ghost" href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, '')}`}>
              <svg className="w-3.5 h-3.5 fill-current mr-1.5" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
              CALL NOW ({siteConfig.contact.phoneDisplay})
            </Button>
            <WhatsAppButton label="CHAT ON WHATSAPP" message="Hello Sahlok Eco Products, I would like to discuss a wholesale requirement." />
            <Button variant="secondary" href="/wholesale">REQUEST PRICING</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
