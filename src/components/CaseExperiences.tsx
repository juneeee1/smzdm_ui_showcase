import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, RotateCcw, X } from 'lucide-react'
import { useEffect, useMemo, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'
import { products } from '../data/products'
import { CardSpread } from './CardSpread'

function ExperienceFrame({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className={`experience-canvas creative-canvas theme-${id}`}>
      <div className="experience-grid" />
      <div className="experience-label top-left">ZDM SELECTED / {id.toUpperCase()}</div>
      <div className="experience-label top-right">ZDM CREATIVE HUB</div>
      {children}
      <div className="experience-label bottom-left"><i /> INTERACTIVE</div>
      <div className="experience-label bottom-right">POINTER + KEYBOARD</div>
    </div>
  )
}

function ProductFanExperience() {
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
    <>
      <ExperienceFrame id="product-fan">
        <CardSpread products={products} arc={arc} lift={lift} expanded={expanded} onExpandedChange={setExpanded} />
      </ExperienceFrame>
      <div className="case-controls" aria-label="体验参数">
        <label><span>SPREAD <output>{arc}°</output></span><input aria-label="展开弧度" type="range" min="54" max="104" value={arc} onChange={(event) => setArc(Number(event.target.value))} /></label>
        <label><span>LIFT <output>{lift}px</output></span><input aria-label="卡片抬升" type="range" min="16" max="60" value={lift} onChange={(event) => setLift(Number(event.target.value))} /></label>
        <button type="button" onClick={replay}><RotateCcw size={14} /> REPLAY</button>
      </div>
    </>
  )
}

function SkewedCarouselExperience() {
  const [active, setActive] = useState(2)
  const reduceMotion = useReducedMotion()
  const total = products.length
  const move = (direction: number) => setActive((value) => (value + direction + total) % total)

  return (
    <>
      <ExperienceFrame id="skewed-carousel">
        <motion.div
          className="skewed-stage"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          onDragEnd={(_, info) => Math.abs(info.offset.x) > 30 && move(info.offset.x < 0 ? 1 : -1)}
          onWheel={(event) => Math.abs(event.deltaY) > 8 && move(event.deltaY > 0 ? 1 : -1)}
        >
          {products.map((product, index) => {
            let relative = (index - active + total) % total
            if (relative > total / 2) relative -= total
            return (
              <motion.button
                type="button"
                className={`skewed-item ${relative === 0 ? 'is-active' : ''}`}
                key={product.id}
                aria-label={`查看 ${product.title}`}
                animate={{
                  x: relative * 205,
                  y: Math.abs(relative) * 25,
                  rotate: relative * 3 - 7,
                  skewY: -4,
                  scale: relative === 0 ? 1.06 : 0.9,
                  opacity: Math.abs(relative) > 3 ? 0 : 1 - Math.abs(relative) * 0.12,
                }}
                transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 180, damping: 22 }}
                onClick={() => setActive(index)}
                style={{ zIndex: 10 - Math.abs(relative) }}
              >
                <img src={product.image} alt="" style={{ objectPosition: product.position }} />
                <span><small>{product.kicker}</small><strong>{product.title}</strong><b>{product.price}</b></span>
              </motion.button>
            )
          })}
        </motion.div>
      </ExperienceFrame>
      <CarouselControls active={active} total={total} onMove={move} label="DRAG OR SCROLL" />
    </>
  )
}

function TumbleCarouselExperience() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const current = products[active]
  const move = (step: number) => {
    setDirection(step)
    setActive((value) => (value + step + products.length) % products.length)
  }

  return (
    <>
      <ExperienceFrame id="tumble-carousel">
        <div className="tumble-stage">
          {products.slice(0, 4).map((product, index) => (
            <div className="tumble-ghost" key={product.id} style={{ transform: `translate(${index * 18}px, ${index * -9}px) rotate(${index * 5 - 8}deg)` }} />
          ))}
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.article
              className="tumble-card"
              key={current.id}
              custom={direction}
              initial={{ x: direction > 0 ? 360 : -360, y: -110, rotate: direction > 0 ? 155 : -155, opacity: 0 }}
              animate={{ x: 0, y: 0, rotate: -4, opacity: 1 }}
              exit={{ x: direction > 0 ? -360 : 360, y: 130, rotate: direction > 0 ? -155 : 155, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 150, damping: 18, mass: 0.9 }}
            >
              <img src={current.image} alt="" style={{ objectPosition: current.position }} />
              <div><small>0{active + 1} / 07 · {current.kicker}</small><h2>{current.title}</h2><strong>{current.price}</strong></div>
            </motion.article>
          </AnimatePresence>
        </div>
      </ExperienceFrame>
      <CarouselControls active={active} total={products.length} onMove={move} label="TUMBLE TO NEXT" />
    </>
  )
}

function CarouselControls({ active, total, onMove, label }: { active: number; total: number; onMove: (step: number) => void; label: string }) {
  return (
    <div className="case-controls carousel-controls">
      <span>{label}</span>
      <output>0{active + 1} / 0{total}</output>
      <div>
        <button type="button" onClick={() => onMove(-1)} aria-label="上一个"><ArrowLeft size={14} /></button>
        <button type="button" onClick={() => onMove(1)} aria-label="下一个"><ArrowRight size={14} /></button>
      </div>
    </div>
  )
}

