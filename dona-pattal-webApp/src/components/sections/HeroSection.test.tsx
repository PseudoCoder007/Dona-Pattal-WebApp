import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  it('renders headline with brick accent', () => {
    render(<HeroSection />);
    expect(screen.getByText('Paper Tableware,')).toBeInTheDocument();
    expect(screen.getByText('Built for Bulk Supply.')).toHaveClass('text-brick');
  });

  it('renders dual CTAs: Get Bulk Pricing and Chat on WhatsApp', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /get bulk pricing/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /chat on whatsapp/i })).toBeInTheDocument();
  });

  it('renders reassurance pills', () => {
    render(<HeroSection />);
    expect(screen.getByText('Mirzapur Facility')).toBeInTheDocument();
    expect(screen.getByText('Direct B2B Supply')).toBeInTheDocument();
  });
});