'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const contactCards = [
  {
    icon: (
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    label: 'Resume',
    value: 'Download CV',
    href: '/Kinshuk_Resume.pdf',
    download: true,
    iconBg: 'bg-[#22C55E]',
  },
  {
    icon: (
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '7986221055',
    href: 'tel:+917986221055',
    iconBg: 'bg-[#EC4899]',
  },
  {
    icon: (
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
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Pathankot, Punjab',
    href: 'https://maps.google.com/?q=Pathankot,Punjab',
    iconBg: 'bg-[#22C55E]',
  },
  {
    icon: (
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
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: 'Email',
    value: 'kinshuk.mehraji@gmail.com',
    href: 'mailto:kinshuk.mehraji@gmail.com',
    iconBg: 'bg-[#3B82F6]',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/kinshuk-mehra-881023203/',
    iconBg: 'bg-[#0A66C2]',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-10 md:py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* GET IN TOUCH Section */}
        <RevealOnScroll direction="fade" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-8 uppercase tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Get In Touch
            </h2>

            {/* Contact Container with Glowing Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl p-6 md:p-8 border border-purple-500/50 dark:border-purple-500/50 bg-white/5 dark:bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(157,78,221,0.2)] dark:shadow-[0_0_30px_rgba(157,78,221,0.2)]"
            >
              {/* Contact Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {contactCards.map((card, index) => (
                  <motion.a
                    key={index}
                    href={card.href}
                    download={card.download}
                    target={card.href.startsWith('http') && !card.download ? '_blank' : undefined}
                    rel={card.href.startsWith('http') && !card.download ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index + 0.4, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl p-4 md:p-5 bg-white/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/10 hover:border-foreground/20 dark:hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon Circle */}
                      <div
                        className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {card.icon}
                      </div>
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-foreground/60 dark:text-white/60 mb-1">{card.label}</div>
                        <div className="text-base md:text-lg font-semibold text-foreground dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6C63FF] group-hover:via-[#9D4EDD] group-hover:to-[#00B4D8] group-hover:bg-clip-text transition-all duration-300">
                          {card.value}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
