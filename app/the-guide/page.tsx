// app/the-guide/page.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUpContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const fadeUpItem = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const sectionsNav = [
    { id: "welcome", label: "01. Welcome" },
    { id: "blueprint", label: "02. What's Next" },
    { id: "environment", label: "03. Environment Crafting" },
    { id: "trusted-peers", label: "04. Trusted Peers" },
];

const trustedPeers = [
    {
        category: "Photographers",
        peers: [
            { name: "Kaela Leone Weddings", url: "https://www.kaelaleone.com/" },
            { name: "Lydia Ivy Photography", url: "https://lydiaivy.com/" },
            { name: "Eric Cheng", url: "https://ericcheng.ca/" },
            { name: "Kendra Ruth Photography", url: "https://kendraruthphotography.com/" },
            { name: "Catherine Goce Photo", url: "https://catherinegoce.com/" },
            { name: "Byrns Photography", url: "https://www.brynsphotography.com/" },
        ]
    },
    {
        category: "Planners & Coordinators",
        peers: [
            { name: "Clement and Co Events", url: "https://www.clementandcoevents.com/" },
            { name: "Samantha Nicholas Events", url: "https://www.samanthanicholas.ca/" },
            { name: "LQ Events", url: "https://lqevents.ca/" },
            { name: "Confetti and Co", url: "https://confettiand.co/" },
            { name: "W Events & Decor", url: "https://www.weventsanddecor.com/" }
        ]
    },
    {
        category: "Florals",
        peers: [
            { name: "Forever Wildfield", url: "https://foreverwildfield.com/" },
            { name: "Nymph Floral", url: "https://nymphfloral.com/" },
            { name: "Windflower Florals", url: "https://www.windflowerflorals.com/" },
            { name: "De Rêves Studio", url: "https://www.derevesstudio.com/" }
        ]
    },
    {
        category: "Officiants",
        peers: [
            { name: "Jeff Maeck", url: "https://maeckweddings.com/officiating" },
            { name: "Your Wedding Officiant", url: "https://www.yourweddingofficiant.ca/" },
            { name: "Bcause Love", url: "https://bcauslove.com/" }
        ]
    }
];

