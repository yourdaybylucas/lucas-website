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

    return {
        title: `${activeVenue.name.toUpperCase()} // THE LEDGER : LUCAS`,
        description: `honest, nostalgic wedding cinematography at ${activeVenue.name}, ${activeVenue.location}. ${activeVenue.fieldNotes}`,
        alternates: {
            canonical: `/spaces/${activeVenue.id}`,
        },
        openGraph: {
            title: `${activeVenue.name.toUpperCase()} // THE LEDGER`,
            description: `field notes and visual documentation from ${activeVenue.name}.`,
            url: `https://www.yourdaybylucas.com/spaces/${activeVenue.id}`,
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

    const venueJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'EventVenue',
        'name': activeVenue.name,
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': activeVenue.location,
            'addressRegion': 'ON',
            'addressCountry': 'CA',
        },
        'description': `honest, nostalgic wedding cinematography at ${activeVenue.name}. ${activeVenue.fieldNotes}`,
        'image': `https://img.youtube.com/vi/${activeVenue.visualEmbed}/maxresdefault.jpg`,
        'url': `https://www.yourdaybylucas.com/spaces/${activeVenue.id}`,
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
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
                'item': `https://www.yourdaybylucas.com/spaces/${activeVenue.id}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(venueJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Suspense fallback={<div className="min-h-screen bg-lucas-cream" />}>
                <SpacesClient venues={venues} activeVenueId={activeVenue.id} />
            </Suspense>
        </>
    );
}
