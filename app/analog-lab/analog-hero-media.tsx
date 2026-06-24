'use client';

import { useState } from 'react';

type FilmFrame = {
  id: string;
  src: string;
  type: string;
  label: string;
};

type AnalogHeroMediaProps = {
  frames: FilmFrame[];
};

export default function AnalogHeroMedia({ frames }: AnalogHeroMediaProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFrame = frames[activeIndex] ?? frames[0];

  if (!activeFrame) {
    return null;
  }

  return (
    <>
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_104px]">
        <div className="relative aspect-[4/3] overflow-hidden border border-lucas-navy/45 bg-lucas-navy">
          <video
            key={activeFrame.src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            aria-label={`Super 8 frame ${activeFrame.id}: ${activeFrame.label}`}
          >
            <source src={activeFrame.src} type={activeFrame.type} />
          </video>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between border-t border-lucas-cream/40 pt-3 font-sans text-[9px] uppercase tracking-zissou text-lucas-cream/80">
            <span>KODAK 200T</span>
          </div>
        </div>

        <aside className="grid grid-cols-3 border border-lucas-navy/45 bg-lucas-cream font-sans text-[9px] uppercase tracking-zissou text-lucas-navy md:grid-cols-1">
          <div className="flex flex-col justify-between border-r border-lucas-navy/35 p-4 md:min-h-28 md:border-b md:border-r-0">
            <span>Roll</span>
            <span className="text-lucas-orange">A01</span>
          </div>
          <div className="flex flex-col justify-between border-r border-lucas-navy/35 p-4 md:min-h-28 md:border-b md:border-r-0">
            <span>Base</span>
            <span className="text-lucas-navy">Guelph</span>
          </div>
          <div className="flex flex-col justify-between p-4 md:min-h-28">
            <span>Range</span>
            <span className="text-lucas-navy">Ontario</span>
          </div>
        </aside>
      </div>

      <div className="mt-3 grid grid-cols-5 gap-1 border border-lucas-navy/45 bg-lucas-navy p-2">
        {frames.map((frame, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={frame.id}
              type="button"
              aria-label={`Show Super 8 frame ${frame.id}: ${frame.label}`}
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
              className={`group relative aspect-[4/3] overflow-hidden border bg-lucas-cream/10 transition-colors duration-slow focus:outline-none focus-visible:ring-2 focus-visible:ring-lucas-orange ${
                isActive ? 'border-lucas-orange' : 'border-lucas-cream/10'
              }`}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="pointer-events-none h-full w-full object-cover transition duration-slow group-hover:scale-105"
                aria-hidden="true"
              >
                <source src={frame.src} type={frame.type} />
              </video>
              <span
                className={`absolute bottom-1 left-1 font-sans text-[8px] uppercase tracking-widest ${
                  isActive ? 'text-lucas-orange' : 'text-lucas-cream/70'
                }`}
              >
                {frame.id}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
