// app/thank-you/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-lucas-cream flex flex-col items-center justify-center py-32 px-6 relative overflow-hidden">
            
            {/* Global Texture */}
            <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-0"></div>

            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center text-center"
            >
                {/* 01. The Header Status */}
                <motion.div variants={fadeUp} className="flex flex-col items-center mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full animate-pulse"></span>
                        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase font-bold">
                            [ Status // Delivered ]
                        </span>
                    </div>
                    
                    <h1 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase tracking-tight text-lucas-navy leading-[0.9] mb-8">
                        Thank you.
                    </h1>
                    
                    {/* The Soul (Copy) */}
                    <p className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] text-lucas-navy/85 italic lowercase leading-relaxed max-w-xl mx-auto">
                        i've received your details. i'll review the calendar and reach out shortly to talk about the day. 
                    </p>
                </motion.div>

                {/* 02. The Theater (Structural Video Box) */}
                <motion.div variants={fadeUp} className="w-full relative mt-8 mb-16">
                    {/* Architectural framing */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-lucas-slate/30 z-20 pointer-events-none"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-lucas-slate/30 z-20 pointer-events-none"></div>

                    <div className="w-full aspect-video bg-[#0a1118] p-2 md:p-3 shadow-2xl relative group border border-lucas-slate/20 z-10">
                        <div className="relative w-full h-full bg-lucas-navy/10 overflow-hidden">
                            {/* Note: Swap 'GHhmsEs_8x8' with your actual welcome video YouTube ID when ready */}
                            <iframe
                                src={`https://www.youtube.com/embed/GHhmsEs_8x8?autoplay=0&color=white&rel=0&modestbranding=1&playsinline=1`}
                                title="A quick hello"
                                className="w-full h-full absolute top-0 left-0 border-none grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Structural Tag */}
                        <div className="absolute -bottom-3 left-6 bg-lucas-cream border border-lucas-slate/20 px-3 py-1 font-sans text-[8px] tracking-zissou uppercase text-lucas-slate z-30 shadow-sm">
                            [ A quick hello ]
                        </div>
                    </div>
                </motion.div>

                {/* 03. The Anchor (CTA) */}
                <motion.div variants={fadeUp} className="flex flex-col items-center">
                    <p className="font-serif text-lg text-lucas-slate italic lowercase mb-8">
                        in the meantime, feel free to get lost in the archive.
                    </p>

                    <Link 
                        href="/journal" 
                        className="group relative inline-flex items-center justify-center px-12 py-5 font-sans text-[10px] tracking-zissou uppercase text-lucas-navy border border-lucas-navy overflow-hidden bg-lucas-cream"
                    >
                        <span className="absolute inset-0 w-full h-full bg-lucas-navy transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                        <span className="relative z-10 group-hover:text-lucas-cream transition-colors duration-500 delay-100 flex items-center gap-3">
                            Explore The Archive
                            <span className="text-lucas-slate group-hover:text-lucas-cream/70 transition-colors">→</span>
                        </span>
                    </Link>
                </motion.div>

            </motion.div>
        </main>
    );
}
