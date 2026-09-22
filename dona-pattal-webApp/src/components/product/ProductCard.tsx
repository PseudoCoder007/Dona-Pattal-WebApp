import Image from 'next/image';
import { Product } from '@/content/products';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <article
      data-testid="product-card"
      className={`bg-white rounded border border-stone overflow-hidden hover:shadow-lg transition-all flex flex-col group ${className}`}
    >
      <div className="h-52 bg-paper overflow-hidden relative">
        <Image
          alt={product.name}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          src={product.image}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-sm text-ink border border-stone/30">
          {product.category === 'dona' ? 'Paper Dona' : 'Paper Plates'}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] font-semibold text-brass uppercase tracking-wider">{product.use}</span>
          <h3 className="text-lg font-bold text-ink mt-0.5">{product.name}</h3>
          <div className="mt-2.5 p-2 bg-paper/60 rounded text-xs text-muted border border-stone/60">
            <span className="font-medium text-ink">Indicative Spec:</span> {product.gsm} \u00b7 Pack: {product.packSize}
          </div>
        </div>
        <div className="pt-3 border-t border-stone flex items-center justify-between">
          <span className="text-[11px] text-muted font-medium">Bulk Supply Available</span>
          <WhatsAppButton message={product.whatsappMessage} label="Ask for this size \u2192" />
        </div>
      </div>
    </article>
  );
}
