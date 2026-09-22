import { Product } from '@/content/products';

interface ProductSpecTableProps {
  product: Product;
  className?: string;
}

export function ProductSpecTable({ product, className = '' }: ProductSpecTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-xs text-left">
        <tbody className="divide-y divide-stone/40">
          <tr>
            <th className="py-2.5 font-semibold text-muted w-1/3">Nominal Diameter:</th>
            <td className="py-2.5 text-ink font-medium">{product.size}</td>
          </tr>
          <tr>
            <th className="py-2.5 font-semibold text-muted">Category:</th>
            <td className="py-2.5 text-ink font-medium capitalize">{product.category}</td>
          </tr>
          <tr>
            <th className="py-2.5 font-semibold text-muted">Base Material:</th>
            <td className="py-2.5 text-ink font-medium">Food-grade Paper Tableware</td>
          </tr>
          <tr>
            <th className="py-2.5 font-semibold text-muted">Indicative GSM:</th>
            <td className="py-2.5 text-ink font-medium">{product.gsm}</td>
          </tr>
          <tr>
            <th className="py-2.5 font-semibold text-muted">Standard Pack:</th>
            <td className="py-2.5 text-ink font-medium">{product.packSize}</td>
          </tr>
          <tr>
            <th className="py-2.5 font-semibold text-muted">Carton Packing:</th>
            <td className="py-2.5 text-ink font-medium">Transport corrugated master cartons</td>
          </tr>
          <tr>
            <th className="py-2.5 font-semibold text-muted">Origin Facility:</th>
            <td className="py-2.5 text-ink font-medium">Mirzapur, Uttar Pradesh (India)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}