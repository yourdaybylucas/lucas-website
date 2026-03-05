import { Suspense } from 'react';
import { Metadata } from 'next';
import { venues } from '@/data/venues';
import SpacesClient from './spaces-client';

export const metadata: Metadata = {
    title: 'THE LEDGER : HONEST SPACES // LUCAS',
    description: 'an inventory of honest spaces across ontario and worldwide. intimate, grand, and unconventional environments for the day.',
    openGraph: {
        title: 'THE LEDGER // LUCAS',
        description: 'an inventory of honest spaces across ontario and worldwide.',
        url: 'https://lucasfilm.com/spaces',
        siteName: 'LUCAS : Wedding Filmmaker',
        images: [
            {
                url: '/og-ledger.jpg', 
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
};

export default function SpacesPage() {
    // the json-ld payload for the bots. 
    // it bottles the data without compromising our visual aesthetic.
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
                'description': `honest, nostalgic wedding cinematography at ${venue.name}. ${venue.technicalNote}`,
                // reminder: generate these thumbnails later
                'image': `https://lucasfilm.com/assets/stills/${venue.id}.jpg`, 
                'url': `https://lucasfilm.com/spaces?space=${venue.id}`
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
