import { Music2, Pause } from 'lucide-react'
import type { Lang } from '../i18n'
import { translations } from '../i18n'

type Props = {
  lang: Lang
  onLang: (lang: Lang) => void
  playing: boolean
  onToggleMusic: () => void
}

export function HeaderBar({ lang, onLang, playing, onToggleMusic }: Props) {
  const t = translations[lang]

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 bg-[#fffaf8]/85 px-4 py-3 backdrop-blur-md">
      <div className="flex rounded-full border border-gold/40 bg-white/70 p-1 text-xs font-semibold tracking-wide">
        <button
          type="button"
          onClick={() => onLang('lotin')}
          className={`rounded-full px-3 py-1.5 transition ${
            lang === 'lotin' ? 'bg-rose text-white' : 'text-ink/70'
          }`}
        >
          Lotin
        </button>
        <button
          type="button"
          onClick={() => onLang('kirill')}
          className={`rounded-full px-3 py-1.5 transition ${
            lang === 'kirill' ? 'bg-rose text-white' : 'text-ink/70'
          }`}
        >
          Kirill
        </button>
      </div>

      <button
        type="button"
        onClick={onToggleMusic}
        className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-3 py-2 text-xs font-semibold text-rose-deep"
        aria-label={playing ? t.pause : t.play}
      >
        {playing ? <Pause size={16} /> : <Music2 size={16} />}
        {t.music}
      </button>
    </header>
  )
}
