import { MetadataRoute } from 'next';
import { venues } from '@/data/venues';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourdaybylucas.com';

  // base static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/spaces`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // high priority, it's an active ledger
    },
  ];

  // dynamically append every venue in the ledger
  const spaceRoutes = venues.map((venue) => ({
    url: `${baseUrl}/spaces?space=${venue.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...spaceRoutes];
}
