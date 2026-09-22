import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductRangeSection } from './ProductRangeSection';

describe('ProductRangeSection', () => {
  it('renders section heading', () => {
    render(<ProductRangeSection />);
    expect(screen.getByText('PRODUCT RANGE')).toBeInTheDocument();
    expect(screen.getByText('Paper Tableware for Everyday Bulk Supply')).toBeInTheDocument();
  });

  it('renders 6 product cards', () => {
    render(<ProductRangeSection />);
    expect(screen.getByText('4" Mini Paper Dona')).toBeInTheDocument();
    expect(screen.getByText('6" Paper Dona')).toBeInTheDocument();
    expect(screen.getByText('7" Paper Plate')).toBeInTheDocument();
    expect(screen.getByText('8" Paper Plate')).toBeInTheDocument();
    expect(screen.getByText('10" Paper Plate')).toBeInTheDocument();
    expect(screen.getByText('12" Paper Plate')).toBeInTheDocument();
  });
});