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
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      className="group relative flex min-h-[190px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0e] p-4 transition hover:border-red-500/40"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-red-600/10 blur-[50px]" />

      <div className="relative flex items-center gap-4">
        <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="flex h-20 w-24 shrink-0 items-center justify-center rounded-xl border border-white/[.06] bg-black/55 p-2 transition hover:border-red-500/35" aria-label={`Odbierz bonus na ${name}`}>
          <img src={logo} alt={name} className="max-h-14 w-auto max-w-full object-contain" />
        </a>
        <div className={`min-w-0 flex-1 ${themes[theme]}`}>
          <span className="inline-flex rounded-md bg-white/[.06] px-2 py-1 text-[9px] font-black uppercase tracking-wider text-white">Oferta</span>
          <p className="mt-2 text-sm font-black">{offer}</p>
          <p className="mt-1 text-[11px] font-bold leading-5 text-white">
            {detail} Z KODEM <span className="text-red-500">{code}</span>
          </p>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-red-500 active:scale-[.98]">
          Odbierz bonus <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}
