import { SectionHeading } from '@/components/ui/SectionHeading';

export function ApproachSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-stone/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-14">
          <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold mb-2 block">OUR APPROACH</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink">Wholesale First. Product Focused. Built Step by Step.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-t-2 border-brick pt-6 bg-white/60 p-6 border-x border-b border-stone/40">
            <span className="font-bold text-xs uppercase tracking-widest text-brass font-bold mb-2 block">01 / DISCIPLINE</span>
            <h3 className="font-serif text-xl text-ink mb-3">FOCUSED RANGE</h3>
            <p className="font-sans text-xs text-muted leading-relaxed font-light">
              Start with a clear range of paper dona and plates rather than an unnecessarily large catalogue. Perfect the cut, rim stiffness, and packing density first.
            </p>
          </div>
          <div className="border-t-2 border-brick pt-6 bg-white/60 p-6 border-x border-b border-stone/40">
            <span className="font-bold text-xs uppercase tracking-widest text-brass font-bold mb-2 block">02 / LOGISTICS</span>
            <h3 className="font-serif text-xl text-ink mb-3">WHOLESALE ORIENTED</h3>
            <p className="font-sans text-xs text-muted leading-relaxed font-light">
              Design the supply process around business buyers and bulk requirements. Standardized corrugation eliminates freight crush losses over bumpy regional transit.
            </p>
          </div>
          <div className="border-t-2 border-brick pt-6 bg-white/60 p-6 border-x border-b border-stone/40">
            <span className="font-bold text-xs uppercase tracking-widest text-brass font-bold mb-2 block">03 / ACCESSIBILITY</span>
            <h3 className="font-serif text-xl text-ink mb-3">DIRECT CONVERSATION</h3>
            <p className="font-sans text-xs text-muted leading-relaxed font-light">
              Make it easy for buyers to discuss quantity, product requirements and pricing directly. No call centers; speak straight with desk leadership.
            </p>
          </div>
          <div className="border-t-2 border-brick pt-6 bg-white/60 p-6 border-x border-b border-stone/40">
            <span className="font-bold text-xs uppercase tracking-widest text-brass font-bold mb-2 block">04 / EXPANSION</span>
            <h3 className="font-serif text-xl text-ink mb-3">BUILDING FROM MIRZAPUR</h3>
            <p className="font-sans text-xs text-muted leading-relaxed font-light">
              Start locally while developing a wider B2B supply network across India. Fostering steady relationships with freight partners across central highways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}