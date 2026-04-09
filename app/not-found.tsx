// app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-lucas-cream flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Global Texture */}
      <div className="absolute inset-0 bg-grain opacity-[0.15] mix-blend-overlay pointer-events-none z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto"
      >
        {/* 01. The Status Indicator */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full animate-pulse"></span>
          <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase font-bold">
              [ Status // 404 Error ]
          </span>
        </div>
        
        {/* 02. The Headline */}
        <h1 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] uppercase font-bold text-lucas-navy mb-6 tracking-tight leading-[0.9]">
          Record Not Found.
        </h1>
        
        {/* 03. The Narrative */}
        <p className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] italic text-lucas-navy/85 lowercase mb-12 leading-relaxed">
          the page you are looking for has been moved, or simply doesn't exist in the current ledger.
        </p>
        
        {/* 04. The Action */}
        <Link 
          href="/" 
          className="group relative inline-flex items-center justify-center px-12 py-5 font-sans text-[10px] tracking-zissou uppercase text-lucas-navy border border-lucas-navy overflow-hidden bg-lucas-cream"
        >
          <span className="absolute inset-0 w-full h-full bg-lucas-navy transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
          <span className="relative z-10 group-hover:text-lucas-cream transition-colors duration-500 delay-100 flex items-center gap-3">
              Return To Home
              <span className="text-lucas-slate group-hover:text-lucas-cream/70 transition-colors">→</span>
          </span>
        </Link>
      </motion.div>
      
      {/* Decorative Structural Framing */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-lucas-slate/30 hidden md:block"></div>
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-lucas-slate/30 hidden md:block"></div>
    </main>
  );
}
