import { ArrowUpRight, Gift, Music2 } from 'lucide-react';
import SiteCard from '@/components/SiteCard';
import FeaturedContest from '@/components/FeaturedContest';
import { contests, featuredContest } from '@/lib/contests';

const ASSET = 'https://raw.githubusercontent.com/harddd4/Chyba-dziala-vercel-anali/main';

const sites = [
  { name: 'CSGO-SKINS', theme: 'cyan' as const, logo: `${ASSET}/csgoskins.png`, offer: '+10% DO DOŁADOWANIA', detail: '2,10 ZŁ NA START', code: 'HARDULO', href: 'https://csgo-skins.com/?ref=hardulo' },
  { name: 'CaseHug', theme: 'red' as const, logo: `${ASSET}/casehug.png`, offer: '+20% DO DOŁADOWANIA', detail: '4 ZŁ NA START', code: 'HARDULO', href: 'https://casehug.com/r/HARDULO' },
  { name: 'G4Skins', theme: 'violet' as const, logo: `${ASSET}/g4skins.png`, offer: 'DARMOWA SKRZYNKA', detail: 'DODATKOWY BONUS', code: 'HARDULO', href: 'https://g4skins.com/ref/hardulo' },
];

export default function Home() {
  const activeContests = contests.filter((contest) => contest.active);

  return (
    <main className="cosmic-site min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <div className="star-field" aria-hidden="true" />
      <header className="border-b border-red-950/80 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 sm:px-5 sm:py-4 md:justify-between md:px-8">
          <img src={`${ASSET}/darmowe_skiny.png`} alt="Darmoweskiny.pl" className="h-auto w-[170px] max-w-full sm:w-[190px] md:w-[250px]" />
          <nav className="hidden gap-7 text-sm font-semibold text-white md:flex">
            <a href="#kody" className="hover:text-red-500">Kody</a>
            <a href="#giveawaye" className="hover:text-red-500">Giveawaye</a>
            <a href="#sociale" className="hover:text-red-500">Sociale</a>
          </nav>
        </div>
      </header>

      <FeaturedContest contest={featuredContest} />

      <section id="kody" className="mx-auto max-w-7xl px-4 pb-7 pt-12 sm:px-5 sm:pt-14 md:px-8 md:pb-10 md:pt-20">
        <p className="text-xs font-black uppercase tracking-[.22em] text-red-500">Kody bonusowe</p>
        <h1 className="mt-2 break-words text-2xl font-black tracking-tight sm:text-3xl md:text-5xl">Kody do <span className="text-red-500">stron</span></h1>
        <p className="section-description mt-3 max-w-2xl text-sm text-white md:text-base">Wybierz ofertę i kliknij <strong className="text-red-500">ODBIERZ BONUS</strong>, aby przejść na stronę.</p>

        <div className="mt-6 grid min-w-0 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => <SiteCard key={site.name} {...site} />)}
        </div>
      </section>

      <section id="giveawaye">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-5 md:px-8 md:py-10">
          <div className="flex items-center gap-2 text-red-500"><Gift size={18} /><span className="text-xs font-black uppercase tracking-[.22em]">Aktualne</span></div>
          <h2 className="mt-2 break-words text-2xl font-black leading-tight sm:text-3xl md:text-5xl">Giveawaye z <span className="text-red-500">CSGO-SKINS</span></h2>
          <p className="section-description mt-3 max-w-2xl text-sm text-white md:text-base">Aktualne darmowe skrzynki i akcje dostępne na CSGO-SKINS.</p>

          <div className="mt-6 grid min-w-0 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {activeContests.map((contest) => (
              <a key={`${contest.title}-${contest.badge}`} href={contest.href} target="_blank" rel="noopener noreferrer sponsored" className="group promo-card flex min-h-[300px] min-w-0 flex-col rounded-2xl border border-red-500/20 p-3.5 transition hover:-translate-y-1 hover:border-red-500/60 sm:min-h-[330px] sm:p-4">
                <div className="skin-preview relative flex h-36 items-center justify-center overflow-hidden rounded-xl sm:h-40">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,.20),transparent_62%)]" />
                  {contest.image ? (
                    <img src={contest.image} alt={contest.title} className="relative h-full w-full object-contain p-3 transition group-hover:scale-105" />
                  ) : (
                    <Gift size={76} strokeWidth={1.15} className="relative text-red-500/75 drop-shadow-[0_0_24px_rgba(239,68,68,.35)] transition group-hover:scale-110" />
                  )}
                  <div className="absolute right-2 top-2 rounded-md bg-red-600/15 px-2 py-1 text-[9px] font-black tracking-widest text-red-400">LIVE</div>
                </div>
                <h3 className="mt-4 line-clamp-2 break-words text-base font-black leading-6 sm:text-lg">{contest.title}</h3>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs">
                  <span className="shrink-0 whitespace-nowrap rounded bg-red-950 px-2 py-1 font-black text-red-400">{contest.badge}</span>
                  <span className="break-words text-right font-black text-emerald-400">{contest.value}</span>
                </div>
                <p className="mt-3 rounded-lg border border-red-500/20 bg-white/[.045] px-3 py-2.5 text-sm font-semibold leading-5 text-white shadow-[inset_3px_0_0_rgba(244,0,70,.8)]">{contest.description}</p>
                <div className="mt-auto flex items-center justify-center gap-2 pt-5 text-xs font-black uppercase text-white">Sprawdź giveaway <ArrowUpRight size={15} className="text-red-500 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="sociale" className="mx-auto max-w-7xl px-4 pb-12 pt-7 sm:px-5 md:px-8 md:pb-20 md:pt-10">
        <h2 className="break-words text-2xl font-black sm:text-3xl md:text-5xl">Moje <span className="text-red-500">sociale</span></h2>
        <p className="section-description mt-3 text-sm text-white md:text-base">Na nich rozdaję jeszcze więcej skinów.</p>
        <div className="mt-6 grid min-w-0 gap-4 sm:mt-8 sm:grid-cols-2 xl:grid-cols-4">
          <Social title="YouTube" subtitle="@hardulooo" href="https://www.youtube.com/@hardulooo" icon={<YouTubeIcon />} />
          <Social title="Discord" subtitle="Dołącz do serwera" href="https://discord.gg/KwJGMAFgA7" icon={<DiscordIcon />} />
          <Social title="Instagram" subtitle="@harduloo" href="https://www.instagram.com/harduloo/" icon={<InstagramIcon />} />
          <Social title="TikTok" subtitle="@hardulo" href="https://www.tiktok.com/@hardulo" icon={<Music2 />} />
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-5 md:flex-row md:justify-between md:px-8 md:text-left">
          <img src={`${ASSET}/darmowe_skiny.png`} alt="Darmoweskiny" className="h-auto w-40 max-w-full sm:w-44" />
          <p className="text-xs text-white">© {new Date().getFullYear()} Darmoweskiny.pl</p>
        </div>
      </footer>
    </main>
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

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M19.5 5.4A16.3 16.3 0 0 0 15.4 4l-.5 1a15 15 0 0 0-5.8 0l-.5-1a16.3 16.3 0 0 0-4.1 1.4C1.9 9.2 1.2 12.9 1.5 16.5a16.5 16.5 0 0 0 5 2.5l1.2-1.7-1.8-.9.4-.3a11.7 11.7 0 0 0 11.4 0l.4.3-1.8.9 1.2 1.7a16.5 16.5 0 0 0 5-2.5c.4-4.2-.7-7.8-3-11.1ZM8.6 14.8c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8 2.5 1.3 2.5 2.8-1.1 2.8-2.5 2.8Zm6.8 0c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8 2.5 1.3 2.5 2.8-1.1 2.8-2.5 2.8Z" />
    </svg>
  );
}

function Social({ title, subtitle, href, icon }: { title: string; subtitle: string; href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0a0a0a] p-4 transition hover:border-red-500/40 hover:bg-red-950/20 sm:p-5">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white sm:h-12 sm:w-12">{icon}</div><div className="min-w-0"><div className="truncate font-black">{title}</div><div className="mt-1 truncate text-xs text-white">{subtitle}</div></div></div>
      <ArrowUpRight size={20} className="shrink-0 text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500" />
    </a>
  );
}
