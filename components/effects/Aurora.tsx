'use client'

import { motion } from 'framer-motion'

export function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none aurora-container">
      {/* Aurora Layer 1 - Primary Blue Wave */}
      <motion.div
        className="absolute inset-0 aurora-layer-1"
        animate={{
          x: ['-50%', '50%', '-50%'],
          y: ['-20%', '20%', '-20%'],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
        }}
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, 
              rgba(37, 99, 235, 0.5) 0%, 
              rgba(37, 99, 235, 0.3) 30%, 
              rgba(37, 99, 235, 0.1) 60%, 
              transparent 80%
            )
          `,
          filter: 'blur(60px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Aurora Layer 2 - Cyan Wave */}
      <motion.div
        className="absolute inset-0 aurora-layer-2"
        animate={{
          x: ['50%', '-50%', '50%'],
          y: ['20%', '-20%', '20%'],
          scale: [1.1, 0.9, 1.1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 2,
        }}
        style={{
          background: `
            radial-gradient(ellipse 70% 40% at 80% 70%, 
              rgba(6, 182, 212, 0.5) 0%, 
              rgba(6, 182, 212, 0.3) 30%, 
              rgba(6, 182, 212, 0.1) 60%, 
              transparent 80%
            )
          `,
          filter: 'blur(80px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Aurora Layer 3 - Purple Accent Wave */}
      <motion.div
        className="absolute inset-0 aurora-layer-3"
        animate={{
          x: ['-30%', '30%', '-30%'],
          y: ['10%', '-10%', '10%'],
          scale: [0.9, 1.1, 0.9],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 4,
        }}
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, 
              rgba(139, 92, 246, 0.4) 0%, 
              rgba(139, 92, 246, 0.25) 30%, 
              rgba(139, 92, 246, 0.1) 60%, 
              transparent 80%
            )
          `,
          filter: 'blur(100px)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Aurora Layer 4 - Secondary Blue Wave */}
      <motion.div
        className="absolute inset-0 aurora-layer-4"
        animate={{
          x: ['30%', '-30%', '30%'],
          y: ['-15%', '15%', '-15%'],
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 1,
        }}
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 40% 60%, 
              rgba(59, 130, 246, 0.4) 0%, 
              rgba(59, 130, 246, 0.25) 30%, 
              rgba(59, 130, 246, 0.1) 60%, 
              transparent 80%
            )
          `,
          filter: 'blur(70px)',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Aurora Layer 5 - Subtle Teal Accent */}
      <motion.div
        className="absolute inset-0 aurora-layer-5"
        animate={{
          x: ['-40%', '40%', '-40%'],
          y: ['15%', '-15%', '15%'],
          scale: [0.95, 1.05, 0.95],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 3,
        }}
        style={{
          background: `
            radial-gradient(ellipse 75% 45% at 60% 40%, 
              rgba(20, 184, 166, 0.3) 0%, 
              rgba(20, 184, 166, 0.2) 40%, 
              transparent 70%
            )
          `,
          filter: 'blur(90px)',
          mixBlendMode: 'soft-light',
        }}
      />

      {/* Subtle overlay to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 pointer-events-none" />
    </div>
  )
}
