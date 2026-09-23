import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EditorialImage } from './EditorialImage';

describe('EditorialImage', () => {
  it('renders image with alt text and caption', () => {
    render(<EditorialImage src="/test.jpg" alt="Test image" caption="Photo caption" />);
    expect(screen.getByAltText('Test image')).toHaveAttribute(
      'src',
      expect.stringContaining(encodeURIComponent('/test.jpg'))
    );
    expect(screen.getByText('Photo caption')).toBeInTheDocument();
  });

  it('applies hover zoom when enabled', () => {
    render(<EditorialImage src="/test.jpg" alt="Test" hoverZoom />);
    expect(screen.getByAltText('Test')).toHaveClass('group-hover:scale-105');
  });

  it('emits a static aspect-[16/9] class when aspectRatio="16/9" is passed', () => {
    render(<EditorialImage src="/test.jpg" alt="Test" aspectRatio="16/9" />);
    const image = screen.getByAltText('Test');
    expect(image.parentElement).toHaveClass('aspect-[16/9]');
  });

  it('renders the caption with text-ink (not text-paper)', () => {
    render(<EditorialImage src="/test.jpg" alt="Test image" caption="Photo caption" />);
    const captionEl = screen.getByText('Photo caption');
    expect(captionEl).toHaveClass('text-ink');
    expect(captionEl).not.toHaveClass('text-paper');
  });
});
