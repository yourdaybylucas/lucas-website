"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

const partners = [
  { name: "The Birds Papaya", url: "https://www.instagram.com/thebirdspapaya/?hl=en" },
  { name: "T Modern Bride", url: "https://www.tmodernbride.com/" },
  { name: "Langdon Hall", url: "https://langdonhall.ca/" },
  { name: "Cruikston Park", url: "https://cruickstonpark.com/" },
  { name: "Clement & Co Events", url: "https://www.clementandcoevents.com/" },
  { name: "Wren House by Stella", url: "https://www.wrenhousebystella.ca/" },
  { name: "Elle by Stella", url: "https://www.ellebystella.ca/" },
  { name: "Samantha Nicholas", url: "https://www.samanthanicholas.ca/" },
  { name: "Jessii Vee", url: "https://www.instagram.com/jessiivee/?hl=en" },
  { name: "Olivia Dipede", url: "https://www.instagram.com/oliviadipede/?hl=en" },
  { name: "Wakefield Estate", url: "https://www.wakefieldestate.ca/" },
  { name: "Lune 1860", url: "https://www.lune1860.ca/" },
  { name: "Karilywood Events", url: "https://karilywoodevents.com/" }
];

const featuredFilms = [
  { id: "q2Qw5G4M0Lc", title: "Featured Film 01" },
  { id: "GHhmsEs_8x8", title: "Featured Film 02" },
  { id: "kXRULOzL9AQ", title: "Featured Film 03" },
  { id: "s8Zuuc169lE", title: "Featured Film 04" },
  { id: "f3L54oek57o", title: "Featured Film 05" },
  { id: "CYWJBr73jrk", title: "Featured Film 06" }
];

