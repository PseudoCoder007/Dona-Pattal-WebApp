import { describe, it, expect } from 'vitest';
import { siteConfig } from './site';

describe('siteConfig', () => {
  it('has correct business identity', () => {
    expect(siteConfig.business.name).toBe('Sahlok Eco Products LLP');
    expect(siteConfig.business.owner).toBe('Alok Dwivedi');
    expect(siteConfig.business.address).toContain('Civil Line Road');
    expect(siteConfig.business.address).toContain('Mirzapur');
    expect(siteConfig.business.address).toContain('231001');
    expect(siteConfig.business.address).toContain('Uttar Pradesh');
  });

  it('has correct WhatsApp phone digits', () => {
    expect(siteConfig.contact.whatsappDigits).toBe('918787201971');
    expect(siteConfig.contact.phoneDisplay).toBe('+91 87872 01971');
  });

  it('has navigation array with expected routes', () => {
    const slugs = siteConfig.navigation.map((n) => n.href);
    expect(slugs).toContain('/');
    expect(slugs).toContain('/products');
    expect(slugs).toContain('/wholesale');
    expect(slugs).toContain('/about');
    expect(slugs).toContain('/contact');
  });

  it('has claimsToVerify array flagging unverified Stitch copy', () => {
    expect(Array.isArray(siteConfig.claimsToVerify)).toBe(true);
    expect(siteConfig.claimsToVerify.length).toBeGreaterThan(0);
  });
});