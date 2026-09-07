"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // [ Updated Inventory ]
    const navLinks = [
        { label: "About", path: "/about" },
        { label: "Collections", path: "/collections" },
        { label: "Analog Lab", path: "/analog-lab" },
        { label: "Journal", path: "/journal" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
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

    const headerBg = scrolled ? "bg-lucas-cream border-lucas-slate/20" : "bg-transparent border-transparent";

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[100] h-18 md:h-20 border-b ${headerBg}`}>
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    
                    {/* Brand (Static / Grounded) */}
                    <Link href="/" className="hover:opacity-70 flex items-center py-2 z-[101] relative focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-navy">
                        <Image 
                            src="/logos/L Blue Transparent.png" 
                            alt="LUCAS" 
                            width={44}
                            height={44}
                            className="h-10 w-10 md:h-11 md:w-11 object-contain"
                            priority
                        />
                    </Link>

                    {/* Static brackets mark the current section. */}
                    <nav className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path || pathname.startsWith(`${link.path}/`);
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`relative font-sans text-[10px] tracking-widest uppercase flex items-center justify-center h-10 hover:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-navy ${isActive ? 'text-lucas-orange' : 'text-lucas-navy'}`}
                                >
                                    {isActive && <span aria-hidden="true" className="absolute -left-3">[</span>}
                                    {link.label}
                                    {isActive && <span aria-hidden="true" className="absolute -right-3">]</span>}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Action Area */}
                    <div className="flex items-center gap-6">
                        {/* Desktop CTA (Static / Grounded) */}
                        <div className="hidden md:flex items-center">
                            <Link
                                href="/#contact"
                                className="lucas-button font-sans text-[10px] tracking-widest uppercase px-8 py-3.5"
                            >
                                Inquire
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button 
                            className="md:hidden z-[101] relative text-lucas-navy p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-navy"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-navigation"
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
                        id="mobile-navigation"
                        className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-10 bg-lucas-cream px-6 pb-10 pt-24"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    aria-current={pathname === link.path || pathname.startsWith(`${link.path}/`) ? 'page' : undefined}
                                    className={`font-sans text-xl tracking-zissou uppercase hover:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-navy ${pathname === link.path || pathname.startsWith(`${link.path}/`) ? 'text-lucas-orange' : 'text-lucas-navy'}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            
                            <Link
                                href="/#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="lucas-button mt-8 font-sans text-xs tracking-widest uppercase px-10 py-4"
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
