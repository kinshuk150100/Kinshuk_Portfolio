'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'

const highlights = [
  {
    icon: '🧩',
    title: 'Built Reusable UI Libraries',
    description: 'Developed comprehensive component libraries and design systems used across multiple projects, reducing development time by 40% and ensuring design consistency.',
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Optimized application performance, reducing load times by 40% and improving Core Web Vitals scores through code splitting, lazy loading, and bundle optimization.',
  },
  {
    icon: '🔌',
    title: 'API Integration',
    description: 'Integrated RESTful APIs and WebSocket connections, implementing robust authentication and authorization systems for secure data handling.',
  },
  {
    icon: '🔄',
    title: 'Real-time Features',
    description: 'Built real-time features including live data updates, collaborative editing, and instant notifications using WebSockets and modern state management.',
  },
]

export function ExperienceHighlights() {
  return (
    <GlassCard>
      <div className="flex items-start gap-4 mb-6">
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
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground">Experience Highlights</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="p-4 rounded-lg bg-foreground/5 dark:bg-foreground/10 border border-card-border hover:border-accent-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent-primary transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
