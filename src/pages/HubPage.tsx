import { ArrowRight } from 'lucide-react'
import { creativeCases } from '../cases/registry'
import { BrandMark } from '../components/BrandMark'
import { CaseThumbnail } from '../components/CaseThumbnail'

export function HubPage() {
  return (
    <main className="hub-page">
      <header className="hub-header">
        <BrandMark />
        <span>{String(creativeCases.length).padStart(2, '0')} SELECTED CASE</span>
      </header>

      <section className="hub-intro">
        <p>ZDM Creative Hub</p>
        <h1>Selected Cases</h1>
        <span>UI · INTERACTION · VISUAL</span>
      </section>

      <section className="case-gallery" aria-label="Creative cases">
        <div className="gallery-index">
          <span>01</span>
          <i />
          <span>01</span>
          <ArrowRight size={18} />
        </div>
        {creativeCases.map((item) => <CaseThumbnail item={item} key={item.id} />)}
      </section>

      <footer className="hub-footer">
        <span>CURATED FOR SMZDM</span>
        <span>2026</span>
      </footer>
    </main>
  )
}
