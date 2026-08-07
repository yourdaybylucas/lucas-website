// app/about/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
    motion,
    Variants,
    AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

type TimelineEntry = {
    id: string;
    year: string;
    desc: string;
    img: string;
    alt?: string;
    credit?: string;
};

const timeline: TimelineEntry[] = [
    {
        id: "01",
        year: "2014",
        desc: "bought a gopro to document travels. the initial spark.",
        img: "/images/about/about_2.jpg",
    },
    {
        id: "02",
        year: "2015",
        desc: "became obsessed. purchased a proper camera.",
        img: "/images/about/about_4.jpg",
    },
    {
        id: "03",
        year: "2016",
        desc: "filmed a friend's wedding as a gift. everything changed. shoutout lindsay + seth",
        img: "/images/about/about_3.jpg",
    },
    {
        id: "04",
        year: "2019",
        desc: "went full time. never looked back",
        img: "/images/about/about_6.jpg",
    },
    {
        id: "05",
        year: "2021",
        desc: "married heidi, the love of my life.",
        img: "/images/about/about_5.jpg",
    },
    {
        id: "06",
        year: "2025",
        desc: "welcomed our son sam to the world.",
        img: "/images/about/about_7.jpg",
    },
    {
        id: "07",
        year: "Present",
        desc: "over 200 weddings filmed. the passion remains exactly the same.",
        img: "/images/about/about_8_lydia-ivy-sat20.jpg",
        alt: "Lucas filming a wedding reception beneath palm trees",
        credit: "Lydia Ivy Photography",
    },
];

