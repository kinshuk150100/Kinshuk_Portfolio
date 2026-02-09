'use client'

import { ReactNode, forwardRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, delay = 0, hover = true }, ref) => {
    const [isInView, setIsInView] = useState(false)

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        onViewportEnter={() => setIsInView(true)}
        animate={isInView ? {
          y: [0, -8, 0],
        } : {}}
        transition={{
          opacity: { duration: 0.5, delay },
          y: isInView ? {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay + 0.5,
          } : { duration: 0.5, delay }
        }}
        whileHover={hover ? { 
          y: -8,
          transition: { duration: 0.2 } 
        } : undefined}
        className={cn(
          'glass card-glow rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden',
          'transition-all duration-300',
          hover && 'hover:card-glow-hover',
          className
        )}
      >
        {/* Animated Border Glow - Outer glow layer */}
        <motion.div
          className="absolute -inset-[2px] rounded-xl card-border-glow"
          style={{
            background: 'linear-gradient(135deg, #FF0080 0%, #7928CA 25%, #2AFADF 50%, #00F5A0 75%, #FF9A00 100%)',
            mixBlendMode: 'screen',
            filter: 'blur(12px)',
            opacity: 0,
            pointerEvents: 'none',
            zIndex: -1,
          }}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Inner content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    )
  }
)

GlassCard.displayName = 'GlassCard'
