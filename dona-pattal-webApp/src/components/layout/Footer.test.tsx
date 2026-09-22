import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />);
    expect(screen.getByText('SAHLOK ECO PRODUCTS LLP')).toBeInTheDocument();
  });

  it('renders navigation link groups', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /products/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /who we supply/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /making story/i })).toBeInTheDocument();
  });

  it('renders contact info with phone and WhatsApp', () => {
    render(<Footer />);
    expect(screen.getByText('Alok Dwivedi')).toBeInTheDocument();
    const callLink = screen.getByRole('link', { name: /^\+91 87872 01971$/i });
    expect(callLink).toHaveAttribute('href', 'tel:+918787201971');
    expect(screen.getByRole('link', { name: /chat with us/i })).toHaveAttribute('href', expect.stringContaining('wa.me/918787201971'));
  });

  it('renders copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Sahlok Eco Products LLP/)).toBeInTheDocument();
  });
});