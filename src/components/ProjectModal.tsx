import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../data/projects'
import type { Lang } from '../data/i18n'

interface Props {
  project: Project | null
  lang: Lang
  onClose: () => void
}

export default function ProjectModal({ project, lang, onClose }: Props) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  const title = project ? (lang === 'en' ? project.titleEn : project.titleEs) : ''
  const desc = project
    ? (lang === 'en' ? (project.detailEn ?? project.descEn) : (project.detailEs ?? project.descEs))
    : ''

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(8,4,16,0.88)', backdropFilter: 'blur(14px)' }}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-4xl rounded-[28px] overflow-hidden"
            style={{
              background: `linear-gradient(160deg, ${project.color}12 0%, rgba(14,6,22,0.99) 100%)`,
              border: `1px solid ${project.color}30`,
              boxShadow: `0 32px 80px rgba(0,0,0,0.65), 0 0 80px ${project.color}12`,
              maxHeight: '90vh',
            }}
            initial={{ scale: 0.9, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
          >
            {/* Glow accent */}
            <div
              className="absolute top-0 left-0 w-full h-1 pointer-events-none"
              style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 hover:scale-110 hover:bg-white/15"
              style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', fontSize: '1.1rem' }}
            >
              ✕
            </button>

            <div className={`flex ${project.vertical ? 'flex-col items-center' : 'flex-col lg:flex-row'} overflow-y-auto`}
              style={{ maxHeight: '90vh' }}
            >
              {/* Video */}
              {project.vertical ? (
                <div className="w-full flex justify-center bg-black" style={{ maxHeight: '55vh' }}>
                  <div style={{ width: '100%', maxWidth: 310, aspectRatio: '9/16', background: '#000' }}>
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0&autoplay=1&mute=0`}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      style={{ border: 'none', display: 'block', width: '100%', height: '100%' }}
                    />
                  </div>
                </div>
              ) : (
                <div className="lg:w-[56%] flex-shrink-0 bg-black" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0&autoplay=1&mute=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ border: 'none', display: 'block', width: '100%', height: '100%' }}
                  />
                </div>
              )}

              {/* Info panel */}
              <div className="flex-1 p-7 flex flex-col gap-4 overflow-y-auto">
                {/* Category tag */}
                <span
                  className="self-start text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase"
                  style={{
                    background: `${project.color}1a`,
                    border: `1px solid ${project.color}45`,
                    color: project.color,
                  }}
                >
                  {project.tag}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white leading-snug pr-8">
                  {title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-white/62 leading-relaxed">
                  {desc}
                </p>

                {/* Tech chips */}
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold px-3 py-1.5 rounded-lg tracking-wide uppercase"
                        style={{
                          background: `${project.color}12`,
                          border: `1px solid ${project.color}38`,
                          color: 'rgba(255,255,255,0.72)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
