import { products } from '@/content/products';
import { EditorialImage } from '@/components/ui/EditorialImage';
import { Button } from '@/components/ui/Button';

const previewProducts = products.slice(0, 3);

export function ProductsShortcut() {
  return (
    <section className="py-16 md:py-24 border-b border-stone bg-paper" id="products-shortcut">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-bold uppercase tracking-[0.14em] text-brass text-xs font-semibold">NOT SURE WHAT TO ASK FOR?</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink mt-1">Explore the Current Product Range.</h2>
            <p className="text-sm sm:text-base text-muted mt-2 max-w-xl">Browse the available paper dona and paper plate sizes before sending your requirement to ensure the right GSM, diameter, and carton packing for your vendors.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" href="/products" className="text-xs">VIEW PRODUCTS →</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewProducts.map((product) => (
            <div key={product.slug} className="bg-white border border-stone rounded-lg p-4 group hover:border-brick transition-all">
              <div className="aspect-[4/3] bg-paper/60 rounded overflow-hidden mb-4 relative">
                <EditorialImage
                  src={product.image}
                  alt={product.name}
                  aspectRatio="4/3"
                />
                <span className="absolute top-2 left-2 bg-ink/80 text-paper text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded">{product.use.split(' ')[0].toUpperCase()}</span>
              </div>
              <span className="font-bold uppercase tracking-[0.14em] text-brass text-[10px]">DIAMETER: {product.size.split(' ')[0].toUpperCase()}</span>
              <h3 className="font-serif text-lg font-bold text-ink mt-0.5">{product.name}</h3>
              <p className="text-xs text-muted mt-1.5 line-clamp-2">{product.description}</p>
              <div className="mt-4 pt-3 border-t border-stone/40 flex items-center justify-between text-xs">
                <span className="font-medium text-ink">{product.packSize}</span>
                <Button variant="secondary" href="/contact" className="text-xs">Enquire</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="secondary" href="/wholesale">WHOLESALE ENQUIRY →</Button>
        </div>
      </div>
    </section>
  );
}
