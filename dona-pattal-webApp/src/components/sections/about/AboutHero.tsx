import { Button } from '@/components/ui/Button';
import { EditorialImage } from '@/components/ui/EditorialImage';

export function AboutHero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-stone/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold mb-4">ABOUT SAHLOK</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-ink leading-[1.12] mb-6 tracking-tight">
              From Mirzapur, Building a Paper Tableware Supply Business.
            </h1>
            <p className="font-sans text-base lg:text-lg text-muted leading-relaxed max-w-2xl mb-8 font-light">
              Sahlok Eco Products is an emerging B2B supplier focused on paper dona, paper plates and food-service tableware. Starting from Mirzapur, the business is building a focused product range for wholesalers, distributors, caterers, restaurants, food businesses and other bulk buyers across India.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/products">EXPLORE OUR PRODUCTS</Button>
              <Button variant="secondary" href="/contact">WHOLESALE ENQUIRY</Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-stone/40">
              <div>
                <p className="font-serif text-2xl font-bold text-ink">Mirzapur</p>
                <p className="font-sans text-[11px] uppercase tracking-wider text-muted mt-1">Manufacturing Base, UP</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-ink">100% Paper</p>
                <p className="font-sans text-[11px] uppercase tracking-wider text-muted mt-1">Natural Unbleached Pulp</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-ink">Direct B2B</p>
                <p className="font-sans text-[11px] uppercase tracking-wider text-muted mt-1">Bulk Carton Distribution</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-3 border border-stone shadow-sm">
              <div className="aspect-[4/5] overflow-hidden relative">
                <EditorialImage
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw5UtKT188lQpJqO8Il9Tgss68LBynCC_9-bbtaB_IoJXb0vA59BESk3t62Xh9qcwPAMzq2YhlDlRjGRpHUB8g15nYuoTj2jX3J3_7v-cZAuRKDEj9iASE8xVZ_Ekr-UdpbtX0eNvCRElbTEAvHzEmy-TpJhkjRIEFzbuDuvd2d_q9I57XH6H5RgqffV-YMHrxhFD_TBuFpNvHhOCWv21OrnYH0eZobh-z3ufmTqIio2nM2PU0W9ZW9Q"
                  alt="Stacked natural unbleached kraft paper dona bowls and plates"
                  aspectRatio="4/5"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-ink/90 backdrop-blur-sm text-paper font-sans text-[10px] uppercase tracking-widest px-3 py-1.5 border border-stone/30">
                    Mirzapur-Based Emerging B2B Tableware Supply
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
