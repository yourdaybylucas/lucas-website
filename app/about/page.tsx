"use client";

import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    Variants,
    AnimatePresence,
    useMotionValueEvent,
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
    const recordRef = useRef<HTMLElement>(null);
    const { scrollYProgress: recordScroll } = useScroll({
        target: recordRef,
        offset: ["start start", "end end"],
    });

    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(recordScroll, "change", (latest) => {
        const newIndex = Math.min(
            Math.floor(latest * timeline.length),
            timeline.length - 1
        );

        setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
    });

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

            {/* 02. THE RECORD */}
            <section
                id="record"
                ref={recordRef}
                className="relative bg-lucas-navy border-t border-lucas-slate/20"
                style={{ height: `${timeline.length * 65}vh` }}
            >
                <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>

                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 z-10">
                    {/* Section Header - Locked to Top */}
                    <div className="absolute top-32 md:top-40 left-6 md:left-12 right-6 md:right-12 flex justify-between items-start md:items-center border-b border-lucas-cream/20 pb-4">
                        <h2 className="font-sans text-3xl md:text-4xl uppercase tracking-tight font-bold text-lucas-cream leading-none">
                            The Record
                        </h2>
                        <div className="flex items-center gap-4">
                            <span className="w-2 h-2 bg-lucas-orange rounded-full"></span>
                            <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                                [ Documented History ]
                            </span>
                        </div>
                    </div>

                    {/* The Active Frame */}
                    <div className="relative w-full max-w-6xl mx-auto flex items-center mt-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -40, filter: "blur(4px)" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24"
                            >
                                {/* Left Side: The Metadata & Narrative */}
                                <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
                                    <div className="flex items-center justify-between mb-8 border-b border-lucas-cream/10 pb-4">
                                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                                            Fig. {timeline[activeIndex].id}
                                        </span>
                                        <span className="font-sans text-[12px] tracking-zissou text-lucas-orange font-bold uppercase border border-lucas-orange/20 px-3 py-1 bg-lucas-orange/10">
                                            {timeline[activeIndex].year}
                                        </span>
                                    </div>
                                    <p className="font-serif text-2xl md:text-4xl text-lucas-cream lowercase italic leading-relaxed md:leading-snug pr-0 md:pr-12">
                                        {timeline[activeIndex].desc}
                                    </p>
                                </div>

                                {/* Right Side: The Visual Evidence */}
                                <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                                    <div className="relative w-full max-w-[320px] md:max-w-[450px] aspect-square p-2 md:p-3 bg-lucas-cream/5 border border-lucas-cream/20 shadow-2xl backdrop-blur-sm">
                                        <div className="relative w-full h-full bg-[#0a1118] overflow-hidden">
                                            <Image
                                                src={timeline[activeIndex].img}
                                                alt={`Evidence ${timeline[activeIndex].id}`}
                                                fill
                                                className="object-cover scale-105"
                                                priority
                                            />
                                        </div>

                                        <div className="absolute -bottom-4 -left-4 bg-lucas-cream text-lucas-navy font-sans text-[9px] tracking-zissou uppercase px-4 py-2 shadow-xl z-20">
                                            Frame {activeIndex + 1} / {timeline.length}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Scroll Progress Track (Bottom) */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-px bg-lucas-slate/30 hidden md:block">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-lucas-orange"
                            style={{
                                width: `${((activeIndex + 1) / timeline.length) * 100}%`,
                                transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* 03. THE METHODOLOGY (The Ledger) */}
            <section className="relative bg-lucas-cream py-24 md:py-32 px-6 border-t border-lucas-slate/20 overflow-hidden">
                {/* physical texture layer */}
                <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>

                <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
                    {/* Ledger Header */}
                    <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-1 h-1 bg-lucas-orange rounded-full"></span>
                            <span className="font-sans text-[10px] tracking-zissou text-lucas-navy uppercase">
                                [ The Methodology ]
                            </span>
                            <span className="w-1 h-1 bg-lucas-orange rounded-full"></span>
                        </div>
                        <h2 className="font-sans text-4xl md:text-5xl uppercase font-bold text-lucas-navy leading-[1] mb-6">
                            How I Work.
                        </h2>
                        <p className="font-serif text-lg md:text-xl text-lucas-navy lowercase italic max-w-xl text-center">
                            the internal logic behind the lens.
                        </p>
                    </div>

                    {/* The Grid / Matrix */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 w-full border-t border-l border-lucas-navy/15 bg-lucas-slate shadow-2xl"
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
                                className="border-r border-b border-lucas-navy/15 p-8 md:p-12 group hover:bg-lucas-cream transition-colors duration-slow flex flex-col justify-between min-h-[280px]"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <h3 className="font-sans text-xl uppercase tracking-widest text-lucas-navy">
                                        {item.title}
                                    </h3>
                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-navy/50 group-hover:text-lucas-orange transition-colors duration-slow">
                                        Fig. {item.num}
                                    </span>
                                </div>
                                <p className="font-serif text-[clamp(1.125rem,1.5vw,1.35rem)] text-lucas-navy lowercase leading-relaxed">
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
