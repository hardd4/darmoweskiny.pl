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
  title: 'PODGLĄD BANERA — NAZWA SKINA',
  endsAt: '2026-09-30T20:00:00+02:00',
  href: 'https://csgo-skins.com/',
  image: '',
  active: true,
};

// Tutaj dodajesz i edytujesz konkursy.
// image: bezpośredni adres do grafiki skina; bez niego wyświetli się ikona prezentu.
// active: false ukrywa konkurs bez usuwania go z pliku.
export const contests: Contest[] = [
  {
    title: 'Bowie Knife | Ultraviolet',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~445 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1I-uC4YbJsLM-RAXCZxNFlv955WjujmRgYvjiBk5r0by3FOwRzD8Z0E7MI5xSxktXlM-zitFbfgo8XmH73hygb7n1tsOgFAqQ7uvqA29-dD8M',
    active: true,
  },
  {
    title: 'Gut Knife | Ultraviolet (Field-Tested)',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~595 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: 'https://media.steampowered.com/apps/730/icons/econ/default_generated/weapon_knife_gut_so_purple_light_large.dbe6989416501166c43bd1cfb18ee835dbfa0ac7.png',
    active: true,
  },
  {
    title: 'Shadow Daggers | Fade',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~943 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: 'https://skins-cdn.hltv.org/skin/H6rZU_wZhpKA4tglmenXO_.png',
    active: true,
  },
  {
    title: 'Classic Knife | Slaughter',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~1342 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Y_OGRaalSOvWRHGavzedxuPUnGiy1xxkk6z_Tn4mucH2UOAUmCZZ1RLQJuhbrx9O0M-ji71OK34oTzDK-0H1Px6MwvA',
    active: true,
  },
  {
    title: 'Survival Knife | Stained',
    badge: '10 ZŁ',
    value: 'WARTOŚĆ: ~465 ZŁ',
    description: 'Wpłać minimum 10 zł na CSGO-SKINS, aby wziąć udział w konkursie.',
    href: 'https://csgo-skins.com/?ref=hardulo',
    image: 'https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Y7vyne5tsMc-VAXWTxOpJvOhuRz39kEkjtjmGydmhdi-TbVNyDJNwTbRf4BjpwILhNe7k4wzW2otCyn72jzQJsHhv3Am88A',
    active: true,
  },
];
