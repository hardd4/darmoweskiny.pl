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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.18 }}
      className="group relative flex min-h-[310px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d0e] p-5 transition hover:border-red-500/45 hover:shadow-[0_18px_55px_rgba(244,0,70,.14)]"
    >
      <div className="pointer-events-none absolute left-1/2 top-4 h-36 w-36 -translate-x-1/2 rounded-full bg-red-500/10 blur-[60px]" />

      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="relative flex h-28 items-center justify-center px-4" aria-label={`Odbierz bonus na ${name}`}>
        <img src={logo} alt={name} className="max-h-20 w-auto max-w-[86%] object-contain transition duration-200 group-hover:scale-105" />
      </a>

      <div className={`mt-5 min-w-0 text-center ${themes[theme]}`}>
        <p className="text-base font-black leading-6 tracking-normal">{offer}</p>
        <p className="mt-2 text-xs font-bold leading-5 tracking-normal text-white">
          {detail} Z KODEM <span className="font-black text-red-500">{code}</span>
        </p>
      </div>

      <div className="relative mt-auto pt-5">
        <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-red-500 active:scale-[.98]">
          Odbierz bonus <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}
