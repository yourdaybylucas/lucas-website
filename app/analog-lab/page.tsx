import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Film, Plus } from 'lucide-react';
import AnalogHeroMedia from './analog-hero-media';
import FinishedFilms from './finished-films';

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
        <section className="relative min-h-screen px-6 pb-20 pt-32 md:pb-24 md:pt-36">
          <div className="absolute inset-0 bg-grain opacity-[0.16] mix-blend-multiply pointer-events-none" />

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-x-12">
            <div className="min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end">
              <div className="mb-8 flex items-center gap-4 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                <span className="h-px w-12 bg-lucas-orange" />
                <span>analog lab // ontario</span>
              </div>

              <h1 className="font-sans text-[2.7rem] font-bold uppercase leading-[0.95] tracking-normal text-lucas-navy text-balance sm:text-6xl sm:leading-[0.92] xl:text-[4.35rem] 2xl:text-[4.75rem]">
                super 8 wedding films in ontario.
              </h1>

              <p className="mt-6 max-w-md font-serif text-xl leading-relaxed text-lucas-navy/75">
                i film on real kodak super 8 alongside digital. the rolls are developed, scanned,
                and edited into a film you can watch and share.
              </p>
            </div>

            <div className="min-w-0 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
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

            <div className="min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="lucas-button lucas-button--filled inline-flex items-center justify-center gap-3 px-7 py-4 font-sans text-xs font-medium lowercase"
                >
                  inquire about the day
                </Link>
                <Link
                  href="/collections"
                  className="lucas-button inline-flex items-center justify-center px-7 py-4 font-sans text-xs font-medium lowercase"
                >
                  view collections
                </Link>
              </div>
              <Link
                href="#finished-films"
                className="group mt-6 inline-flex w-fit items-center gap-3 font-sans text-[10px] uppercase tracking-zissou text-lucas-orange"
              >
                watch the films
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-slow group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </section>

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="flex items-center gap-4 self-start lg:col-span-4">
              <Film className="h-5 w-5 shrink-0 text-lucas-orange" strokeWidth={1.5} aria-hidden="true" />
              <h2 className="font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                why super 8mm
              </h2>
            </div>
            <p className="max-w-3xl font-serif text-2xl leading-relaxed text-lucas-navy md:text-3xl lg:col-span-8">
              super 8 is real motion-picture film, with visible grain and a softer image than
              digital. each roll is short, so i choose carefully when to press record.
            </p>
          </div>
        </section>

        <FinishedFilms />

        <section className="relative bg-lucas-navy px-6 py-16 text-lucas-cream md:py-24">
          <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-overlay pointer-events-none" />
          <div className="relative mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div>
                <div className="mb-6 flex items-center justify-between font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                  <span>the analog process</span>
                  <span>[ 04 steps ]</span>
                </div>
                <h2 className="max-w-md font-sans text-3xl font-bold uppercase leading-tight tracking-normal text-balance md:text-4xl">
                  FROM LIGHT TO REEL.
                </h2>
                <p className="mt-6 max-w-md font-serif text-xl leading-relaxed text-lucas-cream/85">
                  i reach for super 8 when the room starts moving: first looks, cocktail hour
                  laughter, hands, walking, dancing, the small rush of people being fully in it. the
                  slower shutter gives motion a little smear, which is a technical way of saying it
                  feels alive.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-lucas-slate/30 bg-lucas-navy p-2 md:p-3">
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

            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:col-span-12">
              {process.map((item) => (
                <article key={item.step}>
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-[10px] uppercase tracking-zissou text-lucas-orange">
                      [ {item.step} ]
                    </span>
                    <h3 className="font-sans text-sm font-medium lowercase tracking-wide text-lucas-cream">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl font-serif text-xl leading-relaxed text-lucas-cream/85">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-lucas-navy px-4 pb-12 text-lucas-cream md:px-6 md:pb-16">
          <div className="mx-auto max-w-[90rem]">
            <div className="mb-2 grid grid-cols-3 border border-lucas-cream/15 font-sans text-[8px] uppercase tracking-zissou text-lucas-cream/60">
              <span className="border-r border-lucas-cream/15 px-3 py-2">visual archive</span>
              <span className="border-r border-lucas-cream/15 px-3 py-2 text-center">
                four fragments
              </span>
              <span className="px-3 py-2 text-right">ontario</span>
            </div>

            <div className="grid h-[360px] grid-cols-2 gap-px border border-lucas-cream/15 bg-lucas-cream/15 sm:h-[400px] md:h-[220px] md:grid-cols-4 lg:h-[240px] xl:h-[260px]">
              {archiveFrames.map((frame) => (
                <div key={frame.id} className="group flex min-h-0 flex-col bg-lucas-navy p-2">
                  <div className="relative min-h-0 flex-1 overflow-hidden border border-lucas-cream/15 bg-lucas-cream/5">
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
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div className="mb-6 flex items-center justify-between font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                  <span>analog notes</span>
                  <span>[ faq ]</span>
                </div>
                <h2 className="font-sans text-3xl font-bold uppercase leading-tight tracking-normal md:text-4xl">
                  PRACTICAL NOTES
                </h2>
                <p className="mt-5 max-w-sm font-serif text-xl leading-relaxed text-lucas-navy/75">
                  rolls, timing, texture, and how super 8 fits into the final film.
                </p>
              </div>
            </div>

            <div className="border-t border-lucas-navy/35 lg:col-span-8">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-lucas-navy/35 py-5 md:py-6"
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
                  <p className="mt-4 max-w-3xl pl-11 font-serif text-xl leading-relaxed text-lucas-navy/75 md:pl-[4.25rem]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.5fr_0.75fr] lg:gap-16">
            <div>
              <div className="mb-6 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
                <span>analog lab // inquire</span>
              </div>
              <h2 className="max-w-xl font-sans text-3xl font-bold uppercase leading-tight tracking-normal text-balance md:text-4xl">
                LET&apos;S MAKE SOMETHING THAT FEELS.
              </h2>
              <p className="mt-6 max-w-xl font-serif text-xl leading-relaxed text-lucas-navy/75">
                if super 8 speaks to you, tell me what you both have in mind. i will reply with
                availability, collection details, and next steps.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="lucas-button lucas-button--filled inline-flex items-center justify-center gap-3 px-7 py-4 font-sans text-xs font-medium lowercase"
                >
                  inquire about the day
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/collections"
                  className="lucas-button inline-flex items-center justify-center px-7 py-4 font-sans text-xs font-medium lowercase"
                >
                  view collections
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-lucas-navy/25 lg:justify-self-end">
              <Image
                src="/images/about/about_1.2.JPG"
                alt="Lucas Bulger"
                fill
                sizes="(max-width: 327px) calc(100vw - 48px), 280px"
                className="object-cover object-right"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
