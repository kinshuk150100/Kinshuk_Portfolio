'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillBarProps {
  skill: string
  level: number
  color: string
}

export function SkillBar({ skill, level, color }: SkillBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground/90">{skill}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xs font-semibold text-foreground/60"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-foreground/10 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full bg-gradient-to-r ${color} rounded-full shadow-sm relative overflow-hidden`}
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={isInView ? { x: '100%' } : { x: '-100%' }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/3"
          />
        </motion.div>
      </div>
    </div>
  )
}
