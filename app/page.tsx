import type { Metadata } from 'next';
import HomeClient from './home-client';

const title = 'Your Day By Lucas : Wedding Filmmaker';
const description =
  'your day by lucas. honest, nostalgic wedding cinema. blending digital and super 8mm, skipping the heavy production footprint. home is ontario // worldwide.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description: 'honest, nostalgic wedding cinema. digital + super 8mm. home is ontario // worldwide.',
    url: 'https://www.yourdaybylucas.com',
    siteName: 'Your Day By Lucas',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
