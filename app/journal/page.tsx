import type { Metadata } from 'next';
import JournalClient from './journal-client';

const title = 'Wedding Film Journal : Ontario Venues + Stories | LUCAS';
const description =
  'watch recent wedding films and field notes from ontario venues, super 8mm stories, and honest digital wedding cinema by your day by lucas.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/journal',
  },
  openGraph: {
    title,
    description,
    url: 'https://www.yourdaybylucas.com/journal',
    siteName: 'Your Day By Lucas',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Your Day By Lucas wedding film journal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image.png'],
  },
};

export default function JournalPage() {
  return <JournalClient />;
}
