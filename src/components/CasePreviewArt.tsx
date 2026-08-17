import type { CSSProperties } from 'react'
import type { CreativeCase } from '../cases/registry'
import { products } from '../data/products'

export function CasePreviewArt({ item }: { item: CreativeCase }) {
  const previewProducts = products.slice(0, 5)

  if (item.id === 'card-spread') {
    return (
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
    )
  }

  if (item.id === 'skewed-carousel') {
    return <div className="preview-skew" aria-hidden="true">{previewProducts.map((product) => <img src={product.image} alt="" key={product.id} />)}</div>
  }

  if (item.id === 'tumble-carousel') {
    return <div className="preview-tumble" aria-hidden="true">{previewProducts.slice(0, 4).map((product, index) => <img src={product.image} alt="" key={product.id} style={{ '--tumble-x': `${(index - 1.5) * 28}px`, '--tumble-y': `${(index - 1.5) * -11}px`, '--tumble-r': `${(index - 1.5) * 8}deg`, '--tumble-hover-x': `${(index - 1.5) * 54}px`, '--tumble-hover-y': `${(index - 1.5) * -15}px`, '--tumble-hover-r': `${(index - 1.5) * 13}deg` } as CSSProperties} />)}</div>
  }

  if (item.id === 'modal-cards') {
    return <div className="preview-modal-grid" aria-hidden="true">{products.slice(2, 5).map((product, index) => <img src={product.image} alt="" key={product.id} className={index === 1 ? 'is-raised' : ''} />)}</div>
  }

  if (item.id === 'depth-card') {
    return (
      <div className="preview-depth" aria-hidden="true">
        <span className="preview-depth-shadow" />
        <img src={products[6].image} alt="" />
        <strong>OBJECT<br />DEPTH</strong>
      </div>
    )
  }

  return (
    <div className="preview-warp" aria-hidden="true">
      <img src={products[1].image} alt="" />
      <span style={{ backgroundImage: `url("${products[1].image}")` }} />
    </div>
  )
}
