import { Suspense } from 'react';
import { Metadata } from 'next';
import { venues } from '@/data/venues';
import SpacesClient from './spaces-client';

export const metadata: Metadata = {
    title: 'Ontario Wedding Venue Guide | The Ledger | LUCAS',
    description: 'A practical guide to Ontario wedding venues I have filmed, with firsthand notes on atmosphere, scale, preparation spaces, venue flow, and property use.',
    alternates: {
        canonical: '/spaces',
    },
    openGraph: {
        title: 'Ontario Wedding Venue Guide | The Ledger | LUCAS',
        description: 'Firsthand field notes on Ontario wedding venues, including atmosphere, scale, preparation spaces, venue flow, and property use.',
        url: 'https://www.yourdaybylucas.com/spaces',
    }
};

export default function SpacesPage() {
    const pageUrl = 'https://www.yourdaybylucas.com/spaces';
    const itemListId = `${pageUrl}#item-list`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CollectionPage',
                '@id': `${pageUrl}#webpage`,
                'url': pageUrl,
                'name': 'Ontario Wedding Venue Guide',
                'description': 'A practical guide to Ontario wedding venues Lucas has filmed, with firsthand notes on atmosphere, scale, preparation spaces, venue flow, and property use.',
                'mainEntity': {
                    '@id': itemListId,
                },
            },
            {
                '@type': 'ItemList',
                '@id': itemListId,
                'name': 'Ontario Wedding Venues Lucas Has Filmed',
                'numberOfItems': venues.length,
                'itemListElement': venues.map((venue, index) => {
                    const guideUrl = `${pageUrl}/${venue.id}`;
                    const venueId = `${venue.officialUrl.replace(/\/$/, '')}#venue`;

                    return {
                        '@type': 'ListItem',
                        'position': index + 1,
                        'url': guideUrl,
                        'item': {
                            '@type': 'EventVenue',
                            '@id': venueId,
                            'name': venue.name,
                            'address': {
                                '@type': 'PostalAddress',
                                'addressLocality': venue.location,
                                'addressRegion': 'ON',
                                'addressCountry': 'CA',
                            },
                            'description': venue.overview,
                            'image': `https://img.youtube.com/vi/${venue.visualEmbed}/maxresdefault.jpg`,
                            'url': venue.officialUrl,
                            'sameAs': venue.officialUrl,
                            'subjectOf': {
                                '@type': 'WebPage',
                                '@id': `${guideUrl}#webpage`,
                                'url': guideUrl,
                                'name': `${venue.name} Wedding Venue Guide`,
                            },
                        },
                    };
                }),
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Suspense fallback={<div className="min-h-screen bg-lucas-cream" />}>
                <SpacesClient venues={venues} />
            </Suspense>
        </>
    );
}
