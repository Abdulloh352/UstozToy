import { motion } from 'framer-motion'
import { translations, type Lang } from '../i18n'
import { Ornament, PaisleyCorner } from './Ornament'
import { Petals } from './Petals'

export function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang]

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-10 blossom-sky">
      <Petals />
      <PaisleyCorner className="absolute left-0 top-0 h-24 w-24 opacity-80" />
      <PaisleyCorner className="absolute right-0 top-0 h-24 w-24 rotate-90 opacity-80" />

      <svg className="absolute bottom-0 left-0 w-[70%] opacity-70" viewBox="0 0 320 180" aria-hidden>
        <path d="M0 180 C40 120 70 140 90 90 C100 140 130 80 150 180 Z" fill="#c45c7a" opacity="0.18" />
        <path d="M20 180 C70 70 90 110 120 40 C140 110 170 60 190 180 Z" fill="#8b3a52" opacity="0.12" />
        <circle cx="92" cy="78" r="7" fill="#f3d0dc" />
        <circle cx="118" cy="52" r="5" fill="#e8b4c4" />
        <circle cx="70" cy="100" r="4" fill="#fff6f8" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-[62%] opacity-70" viewBox="0 0 280 180" aria-hidden>
        <path d="M280 180 C240 110 210 140 190 70 C180 130 150 80 130 180 Z" fill="#c45c7a" opacity="0.16" />
        <circle cx="188" cy="78" r="6" fill="#f3d0dc" />
        <circle cx="210" cy="50" r="4.5" fill="#e8b4c4" />
      </svg>

      <motion.div
        className="relative z-10 mx-auto max-w-md text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">{t.weddingType}</p>
        <h1 className="font-script mt-3 text-[3.35rem] leading-tight text-rose-deep">{t.couple}</h1>
        <Ornament className="mt-2" />
        <p className="mt-3 font-serif text-xl italic text-ink/70">{t.togetherForever}</p>
        <p className="mt-6 inline-block rounded-full border border-gold/50 bg-white/60 px-5 py-2 font-serif text-2xl text-rose">
          {t.dateShort}
        </p>
      </motion.div>
    </section>
  )
}
