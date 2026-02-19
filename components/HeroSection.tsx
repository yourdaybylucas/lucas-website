"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// helper for the floating clip placeholders
const FloatingClip = ({ id, top, left, rotate, delay, parallaxMultiplier, mouseX, mouseY }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
            opacity: 1,
            y: mouseY * parallaxMultiplier,
            x: mouseX * parallaxMultiplier,
            rotate: rotate
        }}
        transition={{
            opacity: { duration: 1, delay: delay },
            y: { type: "spring", stiffness: 50, damping: 20 },
            x: { type: "spring", stiffness: 50, damping: 20 }
        }}
        className="absolute bg-[#E5E0D5] flex items-center justify-center border border-lucas-slate/20 shadow-sm"
        style={{ top, left, width: 'clamp(120px, 15vw, 200px)', aspectRatio: '4/5' }}
    >
        <span className="font-sans text-xs uppercase tracking-zissou text-lucas-slate">
            CLIP_{id}
        </span>
    </motion.div>
);

export default function HeroSection() {
    // subtle mouse parallax state
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

            {/* background scattered clips (z-10) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <FloatingClip id="01" top="15%" left="8%" rotate={-4} delay={0.2} parallaxMultiplier={-1} mouseX={mousePosition.x} mouseY={mousePosition.y} />
                <FloatingClip id="02" top="20%" left="75%" rotate={3} delay={0.4} parallaxMultiplier={1.5} mouseX={mousePosition.x} mouseY={mousePosition.y} />
                <FloatingClip id="03" top="55%" left="12%" rotate={-2} delay={0.3} parallaxMultiplier={-1.2} mouseX={mousePosition.x} mouseY={mousePosition.y} />
                <FloatingClip id="04" top="65%" left="78%" rotate={5} delay={0.6} parallaxMultiplier={1} mouseX={mousePosition.x} mouseY={mousePosition.y} />
                <FloatingClip id="05" top="45%" left="5%" rotate={-8} delay={0.5} parallaxMultiplier={-0.8} mouseX={mousePosition.x} mouseY={mousePosition.y} />
                <FloatingClip id="06" top="50%" left="85%" rotate={6} delay={0.7} parallaxMultiplier={1.3} mouseX={mousePosition.x} mouseY={mousePosition.y} />
                <FloatingClip id="07" top="5%" left="45%" rotate={2} delay={0.8} parallaxMultiplier={-0.5} mouseX={mousePosition.x} mouseY={mousePosition.y} />
            </div>

            {/* main hero content (z-20) */}
            <div className="relative z-20 text-center flex flex-col items-center mt-12 pointer-events-none">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="font-sans text-xs uppercase tracking-zissou text-lucas-slate mb-6"
                >
                    Ontario // Worldwide
                </motion.p>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center leading-none"
                >
                    {/* dialed back from 8vw/8rem to a much cleaner 4.5vw/5.5rem */}
                    <span className="font-sans font-bold text-[clamp(2.5rem,4.5vw,5.5rem)] text-lucas-navy uppercase tracking-normal">
                        The Art Of
                    </span>
                    {/* tightened the margin and reduced the serif scale to match */}
                    <div className="flex items-baseline -mt-3 md:-mt-6">
                        <span className="font-serif italic text-[clamp(3rem,5.5vw,6.5rem)] text-lucas-navy lowercase">
                            noticing
                        </span>
                        <span className="font-serif text-[clamp(3rem,5.5vw,6.5rem)] text-lucas-orange ml-1">
                            .
                        </span>
                    </div>
                </motion.h1>
            </div>

            {/* bottom left badge placeholder */}
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-lucas-navy rounded-full flex items-center justify-center z-20 pointer-events-none">
                <span className="text-lucas-cream font-sans font-bold text-sm">N'</span>
            </div>
        </section>
    );
}
