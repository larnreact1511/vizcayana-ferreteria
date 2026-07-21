interface IconBoxProps {
  icon: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'secondary' | 'primary' | 'light'
  className?: string
}

export default function IconBox({ icon, size = 'md', variant = 'secondary', className = '' }: IconBoxProps) {
  const sizes = {
    sm: 'w-10 h-10 text-xl',
    md: 'w-16 h-16 text-4xl',
    lg: 'w-20 h-20 text-5xl',
  }

  const variantsIcon = {
    secondary: 'bg-secondary-container text-white',
    primary: 'bg-primary text-white',
    light: 'bg-surface-container-low text-primary',
  }

  return (
    <div
      className={`${sizes[size]} ${variantsIcon[variant]} rounded-full flex items-center justify-center shrink-0 ${className}`}
    >
      <span className="material-symbols-outlined" style={{ fontSize: 'inherit' }}>
        {icon}
      </span>
    </div>
  )
}
