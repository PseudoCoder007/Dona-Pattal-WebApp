import { SectionHeading } from '@/components/ui/SectionHeading';
import { EditorialImage } from '@/components/ui/EditorialImage';
import { Button } from '@/components/ui/Button';

export function MirzapurSection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 border-b border-stone bg-paper/60" id="mirzapur">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="col-span-12 lg:col-span-7 relative">
          <div className="relative rounded-lg overflow-hidden border border-stone shadow-lg bg-white">
            <EditorialImage
              src="https://lh3.googleusercontent.com/aida/AEtjO1WpKQ1bfNwlANhqKH-_eeoFBdqGZFUv98ipjMEULNuq7twoG0-tDO4Az35Ull5pdy7fVtQ9N4-YZYBGUhaAt1qqERwaxrdFDABK6-EyTFPKAQTomTmRQYkSf8s3hDEl2MR5hrzVSJkoWrjxETBPs5J3leMgmXjCq7h81XgRs9VTOY_UGQGkIU2F_3bPRDwLP2emCkZYFhSN3lySWL4ec967r4eU8_jMdNZ0eLBZzsy7253iLSrHw4mznV3p"
              alt="Sahlok Eco Products manufacturing workshop in Mirzapur Uttar Pradesh"
              aspectRatio="4/3"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-ink/90 text-white p-4 rounded-sm backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-white/10">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-paper">Mirzapur Facility</p>
                <p className="text-xs text-paper/75 mt-0.5">Civil Line Road, Saripur Jalalpur \u00b7 Wholesale Supply Line</p>
              </div>
              <span className="inline-flex self-start sm:self-auto px-2.5 py-1 bg-brick text-[10px] font-bold uppercase tracking-wider rounded-sm text-white">
                B2B Production
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] font-bold text-brick uppercase">MIRZAPUR CONNECTION</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">Starting from Mirzapur. Supplying Across India.</h2>
          </div>
          <p className="text-sm leading-relaxed text-ink/80">
            Sahlok Eco Products is starting its wholesale journey from Mirzapur, Uttar Pradesh, with a focus on practical paper tableware for businesses that buy in bulk. From Mirzapur to buyers across India \u2014 we welcome enquiries from regional wholesalers, distributors, catering agencies and institutions.
          </p>
          <div className="pt-3 border-t border-stone">
            <Button variant="secondary" href="/wholesale" className="text-xs">
              Enquire About Wholesale Dispatch \u2192
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}