function ModalCardsExperience() {
  const modalProducts = products.slice(1, 4)
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null)

  useEffect(() => {
    if (!selected) return
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [selected])

  return (
    <>
      <ExperienceFrame id="modal-cards">
        <div className="modal-card-grid">
          {modalProducts.map((product) => (
            <motion.button type="button" layoutId={`modal-${product.id}`} className="modal-product" key={product.id} onClick={() => setSelected(product)}>
              <img src={product.image} alt="" style={{ objectPosition: product.position }} />
              <span><small>{product.kicker}</small><strong>{product.title}</strong></span>
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          {selected && (
            <motion.div className="product-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onPointerDown={(event) => event.target === event.currentTarget && setSelected(null)}>
              <motion.article layoutId={`modal-${selected.id}`} className="product-modal" role="dialog" aria-modal="true" aria-label={`${selected.title} 商品详情`}>
                <img src={selected.image} alt="" style={{ objectPosition: selected.position }} />
                <div><small>ZDM SELECTED · {selected.kicker}</small><h2>{selected.title}</h2><p>精心挑选的设计对象，以更沉浸的方式快速查看材质、细节与推荐价格。</p><strong>{selected.price}</strong></div>
                <button type="button" onClick={() => setSelected(null)} aria-label="关闭详情"><X size={16} /></button>
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>
      </ExperienceFrame>
      <div className="case-controls case-status-line"><span>SELECT A CARD TO OPEN</span><output>ESC TO CLOSE</output></div>
    </>
  )
}

function DepthCardExperience() {
  const [point, setPoint] = useState({ x: 50, y: 50 })
  const [intensity, setIntensity] = useState(16)
  const transform = useMemo(() => {
    const x = (point.x - 50) / 50
    const y = (point.y - 50) / 50
    return `perspective(900px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg)`
  }, [point, intensity])
  const move = (event: ReactPointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect()
    setPoint({ x: ((event.clientX - box.left) / box.width) * 100, y: ((event.clientY - box.top) / box.height) * 100 })
  }

  return (
    <>
      <ExperienceFrame id="depth-card">
        <div className="depth-stage" onPointerMove={move} onPointerLeave={() => setPoint({ x: 50, y: 50 })}>
          <motion.article className="depth-product" animate={{ transform }} transition={{ type: 'spring', stiffness: 120, damping: 18 }}>
            <div className="depth-backdrop" style={{ transform: `translate(${(point.x - 50) * -0.08}px, ${(point.y - 50) * -0.08}px)` }} />
            <img src={products[6].image} alt="Moka Coffee Maker" style={{ transform: `translate(${(point.x - 50) * -0.16}px, ${(point.y - 50) * -0.16}px) scale(1.08)` }} />
            <div className="depth-spot" style={{ background: `radial-gradient(circle at ${point.x}% ${point.y}%, rgba(255,255,255,.34), transparent 34%)` }} />
            <div className="depth-copy" style={{ transform: `translate(${(point.x - 50) * 0.12}px, ${(point.y - 50) * 0.12}px)` }}><small>HOME / OBJECT 005</small><h2>Slow ritual.<br />Deep focus.</h2><strong>¥429</strong></div>
          </motion.article>
        </div>
      </ExperienceFrame>
      <div className="case-controls depth-controls"><label><span>DEPTH <output>{intensity}°</output></span><input aria-label="透视强度" type="range" min="4" max="24" value={intensity} onChange={(event) => setIntensity(Number(event.target.value))} /></label><span>MOVE POINTER ACROSS THE OBJECT</span></div>
    </>
  )
}

function WarpedCardExperience() {
  const [point, setPoint] = useState({ x: 52, y: 42 })
  const [strength, setStrength] = useState(1.16)
  const [hovered, setHovered] = useState(false)
  const image = products[1].image
  const move = (event: ReactPointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect()
    setPoint({ x: ((event.clientX - box.left) / box.width) * 100, y: ((event.clientY - box.top) / box.height) * 100 })
  }

  return (
    <>
      <ExperienceFrame id="warped-card">
        <div className="warp-stage">
          <div className="warped-product" onPointerMove={move} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
            <img src={image} alt="Mirrorless Camera" />
            <motion.span
              className="warp-lens"
              animate={{ left: `${point.x}%`, top: `${point.y}%`, scale: hovered ? 1 : 0.15, opacity: hovered ? 1 : 0 }}
              transition={{ type: 'spring', stiffness: 170, damping: 24 }}
              style={{ backgroundImage: `url("${image}")`, backgroundPosition: `${point.x}% ${point.y}%`, backgroundSize: `${strength * 118}%` }}
            />
            <div><small>OPTICAL STUDY / 006</small><h2>Look closer.</h2><strong>SONY · 18—55</strong></div>
          </div>
        </div>
      </ExperienceFrame>
      <div className="case-controls depth-controls"><label><span>WARP <output>{strength.toFixed(2)}×</output></span><input aria-label="形变强度" type="range" min="1.04" max="1.45" step="0.01" value={strength} onChange={(event) => setStrength(Number(event.target.value))} /></label><span>MOVE POINTER TO BEND THE IMAGE</span></div>
    </>
  )
}

export function CaseExperience({ caseId }: { caseId: string }) {
  if (caseId === 'skewed-carousel') return <SkewedCarouselExperience />
  if (caseId === 'tumble-carousel') return <TumbleCarouselExperience />
  if (caseId === 'modal-cards') return <ModalCardsExperience />
  if (caseId === 'depth-card') return <DepthCardExperience />
  if (caseId === 'warped-card') return <WarpedCardExperience />
  return <ProductFanExperience />
}
