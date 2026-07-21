export default function Card({ children, variant = 'default', className = '', hover = false, ...props }) {
  const variants = {
    default:
      'bg-surface-container-lowest rounded-xl shadow-card border border-border-muted',
    glass:
      'glass-card rounded-xl shadow-sm',
    dark:
      'bg-primary text-on-primary rounded-xl',
    tinted:
      'bg-surface-container rounded-xl border border-primary-container/10',
  }

  return (
    <div
      className={`p-8 ${variants[variant]} ${hover ? 'hover:shadow-md hover:border-secondary-container transition-all' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
