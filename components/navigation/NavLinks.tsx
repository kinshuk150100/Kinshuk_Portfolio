'use client'

import { motion } from 'framer-motion'
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

export function NavLinks() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href) as HTMLElement
    if (element) {
      smoothScrollToElement(element)
    } else {
      smoothScrollTo(href)
    }
  }

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index + 0.3 }}
        >
          <a
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="text-sm font-medium text-foreground/80 dark:text-white/80 hover:text-foreground dark:hover:text-white transition-colors relative group"
          >
            {item.label}
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
              }}
              initial={false}
            />
          </a>
        </motion.div>
      ))}
    </nav>
  )
}
