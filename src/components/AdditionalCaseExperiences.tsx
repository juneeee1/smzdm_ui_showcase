import { motion, useMotionValue, useTransform, type PanInfo } from 'motion/react'
import { RotateCcw, Sparkles } from 'lucide-react'
import { useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react'
import { products, type Product } from '../data/products'
import { ExperienceFrame } from './ExperienceFrame'

const chromaColors = ['#ff4c40', '#28a9ff', '#ffd34d', '#ba78ff', '#31d6a1', '#ff7aa8']

function BounceCardsExperience() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [push, setPush] = useState(92)
  const [replay, setReplay] = useState(0)
  const cards = products.slice(0, 5)

  return (
    <>
      <ExperienceFrame id="bounce-cards">
        <div className="bounce-stage" key={replay}>
          {cards.map((product, index) => {
            const baseX = (index - 2) * 86
            const pushedX = hovered === null || hovered === index ? baseX : baseX + (index < hovered ? -push : push)
            return (
              <motion.button
                type="button"
                className="bounce-product"
                key={product.id}
                aria-label={`聚焦 ${product.title}`}
                initial={{ scale: 0, opacity: 0, y: 45 }}
                animate={{
                  x: pushedX,
                  y: hovered === index ? -12 : Math.abs(index - 2) * 9,
                  rotate: hovered === index ? 0 : [9, 4, -3, -8, 3][index],
                  scale: hovered === index ? 1.08 : 1,
                  opacity: 1,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 17, delay: replay ? index * 0.045 : 0.24 + index * 0.065 }}
                onPointerEnter={() => setHovered(index)}
                onPointerLeave={() => setHovered(null)}
                onFocus={() => setHovered(index)}
                onBlur={() => setHovered(null)}
                style={{ zIndex: hovered === index ? 20 : index + 1 }}
              >
                <img src={product.image} alt="" style={{ objectPosition: product.position }} />
                <span><small>{product.kicker}</small><strong>{product.title}</strong><b>{product.price}</b></span>
              </motion.button>
            )
          })}
        </div>
      </ExperienceFrame>
      <div className="case-controls bounce-controls">
        <label><span>让位距离 <output>{push}px</output></span><input aria-label="卡片让位距离" type="range" min="56" max="132" value={push} onChange={(event) => setPush(Number(event.target.value))} /></label>
        <span>悬停任意卡片，观察相邻卡片弹性让位</span>
        <button type="button" onClick={() => setReplay((value) => value + 1)}><RotateCcw size={14} /> 重播</button>
      </div>
    </>
  )
}

function ChromaGridExperience() {
  const [point, setPoint] = useState({ x: 50, y: 50 })
  const [active, setActive] = useState(false)
  const [radius, setRadius] = useState(165)
  const cards = products.slice(0, 6)
  const move = (event: ReactPointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect()
    setPoint({ x: ((event.clientX - box.left) / box.width) * 100, y: ((event.clientY - box.top) / box.height) * 100 })
    setActive(true)
  }

  return (
    <>
      <ExperienceFrame id="chroma-grid">
        <div
          className={`chroma-stage ${active ? 'is-active' : ''}`}
          onPointerMove={move}
          onPointerLeave={() => setActive(false)}
          style={{ '--chroma-x': `${point.x}%`, '--chroma-y': `${point.y}%`, '--chroma-radius': `${radius}px` } as CSSProperties}
        >
          <div className="chroma-product-grid">
            {cards.map((product, index) => (
              <article className="chroma-product" key={product.id} style={{ '--chroma-color': chromaColors[index] } as CSSProperties}>
                <img src={product.image} alt="" style={{ objectPosition: product.position }} />
                <footer><div><strong>{product.title}</strong><small>{product.kicker}</small></div><b>{product.price}</b></footer>
              </article>
            ))}
          </div>
          <div className="chroma-desaturate" />
          <div className="chroma-idle" />
        </div>
      </ExperienceFrame>
      <div className="case-controls depth-controls">
        <label><span>光晕半径 <output>{radius}px</output></span><input aria-label="光谱光晕半径" type="range" min="100" max="250" value={radius} onChange={(event) => setRadius(Number(event.target.value))} /></label>
        <span>移动指针，让商品从灰阶中显色</span>
      </div>
    </>
  )
}

