import type { APIRoute } from 'astro';
import { treatments } from '../data/treatments';
import { areas } from '../data/areas';
import { practice } from '../data/practice';
export const GET: APIRoute = () => {
  const paths = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true' ? [
    '/', '/about/', '/new-patients/', '/treatments/', '/cost-and-financing/', '/faq/', '/contact/', '/areas/', '/accessibility/', '/privacy-policy/', '/website-terms/',
    ...treatments.map(t => `/treatments/${t.slug}/`), ...areas.map(a => `/areas/${a.slug}/`),
  ] : [];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${practice.site}${path}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
