import { MapPin, Navigation } from 'lucide-react'
import { MAP_LAT, MAP_LNG, MAP_QUERY, translations, type Lang } from '../i18n'

export function Venue({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const encoded = encodeURIComponent(MAP_QUERY)
  const google = `https://www.google.com/maps/search/?api=1&query=${encoded}`
  const yandex = `https://yandex.uz/maps/?text=${encoded}`
  const osm = `https://www.openstreetmap.org/export/embed.html?bbox=${MAP_LNG - 0.03}%2C${MAP_LAT - 0.02}%2C${MAP_LNG + 0.03}%2C${MAP_LAT + 0.02}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LNG}`

  return (
    <section className="px-5 py-10">
      <h2 className="text-center font-serif text-3xl text-rose-deep">{t.locationTitle}</h2>
      <div className="mx-auto mt-5 max-w-md overflow-hidden rounded-[28px] border border-gold/30 bg-white shadow-[0_16px_36px_rgba(139,58,82,0.1)]">
        <div className="px-5 py-5 text-center">
          <MapPin className="mx-auto text-rose" />
          <h3 className="mt-2 font-serif text-2xl">{t.venue}</h3>
          <p className="text-sm text-ink/60">{t.region}</p>
        </div>
        <iframe
          title={t.venue}
          src={osm}
          className="h-52 w-full border-0"
          loading="lazy"
        />
        <div className="grid grid-cols-2 gap-3 p-4">
          <a
            href={yandex}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose px-3 py-3 text-center text-xs font-bold text-white"
          >
            <Navigation size={14} />
            {t.yandex}
          </a>
          <a
            href={google}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-white px-3 py-3 text-center text-xs font-bold text-rose-deep"
          >
            <Navigation size={14} />
            {t.google}
          </a>
        </div>
      </div>
    </section>
  )
}
