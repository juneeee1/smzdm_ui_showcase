import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { Product } from '../data/products'
import { motionSprings } from '../motion/tokens'

type CardSpreadProps = {
  products: Product[]
  arc: number
  lift: number
  expanded: boolean
  onExpandedChange: (expanded: boolean) => void
}

export function CardSpread({ products, arc, lift, expanded, onExpandedChange }: CardSpreadProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [layout, setLayout] = useState({ stageWidth: 720, cardWidth: 184 })
  const stageRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const middle = (products.length - 1) / 2

  useEffect(() => {
    if (!stageRef.current) return
    const updateWidth = () => {
      const card = stageRef.current?.querySelector<HTMLElement>('.product-card')
      setLayout({ stageWidth: stageRef.current?.clientWidth ?? 720, cardWidth: card?.offsetWidth ?? 184 })
    }
    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(stageRef.current)
    return () => observer.disconnect()
  }, [])

  const transforms = useMemo(
    () =>
      products.map((_, index) => {
        const fromCenter = index - middle
        const progress = middle === 0 ? 0 : fromCenter / middle
        const openAngle = progress * (arc / 2)
        const closedAngle = progress * 10
        const angle = expanded ? openAngle : closedAngle
        const availableSpread = Math.max(64, layout.stageWidth / 2 - layout.cardWidth * 0.72 - 18)
        const openX = progress * Math.min(availableSpread, arc * 2.8)
        const closedX = progress * 72
        const curveY = expanded ? Math.pow(Math.abs(progress), 1.45) * 58 : Math.abs(progress) * 10

        return { fromCenter, angle, x: expanded ? openX : closedX, y: curveY }
      }),
    [arc, expanded, layout, middle, products],
  )

  return (
    <div
      ref={stageRef}
      className="spread-stage"
      role="group"
      aria-label="商品卡片扇形展开交互"
      onPointerEnter={() => onExpandedChange(true)}
      onPointerLeave={() => {
        setActiveIndex(null)
        onExpandedChange(false)
      }}
    >
      <div className="spread-shadow" aria-hidden="true" />
      {products.map((product, index) => {
        const transform = transforms[index]
        const distance = activeIndex === null ? 99 : Math.abs(index - activeIndex)
        const neighbourPush = activeIndex === null || distance > 2 ? 0 : index < activeIndex ? -12 / distance : index > activeIndex ? 12 / distance : 0
        const isActive = activeIndex === index
        const liftX = isActive ? Math.sin((transform.angle * Math.PI) / 180) * lift : 0
        const liftY = isActive ? -Math.cos((transform.angle * Math.PI) / 180) * lift : 0

        return (
          <motion.button
            type="button"
            className="product-card"
            key={product.id}
            aria-label={`${product.title}，${product.price}`}
            initial={reduceMotion ? false : { opacity: 0, y: 70, rotate: 0, scale: 0.86 }}
            animate={{
              opacity: activeIndex === null || isActive || distance <= 1 ? 1 : 0.76,
              x: transform.x + neighbourPush + liftX,
              y: transform.y + liftY,
              rotate: transform.angle,
              scale: isActive ? 1.055 : 1,
            }}
            transition={reduceMotion ? { duration: 0 } : { ...motionSprings.interface, delay: activeIndex === null ? index * 0.035 : 0 }}
            style={{ zIndex: isActive ? 30 : index + 1 }}
            onPointerEnter={() => setActiveIndex(index)}
            onPointerLeave={() => setActiveIndex(null)}
            onFocus={() => {
              onExpandedChange(true)
              setActiveIndex(index)
            }}
            onBlur={() => setActiveIndex(null)}
          >
            <img src={product.image} alt="" draggable={false} style={{ objectPosition: product.position }} />
            <span className="card-scrim" />
            <span className="card-content">
              <span className="card-kicker">{product.kicker}</span>
              <span className="card-title">{product.title}</span>
              <span className="card-price">{product.price}</span>
            </span>
            <span className="card-index">0{index + 1}</span>
          </motion.button>
        )
      })}
    </div>
  )
}
