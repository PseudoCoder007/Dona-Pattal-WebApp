import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeading } from './SectionHeading';

describe('SectionHeading', () => {
  it('renders eyebrow, title, and description', () => {
    render(<SectionHeading eyebrow="PRODUCT RANGE" title="Our Products" description="Browse our range" />);
    expect(screen.getByText('PRODUCT RANGE')).toHaveClass('text-brick');
    expect(screen.getByRole('heading', { name: /our products/i })).toBeInTheDocument();
    expect(screen.getByText('Browse our range')).toBeInTheDocument();
  });

  it('renders action link when provided', () => {
    render(<SectionHeading eyebrow="PRODUCTS" title="Title" action={{ label: 'View All', href: '/products' }} />);
    expect(screen.getByRole('link', { name: /view all/i })).toHaveAttribute('href', '/products');
  });
});