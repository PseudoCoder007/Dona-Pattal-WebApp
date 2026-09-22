import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactInfoGrid } from '@/components/sections/contact/ContactInfoGrid';
import { WhatsAppBanner } from '@/components/sections/contact/WhatsAppBanner';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ProductsShortcut } from '@/components/sections/contact/ProductsShortcut';
import { LocationSection } from '@/components/sections/contact/LocationSection';
import { BuyerCtaSection } from '@/components/sections/contact/BuyerCtaSection';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoGrid />
      <WhatsAppBanner />
      <section className="py-16 md:py-24 border-b border-stone bg-paper" id="contact-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold">SEND AN ENQUIRY</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">Tell Us What You Need</h2>
            <p className="text-sm sm:text-base text-muted mt-2">Fill out your requirement below and we will respond regarding current product availability, carton packaging, and wholesale pricing.</p>
          </div>
          <div className="bg-white p-8 sm:p-10 border border-stone rounded-lg shadow-sm relative">
            <ContactForm />
          </div>
        </div>
      </section>
      <ProductsShortcut />
      <LocationSection />
      <BuyerCtaSection />
    </>
  );
}