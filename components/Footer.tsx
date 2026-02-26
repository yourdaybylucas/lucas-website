import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-lucas-navy text-lucas-cream border-t border-lucas-slate/20">
            <div className="max-w-7xl mx-auto">
                {/* The Ledger Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 border-l border-lucas-slate/20">
                    
                    {/* Col 1 & 2: The Manifesto & Sign-off */}
                    <div className="col-span-1 md:col-span-2 border-r border-b md:border-b-0 border-lucas-slate/20 p-8 md:p-12 flex flex-col justify-between min-h-[320px]">
                        <div>
                            <h3 className="font-sans font-bold text-3xl md:text-5xl uppercase tracking-normal mb-6">
                                LUCAS
                            </h3>
                            <p className="font-serif italic text-lucas-cream/80 text-xl md:text-2xl max-w-md leading-relaxed">
                                honest, nostalgic wedding cinema. built for couples who prioritize presence over perfection.
                            </p>
                        </div>
                        <div className="mt-16 flex items-center gap-4">
                            <span className="w-2 h-2 rounded-full bg-lucas-orange"></span>
                            <p className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate">
                                © {new Date().getFullYear()} — the art of noticing.
                            </p>
                        </div>
                    </div>

                    {/* Col 3: The Index */}
                    <div className="col-span-1 border-r border-b md:border-b-0 border-lucas-slate/20 p-8 md:p-12 flex flex-col hover:bg-lucas-slate/5 transition-colors duration-slow">
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

                    {/* Col 4: Network & Base */}
                    <div className="col-span-1 border-r border-lucas-slate/20 p-8 md:p-12 flex flex-col justify-between hover:bg-lucas-slate/5 transition-colors duration-slow">
                        <div>
                            <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate mb-12 block">
                                [ Network ]
                            </span>
                            <nav className="flex flex-col gap-6 font-sans text-xs tracking-widest uppercase">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-lucas-orange transition-colors w-fit">Instagram</a>
                                <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-lucas-orange transition-colors w-fit">Vimeo</a>
                            </nav>
                        </div>

                        <div className="mt-16">
                            <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate block mb-4">
                                Base
                            </span>
                            <p className="font-sans text-[10px] tracking-zissou uppercase text-lucas-cream">
                                Ontario // Worldwide
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
