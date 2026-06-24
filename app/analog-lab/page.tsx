import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, MapPin, Plus } from 'lucide-react';
import AnalogHeroMedia from './analog-hero-media';

const siteUrl = 'https://www.yourdaybylucas.com';
const analogLabUrl = `${siteUrl}/analog-lab`;
const businessName = 'Your Day By Lucas';
const brandName = 'LUCAS : Wedding Filmmaker';
const logoUrl = `${siteUrl}/logos/Logo%20LUCAS%20Transparent.png`;
const socialImageUrl = `${siteUrl}/opengraph-image.png`;
const title = 'Super 8 Wedding Videographer Ontario | LUCAS';
const description =
  'Ontario Super 8 wedding videographer based in Guelph, serving Toronto, Hamilton, Niagara, Waterloo, Muskoka, and beyond with real Kodak 8mm film.';

const heroFrames = [
  {
    id: '01',
    src: '/videos/super-8-old-mill-dinner.m4v',
    type: 'video/mp4',
    label: 'candlelit dinner',
  },
  { id: '02', src: '/videos/super-8-hero-02.m4v', type: 'video/mp4', label: 'analog fragment' },
  { id: '03', src: '/videos/super-8-hero-03.m4v', type: 'video/mp4', label: 'analog fragment' },
  { id: '04', src: '/videos/super-8-hero-04.m4v', type: 'video/mp4', label: 'analog fragment' },
  { id: '05', src: '/videos/super-8-hero-05.m4v', type: 'video/mp4', label: 'analog fragment' },
];

const archiveFrames = [
  { id: '01', src: '/videos/super-8-archive-01.m4v', type: 'video/mp4', label: 'Grand Entrance' },
  { id: '02', src: '/videos/super-8-archive-02.m4v', type: 'video/mp4', label: 'Reception Details' },
  { id: '03', src: '/videos/super-8-archive-03.m4v', type: 'video/mp4', label: 'Recessional' },
  { id: '04', src: '/videos/super-8-archive-05.m4v', type: 'video/mp4', label: 'First Look' },
];

