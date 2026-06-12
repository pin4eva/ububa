interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false, light = false }: SectionHeaderProps) {
  const align = centered ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${align} mb-12`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className={light ? 'section-title-white' : 'section-title'}>{title}</h2>
      <div className={centered ? 'divider-center' : 'divider'} />
      {subtitle && (
        <p className={`${light ? 'section-subtitle-white' : 'section-subtitle'} ${centered ? 'text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
