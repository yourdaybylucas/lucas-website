{/* about & philosophy */}
      <section id="about" className="relative z-10 flex min-h-screen items-center justify-center bg-lucas-cream px-6 py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Left: The Layered Portrait */}
          <div className="w-full md:w-5/12 relative mt-16 md:mt-0 px-4 md:px-8">
            {/* The Anchor Box */}
            <div className="relative aspect-square w-full max-w-[360px] mx-auto bg-lucas-slate/10">
              
              {/* Optional: The textured background image you uploaded */}
              <Image
                src="/images/Lucas Background Small.png"
                alt="Texture"
                fill
                className="object-cover opacity-60 mix-blend-multiply"
              />

              {/* Back Layer: Giant Typography */}
              {/* We use select-none so it acts purely as a graphic element */}
              <h2 className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 font-sans font-bold text-7xl md:text-[7rem] text-lucas-navy tracking-tight z-0 select-none">
                LUCAS
              </h2>

              {/* Front Layer: Transparent Subject */}
              {/* Breaking out of the box at the bottom and sides */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[120%] h-[120%] z-10 flex items-end justify-center pointer-events-none">
                <Image
                  src="/images/LUCAS image Transparent.png"
                  alt="Lucas Bulger"
                  width={500}
                  height={600}
                  className="object-contain object-bottom max-h-full drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: The Approach */}
          {/* Swapped the border for a cleaner, editorial margin */}
          <div className="w-full md:w-7/12 md:pl-12 flex flex-col justify-center">
            
            <div className="flex items-center gap-4 mb-8">
              <span className="w-2 h-2 rounded-full bg-lucas-orange"></span>
              <h2 className="font-sans text-xs tracking-zissou text-lucas-slate uppercase">
                the approach
              </h2>
            </div>

            <p className="font-serif text-3xl md:text-5xl leading-[1.3] text-lucas-navy mb-8">
              not a production. not content. just <span className="italic text-lucas-navy/80">easy company</span> and a keen eye.
            </p>
            
            <div className="font-sans text-base md:text-lg text-lucas-slate max-w-lg mb-10 leading-relaxed font-light space-y-6">
              <p>
                i'm there to hang out, keep things grounded, and collect the honest frames—bottling the sudden laughs, the heavy tears, and exactly how the day actually felt.
              </p>
              <p>
                no crews. no scripts. just me.
              </p>
            </div>
            
            <p className="font-serif text-2xl italic text-lucas-navy/80">— lucas</p>
          </div>
        </div>
      </section>
