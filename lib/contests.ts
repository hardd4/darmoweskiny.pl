export type Contest = {
  title: string;
  badge: string;
  value: string;
  description: string;
  href: string;
  image?: string;
  active: boolean;
};

export type FeaturedContest = {
  title: string;
  endsAt: string;
  href: string;
  image?: string;
  active: boolean;
};

// Mały wyróżniony konkurs nad kodami.
// Wpisz datę w formacie RRRR-MM-DDTHH:mm:ss+02:00 i ustaw active: true.
export const featuredContest: FeaturedContest = {
  title: 'NAZWA SKINA',
  endsAt: '2026-09-30T20:00:00+02:00',
  href: 'https://csgo-skins.com/',
  image: '',
  active: false,
};

// Tutaj dodajesz i edytujesz konkursy.
// image: bezpośredni adres do grafiki skina; bez niego wyświetli się ikona prezentu.
// active: false ukrywa konkurs bez usuwania go z pliku.
export const contests: Contest[] = [
  {
    title: 'CS2 Case',
    badge: 'GV',
    value: 'Do 3 darmowych otwarć',
    description: 'Darmowa skrzynka na CSGO-SKINS po spełnieniu warunków opisanych na stronie.',
    href: 'https://csgo-skins.com/case/cs2-case',
    image: '',
    active: true,
  },
  {
    title: 'Daily Case',
    badge: 'GV',
    value: 'Codzienna skrzynka',
    description: 'Codzienny case z aktualną pulą skinów bezpośrednio na CSGO-SKINS.',
    href: 'https://csgo-skins.com/case/daily-case',
    image: '',
    active: true,
  },
  {
    title: 'Discord Case',
    badge: 'GV',
    value: 'Kody publikowane okresowo',
    description: 'CSGO-SKINS publikuje okresowo kody na darmowe otwarcia Discord Case.',
    href: 'https://csgo-skins.com/case/discord-case',
    image: '',
    active: true,
  },
];
