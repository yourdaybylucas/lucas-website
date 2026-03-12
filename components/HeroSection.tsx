"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// 9 clips total. 5 visible on mobile, all 9 visible on desktop.
// Mapped safely to clips 01-07 to prevent blank boxes.
const clipData = [
    // 01. Top Left (Visible Mobile & Desktop)
    { id: "01", src: "/videos/clip_01.mp4", tailwind: "top-[12%] left-[5%] md:top-[12%] md:left-[10%]", rotate: -6, delay: 0.2, parallax: -1 },
    
    // 02. Top Right (Visible Mobile & Desktop)
    { id: "02", src: "/videos/clip_09.mp4", tailwind: "top-[15%] right-[3%] md:top-[16%] md:left-[78%] md:right-auto", rotate: 4, delay: 0.4, parallax: 1.2 },
    
    // 03. Hidden on Mobile
    { id: "07", src: "/videos/clip_02.mp4", tailwind: "hidden md:flex md:top-[15%] md:left-[20%]", rotate: 2, delay: 0.8, parallax: 0.5 },
    
    // 04. Hidden on Mobile
    { id: "05", src: "/videos/clip_04.mp4", tailwind: "hidden md:flex md:top-[42%] md:left-[6%]", rotate: -8, delay: 0.5, parallax: -0.8 },
    
    // 05. Hidden on Mobile
    { id: "03", src: "/videos/clip_03.mp4", tailwind: "hidden md:flex md:top-[55%] md:left-[13%]", rotate: 3, delay: 0.3, parallax: -1.2 },
    
    // 06. Mid-Bottom Left (Visible Mobile & Desktop)
    { id: "06", src: "/videos/clip_06.mp4", tailwind: "top-[65%] left-[11%] md:top-[66%] md:left-[7%]", rotate: -4, delay: 0.9, parallax: 0.6 },
    
    // 07. Hidden on Mobile
    { id: "08", src: "/videos/clip_05.mp4", tailwind: "hidden md:flex md:top-[45%] md:left-[82%]", rotate: 6, delay: 0.7, parallax: 1.3 },
    
    // 08. Mid-Bottom Right (Visible Mobile & Desktop)
    { id: "04", src: "/videos/clip_07.mp4", tailwind: "top-[72%] right-[2%] md:top-[58%] md:left-[75%] md:right-auto", rotate: -5, delay: 0.6, parallax: 1 },
    
    // 09. Bottom Center (Visible Mobile & Desktop)
    { id: "09", src: "/videos/clip_08.mp4", tailwind: "top-[74%] left-[28%] md:top-[68%] md:left-[85%] md:right-auto", rotate: 4, delay: 1.0, parallax: -0.7 },
];

const FloatingClip = ({ data, mouseX, mouseY }: any) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, zIndex: 50 }} 
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
            className={`absolute bg-[#EAE4D3] flex-col p-2 pb-6 md:p-2.5 md:pb-7 border border-lucas-slate/20 shadow-xl overflow-hidden ${data.tailwind}`}
            style={{ 
                // Scaled down the mobile minimum from 130px to 100px so it breathes perfectly
                width: 'clamp(100px, 24vw, 260px)' 
            }}
        >
            {/* The Video Container - Locked exactly to 4:3 */}
            <div className="relative w-full aspect-[4/3] bg-lucas-navy/10 overflow-hidden mb-2 md:mb-3 pointer-events-none">
                <video
                    src={data.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-90 grayscale-[20%] contrast-[1.1] mix-blend-multiply"
                />
                {/* Subtle grain overlay */}
                <div className="absolute inset-0 bg-grain opacity-[0.25] mix-blend-overlay"></div>
            </div>
            
            {/* The Label */}
            <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-zissou text-lucas-slate text-center pointer-events-none">
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
        <section className="relative w-full h-[100dvh] bg-lucas-cream overflow-hidden flex flex-col items-center justify-center">

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
            <div className="relative z-20 text-center flex flex-col items-center pointer-events-none">
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
        </section>
    );
}
