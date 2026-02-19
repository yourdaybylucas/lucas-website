import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-lucas-navy text-lucas-slate py-12 px-6 border-t border-lucas-slate/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-sans tracking-zissou uppercase gap-8">

                <div className="flex items-center gap-6">
                    <Link href="/about" className="hover:text-lucas-cream transition-colors">About</Link>
                    <Link href="/collections" className="hover:text-lucas-cream transition-colors">Collections</Link>
                    <Link href="/journal" className="hover:text-lucas-cream transition-colors">Journal</Link>
                </div>

                <p className="text-lucas-cream/50 text-center md:text-right">
                    © {new Date().getFullYear()} — honest. nostalgic. just me.
                </p>

            </div>
        </footer>
    );
}
