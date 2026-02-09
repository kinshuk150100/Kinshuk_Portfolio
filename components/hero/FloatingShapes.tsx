'use client'

import { motion } from 'framer-motion'

const shapes = [
  {
    size: 'w-72 h-72',
    position: 'top-10 left-10',
    gradient: 'from-accent-primary/8 to-accent-primary/4',
    duration: 20,
    delay: 0,
  },
  {
    size: 'w-96 h-96',
    position: 'top-1/4 right-10',
    gradient: 'from-accent-primary/10 to-accent-primary/5',
    duration: 25,
    delay: 2,
  },
  {
    size: 'w-64 h-64',
    position: 'bottom-1/4 left-1/4',
    gradient: 'from-accent-primary/8 to-accent-primary/4',
    duration: 18,
    delay: 4,
  },
  {
    size: 'w-80 h-80',
    position: 'bottom-20 right-1/4',
    gradient: 'from-accent-primary/10 to-accent-primary/5',
    duration: 22,
    delay: 1,
  },
]

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.position} rounded-full blur-3xl ${shape.gradient}`}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}

      {/* Additional smaller shapes - Minimal terminal style */}
      {Array.from({ length: 4 }).map((_, index) => (
        <motion.div
          key={`small-${index}`}
          className="absolute w-24 h-24 rounded-full blur-xl bg-accent-primary/6"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
    </div>
  )
}
