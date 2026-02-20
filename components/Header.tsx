"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Use a transparent background that blurs slightly when scrolled
    const headerBg = scrolled ? "bg-lucas-cream/80 backdrop-blur-md border-b border-lucas-slate/10" : "bg-transparent";

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${headerBg}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="hover:opacity-70 transition-opacity flex items-center">
                    <Image 
                        src="/logos/Icon Lucas Transparent.png" 
                        alt="LUCAS" 
                        width={120} 
                        height={120} 
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { label: "About", path: "/about" },
                        { label: "Collections", path: "/collections" },
                        { label: "Analog Lab", path: "/analog-lab" },
                        { label: "Journal", path: "/journal" },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`font-sans text-[10px] tracking-widest uppercase transition-colors duration-300 ${pathname === link.path ? "text-lucas-orange" : "text-lucas-navy hover:text-lucas-orange"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/#contact"
                        className="font-sans text-[10px] tracking-widest uppercase border border-lucas-navy/20 px-6 py-2 rounded-full text-lucas-navy hover:bg-lucas-navy hover:text-lucas-cream transition-all duration-300"
                    >
                        Inquire
                    </Link>
                </div>
            </div>
        </header>
    );
}
