"use client";

import { useState, useMemo, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Venue, Geography, Scale, Atmosphere, Footprint } from '@/data/venues';
import { MapPin, Users, Building, Lock, X } from 'lucide-react';

const DossierCard = ({ venue }: { venue: Venue }) => (
    <motion.div
        key={venue.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="bg-lucas-cream border border-lucas-slate/20 p-6 md:p-10 flex flex-col shadow-sm h-full"
    >
        <div className="mb-8">
            <h2 className="uppercase tracking-[0.2em] font-bold text-2xl md:text-3xl leading-tight">
                {venue.name}
            </h2>
            <p className="uppercase tracking-[0.2em] text-xs text-lucas-slate mt-3">
                loc : {venue.location} // {venue.geography}
            </p>
        </div>

        <div className="relative aspect-video w-full bg-[#0a1118] mb-10 overflow-hidden shadow-md group">
            <iframe
                src={`https://www.youtube.com/embed/${venue.visualEmbed}?autoplay=0&color=white&rel=0&modestbranding=1&playsinline=1`}
                title={`Lucas Film at ${venue.name}`}
                className="w-full h-full absolute top-0 left-0 border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-10 text-sm">
            <div>
                <h4 className="uppercase tracking-zissou text-[10px] text-lucas-slate mb-1">Scale</h4>
                <p className="lowercase font-medium text-lucas-navy">{venue.scale}</p>
            </div>
            <div>
                <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-1">Footprint</h4>
                <p className="lowercase font-medium text-lucas-navy">{venue.footprint}</p>
            </div>

            <div className="col-span-2 h-px bg-lucas-slate/10 my-2" />

            <div>
                <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-1">Prep</h4>
                <p className="lowercase font-medium text-lucas-navy">{venue.prep}</p>
            </div>
            <div>
                <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-1">Flow</h4>
                <p className="lowercase font-medium text-lucas-navy">{venue.flow}</p>
            </div>
            <div>
                <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-1">Curfew</h4>
                <p className="lowercase font-medium text-lucas-navy">{venue.curfew}</p>
            </div>
        </div>

<div className="bg-lucas-sage/10 p-6 md:p-8 border-l-2 border-lucas-orange mt-auto">
            <h4 className="uppercase tracking-zissou text-[10px] text-lucas-slate mb-3">Field Observation</h4>
            <p className="prose-soul text-lucas-navy leading-loose text-base md:text-lg">
                {/* swap technicalNote to fieldNotes right here */}
                {venue.fieldNotes}
            </p>
        </div>
    </motion.div>
);

export default function SpacesClient({ venues }: { venues: Venue[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const spaceQuery = searchParams.get('space');
    
    const [activeFilters, setActiveFilters] = useState<{
        geography: Geography | null;
        scale: Scale | null;
        atmosphere: Atmosphere | null;
        footprint: Footprint | null;
    }>({
        geography: null,
        scale: null,
        atmosphere: null,
        footprint: null,
    });

    const filteredVenues = useMemo(() => {
        return venues.filter((v) => {
            if (activeFilters.geography && v.geography !== activeFilters.geography) return false;
            if (activeFilters.scale && v.scale !== activeFilters.scale) return false;
            if (activeFilters.atmosphere && v.atmosphere !== activeFilters.atmosphere) return false;
            if (activeFilters.footprint && v.footprint !== activeFilters.footprint) return false;
            return true;
        });
    }, [activeFilters, venues]);

    const activeVenue = useMemo(() => {
        return spaceQuery ? venues.find((v) => v.id === spaceQuery) || null : null;
    }, [spaceQuery, venues]);

    const closeDossier = () => {
        router.push('/spaces', { scroll: false });
    };

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 1024px)').matches;
        if (activeVenue && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [activeVenue]);

    const handleFilterClick = (category: keyof typeof activeFilters, value: string) => {
        setActiveFilters((prev) => ({
            ...prev,
            [category]: prev[category] === value ? null : value,
        }));
        closeDossier();
    };

    const handleClearFilters = () => {
        setActiveFilters({ geography: null, scale: null, atmosphere: null, footprint: null });
        closeDossier();
    };

    const FilterSection = ({
        title,
        icon: Icon,
        category,
        options,
    }: {
        title: string;
        icon: any;
        category: keyof typeof activeFilters;
        options: string[];
    }) => (
        <div className="mb-8 border-b border-lucas-slate/30 pb-6 last:border-0">
            <div className="flex items-center gap-2 mb-4 text-lucas-slate">
                <Icon size={14} />
                <h3 className="uppercase tracking-zissou text-[10px] font-bold">{title}</h3>
            </div>
            <div className="flex flex-col gap-3">
                {options.map((opt) => {
                    const isActive = activeFilters[category] === opt;
                    return (
                        <button
                            key={opt}
                            onClick={() => handleFilterClick(category, opt)}
                            className={`text-left text-sm transition-colors duration-slow flex items-center gap-3 ${
                                isActive ? 'text-lucas-orange font-medium' : 'text-lucas-navy hover:text-lucas-slate'
                            }`}
                        >
                            <span className="font-sans text-[10px] tracking-widest opacity-70 w-6 flex-shrink-0 text-center">
                                {isActive ? '[ x ]' : '[   ]'}
                            </span>
                            <span className="lowercase">
                                {opt}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-lucas-cream text-lucas-navy font-sans relative pt-32 pb-24">
            
            <AnimatePresence>
                {activeVenue && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[150] lg:hidden flex flex-col justify-end pointer-events-none"
                    >
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-lucas-navy/40 backdrop-blur-sm pointer-events-auto" 
                            onClick={closeDossier} 
                        />
                        
                        <div className="bg-lucas-cream w-full h-[85vh] rounded-t-xl shadow-[0_-10px_40px_rgba(24,40,54,0.2)] pointer-events-auto overflow-y-auto relative flex flex-col">
                            <div className="sticky top-0 right-0 left-0 bg-lucas-cream/90 backdrop-blur-md z-20 flex justify-between items-center p-4 border-b border-lucas-slate/20">
                                <span className="font-sans text-[10px] tracking-zissou uppercase text-lucas-slate ml-2">
                                    [ The Dossier ]
                                </span>
                                <button 
                                    onClick={closeDossier} 
                                    className="p-2 text-lucas-navy hover:text-lucas-orange transition-colors"
                                >
                                    <X size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                            <div className="flex-grow p-0">
                                <DossierCard venue={activeVenue} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    <aside className="lg:col-span-3 lg:sticky lg:top-32">
                        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-2">The Ledger</h1>
                        <p className="text-base text-lucas-slate lowercase mb-12">an inventory of honest spaces.</p>

                        <FilterSection
                            title="Geography"
                            category="geography"
                            icon={MapPin}
                            options={['gta', 'niagara', 'tri-cities + west', 'northern escapes']}
                        />
                        <FilterSection
                            title="Scale"
                            category="scale"
                            icon={Users}
                            options={['intimate', 'standard', 'grand']}
                        />
                        <FilterSection
                            title="Atmosphere"
                            category="atmosphere"
                            icon={Building}
                            options={['historical estate', 'industrial canvas', 'modern minimal', 'glass + nature']}
                        />
                        <FilterSection
                            title="Footprint"
                            category="footprint"
                            icon={Lock}
                            options={['exclusive use', 'shared estate']}
                        />

                        {(activeFilters.geography || activeFilters.scale || activeFilters.atmosphere || activeFilters.footprint) && (
                            <button
                                onClick={handleClearFilters}
                                className="text-[10px] uppercase tracking-zissou text-lucas-slate hover:text-lucas-orange transition-colors duration-slow mt-4"
                            >
                                clear filters [x]
                            </button>
                        )}
                    </aside>

                    <section className="lg:col-span-4 lg:pr-8">
                        <div className="flex flex-col gap-0.5 border-t border-lucas-slate/20 pt-4">
                            <AnimatePresence mode="popLayout">
                                {filteredVenues.length === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center p-10 mt-6 border border-dashed border-lucas-slate/30 bg-lucas-navy/5 text-center"
                                    >
                                        <p className="text-sm text-lucas-slate lowercase italic">
                                            no spaces match the current parameters.
                                        </p>
                                    </motion.div>
                                ) : (
                                    filteredVenues.map((venue, index) => {
                                        const isSelected = spaceQuery === venue.id;
                                        return (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                                                key={venue.id}
                                                className="group border-b border-lucas-slate/20 last:border-0"
                                            >
                                                <Link 
                                                    href={isSelected ? '/spaces' : `/spaces?space=${venue.id}`}
                                                    scroll={false}
                                                    className={`block py-5 md:py-6 transition-colors duration-slow ${isSelected ? 'text-lucas-orange' : 'hover:text-lucas-orange'}`}
                                                >
                                                    <div className="flex gap-4">
                                                        <span className={`font-sans text-[10px] tracking-zissou mt-1.5 transition-opacity duration-slow ${isSelected ? 'text-lucas-orange opacity-100' : 'text-lucas-slate opacity-40 group-hover:opacity-100'}`}>
                                                            {String(index + 1).padStart(2, '0')}
                                                        </span>
                                                        <div className="flex flex-col items-start gap-1.5">
                                                            <h2 className="text-xl md:text-2xl font-medium lowercase">
                                                                {venue.name}
                                                            </h2>
                                                            <div className={`flex flex-wrap items-center gap-2 text-[10px] md:text-xs uppercase tracking-zissou transition-colors duration-slow ${isSelected ? 'text-lucas-orange/70' : 'text-lucas-slate group-hover:text-lucas-orange/70'}`}>
                                                                <span>{venue.location}</span>
                                                                <span className={`w-1 h-1 rounded-full ${isSelected ? 'bg-lucas-orange/30' : 'bg-lucas-slate/30'}`} />
                                                                <span>{venue.atmosphere}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        );
                                    })
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="mt-8 text-[10px] uppercase tracking-zissou text-lucas-slate">
                            total spaces: {filteredVenues.length}
                        </div>
                    </section>

                    <section className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32">
                        <AnimatePresence mode="wait">
                            {activeVenue ? (
                                <DossierCard venue={activeVenue} />
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full min-h-[500px] border border-lucas-slate/20 border-dashed flex items-center justify-center p-8 bg-lucas-navy/[0.02]"
                                >
                                    <p className="text-lucas-slate lowercase text-sm">select a space to view the dossier.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </section>

                </div>
            </div>
        </main>
    );
}
