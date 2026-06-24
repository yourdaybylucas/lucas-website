import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, MapPin, Plus } from 'lucide-react';

const siteUrl = 'https://www.yourdaybylucas.com';
const analogLabUrl = `${siteUrl}/analog-lab`;
const businessName = 'Your Day By Lucas';
const brandName = 'LUCAS : Wedding Filmmaker';
const logoUrl = `${siteUrl}/logos/Logo%20LUCAS%20Transparent.png`;
const socialImageUrl = `${siteUrl}/opengraph-image.png`;
const title = 'Super 8 Wedding Videographer Ontario | LUCAS';
const description =
  'Ontario Super 8 wedding videographer based in Guelph, serving Toronto, Hamilton, Niagara, Waterloo, Muskoka, and beyond with real Kodak 8mm film.';

const filmFrames = [
  { id: '01', src: '/videos/clip_08.mp4', label: 'morning light' },
  { id: '02', src: '/videos/clip_09.mp4', label: 'water and glass' },
  { id: '03', src: '/videos/clip_10cheers.mp4', label: 'raised glasses' },
  { id: '04', src: '/videos/clip_06.mp4', label: 'late light' },
];

const qualities = [
  {
    number: '01',
    title: 'imperfections',
    body: 'the grain, the flicker, the softness around the edges. it breathes, and it stays unforced.',
  },
  {
    number: '02',
    title: 'intention',
    body: 'a roll is short. every press of the trigger has to earn its place.',
  },
  {
    number: '03',
    title: 'tactility',
    body: 'actual celluloid moving through an actual camera. light recorded onto something physical.',
  },
  {
    number: '04',
    title: 'staying power',
    body: 'it looked good in 1974. it will probably look good in 2074. useful technology has a funny way of aging well.',
  },
];

const process = [
  {
    step: '01',
    title: 'the stock',
    body: 'kodak film is chosen around the light: brighter rooms, darker rooms, candlelight, and the little places where texture can stay honest.',
  },
  {
    step: '02',
    title: 'the camera',
    body: 'a small super 8 camera keeps the footprint quiet. i work in brief fragments so the analog footage stays attentive instead of everywhere.',
  },
  {
    step: '03',
    title: 'the lab',
    body: 'the exposed rolls go to a film lab for processing. this is where the grain, weave, and small analog evidence become part of the image.',
  },
  {
    step: '04',
    title: 'the scan',
    body: 'the scan comes back digital, then i cut it with restraint inside the final edit or as its own short analog piece.',
  },
];

const locations = [
  'Guelph',
  'Toronto',
  'Hamilton',
  'Niagara',
  'Waterloo',
  'Kitchener',
  'London',
  'Muskoka',
  'Prince Edward County',
  'Ottawa',
];

const serviceAreas = [
  {
    '@type': 'AdministrativeArea',
    name: 'Ontario',
  },
  ...locations.map((name) => ({
    '@type': 'Place',
    name,
  })),
];

const faqs = [
  {
    question: 'What makes Super 8 different from digital wedding video?',
    answer:
      'Super 8 is real motion-picture film. It has visible grain, soft colour, flicker, gate weave, and a finite roll length, which gives the footage a physical texture digital video does not naturally have.',
  },
  {
    question: 'Do you offer Super 8 wedding films across Ontario?',
    answer:
      'Yes. I am based in Guelph and work across Ontario, including Toronto, Hamilton, Niagara, Waterloo, Muskoka, Prince Edward County, London, Ottawa, and nearby regions.',
  },
  {
    question: 'Can Super 8 be added to a digital wedding film?',
    answer:
      'Yes. Super 8 pairs naturally with digital coverage when you want the full shape of the day and the distinct texture of analog film.',
  },
  {
    question: 'How long is a Super 8 wedding film?',
    answer:
      'The Analog collection includes a short Super 8mm film. It is intentionally concise, built from the best real-film fragments rather than stretched beyond what the medium does well.',
  },
];

const analogJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: businessName,
      alternateName: brandName,
      inLanguage: 'en-CA',
      publisher: {
        '@id': `${siteUrl}/#business`,
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#business`,
      name: businessName,
      alternateName: brandName,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
      image: socialImageUrl,
      description:
        'Lucas Bulger is a Guelph, Ontario wedding filmmaker offering digital and Super 8mm wedding films across Ontario and worldwide.',
      telephone: '+1-519-240-1891',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Guelph',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
      areaServed: serviceAreas,
      founder: {
        '@id': `${siteUrl}/#lucas-bulger`,
      },
      sameAs: [
        'https://www.instagram.com/yourdaybylucas/',
        'https://www.tiktok.com/@yourdaybylucas',
        'https://www.youtube.com/channel/UCzxBX7qRbMssCqBtgd4ndQw',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#lucas-bulger`,
      name: 'Lucas Bulger',
      jobTitle: 'Wedding filmmaker and Super 8 wedding videographer',
      url: siteUrl,
      worksFor: {
        '@id': `${siteUrl}/#business`,
      },
      homeLocation: {
        '@type': 'Place',
        name: 'Guelph, Ontario',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${analogLabUrl}#webpage`,
      url: analogLabUrl,
      name: title,
      headline: 'Super 8 wedding videographer in Ontario',
      description,
      inLanguage: 'en-CA',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${analogLabUrl}#service`,
      },
      mainEntity: {
        '@id': `${analogLabUrl}#service`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: socialImageUrl,
        width: 1200,
        height: 630,
      },
      breadcrumb: {
        '@id': `${analogLabUrl}#breadcrumb`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${analogLabUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Analog Lab',
          item: analogLabUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${analogLabUrl}#service`,
      name: 'Super 8 Wedding Videography in Ontario',
      alternateName: [
        'Super 8 wedding video Ontario',
        'Super 8mm wedding film Ontario',
        'Analog wedding videography Ontario',
      ],
      serviceType: 'Super 8 wedding videography',
      category: 'Wedding videography',
      url: analogLabUrl,
      description,
      provider: {
        '@id': `${siteUrl}/#business`,
      },
      areaServed: serviceAreas,
      audience: {
        '@type': 'Audience',
        audienceType: 'Ontario couples planning a wedding',
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${siteUrl}/#contact`,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Super 8 wedding film collections',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'The Analog',
            url: `${siteUrl}/collections`,
            itemOffered: {
              '@type': 'Service',
              name: 'The Analog wedding film collection',
              description:
                'Digital wedding film coverage with genuine Kodak Super 8mm film.',
            },
          },
          {
            '@type': 'Offer',
            name: 'Extra Super 8mm roll',
            url: `${siteUrl}/collections`,
            itemOffered: {
              '@type': 'Service',
              name: 'Additional Super 8mm film coverage',
              description:
                'Additional Super 8mm film coverage may be available by inquiry.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${analogLabUrl}#faq`,
      mainEntityOfPage: {
        '@id': `${analogLabUrl}#webpage`,
      },
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  applicationName: businessName,
  authors: [{ name: 'Lucas Bulger', url: siteUrl }],
  creator: 'Lucas Bulger',
  publisher: businessName,
  category: 'Wedding videography',
  keywords: [
    'super 8 wedding videographer ontario',
    'super 8 wedding video ontario',
    'super 8 wedding videographer toronto',
    'super 8 wedding video toronto',
    'super 8 wedding film ontario',
    'super 8mm wedding film',
    'super 8mm wedding videographer',
    'kodak super 8 wedding film',
    'analog wedding videographer ontario',
    'ontario wedding videographer',
    'guelph wedding filmmaker',
    'muskoka wedding videographer super 8',
    'prince edward county wedding videographer',
  ],
  alternates: {
    canonical: '/analog-lab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title,
    description,
    url: analogLabUrl,
    siteName: businessName,
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: 'Super 8 wedding videographer in Ontario by LUCAS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [socialImageUrl],
  },
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Guelph, Ontario',
    ICBM: '43.5448, -80.2482',
  },
};

export default function AnalogLabPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(analogJsonLd) }}
      />

      <main className="bg-lucas-cream text-lucas-navy overflow-hidden">
        <section className="relative min-h-screen border-b border-lucas-navy/35 px-6 pb-20 pt-32 md:pb-24 md:pt-36">
          <div className="absolute inset-0 bg-grain opacity-[0.16] mix-blend-multiply pointer-events-none" />

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="mb-8 flex items-center gap-4 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                <span className="h-px w-12 bg-lucas-orange" />
                <span>analog lab // ontario</span>
              </div>

              <h1 className="font-sans text-[2.7rem] font-bold uppercase leading-[0.95] tracking-normal text-lucas-navy sm:text-6xl sm:leading-[0.92] xl:text-[4.35rem] 2xl:text-[4.75rem]">
                Super 8 wedding videographer in Ontario
              </h1>

              <div className="mt-8 max-w-xl border-y border-lucas-navy/35 py-7">
                <p className="font-serif text-2xl italic leading-[1.25] text-lucas-navy md:text-3xl">
                  real film, finite rolls, a little bit of dust in the machine. the good kind.
                </p>
                <p className="mt-6 max-w-md font-serif text-lg italic leading-relaxed text-lucas-navy/75">
                  i love super 8 because it refuses to be too clean. it makes the record feel physical,
                  imperfect, warm, and very much alive.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 border border-lucas-navy bg-lucas-navy px-7 py-4 font-sans text-xs font-medium lowercase text-lucas-cream transition-colors duration-slow hover:bg-transparent hover:text-lucas-navy"
                >
                  inquire about the day
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-slow group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center border border-lucas-navy/30 px-7 py-4 font-sans text-xs font-medium lowercase text-lucas-navy transition-colors duration-slow hover:border-lucas-navy hover:bg-lucas-navy hover:text-lucas-cream"
                >
                  view collections
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative border border-lucas-navy/45 bg-lucas-sage/20 p-3 shadow-sm md:p-5">
                <Plus
                  className="absolute -left-2 -top-2 h-4 w-4 text-lucas-navy"
                  aria-hidden="true"
                  strokeWidth={1.4}
                />
                <Plus
                  className="absolute -bottom-2 -right-2 h-4 w-4 text-lucas-navy"
                  aria-hidden="true"
                  strokeWidth={1.4}
                />

                <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_104px]">
                  <div className="relative aspect-[4/3] overflow-hidden border border-lucas-navy/45 bg-lucas-navy">
                    <video
                      src="/videos/clip_08.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover opacity-90 grayscale-[10%] contrast-[1.08] saturate-[0.85]"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between border-t border-lucas-cream/40 pt-3 font-sans text-[9px] uppercase tracking-zissou text-lucas-cream/80">
                      <span>Kodak 500T</span>
                      <span>Frame 02415709</span>
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

                <div className="mt-3 grid grid-cols-4 gap-1 border border-lucas-navy/45 bg-lucas-navy p-2">
                  {filmFrames.map((frame) => (
                    <div
                      key={frame.id}
                      className="group relative aspect-[4/3] overflow-hidden border border-lucas-cream/10 bg-lucas-cream/10"
                    >
                      <video
                        src={frame.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover opacity-85 transition duration-slow group-hover:scale-105 group-hover:opacity-100"
                        aria-label={frame.label}
                      />
                      <span className="absolute bottom-1 left-1 font-sans text-[8px] uppercase tracking-widest text-lucas-cream/70">
                        {frame.id}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-lucas-navy/35 px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-[90rem] gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-between lg:col-span-4">
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <Film className="h-5 w-5 text-lucas-orange" strokeWidth={1.5} />
                  <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                    why super 8mm
                  </span>
                </div>
                <h2 className="font-sans text-5xl font-bold uppercase leading-[0.95] tracking-normal text-lucas-navy md:text-6xl lg:text-7xl">
                  It feels different because it is different.
                </h2>
              </div>
              <p className="mt-8 max-w-sm font-serif text-2xl italic leading-snug text-lucas-slate">
                not a filter. not nostalgia cosplay. actual film moving through an actual camera.
              </p>
            </div>

            <div className="grid border-l border-t border-lucas-navy/35 md:grid-cols-2 lg:col-span-8 xl:grid-cols-4">
              {qualities.map((quality) => (
                <article
                  key={quality.number}
                  className="group flex min-h-[20rem] flex-col justify-between border-b border-r border-lucas-navy/35 bg-lucas-cream p-8 transition-colors duration-slow hover:bg-lucas-sage/15 md:min-h-[22rem]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-sans text-sm font-medium lowercase tracking-wide text-lucas-navy">
                      {quality.title}
                    </h3>
                    <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate transition-colors duration-slow group-hover:text-lucas-orange">
                      {quality.number}
                    </span>
                  </div>
                  <p className="font-serif text-xl italic leading-relaxed text-lucas-navy">
                    {quality.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-b border-lucas-navy bg-lucas-navy px-6 py-24 text-lucas-cream md:py-32">
          <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-overlay pointer-events-none" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="mb-8 flex items-center justify-between border-b border-lucas-slate/30 pb-5 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                  <span>the analog process</span>
                  <span>[ 04 steps ]</span>
                </div>
                <h2 className="font-sans text-5xl font-bold uppercase leading-none tracking-normal md:text-7xl lg:text-8xl">
                  From light to reel.
                </h2>
                <p className="mt-8 max-w-md font-serif text-2xl italic leading-snug text-lucas-cream/80">
                  i keep the process simple on the day and precise after it. super 8 has enough
                  character on its own. it does not need a heavy hand.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-10 border border-lucas-slate/30 bg-lucas-navy p-3">
                <div className="relative aspect-[4/3] overflow-hidden border border-lucas-slate/30 bg-lucas-cream/5">
                  <Image
                    src="/images/about/about_8.jpg"
                    alt="Lucas filming a quiet getting-ready moment"
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover grayscale-[12%] contrast-[1.03] saturate-[0.9]"
                  />
                  <div className="absolute inset-0 bg-grain opacity-25 mix-blend-overlay" />
                </div>
              </div>

              <div className="grid grid-cols-1 border-l border-t border-lucas-slate/30 bg-lucas-cream/5 sm:grid-cols-2">
                {process.map((item) => (
                  <article
                    key={item.step}
                    className="group flex min-h-64 flex-col justify-between border-b border-r border-lucas-slate/30 p-6 transition-colors duration-slow hover:bg-lucas-cream/10 md:min-h-72 md:p-8"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="font-sans text-sm font-medium lowercase tracking-wide text-lucas-cream">
                        {item.title}
                      </h3>
                      <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-orange">
                        [ {item.step} ]
                      </span>
                    </div>
                    <p className="mt-12 font-serif text-xl italic leading-relaxed text-lucas-cream/75">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-lucas-navy/35 px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-7xl overflow-hidden border border-lucas-navy/45 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="border-b border-lucas-navy/35 bg-lucas-sage/20 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <div className="mb-8 flex items-center gap-4">
                <MapPin className="h-5 w-5 text-lucas-orange" strokeWidth={1.5} />
                <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                  rooted in ontario
                </span>
              </div>
              <h2 className="font-sans text-4xl font-bold uppercase leading-none tracking-normal md:text-5xl lg:text-6xl">
                Guelph based. Ontario wide.
              </h2>
              <p className="mt-8 max-w-md font-serif text-2xl italic leading-snug text-lucas-navy/80">
                i work close to home and across the province. from city venues to tented fields and
                lakeside weekends.
              </p>
            </div>

            <div className="grid grid-cols-2 border-lucas-navy/20 md:grid-cols-5">
              {locations.map((location, index) => (
                <div
                  key={location}
                  className="flex min-h-32 flex-col justify-between border-b border-r border-lucas-navy/35 p-5"
                >
                  <span className="font-sans text-[10px] text-lucas-slate">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-navy">
                    {location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-6 border-b border-lucas-navy/20 pb-6 md:flex-row md:items-end">
              <div>
                <h2 className="font-sans text-4xl font-bold uppercase tracking-normal md:text-6xl">
                  Visual Archive
                </h2>
                <p className="mt-3 font-serif text-xl italic text-lucas-navy/75">
                  frames, movement, texture. useful evidence, basically.
                </p>
              </div>
              <Link
                href="/journal"
                className="group inline-flex w-fit items-center gap-3 font-sans text-[10px] uppercase tracking-zissou text-lucas-orange"
              >
                view recent work
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-slow group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="border border-lucas-navy/45 bg-lucas-navy p-2 text-lucas-cream md:p-3">
              <div className="mb-2 grid grid-cols-3 border border-lucas-cream/15 font-sans text-[8px] uppercase tracking-zissou text-lucas-cream/60">
                <span className="border-r border-lucas-cream/15 px-3 py-2">contact sheet</span>
                <span className="border-r border-lucas-cream/15 px-3 py-2 text-center">
                  kodak fragments
                </span>
                <span className="px-3 py-2 text-right">ontario</span>
              </div>

              <div className="grid grid-cols-2 gap-px border border-lucas-cream/15 bg-lucas-cream/15 md:grid-cols-4">
                {filmFrames.map((frame, index) => (
                  <div key={frame.id} className="group bg-lucas-navy p-2">
                    <div className="relative aspect-[4/3] overflow-hidden border border-lucas-cream/15 bg-lucas-cream/5">
                      <video
                        src={frame.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                        aria-label={frame.label}
                      />
                      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay" />
                      <div className="absolute inset-0 bg-lucas-navy/0 transition-colors duration-slow group-hover:bg-lucas-navy/10" />
                      <div className="absolute inset-x-0 top-0 flex justify-between border-b border-lucas-cream/20 bg-lucas-navy/75 px-3 py-2 font-sans text-[8px] uppercase tracking-zissou text-lucas-cream/75">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <span>{frame.label}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-3 font-sans text-[8px] uppercase tracking-zissou text-lucas-cream/60">
                      <span>frame_{frame.id}</span>
                      <span>super 8</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-lucas-navy/35 bg-lucas-sage/10 px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="mb-8 flex items-center justify-between border-b border-lucas-navy/25 pb-5 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                  <span>analog notes</span>
                  <span>[ faq ]</span>
                </div>
                <h2 className="font-sans text-4xl font-bold uppercase leading-none tracking-normal md:text-5xl lg:text-6xl">
                  Practical Notes
                </h2>
                <p className="mt-6 max-w-sm font-serif text-2xl italic leading-snug text-lucas-slate">
                  the unfussy answers you usually need before deciding whether analog belongs in the
                  day.
                </p>
              </div>
            </div>

            <div className="border-t border-lucas-navy/35 lg:col-span-8">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-lucas-navy/35 py-8 md:py-9"
                >
                  <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-5 font-sans text-sm font-medium lowercase tracking-wide text-lucas-navy md:gap-8">
                    <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{faq.question}</span>
                    <span className="text-lg leading-none text-lucas-orange transition-transform duration-slow group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-6 max-w-4xl pl-11 font-serif text-2xl italic leading-relaxed text-lucas-slate md:pl-[4.25rem] md:text-[1.7rem]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl overflow-hidden border border-lucas-navy bg-lucas-navy text-lucas-cream lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative p-8 md:p-12 lg:p-16">
              <Plus
                className="absolute left-4 top-4 h-4 w-4 text-lucas-cream/30"
                aria-hidden="true"
                strokeWidth={1.4}
              />
              <div className="mb-10 flex items-center justify-between border-b border-lucas-slate/30 pb-5 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                <span>analog lab // inquire</span>
                <span>kodak + digital</span>
              </div>
              <h2 className="max-w-3xl font-sans text-5xl font-bold uppercase leading-none tracking-normal md:text-7xl lg:text-8xl">
                Let&apos;s make something that feels held.
              </h2>
              <p className="mt-8 max-w-xl font-serif text-2xl italic leading-snug text-lucas-cream/75">
                if super 8 is the texture you keep returning to, tell me what you both have in mind. i
                will reply with availability, collection details, and honest next steps.
              </p>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-3 border border-lucas-cream bg-lucas-cream px-7 py-4 font-sans text-xs font-medium lowercase text-lucas-navy transition-colors duration-slow hover:border-lucas-orange hover:bg-transparent hover:text-lucas-cream"
                >
                  inquire about the day
                  <ArrowRight className="h-3.5 w-3.5 text-lucas-orange transition-transform duration-slow group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center border border-lucas-slate/40 px-7 py-4 font-sans text-xs font-medium lowercase text-lucas-cream transition-colors duration-slow hover:border-lucas-cream"
                >
                  view collections
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] border-t border-lucas-slate/30 lg:border-l lg:border-t-0">
              <Image
                src="/images/img1.JPG"
                alt="Lucas holding a camera in soft motion blur"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover grayscale contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-lucas-navy/20 mix-blend-multiply" />
              <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-lucas-cream/40" />
              <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-lucas-cream/40" />
              <div className="absolute inset-x-6 bottom-6 border-t border-lucas-cream/40 pt-4 font-sans text-[9px] uppercase tracking-zissou text-lucas-cream/80">
                one person. one camera bag. several tiny rolls of film.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
