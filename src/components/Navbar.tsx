import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { t, tr, type Lang } from '../data/i18n'
import MagneticButton from './MagneticButton'

interface Props {
  lang: Lang
  onLangToggle: (l: Lang) => void
}

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'contact', href: '#contact' },
] as const

export default function Navbar({ lang, onLangToggle }: Props) {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.8 }
    )
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        padding: scrolled ? '10px 0' : '18px 0',
        background: scrolled ? 'rgba(16,8,24,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 no-underline"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          <img
            src="/img/pERSONAJE2.png"
            alt="Cindy Solano"
            className="w-9 h-9 rounded-full object-cover"
            style={{ border: '2px solid var(--color-primary)', boxShadow: '0 0 12px rgba(230,70,154,0.4)' }}
          />
          <span className="font-display font-bold text-white text-lg hidden sm:block">
            Cindy <span className="text-gradient-primary">Solano</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navItems.map(({ key, href }) => (
            <li key={key}>
              <button
                onClick={() => scrollTo(href)}
                className="relative font-body font-medium text-sm text-white/75 hover:text-white transition-colors duration-200 group bg-transparent border-none"
              >
                {tr(t.nav[key as keyof typeof t.nav], lang)}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: 'var(--color-primary)' }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Lang slider */}
          <div
            className="flex items-center rounded-full p-0.5 relative"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {(['en', 'es'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => onLangToggle(l)}
                className="relative z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 bg-transparent border-none"
                style={{ color: lang === l ? 'white' : 'rgba(255,255,255,0.4)' }}
              >
                {l}
              </button>
            ))}
            {/* Sliding pill */}
            <div
              className="absolute top-0.5 bottom-0.5 rounded-full transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                boxShadow: '0 0 10px rgba(230,70,154,0.4)',
                width: 'calc(50% - 2px)',
                left: lang === 'en' ? '2px' : 'calc(50%)',
              }}
            />
          </div>

          {/* Contact CTA */}
          <MagneticButton
            className="hidden md:inline-block btn-primary text-sm"
            onClick={() => scrollTo('#contact')}
          >
            {tr(t.nav.contact, lang)}
          </MagneticButton>

          {/* Mobile menu btn */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{ maxHeight: menuOpen ? '300px' : '0' }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => scrollTo(href)}
              className="text-left font-body font-medium text-white/80 hover:text-white transition-colors bg-transparent border-none text-base"
            >
              {tr(t.nav[key as keyof typeof t.nav], lang)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
