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
        <main className="min-h-screen bg-lucas-cream flex flex-col items-center pt-32 pb-32 px-6 overflow-hidden">
            
            <div className="w-full max-w-6xl mx-auto">
                
                {/* 01. The Restrained Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex flex-col items-center justify-center text-center mb-24"
                >
                    <div className="border border-lucas-navy/20 px-4 py-2 mb-6">
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-navy uppercase">
                            The Approach
                        </span>
                    </div>
                    <p className="font-serif text-2xl md:text-3xl text-lucas-navy italic">
                        no hourly clocks. just you, me, and the day.
                    </p>
                </motion.div>

                {/* 02. The Baseline (Menu Header Style) */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-2 h-2 bg-lucas-orange rounded-full"></span>
                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy font-bold">
                            The Baseline Inventory
                        </h3>
                        <div className="h-px bg-lucas-navy/20 flex-grow"></div>
                        <p className="font-serif text-sm text-lucas-slate italic pr-2">
                            included in every collection
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-1">
                            <h4 className="font-sans text-xs uppercase tracking-widest text-lucas-navy">1. Unlimited Coverage</h4>
                            <p className="font-serif text-sm text-lucas-slate">from getting ready to lights up.</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="font-sans text-xs uppercase tracking-widest text-lucas-navy">2. Provincial Travel</h4>
                            <p className="font-serif text-sm text-lucas-slate">miles within ontario are on me.</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="font-sans text-xs uppercase tracking-widest text-lucas-navy">3. Aerial Perspectives</h4>
                            <p className="font-serif text-sm text-lucas-slate">drone documentation (if permitted).</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="font-sans text-xs uppercase tracking-widest text-lucas-navy">4. Digital Archive</h4>
                            <p className="font-serif text-sm text-lucas-slate">curated online delivery of all films.</p>
                        </div>
                    </div>
                </motion.div>

                {/* 03. The Collections (The Architectural Grid) */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 border border-lucas-navy/20 divide-y lg:divide-y-0 lg:divide-x divide-lucas-navy/20 mb-32"
                >
                    {/* VOL 01 */}
                    <div className="p-10 flex flex-col hover:bg-[#E5E0D5]/30 transition-colors duration-slow">
                        <div className="flex justify-between items-start mb-12">
                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">Vol. 01</p>
                        </div>
                        <h3 className="font-serif text-3xl text-lucas-navy italic mb-8">
                            The Essential
                        </h3>
                        <ul className="flex flex-col gap-4 font-sans text-xs uppercase tracking-widest text-lucas-navy flex-grow">
                            <li className="flex items-start gap-3">
                                <span className="text-lucas-slate mt-0.5">+</span> 
                                <span>5-minute highlight film</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-lucas-slate mt-0.5">+</span> 
                                <span>Documentary ceremony edit</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-lucas-slate mt-0.5">+</span> 
                                <span>Documentary reception edit <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal">(speeches & first dances)</span></span>
                            </li>
                        </ul>
                    </div>

                    {/* VOL 02 - The Flagship (Inverted for hierarchy) */}
                    <div className="p-10 flex flex-col bg-lucas-navy text-lucas-cream relative z-10 lg:scale-[1.02] shadow-xl border border-lucas-navy">
                        <div className="flex justify-between items-start mb-12">
                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">Vol. 02</p>
                            <span className="font-sans text-[9px] tracking-zissou text-lucas-orange uppercase border border-lucas-orange/30 px-2 py-1">
                                The Flagship
                            </span>
                        </div>
                        <h3 className="font-serif text-3xl italic mb-8 text-lucas-cream">
                            The Analog
                        </h3>
                        <ul className="flex flex-col gap-4 font-sans text-xs uppercase tracking-widest flex-grow">
                            <li className="flex items-start gap-3">
                                <span className="text-lucas-orange mt-0.5">+</span> 
                                <span>Everything in Vol. 01</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-lucas-orange mt-0.5">+</span> 
                                <span>3-minute Super 8mm film <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal">(authentic kodak film)</span></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-lucas-orange mt-0.5">+</span> 
                                <span>Next day teaser edit</span>
                            </li>
                        </ul>
                    </div>

                    {/* VOL 03 */}
                    <div className="p-10 flex flex-col hover:bg-[#E5E0D5]/30 transition-colors duration-slow">
                        <div className="flex justify-between items-start mb-12">
                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">Vol. 03</p>
                        </div>
                        <h3 className="font-serif text-3xl text-lucas-navy italic mb-8">
                            The Weekend
                        </h3>
                        <ul className="flex flex-col gap-4 font-sans text-xs uppercase tracking-widest text-lucas-navy flex-grow">
                            <li className="flex items-start gap-3">
                                <span className="text-lucas-slate mt-0.5">+</span> 
                                <span>Everything in Vol. 02</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-lucas-slate mt-0.5">+</span> 
                                <span>Welcome party coverage</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-lucas-slate mt-0.5">+</span> 
                                <span>Exclusive studio focus <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal">(only wedding booked that weekend)</span></span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* 04. The Investment Footer */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center py-12 px-6"
                >
                    <span className="w-2 h-2 rounded-full bg-lucas-orange mb-6"></span>
                    <h2 className="font-sans text-2xl md:text-4xl uppercase tracking-tight font-bold text-lucas-navy mb-4">
                        Commissions begin at $5,800
                    </h2>
                    <p className="font-serif text-lg md:text-xl text-lucas-slate mb-10 max-w-xl italic">
                        the complete studio inventory—including destination logistics and a la carte additions—is shared upon inquiry.
                    </p>
                    <Link 
                        href="/inquire" 
                        className="group relative inline-flex items-center justify-center px-10 py-4 font-sans text-xs tracking-zissou uppercase text-lucas-navy border border-lucas-navy hover:bg-lucas-navy hover:text-lucas-cream transition-all duration-slow"
                    >
                        <span>Inquire</span>
                    </Link>
                </motion.div>

            </div>
        </main>
    );
}
