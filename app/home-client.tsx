"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import CinematicPlayer from "@/components/CinematicPlayer";

const partners = [
  { name: "Wakefield Estate", url: "https://www.wakefieldestate.ca/" },
  { name: "The Birds Papaya", url: "https://www.instagram.com/thebirdspapaya/?hl=en" },
  { name: "The Modern Bride", url: "https://www.tmodernbride.com/" },
  { name: "Langdon Hall", url: "https://langdonhall.ca/" },
  { name: "Cruikston Park", url: "https://cruickstonpark.com/" },
  { name: "Clement & Co Events", url: "https://www.clementandcoevents.com/" },
  { name: "Wren House by Stella", url: "https://www.wrenhousebystella.ca/" },
  { name: "Samantha Nicholas", url: "https://www.samanthanicholas.ca/" },
  { name: "Jessii Vee", url: "https://www.instagram.com/jessiivee/?hl=en" },
  { name: "Olivia Dipede", url: "https://www.instagram.com/oliviadipede/?hl=en" },
  { name: "St. Marys", url: "https://www.stmaryswedding.ca/" },
  { name: "Elle by Stella", url: "https://www.ellebystella.ca/" },
];

const featuredFilms = [
  { id: "q2Qw5G4M0Lc", names: "Kristen + Frankie", locale: "Spencer's at the Waterfront", format: "Digital + Super 8mm" },
  { id: "KfOXk9GKan0", names: "Jenna + Clark", locale: "Whistle Bear Golf Club", format: "Digital" },
  { id: "kXRULOzL9AQ", names: "Olivia + Max", locale: "Paletta Mansion", format: "Digital" },
  { id: "f3L54oek57o", names: "Aalia + Joshua", locale: "Lune 1860", format: "Digital" }
];

// reordered for narrative weight
const loveLetters = [
  { name: "Kristen & Frankie", quote: "he had this amazing ability to be everywhere without ever being intrusive - capturing every genuine emotion, every tiny detail, and all the moments we never even saw happening." },
  { name: "Alex & Nick", quote: "what lucas created feels so different from a typical wedding video, in the absolute best way. it is artistic without ever feeling overly produced and emotional without feeling forced." },
  { name: "Megan & Mike", quote: "every look, every laugh, every detail of our day was documented so thoughtfully and artistically." },
  { name: "Billie Jo & Neil", quote: "somehow he is everywhere, but you never see him... lucas captured the warmth, the feel, the emotion." },
  { name: "Jessica & Brandon", quote: "the vibe of the video is completely tailored to brandon and i and who we are as people." },
  { name: "Hannah & Connor", quote: "such a calming presence... he blended in seamlessly." },
  { name: "Jessica & Chris", quote: "he really understood our personalities, which made it a perfect blend of humour and happiness." },
  { name: "Kevin & Melanie", quote: "his style is very natural and non-intrusive... able to capture the day authentically." },
  { name: "Eira & Sam", quote: "brought a sense of calm to the room... it was so fun to see ours come to life." },
  { name: "Rand & Mostafa", quote: "a wonderful human and an even more phenomenal artist." },
  { name: "Taylor & Joe", quote: "not only was he amazing to work with, but his talent and artistic eye are so clearly present in all of his work." },
  { name: "LQ Events", quote: "a kind, down to earth, and calming presence." },
  { name: "Rachel & Matt", quote: "he truly is a fly on the wall. he caught some beautiful candid moments that really captured the overall feeling." },
  { name: "Adele & Steve", quote: "he takes the time to get to know his client and to ensure visions align." },
  { name: "Daniela & Andrew", quote: "lucas is not just a videographer; he is a storyteller and true professional who turned our day into a masterpiece." }
];

const fadeUpContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Home() {
  // the tripwire setup
  const contactRef = useRef(null);
  const isContactInView = useInView(contactRef, { once: true, margin: "800px" });

  return (
    <main className="relative min-h-[200vh] bg-lucas-cream overflow-hidden">
      <h1 className="sr-only">Ontario Wedding Filmmaker</h1>

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
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-16 w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-5/12 relative flex justify-center mt-16 lg:mt-0"
          >
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
                i’m there to hang out and keep things grounded - capturing the honest moments, the laughter, the tears, and the feeling that lasts long after the day itself. 
              </p>
              <p>
                no crews. no scripts. just me.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUpItem}>
              <p className="font-serif text-2xl italic text-lucas-navy/80 mb-10">— lucas</p>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <Link 
                href="/about" 
                className="inline-block border border-lucas-navy text-lucas-navy px-10 py-4 font-sans text-xs tracking-zissou uppercase hover:bg-lucas-navy hover:text-lucas-cream transition-colors duration-300"
              >
                More About Me
              </Link>
            </motion.div>
          </motion.div>
          
        </div>
      </section>

      {/* the archive (featured films) */}
      <section id="films" className="relative z-10 bg-lucas-navy text-lucas-cream py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex justify-between items-end mb-24 border-b border-lucas-slate/20 pb-8">
            <h2 className="font-sans text-4xl md:text-6xl uppercase tracking-tight font-bold">
              The Archive
            </h2>
            <p className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase hidden md:block">
              Curated Works
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-24">
            {featuredFilms.map((film, index) => (
              <motion.div 
                key={film.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                className={`group flex-col w-full ${index >= 2 ? 'hidden md:flex' : 'flex'}`}
              >
                
                <CinematicPlayer videoId={film.id} altText={film.names} />

                <div className="mt-8 flex flex-col xl:flex-row justify-between xl:items-start gap-4 border-t border-lucas-slate/10 pt-6">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl italic text-lucas-cream">
                      {film.names}
                    </h3>
                  </div>
                  
                  <div className="flex gap-8 xl:text-right font-sans text-[10px] tracking-zissou uppercase text-lucas-slate">
                    <div className="flex flex-col space-y-1">
                      <span>Format</span>
                      <span className="text-lucas-cream">{film.format}</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <span>Locale</span>
                      <span className="text-lucas-cream">{film.locale}</span>
                    </div>
                  </div>
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* notes (the ledger) */}
      <section className="relative z-10 bg-lucas-cream py-32 px-6 md:px-12 border-t border-lucas-slate">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <h2 className="text-lucas-navy font-sans font-bold text-4xl uppercase tracking-normal">
              Their Words
            </h2>
            <span className="text-lucas-slate font-sans uppercase tracking-zissou text-xs">
              [ Archive of Feedback ]
            </span>
          </div>

          <motion.div 
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex overflow-x-auto border-l border-t border-lucas-slate snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {loveLetters.map((letter, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUpItem}
                className="flex-none w-[85vw] md:w-[400px] group border-r border-b border-lucas-slate p-8 hover:bg-lucas-sage/10 transition-colors duration-500 flex flex-col justify-between min-h-[320px] snap-start"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-lucas-navy font-sans uppercase tracking-zissou text-xs font-medium">
                      {letter.name}
                    </span>
                    <span className="text-lucas-slate font-sans uppercase tracking-zissou text-[10px]">
                      [ unlisted ]
                    </span>
                  </div>
                  <span className="text-lucas-slate font-sans text-xs">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="font-serif text-[1.125rem] leading-[1.75] text-lucas-navy italic">
                  "{letter.quote}"
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* the ledger (inquiry form) */}
      <section ref={contactRef} id="contact" className="relative z-10 bg-lucas-navy text-lucas-cream py-16 lg:py-40 px-6 overflow-hidden">
        
        {/* subtle analog grain overlay */}
        <div className="absolute inset-0 bg-grain opacity-[0.15] pointer-events-none mix-blend-overlay"></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 relative">
          
          {/* the vertical spine (desktop only) */}
          <div className="hidden lg:block absolute left-[41.666%] top-0 bottom-0 w-px bg-lucas-slate/10"></div>

         {/* the anchor (text column) */}
          <div className="lg:col-span-5 lg:pr-24 flex flex-col items-start text-left h-fit z-10">
            
            {/* inventory header */}
            <div className="flex items-center justify-between w-full border-b border-lucas-slate/20 pb-6 mb-8">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-lucas-orange"></span>
                <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">Availability</span>
              </div>
              <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase">[ 04 ]</span>
            </div>

            <h2 className="font-sans text-5xl md:text-6xl lg:text-[4.5rem] uppercase font-bold text-lucas-cream tracking-tight mb-4 lg:mb-8">
              INQUIRE.
            </h2>

            {/* hidden on mobile to pull the form up */}
            <p className="hidden lg:block font-serif text-xl md:text-2xl leading-[1.5] text-lucas-cream/80 lowercase italic mb-16">
              i only take on a limited number of weddings per year to ensure i can give every day my full focus. tell me about yours.
            </p>

            {/* scarcity / availability block */}
            <div className="hidden lg:flex flex-col gap-4 font-sans text-[10px] tracking-zissou uppercase text-lucas-slate w-full max-w-[320px]">
              <div className="flex justify-between border-b border-lucas-slate/10 pb-3">
                <span>2026</span>
                <span className="text-lucas-orange">At Capacity *</span>
              </div>
              <div className="flex justify-between border-b border-lucas-slate/10 pb-3">
                <span>2027</span>
                <span className="text-lucas-cream">Limited Availibility</span>
              </div>
              <div className="flex justify-between border-b border-lucas-slate/10 pb-3">
                <span>2028</span>
                <span className="text-lucas-cream">Open</span>
              </div>
              <div className="flex justify-between pb-3 border-b border-lucas-slate/10">
                <span>Location</span>
                <span className="text-lucas-cream">Ontario // Worldwide</span>
              </div>
              
              <div className="mt-2 text-[9px] tracking-wider text-lucas-slate/70 leading-relaxed normal-case lowercase font-sans">
                * fully commissioned for 2026, but please still reach out. i am always happy to check my waitlist or connect you with trusted peers.
              </div>
            </div>

          </div>
          {/* the dossier (form column) */}
          <div className="lg:col-span-7 lg:pl-24 w-full z-10 mt-4 lg:mt-0">
            
            {/* structural frame */}
            <div className="relative bg-[#111d27] p-2 md:p-8 border border-lucas-slate/5 shadow-2xl">
              
              {/* editorial crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-lucas-slate/30"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-lucas-slate/30"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-lucas-slate/30"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-lucas-slate/30"></div>

              {/* iframe locked to 750px height across all viewports */}
              <div className="w-full h-full min-h-[750px] overflow-hidden">
                {isContactInView ? (
                  <iframe 
                    src="https://app.lemlii.com/inquiry/your-day-by-lucas" 
                    className="w-full h-[750px] border-0 outline-none bg-transparent transition-opacity duration-1000 ease-in" 
                    title="commission lucas"
                    style={{ border: 'none', margin: 0, padding: 0 }}
                  />
                ) : (
                  // structural placeholder so the layout doesn't shift when it finally loads
                  <div className="w-full h-[700px] bg-[#111d27] flex flex-col items-center justify-center font-sans text-[10px] tracking-zissou uppercase text-lucas-slate/50">
                    <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full animate-pulse mb-3"></span>
                    [ establishing secure connection ... ]
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
