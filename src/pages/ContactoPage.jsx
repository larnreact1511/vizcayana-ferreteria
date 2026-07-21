import { useState } from 'react'
import { HERO_CONTACTO, CONTACT_INFO, FAQS } from '../data/contacto'
import HeroSection from '../components/layout/HeroSection'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import ScrollReveal from '../components/ui/ScrollReveal'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border-muted last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-left font-heading text-title-md text-primary hover:text-secondary-container transition-colors"
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`material-symbols-outlined text-2xl transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      {open && (
        <p className="font-body text-body-md text-on-surface-variant pb-6 pr-8">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function ContactoPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', reason: 'cotizacion' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Gracias por contactarnos. Le responderemos en menos de 24 horas.')
    setForm({ name: '', email: '', phone: '', message: '', reason: 'cotizacion' })
  }

  return (
    <>
      <HeroSection
        badge={HERO_CONTACTO.badge}
        title={HERO_CONTACTO.title}
        description={HERO_CONTACTO.description}
        ctas={HERO_CONTACTO.ctas}
        centered
      />

      {/* Contact Info + Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-gutter">
          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {CONTACT_INFO.map((item) => (
              <ScrollReveal key={item.title}>
                <Card className="!p-6 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary-container text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-title-md text-primary mb-1">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="font-body text-body-md text-on-surface-variant">{line}</p>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-3">
            <Card className="!p-8 md:!p-10">
              <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
                Envíenos un mensaje
              </h2>
              <p className="font-body text-body-md text-on-surface-variant mb-8">
                Complete el formulario y uno de nuestros asesores se pondrá en contacto en menos de 24 horas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-label text-label-md text-primary mb-2">
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border-muted bg-surface-container-lowest font-body text-body-md text-on-surface placeholder:text-outline-variant focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:outline-none transition-all"
                      placeholder="Ing. Juan Pérez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-label text-label-md text-primary mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border-muted bg-surface-container-lowest font-body text-body-md text-on-surface placeholder:text-outline-variant focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:outline-none transition-all"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-label text-label-md text-primary mb-2">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border-muted bg-surface-container-lowest font-body text-body-md text-on-surface placeholder:text-outline-variant focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:outline-none transition-all"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="reason" className="block font-label text-label-md text-primary mb-2">
                      Motivo de contacto *
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border-muted bg-surface-container-lowest font-body text-body-md text-on-surface focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:outline-none transition-all"
                    >
                      <option value="cotizacion">Solicitar Cotización</option>
                      <option value="tecnica">Consulta Técnica</option>
                      <option value="proyecto">Proyecto de Ingeniería</option>
                      <option value="credito">Crédito Empresarial</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-label text-label-md text-primary mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border-muted bg-surface-container-lowest font-body text-body-md text-on-surface placeholder:text-outline-variant focus-visible:ring-2 focus-visible:ring-secondary-container focus-visible:outline-none transition-all resize-none"
                    placeholder="Describa su proyecto o consulta. Incluya detalles como cantidades, especificaciones técnicas o ubicación..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button type="submit" size="lg" icon="send">
                    Enviar Mensaje
                  </Button>
                  <span className="font-body text-body-md text-on-surface-variant self-center">
                    * Campos obligatorios
                  </span>
                </div>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="white" padding="md" className="border-y border-border-muted">
        <SectionHeader
          title="Preguntas Frecuentes"
          description="Respuestas rápidas a las consultas más comunes de nuestros clientes."
        />
        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i}>
              <FAQItem question={faq.q} answer={faq.a} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Map / CTA Final */}
      <Section bg="dark" padding="md">
        <div className="text-center relative z-10">
          <span className="material-symbols-outlined text-6xl text-secondary-container mb-6">handshake</span>
          <h2 className="font-display text-headline-lg-mobile md:text-display-lg text-on-primary mb-6">
            Visítenos en nuestras sedes
          </h2>
          <p className="font-body text-body-lg text-primary-fixed-dim mb-10 max-w-2xl mx-auto">
            Con presencia en Colombia y Venezuela, el Grupo Empresarial Vizcaya está siempre cerca de usted.
            Agende una cita y conozca nuestro showroom de productos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" icon="calendar_month">
              Agendar Visita
            </Button>
            <Button size="lg" icon="map">
              Ver en Google Maps
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
