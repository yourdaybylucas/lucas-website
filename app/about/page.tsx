"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// explicitly typing as Variants for strict Vercel builds
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

// stripped the bloat. just the honest facts, cataloged.
const timeline = [
    { id: "01", year: "2014", desc: "bought a gopro to document travels. the initial spark.", img: "/images/about/about_2.jpg" },
    { id: "02", year: "2015", desc: "became obsessed. purchased a proper camera.", img: "/images/about/about_3.jpg" },
    { id: "03", year: "2016", desc: "filmed a friend's wedding as a gift. everything changed.", img: "/images/about/about_4.jpg" },
    { id: "04", year: "2019", desc: "went full time.", img: "/images/about/about_5.jpg" },
    { id: "05", year: "2021", desc: "married heidi, the love of my life.", img: "/images/about/about_6.jpg" },
    { id: "06", year: "2021", desc: "documented the 100th narrative.", img: "/images/about/about_7.jpg" },
    { id: "07", year: "Present", desc: "over 200 narratives collected. the passion remains exactly the same.", img: "/images/about/about_8.jpg" },
];

export default function AboutPage() {
    // horizontal scroll reference
    const horizontalScrollRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: horizontalScrollRef });
    
    // natively calculates the exact width of the items and stops flush with the right viewport edge
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "calc(-100% + 100vw)"]); 

    // state for the sticky viewfinder
    const [activeImg, setActiveImg] = useState(timeline[0].img);

    return (
        <main className="bg-lucas-cream overflow-hidden">
            
            {/* 01. THE INTRODUCTION (Hero) */}
            <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-32 pb-24 max-w-7xl mx-auto gap-12 md:gap-24">
                
                {/* The Portrait */}
                <motion.div 
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-[3/4] bg-lucas-navy/5 shadow-2xl p-2 md:p-4 border border-lucas-slate/20 mt-12 md:mt-0"
                >
                    <div className="relative w-full h-full bg-[#0a1118] overflow-hidden group">
                        <Image 
                            src="/images/about/about_1.jpg" 
                            alt="Lucas Bulger" 
                            fill 
                            className="object-cover transition-all duration-1000" 
                        />
                    </div>
                    {/* Zissou Meta Tag */}
                    <div className="absolute -bottom-4 -right-2 md:-right-6 bg-lucas-cream border border-lucas-navy px-4 py-2 font-sans text-[10px] tracking-zissou uppercase text-lucas-navy z-10 shadow-xl">
                        Fig. 00 — The Director
                    </div>
                </motion.div>

                {/* The Narrative (The Passion) */}
                <motion.div 
                    initial="hidden" animate="visible" variants={staggerContainer}
                    className="w-full md:w-1/2 flex flex-col items-start text-left"
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-orange uppercase border border-lucas-orange/20 bg-lucas-orange/5 px-2 py-0.5 rounded-sm">
                            [ The Introduction ]
                        </span>
                    </motion.div>
                    
                    <motion.h1 variants={fadeUp} className="font-sans text-[clamp(2.25rem,4vw,4.5rem)] uppercase font-bold text-lucas-navy leading-[0.9] tracking-tight mb-8">
                        A Hobby.<br className="md:hidden" />
                        An Obsession.<br/>
                        <span className="text-lucas-orange italic font-serif font-light tracking-normal lowercase pr-4">a way of life.</span>
                    </motion.h1>

                    <motion.div variants={fadeUp} className="font-serif text-[clamp(1rem,1.5vw,1.25rem)] text-lucas-navy lowercase leading-relaxed space-y-6 max-w-lg">
                        <p>
                            it started with a simple obsession: trying to translate the beauty of what was in front of me - (travel landscapes at the time) into something tangible. the drive was always to render an environment as close to reality as possible.
                        </p>
                        <p>
                            wedding cinema became the natural progression of that. not to orchestrate a 40-point shot list, but to pay attention. to frame the unforced, human interactions that carry weight.
                        </p>
                        <p className="text-lucas-slate italic border-l-2 border-lucas-orange/30 pl-4 py-1 mt-4">
                            i genuinely love doing this. the thrill hasn't worn off. i'm here to hang out, keep things grounded, and document that elusive feeling.
                        </p>
                    </motion.div>
                </motion.div>
                
                {/* Interactive Scroll Indicator (Reverse Triangle) */}
                <motion.button 
                    onClick={() => document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' })}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group cursor-pointer p-4"
                    aria-label="Scroll to archive"
                >
                    <span className="font-sans text-[9px] tracking-zissou uppercase text-lucas-slate group-hover:text-lucas-orange transition-colors duration-500">
                        [ Proceed ]
                    </span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-lucas-orange transform group-hover:translate-y-1.5 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                        <polygon points="12,21 2,5 22,5" />
                    </svg>
                </motion.button>
            </section>

            {/* 02. HORIZONTAL SCROLL GALLERY (The "Archive") */}
            <section ref={horizontalScrollRef} id="archive" className="relative h-[200vh] bg-lucas-navy">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>
                    
                    {/* The Zissou Meta Header & Progress Track */}
                    <div className="absolute top-12 left-6 md:left-12 right-6 md:right-12 flex items-center justify-between z-10 w-full pr-12 md:pr-24">
                        <div className="flex items-center gap-4 text-lucas-cream">
                            <div className="w-12 h-px bg-lucas-orange"></div>
                            <span className="font-sans text-[10px] tracking-zissou uppercase">
                                [ The Archive ]
                            </span>
                        </div>
                        
                        {/* Structural Progress Bar */}
                        <div className="hidden md:flex items-center gap-4 w-48">
                            <span className="font-sans text-[8px] tracking-zissou text-lucas-slate uppercase">01</span>
                            <div className="relative flex-1 h-px bg-lucas-slate/30">
                                <motion.div 
                                    className="absolute top-0 left-0 h-full bg-lucas-orange"
                                    style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                                />
                            </div>
                            <span className="font-sans text-[8px] tracking-zissou text-lucas-slate uppercase">03</span>
                        </div>
                    </div>

                    <motion.div style={{ x }} className="flex gap-12 md:gap-24 px-6 md:px-24 w-max relative z-10">
                        
                        {/* Frame 01 */}
                        <div className="w-[85vw] md:w-[45vw] h-[60vh] md:h-[65vh] relative shrink-0 bg-lucas-cream/5 p-3 md:p-5 border border-lucas-slate/20 flex flex-col justify-between group">
                            <div className="relative w-full h-full bg-[#0a1118] overflow-hidden">
                                <Image src="/images/img1.JPG" alt="Unforced Energy" fill className="object-cover transition-all duration-[800ms] ease-[0.16,1,0.3,1] scale-105 group-hover:scale-100" />
                            </div>
                            {/* Inventory Tag */}
                            <div className="absolute -right-3 -bottom-3 bg-lucas-cream text-lucas-navy font-sans text-[9px] tracking-zissou uppercase px-3 py-1.5 border border-lucas-navy shadow-lg z-20">
                                Fig. 01 — Unforced Energy
                            </div>
                        </div>

                        {/* Frame 02 (Offset slightly for staggered architectural rhythm) */}
                        <div className="w-[85vw] md:w-[45vw] h-[60vh] md:h-[65vh] relative shrink-0 bg-lucas-cream/5 p-3 md:p-5 border border-lucas-slate/20 mt-12 md:mt-24 flex flex-col justify-between group">
                            <div className="relative w-full h-full bg-[#0a1118] overflow-hidden">
                                <Image src="/images/img1.JPG" alt="The In-Between" fill className="object-cover transition-all duration-[800ms] ease-[0.16,1,0.3,1] scale-105 group-hover:scale-100" />
                            </div>
                            {/* Inventory Tag */}
                            <div className="absolute -right-3 -bottom-3 bg-lucas-cream text-lucas-navy font-sans text-[9px] tracking-zissou uppercase px-3 py-1.5 border border-lucas-navy shadow-lg z-20">
                                Fig. 02 — The Quiet
                            </div>
                        </div>

                        {/* Frame 03 */}
                        <div className="w-[85vw] md:w-[45vw] h-[60vh] md:h-[65vh] relative shrink-0 bg-lucas-cream/5 p-3 md:p-5 border border-lucas-slate/20 flex flex-col justify-between group">
                            <div className="relative w-full h-full bg-[#0a1118] overflow-hidden">
                                <Image src="/images/img1.JPG" alt="The Soloist" fill className="object-cover transition-all duration-[800ms] ease-[0.16,1,0.3,1] scale-105 group-hover:scale-100" />
                            </div>
                            {/* Inventory Tag */}
                            <div className="absolute -right-3 -bottom-3 bg-lucas-cream text-lucas-navy font-sans text-[9px] tracking-zissou uppercase px-3 py-1.5 border border-lucas-navy shadow-lg z-20">
                                Fig. 03 — The Soloist
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* 03. THE RECORD (The Archival Ledger & Viewfinder) */}
            <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-lucas-navy/30 pb-4 mb-12 gap-4">
                    <h2 className="font-sans text-3xl md:text-4xl uppercase tracking-tight font-bold text-lucas-navy leading-none">
                        The Record
                    </h2>
                    <div className="flex items-center gap-4">
                        <span className="w-2 h-2 bg-lucas-orange rounded-full"></span>
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                            [ Documented History ]
                        </span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                    
                    {/* Left Side: The Ledger */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="w-full md:w-1/2 flex flex-col border-t border-lucas-navy/20"
                    >
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                onMouseEnter={() => setActiveImg(item.img)}
                                className="group flex flex-col py-6 border-b border-lucas-navy/10 hover:bg-lucas-navy/5 transition-colors duration-slow cursor-default px-4 -mx-4 md:mx-0 md:px-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-sans text-[9px] tracking-zissou text-lucas-slate uppercase">
                                        Fig. {item.id}
                                   </span>
                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-orange font-bold uppercase border border-lucas-orange/20 px-2 py-0.5">
                                        {item.year}
                                    </span>
                                </div>

                                <p className="font-serif text-lg md:text-xl text-lucas-navy lowercase italic leading-relaxed pr-8">
                                    {item.desc}
                                </p>

                                {/* Mobile Only Image (Shows inline on small screens) */}
                                <div className="block md:hidden relative w-full aspect-[4/3] mt-6 bg-[#0a1118] border border-lucas-slate/20 p-2">
                                    <div className="relative w-full h-full">
                                        <Image src={item.img} alt={`Archive entry ${item.year}`} fill className="object-cover" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right Side: The Sticky Viewfinder (Desktop Only) */}
                    <div className="hidden md:block w-full md:w-1/2 relative h-full">
                        <div className="sticky top-40 w-full aspect-[4/5] p-2 bg-lucas-cream border border-lucas-slate/30 shadow-xl overflow-hidden">
                            <div className="relative w-full h-full bg-[#0a1118]">
                                {/* We map through all images and crossfade opacity based on active state */}
                                {timeline.map((item, i) => (
                                    <Image
                                        key={i}
                                        src={item.img}
                                        alt={`Evidence ${item.id}`}
                                        fill
                                        className={`object-cover transition-all duration-[800ms] ease-[0.16,1,0.3,1] ${
                                            activeImg === item.img ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 04. THE METHODOLOGY (Sticky Scroll) */}
            <section className="relative bg-lucas-cream py-24 md:py-40 px-6 border-t border-lucas-slate/20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32 items-start">
                    
                    {/* Sticky Left Spine */}
                    <div className="w-full md:w-1/3 md:sticky md:top-40 flex flex-col">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-2 h-2 bg-lucas-orange rounded-full"></span>
                            <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                                The Methodology
                            </span>
                        </div>
                        <h2 className="font-sans text-4xl md:text-5xl uppercase font-bold text-lucas-navy leading-[1] mb-6">
                            How It Actually <br className="hidden lg:block"/> Works.
                        </h2>
                        <p className="font-serif text-lg md:text-xl text-lucas-slate lowercase italic">
                            the internal logic behind the lens. principles built to protect the authenticity of your weekend.
                        </p>
                    </div>

                    {/* Scrolling Right Content */}
                    <div className="w-full md:w-2/3 flex flex-col gap-16 md:gap-24 relative">
                        <div className="absolute left-[15px] top-8 bottom-8 w-px bg-lucas-navy/10 -z-10 hidden md:block"></div>

                        {[
                            { num: "01", title: "Anticipation", desc: "you can't just be a fly on the wall and react to moments; by then, they're gone. you have to understand the rhythm of the room, read the energy, and anticipate the honest frames before they happen." },
                            { num: "02", title: "Intentionality", desc: "i know which footage actually builds your narrative and captures the feeling. i focus my energy on the unforced, fleeting interactions, rather than manufacturing a 40-point shot list of stiff poses." },
                            { num: "03", title: "Singular Focus", desc: "this isn't a side project. wedding cinema is my full-time profession and primary creative outlet. my process is entirely dedicated to this specific craft." },
                            { num: "04", title: "Scarcity", desc: "i strictly limit the number of commissions i take per year. keeping the calendar capped ensures my creative energy is fresh, and you get my absolute, undivided focus for your weekend." },
                            { num: "05", title: "Unfading Passion", desc: "i genuinely love doing this. the thrill hasn't worn off. i get hyped arriving in the morning, and i get exactly as hyped sitting at my desk reviewing the footage the next day." }
                        ].map((item, idx) => (
                            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="flex gap-6 md:gap-10 group">
                                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-lucas-slate/30 flex items-center justify-center bg-lucas-cream group-hover:border-lucas-orange transition-colors duration-500">
                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-navy group-hover:text-lucas-orange transition-colors">
                                        {item.num}
                                    </span>
                                </div>
                                <div className="flex flex-col pt-1 md:pt-2">
                                    <h3 className="font-sans text-xl uppercase tracking-widest text-lucas-navy mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="font-serif text-[clamp(1.125rem,2vw,1.35rem)] text-lucas-slate lowercase leading-relaxed max-w-xl">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 05. THE CALL TO ACTION */}
            <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center border-t border-lucas-slate/20">
                <div className="absolute left-1/2 top-0 w-px h-16 bg-lucas-orange -translate-x-1/2"></div>
                
                <p className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] text-lucas-navy italic mb-10 max-w-2xl leading-snug pt-8">
                    if you align with the approach, i'd love to hear about the day you're building.
                </p>
                
                <Link href="/#contact" className="group relative inline-flex items-center justify-center px-12 py-5 font-sans text-[10px] md:text-xs tracking-zissou uppercase text-lucas-navy border border-lucas-navy overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-lucas-navy transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                    <span className="relative z-10 group-hover:text-lucas-cream transition-colors duration-500 delay-100">
                        Inquire For Availability
                    </span>
                </Link>
            </section>

        </main>
    );
}
