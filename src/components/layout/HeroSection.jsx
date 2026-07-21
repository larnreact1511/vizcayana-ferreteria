import Badge from '../ui/Badge'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

export default function HeroSection({
  badge,
  title,
  description,
  ctas = [],
  image,
  imageAlt = '',
  centered = false,
  children,
  className = '',
}) {
  return (
    <section className={`relative py-24 md:py-32 overflow-hidden bg-primary ${className}`}>
      <div className={`relative z-10 container-page ${centered ? 'text-center' : ''}`}>
        <ScrollReveal>
          <div className={centered ? 'flex flex-col items-center' : ''}>
            {badge && (
              <Badge
                icon={badge.icon}
                variant={badge.variant || 'default'}
                className="mb-6"
              >
                {badge.text || badge}
              </Badge>
            )}
            <h1
              className={`font-display text-headline-lg-mobile md:text-display-lg text-on-primary mb-6 ${
                centered ? 'max-w-4xl mx-auto' : 'leading-tight'
              }`}
            >
              {title}
            </h1>
            {description && (
              <p
                className={`font-body text-body-lg text-primary-fixed-dim mb-10 ${
                  centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
                }`}
              >
                {description}
              </p>
            )}
            {ctas.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {ctas.map((cta, i) => (
                  <Button
                    key={cta.label || i}
                    variant={cta.variant === 'outline' ? 'outline' : 'primary'}
                    size="lg"
                    to={cta.to}
                    href={cta.href}
                    icon={cta.icon}
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
            {children}
          </div>
        </ScrollReveal>
      </div>
      {image && !centered && (
        <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full">
          <div className="relative h-full rounded-l-2xl overflow-hidden border-l-4 border-surface-container-low/20 shadow-2xl">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={imageAlt}
            />
          </div>
        </div>
      )}
    </section>
  )
}
