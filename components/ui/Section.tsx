'use client'

import { ReactNode } from 'react'
import { Container } from './Container'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 lg:py-32 scroll-mt-20', className)}
    >
      <Container>
        <RevealOnScroll direction="fade" delay={0.1}>
          {children}
        </RevealOnScroll>
      </Container>
    </section>
  )
}
