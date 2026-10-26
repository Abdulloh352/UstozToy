import { motion } from 'framer-motion'

const PETALS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  delay: (i % 7) * 0.45,
  duration: 10 + (i % 5) * 1.6,
  size: 10 + (i % 4) * 5,
  drift: 20 + (i % 6) * 12,
  rotate: 180 + (i % 3) * 90,
  color: i % 3 === 0 ? '#f3d0dc' : i % 3 === 1 ? '#e8b4c4' : '#fff6f8',
}))

export function Petals({ burst = false }: { burst?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PETALS.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-[-8%] rounded-[60%_40%_70%_30%/50%_60%_40%_50%] shadow-[inset_-2px_-2px_4px_rgba(139,58,82,0.15)]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.3,
            background: p.color,
          }}
          initial={burst ? { y: '40%', opacity: 0, scale: 0.4 } : { y: '-10%', opacity: 0.85 }}
          animate={{
            y: '110vh',
            x: [0, p.drift, -p.drift / 2, p.drift / 3],
            rotate: p.rotate,
            opacity: [0.9, 0.8, 0],
            scale: burst ? [0.4, 1, 0.9] : 1,
          }}
          transition={{
            duration: burst ? 3.2 + (p.id % 4) * 0.3 : p.duration,
            delay: burst ? (p.id % 8) * 0.05 : p.delay,
            repeat: burst ? 0 : Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
