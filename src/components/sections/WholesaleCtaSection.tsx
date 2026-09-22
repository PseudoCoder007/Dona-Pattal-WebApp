import { siteConfig } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function WholesaleCtaSection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 border-b border-stone bg-paper/50" id="wholesale">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] font-bold text-brick uppercase">WHOLESALE</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">Let's Talk Bulk Supply.</h2>
          </div>
          <p className="text-sm leading-relaxed text-ink/80">
            Tell us the product, size and approximate quantity you need. We'll share current availability and wholesale pricing.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-ink/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brick" />
              Bulk enquiries welcome
            </div>
            <div className="flex items-center gap-2.5 text-xs text-ink/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brick" />
              Standard & custom sizes
            </div>
            <div className="flex items-center gap-2.5 text-xs text-ink/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brick" />
              Specifications on request
            </div>
            <div className="flex items-center gap-2.5 text-xs text-ink/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brick" />
              Mirzapur direct dispatch
            </div>
            <div className="flex items-center gap-2.5 text-xs text-ink/90 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brick" />
              Pan-India transport enquiry
            </div>
          </div>
          <div className="pt-4">
            <WhatsAppButton
              message="Hi, I'd like to enquire about wholesale supply of paper dona/paper plates. Please share current pricing and details."
              label="CHAT ON WHATSAPP (+91 87872 01971)"
              className="w-full"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white p-7 sm:p-9 rounded border border-stone shadow-md space-y-5">
            <div className="pb-3 border-b border-stone">
              <h3 className="text-sm font-bold uppercase tracking-wider text-ink">Request Wholesale Quotation</h3>
              <p className="text-xs text-muted mt-0.5">Direct enquiry to Sahlok Eco Products LLP desk.</p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">Your Name</label>
                  <input className="w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick" placeholder="Full Name" required type="text" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">Business / Company Name</label>
                  <input className="w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick" placeholder="e.g. Anand Caterers / Trade Agency" required type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">Phone / WhatsApp</label>
                  <input className="w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick" placeholder="+91 XXXXX XXXXX" required type="tel" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">City & State</label>
                  <input className="w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick" placeholder="e.g. Mirzapur, UP or Patna, Bihar" required type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">Product Selection</label>
                  <select className="w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick">
                    <option>4" Mini Paper Dona</option>
                    <option>6" Paper Dona</option>
                    <option>7" Paper Plate</option>
                    <option>8" Paper Plate</option>
                    <option>10" Paper Plate</option>
                    <option>12" Paper Plate</option>
                    <option>Mixed Bulk Consignment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">Approximate Quantity</label>
                  <input className="w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick" placeholder="e.g. 10,000 pcs, 50,000 pcs, Carton load" required type="text" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1">Message / Requirements</label>
                <textarea className="w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick" placeholder="Share size requirements, delivery destination, or packaging preference..." rows={3} />
              </div>
              <Button variant="primary" type="submit" className="w-full">REQUEST WHOLESALE QUOTE</Button>
            </form>
            <p className="text-[11px] text-center text-muted">
              Direct factory supply response from Mirzapur, Uttar Pradesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}