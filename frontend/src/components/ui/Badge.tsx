import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  color?: 'blue' | 'orange' | 'teal' | 'green' | 'purple' | 'gray'
  className?: string
}

const colorMap = {
  blue: 'bg-blue-100 text-blue-800',
  orange: 'bg-orange-100 text-orange-700',
  teal: 'bg-teal-100 text-teal-700',
  green: 'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
  gray: 'bg-slate-100 text-slate-600',
}

export function Badge({ children, color = 'gray', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  )
}
