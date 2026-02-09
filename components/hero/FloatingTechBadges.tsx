'use client'

import { motion } from 'framer-motion'

const techBadges = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind', icon: '💨' },
]

const positions = [
  { top: '15%', left: '8%' },
  { top: '25%', right: '10%' },
  { bottom: '30%', left: '12%' },
  { bottom: '20%', right: '8%' },
]

export function FloatingTechBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {techBadges.map((badge, index) => {
        const position = positions[index]
        return (
          <motion.div
            key={badge.name}
            className="absolute hidden md:block"
            style={position}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              y: [0, -15, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 5 + index * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.4,
            }}
          >
            <div className="flex flex-col items-center gap-2.5">
              <motion.div
                className="text-3xl md:text-4xl filter drop-shadow-sm"
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
              >
                {badge.icon}
              </motion.div>
              <motion.div
                className="px-3 py-1.5 rounded-full bg-foreground/5 dark:bg-foreground/10 backdrop-blur-md border border-card-border/50 text-xs md:text-sm font-medium text-foreground/70 whitespace-nowrap shadow-sm"
                whileHover={{ scale: 1.08, opacity: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {badge.name}
              </motion.div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
