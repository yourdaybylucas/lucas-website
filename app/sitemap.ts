// app/sitemap.ts
import { MetadataRoute } from 'next';
import { venues } from '@/data/venues';
import { journalEntries } from '@/data/journal';

const STATIC_PAGE_LAST_MODIFIED = '2026-06-23';
const VENUES_LAST_REVIEWED = '2026-06-23';

const monthIndexes: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function dateFromIsoDate(date: string) {
  return new Date(`${date}T00:00:00.000Z`);
}

function dateFromJournalDate(date: string) {
  const match = date.match(/^([A-Za-z]{3})\.?\s+(\d{1,2}),\s+(\d{4})$/);

  if (!match) {
    return dateFromIsoDate(STATIC_PAGE_LAST_MODIFIED);
  }

  const [, month, day, year] = match;
  const monthIndex = monthIndexes[month];

  if (monthIndex === undefined) {
    return dateFromIsoDate(STATIC_PAGE_LAST_MODIFIED);
  }

  return new Date(Date.UTC(Number(year), monthIndex, Number(day)));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourdaybylucas.com';
  const staticPageLastModified = dateFromIsoDate(STATIC_PAGE_LAST_MODIFIED);
  const venuesLastReviewed = dateFromIsoDate(VENUES_LAST_REVIEWED);
  const journalDates = journalEntries.map((post) => dateFromJournalDate(post.date));
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
    lastModified: dateFromJournalDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8, // High priority because these contain heavy venue keywords
  }));

  return [...routes, ...spaceRoutes, ...journalRoutes];
}
