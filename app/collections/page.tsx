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
            
            <div className="w-full max-w-6xl mx-auto">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center mb-24"
                >
                    <h2 className="font-sans text-[10px] tracking-zissou text-lucas-orange uppercase mb-6">
                        Transparent & Simple
                    </h2>
                    <h1 className="font-sans text-5xl md:text-7xl font-bold uppercase tracking-tight text-lucas-navy leading-none mb-8">
                        Commissions
                    </h1>
                    <p className="font-serif text-2xl md:text-3xl text-lucas-slate max-w-2xl mx-auto italic">
                        No hourly clocks. Just you, me, and the day.
                    </p>
                </motion.div>

                {/* The Baseline (What's Included) */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="border-y border-lucas-navy/10 py-12 mb-24 grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    <motion.div variants={fadeUpItem} className="md:col-span-1">
                        <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy font-bold">
                            The Baseline
                        </h3>
                        <p className="font-serif text-lg text-lucas-slate italic mt-2">
                            Included in every collection.
                        </p>
                    </motion.div>
                    
                    <motion.div variants={fadeUpItem} className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="w-2 h-2 rounded-full bg-lucas-orange mb-2"></span>
                            <h4 className="font-sans text-sm uppercase tracking-widest text-lucas-navy">Unlimited Coverage</h4>
                            <p className="font-serif text-base text-lucas-slate">From getting ready until the lights come up.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="w-2 h-2 rounded-full bg-lucas-orange mb-2"></span>
                            <h4 className="font-sans text-sm uppercase tracking-widest text-lucas-navy">Aerial Perspectives</h4>
                            <p className="font-serif text-base text-lucas-slate">Drone documentation (where permitted).</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="w-2 h-2 rounded-full bg-lucas-orange mb-2"></span>
                            <h4 className="font-sans text-sm uppercase tracking-widest text-lucas-navy">Digital Archive</h4>
                            <p className="font-serif text-base text-lucas-slate">Curated online delivery of all final films.</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* The Tiers */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32"
                >
                    {/* VOL 01 */}
                    <motion.div variants={fadeUpItem} className="border border-lucas-navy/10 p-8 md:p-12 flex flex-col hover:border-lucas-orange transition-colors duration-500 bg-[#E5E0D5]/30">
                        <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-4">Vol. 01</p>
                        <h3 className="font-serif text-4xl text-lucas-navy italic mb-8 pb-8 border-b border-lucas-navy/10">
                            The Essential
                        </h3>
                        <ul className="flex flex-col gap-6 font-sans text-sm uppercase tracking-wider text-lucas-navy flex-grow">
                            <li>+ 5-minute highlight film</li>
                            <li>+ Documentary ceremony edit</li>
                            <li>+ Documentary reception edit <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal">(speeches & first dances)</span></li>
                        </ul>
                    </motion.div>

                    {/* VOL 02 */}
                    <motion.div variants={fadeUpItem} className="border border-lucas-navy p-8 md:p-12 flex flex-col relative bg-lucas-navy text-lucas-cream shadow-2xl scale-[1.02] z-10">
                        <div className="absolute top-0 right-0 bg-lucas-orange text-lucas-cream font-sans text-[10px] tracking-zissou uppercase px-4 py-2 m-6">
                            The Flagship
                        </div>
                        <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-4">Vol. 02</p>
                        <h3 className="font-serif text-4xl italic mb-8 pb-8 border-b border-lucas-slate/20">
                            The Analog
                        </h3>
                        <ul className="flex flex-col gap-6 font-sans text-sm uppercase tracking-wider flex-grow">
                            <li>+ Everything in Vol. 01</li>
                            <li>+ 3-minute Super 8mm film <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal">(authentic kodak film)</span></li>
                            <li>+ Next day teaser edit</li>
                        </ul>
                    </motion.div>

                    {/* VOL 03 */}
                    <motion.div variants={fadeUpItem} className="border border-lucas-navy/10 p-8 md:p-12 flex flex-col hover:border-lucas-orange transition-colors duration-500 bg-[#E5E0D5]/30">
                        <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-4">Vol. 03</p>
                        <h3 className="font-serif text-4xl text-lucas-navy italic mb-8 pb-8 border-b border-lucas-navy/10">
                            The Weekend
                        </h3>
                        <ul className="flex flex-col gap-6 font-sans text-sm uppercase tracking-wider text-lucas-navy flex-grow">
                            <li>+ Everything in Vol. 02</li>
                            <li>+ Welcome party coverage</li>
                            <li>+ Exclusive studio focus <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal">(only wedding booked that weekend)</span></li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* The Investment Footer */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center bg-lucas-navy text-lucas-cream py-24 px-6 rounded-sm"
                >
                    <span className="w-3 h-3 rounded-full bg-lucas-orange mb-8"></span>
                    <h2 className="font-sans text-3xl md:text-5xl uppercase tracking-tight font-bold mb-6">
                        Commissions begin at $6,000
                    </h2>
                    <p className="font-serif text-xl md:text-2xl text-lucas-slate mb-12 max-w-xl italic">
                        for the full dossier including destination travel parameters and a la carte additions, please reach out directly.
                    </p>
                    <Link 
                        href="/#contact" 
                        className="inline-block bg-lucas-orange text-lucas-cream px-12 py-5 font-sans text-xs tracking-zissou uppercase hover:bg-white hover:text-lucas-navy transition-colors duration-500"
                    >
                        Request The Guide
                    </Link>
                </motion.div>

            </div>
        </main>
    );
}
