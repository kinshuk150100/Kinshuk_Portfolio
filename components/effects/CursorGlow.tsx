'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  color: string
  size: number
}

const colors = [
  'rgba(255, 0, 128, 0.9)', // Pink
  'rgba(121, 40, 202, 0.9)', // Purple
  'rgba(42, 250, 223, 0.9)', // Cyan
  'rgba(0, 245, 160, 0.9)', // Mint
  'rgba(255, 154, 0, 0.9)', // Orange
]

export function CursorGlow() {
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const cursorXSpring = useSpring(cursorX, { stiffness: 50, damping: 30 })
  const cursorYSpring = useSpring(cursorY, { stiffness: 50, damping: 30 })
  const particleIdRef = useRef(0)
  const lastParticleTime = useRef(0)

  useEffect(() => {
    // Only show on desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      // Create trailing particles (throttled)
      if (isDesktop) {
        const now = Date.now()
        if (now - lastParticleTime.current > 30) { // Throttle to ~30fps
          const newParticle: Particle = {
            id: particleIdRef.current++,
            x: e.clientX,
            y: e.clientY,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 4 + 2,
          }

          setParticles((prev) => [...prev.slice(-15), newParticle])
          lastParticleTime.current = now

          // Auto-remove particle after animation
          setTimeout(() => {
            setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
          }, 1000)
        }
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    if (isDesktop) {
      window.addEventListener('mousemove', moveCursor)
    }

    return () => {
      window.removeEventListener('resize', checkDesktop)
      if (isDesktop) {
        window.removeEventListener('mousemove', moveCursor)
      }
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY, isDesktop])

  if (!isDesktop) return null

  const cursorColor = isHovering
    ? 'radial-gradient(circle, rgba(255, 0, 128, 0.5) 0%, rgba(121, 40, 202, 0.4) 30%, rgba(42, 250, 223, 0.3) 60%, transparent 80%)'
    : 'radial-gradient(circle, rgba(255, 0, 128, 0.3) 0%, rgba(121, 40, 202, 0.2) 30%, rgba(42, 250, 223, 0.15) 60%, transparent 80%)'

  const glowIntensity = isHovering ? 2 : 1

  return (
    <>
      {/* Trailing Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9997]"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              borderRadius: '50%',
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ 
              scale: 1, 
              opacity: 1,
            }}
            animate={{
              scale: [1, 0.3, 0],
              opacity: [1, 0.5, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.6, 1],
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Cursor Glow - Enhanced with vibrant colors */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          width: 80 * glowIntensity,
          height: 80 * glowIntensity,
          x: cursorXSpring,
          y: cursorYSpring,
          background: cursorColor,
          filter: `blur(${25 * glowIntensity}px)`,
          mixBlendMode: 'screen',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Secondary Glow Layer */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          width: 40 * glowIntensity,
          height: 40 * glowIntensity,
          x: cursorXSpring,
          y: cursorYSpring,
          background: isHovering
            ? 'radial-gradient(circle, rgba(255, 0, 128, 0.7) 0%, rgba(121, 40, 202, 0.5) 50%, transparent 80%)'
            : 'radial-gradient(circle, rgba(255, 0, 128, 0.5) 0%, rgba(121, 40, 202, 0.35) 50%, transparent 80%)',
          filter: `blur(${15 * glowIntensity}px)`,
          mixBlendMode: 'screen',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovering ? 1.4 : 0.9,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Inner Core - Changes color on hover */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          width: 10,
          height: 10,
          x: cursorXSpring,
          y: cursorYSpring,
          background: isHovering
            ? 'radial-gradient(circle, rgba(255, 0, 128, 1) 0%, rgba(121, 40, 202, 0.9) 100%)'
            : 'radial-gradient(circle, rgba(255, 0, 128, 0.9) 0%, rgba(121, 40, 202, 0.7) 100%)',
          boxShadow: isHovering
            ? '0 0 25px rgba(255, 0, 128, 0.9), 0 0 50px rgba(121, 40, 202, 0.7), 0 0 75px rgba(42, 250, 223, 0.5)'
            : '0 0 15px rgba(255, 0, 128, 0.7), 0 0 30px rgba(121, 40, 202, 0.5)',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  )
}
