'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { TechBadge } from './TechBadge'
import type { Project } from './types'

interface ProjectCardProps {
  project: Project
  onViewDetails: () => void
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className="h-full flex flex-col overflow-hidden group cursor-pointer">
        {/* Image Placeholder */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-t-xl mb-4">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="w-full h-full bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 flex items-center justify-center"
          >
            <div className="text-foreground/20 text-6xl font-bold">
              {project.title.charAt(0)}
            </div>
          </motion.div>
          
          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-4"
          >
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                onViewDetails()
              }}
              className="bg-gradient-tech text-white border-0"
            >
              View Details
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-tech group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-foreground/70 mb-4 flex-1 overflow-hidden">
            <span className="line-clamp-2">{project.description}</span>
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs text-foreground/50 px-2 py-1">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-card-border">
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
              }}
              className="flex-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
              }}
              className="flex-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 mr-2"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.183 5.183 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
