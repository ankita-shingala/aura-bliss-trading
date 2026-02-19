import { contact, getFullAddress } from '@/data/contact';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurablisstrading.com';

function getOrganizationJsonLd() {
  const fullAddress = getFullAddress();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aura Bliss Trading Co',
    url: siteUrl,
    description:
      'Authorised distributor of Finolex, Torrent and APAR wires. Legrand switches and MCBs. L&T switches. Trusted electrical trading partner.',
    brand: [
      { '@type': 'Brand', name: 'Finolex' },
      { '@type': 'Brand', name: 'Torrent' },
      { '@type': 'Brand', name: 'APAR' },
      { '@type': 'Brand', name: 'Legrand' },
      { '@type': 'Brand', name: 'L&T' },
    ],
    areaServed: { '@type': 'Country', name: 'India' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contact.phone.primary.replace(/\s/g, ''),
      email: contact.email,
      contactType: 'customer service',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: [contact.address.line1, contact.address.line2].filter(Boolean).join(', '),
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.pin,
      addressCountry: 'IN',
    },
  };
}

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd()) }}
    />
  );
}
