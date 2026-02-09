'use client'

import { useTheme as useNextTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const currentTheme = resolvedTheme || theme
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    // Add transitioning class
    document.documentElement.classList.add('transitioning')
    setTheme(nextTheme)
    
    // Remove transitioning class after transition
    setTimeout(() => {
      document.documentElement.classList.remove('transitioning')
    }, 300)
  }

  return {
    theme,
    setTheme,
    resolvedTheme,
    systemTheme,
    mounted,
    toggleTheme,
    isDark: resolvedTheme === 'dark',
  }
}
