'use client';

import { motion } from 'motion/react';
import { Copy, ExternalLink, Gift, Sparkles } from 'lucide-react';
import { useState } from 'react';
import type { SiteOffer } from '@/lib/sites';

export function OfferGrid({ offers }: { offers: SiteOffer[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyCode(name: string, code: string) {
    await navigator.clipboard.writeText(code);
    setCopied(name);
    window.setTimeout(() => setCopied(null), 1400);
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {offers.map((offer, index) => (
        <motion.article
          key={offer.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
          whileHover={{ y: -4 }}
          className="card-glow rounded-3xl p-5"
        >
          <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${offer.accent} blur-2xl`} />
          <div className="relative z-10 flex h-full min-h-64 flex-col">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[.06] text-lg font-black">
                {offer.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[.16em] text-white/55">
                kod bonusowy
              </span>
            </div>

            <h3 className="text-xl font-black tracking-tight">{offer.name}</h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-white/58">{offer.bonus}</p>

            <div className="mt-auto pt-6">
              <button
                onClick={() => copyCode(offer.name, offer.code)}
                className="group flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-left transition hover:border-pink-500/40 hover:bg-white/[.05]"
                aria-label={`Skopiuj kod ${offer.code} dla ${offer.name}`}
              >
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[.18em] text-white/35">Twój kod</span>
                  <span className="mt-0.5 block text-base font-black tracking-[.08em]">{copied === offer.name ? 'SKOPIOWANO!' : offer.code}</span>
                </span>
                <Copy className="h-4 w-4 text-white/45 transition group-hover:text-pink-400" />
              </button>

              <a
                href={offer.href}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-black transition hover:bg-pink-400"
              >
                Otwórz stronę <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function GiveawayCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="card-glow grid-noise relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10"
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-500/15 blur-3xl" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.16em] text-pink-300">
            <Gift className="h-4 w-4" /> Giveaway / promocje
          </div>
          <h3 className="max-w-2xl text-2xl font-black tracking-tight sm:text-3xl">Tu wpadną aktualne giveawaye z CSGOSkins</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
            Sekcja jest gotowa wizualnie. Gdy podeślesz mi źródło aktualnych giveawayów albo potwierdzimy publiczne API, podłączę ją pod prawdziwe dane zamiast wpisywać nieaktualne nagrody na sztywno.
          </p>
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/[.05] shadow-2xl shadow-pink-500/10 sm:h-28 sm:w-28">
          <Sparkles className="h-10 w-10 text-pink-400" />
        </div>
      </div>
    </motion.div>
  );
}
