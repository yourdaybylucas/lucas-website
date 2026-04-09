// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-lucas-cream flex flex-col items-center justify-center text-center px-6">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-1.5 h-1.5 bg-lucas-orange rounded-full"></span>
        <span className="font-sans text-[10px] tracking-zissou text-lucas-slate uppercase font-bold">
            [ Error // 404 ]
        </span>
      </div>
      <h1 className="font-sans text-4xl md:text-5xl uppercase font-bold text-lucas-navy mb-4">
        Record Not Found.
      </h1>
      <p className="font-serif text-xl italic text-lucas-navy/80 lowercase mb-10">
        the archive you are looking for has been moved or does not exist.
      </p>
      <Link href="/" className="font-sans text-[10px] tracking-zissou uppercase border border-lucas-navy px-8 py-3 text-lucas-navy hover:bg-lucas-navy hover:text-lucas-cream transition-colors duration-slow">
        Return to Base
      </Link>
    </main>
  );
}
