import { SITE } from './siteConfig'

export interface Stat {
  id: string
  value: string
  label: string
}

export interface Project {
  id: string
  category: string
  title: string
  image: string
}

export interface HeroData {
  badge: string
  title: string
  description: string
  primaryCta: { label: string; to: string; icon: string }
  image?: string
}

export { SITE }

export const STATS: Stat[] = [
  { id: 'experience', value: '25+', label: 'Años de Experiencia' },
  { id: 'catalog', value: '4k+', label: 'Productos en Catálogo' },
  { id: 'clients', value: '12k+', label: 'Clientes Satisfechos' },
  { id: 'projects', value: '500+', label: 'Proyectos de Ingeniería' },
]

export const PROJECTS: Project[] = [
  {
    id: 'industrial',
    category: 'Sector Industrial',
    title: 'Sistemas de Potencia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfkBovsl9xcO4kBnTPIS0V0mxaCJMhLyV9e0FrK-Q3oQvo2pPISY0PZaDYaqlqUjMpZ_pMxktlWtQB1uQlrxTJu5oWDdySiqT-0woy8saSQL8MbqRElWpCK90fqmm7c4hhtwBLGeTzFp8Grqi1B4riAfM_xnylS5BZhYVOvflkuyQBxomzVShYbP46gG5k_ynkgt3-HNWHO_ux_BNzuIU_mORQ9uq35hygJoc0_W4hd_nqX4sPHPDjsRz5PoCN9SECsaniqoGGiNQ',
  },
  {
    id: 'commercial',
    category: 'Sector Comercial',
    title: 'Iluminación Arquitectónica',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVs5INEYx7X7FIfJtz1IfuB5GF-sAWqAAsyr_eD4dZA7B-VRRD9MW1pOmig37HlhWeTvuA1nWMacW52Lc1bljOH1kdZBioi0gkvdUu_il8nPs8XEh-VGDNstxAPqiTFMFrlHpgXaW6Zu2roaroTIZp4ntALURH3Re4e0A0EMBSQxTNEg19Gmu9h5k81iyZG97-PNFMpWjD35OHyEE032QJeGW22MjXdvb7i1hzdPEZuSWBZFVIOgyHSUcCR43okuEZrTiMn2-PUDQ',
  },
  {
    id: 'residential',
    category: 'Sector Residencial',
    title: 'Instalaciones Inteligentes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2hzEyGfZLBO43CD4d_V5hn7ei1c-OdG2rUtXGP5c4VpXohWMgnkxdhUQSpzIilXI3eDLL7Ct_7AzLVAR6d6drK2YRTL8urvI_P4Koy070tyA9iUlheR1srpQZzA7QdO6HJdwKLy_GCtp0rMiomTx0eaa3lZxUGpab3BFZqkwWt0qJJkDueQcSjrD9O2tmaCDfiPtxnhRncyY_pPkD2n4-SDNNKaxTGzKCBcqyPnow-f6yeRLwn-jD93R15XmnjsrIgqmQueWn5hc',
  },
]

export const MISSION = {
  title: 'Nuestra Esencia Corporativa',
  paragraphs: [
    `En <strong>${SITE.fullName}</strong>, no solo suministramos materiales; construimos las bases de la infraestructura moderna. Como parte fundamental del <strong>Grupo Empresarial Vizcaya</strong>, heredamos una tradición de excelencia que combina la ingeniería de vanguardia con un compromiso inquebrantable con el cliente.`,
    'Nuestra misión es proveer soluciones integrales que transformen retos técnicos en éxitos operacionales, garantizando la seguridad y eficiencia en cada hogar e industria que tocamos.',
  ],
  vision: {
    title: 'Visión',
    text: 'Liderar la transición hacia sistemas eléctricos inteligentes en la región.',
  },
  purpose: {
    title: 'Propósito',
    text: 'Conectar comunidades a través de energía segura y sostenible.',
  },
}

export const HERO_HOME = {
  badge: 'Liderazgo Industrial',
  title: 'Trayectoria, Confianza y Soluciones Eléctricas',
  description:
    'Somos su aliado estratégico en materiales eléctricos e ingeniería. Respaldados por el Grupo Empresarial Vizcaya, garantizamos calidad en cada conexión.',
  primaryCta: { label: 'Explorar Soluciones', to: '/servicios', icon: 'arrow_forward' },
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCazef-4H2aZpo5zmbRC3I1rrx2qcMdDAY6-7QnfMXZRbUFYPXn6HDeGwxI7a87_CaWHwCW28u_ZwrXK3RcGTa1cNYv6BnmwJmJFDpKpMhPUhoTITAHAB9esOG3qQMsrsVFo7PlAqvbhn9QzM81ElWL5_1ex5BbPqpnPj1YaUR3YPiuONaQZM1XiQZLajrhFCh_lQJU7q40mQHthAVvbZhvrRnUPfpO0mD-CCjazjMkRf6TIhlD3DCHJZKEP6-6HMmX-3AJDQsz6Sk',
}
