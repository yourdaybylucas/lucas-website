import { NextRequest } from "next/server";

const THUMBNAIL_VARIANTS = ["maxresdefault", "sddefault", "hqdefault"] as const;
const YOUTUBE_VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;

export const revalidate = 86400;

type RouteContext = {
    params: Promise<{ videoId: string }>;
};

export async function GET(_request: NextRequest, { params }: RouteContext) {
    const { videoId } = await params;

    if (!YOUTUBE_VIDEO_ID.test(videoId)) {
        return new Response("Invalid YouTube video ID", { status: 400 });
    }

    for (const variant of THUMBNAIL_VARIANTS) {
        try {
            const response = await fetch(
                `https://img.youtube.com/vi/${videoId}/${variant}.jpg`,
                { next: { revalidate } }
            );

            if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
                continue;
            }

            return new Response(await response.arrayBuffer(), {
                headers: {
                    "Content-Type": response.headers.get("content-type") ?? "image/jpeg",
                    "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
                    "X-YouTube-Thumbnail-Variant": variant,
                },
            });
        } catch {
            // Try the next available YouTube thumbnail rendition.
        }
    }

    return new Response("YouTube thumbnail unavailable", {
        status: 502,
        headers: { "Cache-Control": "public, max-age=60, s-maxage=300" },
    });
}
