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
  value: string;
  endsAt: string;
  href: string;
  image?: string;
  active: boolean;
};

// Mały wyróżniony konkurs nad kodami.
// Wpisz datę w formacie RRRR-MM-DDTHH:mm:ss+02:00 i ustaw active: true.
export const featuredContest: FeaturedContest = {
  title: 'Survival Knife | Slaughter',
  value: 'WARTOŚĆ: ~600 ZŁ',
  endsAt: '2026-11-08T18:00:00+01:00',
  href: 'https://youtu.be/HmnGOCqIaX8',
  image: '/skins/survival-knife-slaughter.png',
  active: true,
};

// Tutaj dodajesz i edytujesz konkursy.
// image: bezpośredni adres do grafiki skina; bez niego wyświetli się ikona prezentu.
// active: false ukrywa konkurs bez usuwania go z pliku.
export const contests: Contest[] = [
  {
    title: 'Classic Knife | Slaughter',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~1342 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Y_OGRaalSOvWRHGavzedxuPUnGiy1xxkk6z_Tn4mucH2UOAUmCZZ1RLQJuhbrx9O0M-ji71OK34oTzDK-0H1Px6MwvA',
    active: true,
  },
  {
    title: 'Shadow Daggers | Fade',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~943 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/shadow-daggers-fade.webp',
    active: true,
  },
  {
    title: 'Shadow Daggers | Fade',
    badge: '24,99 ZŁ',
    value: 'WARTOŚĆ: ~943 ZŁ',
    description: 'Wpłać minimum 24,99 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/shadow-daggers-fade.webp',
    active: true,
  },
  {
    title: 'Falchion Knife | Autotronic',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~516 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/falchion-knife-autotronic.png',
    active: true,
  },
  {
    title: 'Paracord Knife | Case Hardened',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~505 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/paracord-knife-case-hardened.png',
    active: true,
  },
  {
    title: 'Huntsman Knife | Lore',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~458 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/huntsman-knife-lore.png',
    active: true,
  },
  {
    title: 'Bowie Knife | Autotronic',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~448 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/bowie-knife-autotronic.png',
    active: true,
  },
  {
    title: 'Gut Knife | Lore',
    badge: '25 ZŁ',
    value: 'WARTOŚĆ: ~440 ZŁ',
    description: 'Wpłać minimum 25 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/gut-knife-lore.png',
    active: true,
  },
  {
    title: 'Kukri Knife | Blue Steel',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~425 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/kukri-knife-blue-steel.png',
    active: true,
  },
  {
    title: 'Gut Knife | Ultraviolet',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~404 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/gut-knife-ultraviolet.webp',
    active: true,
  },
];
