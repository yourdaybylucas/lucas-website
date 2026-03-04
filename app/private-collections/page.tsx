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

export default function PrivateCollectionsPage() {
    return (
        <main className="min-h-screen bg-lucas-cream flex flex-col items-center pt-[clamp(6rem,15vh,10rem)] pb-[clamp(4rem,10vh,8rem)] px-6 overflow-hidden">
            
            <div className="w-full max-w-6xl mx-auto">
                
                {/* 01. The Grounded Welcome */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex flex-col items-start justify-start mb-[clamp(5rem,10vh,10rem)] relative max-w-4xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full"></span>
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                            [ Client Dossier ]
                        </span>
                    </div>
                    
                    <h1 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tight text-lucas-navy mb-10">
                        Thank you for <br/>reaching out.
                    </h1>

                    <div className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] text-lucas-navy leading-[1.6] space-y-6 lowercase">
                        <p>
                            i don't run a production set, and i don't shoot for the algorithm. my approach is simpler: i'm there to celebrate with you. 
                        </p>
                        <p>
                            i blend in like a friend with a camera—bringing easy energy to the room while keeping a keen eye on the honest frames. the sudden laughs, the heavy tears, the in-between magic. the goal isn't to direct a perfect script; it's to hang out, let the day breathe, and bottle exactly how it all felt.
                        </p>
                        <p className="italic text-lucas-slate pt-4">
                            here is everything you need to know about working together.
                        </p>
                    </div>
                </motion.div>

                {/* 02. The Collections Grid */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-[clamp(5rem,10vh,10rem)]"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-lucas-navy/20 flex-grow"></div>
                        <h2 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy font-bold px-4">
                            The Inventory
                        </h2>
                        <div className="h-px bg-lucas-navy/20 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 border border-lucas-navy/20 divide-y lg:divide-y-0 lg:divide-x divide-lucas-navy/20 relative">
                        
                        {/* VOL 01 */}
                        <motion.div variants={fadeUpItem} className="p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col group hover:bg-[#E5E0D5]/50 transition-colors duration-slow relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-lucas-navy transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <div className="flex justify-between items-start mb-12">
                                <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 01 ]</p>
                                <p className="font-sans text-xs tracking-widest text-lucas-navy">$5,800 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
                            </div>
                            <h3 className="font-serif text-[clamp(2rem,3vw,2.5rem)] text-lucas-navy italic mb-10">
                                The Essential
                            </h3>
                            <ul className="flex flex-col gap-5 font-sans text-[11px] uppercase tracking-widest text-lucas-navy flex-grow">
                                <li className="flex items-start gap-4">
                                    <span className="text-lucas-orange/70 mt-0.5">+</span> 
                                    <span>Unlimited continuous coverage</span>
                                </li>
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

                        {/* VOL 02 */}
                        <motion.div variants={fadeUpItem} className="p-[clamp(1.5rem,3vw,2.5rem)] flex flex-col bg-lucas-navy text-lucas-cream relative z-10 lg:scale-[1.03] shadow-2xl border border-lucas-navy group">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] pointer-events-none mix-blend-overlay"></div>
                            
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ Vol. 02 ]</p>
                                <p className="font-sans text-xs tracking-widest text-lucas-cream">$6,800 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
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
                                <p className="font-sans text-xs tracking-widest text-lucas-navy">$8,200 <span className="text-[9px] text-lucas-slate">+ hst</span></p>
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
                                    <span>Physical Artifacts <br/><span className="text-[10px] text-lucas-slate normal-case font-serif italic tracking-normal mt-1 block">(the physical super 8 roll, printed film frames, & personalized card)</span></span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                {/* 03. Logistics / FAQs (The Ledger) */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-[clamp(4rem,10vh,8rem)]"
                >
                    <div className="flex items-center justify-between border-b border-lucas-navy/20 pb-6 mb-12">
                        <h2 className="font-sans text-2xl md:text-3xl uppercase tracking-tight text-lucas-navy font-bold">
                            Field Notes
                        </h2>
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase hidden md:block">
                            [ Logistics & Parameters ]
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        
                        {/* FAQ 1 */}
                        <div className="flex flex-col">
                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy mb-4 border-l-2 border-lucas-orange pl-3">
                                The Retainer
                            </h3>
                            <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-slate lowercase">
                                to lock in the date, i require a 1/3 retainer upfront. the remaining balance is simply due two weeks before the day.
                            </p>
                        </div>

                        {/* FAQ 2 */}
                        <div className="flex flex-col">
                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy mb-4 border-l-2 border-lucas-orange pl-3">
                                The Geography
                            </h3>
                            <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-slate lowercase">
                                home base is guelph, ontario. miles within the province are entirely on me. there are no hidden travel fees for ontario commissions.
                            </p>
                        </div>

                        {/* FAQ 3 */}
                        <div className="flex flex-col">
                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy mb-4 border-l-2 border-lucas-orange pl-3">
                                The Footprint
                            </h3>
                            <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-slate lowercase">
                                most of the time, no second shooter is needed. i document 95% of my commissions solo. it keeps the day feeling natural and unforced. if you have completely separate getting-ready locations or a highly complex timeline, i'm happy to bring a trusted peer along.
                            </p>
                        </div>

                        {/* FAQ 4 */}
                        <div className="flex flex-col">
                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy mb-4 border-l-2 border-lucas-orange pl-3">
                                The Photographers
                            </h3>
                            <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-slate lowercase">
                                working well with your photographer is a strict priority. we have the exact same goal: collecting the best frames. i stay out of the way, shoot from different angles, and mostly, they won't even notice i'm there.
                            </p>
                        </div>

                        {/* FAQ 5 */}
                        <div className="flex flex-col">
                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy mb-4 border-l-2 border-lucas-orange pl-3">
                                The Delivery
                            </h3>
                            <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-slate lowercase">
                                i prefer to edit while the feeling of the day is still fresh. average turnaround is 5 weeks, but i give myself 10 weeks in the contract just to be safe.
                            </p>
                        </div>

                        {/* FAQ 6 */}
                        <div className="flex flex-col">
                            <h3 className="font-sans text-xs tracking-zissou uppercase text-lucas-navy mb-4 border-l-2 border-lucas-orange pl-3">
                                The Standard
                            </h3>
                            <p className="font-serif text-[1.125rem] leading-relaxed text-lucas-slate lowercase">
                                absolutely inclusive. i am honored to document your connection, regardless of religion, gender, race, or sexual orientation.
                            </p>
                        </div>

                    </div>
                </motion.div>

                {/* 04. The CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center px-6 pt-12 border-t border-lucas-navy/10 relative"
                >
                    <h2 className="font-serif italic text-[clamp(2rem,4vw,3rem)] text-lucas-navy mb-6">
                        let's talk logistics.
                    </h2>
                    
                    <p className="font-sans text-sm text-lucas-slate mb-12 max-w-xl lowercase leading-relaxed">
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

            </div>
        </main>
    );
}
