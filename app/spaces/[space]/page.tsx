import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { venues } from '@/data/venues';
import SpacesClient from '../spaces-client';

type Props = {
    params: Promise<{ space: string }>;
};

const findVenue = (space: string) => venues.find((venue) => venue.id === space);

export function generateStaticParams() {
    return venues.map((venue) => ({
        space: venue.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { space } = await params;
    const activeVenue = findVenue(space);

    if (!activeVenue) {
        return {
            title: 'Space Not Found // LUCAS',
        };
    }

    const title = `${activeVenue.name} Wedding Videographer | LUCAS`;

    return {
        title,
        description: activeVenue.seoDescription,
        alternates: {
            canonical: `/spaces/${activeVenue.id}`,
        },
        openGraph: {
            title,
            description: activeVenue.seoDescription,
            url: `https://www.yourdaybylucas.com/spaces/${activeVenue.id}`,
            type: 'article',
            images: [`https://img.youtube.com/vi/${activeVenue.visualEmbed}/maxresdefault.jpg`],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: activeVenue.seoDescription,
            images: [`https://img.youtube.com/vi/${activeVenue.visualEmbed}/maxresdefault.jpg`],
        },
    };
}

export default async function SpacePage({ params }: Props) {
    const { space } = await params;
    const activeVenue = findVenue(space);

    if (!activeVenue) {
        notFound();
    }

    const pageUrl = `https://www.yourdaybylucas.com/spaces/${activeVenue.id}`;
    const venueId = `${activeVenue.officialUrl.replace(/\/$/, '')}#venue`;

    const breadcrumbId = `${pageUrl}#breadcrumb`;

    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `${pageUrl}#webpage`,
                'url': pageUrl,
                'name': `${activeVenue.name} Wedding Videographer`,
                'description': activeVenue.seoDescription,
                'isPartOf': {
                    '@type': 'CollectionPage',
                    '@id': 'https://www.yourdaybylucas.com/spaces#webpage',
                    'name': 'Ontario Wedding Venue Guide',
                    'url': 'https://www.yourdaybylucas.com/spaces',
                },
                'mainEntity': {
                    '@id': venueId,
                },
                'about': {
                    '@id': venueId,
                },
                'breadcrumb': {
                    '@id': breadcrumbId,
                },
                'author': {
                    '@type': 'Person',
                    'name': 'Lucas Bulger',
                    'url': 'https://www.yourdaybylucas.com/about',
                },
            },
            {
                '@type': 'EventVenue',
                '@id': venueId,
                'name': activeVenue.name,
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': activeVenue.location,
                    'addressRegion': 'ON',
                    'addressCountry': 'CA',
                },
                'description': activeVenue.overview,
                'image': `https://img.youtube.com/vi/${activeVenue.visualEmbed}/maxresdefault.jpg`,
                'url': activeVenue.officialUrl,
                'sameAs': activeVenue.officialUrl,
                'mainEntityOfPage': {
                    '@id': `${pageUrl}#webpage`,
                },
            },
            {
                '@type': 'BreadcrumbList',
                '@id': breadcrumbId,
                'itemListElement': [
                    {
                        '@type': 'ListItem',
                        'position': 1,
                        'name': 'Home',
                        'item': 'https://www.yourdaybylucas.com',
                    },
                    {
                        '@type': 'ListItem',
                        'position': 2,
                        'name': 'Spaces',
                        'item': 'https://www.yourdaybylucas.com/spaces',
                    },
                    {
                        '@type': 'ListItem',
                        'position': 3,
                        'name': activeVenue.name,
                        'item': pageUrl,
                    },
                ],
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Suspense fallback={<div className="min-h-screen bg-lucas-cream" />}>
                <SpacesClient venues={venues} activeVenueId={activeVenue.id} />
            </Suspense>
        </>
    );
}
