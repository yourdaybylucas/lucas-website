"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUpContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function CollectionsPage() {
    return (
        <main className="min-h-screen bg-lucas-cream flex flex-col items-center pt-40 pb-32 px-6 overflow-hidden">
            
            <div className="w-full max-w-5xl mx-auto">
                {/* Header - Stripped back, no shouting */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center mb-32"
                >
                    <h2 className="font-sans text-[10px] tracking-zissou text-lucas-orange uppercase mb-8">
                        The Approach
                    </h2>
                    <h1 className="font-serif text-4xl md:text-6xl text-lucas-navy italic max-w-3xl mx-auto leading-tight">
                        No hourly clocks. Just you, me, and the day.
                    </h1>
                </motion.div>

                {/* The Baseline (What's Included) - Now a 4-column grid */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="border-t border-lucas-navy/10 pt-12 mb-32"
                >
                    <div className="mb-12">
                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy font-bold">
                            The Baseline
                        </h3>
                        <p className="font-serif text-lg text-lucas-slate italic mt-2">
                            included in every collection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        <div className="flex flex-col gap-2">
                            <span className="w-2 h-2 rounded-full bg-lucas-orange mb-2"></span>
                            <h4 className="font-sans text-sm uppercase tracking-widest text-lucas-navy">Unlimited Coverage</h4>
                            <p className="font-serif text-base text-lucas-slate">from getting ready until the lights come up.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="w-2 h-2 rounded-full bg-lucas-orange mb-2"></span>
                            <h4 className="font-sans text-sm uppercase tracking-widest text-lucas-navy">Aerial Perspectives</h4>
                            <p className="font-serif text-base text-lucas-slate">drone documentation (where permitted).</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="w-2 h-2 rounded-full bg-lucas-orange mb-2"></span>
                            <h4 className="font-sans text-sm uppercase tracking-widest text-lucas-navy">Provincial Travel</h4>
                            <p className="font-serif text-base text-lucas-slate">miles within ontario are on me.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="w-2 h-2 rounded-full bg-lucas-orange mb-2"></span>
                            <h4 className="font-sans text-sm uppercase tracking-widest text-lucas-navy">Digital Archive</h4>
                            <p className="font-serif text-base text-lucas-slate">curated online delivery of all final films.</p>
                        </div>
                    </div>
                </motion.div>

                {/* The Tiers - Editorial Stack Layout */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col mb-32"
                >
                    {/* VOL 01 */}
                    <motion.div variants={fadeUpItem} className="border-t border-lucas-navy/10 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:bg-[#E5E0D5]/20 transition-colors duration-slow px-4 -mx-4">
                        <div className="w-full md:w-1/3">
                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-4">Vol. 01</p>
                            <h3 className="font-serif text-4xl text-lucas-navy italic">
                                The Essential
                            </h3>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="flex flex-col gap-4 font-sans text-sm uppercase tracking-wider text-lucas-navy">
                                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-lucas-slate rounded-full"></span> 5-minute highlight film</li>
                                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-lucas-slate rounded-full"></span> Documentary ceremony edit</li>
                                <li className="flex items-start gap-3"><span className="w-1 h-1 bg-lucas-slate rounded-full mt-2"></span> 
                                    <span>Documentary reception edit <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal">(speeches & first dances)</span></span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* VOL 02 - The Flagship */}
                    <motion.div variants={fadeUpItem} className="border border-lucas-navy bg-lucas-navy text-lucas-cream py-16 px-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative my-4 shadow-2xl scale-[1.01]">
                        <div className="absolute top-0 right-0 bg-lucas-orange text-lucas-cream font-sans text-[10px] tracking-zissou uppercase px-4 py-2 m-6">
                            The Flagship
                        </div>
                        <div className="w-full md:w-1/3 mt-6 md:mt-0">
                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-4">Vol. 02</p>
                            <h3 className="font-serif text-4xl italic">
                                The Analog
                            </h3>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="flex flex-col gap-4 font-sans text-sm uppercase tracking-wider">
                                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-lucas-orange rounded-full"></span> Everything in Vol. 01</li>
                                <li className="flex items-start gap-3"><span className="w-1 h-1 bg-lucas-orange rounded-full mt-2"></span> 
                                    <span>3-minute Super 8mm film <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal">(authentic kodak film)</span></span>
                                </li>
                                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-lucas-orange rounded-full"></span> Next day teaser edit</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* VOL 03 */}
                    <motion.div variants={fadeUpItem} className="border-b border-lucas-navy/10 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:bg-[#E5E0D5]/20 transition-colors duration-slow px-4 -mx-4">
                        <div className="w-full md:w-1/3">
                            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-4">Vol. 03</p>
                            <h3 className="font-serif text-4xl text-lucas-navy italic">
                                The Weekend
                            </h3>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="flex flex-col gap-4 font-sans text-sm uppercase tracking-wider text-lucas-navy">
                                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-lucas-slate rounded-full"></span> Everything in Vol. 02</li>
                                <li className="flex items-center gap-3"><span className="w-1 h-1 bg-lucas-slate rounded-full"></span> Welcome party coverage</li>
                                <li className="flex items-start gap-3"><span className="w-1 h-1 bg-lucas-slate rounded-full mt-2"></span> 
                                    <span>Exclusive studio focus <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal">(only wedding booked that weekend)</span></span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>

                {/* The Investment Footer */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center py-12 px-6"
                >
                    <span className="w-3 h-3 rounded-full bg-lucas-orange mb-8"></span>
                    <h2 className="font-sans text-3xl md:text-5xl uppercase tracking-tight font-bold text-lucas-navy mb-6">
                        Commissions begin at $5,800
                    </h2>
                    <p className="font-serif text-xl md:text-2xl text-lucas-slate mb-12 max-w-xl italic">
                        for the full dossier including destination travel parameters and a la carte additions, please reach out directly.
                    </p>
                    <Link 
                        href="/inquire" 
                        className="inline-block bg-lucas-navy text-lucas-cream px-12 py-5 font-sans text-xs tracking-zissou uppercase hover:bg-lucas-orange transition-colors duration-slow"
                    >
                        Inquire
                    </Link>
                </motion.div>

            </div>
        </main>
    );
}
