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
]
