'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import { StaggerList } from '@/components/animations/StaggerList'
import { RotatingIcon } from '@/components/animations/RotatingIcon'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'State Management',
    skills: ['Redux', 'Zustand', 'Context API'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'Postman', 'Figma', 'Webpack'],
  },
]

export function ResumeSkillsGrid() {
  return (
    <GlassCard>
      <div className="flex items-start gap-4 mb-6">
        <RotatingIcon speed={20}>
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
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
        </RotatingIcon>
        <h3 className="text-xl font-bold text-foreground">Skills</h3>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, catIndex) => (
          <div key={category.title}>
            <h4 className="text-sm font-semibold text-foreground/60 mb-3 uppercase tracking-wider">
              {category.title}
            </h4>
            <StaggerList
              staggerDelay={0.05}
              direction="up"
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md text-sm font-medium bg-foreground/5 text-foreground/80 border border-card-border hover:border-accent-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </StaggerList>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
