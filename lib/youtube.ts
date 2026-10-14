/**
 * Shared policy for every YouTube embed on the site.
 * rel=0 limits related videos to the source channel; YouTube still shows suggestions.
 */
export function getYouTubeEmbedUrl(
    videoId: string,
    { autoplay = false }: { autoplay?: boolean } = {},
) {
    const parameters = new URLSearchParams({
        autoplay: autoplay ? '1' : '0',
        color: 'white',
        rel: '0',
        modestbranding: '1',
        playsinline: '1',
    });

    return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${parameters}`;
}
