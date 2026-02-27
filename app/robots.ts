import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private-collections', '/the-guide'], // keeps the backend client portals hidden
    },
    sitemap: 'https://www.yourdaybylucas.com/sitemap.xml',
  };
}
