const journeySteps = [
  { number: '01', title: 'MATERIAL', desc: 'Raw food-grade kraft rolls enter the Mirzapur facility, inspected for surface purity and consistent moisture content.', footer: 'Inward Verification' },
  { number: '02', title: 'FORMING', desc: 'Paper is formed under heated precision dies into the designated dona or shallow plate format with clean, pressed crimps.', footer: 'Mechanical Pressing' },
  { number: '03', title: 'FINISHING', desc: 'Formed products undergo manual and visual check for edge regularity, rim depth, and clean stacking nesting.', footer: 'Batch Quality Inspection' },
  { number: '04', title: 'PACKING', desc: 'Products are nested tightly in moisture-resistant inner liners and sealed in heavy 5-ply corrugated shipper boxes.', footer: 'Corrugated Cartons' },
  { number: '05', title: 'DISPATCH', desc: 'Orders move toward the buyer according to the agreed supply arrangement via regional transport desks.', footer: 'Highway Transit' },
];

export function ProductJourneySection() {
  return (
    <section className="py-20 lg:py-28 border-b border-stone/50 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold mb-2 block">THE PRODUCT JOURNEY</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink">From Paper Roll to Delivered Carton</h2>
          <p className="text-muted text-sm font-light mt-2">Methodical handling at every phase to guarantee batch uniformity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {journeySteps.map((step) => (
            <div key={step.number} className="p-5 bg-white border border-stone flex flex-col justify-between">
              <div>
                <span className="font-serif text-2xl font-bold text-brick mb-2 block">{step.number}</span>
                <h4 className="font-bold text-xs uppercase tracking-widest font-bold text-ink mb-2">{step.title}</h4>
                <p className="text-xs text-muted font-light leading-relaxed">{step.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone/30 text-[10px] text-brass uppercase font-semibold">{step.footer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
