// app/journal/[slug]/journal-post-client.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { JournalEntry } from "@/data/journal";

export default function JournalPostClient({ post }: { post: JournalEntry }) {
    return (
        <main className="min-h-screen bg-lucas-cream pt-32 pb-32 px-6 lg:px-12 relative overflow-hidden">
            
            <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Link href="/journal" className="inline-flex items-center gap-3 text-lucas-slate hover:text-lucas-orange transition-colors duration-300 group">
                        <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="font-sans text-[10px] tracking-zissou uppercase">
                            [ Return to Archive ]
                        </span>
                    </Link>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-lucas-navy/20 pb-8 mb-12 gap-8"
                >
                    <div className="flex flex-col">
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-4">
                            Record // {post.id}
                        </span>
                        <h1 className="font-serif text-[clamp(3rem,5vw,5rem)] text-lucas-navy italic lowercase leading-[1.1] md:leading-none max-w-2xl">
                            {post.title}
                        </h1>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2 font-sans text-[10px] tracking-zissou uppercase text-lucas-navy">
                        <span className="text-lucas-orange">{post.date}</span>
                        <span>{post.location}</span>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full aspect-video bg-[#0a1118] shadow-2xl mb-16 lg:mb-24 border border-lucas-navy/10 relative z-10"
                >
                    <iframe
                        src={`https://www.youtube.com/embed/${post.videoId}?autoplay=0&color=white&rel=0&modestbranding=1&playsinline=1`}
                        title={post.title}
                        className="w-full h-full absolute top-0 left-0 border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Left Column: Tech Specs & Vendors */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="md:col-span-4 flex flex-col border-t md:border-t-0 md:border-l border-lucas-navy/20 pt-8 md:pt-0 md:pl-8"
                    >
                        {/* Specs */}
                        <div className="flex flex-col gap-6 font-sans text-[10px] tracking-widest uppercase mb-12">
                            <div className="flex flex-col gap-1">
                                <span className="text-lucas-slate">Format //</span>
                                <span className="text-lucas-navy">{post.format}</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-lucas-slate">Film Stock //</span>
                                <span className="text-lucas-navy">{post.stock}</span>
                            </div>
                        </div>

                        {/* Vendors Ledger */}
                        {post.vendors && post.vendors.length > 0 && (
                            <div className="flex flex-col border-t border-lucas-navy/10 pt-8">
                                <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mb-6">
                                    [ The Team ]
                                </span>
                                <ul className="flex flex-col gap-4 font-sans text-[10px] uppercase tracking-widest text-lucas-navy">
                                    {post.vendors.map((vendor, idx) => (
                                        <li key={idx} className="flex flex-col gap-0.5 group">
                                            <span className="text-lucas-slate/70 text-[8px]">{vendor.role}</span>
                                            <a 
                                                href={vendor.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 hover:text-lucas-orange transition-colors duration-300"
                                            >
                                                {vendor.name}
                                                <ArrowUpRight size={10} className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>

                    {/* Right Column: The Story */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="md:col-span-8"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full"></span>
                            <h3 className="font-sans text-[10px] tracking-zissou uppercase text-lucas-navy font-bold">
                                Field Notes
                            </h3>
                        </div>
                        
                        <div className="flex flex-col gap-6 font-serif text-[clamp(1.125rem,1.5vw,1.35rem)] text-lucas-navy/90 leading-[1.8] lowercase">
                            {post.fieldNotes.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
