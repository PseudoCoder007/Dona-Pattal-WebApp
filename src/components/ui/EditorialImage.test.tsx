import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EditorialImage } from './EditorialImage';

describe('EditorialImage', () => {
  it('renders image with alt text and caption', () => {
    render(<EditorialImage src="/test.jpg" alt="Test image" caption="Photo caption" />);
    expect(screen.getByAltText('Test image')).toHaveAttribute('src', '/test.jpg');
    expect(screen.getByText('Photo caption')).toBeInTheDocument();
  });

  it('applies hover zoom when enabled', () => {
    render(<EditorialImage src="/test.jpg" alt="Test" hoverZoom />);
    expect(screen.getByAltText('Test')).toHaveClass('group-hover:scale-105');
  });
});