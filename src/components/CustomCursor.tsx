import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    const ring = ringRef.current!
    const label = labelRef.current!

    let mouseX = -100, mouseY = -100
    let ringX = -100, ringY = -100
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      label.style.transform = `translate(${ringX + 22}px, ${ringY + 22}px)`
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)

    const expand = (e: Event) => {
      ring.style.width = '52px'
      ring.style.height = '52px'
      ring.style.opacity = '1'
      ring.style.borderColor = 'var(--color-primary)'
      ring.style.boxShadow = '0 0 12px rgba(230,70,154,0.4)'
      const cursorLabel = (e.currentTarget as HTMLElement).getAttribute('data-cursor')
      if (cursorLabel) {
        label.textContent = cursorLabel
        label.style.opacity = '1'
      }
    }

    const contract = () => {
      ring.style.width = '28px'
      ring.style.height = '28px'
      ring.style.opacity = '0.7'
      ring.style.borderColor = 'rgba(255,255,255,0.6)'
      ring.style.boxShadow = 'none'
      label.style.opacity = '0'
      label.textContent = ''
    }

    const interactives = document.querySelectorAll('a, button, [data-cursor]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', contract)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', contract)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: 28,
          height: 28,
          border: '1.5px solid rgba(255,255,255,0.6)',
          opacity: 0.7,
          transition: 'width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.2s, box-shadow 0.2s',
        }}
      />
      <span
        ref={labelRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] text-xs font-semibold text-white opacity-0"
        style={{ transition: 'opacity 0.2s', textShadow: '0 0 8px rgba(0,0,0,0.9)' }}
      />
    </>
  )
}
