'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Node.js'],
    color: '#3B82F6', // Blue
  },
  {
    title: 'State Management',
    skills: ['Redux Toolkit', 'Redux', 'Zustand'],
    color: '#EC4899', // Pink/Purple
  },
  {
    title: 'UI & Styling',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Styled Components', 'SASS', 'SCSS'],
    color: '#EF4444', // Red
  },
  {
    title: 'Testing',
    skills: ['Jest', 'React Testing Library'],
    color: '#22C55E', // Green
  },
  {
    title: 'Domain',
    skills: ['Web3', 'Web3.js', 'Ethers.js', 'Blockchain', 'SmartContract', 'Blockchain Applications'],
    color: '#9D4EDD', // Purple
  },
  {
    title: 'APIs & Realtime',
    skills: ['REST APIs', 'Socket.io', 'WebSockets'],
    color: '#F59E0B', // Orange/Yellow
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'GitLab', 'Jira', 'Docker'],
    color: '#3B82F6', // Blue
  },
]

export function About() {
  return (
    <section id="about" className="py-10 md:py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Title */}
        <RevealOnScroll direction="fade" delay={0.05}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center uppercase tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            About
          </h2>
        </RevealOnScroll>

        {/* Experience Summary Box */}
        <RevealOnScroll direction="fade" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl p-6 md:p-8 border backdrop-blur-sm bg-white/5 dark:bg-white/5 bg-opacity-50 dark:bg-opacity-100 border-purple-500/50 dark:border-purple-500/50"
            >
              <p className="text-foreground text-base md:text-lg leading-relaxed">
                React.js Developer with{' '}
                <span style={{ color: '#EC4899' }} className="font-semibold">
                  3+ years of experience
                </span>{' '}
                in building scalable, high-performance web applications. Strong expertise in{' '}
                <span style={{ color: '#EC4899' }} className="font-semibold">
                  React.js, Next.js, TypeScript, Redux Toolkit
                </span>
                , and modern UI frameworks. Experienced in{' '}
                <span style={{ color: '#EC4899' }} className="font-semibold">
                  Web3 and blockchain-based applications
                </span>
                , REST API integration, and performance optimization. Proven ability to collaborate
                with cross-functional teams to deliver clean, efficient, and maintainable code.{' '}
                <span style={{ color: '#22C55E' }} className="font-semibold">
                  Actively seeking frontend opportunities.
                </span>
              </p>
            </motion.div>
          </div>
        </RevealOnScroll>

        {/* Technical Skills Section */}
        <RevealOnScroll direction="fade" delay={0.2}>
          <div id="skills" className="max-w-6xl mx-auto scroll-mt-20">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center uppercase tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #6C63FF 50%, #9D4EDD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Technical Skills
            </h2>

            {/* Skills Grid */}
            <div
              className="grid gap-6 items-stretch auto-rows-fr"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
            >
              {skillCategories.map((category, index) => (
                <RevealOnScroll key={category.title} direction="fade" delay={0.1 + index * 0.05}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-xl p-4 md:p-6 border backdrop-blur-sm bg-white/5 dark:bg-white/5 bg-opacity-50 dark:bg-opacity-100 border-purple-500/50 dark:border-purple-500/50 overflow-hidden flex flex-col h-full"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-lg text-base font-medium text-white inline-flex items-center justify-center whitespace-nowrap h-8"
                          style={{
                            background: category.color,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
