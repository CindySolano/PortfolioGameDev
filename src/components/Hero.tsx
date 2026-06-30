import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { t, tr, type Lang } from '../data/i18n'
import MagneticButton from './MagneticButton'
import { useReducedMotion } from '../hooks/useReducedMotion'
import FloatingParticles from './ParticlesCanvas'

const TYPED_SPEED = 80
const ERASE_SPEED = 50
const PAUSE = 1800

interface Props {
  lang: Lang
  onScrollToPortfolio: () => void
  onScrollToContact: () => void
}

export default function Hero({ lang, onScrollToPortfolio, onScrollToContact }: Props) {
  const reduced = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const mouseLayerRef = useRef<HTMLDivElement>(null)
  const [typedText, setTypedText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)

  // Entrance animation
  useEffect(() => {
    if (reduced) return
    const tl = gsap.timeline({ delay: 2 })
    tl.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
      .fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
      .fromTo(descRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo(actionsRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.3')
      .fromTo(avatarRef.current, { scale: 0.8, opacity: 0, rotateY: -20 }, { scale: 1, opacity: 1, rotateY: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
  }, [reduced])

  // Typewriter
  useEffect(() => {
    const roles = t.hero.roles[lang]
    let i = roleIdx
    let txt = ''
    let typing = true
    let timeout: ReturnType<typeof setTimeout>

    function tick() {
      const target = roles[i]
      if (typing) {
        if (txt.length < target.length) {
          txt += target[txt.length]
          setTypedText(txt)
          timeout = setTimeout(tick, TYPED_SPEED)
        } else {
          timeout = setTimeout(() => { typing = false; tick() }, PAUSE)
        }
      } else {
        if (txt.length > 0) {
          txt = txt.slice(0, -1)
          setTypedText(txt)
          timeout = setTimeout(tick, ERASE_SPEED)
        } else {
          i = (i + 1) % roles.length
          setRoleIdx(i)
          typing = true
          timeout = setTimeout(tick, 300)
        }
      }
    }
    timeout = setTimeout(tick, 400)
    return () => clearTimeout(timeout)
  }, [lang, roleIdx])

  // Mouse parallax
  useEffect(() => {
    if (reduced) return
    const layer = mouseLayerRef.current
    if (!layer) return

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      layer.style.transform = `translate(${dx * -12}px, ${dy * -8}px)`
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduced])

  // Spotlight
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      hero.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      hero.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    }
    hero.addEventListener('mousemove', onMove, { passive: true })
    return () => hero.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="spotlight relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingParticles />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, var(--color-secondary), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent)' }}
        />
      </div>

      {/* Mouse parallax layer */}
      <div
        ref={mouseLayerRef}
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ transition: 'transform 0.1s ease-out' }}
      >
        {/* Floating decorative icons */}
        {[
          { icon: '◈', x: '8%', y: '18%', size: '1.4rem', delay: '0s', color: 'var(--color-primary)' },
          { icon: '⬡', x: '85%', y: '22%', size: '1rem', delay: '1s', color: 'var(--color-secondary)' },
          { icon: '◉', x: '12%', y: '72%', size: '1.2rem', delay: '2s', color: 'var(--color-accent)' },
          { icon: '◈', x: '90%', y: '65%', size: '0.9rem', delay: '0.5s', color: 'var(--color-primary)' },
          { icon: '✦', x: '50%', y: '12%', size: '1rem', delay: '1.5s', color: 'var(--color-accent)' },
          { icon: '⬡', x: '5%', y: '45%', size: '0.8rem', delay: '2.5s', color: 'var(--color-secondary)' },
        ].map((item, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: item.x,
              top: item.y,
              fontSize: item.size,
              color: item.color,
              animationDelay: item.delay,
              opacity: 0.7,
              filter: `drop-shadow(0 0 6px ${item.color})`,
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-[10] max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="font-body text-sm font-medium tracking-widest uppercase mb-4 text-white/50">
              {tr(t.hero.greeting, lang)}
            </p>

            <h1
              ref={titleRef}
              className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-4 opacity-0"
              style={{ textShadow: '0 0 60px rgba(230,70,154,0.2)' }}
            >
              Cindy{' '}
              <span
                className="text-gradient-primary"
                style={{ textShadow: '0 0 40px rgba(230,70,154,0.4)' }}
              >
                Solano
              </span>
            </h1>

            <h2
              ref={subtitleRef}
              className="font-display font-semibold text-2xl md:text-3xl mb-6 opacity-0"
              style={{ minHeight: '2.5rem' }}
            >
              <span className="text-white/80">{typedText}</span>
              <span
                className="inline-block w-0.5 h-7 ml-1 align-middle animate-pulse-glow"
                style={{ background: 'var(--color-primary)' }}
              />
            </h2>

            <p
              ref={descRef}
              className="font-body text-white/65 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 opacity-0"
            >
              {tr(t.hero.description, lang)}
            </p>

            <div ref={actionsRef} className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0">
              <MagneticButton
                className="btn-primary text-sm font-semibold"
                onClick={onScrollToPortfolio}
              >
                {tr(t.hero.cta1, lang)}
              </MagneticButton>
              <MagneticButton
                className="btn-outline text-sm font-semibold"
                onClick={onScrollToContact}
              >
                {tr(t.hero.cta2, lang)}
              </MagneticButton>
            </div>
          </div>

          {/* Avatar */}
          <div ref={avatarRef} className="relative flex-shrink-0 opacity-0">
            {/* Rings */}
            <div
              className="absolute inset-0 m-auto w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full animate-spin-slow"
              style={{ border: '1px solid rgba(230,70,154,0.2)', top: '-10%', left: '-10%' }}
            />
            <div
              className="absolute inset-0 m-auto w-[240px] h-[240px] md:w-[310px] md:h-[310px] rounded-full animate-spin-slow"
              style={{
                border: '1px solid rgba(123,92,255,0.25)',
                animationDirection: 'reverse',
                animationDuration: '15s',
                top: '-5%',
                left: '-5%',
              }}
            />

            {/* Avatar image */}
            <div
              className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden"
              style={{
                border: '3px solid rgba(230,70,154,0.5)',
                boxShadow: '0 0 60px rgba(230,70,154,0.3), 0 0 120px rgba(123,92,255,0.15)',
              }}
            >
              <img
                src="/img/pERSONAJE2.png"
                alt="Cindy Solano"
                className="w-full h-full object-cover"
              />
              {/* Shimmer */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(230,70,154,0.08) 100%)',
                }}
              />
            </div>

            {/* Floating badges */}
            <div
              className="absolute -right-4 top-4 card-glass px-3 py-2 animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="text-xs font-semibold text-white/90">3+ Years XR</span>
            </div>
            <div
              className="absolute -left-6 bottom-8 card-glass px-3 py-2 animate-float"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="text-xs font-semibold text-white/90">Unity / C#</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-white/40 tracking-widest uppercase">scroll</span>
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, var(--color-primary), transparent)' }}
        />
      </div>
    </section>
  )
}
