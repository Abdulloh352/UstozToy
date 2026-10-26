import { motion } from 'framer-motion'
import { translations, type Lang } from '../i18n'
import { Ornament } from './Ornament'

export function Invitation({ lang }: { lang: Lang }) {
  const t = translations[lang]

  return (
    <section className="relative mx-4 -mt-6 rounded-[28px] px-5 py-10 paper ornament-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Ornament />
        <p className="mt-5 font-serif text-[1.35rem] leading-relaxed text-ink/85">{t.inviteBody}</p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-2xl border border-gold/30 bg-white/70 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{t.groomsParents}</p>
            <p className="mt-1 font-serif text-2xl text-rose-deep">{t.groomsParentsNames}</p>
          </div>
          <div className="rounded-2xl border border-gold/30 bg-white/70 px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{t.bridesParents}</p>
            <p className="mt-1 font-serif text-2xl text-rose-deep">{t.bridesParentsNames}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
