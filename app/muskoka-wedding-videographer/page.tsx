import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CinematicPlayer from '@/components/CinematicPlayer';
import { journalEntries } from '@/data/journal';
import { MUSKOKA_FEATURED_SLUGS, MUSKOKA_HERO, MUSKOKA_PAGE_PATH } from '@/data/muskoka';

const title = 'Muskoka Wedding Videographer | Digital + Super 8 | LUCAS';
const description =
  'Muskoka wedding videographer Lucas Bulger. Honest digital and Super 8 wedding films at Windermere House and Port Cunnington Lodge. No Muskoka travel fee.';
const pageUrl = `https://www.yourdaybylucas.com${MUSKOKA_PAGE_PATH}`;
const featuredFilms = MUSKOKA_FEATURED_SLUGS.map((slug) => {
  const film = journalEntries.find((entry) => entry.slug === slug);
  if (!film) throw new Error(`Missing Muskoka journal entry: ${slug}`);
  return film;
});

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: MUSKOKA_PAGE_PATH },
  openGraph: {
    title,
    description,
    type: 'website',
    url: pageUrl,
    siteName: 'LUCAS : Wedding Filmmaker',
    locale: 'en_CA',
    images: [{ url: MUSKOKA_HERO.src, alt: MUSKOKA_HERO.alt, width: MUSKOKA_HERO.width, height: MUSKOKA_HERO.height }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [MUSKOKA_HERO.src],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: 'en-CA',
      mainEntity: { '@id': `${pageUrl}#service` },
      author: { '@id': 'https://www.yourdaybylucas.com/about#lucas-bulger' },
      relatedLink: featuredFilms.map((film) => `https://www.yourdaybylucas.com/journal/${film.slug}`),
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Muskoka wedding videography',
      serviceType: 'Digital and Super 8 wedding videography',
      url: pageUrl,
      areaServed: { '@type': 'Place', name: 'Muskoka, Ontario, Canada' },
      provider: { '@id': 'https://www.yourdaybylucas.com/about#lucas-bulger' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.yourdaybylucas.com/about#lucas-bulger',
      name: 'Lucas Bulger',
      url: 'https://www.yourdaybylucas.com/about',
      image: 'https://www.yourdaybylucas.com/images/muskoka/lucas-on-the-water.webp',
      homeLocation: { '@type': 'Place', name: 'Guelph, Ontario, Canada' },
    },
  ],
};

export default function MuskokaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      <div className="bg-lucas-cream text-lucas-navy">
        <section className="px-6 pb-20 pt-36 md:px-12 md:pb-32 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-10 md:mb-16">
              <span className="block font-sans text-[clamp(3.5rem,10.5vw,9rem)] font-bold uppercase leading-[0.95] tracking-[-0.035em]">
                Muskoka{' '}
              </span>
              <span className="mt-4 block font-serif text-3xl italic leading-tight md:mt-5 md:text-5xl">
                wedding videographer
              </span>
            </h1>

            <div className="w-full overflow-hidden bg-lucas-navy/5">
              <Image
                src={MUSKOKA_HERO.src}
                alt={MUSKOKA_HERO.alt}
                width={MUSKOKA_HERO.width}
                height={MUSKOKA_HERO.height}
                priority
                sizes="(max-width: 767px) calc(160vw - 77px), (max-width: 1376px) calc(100vw - 96px), 1280px"
                className="h-auto w-full origin-[62%_64%] scale-[1.6] md:scale-100"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="muskoka-films" className="bg-lucas-navy px-6 py-20 text-lucas-cream md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <h2 id="muskoka-films" className="mb-12 font-serif text-4xl leading-tight md:mb-20 md:text-6xl">
              a few days at the lake.
            </h2>

            <div className="grid gap-16 md:grid-cols-2 md:gap-12">
              {featuredFilms.map((film) => (
                <article key={film.slug}>
                  <CinematicPlayer videoId={film.primaryVideo.id} altText={film.primaryVideo.title} />
                  <div className="mt-6 flex items-start justify-between gap-4 md:mt-8">
                    <div>
                      <h3 className="font-serif text-3xl italic md:text-4xl">
                        <Link href={`/journal/${film.slug}`} className="hover:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-cream">
                          {film.title}
                        </Link>
                      </h3>
                      <p className="mt-3 font-sans text-[10px] uppercase leading-relaxed tracking-zissou text-lucas-cream/70">
                        {film.place.venueId ? (
                          <Link href={`/spaces/${film.place.venueId}`} className="hover:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-cream">
                            {film.place.name}
                          </Link>
                        ) : film.place.name}
                      </p>
                    </div>
                    <Link
                      href={`/journal/${film.slug}`}
                      aria-label={`View ${film.title}’s wedding journal`}
                      className="flex min-h-11 min-w-11 shrink-0 items-center justify-center hover:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-cream"
                    >
                      <ArrowUpRight size={22} strokeWidth={1.25} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="muskoka-lucas" className="px-6 py-24 md:px-12 md:py-40">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            <Image
              src="/images/muskoka/lucas-on-the-water.webp"
              alt="Lucas on a boat in Muskoka, with a camera strap around his neck, photographed on film"
              width={1512}
              height={1002}
              sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1248px) 45vw, 528px"
              className="h-auto w-full"
            />

            <div>
              <h2 id="muskoka-lucas" className="font-serif text-4xl leading-[1.15] md:text-5xl">
                my favourite place to be.
              </h2>
              <div className="mt-8 space-y-5 font-serif text-xl leading-relaxed text-lucas-navy/90">
                <p>
                  i grew up spending summers in muskoka, and it’s still my favourite place to be
                  when the weather turns warm. especially on the water.
                </p>
                <p>
                  there’s an ease to weddings here that i love. a little dressed up, a little
                  barefoot, with time for everyone to settle in and enjoy a few days away together.
                  i make digital and super 8 films that bring a little of that feeling home.
                </p>
              </div>
              <p className="mt-8 font-serif text-2xl italic">— lucas</p>
              <p className="mt-8 font-sans text-xs leading-relaxed">
                based in guelph. no travel fee for muskoka weddings.
              </p>
            </div>
          </div>
        </section>

        <div className="px-6 md:px-12">
          <Image
            src="/images/muskoka/lake-and-islands-aerial-final.webp"
            alt="Aerial view of a Muskoka lake winding between wooded islands and cottage-lined shores"
            width={2400}
            height={1017}
            sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1376px) calc(100vw - 96px), 1280px"
            className="mx-auto h-auto w-full max-w-7xl"
          />
        </div>

        <section aria-labelledby="muskoka-inquire" className="px-6 py-20 text-center md:px-12 md:py-28">
          <h2 id="muskoka-inquire" className="font-serif text-5xl leading-tight md:text-7xl">
            see you at the lake.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <Link href="/#contact" className="lucas-button px-10 py-4 font-sans text-[10px] uppercase tracking-zissou">
              Inquire
            </Link>
            <Link href="/collections" className="font-sans text-[10px] uppercase tracking-zissou hover:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-navy">
              View collections
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
