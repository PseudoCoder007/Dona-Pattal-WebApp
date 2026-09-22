import { describe, it, expect } from 'vitest';
import { products, getProductBySlug } from './products';

describe('products', () => {
  it('has exactly 6 products', () => {
    expect(products).toHaveLength(6);
  });

  it('each product has required fields', () => {
    products.forEach((p) => {
      expect(p.id).toBeTruthy();
      expect(p.slug).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.category).toMatch(/^(dona|plate)$/);
      expect(p.size).toBeTruthy();
      expect(p.use).toBeTruthy();
      expect(p.gsm).toBeTruthy();
      expect(p.packSize).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.image).toBeTruthy();
      expect(p.whatsappMessage).toBeTruthy();
    });
  });

  it('slugs match the 6 approved routes', () => {
    const slugs = products.map((p) => p.slug).sort();
    expect(slugs).toEqual([
      '10-inch-plate',
      '12-inch-plate',
      '4-inch-dona',
      '6-inch-dona',
      '7-inch-plate',
      '8-inch-plate',
    ]);
  });

  it('getProductBySlug returns correct product or undefined', () => {
    const p = getProductBySlug('6-inch-dona');
    expect(p).toBeDefined();
    expect(p?.name).toBe('6" Paper Dona');
    expect(getProductBySlug('nonexistent')).toBeUndefined();
  });
});