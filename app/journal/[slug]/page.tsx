// app/journal/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { journalEntries } from '@/data/journal';
import JournalPostClient from './journal-post-client';

type Props = {
    params: Promise<{ slug: string }>
}

// 1. DYNAMIC SEO METADATA
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = journalEntries.find(p => p.slug === resolvedParams.slug);

    if (!post) {
        return { title: 'Record Not Found // LUCAS' };
    }

    // prioritizing the venue in the title for google search ranking
    return {
        title: `${post.location.toUpperCase()} WEDDING FILM // ${post.title.toUpperCase()} : LUCAS`,
        description: `honest, nostalgic wedding cinema for ${post.title} at ${post.location}. shot on ${post.format}. ${post.excerpt}`,
        openGraph: {
            title: `${post.location} Wedding Film // LUCAS`,
            description: post.excerpt,
            url: `https://www.yourdaybylucas.com/journal/${post.slug}`,
            images: [`https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`],
        }
    }
}

export default async function JournalPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = journalEntries.find(p => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    // 2. JSON-LD SCHEMA (Tells Google this is a video shot at a specific physical place)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        'name': `${post.title} - ${post.location} Wedding Film`,
        'description': post.excerpt,
        'thumbnailUrl': `https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`,
        'uploadDate': new Date(post.date).toISOString(),
        'embedUrl': `https://www.youtube.com/embed/${post.videoId}`,
        'locationCreated': {
            '@type': 'Place',
            'name': post.location
        },
        'author': {
            '@type': 'Person',
            'name': 'Lucas Bulger'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* pass the data down to the animated client file */}
            <JournalPostClient post={post} />
        </>
    );
}
