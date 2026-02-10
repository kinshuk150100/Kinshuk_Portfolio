'use client'

import { Heading } from '@/components/ui/Heading'
import { GradientText } from '@/components/ui/GradientText'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { ProfessionalSummary } from './ProfessionalSummary'
import { ResumeSkillsGrid } from './ResumeSkillsGrid'
import { ExperienceHighlights } from './ExperienceHighlights'
import { motion } from 'framer-motion'

export function Resume() {
  const handleDownloadResume = () => {
    try {
      const link = document.createElement('a')
      link.href = '/Kinshuk_Resume.pdf'
      link.download = 'Kinshuk_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Fallback: open in new tab if download fails
      window.open('/Kinshuk_Resume.pdf', '_blank')
    }
  }

  return (
    <section id="resume" className="py-10 md:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll direction="fade" delay={0.1}>
          <div className="text-center mb-12 md:mb-16">
            <Heading level={2} className="mb-4" neon>
              Digital <GradientText glow>Resume</GradientText>
            </Heading>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
              A comprehensive overview of my professional journey and expertise
            </p>
          </div>
        </RevealOnScroll>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Professional Summary */}
              <RevealOnScroll direction="right" delay={0.2}>
                <ProfessionalSummary />
              </RevealOnScroll>

              {/* Experience Highlights */}
              <RevealOnScroll direction="right" delay={0.3}>
                <ExperienceHighlights />
              </RevealOnScroll>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              {/* Skills Grid */}
              <RevealOnScroll direction="left" delay={0.3}>
                <ResumeSkillsGrid />
              </RevealOnScroll>

              {/* Download Resume Card */}
              <RevealOnScroll direction="left" delay={0.5}>
                <GlassCard className="text-center">
                  <div className="mb-4">
                    <DownloadIcon />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Download Resume
                  </h3>
                  <p className="text-sm text-foreground/60 mb-4">
                    Get a PDF copy of my complete resume
                  </p>
                  <Button
                    variant="primary"
                    onClick={handleDownloadResume}
                    className="w-full group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                        whileHover={{ y: 2 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </motion.svg>
                      Download PDF
                    </span>
                  </Button>
                </GlassCard>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <motion.div
      className="inline-block"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 mx-auto text-accent-primary mb-3"
        animate={{
          y: [0, -4, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </motion.svg>
    </motion.div>
  )
}
