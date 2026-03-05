// app/spaces/page.tsx

// ... existing imports

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const spaceQuery = searchParams?.space as string | undefined;
    const activeVenue = spaceQuery ? venues.find(v => v.id === spaceQuery) : null;

    if (activeVenue) {
        return {
            title: `${activeVenue.name.toUpperCase()} // THE LEDGER : LUCAS`,
            // Changed technicalNote to fieldNotes
            description: `honest, nostalgic wedding cinematography at ${activeVenue.name}, ${activeVenue.location}. ${activeVenue.fieldNotes}`,
            openGraph: {
                title: `${activeVenue.name.toUpperCase()} // THE LEDGER`,
                description: `field notes and visual documentation from ${activeVenue.name}.`,
                url: `https://www.yourdaybylucas.com/spaces?space=${activeVenue.id}`,
            }
        }
    }
    // ...
}

export default function SpacesPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': venues.map((venue, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
                // ...
                // Changed technicalNote to fieldNotes
                'description': `honest, nostalgic wedding cinematography at ${venue.name}. ${venue.fieldNotes}`,
                'image': `https://img.youtube.com/vi/${venue.visualEmbed}/maxresdefault.jpg`, 
                'url': `https://www.yourdaybylucas.com/spaces?space=${venue.id}`
            }
        }))
    };
    // ...
}
