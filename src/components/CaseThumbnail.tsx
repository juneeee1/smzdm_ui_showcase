import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { CreativeCase } from '../cases/registry'
import { products } from '../data/products'

export function CaseThumbnail({ item }: { item: CreativeCase }) {
  return (
    <a className="case-tile" href={`#/case/${item.id}`} aria-label={`打开 ${item.title} 案例`}>
      <div className="case-preview">
        <div className="preview-glow" />
        <div className="preview-fan" aria-hidden="true">
          {products.map((product, index) => (
            <span
              className="preview-card"
              key={product.id}
              style={{
                '--preview-index': index,
                '--preview-angle': `${(index - 3) * 9}deg`,
                '--preview-x': `${(index - 3) * 38}px`,
                '--preview-y': `${Math.abs(index - 3) * 10}px`,
              } as CSSProperties}
            >
              <img src={product.image} alt="" style={{ objectPosition: product.position }} />
            </span>
          ))}
        </div>
        <span className="case-open"><ArrowUpRight size={18} /></span>
      </div>
      <div className="case-meta">
        <div>
          <span>{item.number}</span>
          <h2>{item.title}</h2>
        </div>
        <div className="case-tags">
          {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </a>
  )
}
