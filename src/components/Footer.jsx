import Link from 'next/link';
import { contact, getFullAddress } from '@/data/contact';

const footerLinks = {
  company: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products & Brands' },
    { href: '/contact', label: 'Contact' },
  ],
  brands: [
    { label: 'Finolex Wires' },
    { label: 'Torrent Cables' },
    { label: 'APAR Wires' },
    { label: 'Legrand Switches & MCBs' },
    { label: 'L&T Switches' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const fullAddress = getFullAddress();

  return (
    <footer className="bg-slate-950 text-slate-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Aura Bliss Trading Co</h3>
            <p className="mt-2 text-sm">
              {contact.owner.title}: {contact.owner.name}
            </p>
            <p className="mt-2 text-sm">
              Authorised distributor of Finolex, Torrent and APAR wires. Legrand switches and
              MCBs. L&T switches.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition hover:text-primary-400 focus:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Brands
            </h4>
            <ul className="mt-4 space-y-2">
              {footerLinks.brands.map((brand) => (
                <li key={brand.label} className="text-sm">
                  {brand.label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <p className="mt-4 text-sm">
              <a href={`tel:${contact.phone.primary.replace(/\s/g, '')}`} className="transition hover:text-primary-400 focus:text-primary-400">
                {contact.phone.primary}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href={`mailto:${contact.email}`} className="transition hover:text-primary-400 focus:text-primary-400">
                {contact.email}
              </a>
            </p>
            <address className="mt-2 text-sm not-italic text-slate-400">
              {fullAddress}
            </address>
            <p className="mt-2 text-sm">
              <Link href="/contact" className="transition hover:text-primary-400 focus:text-primary-400">
                Full contact &amp; hours →
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Aura Bliss Trading Co. All rights reserved. Authorised distributor
            of Finolex, Torrent, APAR wires | Legrand switches &amp; MCBs | L&T switches.
          </p>
        </div>
      </div>
    </footer>
  );
}
