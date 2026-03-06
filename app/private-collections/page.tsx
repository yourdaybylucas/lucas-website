"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, X, Maximize } from "lucide-react";

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
    { id: "Intro", label: "01. Intro" },
    { id: "collections", label: "02. Collections" },
    { id: "notes", label: "03. Notes" },
    { id: "progression", label: "04. Progression" },
    { id: "booking", label: "05. Next Steps" },
];

export default function PrivateCollectionsPage() {
    const [activeSection, setActiveSection] = useState("Intro");
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    // intersection observer to highlight the active index dot
    useEffect(() => {
        const root = document.getElementById("dossier-scroll-container");
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
            
            {/* THE THEATER MODAL (Video Player) */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-lucas-navy/95 backdrop-blur-xl p-4 md:p-12"
                        onClick={() => setActiveVideo(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 md:top-12 md:right-12 text-lucas-cream hover:text-lucas-orange transition-colors duration-300 z-10"
                            onClick={() => setActiveVideo(null)}
                            aria-label="Close video"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                        
                        <div 
                            className="relative w-full max-w-6xl aspect-video bg-black shadow-2xl overflow-hidden border border-lucas-slate/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&color=white&rel=0&modestbranding=1&playsinline=1`}
                                title="Lucas Film"
                                className="w-full h-full absolute top-0 left-0 border-none"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* THE DOSSIER INDEX (Static Left Sidebar - Desktop Only) */}
            <aside className="hidden lg:flex flex-col h-full w-64 border-r border-lucas-navy/10 pt-[clamp(6rem,15vh,10rem)] px-8 z-50 shrink-0 relative bg-lucas-cream">
                <div className="flex items-center gap-3 mb-16">
                    <span className="w-2 h-2 bg-lucas-orange rounded-full"></span>
                    <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                        [ The Dossier ]
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
                id="dossier-scroll-container" 
                className="flex-1 h-full overflow-y-auto overflow-x-hidden snap-y snap-proximity scroll-smooth px-6 lg:px-16"
            >
                <div className="w-full max-w-6xl mx-auto flex flex-col">
                    
                    {/* 01. The Grounded Welcome */}
                    <section id="Intro" className="min-h-[100dvh] w-full snap-start flex flex-col justify-center py-20 relative">
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
                                        the goal isn't to direct a perfect script; it's to hang out, let the day breathe, and <em className="italic text-lucas-orange/90">bottle exactly how it all felt.</em>
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
                                    src="/videos/clip_10cheers.mp4" 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="object-cover w-full h-full grayscale-[50%] contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
                                />
                            </motion.div>

                        </div>
                    </section>

                    {/* 02. The Collections Grid */}
                    <section id="collections" className="min-h-[100dvh] h-auto w-full snap-start flex flex-col justify-start lg:justify-center py-10 lg:py-16 relative">
                        <motion.div 
                            variants={fadeUpContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            
                            {/* Elevated Header & Baseline Subtitle */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 lg:mb-6 pt-8 lg:pt-0 gap-2">
                                <h2 className="font-sans text-2xl md:text-3xl uppercase tracking-tight font-bold text-lucas-navy">
                                    The Collections
                                </h2>
                                <p className="font-serif text-[clamp(1rem,1.5vw,1.125rem)] text-lucas-navy/90 italic">
                                    [ the baseline: included in every collection ]
                                </p>
                            </div>

                            {/* The Baseline (Ledger Style) */}
                            <motion.div variants={fadeUpItem} className="mb-10 lg:mb-12">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-y border-lucas-navy/20 divide-y lg:divide-y-0 lg:divide-x divide-lucas-navy/20">
                                    <div className="flex flex-col gap-1 p-4 lg:p-5 hover:bg-lucas-navy/5 transition-colors duration-slow">
                                        <span className="font-sans text-[9px] tracking-zissou text-lucas-orange font-bold">[ 01 ]</span>
                                        <h4 className="font-sans text-[10px] uppercase tracking-widest text-lucas-navy leading-tight mt-1">Unlimited Coverage</h4>
                                        <p className="font-serif text-[11px] text-lucas-slate italic mt-1 leading-tight">from getting ready to lights up.</p>
                                    </div>
                                    <div className="flex flex-col gap-1 p-4 lg:p-5 hover:bg-lucas-navy/5 transition-colors duration-slow">
                                        <span className="font-sans text-[9px] tracking-zissou text-lucas-orange font-bold">[ 02 ]</span>
                                        <h4 className="font-sans text-[10px] uppercase tracking-widest text-lucas-navy leading-tight mt-1">Provincial Travel</h4>
                                        <p className="font-serif text-[11px] text-lucas-slate italic mt-1 leading-tight">miles within ontario are on me.</p>
                                    </div>
                                    <div className="flex flex-col gap-1 p-4 lg:p-5 hover:bg-lucas-navy/5 transition-colors duration-slow">
                                        <span className="font-sans text-[9px] tracking-zissou text-lucas-orange font-bold">[ 03 ]</span>
                                        <h4 className="font-sans text-[10px] uppercase tracking-widest text-lucas-navy leading-tight mt-1">Aerial Perspectives</h4>
                                        <p className="font-serif text-[11px] text-lucas-slate italic mt-1 leading-tight">drone documentation (if permitted).</p>
                                    </div>
                                    <div className="flex flex-col gap-1 p-4 lg:p-5 hover:bg-lucas-navy/5 transition-colors duration-slow">
                                        <span className="font-sans text-[9px] tracking-zissou text-lucas-orange font-bold">[ 04 ]</span>
                                        <h4 className="font-sans text-[10px] uppercase tracking-widest text-lucas-navy leading-tight mt-1">Digital Archive</h4>
                                        <p className="font-serif text-[11px] text-lucas-slate italic mt-1 leading-tight">curated online delivery of all films.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 border border-lucas-navy/20 divide-y lg:divide-y-0 lg:divide-x divide-lucas-navy/20 relative items-stretch">
                                
                                {/* VOL 01 */}
                                <motion.div variants={fadeUpItem} className="flex flex-col group transition-colors duration-1000 relative overflow-hidden bg-lucas-cream hover:bg-lucas-navy/5 h-full">
                                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none">
                                        <video src="/videos/clip_digital.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-1 bg-lucas-navy transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20"></div>
                                    
                                    <div className="p-5 lg:p-6 relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 01 ]</p>
                                            <p className="font-sans text-xs tracking-widest text-lucas-navy">$5,800 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                                        </div>
                                        <h3 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-lucas-navy italic mb-2">
                                            The Essential
                                        </h3>
                                        <div className="flex items-center gap-3 mb-6 lg:mb-8 border-b border-lucas-navy/10 pb-4 lg:pb-6">
                                            <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate">Format //</span>
                                            <span className="font-sans text-[9px] tracking-widest uppercase text-lucas-navy">Digital Only</span>
                                        </div>
                                        
                                        {/* Refined Inventory */}
                                        <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest text-lucas-navy flex-grow">
                                            <li className="flex items-start gap-4 group/link">
                                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                <button onClick={() => setActiveVideo('GHhmsEs_8x8')} className="text-left flex flex-col items-start hover:text-lucas-orange transition-colors duration-300 w-full">
                                                    <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover/link:translate-x-1">
                                                        <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange transition-colors" />
                                                        <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">5-minute narrative film</span>
                                                    </span>
                                                </button>
                                            </li>
                                            <li className="flex items-start gap-4 group/link">
                                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                <button onClick={() => setActiveVideo('pjG38GNQOxQ')} className="text-left flex flex-col items-start hover:text-lucas-orange transition-colors duration-300 w-full">
                                                    <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover/link:translate-x-1">
                                                        <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange transition-colors" />
                                                        <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">documentary ceremony edit</span>
                                                    </span>
                                                </button>
                                            </li>
                                            <li className="flex items-start gap-4 group/link">
                                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                <button onClick={() => setActiveVideo('Fn9sr1eJESY')} className="text-left flex flex-col items-start hover:text-lucas-orange transition-colors duration-300 w-full">
                                                    <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover/link:translate-x-1">
                                                        <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange transition-colors" />
                                                        <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">documentary reception edit</span>
                                                    </span>
                                                    <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform transition-transform duration-300 group-hover/link:translate-x-1">[ speeches & first dances ]</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* VOL 02 (The Offset Flagship) */}
                                <motion.div variants={fadeUpItem} className="flex flex-col bg-lucas-navy text-lucas-cream relative z-20 lg:-translate-y-4 shadow-2xl border border-lucas-navy group overflow-hidden h-full">
                                    <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none mix-blend-overlay z-0"></div>
                                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-opacity duration-1000 pointer-events-none mix-blend-screen">
                                        <video src="/videos/clip_super8.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover filter contrast-150" />
                                    </div>
                                    
                                    <div className="absolute top-0 bottom-0 left-2 w-2 border-y-[10px] border-transparent border-dashed group-hover:border-lucas-cream/10 transition-colors duration-700 pointer-events-none z-0"></div>
                                    <div className="absolute top-0 bottom-0 right-2 w-2 border-y-[10px] border-transparent border-dashed group-hover:border-lucas-cream/10 transition-colors duration-700 pointer-events-none z-0"></div>

                                    <div className="p-5 lg:p-6 relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                                            <div className="flex items-center gap-2">
                                                <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 02 ]</p>
                                                <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full animate-pulse"></span>
                                            </div>
                                            <p className="font-sans text-xs tracking-widest text-lucas-cream">$6,800 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                                        </div>
                                        <h3 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] italic mb-2 text-lucas-cream">
                                            The Analog
                                        </h3>
                                        <div className="flex items-center gap-3 mb-6 lg:mb-8 border-b border-lucas-cream/10 pb-4 lg:pb-6">
                                            <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate">Format //</span>
                                            <span className="font-sans text-[9px] tracking-widest uppercase text-lucas-orange">Hybrid + Physical</span>
                                        </div>

                                        {/* Refined Inventory */}
                                        <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest text-lucas-cream flex-grow">
                                            <li className="flex items-start gap-4 opacity-60">
                                                <span className="text-lucas-orange mt-0.5">+</span> 
                                                <span>everything in vol. 01</span>
                                            </li>
                                            <li className="flex items-start gap-4 group/link">
                                                <span className="text-lucas-orange mt-0.5">+</span> 
                                                <button onClick={() => setActiveVideo('q2Qw5G4M0Lc')} className="text-left flex flex-col items-start hover:text-lucas-orange transition-colors duration-300 w-full">
                                                    <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover/link:translate-x-1">
                                                        <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange transition-colors" />
                                                        <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">5-minute narrative film</span>
                                                    </span>
                                                    <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform transition-transform duration-300 group-hover/link:translate-x-1">[ digital + super 8 ]</span>
                                                </button>
                                            </li>
                                            <li className="flex items-start gap-4 group/link">
                                                <span className="text-lucas-orange mt-0.5">+</span> 
                                                <button onClick={() => setActiveVideo('Ozy1MUKZZR4')} className="text-left flex flex-col items-start hover:text-lucas-orange transition-colors duration-300 w-full">
                                                    <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover/link:translate-x-1">
                                                        <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange transition-colors" />
                                                        <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">3-minute super 8mm film</span>
                                                    </span>
                                                    <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform transition-transform duration-300 group-hover/link:translate-x-1">[ authentic kodak stock ]</span>
                                                </button>
                                            </li>
                                            <li className="flex items-start gap-4 group/link">
                                                <span className="text-lucas-orange mt-0.5">+</span> 
                                                <button onClick={() => setActiveVideo('3hDxnAgeL-Y')} className="text-left flex flex-col items-start hover:text-lucas-orange transition-colors duration-300 w-full">
                                                    <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover/link:translate-x-1">
                                                        <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange transition-colors" />
                                                        <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">30-second digital reel</span>
                                                    </span>
                                                    <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform transition-transform duration-300 group-hover/link:translate-x-1">[ delivered before you wake up ]</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* VOL 03 */}
                                <motion.div variants={fadeUpItem} className="flex flex-col group transition-colors duration-1000 relative overflow-hidden bg-lucas-cream hover:bg-lucas-navy/5 h-full">
                                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none">
                                        <video src="/videos/clip_weekend.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-1 bg-lucas-navy transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20"></div>
                                    
                                    <div className="p-5 lg:p-6 relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 03 ]</p>
                                            <p className="font-sans text-xs tracking-widest text-lucas-navy">$8,200 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                                        </div>
                                        <h3 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-lucas-navy italic mb-2">
                                            The Weekend
                                        </h3>
                                        <div className="flex items-center gap-3 mb-6 lg:mb-8 border-b border-lucas-navy/10 pb-4 lg:pb-6">
                                            <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate">Format //</span>
                                            <span className="font-sans text-[9px] tracking-widest uppercase text-lucas-navy">Multi-Day Hybrid</span>
                                        </div>

                                        {/* Refined Inventory */}
                                        <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest text-lucas-navy flex-grow">
                                            <li className="flex items-start gap-4 opacity-60">
                                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                <span>everything in vol. 02</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                <div className="flex flex-col items-start text-left">
                                                    <span className="border-b border-transparent pb-0.5">multi-day coverage</span>
                                                    <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ welcome party + the day ]</span>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-4 group/link">
                                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                <button onClick={() => setActiveVideo('kvLEmAzg5kQ')} className="text-left flex flex-col items-start hover:text-lucas-orange transition-colors duration-300 w-full">
                                                    <span className="flex items-center gap-2 transform transition-transform duration-300 group-hover/link:translate-x-1">
                                                        <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange transition-colors" />
                                                        <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">weekend narrative film</span>
                                                    </span>
                                                </button>
                                            </li>
                                            <li className="flex items-start gap-4 mt-auto pt-2">
                                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                <div className="flex flex-col items-start">
                                                    <span>the physical artifacts</span>
                                                    <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ printed frames + super 8 spool + linen box ]</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>
                    </section>

                   {/* 03. Logistics / FAQs */}
                    <section id="notes" className="min-h-[100dvh] h-auto w-full snap-start flex flex-col justify-center py-12 lg:py-16 relative">
                        <div className="bg-lucas-navy text-lucas-cream p-[clamp(1.5rem,4vw,3.5rem)] rounded-sm shadow-2xl relative overflow-hidden w-full">
                            <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none mix-blend-overlay"></div>
                            
                            <motion.div 
                                variants={fadeUpContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="relative z-10"
                            >
                                <div className="flex items-center justify-between border-b border-lucas-cream/20 pb-4 lg:pb-6 mb-8 lg:mb-10">
                                    <h2 className="font-sans text-2xl md:text-3xl uppercase tracking-tight font-bold">
                                        Notes
                                    </h2>
                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-cream/60 uppercase hidden md:block">
                                        [ Logistics & Parameters ]
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-10">
                                    <div className="flex flex-col">
                                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-2 lg:mb-3 border-l-2 border-lucas-orange pl-3">
                                            The Retainer
                                        </h3>
                                        <p className="font-serif text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.6] text-lucas-cream/80 lowercase">
                                            to lock in the date, i require a 1/3 retainer upfront. the remaining balance is simply due two weeks before the day.
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-2 lg:mb-3 border-l-2 border-lucas-orange pl-3">
                                            The Geography
                                        </h3>
                                        <p className="font-serif text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.6] text-lucas-cream/80 lowercase">
                                            home base is guelph, ontario. travel within the province is entirely on me. there are no hidden travel fees.
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-2 lg:mb-3 border-l-2 border-lucas-orange pl-3">
                                            The Footprint
                                        </h3>
                                        <p className="font-serif text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.6] text-lucas-cream/80 lowercase">
                                            most of the time, no second shooter is needed. i document 95% of my weddings solo. it keeps the day feeling natural and unforced. if you have completely separate getting-ready locations or a highly complex timeline, i'm happy to bring a trusted peer along.
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-2 lg:mb-3 border-l-2 border-lucas-orange pl-3">
                                            The Photographers
                                        </h3>
                                        <p className="font-serif text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.6] text-lucas-cream/80 lowercase">
                                            working well with your photographer is incredibly important. we have very similar goals, and with my low-key shooting style, we can both achieve them without stepping on each other's toes.
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-2 lg:mb-3 border-l-2 border-lucas-orange pl-3">
                                            The Delivery
                                        </h3>
                                        <p className="font-serif text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.6] text-lucas-cream/80 lowercase">
                                            i prefer to edit while the feeling of the day is still fresh. average turnaround is about 7 weeks, and i give myself closer to 12 weeks to be safe.
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-2 lg:mb-3 border-l-2 border-lucas-orange pl-3">
                                            The Standard
                                        </h3>
                                        <p className="font-serif text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.6] text-lucas-cream/80 lowercase">
                                            absolutely inclusive. i am honoured to document you, regardless of religion, gender, race, or sexual orientation.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

{/* 04. The Progression */}
{/* Small Screen Fix: We remove snap-y and snap-proximity from this specific parent container to allow fluid scrolling on smaller viewports. */}
<section id="progression" className="h-auto w-full flex flex-col justify-start lg:justify-center py-10 md:py-16 lg:py-24 relative bg-lucas-cream border-t border-lucas-navy/10 overflow-hidden">
    <motion.div 
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-6xl mx-auto px-6 lg:px-16"
    >
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10 lg:mb-16 pt-8 lg:pt-0">
            <span className="w-1.5 h-1.5 bg-lucas-orange rounded-none animate-pulse"></span>
            <h2 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy font-bold">
                The Progression
            </h2>
            <div className="h-px bg-lucas-navy/20 flex-grow"></div>
            <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase hidden md:block">
                [ the roadmap ]
            </span>
        </div>

        <div className="relative max-w-3xl mx-auto pl-2 sm:pl-0">
            {/* The structural line - adjusted left values to center perfectly on the squares */}
            <div className="absolute left-[15px] md:left-[24px] top-4 bottom-4 w-px bg-lucas-navy/10"></div>
            
            <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute left-[15px] md:left-[24px] top-4 w-px bg-lucas-navy origin-top"
            ></motion.div>

            {/* Tightened gaps for better flow on 13-inch screens */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 relative z-10">
                {[
                    { num: "01", title: "the discovery", desc: "you connected with my work and sent an inquiry. the best news: the calendar aligned, and i'm available for your date.", status: "completed" },
                    { num: "02", title: "the inventory", desc: "reviewing the collections, running the numbers, and looking into next steps.", status: "current" },
                    { num: "03", title: "the intro", desc: "a quick video call. i want to hear about the day, answer questions, and we can see if it's a good fit.", status: "future" },
                    { num: "04", title: "the details", desc: "i draft a custom proposal. you review the logistics, and I place a soft hold on the date.", status: "future" },
                    { num: "05", title: "making it official", desc: "you sign the digital paperwork, cover the retainer, and the date is locked.", status: "future" }
                ].map((step, i) => (
                    <motion.div 
                        key={i} 
                        variants={fadeUpItem}
                        className={`relative flex gap-5 md:gap-8 group ${step.status === 'completed' ? 'opacity-50 grayscale' : ''}`}
                    >
                        {/* Swapped rounded-full for rounded-none to create hard geometric squares */}
                        <div className={`relative flex-shrink-0 flex items-center justify-center w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-none border transition-colors duration-500 bg-lucas-cream ${
                            step.status === 'completed' ? 'border-lucas-slate/40 text-lucas-slate' :
                            step.status === 'current' ? 'border-lucas-orange text-lucas-orange shadow-[0_0_15px_rgba(214,90,49,0.15)]' :
                            'border-lucas-navy/20 text-lucas-slate hover:border-lucas-navy'
                        }`}>
                            {step.status === 'completed' && <Check size={16} strokeWidth={1.5} />}
                            {step.status === 'current' && <span className="w-2 h-2 rounded-none bg-lucas-orange animate-pulse"></span>}
                            {step.status === 'future' && <span className="font-sans text-[9px] md:text-[10px] tracking-zissou ml-0.5">{step.num}</span>}
                        </div>

                        <div className="flex flex-col pt-1 md:pt-2 pb-2">
                            <div className="flex flex-wrap items-center gap-3 mb-1 md:mb-2">
                                <h4 className={`font-sans text-xs md:text-sm lowercase tracking-widest ${
                                    step.status === 'current' ? 'text-lucas-orange font-bold' : 'text-lucas-navy'
                                }`}>
                                    {step.title}
                                </h4>
                                {/* Tags kept as uppercase with wide tracking to align with the meta-data rule */}
                                {step.status === 'completed' && <span className="font-sans text-[8px] tracking-zissou text-lucas-slate uppercase border border-lucas-slate/20 px-2 py-0.5 rounded-none">FILED</span>}
                                {step.status === 'current' && <span className="font-sans text-[8px] tracking-zissou text-lucas-orange uppercase border border-lucas-orange/30 bg-lucas-orange/5 px-2 py-0.5 rounded-none">YOU ARE HERE</span>}
                            </div>
                            <p className={`font-serif text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed lowercase ${step.status === 'completed' ? 'text-lucas-slate' : 'text-lucas-navy/80'}`}>
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
</section>

{/* 05. The Intro (CTA) */}
<section id="booking" className="min-h-[100dvh] h-auto w-full snap-start flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 relative gap-12 lg:gap-16">
    <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex flex-col items-start pt-12 md:pt-0 z-10"
    >
        <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-lucas-orange rounded-none animate-pulse"></span>
            <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                [ 05 // Next Steps ]
            </span>
        </div>
        
        {/* Fixed Typography: Heavy Sans-Serif Uppercase */}
        <h2 className="font-sans font-bold text-[clamp(3rem,5vw,4.5rem)] uppercase text-lucas-navy mb-6 leading-[0.9] tracking-tight">
            Let's Talk.
        </h2>
        
        {/* Fixed Typography: Serif Italic lowercase for the soul */}
        <p className="font-serif italic text-[clamp(1.25rem,2vw,1.5rem)] text-lucas-navy/85 mb-10 max-w-md lowercase leading-relaxed">
            zero obligation. we jump on a video call, run through the logistics of the day, and most importantly—make sure i'm actually someone you want hanging around.
        </p>
        
        <a 
            href="https://calendar.app.google/hHwZZoq1LYGWCo6u9" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-5 font-sans text-[10px] tracking-zissou uppercase text-lucas-navy border border-lucas-navy overflow-hidden bg-lucas-cream rounded-none"
        >
            {/* The orange slide-up fill to add that sudden pop of energy */}
            <span className="absolute inset-0 w-full h-full bg-lucas-orange transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></span>
            <span className="relative z-10 flex items-center gap-4 group-hover:text-lucas-cream transition-colors duration-500 delay-100">
                Access The Calendar
                <span className="text-lucas-slate group-hover:text-lucas-cream/70 transition-colors">→</span >
            </span>
        </a>
    </motion.div>

    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 relative aspect-[3/4] lg:aspect-[4/5] bg-lucas-navy/5 shadow-2xl group overflow-hidden border border-lucas-navy/10"
    >
        {/* Inventory Tags overlaid on the image */}
        <div className="absolute top-5 left-5 z-20 flex flex-col gap-1.5 mix-blend-difference">
            <span className="font-sans text-[8px] tracking-zissou uppercase text-lucas-cream/70 border border-lucas-cream/20 px-1.5 py-0.5 w-fit">
                [ Fig. 01 ]
            </span>
        </div>
        
        {/* Viewfinder brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-lucas-cream/40 z-20 m-5 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-lucas-cream/40 z-20 m-5 pointer-events-none"></div>

        <img 
            src="/images/img1.JPG" 
            alt="lucas bulger - filmmaker" 
            className="object-cover w-full h-full grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[2000ms] ease-out"
        />
    </motion.div>
</section>

                </div>
            </div>
        </main>
    );
}
