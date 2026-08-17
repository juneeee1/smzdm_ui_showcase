import { ArrowRight } from 'lucide-react'
import { creativeCases } from '../cases/registry'
import { BrandMark } from '../components/BrandMark'
import { CaseThumbnail } from '../components/CaseThumbnail'

export function HubPage() {
  return (
    <main className="hub-page">
      <header className="hub-header">
        <BrandMark />
        <span>{String(creativeCases.length).padStart(2, '0')} 个精选案例</span>
      </header>

      <section className="hub-intro">
        <p>ZDM Creative Hub</p>
        <h1>精选案例</h1>
        <span>界面 · 交互 · 视觉</span>
      </section>

      <section className="case-gallery" aria-label="创意案例">
        <div className="gallery-index">
          <span>01</span>
          <i />
          <span>{String(creativeCases.length).padStart(2, '0')}</span>
          <ArrowRight size={18} />
        </div>
        {creativeCases.map((item) => <CaseThumbnail item={item} key={item.id} />)}
      </section>

      <footer className="hub-footer">
        <span>为值得买精选</span>
        <span>2026</span>
      </footer>
    </main>
  )
}
