import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const generalSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Variable.woff2',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../public/fonts/GeneralSans-VariableItalic.woff2',
      style: 'italic',
      weight: '100 900',
    }
  ],
  variable: '--font-general-sans',
  display: 'swap',
});

import CustomCursor from '@/components/CustomCursor';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'LUCAS : Wedding Filmmaker',
  description: 'honest, nostalgic wedding cinema. digital + super 8mm. home is ontario // worldwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${generalSans.variable}`}>
      <body className="bg-lucas-cream text-lucas-navy font-sans antialiased selection:bg-lucas-orange selection:text-lucas-cream relative">
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="fixed inset-0 z-50 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-multiply"></div>

          <Header />
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
          <Footer />

        </SmoothScrollProvider>
      </body>
    </html>
  );
}