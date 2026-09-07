// app/private-collections/page.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Maximize } from "lucide-react";

const fadeUpContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.45 }
    }
};

const fadeUpItem = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" as const } }
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
    const [activeTab, setActiveTab] = useState<'narrative' | 'purist'>('narrative');

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

    useEffect(() => {
        const collectionsHashes = new Set(["pricing", "collections", "collections-pricing"]);
        const puristHashes = new Set(["purist", "purist-pricing"]);

        const openDeepLink = () => {
            const hash = window.location.hash.replace("#", "").toLowerCase();

            if (puristHashes.has(hash)) {
                setActiveTab("purist");
            } else if (collectionsHashes.has(hash)) {
                setActiveTab("narrative");
            }

            if (collectionsHashes.has(hash) || puristHashes.has(hash)) {
                window.setTimeout(() => {
                    document.getElementById("collections")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 75);
            }
        };

        openDeepLink();
        window.addEventListener("hashchange", openDeepLink);

        return () => window.removeEventListener("hashchange", openDeepLink);
    }, []);

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
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-lucas-navy p-4 md:p-12"
                        onClick={() => setActiveVideo(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 md:top-12 md:right-12 text-lucas-cream hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange z-10"
                            onClick={() => setActiveVideo(null)}
                            aria-label="Close video"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                        
                        <div 
                            className="relative w-full max-w-6xl aspect-video bg-black shadow-md overflow-hidden border border-lucas-slate/20"
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
                            className={`flex items-center gap-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange ${activeSection === item.id ? 'text-lucas-orange' : 'text-lucas-slate hover:text-lucas-navy'}`}
                        >
                            <div className={`w-2 h-2 rounded-full ${activeSection === item.id ? 'bg-lucas-orange' : 'bg-lucas-cream border border-lucas-navy/20'}`}></div>
                            {item.label}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* MOBILE PROGRESS MAP (Sticky Bottom - Mobile Only) */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] lg:hidden flex items-center gap-2 bg-lucas-navy px-6 py-4 rounded-full border border-lucas-cream/10 shadow-md">
                {sectionsNav.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        aria-label={`Scroll to ${item.label}`}
                        className="relative group/nav flex items-center justify-center w-8 h-8 focus-visible:outline-2 focus-visible:outline-lucas-cream"
                    >
                        <div className={`w-2 h-2 rounded-full ${
                            activeSection === item.id 
                                ? 'bg-lucas-orange'
                                : 'bg-lucas-cream/30 group-hover/nav:bg-lucas-cream/60'
                        }`} />
                        {index < sectionsNav.length - 1 && (
                            <div className={`absolute left-full top-1/2 -translate-y-1/2 h-px w-2 ${
                                sectionsNav.findIndex(s => s.id === activeSection) >= index + 1
                                    ? 'bg-lucas-orange/50'
                                    : 'bg-transparent'
                            }`} />
                        )}
                    </button>
                ))}
            </div>

            {/* SCROLLING CONTENT */}
            <div 
                id="dossier-scroll-container" 
                className="flex-1 min-w-0 h-full overflow-y-auto overflow-x-hidden snap-y snap-proximity scroll-smooth [overflow-anchor:none] px-6 lg:px-16"
            >
                <div className="w-full max-w-6xl mx-auto flex flex-col">
                    
                    {/* 01. The Grounded Welcome */}
                    <section id="Intro" className="snap-start min-h-[100dvh] w-full flex flex-col justify-center py-20 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="lg:col-span-7 min-w-0 flex flex-col relative"
                            >
                                
                                <div className="relative z-10">
                                    <p className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] text-lucas-navy leading-[1.4] lowercase">
                                        i’m there to hang out, let the day breathe, and <em className="italic text-lucas-orange/90">bottle exactly how it all felt.</em>
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="lg:col-span-5 min-w-0 relative aspect-[4/3] bg-lucas-navy/5 shadow-md overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-lucas-navy/10 z-10"></div>
                                <video 
                                    src="/videos/clip_10cheers.mp4" 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="object-cover w-full h-full grayscale-[50%] contrast-[1.1]"
                                />
                            </motion.div>

                        </div>
                    </section>

                    {/* 02. The Collections Grid */}
                    <section id="collections" className="snap-start min-h-[100dvh] h-auto w-full flex flex-col justify-start py-10 lg:py-16 relative">
                        <motion.div 
                            variants={fadeUpContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-8 pt-8 lg:pt-0 gap-6">
                                <div>
                                    <h2 className="font-sans text-2xl md:text-3xl uppercase tracking-tight font-bold text-lucas-navy mb-3">
                                        The Collections
                                    </h2>
                                    <p className="font-serif text-[clamp(1rem,1.25vw,1.125rem)] text-lucas-navy/90 italic">
                                        choose digital, add super 8, or bring me along for the weekend.
                                    </p>
                                </div>

                                <div className="flex bg-lucas-cream border border-lucas-navy/20 p-1 relative w-full md:w-fit md:self-start xl:self-auto shadow-sm">
                                    <div 
                                        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-lucas-navy ease-[0.16,1,0.3,1]"
                                        style={{ left: activeTab === 'narrative' ? '4px' : 'calc(50%)' }}
                                    ></div>
                                    
                                    <button 
                                        onClick={() => setActiveTab('narrative')}
                                        aria-pressed={activeTab === 'narrative'}
                                        className={`relative z-10 flex-1 md:flex-none md:w-40 px-6 py-2.5 font-sans text-[9px] md:text-[10px] tracking-zissou uppercase whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lucas-orange ${activeTab === 'narrative' ? 'text-lucas-cream' : 'text-lucas-slate hover:text-lucas-navy'}`}
                                    >
                                        The Narrative
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab('purist')}
                                        aria-pressed={activeTab === 'purist'}
                                        className={`relative z-10 flex-1 md:flex-none md:w-40 px-6 py-2.5 font-sans text-[9px] md:text-[10px] tracking-zissou uppercase whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lucas-orange ${activeTab === 'purist' ? 'text-lucas-cream' : 'text-lucas-slate hover:text-lucas-orange'}`}
                                    >
                                        The Purist
                                    </button>
                                </div>
                            </div>

                            <motion.div variants={fadeUpItem} className="mb-6 border-y border-lucas-navy/20 py-3">
                                <p className="font-sans text-[9px] tracking-zissou text-lucas-slate uppercase mb-3">
                                    {activeTab === 'narrative' ? 'Included in all three collections' : 'Included with The Purist'}
                                </p>
                                <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-[10px] uppercase tracking-widest text-lucas-navy">
                                    <li className="flex items-baseline gap-2"><span className="text-[9px] tracking-zissou text-lucas-slate">01</span>{activeTab === 'narrative' ? 'Unlimited coverage' : '8 hours coverage'}</li>
                                    <li className="flex items-baseline gap-2"><span className="text-[9px] tracking-zissou text-lucas-slate">02</span>Travel within Ontario</li>
                                    <li className="flex items-baseline gap-2"><span className="text-[9px] tracking-zissou text-lucas-slate">03</span>Drone footage (where permitted)</li>
                                    <li className="flex items-baseline gap-2"><span className="text-[9px] tracking-zissou text-lucas-slate">04</span>Online delivery of all films</li>
                                </ul>
                                <p className="font-serif text-[11px] text-lucas-slate italic mt-2">
                                    {activeTab === 'narrative' ? 'coverage from getting ready to lights up.' : 'additional coverage available beyond the included 8 hours.'}
                                </p>
                            </motion.div>

                            <p className="font-serif text-[12px] text-lucas-slate italic mb-4">select a film below to watch an example.</p>

                            <div
                                className="grid grid-cols-1 grid-rows-1 w-full relative"
                            >

                                    {activeTab === 'narrative' ? (
                                        <motion.div
                                            key="narrative-grid"
                                            initial={false}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0 }}
                                            className="col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-3 border border-lucas-navy/20 divide-y lg:divide-y-0 lg:divide-x divide-lucas-navy/20 relative items-stretch w-full h-full"
                                        >
                                            {/* VOL 01 */}
                                            <div className="flex flex-col group relative overflow-hidden bg-lucas-cream h-full w-full">

                                                <div className="p-5 lg:p-6 relative z-10 flex flex-col h-full">
                                                    <div className="flex justify-between items-start mb-6 lg:mb-8">
                                                        <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 01 ]</p>
                                                        <p className="font-sans text-xs tracking-widest text-lucas-navy">$5,800 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                                                    </div>
                                                    <h3 className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] text-lucas-navy italic mb-2">
                                                        The Essential
                                                    </h3>
                                                    <div className="flex items-center gap-3 mb-6 lg:mb-8 border-b border-lucas-navy/10 pb-4 lg:pb-6">
                                                        <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate">Format //</span>
                                                        <span className="font-sans text-[9px] tracking-widest uppercase text-lucas-navy">Digital Only</span>
                                                    </div>

                                                    <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest text-lucas-navy flex-grow">
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('GHhmsEs_8x8')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">5-minute wedding film</span>
                                                                </span>
                                                            </button>
                                                        </li>
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('ZbMe6X3OAQ8')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">ceremony edit</span>
                                                                </span>
                                                            </button>
                                                        </li>
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('Ys5aHnB63aU')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">reception edit</span>
                                                                </span>
                                                                <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform">[ speeches & first dances ]</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* VOL 02 */}
                                            <div className="flex flex-col bg-lucas-navy text-lucas-cream relative z-20 shadow-md border border-lucas-navy group overflow-hidden h-full w-full">
                                                <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none mix-blend-overlay z-0"></div>


                                                <div className="p-5 lg:p-6 relative z-10 flex flex-col h-full">
                                                    <div className="flex justify-between items-start mb-6 lg:mb-8">
                                                        <div className="flex items-center gap-2">
                                                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 02 ]</p>
                                                        </div>
                                                        <p className="font-sans text-xs tracking-widest text-lucas-cream">$6,800 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                                                    </div>
                                                    <h3 className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic mb-2 text-lucas-cream">
                                                        The Analog
                                                    </h3>
                                                    <div className="flex items-center gap-3 mb-6 lg:mb-8 border-b border-lucas-cream/10 pb-4 lg:pb-6">
                                                        <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate">Format //</span>
                                                        <span className="font-sans text-[9px] tracking-widest uppercase text-lucas-orange">Digital + Super 8</span>
                                                    </div>

                                                    <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest text-lucas-cream flex-grow">
                                                        <li className="flex items-start gap-4 opacity-60">
                                                            <span className="text-lucas-orange mt-0.5">+</span>
                                                            <span>ceremony & reception edits from The Essential</span>
                                                        </li>
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('q2Qw5G4M0Lc')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">5-minute wedding film</span>
                                                                </span>
                                                                <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform">[ digital + super 8 ]</span>
                                                            </button>
                                                        </li>
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('Ozy1MUKZZR4')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">3-minute super 8mm film</span>
                                                                </span>
                                                                <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform">[ authentic kodak stock ]</span>
                                                            </button>
                                                        </li>
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('3hDxnAgeL-Y')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">30-second digital reel</span>
                                                                </span>
                                                                <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform">[ delivered the next morning ]</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* VOL 03 */}
                                            <div className="flex flex-col group relative overflow-hidden bg-lucas-cream h-full w-full">

                                                <div className="p-5 lg:p-6 relative z-10 flex flex-col h-full">
                                                    <div className="flex justify-between items-start mb-6 lg:mb-8">
                                                        <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 03 ]</p>
                                                        <p className="font-sans text-xs tracking-widest text-lucas-navy">$8,200 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                                                    </div>
                                                    <h3 className="font-serif text-[clamp(1.25rem,2vw,1.75rem)] text-lucas-navy italic mb-2">
                                                        The Weekend
                                                    </h3>
                                                    <div className="flex items-center gap-3 mb-6 lg:mb-8 border-b border-lucas-navy/10 pb-4 lg:pb-6">
                                                        <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate">Format //</span>
                                                        <span className="font-sans text-[9px] tracking-widest uppercase text-lucas-navy">Digital + Super 8 · Multi-Day</span>
                                                    </div>

                                                    <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest text-lucas-navy flex-grow">
                                                        <li className="flex items-start gap-4 opacity-60">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span>
                                                            <span>everything in The Analog</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span>
                                                            <div className="flex flex-col items-start text-left">
                                                                <span className="border-b border-transparent pb-0.5">welcome party coverage</span>
                                                                <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ alongside the wedding day ]</span>
                                                            </div>
                                                        </li>
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('xCRgV8RAX78')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">watch a weekend example</span>
                                                                </span>
                                                            </button>
                                                        </li>
                                                        <li className="flex items-start gap-4 pt-2">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span>
                                                            <div className="flex flex-col items-start">
                                                                <span>exclusive focus</span>
                                                                <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ your wedding is the only one I take on that weekend ]</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="purist-grid"
                                            initial={false}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0 }}
                                            className="col-start-1 row-start-1 border border-lucas-navy/20 bg-lucas-cream relative overflow-hidden shadow-sm w-full h-full"
                                        >
                                            <div className="absolute top-0 left-0 w-full h-1 bg-lucas-orange"></div>

                                            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-lucas-navy/20 h-full w-full">
                                                <div className="p-8 lg:p-12 flex flex-col justify-between h-full">
                                                    <div>
                                                        <div className="flex justify-between items-start mb-10">
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 00 ]</span>
                                                            </div>
                                                            <p className="font-sans text-sm tracking-widest text-lucas-navy">$4,400 <span className="text-[10px] text-lucas-slate">+ hst</span></p>
                                                        </div>

                                                        <h3 className="font-serif text-[clamp(1.75rem,2.5vw,2.25rem)] text-lucas-navy italic mb-6 leading-none">
                                                            The Purist
                                                        </h3>

                                                        <div className="flex items-center gap-3 mb-8 border-b border-lucas-navy/10 pb-6">
                                                            <span className="font-sans text-[9px] tracking-widest uppercase text-lucas-slate">Format //</span>
                                                            <span className="font-sans text-[10px] tracking-widest uppercase text-lucas-orange">Analog Heavy</span>
                                                        </div>

                                                        <p className="font-serif text-[clamp(0.85rem,1vw,0.95rem)] leading-[1.6] text-lucas-navy/80 lowercase italic pr-4">
                                                            for couples drawn to real super 8 film. a short film, full-length digital ceremony and reception edits, and a 60-second digital reel delivered in one week.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="p-8 lg:p-12 bg-lucas-navy/5 flex flex-col relative h-full">
                                                    <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

                                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-8 relative z-10">
                                                        [ Your Films ]
                                                    </span>

                                                    <ul className="flex flex-col gap-6 font-sans text-[11px] uppercase tracking-widest text-lucas-navy flex-grow relative z-10">
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('Ozy1MUKZZR4')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">3-minute super 8mm film</span>
                                                                </span>
                                                                <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform">[ authentic kodak stock ]</span>
                                                            </button>
                                                        </li>
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('pjG38GNQOxQ')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">ceremony edit</span>
                                                                </span>
                                                            </button>
                                                        </li>
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('Fn9sr1eJESY')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">reception edit</span>
                                                                </span>
                                                                <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform">[ speeches & first dances ]</span>
                                                            </button>
                                                        </li>
                                                        <li className="flex items-start gap-4 group/link">
                                                            <span className="text-lucas-orange mt-0.5">+</span>
                                                            <button onClick={() => setActiveVideo('hUOVbTsxAho')} className="text-left flex flex-col items-start hover:text-lucas-orange focus-visible:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange w-full">
                                                                <span className="flex items-center gap-2 transform">
                                                                    <Maximize size={12} className="text-lucas-slate group-hover/link:text-lucas-orange" />
                                                                    <span className="border-b border-transparent group-hover/link:border-lucas-orange/30 pb-0.5">60-second digital reel</span>
                                                                </span>
                                                                <span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block transform">[ delivered in one week ]</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="p-8 lg:p-12 bg-lucas-cream flex flex-col relative h-full">
                                                    <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-8 block">
                                                        [ Optional Additions ]
                                                    </span>

                                                    <ul className="flex flex-col gap-6 font-sans text-[10px] uppercase tracking-widest text-lucas-navy flex-grow">
                                                        <li className="flex flex-col border-b border-lucas-navy/10 pb-4 group p-2 -mx-2 rounded-sm cursor-default">
                                                            <div className="flex justify-between items-end mb-1">
                                                                <span className="font-bold text-lucas-navy">+ Extra Super 8mm Roll</span>
                                                                <span className="text-lucas-orange">$800</span>
                                                            </div>
                                                            <span className="text-[9px] text-lucas-slate normal-case font-serif italic tracking-normal">[ brings the core film to 6 minutes ]</span>
                                                        </li>

                                                        <li className="flex flex-col border-b border-lucas-navy/10 pb-4 group p-2 -mx-2 rounded-sm cursor-default">
                                                            <div className="flex justify-between items-end mb-1">
                                                                <span className="font-bold text-lucas-navy">+ Additional Time</span>
                                                                <span className="text-lucas-orange">$300</span>
                                                            </div>
                                                            <span className="text-[9px] text-lucas-slate normal-case font-serif italic tracking-normal">[ per extra hour ]</span>
                                                        </li>
                                                    </ul>

                                                    <div className="mt-8 pt-6 border-t border-lucas-navy/20">
                                                        <p className="font-serif text-[13px] text-lucas-slate lowercase italic leading-relaxed">
                                                            additions are optional. you can decide one month before the wedding.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                            </div>
                        </motion.div>
                    </section>

                    {/* 03. Logistics / FAQs */}
                    <section id="notes" className="snap-start min-h-[100dvh] h-auto w-full flex flex-col justify-center py-12 lg:py-16 relative">
                        <div className="bg-lucas-navy text-lucas-cream p-[clamp(1.5rem,4vw,3.5rem)] rounded-sm shadow-md relative overflow-hidden w-full">
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

                    {/* 04. The Blueprint / Progression */}
                    <section id="progression" className="snap-start min-h-[100dvh] w-full flex flex-col justify-center py-12 lg:py-24 relative bg-lucas-cream overflow-hidden">
                        <motion.div 
                            variants={fadeUpContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-lucas-navy uppercase tracking-tight">
                                        How This Works.
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                {[
                                    { indicator: "filed", title: "the discovery", description: "you connected with my work and sent an inquiry. the best news: the calendar aligned.", status: "past", ref: "01" },
                                    { indicator: "you are here", title: "the inventory", description: "reviewing the collections, running the numbers, and looking into next steps.", status: "active", ref: "02" },
                                    { indicator: "pending", title: "the intro", description: "a quick video call. i want to hear about the day, answer questions, and see if it's a fit.", status: "future", ref: "03" },
                                    { indicator: "pending", title: "the details", description: "i draft a custom proposal. you review the logistics, and i place a soft hold on the date.", status: "future", ref: "04" },
                                    { indicator: "pending", title: "making it official", description: "you sign the digital paperwork, cover the retainer, and the date is locked.", status: "future", ref: "05" }
                                ].map((step, index) => (
                                    <motion.div 
                                        key={index}
                                        variants={fadeUpItem}
                                        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-5 border-b border-dashed border-lucas-navy/20 group relative px-4 -mx-4"
                                    >
                                        <div className="md:col-span-3 flex items-center gap-4">
                                            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center border border-lucas-navy/30 rounded-none bg-lucas-cream">
                                                {step.status === 'past' && <div className="w-full h-full bg-lucas-slate/40"></div>}
                                                {step.status === 'active' && <div className="w-2 h-2 bg-lucas-orange"></div>}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-sans text-[9px] text-lucas-slate tracking-zissou uppercase mb-0.5">[{step.ref}]</span>
                                                <span className={`font-sans uppercase tracking-[0.2em] text-[10px] font-bold ${
                                                    step.status === 'active' 
                                                        ? 'text-lucas-orange' 
                                                        : step.status === 'past' 
                                                            ? 'text-lucas-slate/60 line-through' 
                                                            : 'text-lucas-slate/60'
                                                }`}>
                                                    {step.indicator}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="md:col-span-3 flex items-center">
                                            <h3 className={`font-sans font-medium text-xl md:text-2xl lowercase ${
                                                step.status === 'past' ? 'text-lucas-navy/50' : 'text-lucas-navy'
                                            }`}>
                                                {step.title}
                                            </h3>
                                        </div>

                                        <div className="md:col-span-5 flex items-center">
                                            <p className={`font-serif italic text-[clamp(1rem,1.2vw,1.125rem)] leading-snug ${
                                                step.status === 'past' ? 'text-lucas-navy/60' : 'text-lucas-navy'
                                            }`}>
                                                {step.description}
                                            </p>
                                        </div>

                                        <div className="hidden md:flex md:col-span-1 items-center justify-end">
                                            {step.status === 'active' ? (
                                                <div className="w-8 h-8 relative border border-lucas-orange/30 overflow-hidden mix-blend-multiply">
                                                    <img src="/images/img1.JPG" alt="current step" className="object-cover w-full h-full grayscale opacity-60" />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 border border-lucas-slate/10 flex items-center justify-center">
                                                    <div className="w-1 h-1 rounded-full bg-lucas-slate/20"></div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* 05. The Intro (CTA) */}
                    <section id="booking" className="snap-start min-h-[100dvh] h-auto w-full flex flex-col md:flex-row items-center justify-between py-16 lg:py-24 relative gap-12 lg:gap-16">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="w-full md:w-1/2 flex flex-col items-start pt-12 md:pt-0 z-10"
                        >
                            
                            <h2 className="font-sans font-bold text-[clamp(3rem,5vw,4.5rem)] uppercase text-lucas-navy mb-6 leading-[0.9] tracking-tight">
                                Let's Talk.
                            </h2>
                            
                            <p className="font-serif italic text-[clamp(1.25rem,2vw,1.5rem)] text-lucas-navy/85 mb-10 max-w-md lowercase leading-relaxed">
                                zero obligation. we jump on a video call, run through the logistics of the day, and most importantly—make sure i'm actually someone you want hanging around.
                            </p>
                            
                            <a 
                                href="https://calendar.app.google/hHwZZoq1LYGWCo6u9" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lucas-button inline-flex items-center justify-center px-12 py-5 font-sans text-[10px] tracking-zissou uppercase rounded-none"
                            >
                                <span className="flex items-center gap-4">
                                    Access The Calendar
                                    <span aria-hidden="true">→</span>
                                </span>
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="w-full md:w-1/2 relative aspect-[3/4] lg:aspect-[4/5] bg-lucas-navy/5 shadow-md group overflow-hidden border border-lucas-navy/10"
                        >

                            <img 
                                src="/images/img1.JPG" 
                                alt="lucas bulger - filmmaker" 
                                className="object-cover w-full h-full grayscale contrast-125 brightness-90"
                            />
                        </motion.div>
                    </section>

                </div>
            </div>
        </main>
    );
}
