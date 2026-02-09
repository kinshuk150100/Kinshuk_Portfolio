'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const projects = [
  {
    id: 1,
    title: 'Golar Token',
    description: 'Built a ReactJS-based crypto platform where users could purchase gold using GOLA tokens, with secure wallet integration.',
    tags: ['React.js', 'Web3', 'Wallet Connect'],
    accentColor: '#3B82F6', // Light blue
    tagColor: '#3B82F6',
  },
  {
    id: 2,
    title: 'Valuit',
    description: 'Developed a dual-role Web3 platform (Issuer & Investor) enabling crypto-based investment in real estate assets through secure wallet connectivity.',
    tags: ['React.js', 'Wallet Connect', 'Web3'],
    accentColor: '#EC4899', // Pink/purple
    tagColor: '#9D4EDD',
  },
  {
    id: 3,
    title: 'Oasis Exchange',
    description: 'Developed a high-performance crypto exchange frontend in Next.js with live market updates, trading flows, and secure wallet connectivity.',
    tags: ['Next.js', 'Sumsub', 'Wallet Connect'],
    accentColor: '#EF4444', // Red/pink
    tagColor: '#EF4444',
  },
  {
    id: 4,
    title: 'Libertum',
    description: 'Engineered a ReactJS crypto investment system allowing issuers to onboard properties and investors to fund real estate projects via blockchain wallets.',
    tags: ['React.js', 'Browser Extension', 'Web3'],
    accentColor: '#22C55E', // Green
    tagColor: '#22C55E',
  },
  {
    id: 5,
    title: 'Gaudiy',
    description: 'Created a responsive Next.js trading platform where users buy and sell cryptocurrencies with real-time price tracking and wallet support.',
    tags: ['Next.js', 'Dashboard', 'Admin Panel'],
    accentColor: '#F59E0B', // Orange
    tagColor: '#F59E0B',
  },
  {
    id: 6,
    title: 'Nifty Art',
    description: 'Built an AI-powered NFT marketplace where users generate digital artwork and list it for sale to buyers through blockchain integration.',
    tags: ['React.js', 'Ad Management', 'Admin Panel'],
    accentColor: '#6C63FF', // Blue/purple
    tagColor: '#6C63FF',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <RevealOnScroll direction="fade" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center uppercase tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Projects
          </h2>
        </RevealOnScroll>

        {/* Projects Grid - 2x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} direction="fade" delay={0.1 + index * 0.05}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-xl p-6 border backdrop-blur-sm relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col bg-white/5 dark:bg-white/5 border-purple-500/50 dark:border-purple-500/50 shadow-[0_0_30px_rgba(157,78,221,0.2)] dark:shadow-[0_0_30px_rgba(157,78,221,0.2)]"
              >
                {/* Colored Accent Line at Top */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: project.accentColor,
                  }}
                />

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground dark:text-white mb-3 mt-2">
                  {project.title}
                </h3>

                {/* Description - Flex grow to push tags to bottom */}
                <p className="text-foreground/80 dark:text-white/80 text-sm md:text-base mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 rounded-full text-white text-xs md:text-sm font-medium"
                      style={{
                        background: project.tagColor,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
