import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  neon?: boolean
}

export function Heading({ children, level = 2, className, neon = false }: HeadingProps) {
  const styles = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    3: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    5: 'text-lg md:text-xl lg:text-2xl font-medium',
    6: 'text-base md:text-lg lg:text-xl font-medium',
  }

  const baseClassName = cn(
    styles[level], 
    neon && 'neon-text-glow',
    className
  )

  switch (level) {
    case 1:
      return <h1 className={baseClassName}>{children}</h1>
    case 2:
      return <h2 className={baseClassName}>{children}</h2>
    case 3:
      return <h3 className={baseClassName}>{children}</h3>
    case 4:
      return <h4 className={baseClassName}>{children}</h4>
    case 5:
      return <h5 className={baseClassName}>{children}</h5>
    case 6:
      return <h6 className={baseClassName}>{children}</h6>
    default:
      return <h2 className={baseClassName}>{children}</h2>
  }
}
