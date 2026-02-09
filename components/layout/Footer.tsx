'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-foreground/10 dark:border-white/10 bg-background py-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-sm text-foreground/60 dark:text-white/60"
        >
          © {new Date().getFullYear()} Kinshuk. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}
