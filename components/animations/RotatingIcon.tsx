'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RotatingIconProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'clockwise' | 'counterclockwise'
}

export function RotatingIcon({ 
  children, 
  className,
  speed = 20,
  direction = 'clockwise'
}: RotatingIconProps) {
  return (
    <motion.div
      className={cn('inline-block', className)}
      animate={{
        rotate: direction === 'clockwise' ? 360 : -360,
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.div>
  )
}
