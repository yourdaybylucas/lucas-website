import type { Metadata } from 'next';
import AboutClient from './about-client';

const title = 'About Lucas Bulger : Ontario Wedding Filmmaker';
const description =
  'meet lucas bulger, an ontario wedding filmmaker making honest, nostalgic digital and super 8mm wedding cinema with a grounded, documentary approach.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title,
    description,
    url: 'https://www.yourdaybylucas.com/about',
    siteName: 'Your Day By Lucas',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Your Day By Lucas wedding cinema',
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

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Lucas Bulger',
  'url': 'https://www.yourdaybylucas.com/about',
  'image': 'https://www.yourdaybylucas.com/images/about/about_1.2.JPG',
  'jobTitle': 'Wedding Filmmaker',
  'description': 'ontario wedding filmmaker creating honest, nostalgic digital and super 8mm wedding cinema.',
  'homeLocation': {
    '@type': 'Place',
    'name': 'Guelph, Ontario',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Guelph',
      'addressRegion': 'ON',
      'addressCountry': 'CA',
    },
  },
  'worksFor': {
    '@type': 'ProfessionalService',
    'name': 'Your Day By Lucas',
    'url': 'https://www.yourdaybylucas.com',
  },
  'sameAs': [
    'https://www.instagram.com/yourdaybylucas/',
    'https://www.tiktok.com/@yourdaybylucas',
    'https://www.youtube.com/channel/UCzxBX7qRbMssCqBtgd4ndQw',
  ],
  'knowsAbout': [
    'Wedding cinematography',
    'Super 8mm wedding films',
    'Documentary wedding films',
    'Ontario weddings',
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
