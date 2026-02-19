const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aurablisstrading.com';

export default function sitemap() {
  const routes = ['', '/about', '/products', '/contact'];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
