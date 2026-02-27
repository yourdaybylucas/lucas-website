"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// 9 clips total to perfectly frame the center text on desktop.
// Clips 08 and 09 reuse video files to keep the payload at exactly 9.5mb.
const clipData = [
    { id: "01", src: "/videos/clip_01.mp4", top: "12%", left: "6%", rotate: -4, delay: 0.2, parallax: -1 },
    { id: "02", src: "/videos/clip_02.mp4", top: "18%", left: "76%", rotate: 3, delay: 0.4, parallax: 1.5 },
    { id: "03", src: "/videos/clip_03.mp4", top: "58%", left: "10%", rotate: -2, delay: 0.3, parallax: -1.2 },
    { id: "04", src: "/videos/clip_04.mp4", top: "68%", left: "78%", rotate: 5, delay: 0.6, parallax: 1 },
    { id: "05", src: "/videos/clip_05.mp4", top: "35%", left: "20%", rotate: -7, delay: 0.5, parallax: -0.8 },
    { id: "06", src: "/videos/clip_06.mp4", top: "45%", left: "65%", rotate: 6, delay: 0.7, parallax: 1.3 },
    { id: "07", src: "/videos/clip_07.mp4", top: "8%", left: "45%", rotate: 2, delay: 0.8, parallax: -0.5 },
    { id: "08", src: "/videos/clip_01.mp4", top: "82%", left: "32%", rotate: -3, delay: 0.9, parallax: 0.6 },
    { id: "09", src: "/videos/clip_02.mp4", top: "85%", left: "58%", rotate: 4, delay: 1.0, parallax: -0.7 },
];

const FloatingClip = ({ data, mouseX, mouseY, constraintsRef }: any) => {
    return (
        <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1} // Makes the drag feel heavier and more physical
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
                // Removed the "layout" transition which was causing the drag glitch
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
