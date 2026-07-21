import { STATS, PROJECTS, MISSION, HERO_HOME } from '../data/home'
import HeroSection from '../components/layout/HeroSection'
import Section from '../components/layout/Section'
import Card from '../components/ui/Card'
import IconBox from '../components/ui/IconBox'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import ScrollReveal from '../components/ui/ScrollReveal'

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge={{ text: HERO_HOME.badge, variant: 'solid' }}
        title={HERO_HOME.title}
        description={HERO_HOME.description}
        ctas={[HERO_HOME.primaryCta]}
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <ScrollReveal className="md:col-span-7">
            <Card className="p-8 md:p-12">
              <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-primary mb-8 border-l-4 border-secondary-container pl-6">
                {MISSION.title}
              </h2>
              <div className="space-y-6">
                {MISSION.paragraphs.map((p, i) => (
                  <p key={i} className="font-body text-body-lg text-on-surface-variant leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
                <div className="flex flex-col sm:flex-row gap-8 pt-6">
                  <div className="flex flex-col">
                    <span className="font-bold text-primary text-title-md font-heading">{MISSION.vision.title}</span>
                    <span className="text-on-surface-variant font-body text-body-md">{MISSION.vision.text}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-primary text-title-md font-heading">{MISSION.purpose.title}</span>
                    <span className="text-on-surface-variant font-body text-body-md">{MISSION.purpose.text}</span>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <div className="md:col-span-5 grid grid-rows-2 gap-gutter">
            <ScrollReveal>
              <Card variant="dark" className="flex items-center gap-6 !p-8 h-full">
                <IconBox icon="verified_user" size="md" />
                <div>
                  <h3 className="text-white font-bold text-title-md font-heading">Respaldo Total</h3>
                  <p className="text-on-primary-container font-body text-body-md">
                    Garantía de calidad certificada en más de 4,000 productos.
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card variant="tinted" className="h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-secondary-container text-3xl">lightbulb</span>
                  <h3 className="text-primary font-bold text-title-md font-heading">Asesoría Especializada</h3>
                </div>
                <p className="text-on-surface-variant font-body text-body-md">
                  Expertos en ingeniería eléctrica listos para optimizar cada etapa de su proyecto,
                  desde el diseño hasta la ejecución.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      <Section bg="dark" padding="md">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none">
          <span className="material-symbols-outlined text-[300px]">electric_bolt</span>
        </div>
        <div className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {STATS.map((stat) => (
              <ScrollReveal key={stat.id}>
                <div className="font-display text-display-lg md:text-display-lg text-secondary-container mb-2">
                  {stat.value}
                </div>
                <div className="font-label text-label-md uppercase tracking-wider">
                  {stat.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Infraestructura y Soluciones"
          description="Visualice el alcance de nuestro trabajo en sectores industriales, comerciales y residenciales de alta exigencia."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ScrollReveal key={project.id}>
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-80 cursor-pointer">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={project.image} alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Badge variant="solid">{project.category}</Badge>
                  <h4 className="text-white font-bold text-title-md font-heading mt-2">{project.title}</h4>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-24 text-center relative overflow-hidden border border-primary/5">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-display text-headline-lg-mobile md:text-display-lg text-primary mb-6">
              ¿Listo para potenciar su éxito?
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Inicie su próximo proyecto con el respaldo de los expertos. Ofrecemos cotizaciones
              personalizadas y consultoría técnica sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="xl" icon="chat">Hablemos de tu próximo proyecto</Button>
              <Button variant="outlineDark" size="xl">Ver Catálogo</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
