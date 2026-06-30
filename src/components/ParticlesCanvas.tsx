import { useEffect, useRef } from 'react'

interface Particle {
  el: HTMLDivElement
  x: number
  duration: number
  delay: number
  size: number
}

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const colors = [
      'rgba(230,70,154,',
      'rgba(123,92,255,',
      'rgba(255,209,102,',
      'rgba(0,212,255,',
    ]

    const particles: Particle[] = []

    function spawn() {
      if (!container) return
      const size = Math.random() * 5 + 2
      const color = colors[Math.floor(Math.random() * colors.length)]
      const opacity = Math.random() * 0.5 + 0.15
      const duration = Math.random() * 10 + 8
      const x = Math.random() * 100

      const el = document.createElement('div')
      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color}${opacity});
        box-shadow: 0 0 ${size * 2.5}px ${color}${opacity * 0.8});
        left: ${x}%;
        bottom: -10px;
        pointer-events: none;
        will-change: transform, opacity;
        animation: particleRise ${duration}s ease-in forwards;
      `
      container.appendChild(el)

      const p: Particle = { el, x, duration, delay: 0, size }
      particles.push(p)

      setTimeout(() => {
        el.remove()
        const idx = particles.indexOf(p)
        if (idx !== -1) particles.splice(idx, 1)
      }, duration * 1000)
    }

    // Initial burst
    for (let i = 0; i < 25; i++) {
      setTimeout(spawn, i * 120)
    }

    const interval = setInterval(spawn, 350)

    return () => {
      clearInterval(interval)
      particles.forEach((p) => p.el.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  )
}
