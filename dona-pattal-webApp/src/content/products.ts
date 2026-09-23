import { productEnquiryMessage } from '@/lib/whatsapp';

export type ProductCategory = 'dona' | 'plate';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  size: string;
  use: string;
  gsm: string;
  packSize: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export const products: Product[] = [
  {
    id: '4-inch-dona',
    slug: '4-inch-dona',
    name: '4" Mini Paper Dona',
    category: 'dona',
    size: '4 inch (approx 100mm)',
    use: 'Sweets & dry snacks',
    gsm: '80–100 GSM',
    packSize: '100 pcs/pack',
    description:
      'Deep formed, leak-resistant heavy kraft paper dona for prasadam, dry snacks, and halwai distribution. Designed with mechanical fluted ridges for structural rigidity with hot and liquid gravies.',
    image: '/images/products/product-dona.jpg',
    whatsappMessage: productEnquiryMessage('4" Mini Paper Dona'),
  },
  {
    id: '6-inch-dona',
    slug: '6-inch-dona',
    name: '6" Paper Dona',
    category: 'dona',
    size: '6 inch (approx 150mm)',
    use: 'Chaat & curry bowls',
    gsm: '80–110 GSM',
    packSize: '100 pcs/pack',
    description:
      'High-frequency catering standard for chaat, poha, sabzi, and religious feast arrangements. Rigid base structure with deep rim for liquid-heavy foods.',
    image: '/images/products/product-dona.jpg',
    whatsappMessage: productEnquiryMessage('6" Paper Dona'),
  },
  {
    id: '7-inch-plate',
    slug: '7-inch-plate',
    name: '7" Paper Plate',
    category: 'plate',
    size: '7 inch (approx 175mm)',
    use: 'Snacks & light meals',
    gsm: '100–130 GSM',
    packSize: '100 pcs/pack',
    description:
      'Reinforced rim corrugation ensuring zero bend under oil or gravy load during community feasts. Food-grade barrier for safe serving.',
    image: '/images/products/product-plate.jpg',
    whatsappMessage: productEnquiryMessage('7" Paper Plate'),
  },
  {
    id: '8-inch-plate',
    slug: '8-inch-plate',
    name: '8" Paper Plate',
    category: 'plate',
    size: '8 inch (approx 200mm)',
    use: 'Full meals',
    gsm: '120–150 GSM',
    packSize: '100 pcs/pack',
    description:
      'Heavy-duty meal plate with reinforced rim corrugation. Holds hot poori bhaji, thali sides, and complete meals without buckling.',
    image: '/images/products/product-plate.jpg',
    whatsappMessage: productEnquiryMessage('8" Paper Plate'),
  },
  {
    id: '10-inch-plate',
    slug: '10-inch-plate',
    name: '10" Paper Plate',
    category: 'plate',
    size: '10 inch (approx 250mm)',
    use: 'Buffets & parties',
    gsm: '150–180 GSM',
    packSize: '100 pcs/pack',
    description:
      'Buffet-format plate with raised containment wall. Ideal for wedding catering, corporate events, and party servings.',
    image: '/images/products/product-plate.jpg',
    whatsappMessage: productEnquiryMessage('10" Paper Plate'),
  },
  {
    id: '12-inch-plate',
    slug: '12-inch-plate',
    name: '12" Paper Plate',
    category: 'plate',
    size: '12 inch (approx 300mm)',
    use: 'Banquets & bulk catering',
    gsm: '180–220 GSM',
    packSize: '50 pcs/pack',
    description:
      'Banquet & pattal style heavy-duty plate for traditional feasts, community meals, and large thali service. Maximum load integrity.',
    image: '/images/products/product-plate.jpg',
    whatsappMessage: productEnquiryMessage('12" Paper Plate'),
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
