import { SERVICES, BRANDS, HERO_SERVICIOS, DISTRIBUTION, DISTRIBUTION_IMAGE, CATALOG_IMAGE } from '../data/servicios'
import HeroSection from '../components/layout/HeroSection'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function ServiciosPage() {
  return (
    <>
      <HeroSection
        badge={HERO_SERVICIOS.badge}
        title={HERO_SERVICIOS.title}
        description={HERO_SERVICIOS.description}
        ctas={HERO_SERVICIOS.ctas}
        centered
      />

      <Section>
        <SectionHeader
          title="Nuestros Servicios Especializados"
          description="Ofrecemos un portafolio de servicios diseñado para cubrir el ciclo de vida completo de sus instalaciones eléctricas."
        >
          <div className="hidden md:flex gap-2 justify-end mb-4">
            <div className="w-12 h-1 bg-secondary-container rounded-full" />
            <div className="w-4 h-1 bg-outline-variant rounded-full" />
            <div className="w-4 h-1 bg-outline-variant rounded-full" />
          </div>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-6">
          {SERVICES.map((service) => {
            if (service.layout === 'large') {
              return (
                <ScrollReveal key={service.id} className="md:col-span-8">
                  <Card variant="glass" hover className="h-full">
                    <div className="flex flex-col md:flex-row gap-8 h-full">
                      <div className="flex-1">
                        <span className="material-symbols-outlined text-secondary-container text-4xl mb-4"
                          style={{ fontVariationSettings: service.filledIcon ? "'FILL' 1" : "'FILL' 0" }}>
                          {service.icon}
                        </span>
                        <h3 className="font-heading text-title-md text-primary mb-3">{service.title}</h3>
                        <p className="font-body text-body-md text-on-surface-variant mb-6">{service.description}</p>
                        {service.link && (
                          <a href={service.link.href} className="flex items-center gap-2 text-secondary-container font-label text-label-md hover:gap-4 transition-all">
                            {service.link.label} <span className="material-symbols-outlined">arrow_right_alt</span>
                          </a>
                        )}
                      </div>
                      {service.image && (
                        <div className="flex-1 rounded-lg overflow-hidden bg-surface-container min-h-[200px]">
                          <img className="w-full h-full object-cover" src={service.image} alt={service.title} />
                        </div>
                      )}
                    </div>
                  </Card>
                </ScrollReveal>
              )
            }

            if (service.layout === 'tall') {
              return (
                <ScrollReveal key={service.id} className="md:col-span-4 md:row-span-2">
                  <Card variant="dark" className="relative overflow-hidden flex flex-col h-full">
                    <div className="relative z-10 flex flex-col h-full">
                      <div>
                        <span className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-4">{service.icon}</span>
                        <h3 className="font-heading text-title-md mb-3">{service.title}</h3>
                        <p className="font-body text-body-md text-primary-fixed-dim mb-8">{service.description}</p>
                        {service.features && (
                          <ul className="space-y-4 mb-10">
                            {service.features.map((feat, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-success-electric">check_circle</span>
                                <span className="font-body text-body-md">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {service.image && (
                        <div className="mt-auto">
                          <img className="rounded-lg shadow-xl mb-4 w-full" src={service.image} alt={service.title} />
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-container opacity-10 rounded-full blur-3xl" />
                  </Card>
                </ScrollReveal>
              )
            }

            return (
              <ScrollReveal key={service.id} className="md:col-span-4">
                <Card variant="glass" hover className="h-full">
                  <span className="material-symbols-outlined text-secondary-container text-4xl mb-4">{service.icon}</span>
                  <h3 className="font-heading text-title-md text-primary mb-3">{service.title}</h3>
                  <p className="font-body text-body-md text-on-surface-variant">{service.description}</p>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </Section>

      <Section bg="white" className="border-y border-border-muted">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border-muted">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-primary mb-6">Catálogo de más de 4.000 productos</h2>
              <p className="font-body text-body-lg text-on-surface-variant mb-8">
                Encuentre exactamente lo que su proyecto necesita. Nuestro sistema de búsqueda inteligente le permite filtrar por marca, especificación técnica y disponibilidad regional.
              </p>
              <div className="flex items-center gap-4 p-2 bg-surface-technical rounded-xl border border-outline-variant mb-8">
                <span className="material-symbols-outlined text-outline ml-4">search</span>
                <input className="flex-1 bg-transparent border-none focus:ring-0 py-3 font-body text-body-md outline-none" placeholder="Ej: Cable N°12, Breaker 20A, Panel LED..." type="text" />
                <Button size="md">BUSCAR</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">local_shipping</span>
                  <span className="font-body text-body-md text-on-surface">Entrega rápida</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">verified</span>
                  <span className="font-body text-body-md text-on-surface">Calidad Certificada</span>
                </div>
              </div>
            </div>
            <div className="relative bg-primary overflow-hidden min-h-[400px]">
              <img className="absolute inset-0 w-full h-full object-cover opacity-60" src={CATALOG_IMAGE} alt="Productos eléctricos" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-secondary-container text-[120px] font-black leading-none opacity-20 font-display">4K+</div>
                  <div className="text-on-primary font-heading text-title-md -mt-10 tracking-[0.2em]">PRODUCTOS EN STOCK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section padding="md">
        <div className="text-center">
          <p className="font-label text-label-md text-outline uppercase tracking-widest mb-12">Marcas de confianza que nos respaldan</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-50 hover:opacity-100 transition-all duration-500">
            {BRANDS.map((brand) => (
              <span key={brand} className="font-heading text-headline-lg-mobile md:text-headline-lg font-extrabold text-primary">{brand}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="muted">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <ScrollReveal className="flex-1">
            <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-primary mb-6">Distribución Regional</h2>
            <p className="font-body text-body-lg text-on-surface-variant mb-8">
              Con sedes estratégicas en Colombia y Venezuela, el Grupo Empresarial Vizcaya garantiza una cadena de suministro robusta para toda la región.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {DISTRIBUTION.map((d) => (
                <Card key={d.country} className="flex-1 !p-6">
                  <div className="font-heading text-title-md text-primary mb-1">{d.country}</div>
                  <div className="font-body text-body-md text-on-surface-variant">{d.city}</div>
                  <a href={d.link} className="text-secondary-container font-label text-label-md mt-4 inline-block hover:underline">{d.linkLabel}</a>
                </Card>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal className="flex-1 w-full">
            <div className="h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" src={DISTRIBUTION_IMAGE} alt="Mapa de distribución regional" />
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  )
}
