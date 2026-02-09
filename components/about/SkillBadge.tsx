'use client'

import { motion } from 'framer-motion'

interface SkillBadgeProps {
  skill: string
  delay?: number
}

export function SkillBadge({ skill, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-transparent hover:bg-white/10 text-white text-sm font-medium transition-all duration-300 cursor-default border border-white/30 hover:border-white/50"
    >
      {skill}
    </motion.span>
  )
}
