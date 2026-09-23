import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/content/products';
import { ProductSpecTable } from '@/components/product/ProductSpecTable';
import { EditorialImage } from '@/components/ui/EditorialImage';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} Wholesale | Sahlok Eco Products`,
    description: `${product.name} - ${product.use}. ${product.gsm}, ${product.packSize}. Bulk pricing from Mirzapur.`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      <section className="relative pt-10 pb-16 lg:py-20 px-6 lg:px-8 border-b border-stone overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 min-w-0">
            <EditorialImage
              src={product.image}
              alt={product.name}
              badge={product.category === 'dona' ? 'Paper Dona' : 'Paper Plates'}
              caption={`${product.name} · ${product.use}`}
              aspectRatio="4/3"
            />
          </div>
          <div className="lg:col-span-5 space-y-6 min-w-0">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs tracking-[0.2em] text-brick font-extrabold uppercase">SAHLOK ECO PRODUCTS LLP</span>
                <span className="text-stone">·</span>
                <span className="text-xs tracking-[0.16em] text-muted uppercase font-semibold">{product.category === 'dona' ? 'PAPER DONA' : 'PAPER PLATES'}</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-[1.12] tracking-tight">{product.name}</h1>
            <p className="text-base text-ink/80 leading-relaxed">{product.description}</p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" href="/wholesale">GET BULK PRICING</Button>
              <WhatsAppButton message={product.whatsappMessage} label="CHAT ON WHATSAPP" />
            </div>
            <div className="pt-4 border-t border-stone flex flex-wrap gap-2 text-[11px] font-semibold text-muted">
              <span className="px-2.5 py-1 bg-paper rounded border border-stone/50">Mirzapur Facility</span>
              <span className="px-2.5 py-1 bg-paper rounded border border-stone/50">Direct B2B Supply</span>
              <span className="px-2.5 py-1 bg-paper rounded border border-stone/50">Custom GSM Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-8 bg-paper/60 border-y border-stone">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs tracking-[0.25em] font-bold text-brick uppercase mb-2">TECHNICAL SPECIFICATIONS</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-bold">Factory Specification Deep-Dive</h2>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-stone p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4">
                <EditorialImage
                  src={product.image}
                  alt={product.name}
                  aspectRatio="4/3"
                  hoverZoom
                />
              </div>
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-brass/15 text-brass text-[11px] font-bold uppercase tracking-wider rounded border border-brass/30">
                      B2B Wholesale Specification
                    </span>
                    <span className="text-xs text-muted">SKU: {product.id.toUpperCase()}</span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink">{product.name}</h3>
                  <p className="text-base text-brick font-medium mt-1 mb-2">{product.use}</p>
                  <div className="text-xs text-muted mb-6 pb-4 border-b border-stone/60 flex items-center gap-2">
                    <span className="font-semibold text-ink">Suitable for:</span>
                    <span>{product.use}</span>
                  </div>
                  <ProductSpecTable product={product} />
                  <div className="mt-4 p-3 bg-paper rounded text-xs text-muted flex items-center gap-2 border border-stone/60">
                    <svg className="w-4 h-4 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 2 16.828 5.828 17.657 7.657A8 8 0 117.343 17.343z"/></svg>
                    <span>Bulk quantities available on enquiry. Regular dispatch across India.</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="primary" href="/wholesale" className="flex-1">Get Bulk Pricing</Button>
                  <WhatsAppButton message={product.whatsappMessage} label="Chat On WhatsApp" className="flex-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
