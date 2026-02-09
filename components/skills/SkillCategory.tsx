'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard } from '@/components/ui/GlassCard'
import { SkillBar } from './SkillBar'

interface Skill {
  name: string
  level?: number
}

interface Category {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  color: string
}

interface SkillCategoryProps {
  category: Category
}

export function SkillCategory({ category }: SkillCategoryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <GlassCard ref={ref} className="h-full hover:scale-[1.02] transition-transform duration-300">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-4 mb-6 pb-6 border-b border-foreground/10"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
        >
          {category.icon}
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
          <p className="text-sm text-foreground/60">
            {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
          </p>
        </div>
      </motion.div>

      {/* Skills List */}
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <SkillBar
              skill={skill.name}
              level={skill.level || 0}
              color={category.color}
            />
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
