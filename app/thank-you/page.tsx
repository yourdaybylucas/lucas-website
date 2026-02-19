import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
            <h1 className="font-sans text-4xl md:text-6xl font-bold uppercase tracking-tight text-lucas-navy mb-6">
                Thank You
            </h1>
            <p className="font-serif text-xl md:text-2xl text-lucas-slate max-w-2xl mx-auto mb-12">
                I've received your inquiry and will be in touch shortly.
            </p>

            {/* Placeholder for embedded video */}
            <div className="w-full max-w-3xl aspect-video bg-lucas-navy/10 flex items-center justify-center mb-12">
                <span className="font-sans text-sm tracking-zissou uppercase text-lucas-slate">Welcome Video Embed</span>
            </div>

            <Link href="/collections-secret" className="inline-block border border-lucas-orange text-lucas-orange px-8 py-4 font-sans text-sm uppercase tracking-zissou hover:bg-lucas-orange hover:text-lucas-cream transition-colors duration-300">
                View Pricing & Collections
            </Link>
        </main>
    );
}
