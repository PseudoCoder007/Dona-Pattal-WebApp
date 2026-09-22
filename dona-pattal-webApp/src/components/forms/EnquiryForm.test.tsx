import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { EnquiryForm } from './EnquiryForm';

describe('EnquiryForm', () => {
  it('renders all required fields', () => {
    render(<EnquiryForm onSubmit={vi.fn()} />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/business/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/state/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/product/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/quantity/i)).toBeInTheDocument();
  });

  it('shows validation errors on empty submit', async () => {
    render(<EnquiryForm onSubmit={vi.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: /send wholesale enquiry/i }));
    await waitFor(() => {
      const requiredErrors = screen.getAllByText(/required/i);
      expect(requiredErrors.length).toBeGreaterThan(0);
    });
  });

  it('shows success state on valid submit', async () => {
    const onSubmit = vi.fn();
    render(<EnquiryForm onSubmit={onSubmit} />);
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/business/i), { target: { value: 'Test Company' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '+91 9876543210' } });
    fireEvent.change(screen.getByLabelText(/city/i), { target: { value: 'Varanasi' } });
    fireEvent.change(screen.getByLabelText(/state/i), { target: { value: 'Uttar Pradesh' } });
    fireEvent.change(screen.getByLabelText(/product/i), { target: { value: '6-inch-dona' } });
    fireEvent.change(screen.getByLabelText(/quantity/i), { target: { value: '5000 pcs' } });
    fireEvent.click(screen.getByRole('button', { name: /send wholesale enquiry/i }));
    await waitFor(() => {
      expect(screen.getByText(/enquiry received/i)).toBeInTheDocument();
    });
    expect(onSubmit).toHaveBeenCalled();
  });
});
