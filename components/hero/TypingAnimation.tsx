'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const techStack = 'React • Next.js • TypeScript • UI Engineering'

export function TypingAnimation() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!isTyping && currentIndex === 0) {
      // Reset and start typing again
      setIsTyping(true)
      return
    }

    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentIndex < techStack.length) {
          setDisplayedText(techStack.substring(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsTyping(false), 3000)
        }
      } else {
        if (currentIndex > 0) {
          setDisplayedText(techStack.substring(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          // Finished deleting, wait then restart
          setTimeout(() => setIsTyping(true), 500)
        }
      }
    }, isTyping ? 100 : 50)

    return () => clearTimeout(timeout)
  }, [currentIndex, isTyping])

  return (
    <div className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80 min-h-[2rem] md:min-h-[3rem] flex items-center justify-center flex-wrap gap-2">
      <span className="text-foreground/60">I specialize in</span>
        <span className="bg-gradient-tech bg-clip-text text-transparent font-semibold">
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="inline-block w-0.5 h-6 md:h-8 bg-gradient-tech ml-1 align-middle"
        />
      </span>
    </div>
  )
}
