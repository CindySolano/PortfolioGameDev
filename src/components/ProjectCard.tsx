import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import type { Lang } from '../data/i18n'
import { ProjectIcon } from './ProjectIcons'

interface Props {
  project: Project
  lang: Lang
  isCenter?: boolean
  onOpen?: () => void
}

export default function ProjectCard({ project, lang, isCenter = false, onOpen }: Props) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const title = lang === 'en' ? project.titleEn : project.titleEs
  const desc = lang === 'en' ? project.descEn : project.descEs

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isCenter) return
    const rect = e.currentTarget.getBoundingClientRect()
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * 10
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * -10
    setTilt({ rx, ry })
  }

  const onMouseLeave = () => setTilt({ rx: 0, ry: 0 })

  const cardW = isCenter ? 300 : 220
  const cardH = isCenter ? 400 : 300

  return (
    <div
      style={{ width: cardW, height: cardH, perspective: 1000, flexShrink: 0, userSelect: 'none' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => { if (isCenter && onOpen) onOpen() }}
      data-cursor={isCenter ? (lang === 'en' ? 'watch' : 'ver') : undefined}
    >
      <motion.div
        style={{
          width: '100%', height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
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
          <div className="flex-1 flex flex-col items-center justify-center text-center px-2 relative z-10 gap-3">
            {/* SVG icon with glow */}
            <div
              className="rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                width: isCenter ? 64 : 48,
                height: isCenter ? 64 : 48,
                background: `radial-gradient(circle, ${project.color}20, transparent 70%)`,
                filter: `drop-shadow(0 0 ${isCenter ? 12 : 8}px ${project.color}60)`,
              }}
            >
              <ProjectIcon iconKey={project.icon} color={project.color} size={isCenter ? 38 : 28} />
            </div>

            <h3
              className="font-display font-bold text-white leading-snug"
              style={{ fontSize: isCenter ? '1.05rem' : '0.82rem' }}
            >
              {title}
            </h3>
            {isCenter && (
              <p className="text-xs text-white/55 leading-relaxed line-clamp-2">{desc}</p>
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
      </motion.div>
    </div>
  )
}
