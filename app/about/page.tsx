"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Explicitly typing as Variants fixes the Vercel build error
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function AboutPage() {
    // Parallax references
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -250]);

    return (
        <main className="bg-lucas-cream overflow-hidden">
            
            {/* 01. THE MANIFESTO (Hero) */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
                <motion.div 
                    initial="hidden" animate="visible" variants={staggerContainer}
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-px bg-lucas-slate/40"></div>
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                            [ The Ethos ]
                        </span>
                        <div className="w-12 h-px bg-lucas-slate/40"></div>
                    </motion.div>
                    
                    <motion.h1 variants={fadeUp} className="font-sans text-[clamp(3.5rem,8vw,8rem)] uppercase font-bold text-lucas-navy leading-[0.85] tracking-tight mb-12">
                        The Art Of <br/>
                        <span className="text-lucas-orange italic font-serif font-light tracking-normal lowercase pr-4">noticing.</span>
                    </motion.h1>

                    <motion.div variants={fadeUp} className="relative max-w-3xl mx-auto">
                        <p className="font-serif text-[clamp(1.25rem,2.5vw,2rem)] text-lucas-navy italic lowercase leading-[1.5]">
                            i don't run a production set, and i don't shoot for the algorithm. my approach is simpler: i'm there to celebrate with you. i blend in like a friend with a camera—bringing easy energy to the room while keeping a keen eye on the honest frames. 
                        </p>
                    </motion.div>
                </motion.div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <div className="w-px h-16 bg-lucas-navy/20 relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-1/2 bg-lucas-orange"
                            animate={{ y: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* 02. THE DOSSIER (The Non-Sappy Bio) */}
            <section className="relative px-6 py-24 md:py-32 bg-lucas-navy text-lucas-cream border-y border-lucas-navy">
                <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none mix-blend-overlay"></div>
                
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
                    
                    {/* Left: The Portrait */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 w-full aspect-[4/5] bg-lucas-cream/5 border border-lucas-cream/10 p-2 shadow-2xl">
                            <div className="relative w-full h-full bg-[#111d27] overflow-hidden group">
                                {/* TODO: Place a cool, unposed, slightly grainy portrait of yourself here */}
                                <Image 
                                    src="/images/Lucas Image with background.jpg" 
                                    alt="Lucas" 
                                    fill 
                                    className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 border border-lucas-cream/10 m-4 pointer-events-none"></div>
                                <span className="absolute bottom-6 left-6 font-sans text-[8px] tracking-widest text-lucas-cream uppercase bg-lucas-navy/50 backdrop-blur-md px-2 py-1">
                                    Fig. 01 — The Soloist
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Data */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-12">
                            <span className="w-2 h-2 bg-lucas-orange rounded-full animate-pulse"></span>
                            <h2 className="font-sans text-[10px] tracking-zissou uppercase text-lucas-cream/60">
                                Identity & Origin
                            </h2>
                        </div>

                        <p className="font-serif text-2xl md:text-3xl leading-[1.6] italic text-lucas-cream mb-16 lowercase">
                            what started with a gopro in 2014 quietly became a life's work. over 200 narratives later, across multiple countries and cultures, the goal remains unchanged: to bottle exactly how the day felt, entirely unforced.
                        </p>

                        {/* The Inventory Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-sans text-xs uppercase tracking-widest border-t border-lucas-cream/10 pt-12">
                            <div className="flex flex-col gap-2">
                                <span className="text-lucas-slate text-[9px] tracking-zissou">Name</span>
                                <span className="text-lucas-cream">Lucas Bulger</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-lucas-slate text-[9px] tracking-zissou">Role</span>
                                <span className="text-lucas-cream">Director // Editor // Soloist</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-lucas-slate text-[9px] tracking-zissou">Base of Operations</span>
                                <span className="text-lucas-cream">Guelph, Ontario (Available Worldwide)</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-lucas-slate text-[9px] tracking-zissou">The Anchor</span>
                                <span className="text-lucas-orange lowercase font-serif italic text-lg tracking-normal mt-[-4px]">
                                    husband to heidi. father to sam.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 03. PARALLAX VISUAL BREAK (The "Show, Don't Tell" Section) */}
            <section ref={containerRef} className="hidden md:flex relative h-[120vh] w-full items-center justify-center overflow-hidden bg-lucas-cream px-6">
                <div className="absolute inset-0 flex items-center justify-center z-0 opacity-5">
                    <span className="font-sans font-bold text-[15vw] text-lucas-navy tracking-tighter uppercase whitespace-nowrap">
                        HONEST FRAMES
                    </span>
                </div>

                <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
                    {/* TODO: Add an emotional, blurry, or laughing photo of a couple */}
                    <motion.div style={{ y: y1 }} className="absolute left-[5%] top-[20%] w-[25vw] aspect-[3/4] bg-lucas-navy/10 shadow-2xl p-2 border border-lucas-slate/20 overflow-hidden group">
                        <div className="w-full h-full bg-lucas-navy/20 relative flex items-center justify-center text-lucas-slate text-xs uppercase tracking-zissou z-10 group-hover:opacity-0 transition-opacity duration-500">
                            [ Photo: The Laugh ]
                        </div>
                        {/* <Image src="/images/your-photo.jpg" alt="The Laugh" fill className="object-cover" />
                        */}
                    </motion.div>

                    {/* TODO: Add a quiet, in-between moment. Maybe hands, or a dress blowing in wind */}
                    <motion.div style={{ y: y2 }} className="absolute right-[5%] top-[10%] w-[20vw] aspect-square bg-lucas-navy/10 shadow-2xl p-2 border border-lucas-slate/20 overflow-hidden group">
                        <div className="w-full h-full bg-lucas-navy/20 relative flex items-center justify-center text-lucas-slate text-xs uppercase tracking-zissou z-10 group-hover:opacity-0 transition-opacity duration-500">
                            [ Photo: The Details ]
                        </div>
                        {/* <Image src="/images/your-photo.jpg" alt="The Details" fill className="object-cover" />
                        */}
                    </motion.div>

                    {/* TODO: Add a wide architectural shot or venue scene */}
                    <motion.div style={{ y: y3 }} className="absolute left-[35%] bottom-[15%] w-[35vw] aspect-video bg-lucas-navy/10 shadow-2xl p-2 border border-lucas-slate/20 z-10 overflow-hidden group">
                        <div className="w-full h-full bg-lucas-navy/20 relative flex items-center justify-center text-lucas-slate text-xs uppercase tracking-zissou z-10 group-hover:opacity-0 transition-opacity duration-500">
                            [ Photo: The Scene ]
                        </div>
                        {/* <Image src="/images/your-photo.jpg" alt="The Scene" fill className="object-cover" />
                        */}
                    </motion.div>
                </div>
            </section>

            {/* 04. THE METHODOLOGY (Sticky Scroll Principles) */}
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
                            How It Actually <br/> Works.
                        </h2>
                        <p className="font-serif text-lg text-lucas-slate lowercase italic">
                            the internal logic behind the lens. principles built to protect the authenticity of your weekend.
                        </p>
                    </div>

                    {/* Scrolling Right Content */}
                    <div className="w-full md:w-2/3 flex flex-col gap-16 md:gap-24 relative">
                        {/* Vertical line connecting them */}
                        <div className="absolute left-[15px] top-8 bottom-8 w-px bg-lucas-navy/10 -z-10 hidden md:block"></div>

                        {[
                            { 
                                num: "01", 
                                title: "Anticipation", 
                                desc: "you can't just be a fly on the wall and react to moments; by then, they're gone. you have to understand the rhythm of the room, read the energy, and anticipate the honest frames before they happen." 
                            },
                            { 
                                num: "02", 
                                title: "Intentionality", 
                                desc: "i know which footage actually builds your narrative and captures the feeling. i focus my energy on the unforced, fleeting interactions, rather than manufacturing a 40-point shot list of stiff poses." 
                            },
                            { 
                                num: "03", 
                                title: "Singular Focus", 
                                desc: "this isn't a side project. wedding cinema is my full-time profession and primary creative outlet. my process is entirely dedicated to this specific craft." 
                            },
                            { 
                                num: "04", 
                                title: "Scarcity", 
                                desc: "i strictly limit the number of commissions i take per year. keeping the calendar capped ensures my creative energy is fresh, and you get my absolute, undivided focus for your weekend." 
                            },
                            { 
                                num: "05", 
                                title: "Unfading Passion", 
                                desc: "i genuinely love doing this. the thrill hasn't worn off. i get hyped arriving in the morning, and i get exactly as hyped sitting at my desk reviewing the footage the next day." 
                            }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                                variants={fadeUp}
                                className="flex gap-6 md:gap-10 group"
                            >
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
                <div className="absolute left-1/2 top-0 w-px h-16 bg-lucas-slate/30 -translate-x-1/2"></div>
                
                <p className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] text-lucas-navy italic mb-10 max-w-2xl leading-snug pt-8">
                    if you align with the approach, i'd love to hear about the day you're building.
                </p>
                
                <Link 
                    href="/#contact" 
                    className="group relative inline-flex items-center justify-center px-12 py-5 font-sans text-[10px] md:text-xs tracking-zissou uppercase text-lucas-navy border border-lucas-navy overflow-hidden"
                >
                    <span className="absolute inset-0 w-full h-full bg-lucas-navy transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                    <span className="relative z-10 group-hover:text-lucas-cream transition-colors duration-500 delay-100">
                        Check Availability
                    </span>
                </Link>
            </section>

        </main>
    );
}
