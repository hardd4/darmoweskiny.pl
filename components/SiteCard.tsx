'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

type Props = {
  name: string;
  logo: string;
  code: string;
  bonus: string;
  href: string;
};

export default function SiteCard({ name, logo, code, bonus, href }: Props) {
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

      <div className="mt-5">
        <h3 className="text-lg font-black">{name}</h3>
        <p className="mt-2 min-h-10 text-xs leading-5 text-white">{bonus}</p>
      </div>

      <div className="mt-auto pt-5">
        <div className="mb-3 rounded-xl border border-red-500/15 bg-red-500/[.06] px-4 py-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Kod</span>
          <div className="mt-1 font-black tracking-wider text-red-500">{code}</div>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-red-500 active:scale-[.98]">
          Odbierz bonus <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}
