import type { ReactNode } from 'react'
import ScrollReveal from '../ui/ScrollReveal'

type PaddingSize = 'sm' | 'md' | 'lg'
type BgVariant = 'default' | 'white' | 'primary' | 'muted' | 'dark' | 'tinted'

interface SectionProps {
  children: ReactNode
  padding?: PaddingSize
  bg?: BgVariant
  className?: string
  reveal?: boolean
  containerClass?: string
}

const paddingSizes: Record<PaddingSize, string> = {
  sm: 'py-12',
  md: 'py-20',
  lg: 'py-24',
}

const bgVariants: Record<BgVariant, string> = {
  default: 'bg-surface-technical',
  white: 'bg-surface-container-lowest',
  primary: 'bg-primary text-on-primary',
  muted: 'bg-surface-container-high',
  dark: 'bg-primary-container text-on-primary',
  tinted: 'bg-surface-container-low',
}

export default function Section({
  children,
  padding = 'lg',
  bg = 'default',
  className = '',
  reveal = true,
  containerClass = '',
}: SectionProps) {
  const bgVariants = {
    default: 'bg-surface-technical',
    white: 'bg-surface-container-lowest',
    primary: 'bg-primary text-on-primary',
    muted: 'bg-surface-container-high',
    dark: 'bg-primary-container text-on-primary',
    tinted: 'bg-surface-container-low',
  }

  const content = (
    <div className={`container-page ${containerClass}`}>{children}</div>
  )

  return (
    <section className={`${paddingSizes[padding]} ${bgVariants[bg]} overflow-hidden relative ${className}`}>
      {reveal ? <ScrollReveal>{content}</ScrollReveal> : content}
    </section>
  )
}
