import type { APIRoute } from 'astro';
export const GET: APIRoute = () => new Response(
  import.meta.env.PUBLIC_ALLOW_INDEXING === 'true'
    ? 'User-agent: *\nAllow: /\nSitemap: https://www.hoffmanfamilyorthodontics.com/sitemap.xml\n'
    : 'User-agent: *\nAllow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
// Staging stays crawlable so crawlers can read the page-level noindex.
