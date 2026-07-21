import type { ReactNode } from 'react'

type BadgeVariant = 'default' | 'solid' | 'outline'

interface BadgeProps {
  children: ReactNode
  icon?: string
  variant?: BadgeVariant
  className?: string
}

export default function Badge({ children, icon, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default:
      'bg-secondary-container/20 text-secondary-fixed border border-secondary-container/30',
    solid:
      'bg-secondary-container text-on-primary',
    outline:
      'bg-transparent border border-primary-fixed-dim text-on-primary',
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-label text-label-md uppercase tracking-widest ${variants[variant]} ${className}`}
    >
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      {children}
    </span>
  )
}
