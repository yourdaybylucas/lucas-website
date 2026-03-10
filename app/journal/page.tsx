"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journalEntries } from "@/data/journal";

const fadeUpContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
};

export default function JournalPage() {
    return (
        <main className="min-h-screen bg-lucas-cream pt-32 pb-32 px-6 lg:px-12 overflow-hidden relative">
            
            {/* Global Texture */}
            <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* 01. The Header (Compressed Ledger Style) */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex justify-between items-end border-b-2 border-lucas-navy pb-4 mb-12 md:mb-16"
                >
                    <div className="flex items-center gap-4 font-sans text-[10px] md:text-xs tracking-zissou uppercase text-lucas-navy font-bold">
                        <span className="w-2 h-2 bg-lucas-orange flex-shrink-0 animate-pulse"></span>
                        <span>[ The Archive ]</span>
                    </div>
                    
                    <div className="flex flex-col items-end text-right font-sans text-[8px] md:text-[9px] tracking-widest uppercase text-lucas-slate">
                        <span>Doc Ref // LC-JRNL-01</span>
                        <span className="mt-1">Inventory Count: {journalEntries.length}</span>
                    </div>
                </motion.div>

                {/* 02. The High-End Gallery Grid */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-lucas-navy/15 bg-lucas-slate shadow-2xl"
                >
                    {journalEntries.map((post) => (
                        <motion.article 
                            key={post.id}
                            variants={fadeUpItem}
                            className="group relative flex flex-col border-r border-b border-lucas-navy/15 bg-lucas-cream hover:bg-[#EAE4D3] transition-colors duration-700 p-6 md:p-8 lg:p-10 overflow-hidden"
                        >
                            {/* Top Orange Interaction Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-lucas-orange transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30"></div>

                            {/* The Film Slide (YouTube Thumbnail Hero) */}
                            <Link href={`/journal/${post.slug}`} className="relative w-full aspect-video bg-lucas-navy/5 overflow-hidden mb-8 block shadow-md border border-lucas-navy/10">
                                <Image 
                                    src={`https://img.youtube.com/vi/${post.videoId}/maxresdefault.jpg`}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-out z-0"
                                />
                                
                                {/* Structural Viewfinder Overlay */}
                                <div className="absolute inset-0 pointer-events-none z-10 p-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-lucas-cream/70"></div>
                                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-lucas-cream/70"></div>
                                </div>

                                {/* Hover Badge */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none bg-lucas-navy/10 backdrop-blur-[2px]">
                                    <span className="bg-lucas-cream text-lucas-navy font-sans text-[10px] tracking-zissou uppercase px-6 py-3 border border-lucas-navy/10 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        View Record
                                    </span>
                                </div>
                            </Link>

                            {/* The Museum Label (Data Compartment) */}
                            <div className="flex flex-col flex-grow justify-between">
                                <div>
                                    {/* The Soul (Title) & Fig Marker */}
                                    <div className="flex justify-between items-start mb-6">
                                        <Link href={`/journal/${post.slug}`}>
                                            <h2 className="font-serif text-[clamp(1.75rem,2vw,2.5rem)] text-lucas-navy italic lowercase leading-[1.1] group-hover:text-lucas-orange transition-colors duration-500 pr-4">
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <span className="font-sans text-[8px] tracking-widest text-lucas-slate uppercase border border-lucas-navy/10 px-2 py-1 bg-lucas-navy/5 shrink-0 mt-1">
                                            Fig. {post.id}
                                        </span>
                                    </div>

                                    {/* The Structure ("Small Letters" Metadata Ledger) */}
                                    <div className="flex flex-col gap-3 font-sans text-[9px] md:text-[10px] tracking-zissou uppercase text-lucas-slate border-t border-lucas-navy/10 pt-5 mb-6">
                                        <div className="flex justify-between items-start">
                                            <span className="w-20 shrink-0">Venue //</span>
                                            <span className="text-right text-lucas-navy">{post.location}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <span className="w-20 shrink-0">Date //</span>
                                            <span className="text-right text-lucas-orange">{post.date}</span>
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <span className="w-20 shrink-0">Format //</span>
                                            <span className="text-right text-lucas-navy">{post.format}</span>
                                        </div>
                                    </div>

                                    {/* Narrative Excerpt */}
                                    <p className="font-serif text-base text-lucas-navy/80 leading-relaxed lowercase">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Bottom Anchor */}
                                <div className="mt-10 pt-4 border-t border-lucas-navy/10 flex items-center justify-between">
                                    <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate">
                                        End of entry
                                    </span>
                                    <Link href={`/journal/${post.slug}`} className="text-lucas-slate group-hover:text-lucas-orange transform group-hover:translate-x-1 transition-all duration-300">
                                        <ArrowRight size={16} strokeWidth={1.5} />
                                    </Link>
                                </div>

                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Pagination / End of Line */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center flex flex-col items-center gap-4"
                >
                    <div className="w-px h-12 bg-lucas-orange"></div>
                    <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                        End of Inventory
                    </span>
                </motion.div>

            </div>
        </main>
    );
}
