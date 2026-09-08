'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import TrackedLink from '@/components/TrackedLink';

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
      className="group relative flex min-h-[285px] min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d0e] p-4 transition hover:border-red-500/45 hover:shadow-[0_18px_55px_rgba(244,0,70,.14)] sm:min-h-[310px] sm:p-5"
    >
      <div className="pointer-events-none absolute left-1/2 top-4 h-36 w-36 -translate-x-1/2 rounded-full bg-red-500/10 blur-[60px]" />

      <TrackedLink eventName="BonusClick" eventData={{ partner: name, placement: 'logo' }} href={href} target="_blank" rel="noopener noreferrer sponsored" className="relative flex h-24 items-center justify-center px-3 sm:h-28 sm:px-4" aria-label={`Odbierz bonus na ${name}`}>
        <img src={logo} alt={name} loading="lazy" decoding="async" className="max-h-20 w-auto max-w-[86%] object-contain transition duration-200 group-hover:scale-105" />
      </TrackedLink>

      <div className={`mt-5 min-w-0 rounded-lg border border-red-500/20 bg-white/[.045] px-3 py-3 text-center shadow-[inset_3px_0_0_rgba(244,0,70,.8)] ${themes[theme]}`}>
        <p className="break-words text-sm font-black leading-6 tracking-normal min-[380px]:text-base">{offer}</p>
        <p className="mt-2 text-sm font-semibold leading-5 tracking-normal text-white">
          {detail} Z KODEM <span className="font-black text-red-500">{code}</span>
        </p>
      </div>

      <div className="relative mt-auto pt-5">
        <TrackedLink eventName="BonusClick" eventData={{ partner: name, placement: 'button' }} href={href} target="_blank" rel="noopener noreferrer sponsored" className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-black uppercase text-white transition hover:bg-red-500 active:scale-[.98]">
          Odbierz bonus <ArrowUpRight size={17} />
        </TrackedLink>
      </div>
    </motion.article>
  );
}
