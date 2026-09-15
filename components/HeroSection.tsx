"use client";

import { motion } from "framer-motion";
import { useSyncExternalStore } from "react";

const desktopQuery = "(min-width: 768px)";

const subscribeToViewport = (onChange: () => void) => {
    const mediaQuery = window.matchMedia(desktopQuery);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
};

const getDesktopSnapshot = () => window.matchMedia(desktopQuery).matches;
const getServerDesktopSnapshot = () => false;

const clipGroups = [
    {
        side: "left",
        position: "top-[clamp(6rem,15svh,10rem)] md:left-[clamp(1.75rem,6vw,7rem)] md:top-[calc(50%+24px)]",
        clips: [
            { id: "01", src: "/videos/clip_01.mp4", mobile: true, placement: "-rotate-2 md:left-0 md:top-0" },
            { id: "07", src: "/videos/clip_02.mp4", mobile: false, placement: "z-20 rotate-1 md:left-[14%] md:top-[20%] lg:left-[26%]" },
            { id: "05", src: "/videos/clip_04.mp4", mobile: false, placement: "-rotate-1 md:left-[-8%] md:top-[52%]" },
            { id: "03", src: "/videos/clip_03.mp4", mobile: true, placement: "z-20 -translate-x-2 translate-y-3 rotate-2 md:left-[14%] md:top-[72%] lg:left-[22%]" },
        ],
    },
    {
        side: "right",
        position: "bottom-[clamp(4rem,15svh,10rem)] md:bottom-auto md:right-[clamp(1.75rem,6vw,7rem)] md:top-[calc(50%+48px)]",
        clips: [
            { id: "02", src: "/videos/clip_09.mp4", mobile: true, placement: "rotate-2 md:left-0 md:top-0" },
            { id: "04", src: "/videos/clip_07.mp4", mobile: false, placement: "z-20 -rotate-1 md:left-[-14%] md:top-[21%] lg:left-[-26%]" },
            { id: "06", src: "/videos/clip_06.mp4", mobile: false, placement: "rotate-1 md:left-[8%] md:top-[52%]" },
            { id: "09", src: "/videos/clip_08.mp4", mobile: true, placement: "z-20 -translate-x-2 translate-y-3 -rotate-2 md:left-[-12%] md:top-[72%] lg:left-[-20%]" },
        ],
    },
];

const FilmClip = ({ data }: { data: (typeof clipGroups)[number]["clips"][number] }) => {
    return (
        <div
            data-hero-clip={data.id}
            className={`relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-lucas-navy/10 md:absolute md:translate-x-0 md:translate-y-0 ${data.placement}`}
        >
            <video
                src={data.src}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full opacity-90 grayscale-[20%] contrast-[1.1] mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-grain mix-blend-overlay"></div>
        </div>
    );
};

export default function HeroSection() {
    const isDesktop = useSyncExternalStore(
        subscribeToViewport,
        getDesktopSnapshot,
        getServerDesktopSnapshot,
    );

    return (
        <section className="relative w-full h-[100svh] min-h-[38rem] md:min-h-[40rem] bg-lucas-cream overflow-hidden flex flex-col items-center justify-center [--hero-clip-width:min(19vw,calc((100svh-176px)/2.75),280px)] lg:[--hero-clip-width:min(21vw,calc((100svh-176px)/2.75),280px)]">

            {/* Loose pairs frame the title, with fewer films on mobile. */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="pointer-events-none absolute inset-0 z-10"
                aria-hidden="true"
            >
                {clipGroups.map((group) => (
                    <div
                        key={group.side}
                        data-hero-group={group.side}
                        className={`absolute inset-x-6 grid grid-cols-2 md:inset-x-auto md:block md:h-[calc(var(--hero-clip-width)*2.75)] md:w-[var(--hero-clip-width)] md:-translate-y-1/2 ${group.position}`}
                    >
                        {group.clips
                            .filter((clip) => clip.mobile || isDesktop)
                            .map((clip) => <FilmClip key={clip.id} data={clip} />)}
                    </div>
                ))}
            </motion.div>

            {/* Main Hero Content */}
            <div className="relative z-20 text-center flex flex-col items-center pointer-events-none">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate mb-12"
                >
                    Ontario // Worldwide
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center justify-center"
                >
                    <span className="font-sans font-medium text-sm md:text-base text-lucas-navy/70 uppercase tracking-[0.4em] mb-2 pl-3">
                        The Art Of
                    </span>
                    
                    <div className="flex items-baseline leading-none">
                        <span className="font-serif italic text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] text-lucas-navy lowercase tracking-tight">
                            noticing
                        </span>
                        <span className="font-serif text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] text-lucas-orange ml-2">
                            .
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
