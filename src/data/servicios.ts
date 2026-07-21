export interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
  layout: 'large' | 'tall' | 'small'
  dark?: boolean
  filledIcon?: boolean
  features?: string[]
  image?: string
  link?: { label: string; href: string }
}

export interface BadgeData {
  icon: string
  text: string
  variant?: string
}

export interface CtaData {
  label: string
  variant: string
  to?: string
  href?: string
  icon?: string
}

export interface DistributionItem {
  country: string
  city: string
  link: string
  linkLabel: string
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'supply',
    icon: 'inventory_2',
    title: 'Suministro de Materiales',
    description:
      'Distribución mayorista y al detal de conductores, tuberías, protecciones y todo lo necesario para sus obras eléctricas con stock inmediato.',
    layout: 'large',
    link: { label: 'VER DETALLES', href: '#' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVsiIpwctGiwcFXBHC8hcljYYYv2FSCdnPySAuV-GkOJYA34rc7g2zYfSYYcB7lyrohkAqQgpQYCZxkXiTqdizUgvgibSJhFkW9DAd8n8yqeHiEZAURTvlu1AnGkev3XMH9Ilp4Eqdw0dKJcbAdTgxslNc8jzODOQ8TkJLoVfuFhP3MdPpCX1yLR1HQwmdgnFU3v4Xe9Py-GLdIPGhSreWwo2ELiC_JvpiZJjNV9_q01nPWMb-oVzhV_YaQwFrRv_B8JPDF-U4iwk',
    filledIcon: true,
  },
  {
    id: 'led',
    icon: 'light_mode',
    title: 'Iluminación LED',
    description:
      'Proyectos de eficiencia energética para industrias, oficinas y hogares. Reducimos sus costos de operación con la mejor tecnología.',
    layout: 'tall',
    dark: true,
    features: ['Auditorías energéticas', 'Diseño lumínico Dialux', 'Garantía extendida'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8W9TQxPvwrPkY80tYJimlUjh5ePzUhKubbnOdjBvBEb8J3B8SDJPCPBPcdmlfZpVkTdAuWjoJDMtbBL1vtf2wjk8xbluqPAIkOONUtX-ogKTdVcLk7wz7ghnxhOdihBOtogucOxgPJvsN-aYjEaE5qygGXmYIh60Nu6WnNYg4P2Ckt5jSx4uW_ZV05NWXURIFkqLonT4-wmLo-rwvgmCRIslQv6VjdSQI9cToaEITsjnR7LrAZJEuCASk_z_uZNUcJyRjNDlYy_0',
  },
  {
    id: 'engineering',
    icon: 'psychology',
    title: 'Asesoría en Ingeniería',
    description:
      'Acompañamiento técnico experto para la optimización de recursos y cumplimiento de normatividad RETIE.',
    layout: 'small',
  },
  {
    id: 'projects',
    icon: 'schema',
    title: 'Proyectos Eléctricos',
    description:
      'Ejecución de montajes eléctricos de media y baja tensión bajo los más altos estándares de seguridad.',
    layout: 'small',
  },
]

export const BRANDS: string[] = ['PHILIPS', 'SCHNEIDER', 'SIEMENS', 'ABB', 'GENERAL ELECTRIC']

export const HERO_SERVICIOS: { badge: BadgeData; title: string; description: string; ctas: CtaData[] } = {
  badge: { icon: 'engineering', text: 'EXPERTOS EN ENERGÍA' },
  title: 'Soluciones Integrales para la Industria y el Hogar',
  description:
    'Suministramos la tecnología y el respaldo técnico necesario para llevar la energía a donde más se necesita, desde proyectos residenciales hasta infraestructura industrial de gran escala.',
  ctas: [
    { label: 'Explorar Catálogo', variant: 'primary' },
    { label: 'Hablar con un Experto', variant: 'outline' },
  ],
}

export const DISTRIBUTION: DistributionItem[] = [
  {
    country: 'Colombia',
    city: 'Sede Principal Bogotá',
    link: '#',
    linkLabel: 'VER MAPA',
  },
  {
    country: 'Venezuela',
    city: 'Centro Logístico Valencia',
    link: '#',
    linkLabel: 'VER MAPA',
  },
]

export const DISTRIBUTION_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCTZlFAa7duojyVTfQXfneiqiXAEK9tvpnNEBnyR4NEUN3vwHsQCmRZlo9VGzzDTduzaFA_Ob_9T5lKcQIrvAsamFQK97lnICrPLdGAdqtMXVOoufwIxiMdjgtNkBFE9F1UqmfYlur1ZMTgCAtklrT0lGxM4-JUhDYPHqFsfbQGL1TzCWN9qz1Ns7rKt14pz-jRlCvhi7rS_SySS8zu_DzhV4G3UZy-MOTOOInG2k74H1zNGu0PKOqTSYNOe1Kc4gYNQBSBhucEiXs'

export const CATALOG_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCvt1lK1TNYAOPLR0rHnVtAaoow_Z50bGFk2ZxFh927mlXLnvNbg1e85nbafCBF7PgCS56b8pKGGb3ncq3vQpeDp6iNbFs5XBARQ0MtfFEhwWisRsbd0UX3Dco4Z7xl1yhCxuGZR95EKxu-BuxPAjPG3Py-SXxmIAWoqfbPb_oMlRjxLLwZksNIS9YJfO4BsyiReVC8fMjixzn-CRTZkmbGuHQwgnOAquQLr4Na-hqkPYVMp1zzS63AHzUurwiRqRliHnLzuS1SNho'
