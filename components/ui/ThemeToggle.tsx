'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // Add transitioning class for smooth transition
    document.documentElement.classList.add('transitioning')
    
    // Determine next theme (handle system theme)
    const currentTheme = resolvedTheme || theme
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    setTheme(nextTheme)
    
    // Remove transitioning class after animation
    setTimeout(() => {
      document.documentElement.classList.remove('transitioning')
    }, 300)
  }

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-foreground/10 animate-pulse" />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors flex items-center justify-center overflow-hidden group"
      aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
      title={isDark ? 'Switch to day mode' : 'Switch to night mode'}
    >
      {/* Background gradient that changes with theme */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
            : 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #6366F1 100%)',
        }}
      />
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'sun' : 'moon'}
          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          {isDark ? (
            <SunIcon className="text-[#F59E0B]" />
          ) : (
            <MoonIcon className="text-[#6366F1]" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-5 h-5 ${className || ''}`}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-5 h-5 ${className || ''}`}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
