import { HeroSection } from '@/components/sections/HeroSection';
import { ProductRangeSection } from '@/components/sections/ProductRangeSection';
import { WhoWeSupplySection } from '@/components/sections/WhoWeSupplySection';
import { MaterialMakingSection } from '@/components/sections/MaterialMakingSection';
import { MirzapurSection } from '@/components/sections/MirzapurSection';
import { WholesaleCtaSection } from '@/components/sections/WholesaleCtaSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductRangeSection />
      <WhoWeSupplySection />
      <MaterialMakingSection />
      <MirzapurSection />
      <WholesaleCtaSection />
      <ContactSection />
    </>
  );
}