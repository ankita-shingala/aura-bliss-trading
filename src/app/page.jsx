import Link from 'next/link';

const brands = [
  { name: 'Finolex', description: 'Premium wires and cables for residential and industrial use.', slug: 'finolex' },
  { name: 'Torrent', description: 'Trusted cables and conductors for power transmission.', slug: 'torrent' },
  { name: 'APAR', description: 'Quality wires and cables for diverse applications.', slug: 'apar' },
  { name: 'Legrand', description: 'Switches, MCBs and electrical accessories.', slug: 'legrand' },
  { name: 'L&T', description: 'Switches and electrical systems for projects.', slug: 'lnt' },
];

const highlights = [
  { title: 'Authorised Distributor', description: 'Official partnership with Finolex, Torrent, APAR, Legrand and L&T for genuine products.' },
  { title: 'Wide Range', description: 'Wires, cables, switches, MCBs and accessories for contractors and projects.' },
  { title: 'Reliable Supply', description: 'Consistent stock and timely delivery for your electrical needs.' },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(236,117,26,0.08)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your Trusted Electrical Trading Partner
          </h1>
          <p className="mt-6 text-lg text-slate-300 sm:text-xl">
            Aura Bliss Trading Co — Authorised distributor of{' '}
            <strong className="text-primary-400">Finolex</strong>,{' '}
            <strong className="text-primary-400">Torrent</strong> and{' '}
            <strong className="text-primary-400">APAR</strong> wires. Legrand switches and MCBs. L&T switches.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/products" className="inline-flex items-center rounded-lg bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-950">
              View Products &amp; Brands
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-lg border border-slate-600 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:border-primary-500 hover:bg-slate-800 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-950">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="brands-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="brands-heading" className="text-center text-3xl font-bold text-slate-900">
            Premium Brands We Distribute
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            We are an authorised distributor for leading electrical brands. Genuine products, reliable supply.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <li key={brand.slug} className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-primary-200 hover:shadow-md">
                <h3 className="text-xl font-semibold text-slate-900">{brand.name}</h3>
                <p className="mt-2 text-slate-600">{brand.description}</p>
                <Link href="/products" className="mt-4 inline-block text-sm font-medium text-primary-600 hover:text-primary-700">
                  Learn more →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="why-heading" className="text-center text-3xl font-bold text-slate-900">
            Why Choose Aura Bliss Trading Co
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            We bring together quality products and dependable service for contractors, builders and projects.
          </p>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
              <li key={index} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-primary-600 px-4 py-16 text-white sm:px-6 lg:px-8" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold">Ready to Order?</h2>
          <p className="mt-4 text-lg text-primary-100">
            Get in touch for product enquiries, bulk orders and project requirements. We serve contractors, builders and industries.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-700 transition hover:bg-primary-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
