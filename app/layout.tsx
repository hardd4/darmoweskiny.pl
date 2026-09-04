import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Darmoweskiny.pl — kody i promocje CS2',
  description: 'Kody bonusowe, promocje i giveawaye związane z CS2.',
  metadataBase: new URL('https://darmoweskiny.pl'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
