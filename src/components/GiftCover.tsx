import { AnimatePresence, motion } from 'framer-motion'
import { translations, type Lang } from '../i18n'
import { Petals } from './Petals'

type Props = {
  lang: Lang
  open: boolean
  bursting: boolean
  onOpen: () => void
}

export function GiftCover({ lang, open, bursting, onOpen }: Props) {
  const t = translations[lang]

  return (
    <AnimatePresence>
      {!open && (
        <motion.section
          className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden px-6 blossom-sky"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7 }}
        >
          {bursting && <Petals burst />}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{ backgroundImage: 'url(/ikat.svg)', backgroundSize: '180px' }}
          />

          <motion.p
            className="relative z-10 text-center font-serif text-[1.85rem] leading-tight text-rose-deep"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: bursting ? 0 : 1, y: 0 }}
          >
            {t.dearGuest}
          </motion.p>
          <motion.p
            className="relative z-10 mt-3 max-w-[18rem] text-center text-[11px] font-semibold tracking-[0.2em] text-rose"
            animate={{ opacity: bursting ? 0 : 1 }}
          >
            {t.openGift}
          </motion.p>

          <button
            type="button"
            onClick={onOpen}
            disabled={bursting}
            className="relative z-10 mt-8 border-0 bg-transparent p-0"
            aria-label={t.openGift}
            style={{ perspective: '1000px' }}
          >
            <div className="relative h-[270px] w-[210px]" style={{ transformStyle: 'preserve-3d' }}>
              <motion.div
                className="absolute bottom-6 left-[5px] h-[170px] w-[200px] overflow-hidden rounded-[4px] shadow-[0_28px_40px_rgba(74,51,64,0.38)]"
                animate={bursting ? { y: 16, scale: 0.94 } : { y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <div className="ikat-bg h-full w-full" />
                <div className="absolute inset-y-0 left-[46%] w-10 silk-ribbon" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/25" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/15" />
              </motion.div>

              <motion.div
                className="absolute left-0 top-[18px] h-[92px] w-[210px] origin-bottom"
                style={{ transformStyle: 'preserve-3d' }}
                animate={bursting ? { rotateX: -118, y: -12 } : { rotateX: 6 }}
                transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="ikat-bg absolute inset-0 rounded-sm shadow-xl" />
                <div className="absolute inset-y-0 left-[46%] w-10 silk-ribbon" />
                <div className="absolute left-1/2 top-[-22px] h-[70px] w-[70px] -translate-x-1/2">
                  <span className="absolute left-[18px] top-7 h-12 w-[22px] -rotate-[28deg] rounded-full silk-ribbon shadow-md" />
                  <span className="absolute right-[18px] top-7 h-12 w-[22px] rotate-[28deg] rounded-full silk-ribbon shadow-md" />
                  <span className="absolute left-1/2 top-9 h-6 w-6 -translate-x-1/2 rounded-full bg-[#d4a017] ring-2 ring-[#f7e7b0]" />
                </div>
              </motion.div>
            </div>
          </button>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
