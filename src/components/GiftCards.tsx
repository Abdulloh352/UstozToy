import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { CARDS, translations, type Lang } from '../i18n'

export function GiftCards({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const [copied, setCopied] = useState<string | null>(null)

  async function copy(number: string) {
    const raw = number.replace(/\s/g, '')
    try {
      await navigator.clipboard.writeText(raw)
      setCopied(number)
      window.setTimeout(() => setCopied(null), 1800)
    } catch {
      setCopied(null)
    }
  }

  return (
    <section className="px-5 py-8">
      <h2 className="text-center font-serif text-3xl text-rose-deep">{t.giftTitle}</h2>
      <p className="mx-auto mt-2 max-w-xs text-center text-sm text-ink/60">{t.giftHint}</p>
      <div className="mx-auto mt-6 grid max-w-md gap-4">
        {CARDS.map((card) => {
          const holder = card.holderKey === 'Xurshid' ? (lang === 'kirill' ? 'Хуршид' : 'Xurshid') : lang === 'kirill' ? 'Рухшона' : 'Ruxshona'
          const isCopied = copied === card.number
          return (
            <article
              key={card.brand}
              className={`relative overflow-hidden rounded-[22px] bg-gradient-to-br ${card.gradient} p-5 text-white shadow-lg`}
            >
              <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/10" />
              <div className="absolute bottom-[-20px] left-[-10px] h-24 w-24 rounded-full bg-black/10" />
              <div className="flex items-center justify-between text-sm font-semibold tracking-widest">
                <span>{card.brand}</span>
                <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px]">{t.cardHolder}</span>
              </div>
              <p className="mt-8 font-serif text-[1.45rem] tracking-[0.14em]">{card.number}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/85">{holder}</p>
              <button
                type="button"
                onClick={() => copy(card.number)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold backdrop-blur"
              >
                {isCopied ? <Check size={14} /> : <Copy size={14} />}
                {isCopied ? t.copied : t.copy}
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}