export default function TheGuidePage() {
    const [activeSection, setActiveSection] = useState("welcome");

    // Intersection observer to highlight the active index dot
    useEffect(() => {
        const root = document.getElementById("guide-scroll-container");
        const sections = document.querySelectorAll("section[id]");
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: root, threshold: 0.4 } 
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <main className="h-[100dvh] bg-lucas-cream flex flex-col lg:flex-row relative overflow-hidden">
            
            {/* THE DOSSIER INDEX (Static Left Sidebar - Desktop Only) */}
            <aside className="hidden lg:flex flex-col h-full w-64 border-r border-lucas-navy/10 pt-[clamp(6rem,15vh,10rem)] px-8 z-50 shrink-0 relative bg-lucas-cream">
                <div className="flex items-center gap-3 mb-16">
                    <span className="w-2 h-2 bg-lucas-orange rounded-full"></span>
                    <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                        [ Client Portal ]
                    </span>
                </div>

                <nav className="flex flex-col gap-8 font-sans text-[10px] tracking-widest uppercase relative">
                    <div className="absolute left-[3px] top-2 bottom-2 w-px bg-lucas-navy/10 -z-10"></div>
                    {sectionsNav.map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`flex items-center gap-6 text-left transition-colors duration-300 ${activeSection === item.id ? 'text-lucas-orange' : 'text-lucas-slate hover:text-lucas-navy'}`}
                        >
                            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-lucas-orange scale-125' : 'bg-lucas-cream border border-lucas-navy/20'}`}></div>
                            {item.label}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* MOBILE PROGRESS MAP (Sticky Bottom - Mobile Only) */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] lg:hidden flex items-center gap-4 bg-lucas-navy/90 backdrop-blur-md px-6 py-4 rounded-full border border-lucas-cream/10 shadow-2xl transition-all duration-500">
                {sectionsNav.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        aria-label={`Scroll to ${item.label}`}
                        className="relative flex items-center justify-center p-1"
                    >
                        <div className={`rounded-full transition-all duration-500 ease-out ${
                            activeSection === item.id 
                                ? 'w-2.5 h-2.5 bg-lucas-orange' 
                                : 'w-1.5 h-1.5 bg-lucas-cream/30 hover:bg-lucas-cream/60'
                        }`} />
                        {index < sectionsNav.length - 1 && (
                            <div className={`absolute left-full top-1/2 -translate-y-1/2 h-px transition-all duration-500 w-4 ${
                                sectionsNav.findIndex(s => s.id === activeSection) >= index + 1
                                    ? 'bg-lucas-orange/50'
                                    : 'bg-transparent'
                            }`} />
                        )}
                    </button>
                ))}
            </div>

            {/* SCROLLING CONTENT (The Snapping Container) */}
            <div 
                id="guide-scroll-container" 
                className="flex-1 h-full overflow-y-auto overflow-x-hidden snap-y snap-proximity scroll-smooth px-6 lg:px-16"
            >
                <div className="w-full max-w-6xl mx-auto flex flex-col">
                    
                    {/* 01. THE WELCOME */}
                    <section id="welcome" className="min-h-[100dvh] w-full snap-start flex flex-col justify-center py-20 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                                className="lg:col-span-7 flex flex-col relative"
                            >
                                {/* The Editorial Bracket */}
                                <div className="absolute -top-12 lg:-top-20 -left-4 lg:-left-12 text-lucas-slate/15 font-sans text-[10rem] lg:text-[14rem] font-light leading-none pointer-events-none select-none">
                                    [
                                </div>
                                
                                <div className="relative z-10 pl-2 lg:pl-6">
<p className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] text-lucas-navy leading-[1.4] lowercase">
    first, thank you. i don't take it lightly that you trust me to to document your day. the hard part is over. this guide is here to keep us on the exact same page, <em className="italic text-lucas-orange/90">ensure the day breathes</em>, and help you build an environment where you can be present.
