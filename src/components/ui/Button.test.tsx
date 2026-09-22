import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders primary variant with brick background', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toHaveClass('bg-brick');
  });

  it('renders secondary variant with outline', () => {
    render(<Button variant="secondary">Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toHaveClass('border-stone');
  });

  it('renders WhatsApp variant with emerald background', () => {
    render(<Button variant="whatsapp">Chat</Button>);
    expect(screen.getByRole('button', { name: /chat/i })).toHaveClass('bg-emerald-700');
  });

  it('forwards href as anchor when provided', () => {
    render(<Button href="/wholesale">Link</Button>);
    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute('href', '/wholesale');
  });
});