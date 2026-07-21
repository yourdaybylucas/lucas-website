// app/sitemap.ts
import { MetadataRoute } from 'next';
import { venues } from '@/data/venues';
import { journalEntries } from '@/data/journal';

const STATIC_PAGE_LAST_MODIFIED = '2026-06-23';
const VENUES_LAST_REVIEWED = '2026-06-23';

function dateFromIsoDate(date: string) {
  return new Date(`${date}T00:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourdaybylucas.com';
  const staticPageLastModified = dateFromIsoDate(STATIC_PAGE_LAST_MODIFIED);
  const venuesLastReviewed = dateFromIsoDate(VENUES_LAST_REVIEWED);
  const journalDates = journalEntries.map((post) => dateFromIsoDate(post.updatedAt));
  const journalLastModified =
    journalDates.length > 0
      ? new Date(Math.max(...journalDates.map((date) => date.getTime())))
      : staticPageLastModified;

  // base static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: staticPageLastModified,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: staticPageLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/analog-lab`,
      lastModified: staticPageLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticPageLastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/spaces`,
      lastModified: venuesLastReviewed,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: journalLastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // dynamically append every venue in the ledger
  const spaceRoutes = venues.map((venue) => ({
    url: `${baseUrl}/spaces/${venue.id}`,
    lastModified: venuesLastReviewed,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // dynamically append every film in the journal
  const journalRoutes = journalEntries.map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: dateFromIsoDate(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8, // High priority because these contain heavy venue keywords
  }));

  return [...routes, ...spaceRoutes, ...journalRoutes];
}
