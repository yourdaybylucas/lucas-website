import { journalEntries } from '@/data/journal';

const BASE_URL = 'https://www.yourdaybylucas.com';

function escapeXml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function durationToSeconds(duration: string) {
    const match = duration.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);

    if (!match) {
        return undefined;
    }

    const [, hours = '0', minutes = '0', seconds = '0'] = match;
    return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
}

export function GET() {
    const urls = journalEntries.map((post) => {
        const videos = [post.primaryVideo, ...(post.secondaryVideo ? [post.secondaryVideo] : [])];
        const videoEntries = videos.map((video) => {
            const duration = durationToSeconds(video.duration);
            const description = `${video.title}. ${post.excerpt}`;

            return [
                '    <video:video>',
                `      <video:thumbnail_loc>${escapeXml(`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`)}</video:thumbnail_loc>`,
                `      <video:title>${escapeXml(video.title)}</video:title>`,
                `      <video:description>${escapeXml(description)}</video:description>`,
                `      <video:player_loc allow_embed="yes">${escapeXml(`https://www.youtube.com/embed/${video.id}`)}</video:player_loc>`,
                ...(duration ? [`      <video:duration>${duration}</video:duration>`] : []),
                `      <video:publication_date>${escapeXml(video.uploadDate)}</video:publication_date>`,
                '      <video:family_friendly>yes</video:family_friendly>',
                '    </video:video>',
            ].join('\n');
        }).join('\n');

        return [
            '  <url>',
            `    <loc>${escapeXml(`${BASE_URL}/journal/${post.slug}`)}</loc>`,
            videoEntries,
            '  </url>',
        ].join('\n');
    }).join('\n');

    const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">',
        urls,
        '</urlset>',
    ].join('\n');

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=0, s-maxage=86400',
        },
    });
}
