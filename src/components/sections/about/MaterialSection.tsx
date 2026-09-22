export function MaterialSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-stone/50 bg-stone/15">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold mb-3 block">THE MATERIAL</span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ink mb-6">Simple Materials. Practical Applications.</h2>
        <p className="font-sans text-base lg:text-lg text-muted max-w-3xl mx-auto leading-relaxed font-light mb-12">
          We do not claim magical synthetic shortcuts. We rely on certified virgin and food-grade paperboard pressed under strict hydraulic tonnage. It is simple, dependable cellulose engineered to serve Indian culinary traditions without mess, odor, or fuss.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="border border-stone bg-white p-5">
            <span className="text-2xl mb-2" aria-hidden="true">\uD83C\uDF74</span>
            <h4 className="font-serif text-base font-semibold text-ink mb-1">Serving & Dining</h4>
            <p className="text-xs text-muted font-light leading-relaxed">Built with thermal resistance suited for freshly fried snacks, steaming dal, and hot puri-sabzi.</p>
          </div>
          <div className="border border-stone bg-white p-5">
            <span className="text-2xl mb-2" aria-hidden="true">\uD83D\uDCCF</span>
            <h4 className="font-serif text-base font-semibold text-ink mb-1">Rigid Fluting</h4>
            <p className="text-xs text-muted font-light leading-relaxed">Crimped concentric perimeter rings ensure structural integrity even when held with one hand in crowds.</p>
          </div>
          <div className="border border-stone bg-white p-5">
            <span className="text-2xl mb-2" aria-hidden="true">\uD83D\uDCE6</span>
            <h4 className="font-serif text-base font-semibold text-ink mb-1">Compact Nesting</h4>
            <p className="text-xs text-muted font-light leading-relaxed">High nesting density saves valuable storage space for roadside carts, caterers, and distribution sheds.</p>
          </div>
          <div className="border border-stone bg-white p-5">
            <span className="text-2xl mb-2" aria-hidden="true">\u267B\uFE0F</span>
            <h4 className="font-serif text-base font-semibold text-ink mb-1">Clean Disposal</h4>
            <p className="text-xs text-muted font-light leading-relaxed">100% repulpable kraft and unbleached paper fibers decompose naturally without persistent plastic residue.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
