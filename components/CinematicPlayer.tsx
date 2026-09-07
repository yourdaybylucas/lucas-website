"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CinematicPlayerProps {
    videoId: string;
    altText?: string;
    className?: string;
    autoPlayDefault?: boolean;
    allowLowResThumbnailFallback?: boolean;
    thumbnailQuality?: "maxresdefault" | "sddefault";
}

export default function CinematicPlayer({
    videoId,
    altText = "LUCAS Wedding Film",
    className = "",
    autoPlayDefault = false,
    allowLowResThumbnailFallback = false,
    thumbnailQuality = "maxresdefault",
}: CinematicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(autoPlayDefault);
    const [thumbnailVariant, setThumbnailVariant] = useState<"maxresdefault" | "sddefault" | "hqdefault">(thumbnailQuality);

    useEffect(() => {
        setThumbnailVariant(thumbnailQuality);
    }, [thumbnailQuality, videoId]);

    if (isPlaying) {
        return (
            <div className={`relative w-full aspect-video bg-[#0a1118] overflow-hidden border border-lucas-navy/10 ${className}`}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&color=white&rel=0&modestbranding=1&playsinline=1`}
                    title={altText}
                    className="w-full h-full absolute top-0 left-0 border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }

    return (
        <button
            type="button"
            aria-label={`Play film: ${altText}`}
            className={`relative block w-full aspect-video bg-[#0a1118] overflow-hidden cursor-pointer group/player border border-lucas-navy/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange ${className}`}
            onClick={() => setIsPlaying(true)}
        >
            <Image
                key={`${videoId}-${thumbnailVariant}`}
                src={`https://img.youtube.com/vi/${videoId}/${thumbnailVariant}.jpg`}
                alt={altText}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover z-0"
                onError={() => {
                    if (allowLowResThumbnailFallback && thumbnailVariant === "maxresdefault") {
                        setThumbnailVariant("hqdefault");
                    }
                }}
            />
            
            {/* Only the play control changes colour; the film stays still. */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-lucas-orange flex items-center justify-center text-lucas-cream group-hover/player:bg-lucas-cream group-hover/player:text-lucas-orange group-focus-visible/player:bg-lucas-cream group-focus-visible/player:text-lucas-orange">
                    <svg aria-hidden="true" className="w-5 h-5 md:w-6 md:h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
            </span>
        </button>
    );
}
