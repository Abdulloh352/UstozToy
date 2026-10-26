let ctx: AudioContext | null = null
let master: GainNode | null = null
let timer: number | null = null
let step = 0

const NOTES = [261.63, 329.63, 392.0, 523.25, 392.0, 349.23, 329.63, 293.66]

function playTone(freq: number, time: number, dur: number) {
  if (!ctx || !master) return
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  const filter = ctx.createBiquadFilter()
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(freq, time)
  filter.type = 'lowpass'
  filter.frequency.value = 1800
  gain.gain.setValueAtTime(0, time)
  gain.gain.linearRampToValueAtTime(0.045, time + 0.04)
  gain.gain.exponentialRampToValueAtTime(0.001, time + dur)
  osc.connect(filter)
  filter.connect(gain)
  gain.connect(master)
  osc.start(time)
  osc.stop(time + dur + 0.05)
}

function tick() {
  if (!ctx || !master) return
  const now = ctx.currentTime
  playTone(NOTES[step % NOTES.length], now, 1.4)
  if (step % 4 === 0) playTone(NOTES[0] / 2, now, 2.2)
  step += 1
}

export async function startMusic() {
  if (!ctx) {
    ctx = new AudioContext()
    master = ctx.createGain()
    master.gain.value = 0.7
    master.connect(ctx.destination)
  }
  if (ctx.state === 'suspended') await ctx.resume()
  if (timer == null) {
    tick()
    timer = window.setInterval(tick, 900)
  }
}

export async function stopMusic() {
  if (timer != null) {
    window.clearInterval(timer)
    timer = null
  }
  if (ctx && ctx.state === 'running') await ctx.suspend()
}
