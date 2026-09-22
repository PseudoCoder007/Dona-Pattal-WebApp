import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { products } from '@/content/products';

const testProduct = products[0]; // 4-inch-dona

describe('ProductCard', () => {
  it('renders product image, name, use, and specs', () => {
    render(<ProductCard product={testProduct} />);
    expect(screen.getByAltText(testProduct.name)).toHaveAttribute('src', testProduct.image);
    expect(screen.getByText(testProduct.name)).toBeInTheDocument();
    expect(screen.getByText(testProduct.use)).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('GSM'))).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('pcs/pack'))).toBeInTheDocument();
  });

  it('renders WhatsApp link with product-specific message', () => {
    render(<ProductCard product={testProduct} />);
    const link = screen.getByRole('link', { name: /ask for this size/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me/918787201971'));
    expect(link).toHaveAttribute('href', expect.stringContaining(encodeURIComponent(testProduct.name)));
  });

  it('applies hover shadow and image zoom', () => {
    render(<ProductCard product={testProduct} />);
    const card = screen.getByTestId('product-card');
    expect(card).toHaveClass('hover:shadow-lg');
    const img = screen.getByAltText(testProduct.name);
    expect(img).toHaveClass('group-hover:scale-105');
  });
});