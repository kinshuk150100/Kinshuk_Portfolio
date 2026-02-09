'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'

export function ProfessionalSummary() {
  return (
    <GlassCard>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-tech flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-white"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3">
            Professional Summary
          </h3>
        </div>
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-foreground/80 leading-relaxed text-base"
      >
        Frontend Developer with <span className="font-semibold text-foreground">4 years of experience</span> building scalable, 
        high-performance web applications using <span className="font-semibold text-accent-primary">React</span>,{' '}
        <span className="font-semibold text-accent-primary">Next.js</span>, and{' '}
        <span className="font-semibold text-accent-primary">TypeScript</span>. 
        Passionate about creating exceptional user experiences through clean code, 
        performance optimization, and modern design patterns.
      </motion.p>
    </GlassCard>
  )
}
