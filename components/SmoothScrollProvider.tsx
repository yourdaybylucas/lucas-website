"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollProvider({
    children,
}: {
    children: any; // Bypassing React 19 vs @types/react conflict
}) {
    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.5 }}>
            {children}
        </ReactLenis>
    );
}
