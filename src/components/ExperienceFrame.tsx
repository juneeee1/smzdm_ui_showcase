import type { ReactNode } from 'react'

export function ExperienceFrame({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className={`experience-canvas creative-canvas theme-${id}`}>
      <div className="experience-grid" />
      <div className="experience-label top-left">值得买精选 / 交互实验</div>
      <div className="experience-label top-right">ZDM CREATIVE HUB</div>
      {children}
      <div className="experience-label bottom-left"><i /> 可交互</div>
      <div className="experience-label bottom-right">指针 + 键盘</div>
    </div>
  )
}
