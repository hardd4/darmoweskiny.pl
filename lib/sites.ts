export type SiteOffer = {
  name: string;
  code: string;
  bonus: string;
  href: string;
  accent: string;
};

export const siteOffers: SiteOffer[] = [
  { name: 'CSGO Skins', code: 'HARDULO', bonus: '2,10 zł na start + 10% bonusu przy doładowaniu', href: 'https://csgo-skins.com/?ref=hardulo', accent: 'from-pink-500/30 to-red-500/10' },
  { name: 'CaseHug', code: 'HARDULO', bonus: '2 darmowe skrzynki + 10% bonusu przy doładowaniu', href: 'https://casehug.com/r/HARDULO', accent: 'from-violet-500/30 to-fuchsia-500/10' },
  { name: 'G4Skins', code: 'HARDULO', bonus: 'Darmowa skrzynka + 5% bonusu przy doładowaniu', href: 'https://g4skins.com/ref/hardulo', accent: 'from-cyan-500/30 to-blue-500/10' },
  { name: 'Hellcase', code: 'HARDULO', bonus: '$0.70 za free + 10% bonusu przy doładowaniu', href: 'https://hellca.se/hardulo', accent: 'from-orange-500/30 to-yellow-500/10' },
  { name: 'CaseDrop', code: 'HARDULO', bonus: 'Darmowa skrzynka', href: 'https://casedrop.eu/r/hardulo', accent: 'from-emerald-500/30 to-green-500/10' },
  { name: 'FarmSkins', code: 'HARDULO', bonus: '$1 za free', href: 'https://farmskins.com/ref-hardulo', accent: 'from-lime-500/30 to-emerald-500/10' },
  { name: 'DatDrop', code: 'HARDULO', bonus: '5% bonusu przy doładowaniu', href: 'https://datdrop.com/p/hardulo', accent: 'from-sky-500/30 to-indigo-500/10' },
];

export const socials = [
  { name: 'YouTube', href: 'https://www.youtube.com/@Harduloo' },
  { name: 'Instagram', href: 'https://www.instagram.com/harduloo/' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@hardulo' },
];
