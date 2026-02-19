const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurablisstrading.com';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about Aura Bliss Trading Co — authorised distributor of Finolex, Torrent, APAR wires, Legrand switches and MCBs, L&T switches. Your trusted electrical trading partner.',
  openGraph: {
    title: 'About Aura Bliss Trading Co | Authorised Electrical Distributor',
    description: 'Authorised distributor of Finolex, Torrent, APAR wires. Legrand switches and MCBs. L&T switches.',
    url: `${siteUrl}/about`,
  },
  alternates: { canonical: `${siteUrl}/about` },
};

export default function AboutPage() {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            About Aura Bliss Trading Co
          </h1>
          <p className="mt-4 text-lg text-slate-800">
            Your trusted partner in electrical trading — authorised distributor of premium wires, switches and MCBs.
          </p>
        </header>

        <div className="mt-12 space-y-10 text-slate-800">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Who We Are</h2>
            <p className="mt-3 leading-relaxed">
              Aura Bliss Trading Co is an authorised distributor of leading electrical brands. We supply <strong className="text-slate-900">Finolex</strong>, <strong className="text-slate-900">Torrent</strong> and <strong className="text-slate-900">APAR</strong> wires and cables, <strong className="text-slate-900">Legrand</strong> switches and MCBs, and <strong className="text-slate-900">L&T</strong> switches to contractors, builders, industries and projects. Our focus is on genuine products, reliable supply and customer satisfaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Our Brands</h2>
            <p className="mt-3 leading-relaxed">We are proud to be an authorised distributor for:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
              <li><strong className="text-slate-900">Finolex</strong> — Wires and cables for residential and industrial use</li>
              <li><strong className="text-slate-900">Torrent</strong> — Cables and conductors for power transmission</li>
              <li><strong className="text-slate-900">APAR</strong> — Quality wires and cables for diverse applications</li>
              <li><strong className="text-slate-900">Legrand</strong> — Switches, MCBs and electrical accessories</li>
              <li><strong className="text-slate-900">L&T</strong> — Switches and electrical systems for projects</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Why Partner With Us</h2>
            <p className="mt-3 leading-relaxed">
              As an authorised distributor, we offer only genuine products with proper warranty and support. We understand the needs of electrical contractors and project managers and aim to provide a wide range, consistent stock and timely delivery. Whether you need wires, cables, switches or MCBs, we are here to support your electrical requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Get In Touch</h2>
            <p className="mt-3 leading-relaxed">
              For product enquiries, bulk orders or project requirements, please{' '}
              <a href="/contact" className="font-medium text-primary-600 hover:text-primary-700">contact us</a>. We look forward to serving you.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
