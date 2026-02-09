'use client'

import { ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function TextReveal({ 
  children, 
  className, 
  delay = 0,
  direction = 'up'
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const clipPathVariants = {
    up: {
      hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
      visible: { clipPath: 'inset(0% 0% 0% 0%)' },
    },
    down: {
      hidden: { clipPath: 'inset(0% 0% 100% 0%)' },
      visible: { clipPath: 'inset(0% 0% 0% 0%)' },
    },
    left: {
      hidden: { clipPath: 'inset(0% 100% 0% 0%)' },
      visible: { clipPath: 'inset(0% 0% 0% 0%)' },
    },
    right: {
      hidden: { clipPath: 'inset(0% 0% 0% 100%)' },
      visible: { clipPath: 'inset(0% 0% 0% 0%)' },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={clipPathVariants[direction]}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  )
}
