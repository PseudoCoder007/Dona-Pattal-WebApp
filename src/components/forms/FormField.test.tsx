import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormField } from './FormField';

describe('FormField', () => {
  it('renders label, input, and error message', () => {
    render(<FormField label="Full Name" error="Required" />);
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  it('applies error styles when error prop provided', () => {
    render(<FormField label="Email" type="email" error="Invalid email" />);
    expect(screen.getByLabelText('Email')).toHaveClass('border-brick');
  });
});