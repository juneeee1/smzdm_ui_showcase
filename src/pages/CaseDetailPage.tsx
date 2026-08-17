import { ArrowLeft } from 'lucide-react'
import { creativeCases } from '../cases/registry'
import { BrandMark } from '../components/BrandMark'
import { CaseExperience } from '../components/CaseExperiences'

export function CaseDetailPage({ slug }: { slug: string }) {
  const item = creativeCases.find((entry) => entry.id === slug) ?? creativeCases[0]
  const interactionHint: Record<string, string> = {
    'card-spread': 'HOVER TO EXPLORE',
    'skewed-carousel': 'DRAG TO BROWSE',
    'tumble-carousel': 'CLICK TO TUMBLE',
    'modal-cards': 'CLICK TO OPEN',
    'depth-card': 'MOVE FOR DEPTH',
    'warped-card': 'MOVE TO WARP',
  }

  return (
    <main className="case-page">
      <header className="case-header">
        <BrandMark compact />
        <a className="back-link" href="#/"><ArrowLeft size={15} /> ALL CASES</a>
        <span>{item.number}</span>
      </header>

      <section className="case-experience">
        <div className="case-heading">
          <p>{item.number} / UI CASE</p>
          <h1>{item.title}</h1>
          <span>{interactionHint[item.id]}</span>
        </div>

        <CaseExperience caseId={item.id} />
      </section>
    </main>
  )
}
