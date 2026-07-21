import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-secondary-container text-on-primary hover:opacity-90 active:scale-95',
  outline:
    'bg-transparent border border-primary-fixed-dim text-on-primary hover:bg-on-primary/10',
  outlineDark:
    'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost:
    'bg-transparent text-on-surface-variant hover:text-primary',
}

const sizes = {
  sm: 'px-4 py-2 text-label-md',
  md: 'px-6 py-3 text-label-md',
  lg: 'px-8 py-4 text-title-md',
  xl: 'px-10 py-5 text-title-md',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'lg',
  to,
  href,
  icon,
  className = '',
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all ${variants[variant] || variants.primary} ${sizes[size] || sizes.lg} ${className}`

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
        {icon && <span className="material-symbols-outlined">{icon}</span>}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
        {icon && <span className="material-symbols-outlined">{icon}</span>}
      </a>
    )
  }

  return (
    <button className={base} {...props}>
      {children}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </button>
  )
}
