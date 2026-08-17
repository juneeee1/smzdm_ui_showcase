import { ArrowUpRight } from 'lucide-react'
import type { CreativeCase } from '../cases/registry'
import { CasePreviewArt } from './CasePreviewArt'

export function CaseThumbnail({ item }: { item: CreativeCase }) {
  return (
    <a className="case-tile" href={`#/case/${item.id}`} aria-label={`打开 ${item.title} 案例`}>
      <div className="case-preview">
        <div className="preview-glow" />
        <CasePreviewArt item={item} />
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
