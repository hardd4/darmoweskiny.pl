import { ArrowDown, ArrowUpRight, Check, Copy, Gift, MousePointerClick, Music2 } from 'lucide-react';
import SiteCard from '@/components/SiteCard';
import { contests } from '@/lib/contests';

const ASSET = 'https://raw.githubusercontent.com/harddd4/Chyba-dziala-vercel-anali/main';

const sites = [
  { name: 'CSGO-SKINS', logo: `${ASSET}/csgoskins.png`, code: 'HARDULO', bonus: '2,10 zł na start + 10% bonusu', href: 'https://csgo-skins.com/?ref=hardulo' },
  { name: 'CaseHug', logo: `${ASSET}/casehug.png`, code: 'HARDULO', bonus: '2 darmowe skrzynki + bonus', href: 'https://casehug.com/r/HARDULO' },
  { name: 'G4Skins', logo: `${ASSET}/g4skins.png`, code: 'HARDULO', bonus: 'Darmowa skrzynka + bonus', href: 'https://g4skins.com/ref/hardulo' },
  { name: 'Hellcase', logo: `${ASSET}/hellcase.png`, code: 'HARDULO', bonus: 'Bonus przy doładowaniu', href: 'https://hellca.se/hardulo' },
];

export default function Home() {
  const activeContests = contests.filter((contest) => contest.active);

  return (
    <main className="cosmic-site min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="star-field" aria-hidden="true" />
      <header className="border-b border-red-950/80 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <img src={`${ASSET}/darmowe_skiny.png`} alt="Darmoweskiny.pl" className="h-auto w-[190px] md:w-[250px]" />
          <nav className="hidden items-center gap-7 text-sm font-semibold text-white md:flex">
            <a href="#kody" className="hover:text-red-500">Kody</a>
            <a href="#konkursy" className="hover:text-red-500">Konkursy</a>
            <a href="#sociale" className="hover:text-red-500">Sociale</a>
            <a href="#kody" className="rounded-lg bg-red-600 px-4 py-2 font-black transition hover:bg-red-500">Zacznij</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-10 pt-14 text-center md:px-8 md:pb-14 md:pt-20">
        <p className="text-xs font-black uppercase tracking-[.22em] text-red-500">Darmowe skiny i bonusy CS2</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Odbierz bonus w <span className="text-red-500">3 krokach</span></h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white md:text-base">Wybierz serwis, skopiuj kod <strong>HARDULO</strong> i przejdź na stronę, aby aktywować przypisany bonus.</p>

        <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
          <Step number="1" icon={<MousePointerClick size={20} />} title="Wybierz stronę" text="Porównaj bonusy poniżej." />
          <Step number="2" icon={<Copy size={20} />} title="Skopiuj kod" text="Każda oferta używa kodu HARDULO." />
          <Step number="3" icon={<Check size={20} />} title="Odbierz bonus" text="Otwórz serwis i aktywuj kod." />
        </div>

        <a href="#kody" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-black uppercase transition hover:bg-red-500">Wybieram stronę <ArrowDown size={17} /></a>
      </section>

      <section id="kody" className="mx-auto max-w-7xl scroll-mt-4 px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs font-black uppercase tracking-[.22em] text-red-500">Krok 1</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">Wybierz <span className="text-red-500">stronę</span></h2>
        <p className="mt-3 max-w-2xl text-sm text-white md:text-base">Nie wiesz którą wybrać? Zacznij od pierwszej, polecanej oferty.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {sites.map((site, index) => <SiteCard key={site.name} {...site} recommended={index === 0} />)}
        </div>
      </section>

      <section id="konkursy" className="border-y border-red-950/60 bg-red-950/[.06]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="flex items-center gap-2 text-red-500"><Gift size={18} /><span className="text-xs font-black uppercase tracking-[.22em]">Aktualne</span></div>
          <h2 className="mt-2 text-3xl font-black md:text-5xl">Konkursy</h2>
          <p className="mt-3 max-w-2xl text-sm text-white">Układ przygotowany pod skiny z API. Do czasu podłączenia danych pokazujemy wyłącznie konkursy, które można sprawdzić u źródła.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeContests.map((contest) => (
              <a key={contest.title} href={contest.href} target="_blank" rel="noopener noreferrer sponsored" className="group promo-card flex min-h-[330px] flex-col rounded-2xl border border-red-500/20 p-4 transition hover:-translate-y-1 hover:border-red-500/60">
                <div className="skin-preview relative flex h-40 items-center justify-center overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,.20),transparent_62%)]" />
                  {contest.image ? (
                    <img src={contest.image} alt={contest.title} className="relative h-full w-full object-contain p-3 transition group-hover:scale-105" />
                  ) : (
                    <Gift size={76} strokeWidth={1.15} className="relative text-red-500/75 drop-shadow-[0_0_24px_rgba(239,68,68,.35)] transition group-hover:scale-110" />
                  )}
                  <div className="absolute right-2 top-2 rounded-md bg-red-600/15 px-2 py-1 text-[9px] font-black tracking-widest text-red-400">LIVE</div>
                </div>
                <h3 className="mt-4 truncate text-base font-black">{contest.title}</h3>
                <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                  <span className="rounded bg-red-950 px-2 py-1 font-black text-red-400">{contest.badge}</span>
                  <span className="font-black text-emerald-400">{contest.value}</span>
                </div>
                <p className="mt-3 line-clamp-2 text-xs leading-5 text-white">{contest.description}</p>
                <div className="mt-auto flex items-center justify-center gap-2 pt-5 text-xs font-black uppercase text-white">Sprawdź promocję <ArrowUpRight size={15} className="text-red-500 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="sociale" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <h2 className="text-3xl font-black md:text-5xl">Moje <span className="text-red-500">sociale</span></h2>
        <p className="mt-3 text-sm text-white">Filmy, shorty, nowe kody i informacje o konkursach.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Social title="YouTube" subtitle="@Harduloo" href="https://www.youtube.com/@Harduloo" icon={<YouTubeIcon />} />
          <Social title="Instagram" subtitle="@harduloo" href="https://www.instagram.com/harduloo/" icon={<InstagramIcon />} />
          <Social title="TikTok" subtitle="@hardulo" href="https://www.tiktok.com/@hardulo" icon={<Music2 />} />
        </div>
      </section>

      <footer className="border-t border-red-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <img src={`${ASSET}/darmowe_skiny.png`} alt="Darmoweskiny" className="h-auto w-44" />
          <p className="text-xs text-white">© {new Date().getFullYear()} Darmoweskiny.pl</p>
        </div>
      </footer>
    </main>
  );
}

function Step({ number, icon, title, text }: { number: string; icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/55 p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 font-black">{number}</span>
        <span className="text-red-500">{icon}</span>
      </div>
      <h3 className="mt-4 text-sm font-black">{title}</h3>
      <p className="mt-1 text-xs leading-5 text-white">{text}</p>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 12s0-3.5-.45-5.2a2.7 2.7 0 0 0-1.9-1.9C18 4.5 12 4.5 12 4.5s-6 0-7.65.4a2.7 2.7 0 0 0-1.9 1.9C2 8.5 2 12 2 12s0 3.5.45 5.2a2.7 2.7 0 0 0 1.9 1.9c1.65.4 7.65.4 7.65.4s6 0 7.65-.4a2.7 2.7 0 0 0 1.9-1.9C22 15.5 22 12 22 12Z" />
      <path d="m10 9 5 3-5 3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Social({ title, subtitle, href, icon }: { title: string; subtitle: string; href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 transition hover:border-red-500/40 hover:bg-red-950/20">
      <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">{icon}</div><div><div className="font-black">{title}</div><div className="mt-1 text-xs text-white">{subtitle}</div></div></div>
      <ArrowUpRight size={20} className="text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500" />
    </a>
  );
}