export default function AboutPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let animationFrame: number | null = null;

        const updateActiveEntry = () => {
            const viewportCentre = window.innerHeight / 2;
            let nearestIndex = 0;
            let nearestDistance = Number.POSITIVE_INFINITY;

            rowRefs.current.forEach((row, index) => {
                if (!row) return;

                const rect = row.getBoundingClientRect();
                const rowCentre = rect.top + rect.height / 2;
                const distanceFromCentre = Math.abs(rowCentre - viewportCentre);

                if (distanceFromCentre < nearestDistance) {
                    nearestDistance = distanceFromCentre;
                    nearestIndex = index;
                }
            });

            setActiveIndex((currentIndex) =>
                currentIndex === nearestIndex ? currentIndex : nearestIndex
            );
            animationFrame = null;
        };

        const queueUpdate = () => {
            if (animationFrame !== null) return;
            animationFrame = window.requestAnimationFrame(updateActiveEntry);
        };

        updateActiveEntry();
        window.addEventListener("scroll", queueUpdate, { passive: true });
        window.addEventListener("resize", queueUpdate);

        return () => {
            window.removeEventListener("scroll", queueUpdate);
            window.removeEventListener("resize", queueUpdate);
            if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <main className="bg-lucas-cream">
            {/* 01. THE INTRODUCTION (Hero) */}
            <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-32 pb-32 md:pb-40 max-w-7xl mx-auto gap-12 md:gap-16 lg:gap-24">
                {/* The Portrait */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-[85%] max-w-[300px] md:w-2/5 md:max-w-[380px] shrink-0 relative aspect-[4/5] bg-lucas-navy/5 shadow-2xl p-2 md:p-3 border border-lucas-slate/20 mt-8 md:mt-0"
                >
                    <div className="relative w-full h-full bg-[#0a1118] overflow-hidden group">
                        <Image
                            src="/images/about/about_1.2.JPG"
                            alt="Lucas Bulger"
                            fill
                            className="object-cover transition-all duration-1000"
                        />
                    </div>

                    <div className="absolute -bottom-4 -right-2 md:-right-6 flex flex-col bg-lucas-cream border border-lucas-navy px-4 py-2 z-10 shadow-xl">
                        <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-navy font-bold">
                            Fig. 00 — On Location
                        </span>
                        <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate mt-0.5">
                            Documented by a guest
                        </span>
                    </div>
                </motion.div>

                {/* The Narrative (The Passion) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="w-full md:w-3/5 flex flex-col items-start text-left"
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-orange uppercase border border-lucas-orange/20 bg-lucas-orange/5 px-2 py-0.5 rounded-sm">
                            [ The Introduction ]
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="font-sans text-[clamp(2.25rem,4vw,4.5rem)] uppercase font-bold text-lucas-navy leading-[0.9] tracking-tight mb-8"
                    >
                        A Hobby.
                        <br />
                        An Obsession.
                        <br />
                        <span className="text-lucas-orange italic font-serif font-light tracking-normal lowercase pr-4">
                            a way of life.
                        </span>
                    </motion.h1>

                    <motion.div
                        variants={fadeUp}
                        className="font-serif text-[clamp(1rem,1.5vw,1.25rem)] text-lucas-navy lowercase leading-relaxed space-y-6 max-w-lg"
                    >
                        <p>
                            it started with a simple obsession: trying to translate the beauty of what was
                            in front of me (travel landscapes at the time) into something tangible. the
                            goal was always to render an environment as close to reality as possible.
                        </p>
                        <p>
                            wedding cinema became the natural progression of that. not to orchestrate a
                            40-point shot list, but to pay attention. to frame the unforced, human
                            interactions that carry weight.
                        </p>
                        <p className="text-lucas-slate italic border-l-2 border-lucas-orange/30 pl-4 py-1 mt-4">
                            i genuinely love doing this. the thrill hasn't worn off. i'm here to hang out,
                            keep things grounded, and document that elusive feeling.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Interactive Scroll Indicator (Reverse Triangle) */}
                <motion.button
                    onClick={() =>
                        document.getElementById("record")?.scrollIntoView({ behavior: "smooth" })
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group cursor-pointer p-4 z-20"
                    aria-label="Scroll to record"
                >
                    <span className="font-sans text-[9px] tracking-zissou uppercase text-lucas-slate group-hover:text-lucas-orange transition-colors duration-500">
                        [ Proceed ]
                    </span>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-lucas-orange transform group-hover:translate-y-1.5 transition-transform duration-500 ease-[0.16,1,0.3,1]"
                    >
                        <polygon points="12,21 2,5 22,5" />
                    </svg>
                </motion.button>
            </section>

            {/* 02. THE RECORD (The Ledger View) */}
            <section id="record" className="relative bg-lucas-navy border-t border-lucas-slate/20 py-24 md:py-32 px-6">
                <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>

                <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 lg:gap-24">
                    
                    {/* Left Column: The Spreadsheet Ledger */}
                    <div className="w-full md:w-1/2 flex flex-col relative">
                        
                        {/* Unified Sticky Header Group */}
                        <div className="sticky top-24 z-30 bg-lucas-navy/95 backdrop-blur-md pt-4 pb-4 border-b border-lucas-slate/20 mb-4">
                            <div className="flex items-end justify-between mb-8">
                                <h2 className="font-sans text-3xl md:text-4xl uppercase tracking-tight font-bold text-lucas-cream leading-none">
                                    The Record
                                </h2>
                                <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase hidden md:block">
                                    [ Documented History ]
                                </span>
                            </div>

                            {/* Spreadsheet Column Headers (Desktop) */}
                            <div className="hidden md:flex items-center gap-8 font-sans text-[9px] tracking-zissou uppercase text-lucas-slate">
                                <div className="flex items-center gap-6 w-1/3 shrink-0 pl-6">
                                    <span className="w-12">Ref</span>
                                    <span>Timestamp</span>
                                </div>
                                <div className="flex-1">
                                    <span>Observation</span>
                                </div>
                            </div>
                        </div>

                        {/* The Ledger Rows */}
                        <div className="relative flex flex-col">
                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    ref={(element) => {
                                        rowRefs.current[idx] = element;
                                    }}
                                    className={`group relative z-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 md:py-10 border-b border-lucas-slate/10 transition-all duration-700 ${
                                        activeIndex === idx
                                            ? 'opacity-100 bg-lucas-cream/[0.03]'
                                            : 'opacity-100 md:opacity-40 md:hover:opacity-70'
                                    }`}
                                >
                                    {/* Active Row Accent Line */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-500 ${
                                        activeIndex === idx ? 'bg-lucas-orange' : 'bg-transparent group-hover:bg-lucas-slate/20'
                                    }`}></div>

                                    {/* Spreadsheet Cells */}
                                    <div className="flex items-center md:items-start gap-6 md:w-1/3 shrink-0 pl-4 md:pl-6 pt-1">
                                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase w-12">
                                            [{item.id}]
                                        </span>
                                        <span className={`font-sans text-[11px] tracking-widest uppercase transition-colors duration-500 ${
                                            activeIndex === idx ? 'text-lucas-orange font-bold' : 'text-lucas-cream'
                                        }`}>
                                            {item.year}
                                        </span>
                                    </div>

                                    {/* The Entry */}
                                    <div className="flex-1 pl-4 md:pl-0 pr-4">
                                        <p className={`font-serif text-[1.25rem] md:text-[1.35rem] lowercase italic leading-relaxed transition-colors duration-500 ${
                                            activeIndex === idx ? 'text-lucas-cream' : 'text-lucas-cream/70'
                                        }`}>
                                            {item.desc}
                                        </p>

                                        {/* Mobile Inline Image */}
                                        <div className="md:hidden mt-8 relative w-full aspect-[4/5] p-2 bg-lucas-cream/5 border border-lucas-slate/20 shadow-xl overflow-hidden">
                                            <div className="relative w-full h-full bg-[#0a1118]">
                                                <Image
                                                    src={item.img}
                                                    alt={item.alt ?? item.year}
                                                    fill
                                                    className="object-cover scale-105"
                                                />
                                                {item.credit && (
                                                    <span className="absolute bottom-3 right-3 z-10 border border-lucas-cream/30 bg-lucas-navy/80 px-2.5 py-1.5 font-sans text-[7px] tracking-zissou uppercase text-lucas-cream backdrop-blur-sm">
                                                        Photo // {item.credit}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: The Visual Anchor */}
                    <div className="hidden md:block w-full md:w-1/2 relative">
                        <div className="sticky top-[25vh] pt-4">
                            {/* The Structural Frame */}
                            <div className="relative w-full max-w-[420px] ml-auto aspect-[4/5] bg-lucas-cream/5 p-3 border border-lucas-slate/20 shadow-2xl backdrop-blur-sm group">
                                
                                {/* Decorative crosshairs */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-lucas-cream/40"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-lucas-cream/40"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-lucas-cream/40"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-lucas-cream/40"></div>

                                <div className="relative w-full h-full bg-[#0a1118] overflow-hidden">
                                    <AnimatePresence>
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, scale: 1.02, filter: "blur(2px)" }}
                                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, scale: 0.98, filter: "blur(2px)" }}
                                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={timeline[activeIndex].img}
                                                alt={timeline[activeIndex].alt ?? `Evidence ${timeline[activeIndex].id}`}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                            {timeline[activeIndex].credit && (
                                                <span className="absolute bottom-3 right-3 z-10 border border-lucas-cream/30 bg-lucas-navy/80 px-2.5 py-1.5 font-sans text-[7px] tracking-zissou uppercase text-lucas-cream backdrop-blur-sm">
                                                    Photo // {timeline[activeIndex].credit}
                                                </span>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Dynamic Metadata Tab */}
                                <motion.div 
                                    key={`meta-${activeIndex}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -bottom-4 -left-4 bg-lucas-cream text-lucas-navy font-sans text-[9px] tracking-zissou uppercase px-4 py-2 shadow-xl z-20 flex flex-col gap-1 border border-lucas-navy/10"
                                >
                                    <span>Ref // {timeline[activeIndex].id}</span>
                                    <span className="text-lucas-orange font-bold">Year {timeline[activeIndex].year}</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        {/* 03. THE METHODOLOGY (The Ledger Grid) */}
            <section className="relative z-10 bg-lucas-cream py-24 md:py-32 px-6 md:px-12 border-t border-lucas-slate/20">
                <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>
                
                <div className="max-w-6xl mx-auto relative z-10">
                    
                    {/* The Interm Adjusted Header (Awaiting Field Notes Structure) */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4 border-b-2 border-lucas-navy pb-6">
                        <div className="flex items-end justify-between w-full">
                            <h2 className="font-sans text-3xl md:text-4xl uppercase tracking-tight font-bold text-lucas-navy leading-none">
                                How I Work.
                            </h2>
                            <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase hidden md:block">
                                [ System Process ]
                            </span>
                        </div>
                    </div>

                    {/* The Field Notes Architectural Grid */}
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-lucas-navy/20"
                    >
                        {[
                            {
                                num: "01",
                                title: "Anticipation",
                                desc: "you can't just be a fly on the wall and react to moments; by then, they're gone. you have to read the room and anticipate.",
                            },
                            {
                                num: "02",
                                title: "Intentionality",
                                desc: "i focus my energy on what matters for your film. find me documenting the smiles during cocktail hour, instead of your family photos.",
                            },
                            {
                                num: "03",
                                title: "Singular Focus",
                                desc: "this isn't a side project. wedding cinema is my full-time profession. my process is entirely dedicated to this specific craft.",
                            },
                            {
                                num: "04",
                                title: "Scarcity",
                                desc: "i strictly limit the number of commissions i take. keeping the calendar capped ensures my creative energy is fresh, and you get my absolute, undivided focus.",
                            },
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                variants={fadeUp}
                                className="group border-r border-b border-lucas-navy/20 p-6 lg:p-8 hover:bg-lucas-sage/10 transition-colors duration-500 flex flex-col justify-between min-h-[280px] lg:min-h-[320px] bg-lucas-cream"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-lucas-navy font-sans uppercase tracking-zissou text-[11px] lg:text-xs font-bold group-hover:text-lucas-orange transition-colors duration-500">
                                            {item.title}
                                        </span>
                                        <span className="text-lucas-slate font-sans uppercase tracking-zissou text-[9px] lg:text-[10px]">
                                            [ Principle ]
                                        </span>
                                    </div>
                                    <span className="text-lucas-slate font-sans text-xs group-hover:text-lucas-navy transition-colors duration-500">
                                        {item.num}
                                    </span>
                                </div>

                                <p className="font-serif text-[1.1rem] xl:text-[1.15rem] leading-[1.6] text-lucas-navy italic lowercase pr-2">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 04. THE CALL TO ACTION */}
            <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center border-t border-lucas-slate/20 bg-lucas-cream">
                <div className="absolute left-1/2 top-0 w-px h-16 bg-lucas-orange -translate-x-1/2"></div>

                <p className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] text-lucas-navy italic mb-10 max-w-2xl leading-snug pt-8">
                    if you align with the approach, i'd love to hear about the day you're building.
                </p>

                <Link
                    href="/#contact"
                    className="group relative inline-flex items-center justify-center px-12 py-5 font-sans text-[10px] md:text-xs tracking-zissou uppercase text-lucas-navy border border-lucas-navy overflow-hidden"
                >
                    <span className="absolute inset-0 w-full h-full bg-lucas-navy transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                    <span className="relative z-10 group-hover:text-lucas-cream transition-colors duration-500 delay-100">
                        Inquire For Availability
                    </span>
                </Link>
            </section>
        </main>
    );
}
