import { siteConfig } from '@/content/site';
import { BuyerTypeGrid } from '@/components/sections/wholesale/BuyerTypeGrid';
import { QuantityTierGrid } from '@/components/sections/wholesale/QuantityTierGrid';
import { EnquiryProcessSteps } from '@/components/sections/wholesale/EnquiryProcessSteps';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { EditorialImage } from '@/components/ui/EditorialImage';

export default function WholesalePage() {
  return (
    <>
      <section className="py-12 md:py-20 px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-3">WHOLESALE SUPPLY</div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink font-normal leading-[1.15] mb-6">
              Tell Us What You Need. <br className="hidden sm:inline" /><span className="italic font-normal">We\u2019ll Help You Plan the Order.</span>
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              Looking for paper dona or paper plates in bulk? Share your product requirement, approximate quantity and delivery location. Sahlok Eco Products can then respond with current wholesale pricing and availability.
            </p>
            <div className="w-full bg-white border border-stone p-4 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider text-muted">
                <div className="flex items-center gap-2">
                  <span className="text-brass">\u2713</span>
                  <span className="text-ink font-medium">6 Standard Sizes</span>
                </div>
                <div className="hidden sm:block text-stone">\u2022</div>
                <div className="flex items-center gap-2">
                  <span className="text-brass">\u2713</span>
                  <span className="text-ink font-medium">Custom GSM on Request</span>
                </div>
                <div className="hidden sm:block text-stone">\u2022</div>
                <div className="flex items-center gap-2">
                  <span className="text-brass">\u2713</span>
                  <span className="text-ink font-medium">Full & Partial Dispatch</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" href="#wholesale-form" className="w-full sm:w-auto">
                Start an Enquiry
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Button>
              <WhatsAppButton message="Hi Alok ji, inquiring about bulk paper dona supply from Mirzapur." label="Chat on WhatsApp" className="w-full sm:w-auto" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative bg-paper p-3 border border-stone">
              <EditorialImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdKbXGxep12laB722HRIv9R8H0TujrQlXq-c-CqkyAAbImZdrosQOTpv2BAq22HtsKhoL938Yy48RFpcwCAk7UglM_0PgM-zK_rC2_fAgtbgxsReysIKjQf6MVPwnTtjIQbgpzf9IuFMAnlHzn3GzyoMpgb4cqkqMPxBXlhgw4gvRphoQ2vO_KeWLA0oOwOAXP7-44EU9eePv4yCha-JvEVg-rJ8tz1QnLRsQxADo9fPSXnWH0ZwuKIQ"
                alt="Stacked natural Kraft paper dona bowls and pressed paper thali plates"
                aspectRatio="4/5"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 border border-stone">
                <div className="text-xs font-bold uppercase tracking-widest text-brass mb-1">Direct Mirzapur Production</div>
                <p className="font-serif text-sm italic text-ink">Uncoated natural Kraft pulp & certified food-safe lining pressed under calibrated thermal dies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BuyerTypeGrid />
      <QuantityTierGrid />

      <section className="py-16 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone" id="wholesale-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-2">BULK REQUIREMENT</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight mb-4">Let\u2019s Discuss Your Requirement</h2>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                The more detail you provide, the easier it is for us to understand your requirement and respond appropriately with live stock status, indicative dispatch timelines, and bulk trade rates.
              </p>
            </div>
            <div className="bg-white border border-stone p-6 space-y-4" id="direct-factory">
              <div className="flex items-center justify-between border-b border-stone pb-3">
                <div className="font-serif text-lg font-semibold text-ink">Factory Direct Desk</div>
                <span className="text-xs font-bold uppercase tracking-wider text-brass">Mirzapur Unit</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-brass text-lg">\u2713</span>
                  <div>
                    <span className="text-xs font-bold uppercase text-muted block">Desk Incharge</span>
                    <span className="text-ink font-medium">Alok Dwivedi (Owner)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brass text-lg">\u260e</span>
                  <div>
                    <span className="text-xs font-bold uppercase text-muted block">Call & WhatsApp Direct</span>
                    <a className="text-ink font-semibold hover:text-brick transition-colors" href={`tel:${siteConfig.contact.phoneDisplay.replace(/\s/g, '')}`}>{siteConfig.contact.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brass text-lg">\u2709</span>
                  <div>
                    <span className="text-xs font-bold uppercase text-muted block">Manufacturing Unit</span>
                    <p className="text-ink">Civil Line Road, Saripur Jalalpur, Mirzapur - 231001, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brass text-lg">\u23F1</span>
                  <div>
                    <span className="text-xs font-bold uppercase text-muted block">Operating Hours</span>
                    <p className="text-ink">Monday \u2013 Saturday: 08:30 AM \u2013 07:30 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-paper border border-stone p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-emerald-700 text-2xl">\u2713</span>
                <h3 className="font-serif text-lg font-semibold text-ink">Need Immediate Quotation?</h3>
              </div>
              <p className="text-muted text-sm mb-4">
                Skip typing lengthy forms. Send your specifications, carton counts or sample pictures directly to our wholesale WhatsApp number.
              </p>
              <WhatsAppButton message="Hello Alok ji, I need a bulk quote for paper dona/plates." label="Open WhatsApp Chat (+91 87872 01971)" className="w-full" />
            </div>
            <div className="border border-stone bg-white p-3">
              <EditorialImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkC82zRd44OOm2HKU5eywRPucyKMb9g63lqdtfD5N0sfhlUTs_Dkbk4ORi92ENVgCNIgASFbNAJmsTvi0IcUcO66lkTXe4zqziJrGDYM0RTZF9mVsZLwx26efalnyA8m4BrHS4k_LQiP_1rRFN9iITuNEdkl1SIpZ2-s55Ew3ygb4bYzH9U-ILcFNgz-Zvfokbo-Y0XJcggVozuavyLmWB7U28Wez-naSA3Yf4NHmGjxAA1QbtJg_QeA"
                alt="Close up of Kraft paper dona and shallow bowls"
                caption="Quality Grade: 100-180 GSM Kraft \u00b7 Mirzapur Dispatched"
                aspectRatio="16/9"
              />
            </div>
          </div>
          <div className="lg:col-span-7 bg-white border border-stone p-6 sm:p-10 shadow-sm relative" id="wholesale-form">
            <div className="border-b border-stone pb-4 mb-6">
              <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-2">B2B INQUIRY SPECIFICATION</div>
              <h3 className="font-serif text-2xl text-ink font-semibold mt-1">Wholesale Supply Request</h3>
              <p className="text-xs text-muted mt-1">Required fields marked with (*). Trade quotes are shared via WhatsApp or phone call.</p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <EnquiryProcessSteps />

      <section className="py-16 md:py-20 px-6 lg:px-8 bg-ink text-paper border-y border-stone">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="text-brass text-xs font-bold uppercase tracking-widest mb-2">Direct Phone & Chat Desk</div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal mb-3">Prefer WhatsApp for Quick Orders?</h2>
            <p className="text-stone/80 text-sm md:text-base leading-relaxed">
              Send your product requirement directly to our wholesale desk for immediate response. We share stock availability, photo verification, and freight estimates in real-time.
            </p>
          </div>
          <div className="flex-shrink-0">
            <WhatsAppButton
              message="Hi Alok ji, I need quick bulk wholesale rates for paper dona and plates."
              label="CHAT ON WHATSAPP (+91 87872 01971)"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
