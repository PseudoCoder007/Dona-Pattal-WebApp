import { EditorialImage } from '@/components/ui/EditorialImage';
import { Button } from '@/components/ui/Button';

export function ProductFocusSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-stone/50" id="products">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold mb-2 block">OUR PRODUCT FOCUS</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-ink tracking-tight">A Focused Range. Built Around Everyday Food Service.</h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="secondary" href="/contact" className="text-xs">Request Specs & GSM Sheets →</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-stone p-6 flex flex-col justify-between group hover:border-brick transition-all duration-300">
            <div>
              <div className="aspect-square bg-paper overflow-hidden mb-6 border border-stone/30">
                <EditorialImage
                  src="/images/products/6-inch-dona.png"
                  alt="Stack of kraft paper dona bowls, natural brown color"
                  aspectRatio="1/1"
                />
              </div>
              <span className="font-bold text-[11px] uppercase tracking-widest text-brass font-semibold">Product Line 01</span>
              <h3 className="font-serif text-2xl text-ink mt-1 mb-3">PAPER DONA</h3>
              <p className="font-sans text-sm text-muted leading-relaxed font-light mb-4">
                For sweets, snacks, chaat and selected food-service applications. Designed with mechanical fluted ridges for structural rigidity with hot and liquid gravies.
              </p>
              <ul className="text-xs text-ink space-y-1.5 font-bold tracking-wide border-t border-stone/30 pt-3">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brick" />4&quot; Mini Dona (Chaat, Prasad, Chutney)</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brick" />6&quot; Deep Dona (Curry, Gravy, Gulab Jamun)</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone/30">
              <span className="text-xs text-muted block font-light">Carton counts: 2,000 to 5,000 units</span>
            </div>
          </div>
          <div className="bg-white border border-stone p-6 flex flex-col justify-between group hover:border-brick transition-all duration-300">
            <div>
              <div className="aspect-square bg-paper overflow-hidden mb-6 border border-stone/30">
                <EditorialImage
                  src="/images/products/8-inch-plate.png"
                  alt="Stack of kraft paper plates for meals and food service"
                  aspectRatio="1/1"
                />
              </div>
              <span className="font-bold text-[11px] uppercase tracking-widest text-brass font-semibold">Product Line 02</span>
              <h3 className="font-serif text-2xl text-ink mt-1 mb-3">PAPER PLATES</h3>
              <p className="font-sans text-sm text-muted leading-relaxed font-light mb-4">
                A range of sizes for snacks, meals, catering and events. Heavy-gauge rim pressing holds wet items, preventing accidental buckling during self-serve dining.
              </p>
              <ul className="text-xs text-ink space-y-1.5 font-bold tracking-wide border-t border-stone/30 pt-3">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brick" />7&quot; &amp; 8&quot; Tiffin Plates</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brick" />10&quot; &amp; 12&quot; Meal &amp; Banquet Pattal</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone/30">
              <span className="text-xs text-muted block font-light">Custom GSM available for caterers</span>
            </div>
          </div>
          <div className="bg-white border border-stone p-6 flex flex-col justify-between group hover:border-brick transition-all duration-300">
            <div>
              <div className="aspect-square bg-paper overflow-hidden mb-6 border border-stone/30">
                <EditorialImage
                  src="/images/products/10-inch-plate.png"
                  alt="Large stack of kraft paper plates ready for bulk dispatch"
                  aspectRatio="1/1"
                />
              </div>
              <span className="font-bold text-[11px] uppercase tracking-widest text-brass font-semibold">Trade Protocol 03</span>
              <h3 className="font-serif text-2xl text-ink mt-1 mb-3">BULK SUPPLY</h3>
              <p className="font-sans text-sm text-muted leading-relaxed font-light mb-4">
                Products presented around the requirements of wholesalers, distributors, caterers and other business buyers. Predictable box weights and standardized outer labels.
              </p>
              <ul className="text-xs text-ink space-y-1.5 font-bold tracking-wide border-t border-stone/30 pt-3">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brick" />Direct truckloads & partial freight (LTL)</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-brick" />Consignment tracking directly from Mirzapur</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-stone/30">
              <Button variant="secondary" href="/contact" className="text-xs block text-center">VIEW PRODUCT RANGE →</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
