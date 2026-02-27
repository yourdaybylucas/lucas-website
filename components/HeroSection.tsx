"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// We are pulling in the YouTube IDs you already use in page.tsx 
// so you have instant, high-quality imagery without uploading new files today.
const clipData = [
    { id: "01", videoId: "q2Qw5G4M0Lc", top: "15%", left: "8%", rotate: -4, delay: 0.2, parallax: -1 },
    { id: "02", videoId: "GHhmsEs_8x8", top: "20%", left: "75%", rotate: 3, delay: 0.4, parallax: 1.5 },
    { id: "03", videoId: "kXRULOzL9AQ", top: "55%", left: "12%", rotate: -2, delay: 0.3, parallax: -1.2 },
    { id: "04", videoId: "f3L54oek57o", top: "65%", left: "78%", rotate: 5, delay: 0.6, parallax: 1 },
    // Reusing some IDs for the remaining clips, or you can swap these later
    { id: "05", videoId: "q2Qw5G4M0Lc", top: "45%", left: "5%", rotate: -8, delay: 0.5, parallax: -0.8 },
    { id: "06", videoId: "GHhmsEs_8x8", top: "50%", left: "85%", rotate: 6, delay: 0.7, parallax: 1.3 },
    { id: "07", videoId: "kXRULOzL9AQ", top: "5%", left: "45%", rotate: 2, delay: 0.8, parallax: -0.5 },
];

const FloatingClip = ({ data, mouseX, mouseY, constraintsRef }: any) => {
    return (
        <motion.div
            drag
            dragConstraints={constraintsRef}
            whileHover={{ scale: 1.05, zIndex: 50, cursor: "grab" }}
            whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 100 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: mouseY * data.parallax,
                x: mouseX * data.parallax,
                rotate: data.rotate
            }}
            transition={{
                opacity: { duration: 1, delay: data.delay },
                y: { type: "spring", stiffness: 50, damping: 20 },
                x: { type: "spring", stiffness: 50, damping: 20 },
                // Smooth out the layout transitions when dragging ends
                layout: { duration: 0.3 }
            }}
            className="absolute bg-lucas-cream flex flex-col p-2 pb-6 border border-lucas-slate/20 shadow-xl overflow-hidden"
            style={{ 
                top: data.top, 
                left: data.left, 
                width: 'clamp(140px, 18vw, 240px)', 
                aspectRatio: '4/5' 
            }}
        >
            {/* The Image/Thumbnail */}
            <div className="relative w-full h-full bg-lucas-navy/10 overflow-hidden mb-2">
                <Image
                    src={`https://img.youtube.com/vi/${data.videoId}/maxresdefault.jpg`}
                    alt={`Archive Clip ${data.id}`}
                    fill
                    sizes="(max-width: 768px) 140px, 240px"
                    className="object-cover opacity-90 grayscale-[20%] contrast-125 mix-blend-multiply pointer-events-none"
                />
                {/* Subtle grain overlay to match the Super 8mm analog vibe */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.25] mix-blend-overlay pointer-events-none"></div>
            </div>
            
            {/* The Label */}
            <span className="font-sans text-[9px] uppercase tracking-zissou text-lucas-slate text-center pointer-events-none">
                CLIP_{data.id}
            </span>
        </motion.div>
    );
};

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const constraintsRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section ref={constraintsRef} className="relative w-full h-screen bg-lucas-cream overflow-hidden flex flex-col items-center justify-center">

            {/* Background Scattered Clips (z-10) */}
            <div className="absolute inset-0 z-10">
                {clipData.map((clip) => (
                    <FloatingClip 
                        key={clip.id} 
                        data={clip} 
                        mouseX={mousePosition.x} 
                        mouseY={mousePosition.y} 
                        constraintsRef={constraintsRef}
                    />
                ))}
            </div>

{/* Main Hero Content (z-20) */}
            <div className="relative z-20 text-center flex flex-col items-center mt-12 pointer-events-none">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate mb-12"
                >
                    Ontario // Worldwide
                </motion.p>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center justify-center"
                >
                    {/* The Fix: Hushed the bold text into a quiet, elegant kicker */}
                    <span className="font-sans font-medium text-sm md:text-base text-lucas-navy/70 uppercase tracking-[0.4em] mb-2 pl-3">
                        The Art Of
                    </span>
                    
                    {/* Let the graceful serif take over the visual weight */}
                    <div className="flex items-baseline leading-none">
                        <span className="font-serif italic text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] text-lucas-navy lowercase tracking-tight">
                            noticing
                        </span>
                        <span className="font-serif text-[4.5rem] md:text-[6.5rem] lg:text-[8rem] text-lucas-orange ml-2">
                            .
                        </span>
                    </div>
                </motion.h1>
            </div>