function ProfileCardExperience() {
  const [point, setPoint] = useState({ x: 50, y: 50 })
  const [followed, setFollowed] = useState(false)
  const move = (event: ReactPointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect()
    setPoint({ x: ((event.clientX - box.left) / box.width) * 100, y: ((event.clientY - box.top) / box.height) * 100 })
  }
  const rotateX = (50 - point.y) / 5.5
  const rotateY = (point.x - 50) / 5.5

  return (
    <>
      <ExperienceFrame id="profile-card">
        <div className="profile-stage" onPointerMove={move} onPointerLeave={() => setPoint({ x: 50, y: 50 })}>
          <div className="profile-glow" style={{ transform: `translate(${(point.x - 50) * 0.24}px, ${(point.y - 50) * 0.24}px)` }} />
          <motion.article className="holo-profile" animate={{ rotateX, rotateY }} transition={{ type: 'spring', stiffness: 150, damping: 20 }}>
            <img className="holo-profile-image" src={products[1].image} alt="微单相机" style={{ objectPosition: products[1].position }} />
            <div className="holo-scrim" />
            <div className="holo-spectrum" style={{ backgroundPosition: `${point.x}% ${point.y}%` }} />
            <header><small>009 / 值得买身份</small><span><Sparkles size={14} /> ZDM</span></header>
            <div className="holo-title"><h2>影像<br />研究所</h2><p>消费电子 · 资深值友</p></div>
            <footer>
              <div><img src={products[1].image} alt="" /><span><strong>@影像研究所</strong><small>正在分享好物</small></span></div>
              <button type="button" onClick={() => setFollowed((value) => !value)}>{followed ? '已关注' : '关注'}</button>
            </footer>
          </motion.article>
        </div>
      </ExperienceFrame>
      <div className="case-controls case-status-line"><span>移动指针改变卡片倾角与光谱折射</span><output>{followed ? '已关注' : '等待互动'}</output></div>
    </>
  )
}

function StackCard({ product, index, total, isTop, onSendBack }: { product: Product; index: number; total: number; isTop: boolean; onSendBack: () => void }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-120, 120], [18, -18])
  const rotateY = useTransform(x, [-120, 120], [-18, 18])
  const finishDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.hypot(info.offset.x, info.offset.y) > 80) onSendBack()
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div className="stack-drag-layer" style={{ x, y, rotateX, rotateY, zIndex: index + 1 }} drag={isTop} dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }} dragElastic={0.72} onDragEnd={finishDrag}>
      <motion.div
        className={`stack-product ${isTop ? 'is-top' : ''}`}
        role="button"
        tabIndex={isTop ? 0 : -1}
        aria-label={`${product.title}，移至卡堆底部`}
        animate={{ rotateZ: (total - index - 1) * 4 - 5, scale: 0.83 + index * 0.043, y: (total - index - 1) * -7 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        onClick={() => isTop && onSendBack()}
        onKeyDown={(event) => {
          if (isTop && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault()
            onSendBack()
          }
        }}
      >
        <img src={product.image} alt="" style={{ objectPosition: product.position }} />
        <span><small>{product.kicker}</small><strong>{product.title}</strong><b>{product.price}</b></span>
      </motion.div>
    </motion.div>
  )
}

function StackExperience() {
  const initial = products.slice(0, 5)
  const [stack, setStack] = useState(initial)
  const sendBack = (id: string) => setStack((current) => {
    const selected = current.find((product) => product.id === id)
    return selected ? [selected, ...current.filter((product) => product.id !== id)] : current
  })
  const top = stack[stack.length - 1]

  return (
    <>
      <ExperienceFrame id="stack">
        <div className="stack-stage">
          {stack.map((product, index) => (
            <StackCard key={product.id} product={product} index={index} total={stack.length} isTop={index === stack.length - 1} onSendBack={() => sendBack(product.id)} />
          ))}
        </div>
      </ExperienceFrame>
      <div className="case-controls stack-controls">
        <span>拖拽或点击顶层卡片，将它移到卡堆底部</span>
        <output>当前：{top.title}</output>
        <button type="button" onClick={() => setStack(initial)}><RotateCcw size={14} /> 复位</button>
      </div>
    </>
  )
}

export function AdditionalCaseExperience({ caseId }: { caseId: string }) {
  if (caseId === 'chroma-grid') return <ChromaGridExperience />
  if (caseId === 'profile-card') return <ProfileCardExperience />
  if (caseId === 'stack') return <StackExperience />
  return <BounceCardsExperience />
}
