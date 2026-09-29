import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CinematicPlayer from '@/components/CinematicPlayer';
import { journalEntries } from '@/data/journal';

const wedding = journalEntries.find((entry) => entry.slug === 'kristen-frankie-spencers');
const super8Video = journalEntries.find((entry) => entry.slug === 'the-analog-process')?.primaryVideo;

function formatRuntime(duration: string) {
  const match = /^PT(?:(\d+)M)?(?:(\d+)S)?$/.exec(duration);

  if (!match) {
    throw new Error(`Unsupported featured film duration: ${duration}`);
  }

  return `${match[1] ?? '0'}:${(match[2] ?? '0').padStart(2, '0')}`;
}

export default function FinishedFilms() {
  if (!wedding || !super8Video) {
    throw new Error('The Analog Lab featured films must have matching journal entries.');
  }

  const films = [
    {
      format: 'Digital + Super 8',
      title: 'the highlight film',
      description: 'digital footage with super 8 woven through.',
      video: wedding.primaryVideo,
    },
    {
      format: 'Super 8 only',
      title: 'the super 8 film',
      description: 'a separate edit, filmed entirely on super 8.',
      video: super8Video,
    },
  ];

  return (
    <section
      id="finished-films"
      aria-labelledby="finished-films-heading"
      className="scroll-mt-24 px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
          finished films
        </p>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between md:mb-12">
          <h2
            id="finished-films-heading"
            className="font-sans text-4xl font-bold uppercase leading-tight tracking-normal text-balance md:text-5xl"
          >
            one day, two films.
          </h2>
          <div className="lg:text-right">
            <p className="font-serif text-2xl text-lucas-navy">{wedding.title}</p>
            <p className="mt-2 font-sans text-[10px] uppercase leading-relaxed tracking-zissou text-lucas-slate">
              {wedding.place.name}<br />
              {wedding.place.locality}, {wedding.place.region}
            </p>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
          {films.map((film) => (
            <article key={film.video.id} className="min-w-0">
              <div className="mb-4 flex items-center justify-between gap-4 border-t border-lucas-navy/25 pt-4 font-sans text-[10px] uppercase tracking-zissou">
                <span className="text-lucas-navy">{film.format}</span>
                <time dateTime={film.video.duration} className="shrink-0 text-lucas-slate">
                  {formatRuntime(film.video.duration)}
                </time>
              </div>
              <CinematicPlayer
                videoId={film.video.id}
                altText={`${wedding.title} — ${film.title} (${film.format})`}
                thumbnailQuality={film.video.thumbnailQuality}
              />
              <h3 className="mt-6 font-serif text-3xl text-lucas-navy">{film.title}</h3>
              <p className="mt-2 font-serif text-xl leading-relaxed text-lucas-navy/75">
                {film.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-8 border-t border-lucas-navy/25 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="mb-3 font-sans text-[10px] uppercase tracking-zissou text-lucas-slate">
              what you receive
            </h3>
            <p className="font-serif text-xl leading-relaxed text-lucas-navy/75">
              the analog collection includes a highlight film and a separate three-minute super 8 film.
            </p>
            <Link
              href="/collections"
              className="mt-4 inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-zissou text-lucas-navy hover:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange"
            >
              view collections <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <Link
            href={`/journal/${wedding.slug}`}
            className="inline-flex w-fit items-center gap-3 font-sans text-[10px] uppercase tracking-zissou text-lucas-navy hover:text-lucas-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lucas-orange"
          >
            more from their day <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