export default function Home() {
  return (
    <main className="relative min-h-[200vh] bg-lucas-cream overflow-hidden">

      <HeroSection />

      {/* in good company (infinite marquee) */}
      <section className="relative z-0 bg-lucas-navy text-lucas-slate py-8 border-y border-lucas-slate/10 overflow-hidden flex items-center">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-32 w-max"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25
          }}
        >
          {/* Duplicate the list twice so it loops seamlessly */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 md:gap-32 items-center">
              {partners.map((partner, idx) => (
                <a key={idx} href={partner.url} target="_blank" rel="noopener noreferrer" className="font-sans text-xs md:text-sm tracking-zissou uppercase hover:text-lucas-orange transition-colors duration-300">
                  {partner.name}
                </a>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* about & philosophy */}
      <section id="about" className="relative z-10 flex min-h-screen items-center justify-center bg-lucas-cream px-6 py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-5/12">
            <div className="aspect-[4/5] bg-lucas-slate/20 w-full rounded-sm flex items-center justify-center overflow-hidden relative">
              <span className="font-sans text-xs tracking-zissou text-lucas-slate uppercase absolute">Photo of Lucas</span>
            </div>
          </div>
          <div className="w-full md:w-7/12 border-l border-lucas-orange/30 pl-8 md:pl-12">
            <h2 className="mb-8 font-sans text-xs tracking-zissou text-lucas-slate uppercase">
              the approach
            </h2>
            <p className="font-serif text-3xl md:text-5xl leading-[1.3] text-lucas-navy mb-8">
              not a production. not content. just <span className="italic text-lucas-navy/80">easy company</span> and a keen eye.
            </p>
            <p className="font-sans text-base md:text-lg text-lucas-slate max-w-lg mb-10 leading-relaxed font-light">
              I discovered my passion for filmmaking while documenting travels, and my journey took off in 2016. Since then, I've been lucky enough to capture love stories full-time.
              <br /><br />
              Storytelling is my passion. There's nothing more rewarding than sending off a film and hearing how it brings my clients right back to their day. No crews. No scripts. Just me.
            </p>
            <p className="font-serif text-2xl italic text-lucas-navy/80">— Lucas</p>
          </div>
        </div>
      </section>

      {/* featured films */}
      <section id="films" className="relative z-10 bg-lucas-navy text-lucas-cream py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-lucas-slate/20 pb-8">
            <h2 className="font-sans text-4xl md:text-6xl uppercase tracking-tight font-bold">Featured Films</h2>
            <p className="font-sans text-xs tracking-zissou text-lucas-slate uppercase hidden md:block">Select Works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 lg:px-12">
            {featuredFilms.map((film, index) => (
              <div key={film.id} className={`group ${index % 2 !== 0 ? 'md:mt-32' : ''}`}>
                <div className="aspect-video bg-lucas-slate/20 mb-6 overflow-hidden relative shadow-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${film.id}?vq=hd1080&color=white&modestbranding=1&rel=0`}
                    title={film.title}
                    className="w-full h-full absolute top-0 left-0 border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="relative z-10 bg-lucas-cream py-32 px-6 overflow-hidden">
        <h2 className="text-center font-sans text-xs tracking-zissou text-lucas-slate uppercase mb-20">Love Letters</h2>

        <div className="flex flex-nowrap gap-16 md:gap-32 w-max px-8">
          <div className="max-w-sm">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-lucas-navy mb-6">"He had this amazing ability to be everywhere without being noticed."</p>
            <p className="font-sans text-xs tracking-zissou text-lucas-slate uppercase">— Sarah & Tom</p>
          </div>
          <div className="max-w-sm">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-lucas-navy mb-6">"Captures the wind into the fairytale... a masterpiece."</p>
            <p className="font-sans text-xs tracking-zissou text-lucas-slate uppercase">— Elena & Marco</p>
          </div>
          <div className="max-w-sm">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-lucas-navy mb-6">"Lucas is not just a videographer; he is a storyteller."</p>
            <p className="font-sans text-xs tracking-zissou text-lucas-slate uppercase">— Jess & Dan</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="font-sans text-[10px] tracking-widest text-lucas-slate uppercase">← drag →</p>
        </div>
      </section>

      {/* inquiry form */}
      <section id="contact" className="relative z-10 bg-lucas-navy text-lucas-cream py-32 px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-sans text-xs tracking-zissou text-lucas-orange uppercase mb-8">Let's work together</h2>
          <p className="font-serif text-4xl md:text-6xl leading-[1.1] mb-16">
            Tell me about your day. I'd love to hear your story.
          </p>

          <form className="w-full space-y-8 text-left" action="/thank-you">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col border-b border-lucas-slate/30 pb-2">
                <label className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-2">Names</label>
                <input type="text" className="bg-transparent border-none outline-none font-serif text-xl focus:ring-0 placeholder:text-lucas-slate/30" placeholder="Jane & John" required />
              </div>
              <div className="flex flex-col border-b border-lucas-slate/30 pb-2">
                <label className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-2">Email Address</label>
                <input type="email" className="bg-transparent border-none outline-none font-serif text-xl focus:ring-0 placeholder:text-lucas-slate/30" placeholder="hello@example.com" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col border-b border-lucas-slate/30 pb-2">
                <label className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-2">Wedding Date</label>
                <input type="text" className="bg-transparent border-none outline-none font-serif text-xl focus:ring-0 placeholder:text-lucas-slate/30" placeholder="Oct 24, 2026" />
              </div>
              <div className="flex flex-col border-b border-lucas-slate/30 pb-2">
                <label className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-2">Venue / Location</label>
                <input type="text" className="bg-transparent border-none outline-none font-serif text-xl focus:ring-0 placeholder:text-lucas-slate/30" placeholder="Tuscany, Italy" />
              </div>
            </div>

            <div className="flex flex-col border-b border-lucas-slate/30 pb-2 pt-4">
              <label className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase mb-4">Tell me about your vision</label>
              <textarea rows={4} className="bg-transparent border-none outline-none font-serif text-xl focus:ring-0 placeholder:text-lucas-slate/30 resize-none" placeholder="We are planning an intimate weekend with our closest friends..."></textarea>
            </div>

            <div className="pt-8 text-center">
              <button type="submit" className="inline-block bg-lucas-orange text-lucas-cream px-12 py-5 font-sans text-xs tracking-zissou uppercase hover:bg-white hover:text-lucas-navy transition-colors duration-500">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}