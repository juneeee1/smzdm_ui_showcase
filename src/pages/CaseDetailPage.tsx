import { ArrowLeft, RotateCcw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { creativeCases } from '../cases/registry'
import { BrandMark } from '../components/BrandMark'
import { CardSpread } from '../components/CardSpread'
import { products } from '../data/products'

export function CaseDetailPage({ slug }: { slug: string }) {
  const item = creativeCases.find((entry) => entry.id === slug) ?? creativeCases[0]
  const [arc, setArc] = useState(82)
  const [lift, setLift] = useState(38)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const open = window.setTimeout(() => setExpanded(true), 360)
    return () => window.clearTimeout(open)
  }, [])

  const replay = () => {
    setExpanded(false)
    window.setTimeout(() => setExpanded(true), 90)
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
          <span>HOVER TO EXPLORE</span>
        </div>

        <div className="experience-canvas">
          <div className="experience-grid" />
          <div className="experience-label top-left">SELECTED GOODS / 07</div>
          <div className="experience-label top-right">ZDM CREATIVE HUB</div>
          <CardSpread
            products={products}
            arc={arc}
            lift={lift}
            expanded={expanded}
            onExpandedChange={setExpanded}
          />
          <div className="experience-label bottom-left"><i /> INTERACTIVE</div>
          <div className="experience-label bottom-right">POINTER + KEYBOARD</div>
        </div>

        <div className="case-controls" aria-label="体验参数">
          <label>
            <span>SPREAD <output>{arc}°</output></span>
            <input aria-label="展开弧度" type="range" min="54" max="104" value={arc} onChange={(event) => setArc(Number(event.target.value))} />
          </label>
          <label>
            <span>LIFT <output>{lift}px</output></span>
            <input aria-label="卡片抬升" type="range" min="16" max="60" value={lift} onChange={(event) => setLift(Number(event.target.value))} />
          </label>
          <button type="button" onClick={replay}><RotateCcw size={14} /> REPLAY</button>
        </div>
      </section>
    </main>
  )
}
