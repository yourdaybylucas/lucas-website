import { Suspense } from 'react';
import { Metadata } from 'next';
import { venues } from '@/data/venues';
import SpacesClient from './spaces-client';

export const metadata: Metadata = {
    title: 'THE LEDGER : HONEST SPACES // LUCAS',
    description: 'an inventory of honest spaces across ontario and worldwide. intimate, grand, and unconventional environments for the day.',
    alternates: {
        canonical: '/spaces',
    },
    openGraph: {
        title: 'THE LEDGER // LUCAS',
        description: 'an inventory of honest spaces across ontario and worldwide.',
        url: 'https://www.yourdaybylucas.com/spaces',
    }
};

export default function SpacesPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': venues.map((venue, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
                '@type': 'EventVenue',
                'name': venue.name,
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': venue.location,
                    'addressRegion': 'ON',
                    'addressCountry': 'CA'
                },
                'description': `honest, nostalgic wedding cinematography at ${venue.name}. ${venue.fieldNotes}`,
                // automatically pulling the high-res youtube thumbnail for the schema
                'image': `https://img.youtube.com/vi/${venue.visualEmbed}/maxresdefault.jpg`, 
                'url': `https://www.yourdaybylucas.com/spaces/${venue.id}`
            }
        }))
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
