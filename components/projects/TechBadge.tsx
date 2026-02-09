'use client'

import { motion } from 'framer-motion'

interface TechBadgeProps {
  tech: string
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-foreground/5 text-foreground/80 border border-card-border hover:border-accent-primary/50 transition-colors"
    >
      {tech}
    </motion.span>
  )
}
