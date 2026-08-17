export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand-mark ${compact ? 'is-compact' : ''}`} href="#/" aria-label="返回 ZDM Creative Hub 首页">
      <span className="brand-seal">值</span>
      <span className="brand-copy">
        <strong>ZDM</strong>
        {!compact && <small>CREATIVE HUB</small>}
      </span>
    </a>
  )
}
