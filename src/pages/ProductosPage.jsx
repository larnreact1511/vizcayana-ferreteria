import { useState } from "react"
import { PRODUCTS, PRODUCT_CATEGORIES, HERO_PRODUCTOS } from "../data/productos"
import HeroSection from "../components/layout/HeroSection"
import Section from "../components/layout/Section"
import Card from "../components/ui/Card"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import SectionHeader from "../components/ui/SectionHeader"
import ScrollReveal from "../components/ui/ScrollReveal"

function ProductImage({ src, alt, category }) {
  const [error, setError] = useState(false)
  const initials = alt.split(" ").slice(0, 2).map(w => w[0]).join("")

  if (error || !src) {
    return (
      <div className="relative h-56 -mx-8 -mt-8 mb-6 overflow-hidden bg-surface-container flex items-center justify-center">
        <div className="absolute top-4 left-4">
          <Badge variant="solid">{category}</Badge>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined text-5xl text-outline-variant">image_not_supported</span>
          <span className="font-heading text-6xl font-black text-surface-container-high">{initials}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-56 -mx-8 -mt-8 mb-6 overflow-hidden bg-surface-container">
      <img
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        src={src}
        alt={alt}
        onError={() => setError(true)}
      />
      <div className="absolute top-4 left-4">
        <Badge variant="solid">{category}</Badge>
      </div>
    </div>
  )
}

export default function ProductosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filtered = PRODUCTS.filter((p) => {
    const matchCategory = activeCategory === "Todos" || p.category === activeCategory
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <>
      <HeroSection
        badge={HERO_PRODUCTOS.badge}
        title={HERO_PRODUCTOS.title}
        description={HERO_PRODUCTOS.description}
        ctas={HERO_PRODUCTOS.ctas}
        centered
      />

      {/* Search + Filter Bar */}
      <Section bg="white" padding="md" className="border-b border-border-muted sticky top-[73px] z-40">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4 p-2 bg-surface-technical rounded-xl border border-outline-variant flex-1 max-w-2xl">
            <span className="material-symbols-outlined text-outline ml-4">search</span>
            <input
              className="flex-1 bg-transparent border-none focus:ring-0 py-3 font-body text-body-md outline-none"
              placeholder="Buscar productos, marcas, especificaciones..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button size="md">BUSCAR</Button>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-label text-label-md transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Products Grid */}
      <Section>
        <SectionHeader
          title={activeCategory === "Todos" ? "Catalogo Completo" : activeCategory}
          description={`${filtered.length} producto${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`}
        />

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ScrollReveal key={product.id}>
                <Card hover className="group overflow-hidden flex flex-col h-full">
                  <ProductImage src={product.image} alt={product.name} category={product.category} />
                  <h3 className="font-heading text-title-md text-primary mb-2 group-hover:text-secondary-container transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-body text-body-md text-on-surface-variant mb-6 flex-1">
                    {product.description}
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1">
                      Cotizar
                    </Button>
                    <button className="w-10 h-10 rounded-lg border border-border-muted flex items-center justify-center text-on-surface-variant hover:border-secondary-container hover:text-secondary-container transition-colors" aria-label="Agregar a favoritos">
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <button className="w-10 h-10 rounded-lg border border-border-muted flex items-center justify-center text-on-surface-variant hover:border-secondary-container hover:text-secondary-container transition-colors" aria-label="Ver detalle">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">search_off</span>
            <h3 className="font-heading text-title-md text-primary mb-2">Sin resultados</h3>
            <p className="font-body text-body-md text-on-surface-variant mb-6">
              No encontramos productos que coincidan con tu busqueda. Intenta con otros terminos.
            </p>
            <Button variant="outlineDark" size="md" onClick={() => { setSearchTerm(""); setActiveCategory("Todos"); }}>
              Ver todos los productos
            </Button>
          </div>
        )}
      </Section>

      {/* Features Strip */}
      <Section bg="muted" padding="md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: "local_shipping", title: "Envio Rapido", desc: "Despachos en 24-48 horas a nivel nacional." },
            { icon: "verified", title: "Calidad Garantizada", desc: "Productos certificados bajo normas RETIE e IEC." },
            { icon: "support_agent", title: "Asesoria Tecnica", desc: "Expertos disponibles para tu proyecto." },
            { icon: "inventory", title: "Stock Permanente", desc: "Mas de 4,000 referencias disponibles." },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-secondary-container text-4xl">{f.icon}</span>
              <h4 className="font-heading text-title-md text-primary">{f.title}</h4>
              <p className="font-body text-body-md text-on-surface-variant">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-primary rounded-[2rem] p-8 md:p-24 text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-display text-headline-lg-mobile md:text-display-lg text-on-primary mb-6">
              No encuentra lo que busca?
            </h2>
            <p className="font-body text-body-lg text-primary-fixed-dim mb-12 max-w-2xl mx-auto">
              Nuestro equipo de expertos puede ayudarle a encontrar el producto exacto para su proyecto. Solicite una cotizacion personalizada sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="xl" icon="chat">Solicitar Asesoria</Button>
              <Button size="xl" icon="description">Descargar Catalogo PDF</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
