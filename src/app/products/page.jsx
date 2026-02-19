import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurablisstrading.com';

export const metadata = {
  title: 'Products & Brands',
  description:
    'Finolex, Torrent, APAR wires. Legrand switches and MCBs. L&T switches. Authorised distributor — Aura Bliss Trading Co. Genuine electrical products for contractors and projects.',
  keywords: ['Finolex wires', 'Torrent cables', 'APAR wires', 'Legrand switches', 'Legrand MCB', 'L&T switch', 'electrical products'],
  openGraph: {
    title: 'Products & Brands | Aura Bliss Trading Co',
    description: 'Authorised distributor of Finolex, Torrent, APAR, Legrand and L&T electrical products.',
    url: `${siteUrl}/products`,
  },
  alternates: { canonical: `${siteUrl}/products` },
};

const products = [
  { name: 'Finolex Wires & Cables', category: 'Wires & Cables', description: 'Finolex is a trusted name in wires and cables for residential, commercial and industrial applications. We are an authorised distributor offering genuine Finolex products including FR wires, cables and flexible cables.', highlights: ['FR wires', 'Power cables', 'Flexible cables', 'Genuine warranty'] },
  { name: 'Torrent Cables & Conductors', category: 'Wires & Cables', description: 'Torrent offers a wide range of cables and conductors for power transmission and distribution. As an authorised distributor, we supply genuine Torrent products for projects and industries.', highlights: ['Power cables', 'Conductors', 'Industrial cables', 'Authorised stock'] },
  { name: 'APAR Wires & Cables', category: 'Wires & Cables', description: 'APAR manufactures quality wires and cables for various applications. We distribute genuine APAR products to meet the needs of contractors and projects.', highlights: ['House wiring', 'Industrial cables', 'Quality certified', 'Wide range'] },
  { name: 'Legrand Switches & MCBs', category: 'Switches & Protection', description: 'Legrand switches, MCBs and electrical accessories are known for safety and design. We are an authorised distributor of Legrand products including modular switches, MCBs and related accessories.', highlights: ['Modular switches', 'MCBs', 'Electrical accessories', 'Safety standards'] },
  { name: 'L&T Switches', category: 'Switches & Protection', description: 'L&T electrical switches and systems are widely used in residential and commercial projects. We supply genuine L&T switches as an authorised channel partner.', highlights: ['Switches', 'Electrical systems', 'Project supply', 'L&T genuine'] },
];

export default function ProductsPage() {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Products &amp; Brands</h1>
          <p className="mt-4 text-lg text-slate-600">
            We are an authorised distributor of Finolex, Torrent and APAR wires; Legrand switches and MCBs; and L&T switches. Genuine products for contractors and projects.
          </p>
        </header>

        <ul className="mt-12 space-y-12">
          {products.map((product) => (
            <li key={product.name} className="rounded-xl border border-slate-200 bg-slate-50/30 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline gap-2">
                <h2 className="text-2xl font-semibold text-slate-900">{product.name}</h2>
                <span className="rounded-full bg-primary-100 px-3 py-0.5 text-sm font-medium text-primary-800">{product.category}</span>
              </div>
              <p className="mt-4 text-slate-600">{product.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {product.highlights.map((h) => (
                  <li key={h} className="rounded-md bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <section className="mt-16 rounded-xl bg-slate-950 p-8 text-white">
          <h2 className="text-2xl font-semibold">Need a quote or bulk order?</h2>
          <p className="mt-2 text-slate-300">Contact us for product availability, pricing and project requirements.</p>
          <Link href="/contact" className="mt-6 inline-flex items-center rounded-lg bg-primary-500 px-6 py-3 font-semibold text-white transition hover:bg-primary-600">
            Contact Us
          </Link>
        </section>
      </div>
    </article>
  );
}
