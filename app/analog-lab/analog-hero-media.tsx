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
    <div className="relative isolate mx-auto w-full max-w-[680px]">
      <div aria-hidden="true" className="pointer-events-none absolute -inset-3 -z-10 bg-lucas-navy/25 blur-2xl" />
      <div className="bg-lucas-navy p-3 sm:p-4">
        <div className="relative aspect-[4/3] overflow-hidden bg-lucas-navy">
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
        </div>

        <div className="mt-2 grid grid-cols-5 gap-2">
          {frames.map((frame, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={frame.id}
                type="button"
                aria-label={`Show Super 8 frame ${frame.id}: ${frame.label}`}
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={`group relative aspect-[4/3] overflow-hidden border-2 bg-lucas-navy transition-colors duration-slow focus:outline-none focus-visible:ring-2 focus-visible:ring-lucas-orange ${
                  isActive ? 'border-lucas-orange' : 'border-transparent'
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
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
