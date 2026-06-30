import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface Props {
  onDone: () => void
}

export default function Preloader({ onDone }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(wrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: onDone,
        })
      },
    })

    tl.fromTo(
      nameRef.current,
      { opacity: 0, filter: 'blur(20px)', y: 20 },
      { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power3.inOut' },
        '-=0.3'
      )
      .fromTo(
        dotRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' },
        '-=0.1'
      )
      .to({}, { duration: 0.4 }) // hold
  }, [onDone])

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[9000] flex flex-col items-center justify-center"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-glow"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-4">
        <div
          ref={nameRef}
          className="opacity-0 font-display font-bold text-5xl md:text-7xl text-white tracking-tight"
          style={{ textShadow: '0 0 40px rgba(230,70,154,0.4)' }}
        >
          Cindy <span className="text-gradient-primary">Solano</span>
        </div>

        <div className="flex items-center gap-3 w-full">
          <div
            ref={lineRef}
            className="h-px flex-1 origin-left"
            style={{
              background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
            }}
          />
          <div
            ref={dotRef}
            className="w-2 h-2 rounded-full"
            style={{ background: 'var(--color-primary)' }}
          />
          <div
            className="h-px flex-1 origin-right"
            style={{
              background: 'linear-gradient(270deg, var(--color-primary), var(--color-secondary))',
              transform: 'scaleX(0)',
            }}
          />
        </div>

        <p className="font-body text-sm tracking-widest uppercase text-white/50">
          Unity & AR/VR Developer
        </p>
      </div>
    </div>
  )
}
