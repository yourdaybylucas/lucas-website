import type { Metadata } from 'next';
import CollectionsClient from './collections-client';

const title = 'Wedding Film Collections : Digital + Super 8mm | LUCAS';
const description =
  'wedding film collections for couples who want all-day coverage, honest pacing, and nostalgic digital or super 8mm cinema across ontario and beyond.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/collections',
  },
  openGraph: {
    title,
    description,
    url: 'https://www.yourdaybylucas.com/collections',
    siteName: 'Your Day By Lucas',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Your Day By Lucas wedding film collections',
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

const collectionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Wedding Film Collections',
  'serviceType': 'Wedding cinematography',
  'url': 'https://www.yourdaybylucas.com/collections',
  'description': 'digital and super 8mm wedding film collections for couples who want honest, nostalgic wedding cinema.',
  'provider': {
    '@type': 'ProfessionalService',
    'name': 'Your Day By Lucas',
    'url': 'https://www.yourdaybylucas.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Guelph',
      'addressRegion': 'ON',
      'addressCountry': 'CA',
    },
  },
  'areaServed': [
    {
      '@type': 'AdministrativeArea',
      'name': 'Ontario',
    },
    {
      '@type': 'Place',
      'name': 'Worldwide',
    },
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Your Day By Lucas wedding film collections',
    'itemListElement': [
      {
        '@type': 'Offer',
        'name': 'The Essential',
        'itemOffered': {
          '@type': 'Service',
          'name': 'The Essential wedding film collection',
          'description': 'digital wedding film coverage with a highlight film, ceremony edit, reception edit, provincial travel, aerial perspectives, and online delivery.',
        },
      },
      {
        '@type': 'Offer',
        'name': 'The Analog',
        'itemOffered': {
          '@type': 'Service',
          'name': 'The Analog wedding film collection',
          'description': 'digital wedding film coverage with authentic Kodak super 8mm film and next day teaser edit.',
        },
      },
      {
        '@type': 'Offer',
        'name': 'The Weekend',
        'itemOffered': {
          '@type': 'Service',
          'name': 'The Weekend wedding film collection',
          'description': 'multi-day wedding film coverage with welcome party coverage and exclusive studio focus.',
        },
      },
    ],
  },
};

export default function CollectionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionsJsonLd) }}
      />
      <CollectionsClient />
    </>
  );
}
