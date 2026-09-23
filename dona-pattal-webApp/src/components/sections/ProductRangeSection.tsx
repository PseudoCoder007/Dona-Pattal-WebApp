import { products } from '@/content/products';
import { ProductGrid } from '@/components/sections/product/ProductGrid';
import { Button } from '@/components/ui/Button';

export function ProductRangeSection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 border-b border-stone bg-paper/50" id="products">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <span className="text-xs tracking-[0.25em] font-bold text-brick uppercase">PRODUCT RANGE</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-ink">Paper Tableware for Everyday Bulk Supply</h2>
            <p className="text-sm text-muted max-w-2xl">
              Common sizes for food service, catering, retail and distribution. Ask us for current availability, specifications and wholesale pricing.
            </p>
          </div>
          <Button variant="secondary" href="/wholesale" className="whitespace-nowrap">
            Request Bulk Pricing Details →
          </Button>
        </div>
        <ProductGrid products={products} />
        <div className="p-4 bg-paper rounded border border-stone text-xs text-muted flex items-start gap-2.5">
          <span className="text-brick font-bold">*</span>
          <p>
            <strong className="text-ink">Note:</strong> GSM and pack quantities are current working/indicative specifications. Custom sizes and specifications available on enquiry. Contact our Mirzapur facility desk for exact carton counts and sample packs.
          </p>
        </div>
      </div>
    </section>
  );
}
