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
  theme: 'cyan' | 'red' | 'violet' | 'orange';
};

const themes = {
  cyan: 'border-cyan-500/25 bg-cyan-500/[.05] text-cyan-300',
  red: 'border-red-500/25 bg-red-500/[.05] text-red-400',
  violet: 'border-violet-500/25 bg-violet-500/[.05] text-violet-300',
  orange: 'border-orange-500/25 bg-orange-500/[.05] text-orange-300',
};

export default function SiteCard({ name, logo, offer, detail, code, href, theme }: Props) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.18 }}
      className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0808] p-5 transition hover:border-red-500/40"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 bg-red-600/10 blur-[55px]" />

      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="relative flex h-24 items-center justify-center rounded-xl transition hover:bg-white/[.03]" aria-label={`Odbierz bonus na ${name}`}>
        <img src={logo} alt={name} className="max-h-20 w-auto max-w-[88%] object-contain" />
      </a>

      <div className={`mt-5 rounded-2xl border px-3 py-5 text-center ${themes[theme]}`}>
        <p className="text-sm font-black">{offer}</p>
        <p className="mt-2 min-h-10 text-xs font-bold leading-5 text-white">
          {detail} Z KODEM <span className="text-red-500">{code}</span>
        </p>
      </div>

      <div className="mt-auto pt-5">
        <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-red-500 active:scale-[.98]">
          Odbierz bonus <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}
