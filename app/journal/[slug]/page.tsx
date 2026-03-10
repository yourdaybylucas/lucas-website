"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// eventually, we will pull this from a central data file or CMS. 
// for now, we mock the specific post data.
import { use } from "react";

export default function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
    // next.js 15 requires unwrapping the params promise
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    // mock data fetch based on slug
    const post = {
        id: "042",
        title: "kristen & frankie",
        location: "Spencer's at the Waterfront",
        date: "Oct. 12, 2025",
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 500T",
        videoId: "q2Qw5G4M0Lc",
        fieldNotes: [
            "the rain held off just long enough. a study in quiet moments, heavy tears, and a timeline that we eventually just threw out the window.",
            "they entirely abandoned the traditional shot list. instead, we spent the afternoon just wandering the grounds, letting the lake winds dictate the movement of the dresses and the hair. it felt unforced, grounded, and entirely like them.",
            "the super 8mm frames from the evening reception are some of my favourites. the raw grain handles the low light of the glass pavilion beautifully."
        ]
    };

    return (
        <main className="min-h-screen bg-lucas-cream pt-32 pb-32 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                
                {/* 01. The Navigation / Back Anchor */}
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

                {/* 02. The Header Ledger */}
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
                        <h1 className="font-serif text-[clamp(3rem,5vw,5rem)] text-lucas-navy italic lowercase leading-none">
                            {post.title}
                        </h1>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2 font-sans text-[10px] tracking-zissou uppercase text-lucas-navy">
                        <span className="text-lucas-orange">{post.date}</span>
                        <span>{post.location}</span>
                    </div>
                </motion.div>

                {/* 03. The Main Screen (Video Embed) */}
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

                {/* 04. The Data & Field Notes */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Left Column: Tech Specs */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="md:col-span-4 flex flex-col gap-6 font-sans text-[10px] tracking-widest uppercase border-t md:border-t-0 md:border-l border-lucas-navy/20 pt-8 md:pt-0 md:pl-8"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-lucas-slate">Format //</span>
                            <span className="text-lucas-navy">{post.format}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-lucas-slate">Film Stock //</span>
                            <span className="text-lucas-navy">{post.stock}</span>
                        </div>
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
                        
                        <div className="flex flex-col gap-6 font-serif text-[clamp(1.125rem,1.5vw,1.25rem)] text-lucas-navy/90 leading-[1.8] lowercase">
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
