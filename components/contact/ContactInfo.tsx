'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'

const contactInfo = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '7986221055',
    href: 'tel:+917986221055',
    color: 'from-accent-primary to-accent-secondary',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Pathankot, Punjab',
    href: 'https://maps.google.com/?q=Pathankot,Punjab',
    color: 'from-accent-secondary to-accent-tertiary',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'kinshuk',
    href: 'https://www.linkedin.com/in/kinshuk-mehra-881023203/',
    color: 'from-accent-primary to-accent-secondary',
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactInfo.map((info, index) => (
        <motion.a
          key={index}
          href={info.href}
          target={info.href.startsWith('http') ? '_blank' : undefined}
          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ x: 5 }}
        >
          <GlassCard className="hover:border-foreground/30 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                {info.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-foreground/60 mb-1">{info.label}</div>
                <div className="text-base md:text-lg font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-tech group-hover:bg-clip-text transition-all duration-300">
                  {info.value}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-foreground/40 group-hover:text-foreground/60 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.div>
            </div>
          </GlassCard>
        </motion.a>
      ))}
    </div>
  )
}