</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                                className="lg:col-span-5 relative aspect-[4/3] bg-lucas-navy/5 shadow-2xl overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-lucas-navy/10 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
                                <video 
                                    src="/videos/clip_01.mp4" 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="object-cover w-full h-full grayscale-[50%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
                                />
                            </motion.div>

                        </div>
                    </section>

                    {/* 02. THE BLUEPRINT */}
                    <section id="blueprint" className="min-h-[100dvh] w-full snap-start flex flex-col justify-center py-12 lg:py-24 relative bg-lucas-cream overflow-hidden">
                        <motion.div 
                            variants={fadeUpContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="w-full"
                        >
                            {/* Compressed Header */}
                            <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between border-b-2 border-lucas-navy pb-4 gap-4">
                                <div>
                                    <p className="font-sans uppercase tracking-[0.2em] text-lucas-slate text-[10px] mb-2">
                                        [ System Process ]
                                    </p>
                                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-lucas-navy uppercase tracking-tight">
                                        The Blueprint.
                                    </h2>
                                </div>
                                <div className="flex flex-col md:items-end">
                                    <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate">Document Ref //</span>
                                    <span className="font-sans text-[10px] tracking-widest uppercase text-lucas-navy">LC-GD-BP</span>
                                </div>
                            </div>

                            {/* The Vertical Ledger */}
                            <div className="flex flex-col">
                                {[
                                    { step: "01", title: "the quiet period", description: "you're officially in the calendar. i'm here as a sounding board if you need me, but otherwise, i step back and let you build the day. send over all the instporation, or just radio silence - both work perfectly." },
                                    { step: "02", title: "the logistics", subtitle: "[ 1 month out ]", description: "i'll touch base to gather your timeline. from there, we can jump on a quick video call to align, or keep it entirely in the inbox. whatever feels easiest for you both." },
                                    { step: "03", title: "the final ledger", subtitle: "[ 2 weeks out ]", description: "your remaining balance is settled. an automated nudge goes out beforehand so you don't have to carry it in your mental load." },
                                    { step: "04", title: "the day", description: "i show up, blend in, and we celebrate." }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        variants={fadeUpItem}
                                        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 lg:py-8 border-b border-dashed border-lucas-navy/20 group hover:bg-lucas-navy/5 transition-colors duration-500 relative px-4 -mx-4"
                                    >
                                        {/* Geometric Step Box */}
                                        <div className="md:col-span-3 flex items-start gap-4 pt-1">
                                            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center border border-lucas-navy/30 bg-lucas-cream group-hover:border-lucas-orange transition-colors duration-500">
                                                <div className="w-1.5 h-1.5 bg-lucas-navy group-hover:bg-lucas-orange transition-colors duration-500"></div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-sans text-[9px] text-lucas-slate tracking-zissou uppercase mb-0.5">Step // {item.step}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <div className="md:col-span-3 flex flex-col items-start pt-0.5">
                                            <h3 className="font-sans font-medium text-xl md:text-2xl lowercase text-lucas-navy">
                                                {item.title}
                                            </h3>
                                            {item.subtitle && (
                                                <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mt-1">
                                                    {item.subtitle}
                                                </span>
                                            )}
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-6 flex items-start pt-1">
                                            <p className="font-serif italic text-[clamp(1.1rem,1.5vw,1.25rem)] leading-relaxed text-lucas-navy/90 lowercase pr-4">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* 03. THE ENVIRONMENT */}
                    <section id="environment" className="min-h-[100dvh] h-auto w-full snap-start flex flex-col justify-center py-12 lg:py-16 relative">
                        <div className="bg-lucas-navy text-lucas-cream p-[clamp(1.5rem,4vw,3.5rem)] shadow-2xl relative overflow-hidden w-full border border-lucas-navy">
                            <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none mix-blend-overlay z-0"></div>
                            
                            <motion.div 
                                variants={fadeUpContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="relative z-10"
                            >
                                <div className="flex items-center justify-between border-b border-lucas-cream/20 pb-4 lg:pb-6 mb-8 lg:mb-12">
                                    <h2 className="font-sans text-3xl md:text-4xl uppercase tracking-tight font-bold">
                                        The Environment
                                    </h2>
                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-cream/60 uppercase hidden md:block">
                                        [ Crafting The Frame ]
                                    </span>
                                </div>

                                {/* 2x2 Grid for Educational Blocks */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12">
                                    
                                    <div className="flex flex-col group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="font-sans text-[10px] tracking-zissou text-lucas-orange font-bold">[ 01 ]</span>
                                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream border-b border-lucas-orange/30 pb-1">
                                                Chasing The Light
                                            </h3>
                                        </div>
                                        <p className="font-serif text-[clamp(1.05rem,1.5vw,1.2rem)] leading-[1.6] text-lucas-cream/80 lowercase group-hover:text-lucas-cream transition-colors duration-500">
                                            both super 8mm film and digital sensors thrive on natural light. for prep, choose a room with large windows and turn off the overhead tungsten lights. let the natural shadows fall where they may.
                                        </p>
                                    </div>

                                    <div className="flex flex-col group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="font-sans text-[10px] tracking-zissou text-lucas-orange font-bold">[ 02 ]</span>
                                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream border-b border-lucas-orange/30 pb-1">
                                                The Footprint
                                            </h3>
                                        </div>
                                        <p className="font-serif text-[clamp(1.05rem,1.5vw,1.2rem)] leading-[1.6] text-lucas-cream/80 lowercase group-hover:text-lucas-cream transition-colors duration-500">
                                            limit the location hopping. the less time we spend in transit, the more time you spend actually being present. the best narrative moments happen when you just sit still and exist with your people.
                                        </p>
                                    </div>

                                    <div className="flex flex-col group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="font-sans text-[10px] tracking-zissou text-lucas-orange font-bold">[ 03 ]</span>
                                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream border-b border-lucas-orange/30 pb-1">
                                                The Audio Backbone
                                            </h3>
                                        </div>
                                        <p className="font-serif text-[clamp(1.05rem,1.5vw,1.2rem)] leading-[1.6] text-lucas-cream/80 lowercase group-hover:text-lucas-cream transition-colors duration-500">
                                            the spoken words carry the film. write honest, handwritten promises rather than reading off a glowing iphone screen. for speeches, keep the roster tight. three meaningful toasts will always carry more weight than an open mic.
                                        </p>
                                    </div>

                                    <div className="flex flex-col group">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="font-sans text-[10px] tracking-zissou text-lucas-orange font-bold">[ 04 ]</span>
                                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream border-b border-lucas-orange/30 pb-1">
                                                The Anti-Shot List
                                            </h3>
                                        </div>
                                        <p className="font-serif text-[clamp(1.05rem,1.5vw,1.2rem)] leading-[1.6] text-lucas-cream/80 lowercase group-hover:text-lucas-cream transition-colors duration-500">
                                            put the pinterest boards away. the goal isn't to orchestrate a 40-point checklist of manufactured poses. trust the process, ignore the camera, and let the unforced magic happen.
                                        </p>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* 04. THE NETWORK -> TRUSTED PEERS */}
                    <section id="trusted-peers" className="min-h-[100dvh] w-full snap-start flex flex-col justify-center py-12 lg:py-24 relative">
                        <motion.div 
                            variants={fadeUpContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-lucas-navy pb-4 mb-12 gap-4">
                                <div>
                                    <h2 className="font-sans text-3xl md:text-4xl uppercase tracking-tight font-bold text-lucas-navy">
                                        Trusted Peers //
                                    </h2>
                                    <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mt-2">
                                        [ presence over perfection ]
                                    </p>
                                </div>
                                <p className="font-serif text-lg italic text-lucas-navy/80 lowercase max-w-md md:text-right leading-snug">
                                    working with vendors who share the same ethos changes the entire feeling of the day. this is a curated inventory of peers who prioritize an unforced, grounded approach.
                                </p>
                            </div>

                            {/* Minimalist Text-Heavy Directory */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                                {trustedPeers.map((group, idx) => (
                                    <motion.div key={idx} variants={fadeUpItem} className="flex flex-col">
                                        <h3 className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mb-6 border-b border-lucas-slate/20 pb-3">
                                            [ {group.category} ]
                                        </h3>
                                        <ul className="flex flex-col gap-4">
                                            {group.peers.map((peer, peerIdx) => (
                                                <li key={peerIdx}>
                                                    <a 
                                                        href={peer.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="group inline-flex items-center gap-3 font-serif text-2xl md:text-[1.75rem] text-lucas-navy lowercase italic transition-all duration-500 hover:text-lucas-orange hover:line-through decoration-lucas-orange/50"
                                                    >
                                                        <span className="font-sans text-xs tracking-normal text-lucas-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none not-italic line-through-none">
                                                            {'{'}
                                                        </span>
                                                        {peer.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer Anchor */}
                            <motion.div variants={fadeUpItem} className="mt-24 pt-8 border-t border-lucas-navy/10 flex items-center justify-between text-lucas-slate">
                                <span className="font-sans text-[8px] tracking-widest uppercase">
                                    End of guide
                                </span>
                                <Link href="/" className="font-sans text-[8px] tracking-widest uppercase hover:text-lucas-orange flex items-center gap-2 transition-colors">
                                    Return Home <ArrowRight size={10} />
                                </Link>
                            </motion.div>

                        </motion.div>
                    </section>

                </div>
            </div>
        </main>
    );
}
