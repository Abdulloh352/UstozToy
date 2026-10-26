import { AnimatePresence, motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { translations, type Lang } from '../i18n'

export function Rsvp({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const [name, setName] = useState('')
  const [coming, setComing] = useState<'yes' | 'no'>('yes')
  const [guests, setGuests] = useState(1)
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  function submit(e: FormEvent) {
    e.preventDefault()
    const payload = { name, coming, guests, message, at: new Date().toISOString() }
    const prev = JSON.parse(localStorage.getItem('rsvp') || '[]') as unknown[]
    localStorage.setItem('rsvp', JSON.stringify([...prev, payload]))
    setOpen(true)
  }

  return (
    <section className="px-5 py-10">
      <h2 className="text-center font-serif text-3xl text-rose-deep">{t.rsvpTitle}</h2>
      <p className="mt-2 text-center text-sm text-ink/60">{t.rsvpSubtitle}</p>

      <form
        onSubmit={submit}
        className="mx-auto mt-6 max-w-md space-y-4 rounded-[28px] border border-gold/30 bg-white/85 p-5 shadow-[0_12px_28px_rgba(139,58,82,0.08)]"
      >
        <label className="block text-sm font-semibold">
          {t.name}
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            className="mt-1 w-full rounded-2xl border border-gold/25 bg-blush/40 px-4 py-3 font-normal outline-none focus:border-rose"
          />
        </label>

        <fieldset className="space-y-2">
          <label className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-white px-4 py-3">
            <input
              type="radio"
              name="attend"
              checked={coming === 'yes'}
              onChange={() => setComing('yes')}
              className="accent-[#c45c7a]"
            />
            {t.attendYes}
          </label>
          <label className="flex items-center gap-3 rounded-2xl border border-gold/20 bg-white px-4 py-3">
            <input
              type="radio"
              name="attend"
              checked={coming === 'no'}
              onChange={() => setComing('no')}
              className="accent-[#c45c7a]"
            />
            {t.attendNo}
          </label>
        </fieldset>

        {coming === 'yes' && (
          <div>
            <p className="text-sm font-semibold">{t.guestCount}</p>
            <div className="mt-2 flex items-center justify-between rounded-2xl border border-gold/25 bg-blush/40 px-4 py-2">
              <button
                type="button"
                aria-label="-"
                className="h-9 w-9 rounded-full bg-white text-lg text-rose"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
              >
                −
              </button>
              <span className="font-serif text-2xl">{guests}</span>
              <button
                type="button"
                aria-label="+"
                className="h-9 w-9 rounded-full bg-white text-lg text-rose"
                onClick={() => setGuests((g) => Math.min(12, g + 1))}
              >
                +
              </button>
            </div>
          </div>
        )}

        <label className="block text-sm font-semibold">
          {t.wishes}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.wishesPlaceholder}
            rows={4}
            className="mt-1 w-full resize-none rounded-2xl border border-gold/25 bg-blush/40 px-4 py-3 font-normal outline-none focus:border-rose"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-rose py-3.5 text-sm font-bold tracking-[0.18em] text-white shadow-md"
        >
          {t.submit}
        </button>
      </form>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-[#4a3340]/45 px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                className="w-full max-w-sm rounded-[28px] bg-white p-6 text-center shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-script text-5xl text-rose">♡</p>
                <h3 className="mt-2 font-serif text-3xl text-rose-deep">{t.modalTitle}</h3>
                <p className="mt-3 text-ink/70">{coming === 'yes' ? t.modalYes : t.modalNo}</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-6 w-full rounded-full bg-rose py-3 text-sm font-bold text-white"
                >
                  {t.close}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  )
}
