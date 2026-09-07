'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

type Props = {
  name: string;
  logo: string;
  offer: string;
  detail: string;
  code: string;
  href: string;
  theme: 'cyan' | 'red' | 'violet';
};

const themes = {
  cyan: 'text-cyan-300',
  red: 'text-red-400',
  violet: 'text-violet-300',
};

export default function SiteCard({ name, logo, offer, detail, code, href, theme }: Props) {
  return (
    <motion.article
      whileHover={{ x: 3 }}
      transition={{ duration: 0.18 }}
      className="group relative grid grid-cols-1 items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0e] p-4 transition hover:border-red-500/40 sm:grid-cols-[170px_minmax(0,1fr)_190px] sm:gap-6"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-red-600/10 blur-[55px]" />

      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="relative flex h-20 items-center justify-center rounded-xl bg-black/35 px-3 transition hover:bg-white/[.035]" aria-label={`Odbierz bonus na ${name}`}>
        <img src={logo} alt={name} className="max-h-14 w-auto max-w-full object-contain" />
      </a>

      <div className={`min-w-0 text-center sm:text-left ${themes[theme]}`}>
        <p className="text-base font-black leading-6 tracking-normal sm:text-lg">{offer}</p>
        <p className="mt-1 text-xs font-bold leading-5 tracking-normal text-white sm:text-sm">
          {detail} Z KODEM <span className="font-black text-red-500">{code}</span>
        </p>
      </div>

      <div className="relative">
        <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-red-500 active:scale-[.98]">
          Odbierz bonus <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}
