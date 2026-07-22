// app/journal/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { journalEntries } from '@/data/journal';
import { getYouTubeThumbnailUrl } from '@/lib/youtube-thumbnail';
import JournalPostClient from './journal-post-client';

type Props = {
    params: Promise<{ slug: string }>
}

export const dynamicParams = false;

export function generateStaticParams() {
    return journalEntries.map((post) => ({ slug: post.slug }));
}

// 1. DYNAMIC SEO METADATA
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = journalEntries.find(p => p.slug === resolvedParams.slug);

    if (!post) {
        return { title: 'Record Not Found // LUCAS' };
    }

    const pageUrl = `https://www.yourdaybylucas.com/journal/${post.slug}`;
    const thumbnailUrl = getYouTubeThumbnailUrl(post.primaryVideo.id);

    return {
        title: post.seo.title,
        description: post.seo.description,
        alternates: {
            canonical: `/journal/${post.slug}`,
        },
        openGraph: {
            type: 'video.other',
            title: post.seo.title,
            description: post.seo.description,
            url: pageUrl,
            siteName: 'LUCAS : Wedding Filmmaker',
            locale: 'en_CA',
            images: [thumbnailUrl],
            videos: [`https://www.youtube.com/embed/${post.primaryVideo.id}`],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.seo.title,
            description: post.seo.description,
            images: [thumbnailUrl],
        }
    }
}

export default async function JournalPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = journalEntries.find(p => p.slug === resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const pageUrl = `https://www.yourdaybylucas.com/journal/${post.slug}`;
    const videos = [post.primaryVideo, ...(post.secondaryVideo ? [post.secondaryVideo] : [])];
    const placeJsonLd = {
        '@type': 'Place',
        'name': post.place.name,
        ...(post.place.url ? { 'sameAs': post.place.url } : {}),
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': post.place.locality,
            ...(post.place.region ? { 'addressRegion': post.place.region } : {}),
            'addressCountry': post.place.country,
        },
    };
    const videoJsonLd = videos.map((video, index) => ({
        '@type': 'VideoObject',
        '@id': `${pageUrl}#video-${index + 1}`,
        'name': video.title,
        'description': `${video.title}. ${post.excerpt}`,
        'thumbnailUrl': [getYouTubeThumbnailUrl(video.id)],
        'uploadDate': video.uploadDate,
        'duration': video.duration,
        'embedUrl': `https://www.youtube.com/embed/${video.id}`,
        'inLanguage': 'en-CA',
        'isFamilyFriendly': true,
        'locationCreated': placeJsonLd,
        'author': {
            '@type': 'Person',
            '@id': 'https://www.yourdaybylucas.com/about#lucas-bulger',
            'name': 'Lucas Bulger',
            'url': 'https://www.yourdaybylucas.com/about',
        },
    }));

    const webPageJsonLd = {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        'url': pageUrl,
        'name': post.seo.title,
        'description': post.seo.description,
        'datePublished': post.publishedAt,
        'dateModified': post.updatedAt,
        'inLanguage': 'en-CA',
        'mainEntity': { '@id': `${pageUrl}#video-1` },
        'video': videos.map((_, index) => ({ '@id': `${pageUrl}#video-${index + 1}` })),
        'author': {
            '@type': 'Person',
            '@id': 'https://www.yourdaybylucas.com/about#lucas-bulger',
            'name': 'Lucas Bulger',
            'url': 'https://www.yourdaybylucas.com/about',
        },
        'about': {
            '@type': 'Place',
            'name': post.place.name,
            ...(post.place.url ? { 'sameAs': post.place.url } : {}),
        },
    };

    const breadcrumbJsonLd = {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
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
                'name': 'Journal',
                'item': 'https://www.yourdaybylucas.com/journal',
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': `${post.place.name} Wedding Film`,
                'item': pageUrl,
            },
        ],
    };

    const journalJsonLd = {
        '@context': 'https://schema.org',
        '@graph': [webPageJsonLd, ...videoJsonLd, breadcrumbJsonLd],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(journalJsonLd).replace(/</g, '\\u003c') }}
            />
            {/* pass the data down to the animated client file */}
            <JournalPostClient post={post} />
        </>
    );
}
