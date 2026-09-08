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
  title: 'Paracord Knife | Crimson Web',
  value: 'WARTOŚĆ: ~500 ZŁ',
  endsAt: '2026-09-23T20:00:00+02:00',
  href: 'https://www.youtube.com/watch?v=DrONV4agGAg',
  image: 'https://steamcommunity-a.akamaihd.net/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Y4OCqV6x0H-eWDHSvzOtyufRkAX_klkQm5WTTztisdCmWOg8lX8NzTeBc4BC-lIHkMe624FeKjo9Ey3jgznQesZVzO3U',
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
    title: 'Gut Knife | Ultraviolet',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~595 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/gut-knife-ultraviolet.webp',
    active: true,
  },
  {
    title: 'Gut Knife | Ultraviolet',
    badge: '24,99 ZŁ',
    value: 'WARTOŚĆ: ~595 ZŁ',
    description: 'Wpłać minimum 24,99 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: '/skins/gut-knife-ultraviolet.webp',
    active: true,
  },
  {
    title: 'Survival Knife | Stained',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~465 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Y7vyne5tsMc-VAXWTxOpJvOhuRz39kEkjtjmGydmhdi-TbVNyDJNwTbRf4BjpwILhNe7k4wzW2otCyn72jzQJsHhv3Am88A',
    active: true,
  },
  {
    title: 'Bowie Knife | Ultraviolet',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~445 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS z kodem HARDULO, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1I-uC4YbJsLM-RAXCZxNFlv955WjujmRgYvjiBk5r0by3FOwRzD8Z0E7MI5xSxktXlM-zitFbfgo8XmH73hygb7n1tsOgFAqQ7uvqA29-dD8M',
    active: true,
  },
];
