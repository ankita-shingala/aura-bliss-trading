import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OrganizationJsonLd } from '@/components/OrganizationJsonLd';
import { ScrollToTop } from '@/components/ScrollToTop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurablisstrading.com';

export const viewport = {
  themeColor: '#ec751a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Aura Bliss Trading Co | Finolex, Torrent, APAR Wires | Legrand Switches & MCBs | L&T',
    template: '%s | Aura Bliss Trading Co',
  },
  description:
    'Authorised distributor of Finolex, Torrent and APAR wires. Legrand switches and MCBs. L&T switches. Trusted electrical trading partner for contractors and projects.',
  keywords: [
    'Finolex wires',
    'Torrent cables',
    'APAR wires',
    'Legrand switches',
    'Legrand MCB',
    'L&T switch',
    'electrical distributor',
    'wire and cable supplier',
    'Aura Bliss Trading',
  ],
  authors: [{ name: 'Aura Bliss Trading Co', url: siteUrl }],
  creator: 'Aura Bliss Trading Co',
  publisher: 'Aura Bliss Trading Co',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Aura Bliss Trading Co',
    title: 'Aura Bliss Trading Co | Finolex, Torrent, APAR Wires | Legrand & L&T',
    description:
      'Authorised distributor of Finolex, Torrent, APAR wires. Legrand switches and MCBs. L&T switches. Your trusted electrical trading partner.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aura Bliss Trading Co - Authorised Electrical Distributor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Bliss Trading Co | Finolex, Torrent, APAR | Legrand & L&T',
    description: 'Authorised distributor of premium wires, switches and MCBs.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  category: 'Electrical Trading',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <OrganizationJsonLd />
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
