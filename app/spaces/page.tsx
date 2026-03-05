"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { venues, Venue, Geography, Scale, Atmosphere, Footprint } from '@/data/venues';
import { MapPin, Users, Building, Lock } from 'lucide-react';

export default function SpacesPage() {
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

    const [hoveredVenueId, setHoveredVenueId] = useState<string | null>(null);

    // Derive filtered list
    const filteredVenues = useMemo(() => {
        return venues.filter((v) => {
            if (activeFilters.geography && v.geography !== activeFilters.geography) return false;
            if (activeFilters.scale && v.scale !== activeFilters.scale) return false;
            if (activeFilters.atmosphere && v.atmosphere !== activeFilters.atmosphere) return false;
            if (activeFilters.footprint && v.footprint !== activeFilters.footprint) return false;
            return true;
        });
    }, [activeFilters]);

    // Active venue for the dossier (hovered or first in filtered list)
    const activeVenue = useMemo(() => {
        if (hoveredVenueId) {
            const found = venues.find((v) => v.id === hoveredVenueId);
            if (found) return found;
        }
        return filteredVenues.length > 0 ? filteredVenues[0] : null;
    }, [hoveredVenueId, filteredVenues]);

    const handleFilterClick = (category: keyof typeof activeFilters, value: string) => {
        setActiveFilters((prev) => ({
            ...prev,
            [category]: prev[category] === value ? null : value,
        }));
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
            <div className="flex flex-col gap-2">
                {options.map((opt) => {
                    const isActive = activeFilters[category] === opt;
                    return (
                        <button
                            key={opt}
                            onClick={() => handleFilterClick(category, opt)}
                            className={`text-left text-sm transition-colors duration-slow flex items-center gap-2 ${isActive ? 'text-lucas-orange' : 'text-lucas-navy hover:text-lucas-slate'
                                }`}
                        >
                            <div
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-slow ${isActive ? 'bg-lucas-orange scale-100' : 'bg-transparent scale-0'
                                    }`}
                            />
                            <span className={`lowercase ${isActive ? '-ml-1' : 'ml-0.5'} transition-all duration-slow`}>
                                {opt}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-lucas-cream text-lucas-navy font-sans relative">
            {/* Decorative ambient grain */}
            <div className="fixed inset-0 bg-grain pointer-events-none z-50"></div>

            <div className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-12 xl:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* THE FILTER SYSTEM (Left Sidebar) */}
                    <aside className="lg:col-span-3 lg:sticky lg:top-16">
                        <h1 className="text-3xl font-bold uppercase tracking-tight mb-2">The Ledger</h1>
                        <p className="text-sm text-lucas-slate lowercase mb-12">an inventory of honest spaces.</p>

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
                                onClick={() => setActiveFilters({ geography: null, scale: null, atmosphere: null, footprint: null })}
                                className="text-[10px] uppercase tracking-zissou text-lucas-slate hover:text-lucas-orange transition-colors duration-slow mt-4"
                            >
                                clear filters [x]
                            </button>
                        )}
                    </aside>

                    {/* THE LUCAS LEDGER (Middle List) */}
                    <section className="lg:col-span-4 lg:pr-8">
                        <div className="flex flex-col gap-0.5 border-t border-lucas-slate/20 pt-4">
                            <AnimatePresence mode="popLayout">
                                {filteredVenues.length === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-sm text-lucas-slate italic py-8 border-b border-lucas-slate/20"
                                    >
                                        no spaces match the current parameters.
                                    </motion.div>
                                ) : (
                                    filteredVenues.map((venue) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                                            key={venue.id}
                                            className="group cursor-pointer border-b border-lucas-slate/20 last:border-0"
                                            onMouseEnter={() => setHoveredVenueId(venue.id)}
                                            onMouseLeave={() => setHoveredVenueId(null)}
                                        >
                                            <div className="py-4 md:py-6 flex flex-col items-start gap-1 transition-colors duration-slow hover:text-lucas-orange">
                                                <h2 className="text-lg md:text-xl font-medium lowercase">
                                                    {venue.name}
                                                </h2>
                                                <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-zissou text-lucas-slate group-hover:text-lucas-orange/70 transition-colors duration-slow">
                                                    <span>{venue.location}</span>
                                                    <span className="w-1 h-1 bg-lucas-slate/30 rounded-full" />
                                                    <span>{venue.atmosphere}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="mt-8 text-[10px] uppercase tracking-zissou text-lucas-slate">
                            total spaces: {filteredVenues.length}
                        </div>
                    </section>

                    {/* THE DOSSIER (Right Sidebar / Payoff Card) */}
                    <section className="lg:col-span-5 lg:sticky lg:top-16">
                        <AnimatePresence mode="wait">
                            {activeVenue ? (
                                <motion.div
                                    key={activeVenue.id}
                                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-lucas-cream border border-lucas-slate/20 p-6 md:p-8 flex flex-col"
                                >
                                    <div className="mb-6">
                                        <h2 className="uppercase tracking-[0.2em] font-bold text-xl md:text-2xl leading-tight">
                                            {activeVenue.name}
                                        </h2>
                                        <p className="uppercase tracking-[0.2em] text-[10px] text-lucas-slate mt-2">
                                            loc : {activeVenue.location} // {activeVenue.geography}
                                        </p>
                                    </div>

                                    <div className="relative aspect-video w-full bg-lucas-navy/5 mb-8 overflow-hidden">
                                        <img
                                            src={activeVenue.visualEmbed}
                                            alt={`Visual of ${activeVenue.name}`}
                                            className="object-cover w-full h-full mix-blend-multiply opacity-90 transition-transform duration-1000 hover:scale-105"
                                        />
                                        {/* Simulated super 8mm grain overlay for the image */}
                                        <div className="absolute inset-0 bg-grain mix-blend-overlay"></div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8 text-xs">
                                        <div>
                                            <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-1">Scale</h4>
                                            <p className="lowercase font-medium">{activeVenue.scale}</p>
                                        </div>
                                        <div>
                                            <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-1">Footprint</h4>
                                            <p className="lowercase font-medium">{activeVenue.footprint}</p>
                                        </div>

                                        <div className="col-span-2 h-px bg-lucas-slate/10 my-2" />

                                        <div>
                                            <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-1">Prep</h4>
                                            <p className="lowercase font-medium">{activeVenue.prep}</p>
                                        </div>
                                        <div>
                                            <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-1">Flow</h4>
                                            <p className="lowercase font-medium">{activeVenue.flow}</p>
                                        </div>
                                        <div>
                                            <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-1">Curfew</h4>
                                            <p className="lowercase font-medium">{activeVenue.curfew}</p>
                                        </div>
                                    </div>

                                    <div className="bg-lucas-sage/10 p-6 border-l-2 border-lucas-orange">
                                        <h4 className="uppercase tracking-zissou text-[9px] text-lucas-slate mb-3">Field Observation</h4>
                                        <p className="prose-soul text-lucas-navy leading-relaxed text-sm">
                                            {activeVenue.technicalNote}
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="h-full min-h-[500px] border border-lucas-slate/20 border-dashed flex items-center justify-center p-8">
                                    <p className="text-lucas-slate lowercase text-sm">select a space to view the dossier.</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </section>

                </div>
            </div>
        </main>
    );
}
