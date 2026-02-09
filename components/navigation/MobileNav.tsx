'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { smoothScrollTo, smoothScrollToElement } from '@/lib/smooth-scroll'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (href: string) => {
    const element = document.querySelector(href) as HTMLElement
    if (element) {
      smoothScrollToElement(element)
    } else {
      smoothScrollTo(href)
    }
    setIsOpen(false)
  }

  return (
    <div className="md:hidden relative">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <MenuIcon />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 glass-strong rounded-lg shadow-xl overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(item.href)
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-foreground/10"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
