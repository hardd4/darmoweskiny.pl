import { Instagram, Music2, Youtube } from 'lucide-react';
import { GiveawayCard, OfferGrid } from '@/components/offer-grid';
import { siteOffers, socials } from '@/lib/sites';

const socialIcons = {
  YouTube: Youtube,
  Instagram,
  TikTok: Music2,
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <header className="container-shell pt-5 sm:pt-8">
        <div className="card-glow grid-noise relative flex min-h-40 items-center justify-center rounded-[2rem] px-6 py-10 sm:min-h-52 lg:min-h-60">
          <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-pink-500/15 blur-3xl" />
          <div className="relative z-10 text-center">
            <p className="text-[10px] font-black uppercase tracking-[.35em] text-white/35 sm:text-xs">Kody • Promocje • Giveawaye</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-.06em] sm:text-6xl lg:text-7xl">
              DARMOWE<span className="text-pink-500">SKINY</span>.PL
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-white/40 sm:text-sm">
              Miejsce na Twój gotowy baner — podmienimy ten nagłówek na grafikę 1:1, gdy ją podeślesz.
            </p>
          </div>
        </div>
      </header>

      <section className="container-shell py-14 sm:py-20" aria-labelledby="codes-title">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-pink-400">Najlepsze oferty</p>
            <h2 id="codes-title" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Kody do stron</h2>
          </div>
          <span className="hidden text-sm text-white/35 sm:block">Kod główny: <strong className="text-white/70">HARDULO</strong></span>
        </div>
        <OfferGrid offers={siteOffers} />
      </section>

      <section className="container-shell pb-14 sm:pb-20" aria-labelledby="giveaways-title">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[.22em] text-pink-400">Aktualności</p>
          <h2 id="giveaways-title" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Giveawaye i promocje</h2>
        </div>
        <GiveawayCard />
      </section>

      <section className="border-y border-white/[.06] bg-white/[.015] py-14 sm:py-20" aria-labelledby="social-title">
        <div className="container-shell">
          <div className="mb-8 text-center">
            <p className="text-xs font-black uppercase tracking-[.22em] text-pink-400">Hardulo</p>
            <h2 id="social-title" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Social media</h2>
            <p className="mt-3 text-sm text-white/45">Nowe filmy, dropy i info o promocjach.</p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.name as keyof typeof socialIcons];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-glow relative flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1 hover:border-pink-500/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[.06] transition group-hover:bg-pink-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-black">{social.name}</div>
                    <div className="mt-0.5 text-xs text-white/35">@hardulo</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="container-shell flex flex-col gap-3 py-8 text-center text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} Darmoweskiny.pl</p>
        <p>Projekt i content: Hardulo</p>
      </footer>
    </main>
  );
}
