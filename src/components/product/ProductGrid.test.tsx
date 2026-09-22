import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductGrid } from './ProductGrid';
import { products } from '@/content/products';

describe('ProductGrid', () => {
  it('renders all products in a responsive grid', () => {
    render(<ProductGrid products={products} />);
    products.forEach((p) => {
      expect(screen.getByText(p.name)).toBeInTheDocument();
    });
  });

  it('accepts category filter prop', () => {
    const donaProducts = products.filter((p) => p.category === 'dona');
    render(<ProductGrid products={donaProducts} />);
    expect(screen.getByText('4" Mini Paper Dona')).toBeInTheDocument();
    expect(screen.getByText('6" Paper Dona')).toBeInTheDocument();
    expect(screen.queryByText('7" Paper Plate')).not.toBeInTheDocument();
  });
});