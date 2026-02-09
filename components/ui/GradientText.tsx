import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: ReactNode
  className?: string
  glow?: boolean
}

export function GradientText({ children, className, glow = false }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-tech bg-clip-text text-transparent',
        glow ? 'neon-text-glow' : 'text-glow',
        className
      )}
    >
      {children}
    </span>
  )
}
