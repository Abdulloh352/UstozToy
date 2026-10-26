import { useState } from 'react'
import { Countdown } from './components/Countdown'
import { Footer } from './components/Footer'
import { GiftCards } from './components/GiftCards'
import { GiftCover } from './components/GiftCover'
import { HeaderBar } from './components/HeaderBar'
import { Hero } from './components/Hero'
import { Invitation } from './components/Invitation'
import { Rsvp } from './components/Rsvp'
import { Timeline } from './components/Timeline'
import { Venue } from './components/Venue'
import type { Lang } from './i18n'
import { startMusic, stopMusic } from './lib/music'

export default function App() {
  const [lang, setLang] = useState<Lang>('lotin')
  const [opened, setOpened] = useState(false)
  const [bursting, setBursting] = useState(false)
  const [playing, setPlaying] = useState(false)

  async function toggleMusic() {
    if (playing) {
      await stopMusic()
      setPlaying(false)
      return
    }
    await startMusic()
    setPlaying(true)
  }

  function openGift() {
    if (bursting) return
    setBursting(true)
    void startMusic()
    setPlaying(true)
    window.setTimeout(() => {
      setOpened(true)
      setBursting(false)
    }, 1400)
  }

  return (
    <div className="mx-auto min-h-svh max-w-md bg-[#fbf6f4]">
      <GiftCover lang={lang} open={opened} bursting={bursting} onOpen={openGift} />
      {opened && (
        <main>
          <HeaderBar lang={lang} onLang={setLang} playing={playing} onToggleMusic={toggleMusic} />
          <Hero lang={lang} />
          <Invitation lang={lang} />
          <Countdown lang={lang} />
          <Timeline lang={lang} />
          <Venue lang={lang} />
          <GiftCards lang={lang} />
          <Rsvp lang={lang} />
          <Footer lang={lang} />
        </main>
      )}
    </div>
  )
}
