'use client'

import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NavLinks } from '@/components/navigation/NavLinks'
import { MobileNav } from '@/components/navigation/MobileNav'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20)
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-foreground/10 dark:border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold cursor-pointer uppercase tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            KINSHUK
          </motion.a>
          
          <div className="flex items-center gap-4 md:gap-6">
            <NavLinks />
            <ThemeToggle />
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
