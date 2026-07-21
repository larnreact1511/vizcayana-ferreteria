export interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
}

export interface HeroProductos {
  badge: { icon: string; text: string }
  title: string
  description: string
  ctas: { label: string; variant: string }[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'cables',
    name: 'Cables y Conductores',
    category: 'Conductores Eléctricos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCazef-4H2aZpo5zmbRC3I1rrx2qcMdDAY6-7QnfMXZRbUFYPXn6HDeGwxI7a87_CaWHwCW28u_ZwrXK3RcGTa1cNYv6BnmwJmJFDpKpMhPUhoTITAHAB9esOG3qQMsrsVFo7PlAqvbhn9QzM81ElWL5_1ex5BbPqpnPj1YaUR3YPiuONaQZM1XiQZLajrhFCh_lQJU7q40mQHthAVvbZhvrRnUPfpO0mD-CCjazjMkRf6TIhlD3DCHJZKEP6-6HMmX-3AJDQsz6Sk',
    description: 'Cables de cobre y aluminio para instalaciones de baja, media y alta tensión. Cumplen normas RETIE e IEC.',
  },
  {
    id: 'breakers',
    name: 'Interruptores y Breakers',
    category: 'Protecciones Eléctricas',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVsiIpwctGiwcFXBHC8hcljYYYv2FSCdnPySAuV-GkOJYA34rc7g2zYfSYYcB7lyrohkAqQgpQYCZxkXiTqdizUgvgibSJhFkW9DAd8n8yqeHiEZAURTvlu1AnGkev3XMH9Ilp4Eqdw0dKJcbAdTgxslNc8jzODOQ8TkJLoVfuFhP3MdPpCX1yLR1HQwmdgnFU3v4Xe9Py-GLdIPGhSreWwo2ELiC_JvpiZJjNV9_q01nPWMb-oVzhV_YaQwFrRv_B8JPDF-U4iwk',
    description: 'Breakers termomagnéticos, diferenciales y de potencia. Protección confiable para cualquier instalación.',
  },
  {
    id: 'led-lighting',
    name: 'Iluminación LED Industrial',
    category: 'Iluminación',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8W9TQxPvwrPkY80tYJimlUjh5ePzUhKubbnOdjvBBEb8J3B8SDJPCPBPcdmlfZpVkTdAuWjoJDMtbBL1vtf2wjk8xbluqPAIkOONUtX-ogKTdVcLk7wz7ghnxhOdihBOtogucOxgPJvsN-aYjEaE5qygGXmYIh60Nu6WnNYg4P2Ckt5jSx4uW_ZV05NWXURIFkqLonT4-wmLo-rwvgmCRIslQv6VjdSQI9cToaEITsjnR7LrAZJEuCASk_z_uZNUcJyRjNDlYy_0',
    description: 'Luminarias LED de alta eficiencia para naves industriales, oficinas y exteriores. Hasta 70% de ahorro energético.',
  },
  {
    id: 'panels',
    name: 'Tableros y Paneles',
    category: 'Distribución',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2hzEyGfZLBO43CD4d_V5hn7ei1c-OdG2rUtXGP5c4VpXohWMgnkxdhUQSpzIilXI3eDLL7Ct_7AzLVAR6d6drK2YRTL8urvI_P4Koy070tyA9iUlheR1srpQZzA7QdO6HJdwKLy_GCtp0rMiomTx0eaa3lZxUGpab3BFZqkwWt0qJJkDueQcSjrD9O2tmaCDfiPtxnhRncyY_pPkD2n4-SDNNKaxTGzKCBcqyPnow-f6yeRLwn-jD93R15XmnjsrIgqmQueWn5hc',
    description: 'Tableros de distribución monofásicos y trifásicos. Diseño modular para fácil instalación y mantenimiento.',
  },
  {
    id: 'pipes',
    name: 'Tuberías y Canalización',
    category: 'Conductos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTZlFAa7duojyVTfQXfneiqiXAEK9tvpnNEBnyR4NEUN3vwHsQCmRZlo9VGzzDTduzaFA_Ob_9T5lKcQIrvAsamFQK97lnICrPLdGAdqtMXVOoufwIxiMdjgtNkBFE9F1UqmfYlur1ZMTgCAtklrT0lGxM4-JUhDYPHqFsfbQGL1TzCWN9qz1Ns7rKt14pz-jRlCvhi7rS_SySS8zu_DzhV4G3UZy-MOTOOInG2k74H1zNGu0PKOqTSYNOe1Kc4gYNQBSBhucEiXs',
    description: 'Tubería EMT, PVC y conduit flexible. Soluciones completas para canalización eléctrica residencial e industrial.',
  },
  {
    id: 'switches',
    name: 'Interruptores y Tomacorrientes',
    category: 'Accesorios',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvt1lK1TNYAOPLR0rHnVtAaoow_Z50bGFk2ZxFh927mlXLnvNbg1e85nbafCBF7PgCS56b8pKGGb3ncq3vQpeDp6iNbFs5XBARQ0MtfFEhwWisRsbd0UX3Dco4Z7xl1yhCxuGZR95EKxu-BuxPAjPG3Py-SXxmIAWoqfbPb_oMlRjxLLwZksNIS9YJfO4BsyiReVC8fMjixzn-CRTZkmbGuHQwgnOAquQLr4Na-hqkPYVMp1zzS63AHzUurwiRqRliHnLzuS1SNho',
    description: 'Interruptores, tomacorrientes y placas de las mejores marcas. Diseños modernos para cada espacio.',
  },
  {
    id: 'transformers',
    name: 'Transformadores',
    category: 'Potencia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfkBovsl9xcO4kBnTPIS0V0mxaCJMhLyV9e0FrK-Q3oQvo2pPISY0PZaDYaqlqUjMpZ_pMxktlWtQB1uQlrxTJu5oWDdySiqT-0woy8saSQL8MbqRElWpCK90fqmm7c4hhtwBLGeTzFp8Grqi1B4riAfM_xnylS5BZhYVOvflkuyQBxomzVShYbP46gG5k_ynkgt3-HNWHO_ux_BNzuIU_mORQ9uq35hygJoc0_W4hd_nqX4sPHPDjsRz5PoCN9SECsaniqoGGiNQ',
    description: 'Transformadores de distribución y potencia. Desde 5 KVA hasta 500 KVA con garantía extendida.',
  },
  {
    id: 'solar',
    name: 'Energía Solar',
    category: 'Energías Renovables',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVs5INEYx7X7FIfJtz1IfuB5GF-sAWqAAsyr_eD4dZA7B-VRRD9MW1pOmig37HlhWeTvuA1nWMacW52Lc1bljOH1kdZBioi0gkvdUu_il8nPs8XEh-VGDNstxAPqiTFMFrlHpgXaW6Zu2roaroTIZp4ntALURH3Re4e0A0EMBSQxTNEg19Gmu9h5k81iyZG97-PNFMpWjD35OHyEE032QJeGW22MjXdvb7i1hzdPEZuSWBZFVIOgyHSUcCR43okuEZrTiMn2-PUDQ',
    description: 'Paneles solares, inversores y sistemas de almacenamiento. Energía limpia para su hogar o negocio.',
  },
]

export const PRODUCT_CATEGORIES: string[] = [
  'Todos',
  'Conductores Eléctricos',
  'Protecciones Eléctricas',
  'Iluminación',
  'Distribución',
  'Conductos',
  'Accesorios',
  'Potencia',
  'Energías Renovables',
]

export const HERO_PRODUCTOS: HeroProductos = {
  badge: { icon: 'inventory_2', text: 'CATÁLOGO TÉCNICO' },
  title: 'Materiales Eléctricos de Alta Ingeniería',
  description:
    'Explore nuestro catálogo de más de 4.000 productos certificados. Desde componentes básicos hasta soluciones especializadas para la industria.',
  ctas: [
    { label: 'Solicitar Cotización', variant: 'primary' },
    { label: 'Descargar Catálogo', variant: 'outline' },
  ],
}
