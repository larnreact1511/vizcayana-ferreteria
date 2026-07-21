import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS, SITE } from '../../data/siteConfig'
import Button from '../ui/Button'

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest shadow-nav border-b border-border-muted">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-headline-lg-mobile md:text-headline-lg font-bold text-primary uppercase tracking-tighter">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-title-md transition-colors ${
                isActive(link.path)
                  ? 'text-primary border-b-2 border-secondary-container font-bold pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button size="md">Cotizar Proyecto</Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-surface-container-lowest border-t border-border-muted px-margin-mobile py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`font-heading text-title-md py-2 transition-colors ${
                isActive(link.path)
                  ? 'text-primary border-l-4 border-secondary-container font-bold pl-4'
                  : 'text-on-surface-variant hover:text-primary pl-6'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button size="md" className="w-full justify-center mt-2">Cotizar Proyecto</Button>
        </nav>
      )}
    </header>
  )
}
