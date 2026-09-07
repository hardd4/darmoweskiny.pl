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
      className="group relative flex min-h-[275px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d0e] p-4 transition hover:border-red-500/40"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-red-600/10 blur-[50px]" />

      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="relative flex h-24 items-center justify-center rounded-xl transition hover:bg-white/[.025]" aria-label={`Odbierz bonus na ${name}`}>
        <img src={logo} alt={name} className="max-h-16 w-auto max-w-[82%] object-contain" />
      </a>

      <div className={`mt-3 text-center ${themes[theme]}`}>
        <p className="text-lg font-extrabold leading-6 tracking-normal">{offer}</p>
        <p className="mt-3 min-h-12 text-sm font-semibold leading-6 tracking-normal text-white">
          {detail} Z KODEM <span className="font-extrabold text-red-500">{code}</span>
        </p>
      </div>

      <div className="mt-auto pt-4">
        <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-red-500 active:scale-[.98]">
          Odbierz bonus <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}
