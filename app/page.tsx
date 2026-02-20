"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

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

// updated with inventory metadata
const featuredFilms = [
  { id: "q2Qw5G4M0Lc", title: "Sarah & Tom", format: "Digital + Super 8mm" },
  { id: "GHhmsEs_8x8", title: "Elena & Marco", format: "Digital + Super 8mm" },
  { id: "kXRULOzL9AQ", title: "Jess & Dan", format: "Digital + 16mm" },
  { id: "s8Zuuc169lE", title: "Anna & James", format: "Super 8mm" },
  { id: "f3L54oek57o", title: "Chloe & Sam", format: "Digital + Super 8mm" },
  { id: "CYWJBr73jrk", title: "Mia & Leo", format: "Digital" }
];

const fadeUpContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Home() {
  // state to track which video is currently playing
  const [activeFilm, setActiveFilm] = useState<string | null>(null);

  return (
    <main className="relative min-h-[200vh] bg-lucas-cream overflow-hidden">

      <HeroSection />

      {/* in good company (infinite marquee) */}
      <section className="relative z-0 bg-lucas-navy text-lucas-slate py-8 border-y border-lucas-slate/10 overflow-hidden flex items-center">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-32 w-max"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
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
      <section id="about" className="relative z-10 flex min-h-screen items-center justify-center bg-lucas-cream px-6 py-32 overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-32 left-10 lg:left-32 w-3 h-3 rounded-full bg-lucas-orange hidden md:block"
        />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-16 w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-5/12 relative flex justify-center mt-16 lg:mt-0"
          >
            {/* updated image container for the text-heavy composition */}
            <div className="relative w-full max-w-[320px] md:max-w-[500px] aspect-square">
              <Image
                src="/images/Lucas photo with text transparent BG.png"
                alt="Lucas"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-6/12 flex flex-col justify-center"
          >
            <motion.div variants={fadeUpItem} className="flex items-center gap-4 mb-10">
              <span className="w-2 h-2 rounded-full bg-lucas-orange"></span>
              <h2 className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">
                the approach
              </h2>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <p className="font-serif text-4xl md:text-5xl leading-[1.3] text-lucas-navy mb-8">
                not a production. not content.<br className="hidden md:block" /> just <span className="italic text-lucas-navy/90">easy company</span> and a keen<br className="hidden md:block" /> eye.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUpItem} className="font-sans text-sm md:text-base text-lucas-slate max-w-[440px] mb-12 leading-[1.8] font-light space-y-6">
              <p>
                i'm there to hang out, keep things grounded, and collect the honest frames—bottling the sudden laughs, the heavy tears, and exactly how the day actually felt.
              </p>
              <p>
                no crews. no scripts. just me.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUpItem}>
              <p className="font-serif text-2xl italic text-lucas-navy/80 mb-10">— lucas</p>
            </motion.div>

            {/* Link to the Full About Page */}
            <motion.div variants={fadeUpItem}>
              <Link 
                href="/about" 
                className="inline-block border border-lucas-navy text-lucas-navy px-10 py-4 font-sans text-xs tracking-zissou uppercase hover:bg-lucas-navy hover:text-lucas-cream transition-colors duration-300"
              >
                Learn More About Me
              </Link>
            </motion.div>
          </motion.div>
          
        </div>
      </section>

      {/* the archive (featured films) */}
      <section id="films" className="relative z-10 bg-lucas-navy text-lucas-cream py-32 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex justify-between items-end mb-24 border-b border-lucas-slate/20 pb-8">
            <h2 className="font-sans text-4xl md:text-6xl uppercase tracking-tight font-bold">
              The Archive
            </h2>
            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase hidden md:block">
              Index of Works
            </p>
          </div>

          <div className="space-y-32">
            {featuredFilms.map((film, index) => (
              <motion.div 
                key={film.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                className="group flex flex-col w-full"
              >
                
                <div 
                  className="relative aspect-video w-full bg-[#0a1118] overflow-hidden cursor-pointer shadow-2xl"
                  onClick={() => setActiveFilm(film.id)}
                >
                  {activeFilm === film.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${film.id}?autoplay=1&color=white&rel=0&modestbranding=1&playsinline=1`}
                      title={film.title}
                      className="w-full h-full absolute top-0 left-0 border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      {/* Note: In a production environment, ensure your YouTube video has a maxresdefault thumbnail uploaded */}
                      <Image
                        src={`https://img.youtube.com/vi/${film.id}/maxresdefault.jpg`}
                        alt={film.title}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                      />
                      
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-lucas-orange/90 backdrop-blur-md flex items-center justify-center text-lucas-cream transform group-hover:scale-110 transition-transform duration-500 ease-out shadow-xl">
                          <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between md:items-start gap-4">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl italic text-lucas-cream">
                      {film.title}
                    </h3>
                  </div>
                  
                  <div className="flex gap-8 md:text-right font-sans text-[10px] tracking-zissou uppercase text-lucas-slate">
                    <div className="flex flex-col space-y-1">
                      <span>Format</span>
                      <span className="text-lucas-cream">{film.format}</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <span>Index</span>
                      <span className="text-lucas-cream">Vol. 0{index + 1}</span>
                    </div>
                  </div>
                </div>
                
              </motion.div>
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
