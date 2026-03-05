import { Suspense } from 'react';
import { Metadata } from 'next';
import { venues } from '@/data/venues';
import SpacesClient from './spaces-client';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const spaceQuery = searchParams?.space as string | undefined;
    const activeVenue = spaceQuery ? venues.find(v => v.id === spaceQuery) : null;

    if (activeVenue) {
        return {
            title: `${activeVenue.name.toUpperCase()} // THE LEDGER : LUCAS`,
            description: `honest, nostalgic wedding cinematography at ${activeVenue.name}, ${activeVenue.location}. ${activeVenue.technicalNote}`,
            openGraph: {
                title: `${activeVenue.name.toUpperCase()} // THE LEDGER`,
                description: `field notes and visual documentation from ${activeVenue.name}.`,
                url: `https://www.yourdaybylucas.com/spaces?space=${activeVenue.id}`,
            }
        }
    }

    // fallback for the main directory
    return {
        title: 'THE LEDGER : HONEST SPACES // LUCAS',
        description: 'an inventory of honest spaces across ontario and worldwide. intimate, grand, and unconventional environments for the day.',
        openGraph: {
            title: 'THE LEDGER // LUCAS',
            description: 'an inventory of honest spaces across ontario and worldwide.',
            url: 'https://www.yourdaybylucas.com/spaces',
        }
    }
}

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
                'description': `honest, nostalgic wedding cinematography at ${venue.name}. ${venue.technicalNote}`,
                // reminder: ensure these images actually exist in your public folder so the schema doesn't throw errors
                'image': `https://www.yourdaybylucas.com/images/stills/${venue.id}.jpg`, 
                'url': `https://www.yourdaybylucas.com/spaces?space=${venue.id}`
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
