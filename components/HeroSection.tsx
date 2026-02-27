"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// 9 clips total. 
// Re-mapped to form a wide arch, overlapping clusters on the sides, and pulled up from the bottom.
const clipData = [
    // The Arch (Top)
    { id: "01", src: "/videos/clip_01.mp4", top: "12%", left: "10%", rotate: -6, delay: 0.2, parallax: -1 },
    { id: "07", src: "/videos/clip_07.mp4", top: "5%", left: "45%", rotate: 2, delay: 0.8, parallax: 0.5 },
    { id: "02", src: "/videos/clip_02.mp4", top: "16%", left: "78%", rotate: 4, delay: 0.4, parallax: 1.2 },
    
    // Left Cluster (Overlapping)
    { id: "05", src: "/videos/clip_05.mp4", top: "42%", left: "6%", rotate: -8, delay: 0.5, parallax: -0.8 },
    { id: "03", src: "/videos/clip_03.mp4", top: "55%", left: "13%", rotate: 3, delay: 0.3, parallax: -1.2 },
    { id: "08", src: "/videos/clip_01.mp4", top: "66%", left: "7%", rotate: -4, delay: 0.9, parallax: 0.6 },
    
    // Right Cluster (Overlapping)
    { id: "06", src: "/videos/clip_06.mp4", top: "45%", left: "82%", rotate: 6, delay: 0.7, parallax: 1.3 },
    { id: "04", src: "/videos/clip_04.mp4", top: "58%", left: "75%", rotate: -5, delay: 0.6, parallax: 1 },
    { id: "09", src: "/videos/clip_02.mp4", top: "68%", left: "85%", rotate: 4, delay: 1.0, parallax: -0.7 },
];

const FloatingClip = ({ data, mouseX, mouseY }: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, zIndex: 50 }} // Smooth hover lift without the drag
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: mouseY * data.parallax,
                x: mouseX * data.parallax,
                rotate: data.rotate
            }}
            transition={{
                opacity: { duration: 1, delay: data.delay },
                y: { type: "spring", stiffness: 40, damping: 20 },
                x: { type: "spring", stiffness: 40, damping: 20 },
            }}
            className="absolute bg-[#EAE4D3] flex flex-col p-2.5 pb-7 border border-lucas-slate/20 shadow-xl overflow-hidden"
            style={{ 
                top: data.top, 
                left: data.left, 
                width: 'clamp(160px, 18vw, 260px)'
            }}
        >
            {/* The Video Container - Locked exactly to 4:3 */}
            <div className="relative w-full aspect-[4/3] bg-lucas-navy/10 overflow-hidden mb-3 pointer-events-none">
                <video
                    src={data.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-90 grayscale-[20%] contrast-[1.1] mix-blend-multiply"
                />
                {/* Subtle grain overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.25] mix-blend-overlay"></div>
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
        <section className="relative w-full h-screen bg-lucas-cream overflow-hidden flex flex-col items-center justify-center">

            {/* Background Scattered Clips (z-10) */}
            <div className="absolute inset-0 z-10">
                {clipData.map((clip) => (
                    <FloatingClip 
                        key={clip.id} 
                        data={clip} 
                        mouseX={mousePosition.x} 
                        mouseY={mousePosition.y} 
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
                    <span className="font-sans font-medium text-sm md:text-base text-lucas-navy/70 uppercase tracking-[0.4em] mb-2 pl-3">
                        The Art Of
                    </span>
                    
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

            {/* Bottom Left Badge */}
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-lucas-navy rounded-full flex items-center justify-center z-20 pointer-events-none">
                <span className="text-lucas-cream font-sans font-bold text-sm">N'</span>
            </div>
        </section>
    );
}
