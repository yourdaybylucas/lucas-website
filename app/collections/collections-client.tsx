"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

export default function CollectionsPage() {
    return (
        <main className="min-h-screen bg-lucas-cream flex flex-col items-center pt-[clamp(4rem,10vh,8rem)] pb-[clamp(4rem,10vh,8rem)] px-6 overflow-hidden">
            <h1 className="sr-only">Wedding Film Collections</h1>
            
            <div className="w-full max-w-6xl mx-auto">
                
                {/* 01. The Restrained Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex flex-col items-center justify-center text-center mb-[clamp(4rem,8vh,8rem)] relative"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-px bg-lucas-slate/30"></div>
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                            [ the approach ]
                        </span>
                        <div className="w-12 h-px bg-lucas-slate/30"></div>
                    </div>
                    <p className="font-serif text-[clamp(1.875rem,4vw,3rem)] text-lucas-navy italic max-w-2xl leading-[1.4]">
                        no hourly clocks. <br className="hidden md:block"/>just you, me, and the day.
                    </p>
                </motion.div>

                {/* 02. The Baseline (Ledger Style) */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-[clamp(4rem,8vh,8rem)]"
                >
                    <div className="flex items-center gap-4 mb-[clamp(1.5rem,3vw,2.5rem)]">
                        <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full"></span>
                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy font-bold">
                            The Baseline
                        </h3>
                        <div className="h-px bg-lucas-navy/20 flex-grow"></div>
                        <p className="font-serif text-sm text-lucas-slate italic pr-2">
                            included in every collection
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-y border-lucas-navy/10 divide-y md:divide-y-0 md:divide-x divide-lucas-navy/10">
                        <div className="flex flex-col gap-2 p-[clamp(1.25rem,2vw,1.5rem)] hover:bg-lucas-navy/5 transition-colors duration-slow">
                            <span className="font-sans text-[9px] tracking-zissou text-lucas-slate">01</span>
                            <h4 className="font-sans text-xs uppercase tracking-widest text-lucas-navy">All-day Coverage</h4>
                            <p className="font-serif text-sm text-lucas-slate italic">from getting ready to lights up.</p>
                        </div>
                        <div className="flex flex-col gap-2 p-[clamp(1.25rem,2vw,1.5rem)] hover:bg-lucas-navy/5 transition-colors duration-slow">
                            <span className="font-sans text-[9px] tracking-zissou text-lucas-slate">02</span>
                            <h4 className="font-sans text-xs uppercase tracking-widest text-lucas-navy">Provincial Travel</h4>
                            <p className="font-serif text-sm text-lucas-slate italic">miles within ontario are on me.</p>
                        </div>
                        <div className="flex flex-col gap-2 p-[clamp(1.25rem,2vw,1.5rem)] hover:bg-lucas-navy/5 transition-colors duration-slow">
                            <span className="font-sans text-[9px] tracking-zissou text-lucas-slate">03</span>
                            <h4 className="font-sans text-xs uppercase tracking-widest text-lucas-navy">Aerial Perspectives</h4>
                            <p className="font-serif text-sm text-lucas-slate italic">drone documentation (if permitted).</p>
                        </div>
                        <div className="flex flex-col gap-2 p-[clamp(1.25rem,2vw,1.5rem)] hover:bg-lucas-navy/5 transition-colors duration-slow">
                            <span className="font-sans text-[9px] tracking-zissou text-lucas-slate">04</span>
                            <h4 className="font-sans text-xs uppercase tracking-widest text-lucas-navy">Digital Archive</h4>
                            <p className="font-serif text-sm text-lucas-slate italic">curated online delivery of all films.</p>
                        </div>
                    </div>
                </motion.div>

                {/* 03. The Collections (The Architectural Grid) */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 border border-lucas-navy/20 divide-y lg:divide-y-0 lg:divide-x divide-lucas-navy/20 mb-[clamp(2rem,4vh,4rem)] relative"
                >
                    {/* VOL 01 */}
                    <motion.div variants={fadeUpItem} className="p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col group hover:bg-[#E5E0D5]/50 transition-colors duration-slow relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-lucas-navy transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <div className="flex justify-between items-start mb-12">
                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 01 ]</p>
                        </div>
                        <h3 className="font-serif text-[clamp(2rem,3vw,2.5rem)] text-lucas-navy italic mb-10">
                            The Essential
                        </h3>
                        <ul className="flex flex-col gap-5 font-sans text-[11px] uppercase tracking-widest text-lucas-navy flex-grow">
                            <li className="flex items-start gap-4">
                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                <span>5-minute highlight film</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                <span>Documentary ceremony edit</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                <span>Documentary reception edit <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">(speeches & first dances)</span></span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* VOL 02 - The Flagship */}
                    <motion.div variants={fadeUpItem} className="p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col bg-lucas-navy text-lucas-cream relative z-10 lg:scale-[1.03] shadow-2xl border border-lucas-navy group">
                        <div className="absolute inset-0 bg-grain opacity-[0.08] pointer-events-none mix-blend-overlay"></div>
                        
                        <div className="flex justify-between items-start mb-12 relative z-10">
                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 02 ]</p>
                            <div className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-lucas-orange rounded-full animate-pulse"></span>
                                <span className="font-sans text-[9px] tracking-zissou text-lucas-orange uppercase border border-lucas-orange/30 px-3 py-1.5">
                                    The Flagship
                                </span>
                            </div>
                        </div>
                        <h3 className="font-serif text-[clamp(2rem,3vw,2.5rem)] italic mb-10 text-lucas-cream relative z-10">
                            The Analog
                        </h3>
                        <ul className="flex flex-col gap-5 font-sans text-[11px] uppercase tracking-widest flex-grow relative z-10">
                            <li className="flex items-start gap-4 opacity-70">
                                <span className="text-lucas-orange mt-0.5">+</span> 
                                <span>Everything in Vol. 01</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-lucas-orange mt-0.5">+</span> 
                                <span>3-minute Super 8mm film <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">(authentic kodak film)</span></span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-lucas-orange mt-0.5">+</span> 
                                <span>Next day teaser edit</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* VOL 03 */}
                    <motion.div variants={fadeUpItem} className="p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col group hover:bg-[#E5E0D5]/50 transition-colors duration-slow relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-lucas-navy transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <div className="flex justify-between items-start mb-12">
                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 03 ]</p>
                        </div>
                        <h3 className="font-serif text-[clamp(2rem,3vw,2.5rem)] text-lucas-navy italic mb-10">
                            The Weekend
                        </h3>
                        <ul className="flex flex-col gap-5 font-sans text-[11px] uppercase tracking-widest text-lucas-navy flex-grow">
                            <li className="flex items-start gap-4">
                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                <span>Everything in Vol. 02</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                <span>Welcome party coverage</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                <span>Exclusive studio focus <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">(only wedding booked that weekend)</span></span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* 04. The Teaser Line (Fluid architecture) */}
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: "clamp(3rem, 10vh, 6rem)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="w-px bg-lucas-orange mx-auto my-[clamp(2rem,6vh,5rem)]"
                />

                {/* 05. The Investment Footer */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center px-6 relative"
                >
                    <h2 className="font-sans text-[clamp(1.875rem,4vw,3rem)] uppercase tracking-tight font-bold text-lucas-navy mb-6">
                        Commissions begin at $5,800
                    </h2>
                    
                    <p className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] text-lucas-slate mb-12 max-w-2xl italic leading-relaxed">
                        inquire for the complete guide, including full pricing and logistics.
                    </p>
                    
                    <Link 
                        href="/#contact" 
                        className="group relative inline-flex items-center justify-center px-12 py-5 font-sans text-xs tracking-zissou uppercase text-lucas-navy border border-lucas-navy overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-lucas-navy transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                        <span className="relative z-10 group-hover:text-lucas-cream transition-colors duration-500 delay-100">
                            Inquire
                        </span>
                    </Link>
                </motion.div>

            </div>
        </main>
    );
}
