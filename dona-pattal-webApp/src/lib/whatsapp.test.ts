import { describe, it, expect } from 'vitest';
import { buildWhatsAppUrl, productEnquiryMessage } from './whatsapp';

describe('buildWhatsAppUrl', () => {
  it('builds a wa.me URL with the default Sahlok number', () => {
    const url = buildWhatsAppUrl('Hello there');
    expect(url).toBe('https://wa.me/918787201971?text=Hello%20there');
  });

  it('URL-encodes special characters in the message', () => {
    const url = buildWhatsAppUrl('6" Paper Dona & plates?');
    expect(url).toContain('text=6%22%20Paper%20Dona%20%26%20plates%3F');
  });

  it('accepts a custom phone number', () => {
    const url = buildWhatsAppUrl('hi', '911234567890');
    expect(url.startsWith('https://wa.me/911234567890?text=')).toBe(true);
  });
});

describe('productEnquiryMessage', () => {
  it('includes the product name in a wholesale enquiry message', () => {
    const message = productEnquiryMessage('6" Paper Dona');
    expect(message).toContain('6" Paper Dona');
    expect(message.toLowerCase()).toContain('wholesale pricing');
  });
});