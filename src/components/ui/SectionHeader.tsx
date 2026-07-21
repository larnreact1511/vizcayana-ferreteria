import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
  children?: ReactNode
}

export default function SectionHeader({ title, description, className = '', children }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {children}
      <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
