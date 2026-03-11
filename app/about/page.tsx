// app/about/page.tsx
"use client";

import { useState } from "react";
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

const timeline = [
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
        desc: "filmed a friend's wedding as a gift. everything changed. shoutout Lindsay + Seth",
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
        desc: "welcomed our son Sam to the world.",
        img: "/images/about/about_7.jpg",
    },
    {
        id: "07",
        year: "Present",
        desc: "over 200 weddings filmed. the passion remains exactly the same.",
        img: "/images/about/about_8.jpg",
    },
];

export default function AboutPage() {
    const [activeIndex, setActiveIndex] = useState(0);

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
                            src="/images/about/about_1.jpg"
                            alt="Lucas Bulger"
                            fill
                            className="object-cover transition-all duration-1000"
                        />
                    </div>

                    <div className="absolute -bottom-4 -right-2 md:-right-6 bg-lucas-cream border border-lucas-navy px-4 py-2 font-sans text-[10px] tracking-zissou uppercase text-lucas-navy z-10 shadow-xl">
                        Fig. 00 — LUCAS
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
                            in front of me - (travel landscapes at the time) into something tangible. the
                            drive was always to render an environment as close to reality as possible.
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
                    
                    {/* Left Column: The Scrolling Ledger */}
                    <div className="w-full md:w-1/2 flex flex-col relative">
                        
                        {/* Section Header - Sticky so it stays visible while scrolling the list */}
                        <div className="mb-12 md:mb-16 border-b border-lucas-slate/20 pb-6 flex items-end justify-between sticky top-24 bg-lucas-navy/90 backdrop-blur-md z-30 pt-4">
                            <h2 className="font-sans text-3xl md:text-4xl uppercase tracking-tight font-bold text-lucas-cream leading-none">
                                The Record
                            </h2>
                            <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase hidden md:block">
                                [ Documented History ]
                            </span>
                        </div>

                        {/* The Timeline Spine */}
                        <div className="relative">
                            {/* The physical line (desktop only) */}
                            <div className="absolute left-[15px] top-4 bottom-12 w-px bg-lucas-slate/20 z-0 hidden md:block"></div>

                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    // Triggers when the item is roughly in the middle of the viewport
                                    onViewportEnter={() => setActiveIndex(idx)}
                                    viewport={{ margin: "-45% 0px -45% 0px" }}
                                    className={`relative z-10 flex gap-6 md:gap-8 py-10 md:py-16 transition-all duration-700 ${
                                        activeIndex === idx ? 'opacity-100' : 'opacity-40 blur-[1px] md:blur-none'
                                    }`}
                                >
                                    {/* Desktop Indicator Node */}
                                    <div className="hidden md:flex flex-col items-center pt-1">
                                        <div className={`w-8 h-8 rounded-none border flex items-center justify-center bg-lucas-navy transition-colors duration-500 relative z-10 ${
                                            activeIndex === idx ? 'border-lucas-orange' : 'border-lucas-slate/30'
                                        }`}>
                                            <div className={`w-2 h-2 transition-all duration-500 ${
                                                activeIndex === idx ? 'bg-lucas-orange scale-100' : 'bg-transparent scale-0'
                                            }`}></div>
                                        </div>
                                    </div>

                                    {/* Text & Content */}
                                    <div className="flex flex-col w-full">
                                        <div className="flex items-center justify-between mb-4 border-b border-lucas-slate/10 pb-3">
                                            <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                                                Fig. {item.id}
                                            </span>
                                            <span className={`font-sans text-[11px] tracking-zissou uppercase transition-colors duration-500 border px-2 py-1 ${
                                                activeIndex === idx ? 'text-lucas-orange border-lucas-orange/30 bg-lucas-orange/10 font-bold' : 'text-lucas-cream border-transparent'
                                            }`}>
                                                {item.year}
                                            </span>
                                        </div>
                                        <p className={`font-serif text-2xl md:text-[clamp(1.75rem,2vw,2rem)] lowercase italic leading-relaxed transition-colors duration-500 ${
                                            activeIndex === idx ? 'text-lucas-cream' : 'text-lucas-cream/70'
                                        }`}>
                                            {item.desc}
                                        </p>

                                        {/* Mobile Inline Image (Only shows on small screens) */}
                                        <div className="md:hidden mt-8 relative w-full aspect-square p-2 bg-lucas-cream/5 border border-lucas-slate/20 shadow-xl overflow-hidden">
                                            <div className="relative w-full h-full bg-[#0a1118]">
                                                <Image
                                                    src={item.img}
                                                    alt={item.year}
                                                    fill
                                                    className="object-cover scale-105"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: The Visual Anchor (Sticky on Desktop) */}
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
                                            initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={timeline[activeIndex].img}
                                                alt={`Evidence ${timeline[activeIndex].id}`}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
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

            {/* 03. THE METHODOLOGY (The Ledger) */}
            <section className="relative bg-lucas-sage py-24 md:py-32 px-6 border-t border-lucas-navy overflow-hidden">
                {/* physical texture layer */}
                <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>

                <div className="relative z-10 max-w-6xl mx-auto flex flex-col">
                    
                    {/* The Zissou Compressed Header */}
                    <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-lucas-navy pb-6 gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full animate-pulse"></span>
                                <span className="font-sans text-[10px] tracking-zissou text-lucas-navy uppercase font-bold">
                                    [ System Process ]
                                </span>
                            </div>
                            <h2 className="font-sans text-4xl md:text-5xl uppercase font-bold text-lucas-navy leading-none tracking-tight">
                                The Methodology.
                            </h2>
                        </div>
                        <div className="flex flex-col md:items-end text-left md:text-right">
                            <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-navy/70">Document Ref //</span>
                            <span className="font-sans text-[10px] tracking-widest uppercase text-lucas-navy font-bold">LC-MTHD-01</span>
                        </div>
                    </div>

                    {/* The Strict Grid Ledger */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        /* gap-px with a navy background creates perfect 1px structural borders between items */
                        className="grid grid-cols-1 md:grid-cols-2 bg-lucas-navy gap-px border border-lucas-navy shadow-2xl"
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
                                desc: "i focus my energy on what matters for your film. find me capturing the smiles during cocktail hour, instead of your family photos.",
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
                                className="group relative bg-lucas-sage hover:bg-lucas-cream transition-colors duration-slow flex flex-col p-8 md:p-12 min-h-[320px] justify-between z-10"
                            >
                                {/* Top Meta / Indexing */}
                                <div className="flex justify-between items-start mb-12">
                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-navy font-bold uppercase px-2 py-1 border border-lucas-navy/30 group-hover:border-lucas-orange group-hover:text-lucas-orange transition-colors duration-slow">
                                        Fig. {item.num}
                                    </span>
                                    {/* Geometric detail */}
                                    <div className="w-2.5 h-2.5 border border-lucas-navy/40 group-hover:bg-lucas-orange group-hover:border-lucas-orange transition-all duration-slow"></div>
                                </div>

                                {/* The Soul (Content) */}
                                <div>
                                    <h3 className="font-sans text-2xl md:text-3xl uppercase tracking-tight font-bold text-lucas-navy mb-4 group-hover:translate-x-2 transition-transform duration-slow flex items-center gap-4">
                                        {item.title}
                                        <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-slow text-lucas-orange text-xl">
                                            ↗
                                        </span>
                                    </h3>
                                    <p className="font-serif text-[clamp(1.125rem,1.4vw,1.35rem)] text-lucas-navy lowercase leading-relaxed italic pr-4">
                                        {item.desc}
                                    </p>
                                </div>
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
