"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    // --- THE DOSSIER RULE ---
    // Hide the footer completely on private portals to maintain the closed conversion loop.
    if (pathname === '/private-collections' || pathname === '/the-guide') {
        return null;
    }

    return (
        <footer className="relative z-10 bg-lucas-navy text-lucas-cream border-t border-lucas-slate/20">
            <div className="max-w-[1400px] mx-auto">
                {/* The Ledger Grid - balanced padding */}
                <div className="grid grid-cols-1 lg:grid-cols-5 border-l border-lucas-slate/20">
                    
                    {/* Col 1 & 2: The Manifesto & Sign-off */}
                    <div className="col-span-1 lg:col-span-2 border-r border-b lg:border-b-0 border-lucas-slate/20 p-8 md:p-10 flex flex-col justify-between min-h-[340px]">
                        <div>
                            {/* Logo: Cleaned up the container so it never clips */}
                            <div className="relative w-full max-w-[200px] md:max-w-[240px] h-12 md:h-16 mb-8">
                                <Image 
                                    src="/logos/Lucas Buttercream trans.png" 
                                    alt="LUCAS" 
                                    fill
                                    sizes="(min-width: 768px) 240px, 200px"
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                            <p className="font-serif italic text-lucas-cream/80 text-lg md:text-xl max-w-md leading-relaxed">
                                honest, nostalgic wedding cinema. for couples who prioritize presence over perfection.
                            </p>
                        </div>
                        
                        <div className="mt-12 flex items-center gap-4">
                            <p className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate">
                                © {new Date().getFullYear()} — the art of noticing.
                            </p>
                        </div>
                    </div>

                    {/* Col 3: The Index */}
                    <div className="col-span-1 border-r border-b lg:border-b-0 border-lucas-slate/20 p-8 md:p-10 flex flex-col hover:bg-lucas-slate/5 transition-colors duration-slow">
                        <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mb-10 block">
                            [ The Index ]
                        </span>
                        <nav className="flex flex-col gap-5 font-sans text-xs tracking-widest uppercase">
                            <Link href="/" className="hover:text-lucas-orange transition-colors w-fit">Home</Link>
                            <Link href="/about" className="hover:text-lucas-orange transition-colors w-fit">About</Link>
                            <Link href="/collections" className="hover:text-lucas-orange transition-colors w-fit">Collections</Link>
                            <Link href="/analog-lab" className="hover:text-lucas-orange transition-colors w-fit">Analog Lab</Link>
                            <Link href="/journal" className="hover:text-lucas-orange transition-colors w-fit">Journal</Link>
                            <Link href="/spaces" className="hover:text-lucas-orange transition-colors w-fit">Spaces</Link>
                        </nav>
                    </div>

                    {/* Col 4: Network */}
                    <div className="col-span-1 border-r border-b lg:border-b-0 border-lucas-slate/20 p-8 md:p-10 flex flex-col hover:bg-lucas-slate/5 transition-colors duration-slow">
                        <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mb-10 block">
                            [ Network ]
                        </span>
                        <nav className="flex flex-col gap-5 font-sans text-xs tracking-widest uppercase">
                            <a href="https://www.instagram.com/yourdaybylucas/" target="_blank" rel="noopener noreferrer" className="hover:text-lucas-orange transition-colors w-fit">Instagram</a>
                            <a href="https://www.youtube.com/channel/UCzxBX7qRbMssCqBtgd4ndQw" target="_blank" rel="noopener noreferrer" className="hover:text-lucas-orange transition-colors w-fit">YouTube</a>
                            <a href="https://www.tiktok.com/@yourdaybylucas" target="_blank" rel="noopener noreferrer" className="hover:text-lucas-orange transition-colors w-fit">TikTok</a>
                        </nav>
                    </div>

                    {/* Col 5: Currently (Simplified SEO / Contact) */}
                    <div className="col-span-1 border-r border-lucas-slate/20 p-8 md:p-10 flex flex-col hover:bg-lucas-slate/5 transition-colors duration-slow">
                        <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mb-10 block">
                            [ Currently ]
                        </span>
                        <address className="not-italic flex flex-col gap-5">
                            <span className="font-serif italic text-lucas-cream/80 text-lg leading-snug">
                                guelph, ontario
                            </span>
                            <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate">
                                home base // operating worldwide
                            </span>
                            <a href="tel:5192401891" className="font-serif italic text-lucas-cream/80 text-lg hover:text-lucas-orange transition-colors w-fit pt-2">
                                519.240.1891
                            </a>
                        </address>
                    </div>

                </div>
            </div>
        </footer>
    );
}
