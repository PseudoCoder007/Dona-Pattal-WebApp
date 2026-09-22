import { SectionHeading } from '@/components/ui/SectionHeading';
import { EditorialImage } from '@/components/ui/EditorialImage';

const stages = [
  { number: '01', title: '01 SOURCING', desc: 'Food-grade paper reels selected for forming.' },
  { number: '02', title: '02 FORMING', desc: 'Precision die cutting into circular blanks.' },
  { number: '03', title: '03 PRESSING', desc: 'Hydraulic pressing & rim fluting into rigid shapes.' },
  { number: '04', title: '04 CHECKING', desc: 'Quality checked for strength & moisture resistance.' },
  { number: '05', title: '05 PACKING', desc: 'Hygienically packed for transport dispatch.' },
];

export function MaterialMakingSection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 border-b border-stone bg-paper/50" id="material">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs tracking-[0.25em] font-bold text-brick uppercase">MATERIAL & MAKING</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink">From Paper to Plate</h2>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            Paper is sourced, formed and finished for everyday food-service use. We are building our supply process around consistent products, practical specifications and dependable bulk fulfilment.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-stone -z-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage) => (
              <div key={stage.number} className="bg-white p-6 rounded border border-stone space-y-3 hover:border-brick transition-colors">
                <div className="w-12 h-12 rounded-full bg-paper border-2 border-brick text-brick font-serif font-bold text-base flex items-center justify-center">
                  {stage.number}
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink">{stage.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full rounded-lg overflow-hidden border border-stone shadow-lg bg-ink text-white">
          <div className="relative aspect-[16/9] max-h-[500px] w-full overflow-hidden">
            <EditorialImage
              src="https://lh3.googleusercontent.com/aida/AEtjO1WpKQ1bfNwlANhqKH-_eeoFBdqGZFUv98ipjMEULNuq7twoG0-tDO4Az35Ull5pdy7fVtQ9N4-YZYBGUhaAt1qqERwaxrdFDABK6-EyTFPKAQTomTmRQYkSf8s3hDEl2MR5hrzVSJkoWrjxETBPs5J3leMgmXjCq7h81XgRs9VTOY_UGQGkIU2F_3bPRDwLP2emCkZYFhSN3lySWL4ec967r4eU8_jMdNZ0eLBZzsy7253iLSrHw4mznV3p"
              alt="Sahlok Eco Products manufacturing workshop still photo in Mirzapur"
              aspectRatio="16/9"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-ink/90 via-transparent to-ink/30">
              <div className="w-16 h-16 rounded-full bg-brick text-white flex items-center justify-center shadow-xl mb-3">
                <svg className="w-6 h-6 ml-0.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <h3 className="text-lg lg:text-xl uppercase tracking-widest font-bold text-white">See How We Make It</h3>
              <p className="text-xs text-paper/80 mt-1 max-w-md">Inside our Mirzapur facility \u2014 paper forming and finishing operations.</p>
              <span className="mt-3 px-3 py-1 rounded bg-black/60 border border-white/20 text-[10px] uppercase font-bold tracking-wider text-amber-300">
                Production video coming soon
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-ink/90 backdrop-blur-sm py-3 px-6 border-t border-white/10 hidden md:block">
              <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-paper/80">
                <span className="text-amber-400 font-bold">Paper Reel</span>
                <span>\u2192</span>
                <span>Die Cutting</span>
                <span>\u2192</span>
                <span>Hydraulic Pressing</span>
                <span>\u2192</span>
                <span>Quality Check</span>
                <span>\u2192</span>
                <span className="text-emerald-400 font-bold">Carton Packaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}