import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-lucas-navy text-lucas-cream border-t border-lucas-slate/20">
            <div className="max-w-[1400px] mx-auto">
                {/* The Ledger Grid - updated to 5 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-5 border-l border-lucas-slate/20">
                    
                    {/* Col 1 & 2: The Manifesto & Sign-off */}
                    <div className="col-span-1 lg:col-span-2 border-r border-b lg:border-b-0 border-lucas-slate/20 p-8 md:p-12 flex flex-col justify-between min-h-[400px]">
                        <div>
                            {/* Logo: Reduced by 30% */}
                            <div className="relative w-full max-w-[224px] md:max-w-[280px] h-11 md:h-16 overflow-hidden flex items-center mb-8">
                                <div className="relative w-full h-[224px] md:h-[280px] shrink-0">
                                    <Image 
                                        src="/logos/Lucas Buttercream trans.png" 
                                        alt="LUCAS" 
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </div>
                            </div>
                            <p className="font-serif italic text-lucas-cream/80 text-xl md:text-2xl max-w-md leading-relaxed">
                                honest, nostalgic wedding cinema. for couples who prioritize presence over perfection.
                            </p>
                        </div>
                        
                        <div className="mt-16 flex items-center gap-4">
                            <p className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate">
                                © {new Date().getFullYear()} — the art of noticing.
                            </p>
                        </div>
                    </div>

                    {/* Col 3: The Index */}
                    <div className="col-span-1 border-r border-b lg:border-b-0 border-lucas-slate/20 p-8 md:p-12 flex flex-col hover:bg-lucas-slate/5 transition-colors duration-slow">
                        <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mb-12 block">
                            [ The Index ]
                        </span>
                        <nav className="flex flex-col gap-6 font-sans text-xs tracking-widest uppercase">
                            <Link href="/about" className="hover:text-lucas-orange transition-colors w-fit">About</Link>
                            <Link href="/collections" className="hover:text-lucas-orange transition-colors w-fit">Collections</Link>
                            <Link href="/analog-lab" className="hover:text-lucas-orange transition-colors w-fit">Analog Lab</Link>
                            <Link href="/journal" className="hover:text-lucas-orange transition-colors w-fit">Journal</Link>
                        </nav>
                    </div>

                    {/* Col 4: Network */}
                    <div className="col-span-1 border-r border-b lg:border-b-0 border-lucas-slate/20 p-8 md:p-12 flex flex-col hover:bg-lucas-slate/5 transition-colors duration-slow">
                        <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mb-12 block">
                            [ Network ]
                        </span>
                        <nav className="flex flex-col gap-6 font-sans text-xs tracking-widest uppercase">
                            <a href="https://www.instagram.com/yourdaybylucas/" target="_blank" rel="noopener noreferrer" className="hover:text-lucas-orange transition-colors w-fit">Instagram</a>
                            <a href="https://www.youtube.com/channel/UCzxBX7qRbMssCqBtgd4ndQw" target="_blank" rel="noopener noreferrer" className="hover:text-lucas-orange transition-colors w-fit">YouTube</a>
                            <a href="https://www.tiktok.com/@yourdaybylucas" target="_blank" rel="noopener noreferrer" className="hover:text-lucas-orange transition-colors w-fit">TikTok</a>
                        </nav>
                    </div>

                    {/* Col 5: Dispatch (SEO / Contact) */}
                    <div className="col-span-1 border-r border-lucas-slate/20 p-8 md:p-12 flex flex-col hover:bg-lucas-slate/5 transition-colors duration-slow">
                        <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mb-12 block">
                            [ Dispatch ]
                        </span>
                        <address className="not-italic flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <span className="font-sans text-[10px] tracking-widest uppercase text-lucas-slate">
                                    coordinates
                                </span>
                                <span className="font-serif italic text-lucas-cream/80 text-lg leading-snug">
                                    13 extra street<br />
                                    guelph, ontario
                                </span>
                                <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mt-2">
                                    home base // operating worldwide
                                </span>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <span className="font-sans text-[10px] tracking-widest uppercase text-lucas-slate">
                                    transmission
                                </span>
                                <a href="tel:5192401891" className="font-serif italic text-lucas-cream/80 text-lg hover:text-lucas-orange transition-colors w-fit">
                                    519.240.1891
                                </a>
                            </div>
                        </address>
                    </div>

                </div>
            </div>
        </footer>
    );
}
