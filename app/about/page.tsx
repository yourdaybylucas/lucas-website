"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUpContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
};

const timeline = [
    { year: "2014", title: "The Catalyst", desc: "bought a gopro to document travels. the initial spark.", img: "/images/img1.JPG", align: "left" },
    { year: "2015", title: "The Obsession", desc: "fell completely in love with the process of bottling memories and places.", img: "/images/img1.JPG", align: "right" },
    { year: "2016", title: "The Pivot", desc: "filmed my first wedding for a friend as a gift. everything changed.", img: "/images/img1.JPG", align: "left" },
    { year: "2018", title: "The Detour", desc: "graduated school for business admin. (what, lol).", img: "/images/img1.JPG", align: "right" },
    { year: "2019", title: "The Commitment", desc: "went full time. burned the boats. never looked back.", img: "/images/img1.JPG", align: "left" },
    { year: "2021", title: "The Anchor", desc: "married heidi, the absolute love of my life.", img: "/images/img1.JPG", align: "right" },
    { year: "2025", title: "The Legacy", desc: "welcomed our son, sam, into the world.", img: "/images/img1.JPG", align: "left" },
    { year: "Present", title: "The Archive", desc: "over 200 weddings documented across countries and cultures. the passion remains exactly the same.", img: "/images/img1.JPG", align: "right" },
];

const principles = [
    { num: "01", title: "Anticipation", desc: "you can't just be a fly on the wall and react to the room. you have to understand the rhythm of the day and anticipate the honest frames before they even happen." },
    { num: "02", title: "Intentionality", desc: "i know exactly which footage actually builds your narrative. i focus my energy on the fleeting, unforced interactions rather than manufacturing a shot list." },
    { num: "03", title: "Singular Focus", desc: "this isn't a side project or a weekend hobby. wedding cinema is my full-time profession and my primary creative outlet." },
    { num: "04", title: "Scarcity", desc: "i strictly limit my commissions per year. keeping the calendar capped ensures my creative energy is entirely present for your weekend." },
    { num: "05", title: "Unfading Passion", desc: "the thrill is still there. i get hyped arriving in the morning, and i still get exactly as hyped reviewing the footage the next day." }
];

