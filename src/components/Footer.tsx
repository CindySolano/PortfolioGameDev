import { t, tr, type Lang } from '../data/i18n'

interface Props { lang: Lang }

export default function Footer({ lang }: Props) {
  return (
    <footer
      className="relative py-10 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/img/pERSONAJE2.png"
            alt="Cindy Solano"
            className="w-8 h-8 rounded-full object-cover"
            style={{ border: '1.5px solid var(--color-primary)', opacity: 0.8 }}
          />
          <span className="font-display font-semibold text-white/70 text-sm">
            Cindy <span className="text-gradient-primary">Solano</span>
          </span>
        </div>

        <p className="font-body text-white/35 text-sm text-center">
          {tr(t.footer.copy, lang)}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/cindy-carolina-solano-caycedo-735822181"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:cindysolano.dev@gmail.com"
            className="text-white/40 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
