import { translations, type Lang } from '../i18n'
import { Ornament } from './Ornament'

export function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang]

  return (
    <footer className="relative overflow-hidden px-5 pb-16 pt-8 text-center blossom-sky">
      <svg className="mx-auto h-28 w-64" viewBox="0 0 260 110" aria-hidden>
        <path d="M20 100 C40 40 80 30 90 70 C100 20 140 20 150 70 C170 25 210 40 240 100 Z" fill="#c45c7a" opacity="0.15" />
        <path d="M30 100 C70 55 100 80 130 45 C150 80 190 50 230 100" stroke="#c9a227" strokeWidth="1.3" fill="none" />
        <circle cx="90" cy="52" r="6" fill="#f3d0dc" />
        <circle cx="150" cy="48" r="5" fill="#e8b4c4" />
        <circle cx="118" cy="38" r="4" fill="#fff6f8" />
        <path d="M118 70c-10 8-18 18-18 30h36c0-12-8-22-18-30Z" fill="#c45c7a" opacity="0.35" />
      </svg>
      <p className="font-serif text-xl text-ink/70">{t.footer}</p>
      <h2 className="font-script mt-1 text-4xl text-rose-deep">{t.couple}</h2>
      <Ornament className="mt-3" />
    </footer>
  )
}
