import { ArrowUpRight, Gift, Instagram, Music2, Youtube } from 'lucide-react';
import SiteCard from '@/components/SiteCard';

const ASSET = 'https://raw.githubusercontent.com/harddd4/Chyba-dziala-vercel-anali/main';

const sites = [
  { name: 'CSGO-SKINS', logo: `${ASSET}/csgoskins.png`, code: 'HARDULO', bonus: '2,10 zł na start + 10% bonusu', href: 'https://csgo-skins.com/?ref=hardulo' },
  { name: 'CaseDrop', logo: `${ASSET}/casedrop.png`, code: 'HARDULO', bonus: 'Darmowa skrzynka', href: 'https://casedrop.eu/r/hardulo' },
  { name: 'G4Skins', logo: `${ASSET}/g4skins.png`, code: 'HARDULO', bonus: 'Darmowa skrzynka + bonus', href: 'https://g4skins.com/ref/hardulo' },
  { name: 'Hellcase', logo: `${ASSET}/hellcase.png`, code: 'HARDULO', bonus: 'Bonus przy doładowaniu', href: 'https://hellca.se/hardulo' },
  { name: 'CaseHug', logo: `${ASSET}/casehug.png`, code: 'HARDULO', bonus: '2 darmowe skrzynki + bonus', href: 'https://casehug.com/r/HARDULO' },
];

const promos = [
  { title: 'CS2 Case', kicker: 'Do 3 darmowych otwarć', description: 'Darmowa skrzynka na CSGO-SKINS po spełnieniu warunków opisanych na stronie.', href: 'https://csgo-skins.com/case/cs2-case' },
  { title: 'Daily Case', kicker: 'Codzienna skrzynka', description: 'Codzienny case z aktualną pulą skinów bezpośrednio na CSGO-SKINS.', href: 'https://csgo-skins.com/case/daily-case' },
  { title: 'Discord Case', kicker: 'Kody publikowane okresowo', description: 'CSGO-SKINS publikuje od czasu do czasu kody na darmowe otwarcia Discord Case.', href: 'https://csgo-skins.com/case/discord-case' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <header className="border-b border-red-950/80 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <img src={`${ASSET}/darmowe_skiny.png`} alt="Darmoweskiny.pl" className="h-auto w-[190px] md:w-[250px]" />
          <nav className="hidden gap-7 text-sm font-semibold text-zinc-400 md:flex">
            <a href="#kody" className="hover:text-red-500">Kody</a>
            <a href="#promocje" className="hover:text-red-500">Promocje</a>
            <a href="#sociale" className="hover:text-red-500">Sociale</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-8 pt-8 md:px-8 md:pt-12">
        <div className="hero-panel relative overflow-hidden rounded-[32px] border border-red-500/20 px-5 py-8 md:px-10 md:py-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <div className="relative mx-auto max-w-5xl">
            <img src={`${ASSET}/darmowe_skiny.png`} alt="Darmowe Skiny" className="mx-auto h-auto w-full object-contain" />
          </div>
        </div>
      </section>

      <section id="kody" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs font-black uppercase tracking-[.22em] text-red-500">Najlepsze oferty</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Kody do <span className="text-red-500">stron</span></h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-500 md:text-base">Kod główny: <strong className="text-red-500">HARDULO</strong>. Kliknij kartę albo skopiuj kod jednym przyciskiem.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {sites.map((site) => <SiteCard key={site.name} {...site} />)}
        </div>
      </section>

      <section id="promocje" className="border-y border-red-950/60 bg-red-950/[.06]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex items-center gap-2 text-red-500"><Gift size={18} /><span className="text-xs font-black uppercase tracking-[.22em]">Aktualne</span></div>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">Giveawaye i <span className="text-red-500">promocje</span></h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-500">Bez zmyślonych nagród — tutaj są rzeczy, które da się sprawdzić bezpośrednio na CSGO-SKINS.</p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {promos.map((promo) => (
              <a key={promo.title} href={promo.href} target="_blank" rel="noopener noreferrer sponsored" className="group promo-card rounded-3xl border border-red-500/15 p-6 transition hover:-translate-y-1 hover:border-red-500/50">
                <div className="inline-flex rounded-lg bg-red-500/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-red-400">CSGO-SKINS</div>
                <h3 className="mt-6 text-2xl font-black">{promo.title}</h3>
                <div className="mt-2 text-sm font-semibold text-red-400">{promo.kicker}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{promo.description}</p>
                <div className="mt-7 flex items-center gap-2 font-bold text-red-500">Sprawdź <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="sociale" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <h2 className="text-3xl font-black md:text-5xl">Moje <span className="text-red-500">sociale</span></h2>
        <p className="mt-3 text-sm text-zinc-500">Filmy, shorty, nowe kody i informacje o promocjach.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Social title="YouTube" subtitle="@Harduloo" href="https://www.youtube.com/@Harduloo" icon={<Youtube />} />
          <Social title="Instagram" subtitle="@harduloo" href="https://www.instagram.com/harduloo/" icon={<Instagram />} />
          <Social title="TikTok" subtitle="@hardulo" href="https://www.tiktok.com/@hardulo" icon={<Music2 />} />
        </div>
      </section>

      <footer className="border-t border-red-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <img src={`${ASSET}/darmowe_skiny.png`} alt="Darmoweskiny" className="h-auto w-44" />
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Darmoweskiny.pl</p>
        </div>
      </footer>
    </main>
  );
}

function Social({ title, subtitle, href, icon }: { title: string; subtitle: string; href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 transition hover:border-red-500/40 hover:bg-red-950/20">
      <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">{icon}</div><div><div className="font-black">{title}</div><div className="mt-1 text-xs text-zinc-500">{subtitle}</div></div></div>
      <ArrowUpRight size={20} className="text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500" />
    </a>
  );
}