export default function AboutPage() {
    return (
        <main className="min-h-[200vh] bg-lucas-cream overflow-hidden pt-[clamp(6rem,15vh,10rem)] pb-24">
            
            {/* 01. The Header & Rewritten Bio */}
            <section className="relative px-6 max-w-5xl mx-auto mb-[clamp(6rem,15vh,10rem)]">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-8 h-px bg-lucas-orange"></div>
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-orange uppercase font-bold">
                            The Architect
                        </span>
                        <div className="w-8 h-px bg-lucas-orange"></div>
                    </div>
                    
                    <h1 className="font-sans text-[clamp(3.5rem,8vw,7rem)] uppercase font-bold text-lucas-navy leading-[0.9] tracking-tight mb-12">
                        The Man <br/>
                        <span className="text-lucas-slate font-light">& The Lens</span>
                    </h1>

                    {/* The "Anti-Vendor" Rewritten Bio */}
                    <div className="relative">
                        <span className="absolute -top-12 -left-8 text-lucas-navy/5 font-serif text-9xl select-none hidden md:block">"</span>
                        <p className="font-serif text-[clamp(1.25rem,2.5vw,2rem)] text-lucas-navy italic lowercase max-w-4xl mx-auto leading-[1.6]">
                            i discovered the weight of the moving image while documenting travels. what started with a gopro in 2014 turned into a career when i filmed a friend's wedding as a gift two years later. since then, i've been lucky enough to make the art of noticing my full-time life. sending off a film and knowing it transports you right back to how the day actually felt—that's the high i'm always chasing.
                        </p>
                        <span className="absolute -bottom-20 -right-8 text-lucas-navy/5 font-serif text-9xl select-none hidden md:block">"</span>
                    </div>

                    <div className="mt-12 flex flex-col items-center">
                        <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-4">
                            [ Lucas Bulger ]
                        </p>
                        <div className="w-px h-16 bg-lucas-slate/30"></div>
                    </div>
                </motion.div>
            </section>

            {/* 02. The Timeline (Personal & Professional) */}
            <section className="relative px-6 max-w-6xl mx-auto mb-[clamp(8rem,15vh,12rem)]">
                
                <div className="flex items-center justify-between border-b border-lucas-navy/20 pb-6 mb-16 md:mb-24">
                    <h2 className="font-sans text-2xl md:text-4xl uppercase tracking-tight font-bold text-lucas-navy">
                        The Record
                    </h2>
                    <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                        [ 2014 — Present ]
                    </span>
                </div>

                <div className="relative">
                    {/* The Central Spine (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-lucas-navy/10 -translate-x-1/2"></div>
                    
                    {/* The Central Spine (Mobile) */}
                    <div className="block md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-lucas-navy/10"></div>

                    <div className="flex flex-col gap-16 md:gap-32 relative">
                        {timeline.map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 w-full ${
                                    item.align === 'right' ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Mobile Dot */}
                                <div className="md:hidden absolute left-[11px] w-2 h-2 bg-lucas-orange rounded-full mt-2"></div>

                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 flex flex-col pl-10 md:pl-0 ${
                                    item.align === 'left' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
                                }`}>
                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-orange font-bold mb-2 border border-lucas-orange/20 px-2 py-0.5 rounded-sm w-fit">
                                        {item.year}
                                    </span>
                                    <h3 className="font-serif text-3xl text-lucas-navy italic mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="font-sans text-sm md:text-base text-lucas-slate lowercase leading-relaxed max-w-[320px]">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Desktop Center Dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center bg-lucas-cream z-10">
                                    <div className="w-2 h-2 bg-lucas-orange rounded-full"></div>
                                </div>

                                {/* Image Side */}
                                <div className="w-full md:w-1/2 pl-10 md:pl-0">
                                    <div className={`relative aspect-[4/3] w-full max-w-[400px] bg-lucas-navy/5 shadow-xl ${
                                        item.align === 'left' ? 'mr-auto' : 'ml-auto'
                                    }`}>
                                        {/* Image Placeholder */}
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                                        />
                                        {/* Corner Accents */}
                                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-lucas-navy/30"></div>
                                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-lucas-navy/30"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 03. The Principles (Ledger Style) */}
            <section className="relative px-6 w-full mb-[clamp(6rem,15vh,10rem)]">
                <div className="max-w-7xl mx-auto bg-lucas-navy text-lucas-cream border border-lucas-navy shadow-2xl relative overflow-hidden">
                    {/* Analog Grain Overlay */}
                    <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none mix-blend-overlay"></div>

                    <div className="p-8 md:p-16 relative z-10">
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-lucas-cream/20 pb-8 mb-12">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full animate-pulse"></span>
                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-orange uppercase">
                                        [ The Framework ]
                                    </span>
                                </div>
                                <h2 className="font-sans text-3xl md:text-5xl uppercase tracking-tight font-bold">
                                    Guiding Principles
                                </h2>
                            </div>
                            <p className="font-serif italic text-lucas-cream/70 text-lg md:text-xl mt-4 md:mt-0 max-w-xs md:text-right">
                                the internal logic behind the documentation.
                            </p>
                        </div>

                        <motion.div 
                            variants={fadeUpContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-y border-lucas-cream/10 divide-y md:divide-y-0 lg:divide-x divide-lucas-cream/10"
                        >
                            {principles.map((principle, idx) => (
                                <motion.div 
                                    key={idx} 
                                    variants={fadeUpItem}
                                    className="p-6 md:p-8 hover:bg-lucas-cream/5 transition-colors duration-slow flex flex-col h-full"
                                >
                                    <div className="flex items-start justify-between mb-8">
                                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase border border-lucas-slate/30 px-2 py-0.5">
                                            {principle.num}
                                        </span>
                                    </div>
                                    <h3 className="font-sans text-lg md:text-xl uppercase tracking-widest text-lucas-cream mb-4">
                                        {principle.title}
                                    </h3>
                                    <p className="font-serif text-base md:text-lg text-lucas-cream/80 lowercase leading-[1.6]">
                                        {principle.desc}
                                    </p>
                                </motion.div>
                            ))}
                            
                            {/* Empty grid filler for symmetry if needed (3 cols, 5 items = 1 empty) */}
                            <div className="hidden lg:block p-6 md:p-8 bg-lucas-cream/5 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <span className="font-sans text-[12rem] text-lucas-cream leading-none">/</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 04. Footer Teaser */}
            <section className="px-6 flex flex-col items-center justify-center text-center">
                <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-lucas-navy italic mb-10 max-w-2xl leading-snug">
                    if you align with the approach, i'd love to hear about the day you're planning.
                </p>
                <Link 
                    href="/#contact" 
                    className="group relative inline-flex items-center justify-center px-12 py-5 font-sans text-xs tracking-zissou uppercase text-lucas-navy border border-lucas-navy overflow-hidden"
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
