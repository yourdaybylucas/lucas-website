export const SITE_URL = "https://www.yourdaybylucas.com";

export function getYouTubeThumbnailPath(videoId: string) {
    return `/youtube-thumbnail/${encodeURIComponent(videoId)}`;
}

export function getYouTubeThumbnailUrl(videoId: string) {
    return `${SITE_URL}${getYouTubeThumbnailPath(videoId)}`;
}
