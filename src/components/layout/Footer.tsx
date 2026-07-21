import { Link } from 'react-router-dom'
import { SITE, FOOTER } from '../../data/siteConfig'
import Button from '../ui/Button'

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-title-md font-black mb-6 inline-block">
              {SITE.name}
            </Link>
            <p className="font-body text-body-md text-primary-fixed-dim mb-6">
              {SITE.tagline}
            </p>
            <div className="flex gap-4">
              {FOOTER.social.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-10 h-10 rounded-full bg-surface-container-lowest/10 flex items-center justify-center hover:bg-secondary-container transition-colors"
                  aria-label={s.label}
                >
                  <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Empresa Links */}
          <div>
            <h4 className="font-heading text-title-md mb-6">Empresa</h4>
            <ul className="space-y-4">
              {FOOTER.empresa.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="font-body text-body-md text-primary-fixed-dim hover:text-on-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios Links */}
          <div>
            <h4 className="font-heading text-title-md mb-6">Servicios</h4>
            <ul className="space-y-4">
              {FOOTER.servicios.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="font-body text-body-md text-primary-fixed-dim hover:text-on-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-title-md mb-6">Newsletter</h4>
            <p className="font-body text-body-md text-primary-fixed-dim mb-4">
              Suscríbete para recibir actualizaciones técnicas y ofertas.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email"
                required
                className="bg-surface-container-lowest/10 border border-transparent rounded-lg focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:outline-none text-on-primary w-full px-4 py-2 font-body text-body-md placeholder:text-primary-fixed-dim/50"
              />
              <Button type="submit" size="sm">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-surface-container-lowest/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-body-md text-primary-fixed-dim">
            {SITE.copyright}
          </p>
          <div className="flex gap-6">
            {FOOTER.legal.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="font-body text-body-md text-primary-fixed-dim hover:text-on-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
