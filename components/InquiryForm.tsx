"use client";

import { useEffect, useRef, useState } from "react";

const formOrigin = "https://app.lemlii.com";
const publicSlug = "your-day-by-lucas";

export default function InquiryForm() {
    const frameRef = useRef<HTMLIFrameElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(1);

    useEffect(() => {
        let fallbackTimer: ReturnType<typeof setTimeout>;
        const startFallback = () => {
            clearTimeout(fallbackTimer);
            // Keep the form usable if the provider's resize script fails to load.
            fallbackTimer = setTimeout(() => {
                setHeight((current) => current === 1 ? 1000 : current);
            }, 8000);
        };

        const handleResize = (event: MessageEvent) => {
            if (event.origin !== formOrigin || event.source !== frameRef.current?.contentWindow) return;
            const data = event.data;
            // The provider returns its internal form ID, not the URL alias.
            // Origin and source above restrict messages to this exact iframe.
            if (!data || data.type !== "lemlii:inquiry-resize") return;
            if (typeof data.height !== "number" || !Number.isFinite(data.height) || data.height < 100 || data.height > 20000) return;

            clearTimeout(fallbackTimer);
            setHeight(Math.ceil(data.height));
        };

        window.addEventListener("message", handleResize);
        startFallback();

        // The provider measures document scrollHeight, which is at least the
        // iframe viewport height. Reset on width changes so it can shrink too.
        let previousWidth: number | undefined;
        const observer = new ResizeObserver(([entry]) => {
            const width = entry.contentRect.width;
            if (previousWidth !== undefined && Math.abs(width - previousWidth) > 1) {
                setHeight(1);
                startFallback();
            }
            previousWidth = width;
        });
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            window.removeEventListener("message", handleResize);
            observer.disconnect();
            clearTimeout(fallbackTimer);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full" style={{ minHeight: height === 1 ? 700 : undefined }}>
            {height === 1 && (
                <p role="status" className="absolute inset-0 flex items-center justify-center font-sans text-[10px] tracking-zissou uppercase text-lucas-slate">
                    Loading inquiry form
                </p>
            )}
            <iframe
                ref={frameRef}
                src={`${formOrigin}/inquiry/${publicSlug}?embed=1`}
                title="commission lucas"
                className="block w-full border-0 bg-transparent"
                style={{ height }}
            />
        </div>
    );
}
