import { useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  href?: string
  download?: boolean
  target?: string
  rel?: string
}

export default function MagneticButton({ children, className = '', style, onClick, href, download, target, rel }: Props) {
  const btnRef = useRef<HTMLElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const maxMove = 10
    const tx = (dx / (rect.width / 2)) * maxMove
    const ty = (dy / (rect.height / 2)) * maxMove
    btn.style.transform = `translate(${tx}px, ${ty}px)`
  }

  const onMouseLeave = () => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.transform = 'translate(0px, 0px)'
    btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  }

  const onMouseEnter = () => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.transition = 'transform 0.1s ease'
  }

  const shared = {
    ref: btnRef as React.RefObject<HTMLAnchorElement & HTMLButtonElement>,
    className: `inline-block ${className}`,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    style: { transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)', ...style },
  }

  if (href) {
    return (
      <a {...shared} href={href} download={download} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button {...shared} onClick={onClick}>
      {children}
    </button>
  )
}
