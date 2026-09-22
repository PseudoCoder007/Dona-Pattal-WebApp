import type { Metadata } from 'next';
import { Fraunces, Playfair_Display, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '600', '700'],
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '700'],
});
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sahlok Eco Products LLP | Paper Dona & Paper Tableware Wholesale',
  description:
    'Factory-direct paper dona, paper plates and food-service tableware for bulk B2B buyers, dispatched from Mirzapur, Uttar Pradesh.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${playfair.variable} ${plexSans.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}