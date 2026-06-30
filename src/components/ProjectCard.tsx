import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import type { Lang } from '../data/i18n'

interface Props {
  project: Project
  lang: Lang
  isCenter?: boolean
}

export default function ProjectCard({ project, lang, isCenter = false }: Props) {
  const [flipped, setFlipped] = useState(false)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const title = lang === 'en' ? project.titleEn : project.titleEs
  const desc = lang === 'en' ? project.descEn : project.descEs

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isCenter || flipped) return
    const rect = e.currentTarget.getBoundingClientRect()
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * 10
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * -10
    setTilt({ rx, ry })
  }

  const onMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 })
    if (flipped) setFlipped(false)
  }

  const cardW = isCenter ? 300 : 220
  const cardH = isCenter ? 400 : 300

  return (
    <div
      style={{ width: cardW, height: cardH, perspective: 1000, flexShrink: 0, userSelect: 'none' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => isCenter && setFlipped((f) => !f)}
      data-cursor={isCenter ? (lang === 'en' ? 'watch' : 'ver') : undefined}
    >
      <motion.div
        style={{
          width: '100%', height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          rotateX: flipped ? 0 : tilt.rx,
          rotateY: flipped ? 180 : tilt.ry,
        }}
        animate={{
          rotateX: flipped ? 0 : tilt.rx,
          rotateY: flipped ? 180 : tilt.ry,
        }}
        transition={
          flipped
            ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            : { duration: 0.15, ease: 'easeOut' }
        }
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[22px] overflow-hidden flex flex-col p-5"
          style={{
            backfaceVisibility: 'hidden',
            background: `linear-gradient(160deg, ${project.color}18 0%, rgba(16,8,24,0.95) 100%)`,
            border: `1px solid ${project.color}30`,
            boxShadow: isCenter
              ? `0 24px 60px ${project.color}20, 0 0 0 1px ${project.color}15`
              : `0 8px 28px rgba(0,0,0,0.5)`,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ background: `radial-gradient(circle at 35% 25%, ${project.color}, transparent 65%)` }}
          />

          {/* Tag */}
          <span
            className="self-start text-xs font-semibold px-2.5 py-1 rounded-full relative z-10"
            style={{ background: `${project.color}20`, border: `1px solid ${project.color}40`, color: project.color }}
          >
            {project.tag}
          </span>

          {/* Glow orb */}
          <div
            className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full blur-2xl opacity-25 pointer-events-none"
            style={{ background: project.color }}
          />

          {/* Center content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 relative z-10">
            <h3
              className="font-display font-bold text-white leading-snug mb-3"
              style={{ fontSize: isCenter ? '1.15rem' : '0.9rem' }}
            >
              {title}
            </h3>
            {isCenter && (
              <p className="text-xs text-white/55 leading-relaxed line-clamp-3">{desc}</p>
            )}
          </div>

          {/* Click to watch — bottom */}
          {isCenter && (
            <div
              className="relative z-10 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl mx-1"
              style={{
                background: `${project.color}18`,
                border: `1px solid ${project.color}40`,
              }}
            >
              <span
                className="text-sm"
                style={{ color: project.color, filter: `drop-shadow(0 0 4px ${project.color})` }}
              >
                ▶
              </span>
              <span className="text-xs font-semibold text-white/80 tracking-wide">
                {lang === 'en' ? 'Click to watch' : 'Clic para ver'}
              </span>
            </div>
          )}
        </div>

        {/* BACK — YouTube iframe */}
        <div
          className="absolute inset-0 rounded-[22px] overflow-hidden flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#000',
            border: `1px solid ${project.color}40`,
            boxShadow: `0 24px 60px ${project.color}25`,
          }}
        >
          {flipped ? (
            <iframe
              className="w-full flex-1"
              src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0&autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ border: 'none', display: 'block' }}
            />
          ) : (
            <div className="w-full flex-1 bg-black" />
          )}
          <div
            className="px-4 py-2.5 flex items-center justify-between"
            style={{ background: `linear-gradient(90deg, ${project.color}15, rgba(16,8,24,0.9))` }}
          >
            <span className="text-xs font-semibold text-white/80 truncate">{title}</span>
            <span
              className="text-xs px-2 py-0.5 rounded-full flex-shrink-0 ml-2"
              style={{ background: `${project.color}25`, color: project.color, border: `1px solid ${project.color}40` }}
            >
              {project.tag}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