const qualities = [
  {
    number: '01',
    title: 'imperfections',
    body: 'the grain, the flicker, the softness around the edges. light blooms, shadows soften, and the image feels less exact in the best way.',
  },
  {
    number: '02',
    title: 'scarcity',
    body: 'a short roll forces a decision. i have to read the room in real time and ask what actually deserves film: the movement, the emotion, the small pieces that will still matter later.',
  },
  {
    number: '03',
    title: 'tactility',
    body: 'a cartridge clicks in. a short roll moves through the camera at eighteen frames a second. tiny photographs becoming motion before they ever become a file.',
  },
  {
    number: '04',
    title: 'staying power',
    body: 'it looked good in 1974. it will look good 40 years from now, when you are watching it back.',
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
    body: 'a small super 8 camera keeps the footprint quiet. when it makes sense, i mount it to my digital camera, so the same moment can live in two textures at once.',
  },
  {
    step: '03',
    title: 'the lab',
    body: 'the exposed rolls go to a film lab for processing. this is where the grain, weave, and small analog evidence become part of the image.',
  },
  {
    step: '04',
    title: 'the scan',
    body: 'the scan comes back digital, then i cut it with restraint: sometimes as its own short analog piece, sometimes woven into the highlight film beside digital footage.',
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
      'Yes. I often weave my favorite Super 8 fragments into the main highlight film. Usually, it is a small but noticeable part: enough to change the texture, not so much that it overpowers or distracts. Every collection that includes Super 8 also includes a dedicated Super 8 film with all of the Super 8 footage I get.',
  },
  {
    question: 'Does filming Super 8 mean missing digital footage?',
    answer:
      'No. When it makes sense, I mount the Super 8 camera to my digital camera, so the same moment can live in two textures at once.',
  },
  {
    question: 'Do people notice the Super 8 camera?',
    answer:
      'Yes. People notice it in a good way. The camera is small and discreet, and the soft whirr of the film is part of the charm. It adds a little texture to the room without pulling anyone out of the moment.',
  },
  {
    question: 'Who is Super 8 best for?',
    answer:
      'It tends to resonate with couples who value authenticity and have a keen eye for design. Honest, tactile, considered, but not too polished.',
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
                SUPER 8 WEDDING VIDEOGRAPHER IN ONTARIO
              </h1>

              <div className="mt-8 max-w-xl border-y border-lucas-navy/35 py-7">
                <p className="font-serif text-2xl italic leading-[1.25] text-lucas-navy md:text-3xl">
                  real film, finite rolls, a little bit of dust in the machine.
                </p>
                <p className="mt-6 max-w-md font-serif text-lg italic leading-relaxed text-lucas-navy/75">
                  in a world where everything is clean, sharp, and endlessly filmed, super 8 gives
                  the image a little resistance.
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

                <AnalogHeroMedia frames={heroFrames} />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-lucas-navy/35 px-6 py-16 md:py-32">
          <div className="mx-auto grid max-w-[90rem] gap-10 md:gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-between lg:col-span-4">
              <div>
                <div className="mb-6 flex items-center gap-4 md:mb-8">
                  <Film className="h-5 w-5 text-lucas-orange" strokeWidth={1.5} />
                  <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                    why super 8mm
                  </span>
                </div>
                <h2 className="font-sans text-5xl font-bold uppercase leading-[0.95] tracking-normal text-lucas-navy md:text-6xl lg:text-7xl">
                  IT FEELS DIFFERENT BECAUSE IT IS DIFFERENT.
                </h2>
              </div>
              <p className="mt-6 max-w-sm font-serif text-xl italic leading-snug text-lucas-slate md:mt-8 md:text-2xl">
                not a filter. actual film moving through an actual camera.
              </p>
            </div>

            <div className="grid border-l border-t border-lucas-navy/35 md:grid-cols-2 lg:col-span-8 xl:grid-cols-4">
              {qualities.map((quality) => (
                <article
                  key={quality.number}
                  className="group flex min-h-56 flex-col justify-between border-b border-r border-lucas-navy/35 bg-lucas-cream p-6 transition-colors duration-slow hover:bg-lucas-sage/15 md:min-h-[22rem] md:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-sans text-sm font-medium lowercase tracking-wide text-lucas-navy">
                      {quality.title}
                    </h3>
                    <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate transition-colors duration-slow group-hover:text-lucas-orange">
                      {quality.number}
                    </span>
                  </div>
                  <p className="mt-10 prose-soul italic text-lucas-navy md:mt-0">
                    {quality.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-b border-lucas-navy bg-lucas-navy px-6 py-16 text-lucas-cream md:py-32">
          <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-overlay pointer-events-none" />
          <div className="relative mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="mb-6 flex items-center justify-between border-b border-lucas-slate/30 pb-4 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate md:mb-8 md:pb-5">
                  <span>the analog process</span>
                  <span>[ 04 steps ]</span>
                </div>
                <h2 className="font-sans text-4xl font-bold uppercase leading-none tracking-normal md:text-7xl lg:text-8xl">
                  FROM LIGHT TO REEL.
                </h2>
                <p className="mt-6 max-w-md font-serif text-xl italic leading-snug text-lucas-cream/80 md:mt-8 md:text-2xl">
                  i reach for super 8 when the room starts moving: first looks, cocktail hour
                  laughter, hands, walking, dancing, the small rush of people being fully in it. the
                  slower shutter gives motion a little smear, which is a technical way of saying it
                  feels alive.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-6 border border-lucas-slate/30 bg-lucas-navy p-2 md:mb-10 md:p-3">
                <div className="relative aspect-[16/9] overflow-hidden border border-lucas-slate/30 bg-lucas-cream/5 md:aspect-[4/3]">
                  <Image
                    src="/images/analog-lab/super8-candlelit-dinner.jpg"
                    alt="Super 8 still of a candlelit wedding dinner"
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover object-left brightness-105 contrast-[1.04] saturate-[0.95]"
                  />
                  <div className="absolute inset-0 bg-grain opacity-25 mix-blend-overlay" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-4 border-t border-lucas-cream/45 bg-lucas-navy/55 px-3 py-2 font-sans text-[9px] uppercase tracking-zissou text-lucas-cream/90 backdrop-blur-[1px]">
                    <span>OLD MILL TORONTO</span>
                    <span>KODAK 500T</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 border-l border-t border-lucas-slate/30 bg-lucas-cream/5 sm:grid-cols-2">
                {process.map((item) => (
                  <article
                    key={item.step}
                    className="group border-b border-r border-lucas-slate/30 p-5 transition-colors duration-slow hover:bg-lucas-cream/10 sm:flex sm:min-h-64 sm:flex-col sm:justify-between md:min-h-72 md:p-8"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="font-sans text-sm font-medium lowercase tracking-wide text-lucas-cream">
                        {item.title}
                      </h3>
                      <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-orange">
                        [ {item.step} ]
                      </span>
                    </div>
                    <p className="mt-5 prose-soul italic text-lucas-cream/75 sm:mt-12">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-lucas-navy/35 px-6 py-16 md:py-28">
          <div className="mx-auto grid max-w-7xl overflow-hidden border border-lucas-navy/45 lg:grid-cols-[0.9fr_1.4fr]">
            <div className="border-b border-lucas-navy/35 bg-lucas-sage/20 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <div className="mb-8 flex items-center gap-4">
                <MapPin className="h-5 w-5 text-lucas-orange" strokeWidth={1.5} />
                <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                  rooted in ontario
                </span>
              </div>
              <h2 className="font-sans text-4xl font-bold uppercase leading-none tracking-normal md:text-5xl lg:text-6xl">
                GUELPH BASED. ONTARIO WIDE.
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

        <section className="px-6 py-16 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-6 border-b border-lucas-navy/20 pb-5 md:mb-12 md:flex-row md:items-end md:pb-6">
              <div>
                <h2 className="font-sans text-4xl font-bold uppercase tracking-normal md:text-6xl">
                  VISUAL ARCHIVE
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
                {archiveFrames.map((frame) => (
                  <div key={frame.id} className="group bg-lucas-navy p-2">
                    <div className="relative aspect-[4/3] overflow-hidden border border-lucas-cream/15 bg-lucas-cream/5">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        aria-label={frame.label}
                      >
                        <source src={frame.src} type={frame.type} />
                      </video>
                    </div>
                    <div className="mt-2 font-sans text-[8px] uppercase tracking-zissou text-lucas-cream/60">
                      <span>
                        {frame.id} {frame.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-lucas-navy/35 bg-lucas-sage/10 px-6 py-16 md:py-32">
          <div className="mx-auto grid max-w-[90rem] gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="mb-6 flex items-center justify-between border-b border-lucas-navy/25 pb-4 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate md:mb-8 md:pb-5">
                  <span>analog notes</span>
                  <span>[ faq ]</span>
                </div>
                <h2 className="font-sans text-4xl font-bold uppercase leading-none tracking-normal md:text-5xl lg:text-6xl">
                  PRACTICAL NOTES
                </h2>
                <p className="mt-5 max-w-sm font-serif text-xl italic leading-snug text-lucas-slate md:mt-6 md:text-2xl">
                  rolls, timing, texture, and how super 8 fits into the final film.
                </p>
              </div>
            </div>

            <div className="border-t border-lucas-navy/35 lg:col-span-8">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-lucas-navy/35 py-5 md:py-9"
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
                  <p className="mt-4 max-w-4xl pl-11 font-serif text-lg italic leading-relaxed text-lucas-slate md:mt-6 md:pl-[4.25rem] md:text-xl">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-32">
          <div className="mx-auto grid max-w-7xl overflow-hidden border border-lucas-navy bg-lucas-navy text-lucas-cream lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative p-6 md:p-12 lg:p-16">
              <Plus
                className="absolute left-4 top-4 h-4 w-4 text-lucas-cream/30"
                aria-hidden="true"
                strokeWidth={1.4}
              />
              <div className="mb-8 flex items-center justify-between border-b border-lucas-slate/30 pb-4 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate md:mb-10 md:pb-5">
                <span>analog lab // inquire</span>
              </div>
              <h2 className="max-w-3xl font-sans text-[2.45rem] font-bold uppercase leading-none tracking-normal sm:text-5xl md:text-6xl lg:text-7xl">
                LET&apos;S MAKE SOMETHING THAT FEELS.
              </h2>
              <p className="mt-6 max-w-xl font-serif text-xl italic leading-snug text-lucas-cream/75 md:mt-8 md:text-2xl">
                if super 8 speaks to you, tell me what you both have in mind. i will reply with
                availability, collection details, and next steps.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-12">
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

            <div className="relative min-h-[280px] border-t border-lucas-slate/30 md:min-h-[360px] lg:border-l lg:border-t-0">
              <Image
                src="/images/about/about_1.2.JPG"
                alt="Lucas Bulger"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover object-right"
              />
              <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-lucas-cream/40" />
              <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-lucas-cream/40" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
