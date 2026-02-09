'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard } from '@/components/ui/GlassCard'
import { AchievementCard } from './AchievementCard'

interface Achievement {
  icon: string
  title: string
  description: string
}

interface Experience {
  id: number
  year: string
  title: string
  duration: string
  achievements: Achievement[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:w-0.5 transform md:-translate-x-1/2">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent opacity-30 origin-top"
        />
      </div>

      <div className="space-y-12 md:space-y-16">
        {experiences.map((experience, expIndex) => (
          <div key={experience.id} className="relative">
            {/* Timeline Node */}
            <div className="absolute left-6 md:left-1/2 top-6 transform md:-translate-x-1/2 z-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{
                  delay: expIndex * 0.2,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200,
                }}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-tech border-4 border-background shadow-lg relative"
              >
                {/* Pulsing ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={isInView ? { scale: 2, opacity: 0 } : { scale: 0, opacity: 0 }}
                  transition={{
                    delay: expIndex * 0.2 + 0.3,
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="absolute inset-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-tech"
                />
                {/* Inner glow */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(102, 126, 234, 0.7)',
                      '0 0 0 8px rgba(102, 126, 234, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: expIndex * 0.2 + 0.5,
                  }}
                  className="absolute inset-0 rounded-full"
                />
              </motion.div>
            </div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, x: expIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: expIndex % 2 === 0 ? -50 : 50 }}
              transition={{ delay: expIndex * 0.2 + 0.3, duration: 0.6 }}
              className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                expIndex % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}
            >
              <GlassCard className="hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/0 via-accent-primary/0 to-accent-secondary/0 group-hover:from-accent-primary/5 group-hover:via-accent-primary/10 group-hover:to-accent-secondary/5 transition-all duration-500 pointer-events-none" />
                
                {/* Header */}
                <div className="mb-6 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-tech group-hover:bg-clip-text transition-all duration-300">
                      {experience.title}
                    </h3>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full bg-gradient-tech text-white text-sm font-semibold shadow-md w-fit"
                    >
                      {experience.duration}
                    </motion.span>
                  </div>
                  <p className="text-foreground/60 font-medium">{experience.year}</p>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experience.achievements.map((achievement, achIndex) => (
                    <AchievementCard
                      key={achIndex}
                      achievement={achievement}
                      delay={expIndex * 0.2 + achIndex * 0.1 + 0.5}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
