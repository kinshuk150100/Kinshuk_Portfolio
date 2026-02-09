'use client'

import { motion } from 'framer-motion'

export function MultiLayerBackground() {

  return (
    <div className="multilayer-background">
      {/* Layer 1: Moving Gradient Blobs - Theme Adaptive */}
      <div className="layer layer-1">
        {/* Dark Theme Blobs */}
        <div
          className="gradient-blob blob-1 dark-blob"
          style={{
            background: 'radial-gradient(circle, rgba(255, 0, 128, 0.4) 0%, rgba(255, 0, 128, 0.2) 40%, transparent 70%)',
            width: '600px',
            height: '600px',
            top: '10%',
            left: '10%',
            animation: 'blobFloat1 25s ease-in-out infinite',
          }}
        />
        <div
          className="gradient-blob blob-2 dark-blob"
          style={{
            background: 'radial-gradient(circle, rgba(121, 40, 202, 0.4) 0%, rgba(121, 40, 202, 0.2) 40%, transparent 70%)',
            width: '500px',
            height: '500px',
            top: '50%',
            right: '15%',
            animation: 'blobFloat2 30s ease-in-out infinite',
          }}
        />
        <div
          className="gradient-blob blob-3 dark-blob"
          style={{
            background: 'radial-gradient(circle, rgba(42, 250, 223, 0.4) 0%, rgba(42, 250, 223, 0.2) 40%, transparent 70%)',
            width: '550px',
            height: '550px',
            bottom: '20%',
            left: '25%',
            animation: 'blobFloat3 28s ease-in-out infinite',
          }}
        />
        <div
          className="gradient-blob blob-4 dark-blob"
          style={{
            background: 'radial-gradient(circle, rgba(0, 245, 160, 0.35) 0%, rgba(0, 245, 160, 0.18) 40%, transparent 70%)',
            width: '450px',
            height: '450px',
            top: '30%',
            right: '35%',
            animation: 'blobFloat4 32s ease-in-out infinite',
          }}
        />
        
        {/* Light Theme Blobs */}
        <div
          className="gradient-blob blob-1 light-blob"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.12) 40%, transparent 70%)',
            width: '600px',
            height: '600px',
            top: '10%',
            left: '10%',
            animation: 'blobFloat1 25s ease-in-out infinite',
          }}
        />
        <div
          className="gradient-blob blob-2 light-blob"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0.12) 40%, transparent 70%)',
            width: '500px',
            height: '500px',
            top: '50%',
            right: '15%',
            animation: 'blobFloat2 30s ease-in-out infinite',
          }}
        />
        <div
          className="gradient-blob blob-3 light-blob"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(6, 182, 212, 0.12) 40%, transparent 70%)',
            width: '550px',
            height: '550px',
            bottom: '20%',
            left: '25%',
            animation: 'blobFloat3 28s ease-in-out infinite',
          }}
        />
        <div
          className="gradient-blob blob-4 light-blob"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 40%, transparent 70%)',
            width: '450px',
            height: '450px',
            top: '30%',
            right: '35%',
            animation: 'blobFloat4 32s ease-in-out infinite',
          }}
        />
      </div>

      {/* Layer 2: Floating Light Particles */}
      <div className="layer layer-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="light-particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Layer 3: Subtle Animated Noise Texture */}
      <div className="layer layer-3">
        <div className="noise-texture" />
      </div>

    </div>
  )
}
