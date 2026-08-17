export type CreativeCase = {
  id: string
  number: string
  title: string
  subtitle: string
  tags: string[]
  referenceName: string
  referenceUrl: string
  status: 'featured' | 'draft'
}

export const creativeCases: CreativeCase[] = [
  {
    id: 'card-spread',
    number: '001',
    title: 'Product Fan',
    subtitle: 'A deck of selected goods unfolds into view.',
    tags: ['interaction', 'cards', 'editorial'],
    referenceName: 'React Bits Pro / Card Spread',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/card-spread',
    status: 'featured',
  },
  {
    id: 'skewed-carousel',
    number: '002',
    title: 'Skewed Selects',
    subtitle: 'A tilted stream of objects tuned for fast browsing.',
    tags: ['carousel', 'drag', 'editorial'],
    referenceName: 'React Bits Pro / Skewed Carousel',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/skewed-carousel',
    status: 'featured',
  },
  {
    id: 'tumble-carousel',
    number: '003',
    title: 'Tumble Picks',
    subtitle: 'Selected goods turn end over end into the spotlight.',
    tags: ['carousel', 'spring', 'cards'],
    referenceName: 'React Bits Pro / Tumble Carousel',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/tumble-carousel',
    status: 'featured',
  },
  {
    id: 'modal-cards',
    number: '004',
    title: 'Quick View',
    subtitle: 'Compact product stories expand into an immersive layer.',
    tags: ['modal', 'morph', 'commerce'],
    referenceName: 'React Bits Pro / Modal Cards',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/modal-cards',
    status: 'featured',
  },
  {
    id: 'depth-card',
    number: '005',
    title: 'Object Depth',
    subtitle: 'A tactile product portrait built from responsive layers.',
    tags: ['depth', 'pointer', '3d'],
    referenceName: 'React Bits Pro / Depth Card',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/depth-card',
    status: 'featured',
  },
  {
    id: 'warped-card',
    number: '006',
    title: 'Product Lens',
    subtitle: 'A moving optical lens bends the surface of a product story.',
    tags: ['distortion', 'pointer', 'visual'],
    referenceName: 'React Bits Pro / Warped Card',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/warped-card',
    status: 'featured',
  },
]
