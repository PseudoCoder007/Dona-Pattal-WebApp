import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductSpecTable } from './ProductSpecTable';
import { products } from '@/content/products';

const testProduct = products[1]; // 6-inch-dona

describe('ProductSpecTable', () => {
  it('renders specification table with all fields', () => {
    render(<ProductSpecTable product={testProduct} />);
    expect(screen.getByText('Nominal Diameter:')).toBeInTheDocument();
    expect(screen.getByText(testProduct.size)).toBeInTheDocument();
    expect(screen.getByText('Indicative GSM:')).toBeInTheDocument();
    expect(screen.getByText(testProduct.gsm)).toBeInTheDocument();
    expect(screen.getByText('Standard Pack:')).toBeInTheDocument();
    expect(screen.getByText(testProduct.packSize)).toBeInTheDocument();
  });

  it('renders origin facility', () => {
    render(<ProductSpecTable product={testProduct} />);
    expect(screen.getByText((content) => content.includes('Mirzapur, Uttar Pradesh'))).toBeInTheDocument();
  });
});