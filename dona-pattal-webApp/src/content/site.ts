import { buildWhatsAppUrl } from '@/lib/whatsapp';

export const siteConfig = {
  business: {
    name: 'Sahlok Eco Products LLP',
    owner: 'Alok Dwivedi',
    tagline: 'Paper Dona & Plates \u00b7 Mirzapur',
    description:
      'Factory-direct paper dona, paper plates and food-service tableware for bulk B2B buyers, dispatched from Mirzapur, Uttar Pradesh.',
    address:
      'Civil Line Road, Saripur Jalalpur, Mirzapur \u2013 231001, Uttar Pradesh, India',
  },
  contact: {
    phoneDisplay: '+91 87872 01971',
    whatsappDigits: '918787201971',
    whatsappUrl: buildWhatsAppUrl(
      'Hello Sahlok Eco Products, I would like to discuss a wholesale requirement for paper dona / paper plates. Please share product options, pricing and availability.'
    ),
    email: '',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Wholesale', href: '/wholesale' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    brandDescription:
      'Emerging B2B supply line manufacturing paper dona, paper plates, and food-service tableware. Direct bulk dispatch from Mirzapur to catering businesses, retailers, and wholesalers across India.',
    links: [
      { label: 'Products', href: '/products' },
      { label: 'Who We Supply', href: '/about#who-we-supply' },
      { label: 'Making Story', href: '/about#material' },
      { label: 'Mirzapur', href: '/about#mirzapur' },
      { label: 'Wholesale Desk', href: '/wholesale' },
      { label: 'Contact', href: '/contact' },
    ],
    contact: {
      owner: 'Alok Dwivedi',
      address: 'Civil Line Road, Saripur Jalalpur, Mirzapur \u2013 231001, Uttar Pradesh',
      phone: '+91 87872 01971',
      whatsapp: 'https://wa.me/918787201971',
    },
    copyright: '\u00a9 2026 Sahlok Eco Products LLP. All rights reserved.',
    tagline: 'Paper Tableware \u00b7 Mirzapur, Uttar Pradesh',
  },
  claimsToVerify: [
    'Factory-direct manufacturing claims',
    'Food-grade certification claims',
    'Production capacity claims',
    'Biodegradable/compostable claims',
    'Dispatch timeline claims (same-day, T+1, etc.)',
    'MSME registration claims',
    'GST registration claims',
    'Customer count claims',
    'Delivery promise claims',
    'Operating hours claims',
  ],
};
