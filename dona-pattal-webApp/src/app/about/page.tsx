import { AboutHero } from '@/components/sections/about/AboutHero';
import { ProductFocusSection } from '@/components/sections/about/ProductFocusSection';
import { MaterialSection } from '@/components/sections/about/MaterialSection';
import { ApproachSection } from '@/components/sections/about/ApproachSection';
import { BuyerSegmentsSection } from '@/components/sections/about/BuyerSegmentsSection';
import { MirzapurTransitSection } from '@/components/sections/about/MirzapurTransitSection';
import { ProductJourneySection } from '@/components/sections/about/ProductJourneySection';
import { BrandStatementSection } from '@/components/sections/about/BrandStatementSection';
import { ClosingCtaSection } from '@/components/sections/about/ClosingCtaSection';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProductFocusSection />
      <MaterialSection />
      <ApproachSection />
      <BuyerSegmentsSection />
      <MirzapurTransitSection />
      <ProductJourneySection />
      <BrandStatementSection />
      <ClosingCtaSection />
    </>
  );
}