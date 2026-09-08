import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Darmoweskiny.pl',
    short_name: 'Darmowe skiny',
    description: 'Kody bonusowe i konkursy ze skinami CS2.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#f40046',
    icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
