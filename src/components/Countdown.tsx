import { useEffect, useMemo, useState } from 'react'
import { translations, WEDDING_DATE, type Lang } from '../i18n'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])
  const diff = Math.max(0, target.getTime() - now)
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const c = useCountdown(WEDDING_DATE)
  const cells = [
    { label: t.days, value: pad(c.days) },
    { label: t.hours, value: pad(c.hours) },
    { label: t.minutes, value: pad(c.minutes) },
    { label: t.seconds, value: pad(c.seconds) },
  ]

  const firstWeekday = useMemo(() => {
    const d = new Date(2026, 10, 1)
    const js = d.getDay()
    return js === 0 ? 6 : js - 1
  }, [])

  const daysInMonth = 30

  return (
    <section className="px-5 py-12">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">{t.dateLabel}</p>
      <h2 className="mt-2 text-center font-serif text-3xl text-rose-deep">{t.dateFull}</h2>

      <div className="mx-auto mt-6 max-w-sm rounded-[24px] border border-gold/35 bg-white/80 p-4 shadow-[0_12px_30px_rgba(139,58,82,0.08)]">
        <p className="mb-3 text-center font-serif text-xl text-ink">{t.monthName} 2026</p>
        <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-ink/45">
          {t.weekdays.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1">
          {Array.from({ length: firstWeekday }).map((_, i) => (
            <span key={`e-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            const isWedding = day === 15
            return (
              <span
                key={day}
                className={`flex h-9 items-center justify-center rounded-full text-sm ${
                  isWedding
                    ? 'bg-rose font-bold text-white shadow-[0_0_0_4px_rgba(196,92,122,0.18)]'
                    : 'text-ink/80'
                }`}
              >
                {day}
              </span>
            )
          })}
        </div>
      </div>

      <h3 className="mt-10 text-center font-serif text-2xl tracking-[0.2em] text-rose-deep">
        {t.countdownTitle}
      </h3>
      <div className="mx-auto mt-4 grid max-w-sm grid-cols-4 gap-2">
        {cells.map((cell) => (
          <div key={cell.label} className="rounded-2xl bg-rose-deep px-1 py-3 text-center text-white shadow-md">
            <div className="font-serif text-2xl leading-none">{cell.value}</div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-petal">{cell.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
