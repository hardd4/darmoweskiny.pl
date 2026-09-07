'use client';

import { ArrowUpRight, Gift } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { FeaturedContest as FeaturedContestData } from '@/lib/contests';

function getRemaining(endsAt: string) {
  const difference = Math.max(0, new Date(endsAt).getTime() - Date.now());
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

export default function FeaturedContest({ contest }: { contest: FeaturedContestData }) {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null);

  useEffect(() => {
    setRemaining(getRemaining(contest.endsAt));
    const timer = window.setInterval(() => setRemaining(getRemaining(contest.endsAt)), 1000);
    return () => window.clearInterval(timer);
  }, [contest.endsAt]);

  if (!contest.active) return null;

  return (
    <aside className="mx-auto max-w-7xl px-4 pt-6 sm:px-5 sm:pt-8 md:px-8 md:pt-10" aria-label="Aktywny konkurs">
      <div className="featured-contest grid min-w-0 grid-cols-1 items-center gap-4 rounded-2xl border border-red-500/30 px-3 py-4 sm:grid-cols-[auto_1fr] sm:px-5 lg:grid-cols-[auto_minmax(0,1fr)_auto_auto]">
        <div className="skin-preview relative flex h-20 w-28 max-w-full shrink-0 items-center justify-center justify-self-center overflow-hidden rounded-xl sm:justify-self-start">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,.20),transparent_62%)]" />
          {contest.image ? <img src={contest.image} alt={contest.title} className="relative h-full w-full object-contain p-2" /> : <Gift className="relative text-red-500" size={38} />}
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <div className="text-[10px] font-black uppercase tracking-[.2em] text-red-500">Aktywny konkurs</div>
          <h2 className="mt-1 break-words text-base font-black leading-tight min-[380px]:text-lg sm:text-xl">{contest.title}</h2>
          <div className="mt-1 text-xs font-black text-red-500">{contest.value}</div>
          <p className="mt-2 text-sm font-black uppercase tracking-wide text-white">Losowanie za:</p>
        </div>

        <div className="grid w-full grid-cols-4 gap-1 sm:col-span-2 sm:gap-2 lg:col-span-1 lg:w-auto" aria-label="Czas do losowania">
          <Time value={remaining?.days} label="dni" />
          <Time value={remaining?.hours} label="godz." />
          <Time value={remaining?.minutes} label="min" />
          <Time value={remaining?.seconds} label="sek." />
        </div>

        <a href={contest.href} target="_blank" rel="noopener noreferrer sponsored" className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-black uppercase transition hover:bg-red-500 sm:col-span-2 lg:col-span-1 lg:w-auto">
          Zobacz konkurs <ArrowUpRight size={15} />
        </a>
      </div>
    </aside>
  );
}

function Time({ value, label }: { value?: number; label: string }) {
  return (
    <div className="min-w-0 rounded-lg bg-black/65 px-1 py-2 text-center sm:min-w-12 sm:px-2">
      <div className="text-sm font-black tabular-nums sm:text-base">{value === undefined ? '--' : String(value).padStart(2, '0')}</div>
      <div className="mt-0.5 text-[8px] font-bold uppercase text-white">{label}</div>
    </div>
  );
}
