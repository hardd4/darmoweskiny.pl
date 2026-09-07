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
    <aside className="mx-auto max-w-7xl px-5 pt-8 md:px-8 md:pt-10" aria-label="Aktywny konkurs">
      <div className="featured-contest grid grid-cols-1 items-center gap-4 rounded-2xl border border-red-500/30 px-4 py-4 sm:grid-cols-[auto_1fr] sm:px-5 lg:grid-cols-[auto_minmax(0,1fr)_auto_auto]">
        <div className="flex h-20 w-28 shrink-0 items-center justify-center justify-self-center overflow-hidden rounded-xl bg-black/50 sm:justify-self-start">
          {contest.image ? <img src={contest.image} alt={contest.title} className="h-full w-full object-contain p-2" /> : <Gift className="text-red-500" size={38} />}
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <div className="text-[10px] font-black uppercase tracking-[.2em] text-red-500">Aktywny konkurs</div>
          <h2 className="mt-1 break-words text-lg font-black sm:text-xl">{contest.title}</h2>
          <p className="mt-1 text-xs font-bold uppercase text-white">Losowanie za:</p>
        </div>

        <div className="flex justify-center gap-1.5 sm:col-span-2 sm:gap-2 lg:col-span-1" aria-label="Czas do losowania">
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
    <div className="min-w-12 rounded-lg bg-black/65 px-2 py-2 text-center">
      <div className="font-black tabular-nums">{value === undefined ? '--' : String(value).padStart(2, '0')}</div>
      <div className="mt-0.5 text-[8px] font-bold uppercase text-white">{label}</div>
    </div>
  );
}
