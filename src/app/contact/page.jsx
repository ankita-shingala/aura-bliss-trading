import { contact, getFullAddress } from '@/data/contact';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurablisstrading.com';

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Aura Bliss Trading Co for Finolex, Torrent, APAR wires, Legrand switches and MCBs, L&T switches. Enquiries, bulk orders and project requirements.',
  openGraph: {
    title: 'Contact Aura Bliss Trading Co | Electrical Distributor',
    description: 'Get in touch for product enquiries, bulk orders and project requirements.',
    url: `${siteUrl}/contact`,
  },
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function ContactPage() {
  const fullAddress = getFullAddress();

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Get in touch for product enquiries, bulk orders and project requirements. We distribute
            Finolex, Torrent, APAR wires; Legrand switches and MCBs; and L&T switches.
          </p>
        </header>

        <div className="mt-12 space-y-8">
          {/* Owner */}
          <section className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Owner</h2>
            <p className="mt-2 text-slate-700">
              <span className="font-medium">{contact.owner.title}:</span>{' '}
              {contact.owner.name}
            </p>
          </section>

          {/* Contact details */}
          <section className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Contact details</h2>
            <p className="mt-4 text-slate-600">
              For enquiries about our products — Finolex, Torrent, APAR wires, Legrand switches and
              MCBs, L&T switches — reach out via phone, email or visit us. We serve contractors,
              builders and industries.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${contact.phone.primary.replace(/\s/g, '')}`} className="text-primary-600 hover:underline">
                  {contact.phone.primary}
                </a>
                {contact.phone.secondary && (
                  <>
                    {' | '}
                    <a href={`tel:${contact.phone.secondary.replace(/\s/g, '')}`} className="text-primary-600 hover:underline">
                      {contact.phone.secondary}
                    </a>
                  </>
                )}
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${contact.email}`} className="text-primary-600 hover:underline">
                  {contact.email}
                </a>
              </li>
              <li>
                <strong>Address:</strong>
                <address className="mt-1 not-italic text-slate-700">
                  {fullAddress}
                </address>
              </li>
            </ul>
          </section>

          {/* Business hours */}
          <section className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Business hours</h2>
            <ul className="mt-4 space-y-1 text-slate-700">
              <li><strong>Mon – Fri:</strong> {contact.businessHours.weekdays}</li>
              <li><strong>Saturday:</strong> {contact.businessHours.saturday}</li>
              <li><strong>Sunday:</strong> {contact.businessHours.sunday}</li>
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">What we can help with</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600">
            <li>Product availability and pricing</li>
            <li>Bulk orders for projects</li>
            <li>Technical specifications</li>
            <li>Delivery and logistics</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
