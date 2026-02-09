'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Chitkara University',
    location: 'Ropar, Punjab',
    duration: '2016 – 2020',
    score: 'CGPA 8.76',
  },
]

export function ResumeEducation() {
  return (
    <div className="space-y-6">
      {/* Section Title */}
      <RevealOnScroll direction="fade" delay={0.1}>
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-8 uppercase tracking-wide"
          style={{
            background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Education
        </h2>
      </RevealOnScroll>

      {/* Education Cards */}
      <div className="space-y-6">
        {education.map((item, index) => (
          <RevealOnScroll key={index} direction="fade" delay={0.2 + index * 0.1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="rounded-2xl p-6 md:p-8 border border-[#9D4EDD]/50 bg-white/5 backdrop-blur-sm"
              style={{
                boxShadow: '0 0 30px rgba(157, 78, 221, 0.2), inset 0 0 30px rgba(157, 78, 221, 0.1)',
              }}
            >
              <div className="flex items-start gap-6">
                {/* Icon Circle with Gradient */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #6C63FF 50%, #9D4EDD 100%)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-5" />
                    <path d="M6 12l6 3M6 12l6-3" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Degree */}
                  <h3
                    className="text-xl md:text-2xl font-bold mb-2"
                    style={{
                      color: '#3B82F6',
                    }}
                  >
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-lg md:text-xl text-white/90 font-medium mb-3">
                    {item.institution}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-white/60 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-sm md:text-base">{item.location}</span>
                  </div>

                  {/* Duration Tag */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="px-4 py-2 rounded-full text-white text-sm font-semibold"
                      style={{
                        background: 'linear-gradient(135deg, #3B82F6 0%, #6C63FF 50%, #9D4EDD 100%)',
                      }}
                    >
                      {item.duration}
                    </span>
                    {item.score && (
                      <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                        {item.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  )
}
