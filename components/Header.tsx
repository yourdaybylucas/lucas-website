{/* Desktop Nav (Zissou Bracket Hover) */}
                <nav className="hidden md:flex items-center gap-12">
                    {[
                        { label: "About", path: "/#about" },
                        { label: "Archive", path: "/#films" },
                        { label: "Collections", path: "/collections" },
                    ].map((link) => {
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
