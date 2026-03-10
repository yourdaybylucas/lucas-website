"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// The Fade Configurations
const fadeUpContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

// Mock Inventory Data (Replace with your CMS later)
const journalEntries = [
    {
        id: "042",
        slug: "kristen-frankie-spencers",
        title: "kristen & frankie",
        location: "Spencer's at the Waterfront",
        date: "Oct. 12, 2025",
        format: "Digital + Super 8mm",
        excerpt: "the rain held off just long enough. a study in quiet moments, heavy tears, and a timeline that we eventually just threw out the window.",
        image: "/images/about/about_3.jpg", // Using existing image for placeholder
        featured: true,
    },
    {
        id: "041",
        slug: "melanie-kevin-graydon",
        title: "melanie & kevin",
        location: "Graydon Hall Manor",
        date: "Sep. 28, 2025",
        format: "Digital",
        excerpt: "european architecture dropped into the heart of the city. the clear tent reception felt like a greenhouse as the evening set in.",
        image: "/images/about/about_5.jpg",
        featured: false,
    },
    {
        id: "040",
        slug: "olivia-max-paletta",
        title: "olivia & max",
        location: "Paletta Mansion",
        date: "Sep. 14, 2025",
        format: "Hybrid + Physical",
        excerpt: "lake winds and untamed energy. we spent most of the afternoon wandering the estate grounds letting the dresses blow out.",
        image: "/images/about/about_6.jpg",
        featured: false,
    },
    {
        id: "039",
        slug: "the-analog-process",
        title: "why super 8mm?",
        location: "The Studio",
        date: "Aug. 02, 2025",
        format: "Editorial / Notes",
        excerpt: "thoughts on why the imperfections, light leaks, and raw grain of true kodak film stock will always carry more weight than a digital sensor.",
        image: "/images/about/about_2.jpg",
        featured: false,
    }
];

export default function JournalPage() {
    return (
        <main className="min-h-screen bg-lucas-cream pt-32 pb-32 px-6 lg:px-12 overflow-hidden relative">
            
            {/* Global Texture */}
            <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* 01. The Header (Ledger Style) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b border-lucas-navy/20 pb-8 gap-8"
                >
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-2 h-2 bg-lucas-orange rounded-none"></span>
                            <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                                [ The Archive ]
                            </span>
                        </div>
                        <h1 className="font-sans text-5xl md:text-7xl font-bold uppercase tracking-tight text-lucas-navy leading-none">
                            Field Notes
                        </h1>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end text-left md:text-right gap-2">
                        <p className="font-serif italic text-xl md:text-2xl text-lucas-navy/80 lowercase">
                            observations, films, and quiet moments.
                        </p>
                        <p className="font-sans text-[9px] tracking-widest uppercase text-lucas-slate">
                            Document Ref // LC-JRNL-01
                        </p>
                    </div>
                </motion.div>

                {/* 02. The Inventory Grid */}
                <motion.div 
                    variants={fadeUpContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-lucas-navy/15 bg-lucas-cream shadow-2xl"
                >
                    {journalEntries.map((post, idx) => (
                        <motion.article 
                            key={post.id}
                            variants={fadeUpItem}
                            className={`group relative flex flex-col border-r border-b border-lucas-navy/15 bg-lucas-cream hover:bg-[#EAE4D3] transition-colors duration-700 overflow-hidden ${post.featured ? 'md:col-span-2 md:flex-row' : ''}`}
                        >
                            {/* Top Orange Interaction Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-lucas-orange transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30"></div>

                            {/* Image Compartment */}
                            <Link href={`/journal/${post.slug}`} className={`relative bg-lucas-navy/5 overflow-hidden block ${post.featured ? 'w-full md:w-3/5 aspect-[4/3] md:aspect-auto md:min-h-[500px]' : 'w-full aspect-[4/3] md:aspect-[4/3]'}`}>
                                <Image 
                                    src={post.image} 
                                    alt={post.title}
                                    fill
                                    className="object-cover grayscale-[30%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out z-0"
                                />
                                
                                {/* Structural Viewfinder Overlay */}
                                <div className="absolute inset-0 pointer-events-none z-10 p-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-lucas-cream/70"></div>
                                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-lucas-cream/70"></div>
                                </div>

                                {/* Hover Badge */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none bg-lucas-navy/10 backdrop-blur-[2px]">
                                    <span className="bg-lucas-cream text-lucas-navy font-sans text-[10px] tracking-zissou uppercase px-6 py-3 border border-lucas-navy/10 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        View Record
                                    </span>
                                </div>
                            </Link>

                            {/* Data Compartment */}
                            <div className={`flex flex-col flex-grow justify-between p-6 md:p-8 lg:p-10 ${post.featured ? 'w-full md:w-2/5' : 'w-full'}`}>
                                
                                <div>
                                    {/* Meta Header */}
                                    <div className="flex justify-between items-start mb-8 border-b border-lucas-navy/10 pb-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-sans text-[9px] tracking-zissou text-lucas-orange uppercase font-bold">
                                                {post.date}
                                            </span>
                                            <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                                                [ {post.location} ]
                                            </span>
                                        </div>
                                        <span className="font-sans text-[9px] tracking-widest text-lucas-navy/50 uppercase border border-lucas-navy/10 px-2 py-1">
                                            Fig. {post.id}
                                        </span>
                                    </div>

                                    {/* Title (The Soul) */}
                                    <Link href={`/journal/${post.slug}`}>
                                        <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] text-lucas-navy italic lowercase leading-[1.1] mb-6 group-hover:text-lucas-orange transition-colors duration-500">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    {/* Narrative Excerpt */}
                                    <p className="font-serif text-lg text-lucas-navy/80 leading-relaxed lowercase">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Bottom Anchor */}
                                <div className="mt-12 flex items-center justify-between pt-4 border-t border-lucas-navy/10">
                                    <div className="flex items-center gap-3">
                                        <span className="font-sans text-[8px] tracking-widest uppercase text-lucas-slate">Format //</span>
                                        <span className="font-sans text-[9px] tracking-widest uppercase text-lucas-navy">{post.format}</span>
                                    </div>
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
