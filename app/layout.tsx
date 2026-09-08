import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Darmoweskiny.pl — kody i giveawaye CS2',
  description: 'Aktualne kody bonusowe, konkursy ze skinami CS2 i sociale Hardulo w jednym miejscu.',
  metadataBase: new URL('https://darmoweskiny.pl'),
  applicationName: 'Darmoweskiny.pl',
  keywords: ['CS2', 'skiny CS2', 'kody bonusowe', 'giveawaye CS2', 'Hardulo'],
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: '/',
    siteName: 'Darmoweskiny.pl',
    title: 'Darmoweskiny.pl — kody i giveawaye CS2',
    description: 'Aktualne kody bonusowe, konkursy ze skinami CS2 i sociale Hardulo w jednym miejscu.',
    images: [{
      url: 'https://raw.githubusercontent.com/harddd4/Chyba-dziala-vercel-anali/main/darmowe_skiny.png',
      alt: 'Darmoweskiny.pl',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darmoweskiny.pl — kody i giveawaye CS2',
    description: 'Aktualne kody bonusowe i konkursy ze skinami CS2.',
    images: ['https://raw.githubusercontent.com/harddd4/Chyba-dziala-vercel-anali/main/darmowe_skiny.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={manrope.variable}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
