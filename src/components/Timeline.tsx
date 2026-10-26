import { Heart, Sparkles, Users, Utensils, Church } from 'lucide-react'
import { translations, type Lang } from '../i18n'

const ICONS = [Utensils, Church, Users, Heart, Sparkles]

export function Timeline({ lang }: { lang: Lang }) {
  const t = translations[lang]

  return (
    <section className="px-5 py-6">
      <h2 className="text-center font-serif text-3xl text-rose-deep">{t.schedule}</h2>
      <div className="relative mx-auto mt-8 max-w-md pl-2">
        <div className="absolute bottom-4 left-[31px] top-4 w-px bg-gradient-to-b from-gold via-rose to-gold-soft" />
        <ul className="space-y-5">
          {t.events.map((event, i) => {
            const Icon = ICONS[i]
            return (
              <li key={event.time} className="relative flex gap-4">
                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-white text-rose shadow-sm">
                  <Icon size={18} />
                </div>
                <div className="flex-1 rounded-2xl border border-gold/25 bg-white/80 px-4 py-3">
                  <p className="text-xs font-bold tracking-widest text-gold">{event.time}</p>
                  <p className="font-serif text-xl text-ink">{event.title}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
