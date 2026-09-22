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
            <li className="flex items-center gap-2"><span className="text-brass">\u2022</span>No middleman markup</li>
            <li className="flex items-center gap-2"><span className="text-brass">\u2022</span>Real-time stock visibility</li>
            <li className="flex items-center gap-2"><span className="text-brass">\u2022</span>Custom GSM on request</li>
          </ul>
        </div>
        <div className="relative rounded-lg overflow-hidden border border-stone">
          <EditorialImage
            src="https://lh3.googleusercontent.com/aida/AEtjO1WpKQ1bfNwlANhqKH-_eeoFBdqGZFUv98ipjMEULNuq7twoG0-tDO4Az35Ull5pdy7fVtQ9N4-YZYBGUhaAt1qqERwaxrdFDABK6-EyTFPKAQTomTmRQYkSf8s3hDEl2MR5hrzVSJkoWrjxETBPs5J3leMgmXjCq7h81XgRs9VTOY_UGQGkIU2F_3bPRDwLP2emCkZYFhSN3lySWL4ec967r4eU8_jMdNZ0eLBZzsy7253iLSrHw4mznV3p"
            alt="Sahlok Eco Products factory interior with paper manufacturing equipment"
            caption="MIRZAPUR MANUFACTURING UNIT"
            aspectRatio="4/3"
          />
        </div>
      </div>
    </section>
  );
}
