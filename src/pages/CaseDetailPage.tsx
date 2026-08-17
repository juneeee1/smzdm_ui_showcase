import { ArrowLeft } from 'lucide-react'
import { creativeCases } from '../cases/registry'
import { BrandMark } from '../components/BrandMark'
import { CaseExperience } from '../components/CaseExperiences'

export function CaseDetailPage({ slug }: { slug: string }) {
  const item = creativeCases.find((entry) => entry.id === slug) ?? creativeCases[0]
  const interactionHint: Record<string, string> = {
    'card-spread': '悬停探索',
    'skewed-carousel': '拖拽浏览',
    'tumble-carousel': '点击翻滚',
    'modal-cards': '点击展开',
    'depth-card': '移动查看景深',
    'warped-card': '移动产生形变',
  }

  return (
    <main className="case-page">
      <header className="case-header">
        <BrandMark compact />
        <a className="back-link" href="#/"><ArrowLeft size={15} /> 全部案例</a>
        <span>{item.number}</span>
      </header>

      <section className="case-experience">
        <div className="case-heading">
          <p>{item.number} / 界面案例</p>
          <h1>{item.title}</h1>
          <span>{interactionHint[item.id]}</span>
        </div>

        <CaseExperience caseId={item.id} />
      </section>
    </main>
  )
}
