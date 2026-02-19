"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for fluid trailing effect
    const cursorX = useSpring(mouseX, { damping: 20, stiffness: 100, mass: 0.5 });
    const cursorY = useSpring(mouseY, { damping: 20, stiffness: 100, mass: 0.5 });

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveMouse);
        return () => window.removeEventListener("mousemove", moveMouse);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-lucas-orange rounded-full pointer-events-none z-[9999]"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%"
            }}
        />
    );
}
