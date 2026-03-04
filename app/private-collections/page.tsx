"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, Plus, Minus } from "lucide-react";

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
    { id: "booking", label: "05. Logistics" },
];

export default function PrivateCollectionsPage() {
    const [activeSection, setActiveSection] = useState("Intro");
    const [expandedCollection, setExpandedCollection] = useState<string | null>(null);

    // intersection observer to highlight the active index dot
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.2 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleCollection = (id: string) => {
        setExpandedCollection(expandedCollection === id ? null : id);
    };

    return (
        <main className="min-h-screen bg-lucas-cream flex flex-col md:flex-row relative">
            
            {/* THE DOSSIER INDEX (Sticky Left Sidebar - Desktop Only) */}
            <aside className="hidden lg:flex flex-col sticky top-0 h-screen w-64 border-r border-lucas-navy/10 pt-[clamp(6rem,15vh,10rem)] px-8 z-50">
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

            {/* SCROLLING CONTENT */}
            <div className="flex-1 w-full pt-[clamp(6rem,15vh,10rem)] pb-[clamp(6rem,10vh,12rem)] px-6 lg:px-16 overflow-hidden">
                <div className="w-full max-w-6xl mx-auto">
                    
                    {/* 01. The Grounded Welcome */}
                    <section id="Intro" className="mb-[clamp(6rem,12vh,12rem)] relative pt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                                className="lg:col-span-7"
                            >
                                <h1 className="font-sans text-4xl md:text-6xl lg:text-[5rem] font-bold uppercase tracking-tight text-lucas-navy mb-10 leading-none">
                                    Thank you for <br/>connecting.
                                </h1>

                                <div className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] text-lucas-navy leading-[1.6] space-y-6 lowercase">
                                    <p>
                                        i don't run a production set, and i don't shoot for the algorithm. my approach is simpler: i'm there to celebrate with you. 
                                    </p>
                                    <p>
                                        the goal isn't to direct a perfect script; it's to hang out, let the day breathe, and <em className="italic">bottle exactly how it all felt</em>.
                                    </p>
                                    <p className="italic text-lucas-slate pt-4">
                                        here is everything you need to know about working together.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                                className="lg:col-span-5 relative aspect-[4/3] bg-lucas-navy/5 shadow-2xl overflow-hidden"
                            >
                                <video 
                                    src="/videos/clip_10cheers.mp4" 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="object-cover w-full h-full grayscale-[50%]"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* 02. The Collections Grid (Rewritten) */}
                    <section id="collections" className="mb-[clamp(6rem,12vh,12rem)] scroll-mt-24">
                        <motion.div 
                            variants={fadeUpContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-px bg-lucas-navy/20 flex-grow"></div>
                                <h2 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy font-bold px-4">
                                    The Collections
                                </h2>
                                <div className="h-px bg-lucas-navy/20 flex-grow"></div>
                            </div>

                            <div className="grid grid-cols-1 xl:grid-cols-3 border border-lucas-navy/20 divide-y xl:divide-y-0 xl:divide-x divide-lucas-navy/20 relative items-start">
                                
                                {/* VOL 01 */}
                                <motion.div variants={fadeUpItem} className="flex flex-col group transition-colors duration-1000 relative overflow-hidden bg-lucas-cream hover:bg-lucas-navy/5">
                                    {/* Subtle video background on hover */}
                                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none">
                                        <video src="/videos/clip_digital.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-1 bg-lucas-navy transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20"></div>
                                    
                                    <div className="p-[clamp(1.5rem,3vw,2.5rem)] relative z-10">
                                        <div className="flex justify-between items-start mb-12">
                                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 01 ]</p>
                                            <p className="font-sans text-xs tracking-widest text-lucas-navy">$5,800 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                                        </div>
                                        <h3 className="font-serif text-[clamp(2rem,3vw,2.5rem)] text-lucas-navy italic mb-4">
                                            The Essential
                                        </h3>
                                        <p className="font-sans text-xs text-lucas-slate lowercase leading-relaxed mb-8 h-12">
                                            honest, digital storytelling. focusing purely on the narrative of the day without the extra physical footprint.
                                        </p>
                                        
                                        <button 
                                            onClick={() => toggleCollection('vol1')}
                                            className="flex items-center gap-3 font-sans text-[10px] uppercase tracking-zissou text-lucas-navy mb-4 hover:text-lucas-orange transition-colors"
                                        >
                                            {expandedCollection === 'vol1' ? <Minus size={14} /> : <Plus size={14} />}
                                            [ the inventory ]
                                        </button>

                                        <AnimatePresence>
                                            {expandedCollection === 'vol1' && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest text-lucas-navy pt-6 border-t border-lucas-navy/10 mt-2 pb-2">
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>presence from getting ready to the heavy dancing</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>5-minute narrative film</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>documentary ceremony edit</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>the raw reception frames <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ speeches & first dances ]</span></span>
                                                        </li>
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>

                                {/* VOL 02 (The Offset Flagship) */}
                                <motion.div variants={fadeUpItem} className="flex flex-col bg-lucas-navy text-lucas-cream relative z-20 xl:-translate-y-6 shadow-2xl border border-lucas-navy group overflow-hidden">
                                    <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none mix-blend-overlay z-0"></div>
                                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-15 transition-opacity duration-1000 pointer-events-none mix-blend-screen">
                                        <video src="/videos/clip_super8.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover filter contrast-150" />
                                    </div>
                                    
                                    <div className="absolute top-0 bottom-0 left-2 w-2 border-y-[10px] border-transparent border-dashed group-hover:border-lucas-cream/10 transition-colors duration-700 pointer-events-none z-0"></div>
                                    <div className="absolute top-0 bottom-0 right-2 w-2 border-y-[10px] border-transparent border-dashed group-hover:border-lucas-cream/10 transition-colors duration-700 pointer-events-none z-0"></div>

                                    <div className="p-[clamp(1.5rem,3vw,2.5rem)] relative z-10">
                                        <div className="flex justify-between items-start mb-12">
                                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 02 ]</p>
                                            <p className="font-sans text-xs tracking-widest text-lucas-cream">$6,800 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                                        </div>
                                        <h3 className="font-serif text-[clamp(2rem,3vw,2.5rem)] italic mb-4 text-lucas-cream">
                                            The Analog
                                        </h3>
                                        <p className="font-sans text-xs text-lucas-slate lowercase leading-relaxed mb-8 h-12">
                                            the flagship collection. weaving high-fidelity digital frames with the nostalgic, imperfect texture of authentic super 8mm film.
                                        </p>

                                        <button 
                                            onClick={() => toggleCollection('vol2')}
                                            className="flex items-center gap-3 font-sans text-[10px] uppercase tracking-zissou text-lucas-cream mb-4 hover:text-lucas-orange transition-colors"
                                        >
                                            {expandedCollection === 'vol2' ? <Minus size={14} /> : <Plus size={14} />}
                                            [ the inventory ]
                                        </button>

                                        <AnimatePresence>
                                            {expandedCollection === 'vol2' && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest text-lucas-cream pt-6 border-t border-lucas-cream/10 mt-2 pb-2">
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange mt-0.5">+</span> 
                                                            <span>presence from getting ready to the heavy dancing</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange mt-0.5">+</span> 
                                                            <span>5-minute narrative film</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange mt-0.5">+</span> 
                                                            <span>3-minute super 8mm film <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ authentic kodak stock ]</span></span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange mt-0.5">+</span> 
                                                            <span>30-second digital reel <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ the immediate highlights, delivered before you wake up ]</span></span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange mt-0.5">+</span> 
                                                            <span>documentary ceremony edit</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange mt-0.5">+</span> 
                                                            <span>the raw reception frames</span>
                                                        </li>
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>

                                {/* VOL 03 */}
                                <motion.div variants={fadeUpItem} className="flex flex-col group transition-colors duration-1000 relative overflow-hidden bg-lucas-cream hover:bg-lucas-navy/5">
                                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none">
                                        <video src="/videos/clip_weekend.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-1 bg-lucas-navy transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20"></div>
                                    
                                    <div className="p-[clamp(1.5rem,3vw,2.5rem)] relative z-10">
                                        <div className="flex justify-between items-start mb-12">
                                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 03 ]</p>
                                            <p className="font-sans text-xs tracking-widest text-lucas-navy">$8,200 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                                        </div>
                                        <h3 className="font-serif text-[clamp(2rem,3vw,2.5rem)] text-lucas-navy italic mb-4">
                                            The Weekend
                                        </h3>
                                        <p className="font-sans text-xs text-lucas-slate lowercase leading-relaxed mb-8 h-12">
                                            for multi-day celebrations. comprehensive coverage spanning the welcome events through to the day after, finished with physical artifacts.
                                        </p>

                                        <button 
                                            onClick={() => toggleCollection('vol3')}
                                            className="flex items-center gap-3 font-sans text-[10px] uppercase tracking-zissou text-lucas-navy mb-4 hover:text-lucas-orange transition-colors"
                                        >
                                            {expandedCollection === 'vol3' ? <Minus size={14} /> : <Plus size={14} />}
                                            [ the inventory ]
                                        </button>

                                        <AnimatePresence>
                                            {expandedCollection === 'vol3' && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <ul className="flex flex-col gap-4 font-sans text-[11px] uppercase tracking-widest text-lucas-navy pt-6 border-t border-lucas-navy/10 mt-2 pb-2">
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>multi-day presence <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ welcome party + the day ]</span></span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>5-minute narrative film</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>3-minute super 8mm film <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ authentic kodak stock ]</span></span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>30-second digital reel <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ the immediate highlights, delivered before you wake up ]</span></span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>documentary ceremony edit</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>the raw reception frames</span>
                                                        </li>
                                                        <li className="flex items-start gap-4">
                                                            <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                                            <span>the physical artifacts <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">[ 1x processed super 8mm spool + 15x printed frames + 1x linen box ]</span></span>
                                                        </li>
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>
                    </section>

                    {/* 03. Logistics / FAQs */}
                    <section id="notes" className="mb-[clamp(6rem,12vh,12rem)] scroll-mt-24 bg-lucas-navy text-lucas-cream p-8 md:p-16 lg:p-24 -mx-6 lg:-mx-16 lg:px-24 rounded-sm shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none mix-blend-overlay"></div>
                        
                        <motion.div 
                            variants={fadeUpContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative z-10"
                        >
                            <div className="flex items-center justify-between border-b border-lucas-cream/20 pb-6 mb-16">
                                <h2 className="font-sans text-3xl md:text-4xl uppercase tracking-tight font-bold">
                                    Notes
                                </h2>
                                <span className="font-sans text-[10px] tracking-zissou text-lucas-cream/60 uppercase hidden md:block">
                                    [ Logistics & Parameters ]
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                                <div className="flex flex-col">
                                    <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-4 border-l-2 border-lucas-orange pl-3">
                                        The Retainer
                                    </h3>
                                    <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-cream/80 lowercase">
                                        to lock in the date, i require a 1/3 retainer upfront. the remaining balance is simply due two weeks before the day.
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-4 border-l-2 border-lucas-orange pl-3">
                                        The Geography
                                    </h3>
                                    <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-cream/80 lowercase">
                                        home base is guelph, ontario. miles within the province are entirely on me. there are no hidden travel fees for ontario commissions.
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-4 border-l-2 border-lucas-orange pl-3">
                                        The Footprint
                                    </h3>
                                    <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-cream/80 lowercase">
                                        most of the time, no second shooter is needed. i document 95% of my commissions solo. it keeps the day feeling natural and unforced. if you have completely separate getting-ready locations or a highly complex timeline, i'm happy to bring a trusted peer along.
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-4 border-l-2 border-lucas-orange pl-3">
                                        The Photographers
                                    </h3>
                                    <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-cream/80 lowercase">
                                        working well with your photographer is a strict priority. we have the exact same goal: collecting the best frames. i stay out of the way, shoot from different angles, and mostly, they won't even notice i'm there.
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-4 border-l-2 border-lucas-orange pl-3">
                                        The Delivery
                                    </h3>
                                    <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-cream/80 lowercase">
                                        i prefer to edit while the feeling of the day is still fresh. average turnaround is 5 weeks, but i give myself 10 weeks in the contract just to be safe.
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-cream mb-4 border-l-2 border-lucas-orange pl-3">
                                        The Standard
                                    </h3>
                                    <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-cream/80 lowercase">
                                        absolutely inclusive. i am honored to document your connection, regardless of religion, gender, race, or sexual orientation.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* 04. The Progression */}
                    <section id="progression" className="mb-[clamp(6rem,12vh,12rem)] scroll-mt-24">
                        <motion.div 
                            variants={fadeUpContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="flex items-center gap-4 mb-16">
                                <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full animate-pulse"></span>
                                <h2 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy font-bold">
                                    The Progression
                                </h2>
                                <div className="h-px bg-lucas-navy/20 flex-grow"></div>
                                <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase hidden md:block">
                                    [ the roadmap ]
                                </span>
                            </div>

                            <div className="relative max-w-3xl mx-auto">
                                <div className="absolute left-[14px] md:left-[23px] top-4 bottom-4 w-px bg-lucas-navy/10"></div>
                                
                                <motion.div 
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 2.5, ease: "easeInOut" }}
                                    className="absolute left-[14px] md:left-[23px] top-4 w-px bg-lucas-navy origin-top"
                                ></motion.div>

                                <div className="flex flex-col gap-10 md:gap-14">
                                    {[
                                        { num: "01", title: "The Discovery", desc: "you found my work, felt a connection, and sent over an inquiry.", status: "completed" },
                                        { num: "02", title: "The Inventory", desc: "you are here. reviewing the collections, watching the films, and seeing if we align.", status: "current" },
                                        { num: "03", title: "The Intro", desc: "we jump on a quick discovery call or chat via email to get to know each other and talk logistics.", status: "future" },
                                        { num: "04", title: "The Details", desc: "i build a custom proposal for you to review and place a soft hold on your date.", status: "future" },
                                        { num: "05", title: "Making it Official", desc: "if we're a go, you sign the digital agreement and pay the 1/3 retainer. the date is locked.", status: "future" },
                                        { num: "06", title: "The In-Between", desc: "send me moodboards, tag me in inspiration, or just go radio silent and enjoy being engaged.", status: "future" },
                                        { num: "07", title: "The Final Sync", desc: "one month out, we'll connect with you or your planner to iron out the specific timeline.", status: "future" }
                                    ].map((step, i) => (
                                        <motion.div 
                                            key={i} 
                                            variants={fadeUpItem}
                                            className={`relative flex gap-6 md:gap-10 group ${step.status === 'completed' ? 'opacity-50 grayscale' : ''}`}
                                        >
                                            <div className={`relative z-10 flex-shrink-0 flex items-center justify-center w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-full border transition-colors duration-500 bg-lucas-cream ${
                                                step.status === 'completed' ? 'border-lucas-slate/40 text-lucas-slate' :
                                                step.status === 'current' ? 'border-lucas-orange text-lucas-orange shadow-[0_0_15px_rgba(214,90,49,0.2)]' :
                                                'border-lucas-navy/20 text-lucas-slate hover:border-lucas-navy bg-lucas-cream'
                                            }`}>
                                                {step.status === 'completed' && <Check size={16} strokeWidth={1.5} />}
                                                {step.status === 'current' && <span className="w-2 h-2 rounded-full bg-lucas-orange animate-pulse"></span>}
                                                {step.status === 'future' && <span className="font-sans text-[9px] tracking-zissou ml-0.5">{step.num}</span>}
                                            </div>

                                            <div className="flex flex-col pt-1 md:pt-3 pb-2">
                                                <div className="flex flex-wrap items-center gap-3 mb-2 md:mb-3">
                                                    <h4 className={`font-sans text-xs md:text-sm uppercase tracking-widest ${
                                                        step.status === 'current' ? 'text-lucas-orange font-bold' : 'text-lucas-navy'
                                                    }`}>
                                                        {step.title}
                                                    </h4>
                                                    {step.status === 'completed' && <span className="font-sans text-[8px] tracking-zissou text-lucas-slate uppercase border border-lucas-slate/20 px-2 py-0.5 rounded-sm">Done</span>}
                                                    {step.status === 'current' && <span className="font-sans text-[8px] tracking-zissou text-lucas-orange uppercase border border-lucas-orange/30 bg-lucas-orange/5 px-2 py-0.5 rounded-sm">You are here</span>}
                                                </div>
                                                <p className={`font-serif text-base md:text-[1.125rem] leading-relaxed lowercase ${step.status === 'completed' ? 'text-lucas-slate' : 'text-lucas-navy/80'}`}>
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* 05. The CTA */}
                    <section id="booking" className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-lucas-navy/10 relative scroll-mt-24 gap-12 pb-12">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2"
                        >
                            <h2 className="font-serif italic text-[clamp(2.5rem,4vw,3.5rem)] text-lucas-navy mb-6 leading-none">
                                let's talk <br/>logistics.
                            </h2>
                            
                            <p className="font-sans text-sm text-lucas-slate mb-10 max-w-md lowercase leading-relaxed">
                                once you're ready, we'll set up a time to grab a coffee or jump on a video call. we'll map out the timeline, discuss your narrative preferences, and most importantly, just get to know each other.
                            </p>
                            
                            <a 
                                href="https://calendly.com/your-day-by-lucas" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-12 py-5 font-sans text-xs tracking-zissou uppercase text-lucas-navy border border-lucas-navy overflow-hidden"
                            >
                                <span className="absolute inset-0 w-full h-full bg-lucas-navy transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                                <span className="relative z-10 group-hover:text-lucas-cream transition-colors duration-500 delay-100">
                                    Book Discovery Call
                                </span>
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="w-full md:w-1/2 relative aspect-[4/5] bg-lucas-navy/5 shadow-xl"
                        >
                            <img 
                                src="/images/img1.JPG" 
                                alt="Lucas" 
                                className="object-cover w-full h-full grayscale contrast-125 brightness-90"
                            />
                        </motion.div>
                    </section>

                </div>
            </div>
        </main>
    );
}
