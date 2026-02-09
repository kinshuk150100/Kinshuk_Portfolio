'use client'

import { motion } from 'framer-motion'

interface Achievement {
  icon: string
  title: string
  description: string
}

interface AchievementCardProps {
  achievement: Achievement
  delay: number
  isInView: boolean
}

export function AchievementCard({ achievement, delay, isInView }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="p-4 rounded-lg bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 hover:border-foreground/20 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-secondary/0 group-hover:from-accent-primary/10 group-hover:to-accent-secondary/10 transition-all duration-300 pointer-events-none" />
      
      <div className="flex items-start gap-3 relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
        >
          {achievement.icon}
        </motion.div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground mb-1 group-hover:text-transparent group-hover:bg-gradient-tech group-hover:bg-clip-text transition-all duration-300">
            {achievement.title}
          </h4>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
