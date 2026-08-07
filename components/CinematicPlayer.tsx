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
        <div 
            className={`relative w-full aspect-video bg-[#0a1118] overflow-hidden cursor-pointer group shadow-2xl border border-lucas-navy/10 ${className}`}
            onClick={() => setIsPlaying(true)}
        >
            <Image
                key={`${videoId}-${thumbnailVariant}`}
                src={`https://img.youtube.com/vi/${videoId}/${thumbnailVariant}.jpg`}
                alt={altText}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out z-0"
                onError={() => {
                    if (allowLowResThumbnailFallback && thumbnailVariant === "maxresdefault") {
                        setThumbnailVariant("hqdefault");
                    }
                }}
            />
            
            {/* The Zissou Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-lucas-orange/90 backdrop-blur-md flex items-center justify-center text-lucas-cream transform group-hover:scale-110 transition-transform duration-500 ease-out shadow-xl">
                    <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
