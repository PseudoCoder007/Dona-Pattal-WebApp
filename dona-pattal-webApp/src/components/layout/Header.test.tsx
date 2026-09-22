import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders brand name and LLP badge', () => {
    render(<Header />);
    expect(screen.getByText('SAHLOK ECO PRODUCTS')).toBeInTheDocument();
    expect(screen.getByText('LLP')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    const navLinks = screen.getAllByRole('link', { name: /products|wholesale|about|contact/i });
    expect(navLinks.length).toBeGreaterThanOrEqual(4);
  });

  it('renders WhatsApp button with correct href', () => {
    render(<Header />);
    const waBtn = screen.getByRole('link', { name: 'CHAT ON WHATSAPP' });
    expect(waBtn).toHaveAttribute('href', expect.stringContaining('wa.me/918787201971'));
  });

  it('renders Get Bulk Pricing CTA', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Get Bulk Pricing' })).toBeInTheDocument();
  });

  it('opens mobile nav on hamburger click', () => {
    render(<Header />);
    const hamburger = screen.getByRole('button', { name: /open navigation/i });
    fireEvent.click(hamburger);
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument();
  });
});