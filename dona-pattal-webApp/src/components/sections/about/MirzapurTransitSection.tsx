export function MirzapurTransitSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-stone/50" id="mirzapur">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold mb-3 block">MIRZAPUR, UTTAR PRADESH</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink leading-tight mb-6">Starting Local. Thinking Beyond the Local Market.</h2>
            <p className="font-sans text-base text-muted leading-relaxed font-light mb-6">
              Mirzapur is the starting point for Sahlok&apos;s business journey. The aim is to develop a practical B2B supply network from here and gradually serve buyers in markets across India.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed font-light mb-8">
              Strategically positioned on the National Highway 135 and connected straight into the Golden Quadrilateral corridor via Varanasi and Prayagraj, our dispatches reach key northern trading hubs within 24 to 48 hours.
            </p>
            <div className="p-4 bg-white border border-stone space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-ink border-b border-stone/40 pb-2">Active Freight Routes · Eastern UP Hub</div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                <span className="px-2.5 py-1 bg-paper border border-stone/60 text-ink">Mirzapur</span>
                <span className="text-brass font-bold">→</span>
                <span className="px-2.5 py-1 bg-paper border border-stone/60 text-ink">Varanasi (55 km)</span>
                <span className="text-brass font-bold">→</span>
                <span className="px-2.5 py-1 bg-paper border border-stone/60 text-ink">Prayagraj (85 km)</span>
                <span className="text-brass font-bold">→</span>
                <span className="px-2.5 py-1 bg-paper border border-stone/60 text-ink">Patna</span>
                <span className="text-brass font-bold">→</span>
                <span className="px-2.5 py-1 bg-paper border border-stone/60 text-ink">Lucknow</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-white p-4 border border-stone">
              <div className="bg-ink text-paper p-8 flex flex-col justify-between min-h-[360px] relative overflow-hidden">
                <div>
                  <span className="font-bold text-xs uppercase tracking-widest text-brass block mb-2">Transit Hub Overview</span>
                  <h3 className="font-serif text-3xl font-light text-paper">Purvanchal Freight Corridor</h3>
                  <p className="text-xs text-stone/80 mt-3 font-light max-w-sm leading-relaxed">
                    Direct access to Grand Trunk freight arteries allows prompt LTL (Less-Than-Truckload) and dedicated vehicle dispatch for major mandi distributors.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-stone/20 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brass block">Regional Dispatches</span>
                    <span className="font-serif text-xl text-paper font-semibold">Same-Day / T+1</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brass block">Inter-State Cargo</span>
                    <span className="font-serif text-xl text-paper font-semibold">T+2 to T+4 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
