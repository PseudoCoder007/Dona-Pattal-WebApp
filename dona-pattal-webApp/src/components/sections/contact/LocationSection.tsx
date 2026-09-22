import { Button } from '@/components/ui/Button';

export function LocationSection() {
  return (
    <section className="py-16 md:py-24 border-b border-stone bg-paper" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold">FIND SAHLOK</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1 tracking-tight">Starting From Mirzapur.</h2>
            <p className="text-sm sm:text-base text-muted mt-3 leading-relaxed">Operating right at the strategic manufacturing spine of Eastern Uttar Pradesh. Sahlok utilizes direct road connectivity to feed daily consignments to Varanasi, Prayagraj, Bhadohi, Jaunpur, and the wider Purvanchal market.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-brick text-xl" aria-hidden="true">\uD83D\uDCCD</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-ink">Manufacturing Address</h4>
                  <p className="text-sm text-muted">Civil Line Road, Saripur Jalalpur, Mirzapur - 231001, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-brass text-xl" aria-hidden="true">\uD83D\uDE9A</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-ink">Transit Corridor Connectivity</h4>
                  <p className="text-sm text-muted">Direct access to NH-135, Grand Trunk route links, and dedicated Purvanchal freight corridors for timely dispatch.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-ink text-xl" aria-hidden="true">\u23F1\uFE0F</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-ink">Dispatch Hours</h4>
                  <p className="text-sm text-muted">Loading & Logistics Desk: 09:00 AM \u2013 07:00 PM (Mon\u2013Sat)</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="ghost" href="https://maps.google.com/?q=Civil+Line+Road+Saripur+Jalalpur+Mirzapur+231001" target="_blank" rel="noopener noreferrer" className="w-full">
                <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                OPEN IN GOOGLE MAPS
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white p-4 border border-stone rounded-lg shadow-sm">
              <div className="relative w-full aspect-[16/10] bg-paper/60 rounded border border-stone/60 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2B2521 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10 w-full max-w-md">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone rounded-full text-xs font-semibold text-ink mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-brick" />
                    MIRZAPUR PRODUCTION HUB (231001)
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-left">
                    <div className="p-3 bg-white/90 border border-stone rounded text-xs">
                      <span className="block text-[10px] text-brass font-bold uppercase tracking-wider">East Route</span>
                      <strong className="text-ink block">Varanasi</strong>
                      <span className="text-[11px] text-muted">\u223c55 km \u00b7 Direct Express</span>
                    </div>
                    <div className="p-3 bg-white/90 border border-stone rounded text-xs">
                      <span className="block text-[10px] text-brass font-bold uppercase tracking-wider">West Route</span>
                      <strong className="text-ink block">Prayagraj</strong>
                      <span className="text-[11px] text-muted">\u223c85 km \u00b7 NH135 corridor</span>
                    </div>
                    <div className="p-3 bg-white/90 border border-stone rounded text-xs">
                      <span className="block text-[10px] text-brass font-bold uppercase tracking-wider">North Route</span>
                      <strong className="text-ink block">Lucknow / Bihar</strong>
                      <span className="text-[11px] text-muted">Purvanchal Freight</span>
                    </div>
                  </div>
                  <div className="mt-6 text-[11px] font-mono text-muted">Civil Line Road \u00b7 Saripur Jalalpur \u00b7 Mirzapur UP</div>
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-brass tracking-widest uppercase">GEO: 25.1337 N / 82.5644 E</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
