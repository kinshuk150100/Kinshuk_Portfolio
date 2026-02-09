'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { Heading } from '@/components/ui/Heading'
import { GradientText } from '@/components/ui/GradientText'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SkillCategory } from './SkillCategory'

interface Skill {
  name: string
  level?: number // 0-100 for skill bars
}

interface Category {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  color: string
}

const categories: Category[] = [
  {
    title: 'Frontend',
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
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Redux', level: 85 },
      { name: 'Tailwind', level: 93 },
      { name: 'Bootstrap', level: 80 },
    ],
    color: 'from-accent-primary to-accent-secondary',
  },
  {
    title: 'Tools',
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
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker basics', level: 70 },
      { name: 'Postman', level: 85 },
      { name: 'Figma', level: 88 },
    ],
    color: 'from-accent-secondary to-accent-tertiary',
  },
  {
    title: 'Concepts',
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
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
    ),
    skills: [
      { name: 'REST APIs', level: 92 },
      { name: 'WebSockets', level: 85 },
      { name: 'Performance Optimization', level: 88 },
      { name: 'State Management', level: 90 },
    ],
    color: 'from-accent-primary to-accent-secondary',
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-transparent to-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll direction="fade" delay={0.1}>
          <div className="text-center mb-12 md:mb-16">
            <Heading level={2} className="mb-4">
              My <GradientText>Skills</GradientText>
            </Heading>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
              Technologies and tools I work with to build exceptional digital experiences
            </p>
          </div>
        </RevealOnScroll>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <RevealOnScroll
              key={category.title}
              direction="up"
              delay={0.1 * index + 0.2}
            >
              <SkillCategory category={category} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
