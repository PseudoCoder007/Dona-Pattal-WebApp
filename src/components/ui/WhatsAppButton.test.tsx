import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WhatsAppButton } from './WhatsAppButton';

describe('WhatsAppButton', () => {
  it('renders with correct wa.me href', () => {
    render(<WhatsAppButton message="Test message" />);
    const link = screen.getByRole('link', { name: /chat on whatsapp/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me/918787201971'));
    expect(link).toHaveAttribute('href', expect.stringContaining('Test%20message'));
  });

  it('accepts custom message and label', () => {
    render(<WhatsAppButton message="Custom" label="Message Us" />);
    expect(screen.getByRole('link', { name: /message us/i })).toBeInTheDocument();
  });

  it('opens in new tab with noopener', () => {
    render(<WhatsAppButton message="Test" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});