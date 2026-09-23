import { EditorialImage } from '@/components/ui/EditorialImage';

export function FactoryDirectBanner() {
  return (
    <section className="py-12 px-6 lg:px-8 max-w-7xl mx-auto border-b border-stone">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] font-bold text-brick uppercase mb-3">
            <span className="w-5 h-[1.5px] bg-brass inline-block" />
            FACTORY DIRECT BANNER
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink">Direct from Mirzapur to Your Doorstep</h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            Skip intermediaries. Order directly from our Mirzapur manufacturing unit for consistent quality, competitive pricing, and reliable dispatch timelines across India.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-muted">
            <li className="flex items-center gap-2"><span className="text-brass">•</span>No middleman markup</li>
            <li className="flex items-center gap-2"><span className="text-brass">•</span>Real-time stock visibility</li>
            <li className="flex items-center gap-2"><span className="text-brass">•</span>Custom GSM on request</li>
          </ul>
        </div>
        <div className="relative rounded-lg overflow-hidden border border-stone">
          <EditorialImage
            src="/images/products/12-inch-plate.png"
            alt="Stack of kraft paper plates ready for dispatch from Mirzapur"
            caption="MIRZAPUR DISPATCH READY"
            aspectRatio="4/3"
          />
        </div>
      </div>
    </section>
  );
}
