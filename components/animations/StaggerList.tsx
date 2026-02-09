'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface StaggerListProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const directionVariants = {
  up: { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  down: { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  left: { hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  right: { hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } },
}

export function StaggerList({ 
  children, 
  className = '',
  staggerDelay = 0.1,
  direction = 'up'
}: StaggerListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
