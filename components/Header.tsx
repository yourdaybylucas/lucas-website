"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// 1. The Magnetic Physics Wrapper
function MagneticWrap({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        // 0.3 is the "pull" strength. keeps it heavy and deliberate.
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative flex cursor-pointer"
        >
            {children}
        </motion.div>
    );
}

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // [ Updated Inventory ]
    const navLinks = [
        { label: "About", path: "/about" },
        { label: "Collections", path: "/collections" },
        { label: "Journal", path: "/journal" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileMenuOpen]);

    // --- THE DOSSIER RULE ---
    // Hide the header completely on private portals. 
    // Placed here to ensure all React hooks fire safely first.
    if (pathname === '/private-collections' || pathname === '/the-guide') {
        return null;
    }

    const headerBg = scrolled ? "bg-lucas-cream/80 backdrop-blur-md border-b border-lucas-slate/10" : "bg-transparent border-b border-transparent";

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${headerBg}`}>
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                    
                    {/* Brand (Now Magnetic) */}
                    <MagneticWrap>
                        <Link href="/" className="hover:opacity-70 transition-opacity flex items-center py-4 z-[101] relative">
                            <Image 
                                src="/logos/L Blue Transparent.png" 
                                alt="LUCAS" 
                                width={50} 
                                height={50} 
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </MagneticWrap>

                    {/* Desktop Nav (Zissou Bracket Hover) */}
                    <nav className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className="group relative font-sans text-[10px] tracking-widest uppercase flex items-center justify-center h-10"
                                >
                                    {/* Left Bracket */}
                                    <span className={`absolute -left-3 transition-all duration-slow ${isActive ? 'opacity-100 text-lucas-orange translate-x-0' : 'opacity-0 text-lucas-slate translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                                        [
                                    </span>
                                    
                                    <span className={`transition-colors duration-slow ${isActive ? 'text-lucas-orange' : 'text-lucas-navy group-hover:text-lucas-orange'}`}>
                                        {link.label}
                                    </span>

                                    {/* Right Bracket */}
                                    <span className={`absolute -right-3 transition-all duration-slow ${isActive ? 'opacity-100 text-lucas-orange translate-x-0' : 'opacity-0 text-lucas-slate -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                                        ]
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Action Area */}
                    <div className="flex items-center gap-6">
                        {/* Desktop CTA (Magnetic Geometric Rectangle) */}
                        <div className="hidden md:flex items-center">
                            <MagneticWrap>
                                <Link
                                    href="/#contact"
                                    className="font-sans text-[10px] tracking-widest uppercase border border-lucas-navy px-8 py-3.5 text-lucas-navy hover:bg-lucas-navy hover:text-lucas-cream transition-colors duration-slow bg-transparent"
                                >
                                    Inquire
                                </Link>
                            </MagneticWrap>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button 
                            className="md:hidden z-[101] relative text-lucas-navy p-2 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>

                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[90] bg-lucas-cream flex flex-col items-center justify-center gap-12"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-sans text-xl tracking-zissou uppercase text-lucas-navy hover:text-lucas-orange transition-colors duration-slow"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            
                            <Link
                                href="/#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-8 font-sans text-xs tracking-widest uppercase border border-lucas-navy px-10 py-4 text-lucas-navy hover:bg-lucas-navy hover:text-lucas-cream transition-colors duration-slow"
                            >
                                Inquire
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
