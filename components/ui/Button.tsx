'use client'

import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'text-white hover:opacity-90 focus:ring-accent-primary/50 transition-all duration-300 shadow-lg button-glow',
    secondary: 'bg-foreground/5 text-foreground hover:bg-foreground/10 border border-card-border hover:border-accent-primary/50 focus:ring-foreground/20',
    outline: 'border-2 text-foreground hover:bg-gradient-vibrant/10 focus:ring-accent-primary/50 transition-all duration-300 button-glow-outline',
    ghost: 'text-foreground hover:bg-gradient-vibrant/10 focus:ring-foreground/20',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const gradientStyle = variant === 'primary' ? {
    background: 'linear-gradient(135deg, #FF0080 0%, #7928CA 25%, #2AFADF 50%, #00F5A0 75%, #FF9A00 100%)',
  } : variant === 'outline' ? {
    borderImage: 'linear-gradient(135deg, #FF0080 0%, #7928CA 25%, #2AFADF 50%, #00F5A0 75%, #FF9A00 100%) 1',
    borderColor: 'transparent',
  } : undefined

  return (
    <motion.button
      whileHover={{ 
        scale: variant === 'primary' ? 1.05 : 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        'flex items-center justify-center relative overflow-visible',
        className
      )}
      style={gradientStyle}
      {...props}
    >
      {/* Gradient Glow Effect */}
      {variant === 'primary' && (
        <>
          <motion.div
            className="absolute inset-0 rounded-lg blur-xl opacity-60 -z-10 button-glow-layer"
            style={{
              background: 'linear-gradient(135deg, #FF0080 0%, #7928CA 25%, #2AFADF 50%, #00F5A0 75%, #FF9A00 100%)',
              mixBlendMode: 'screen',
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </>
      )}
      {variant === 'outline' && (
        <motion.div
          className="absolute inset-0 rounded-lg blur-lg opacity-40 -z-10 button-glow-outline-layer"
          style={{
            background: 'linear-gradient(135deg, #FF0080 0%, #7928CA 25%, #2AFADF 50%, #00F5A0 75%, #FF9A00 100%)',
            mixBlendMode: 'screen',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
