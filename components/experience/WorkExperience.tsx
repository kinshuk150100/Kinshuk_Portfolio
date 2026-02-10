'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const experiences = [
  {
    title: 'Internship',
    company: 'Antier Solutions Pvt. Ltd.',
    location: 'Mohali, Punjab',
    duration: 'Dec 2021 - June 2022',
    achievements: [
      'Assisted in developing frontend features using React.js and JavaScript',
      'Learned and implemented responsive design principles using CSS',
      'Participated in code reviews and learned best practices for clean code',
      'Worked on bug fixes and minor feature implementations',
      'Collaborated with senior developers to understand project architecture',
      'Gained hands-on experience with Git version control and Agile methodologies',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Antier Solutions Pvt. Ltd.',
    location: 'Mohali, Punjab',
    duration: 'July 2022 - Present',
    achievements: [
      'Developed and maintained 5+ scalable web applications using React.js, Next.js, and TypeScript',
      'Improved page load performance by 30-40% through memoization, lazy loading, and optimized state management',
      'Implemented global state management using Redux Toolkit and Zustand for complex workflows',
      'Built reusable, responsive UI components using Ant Design and CSS',
      'Integrated RESTful APIs and Web3 services for real-time data handling',
      'Optimized UI for cross-browser compatibility and multiple devices',
      'Collaborated with backend, blockchain, and UI/UX teams in an Agile environment',
    ],
  },
]

export function WorkExperience() {
  return (
    <section id="experience" className="py-10 md:py-14 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <RevealOnScroll direction="fade" delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center uppercase tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Work Experience
          </h2>
        </RevealOnScroll>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, expIndex) => (
            <RevealOnScroll key={expIndex} direction="fade" delay={0.2 + expIndex * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: expIndex * 0.1 }}
                className="rounded-xl p-6 md:p-8 border backdrop-blur-sm relative bg-white/5 dark:bg-white/5 border-purple-500/50 dark:border-purple-500/50 shadow-[0_0_30px_rgba(157,78,221,0.2)] dark:shadow-[0_0_30px_rgba(157,78,221,0.2)]"
              >
                {/* Duration Badge - Top Right */}
                <div className="absolute top-6 right-6">
                  <span
                    className="px-4 py-2 rounded-lg text-white text-sm font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6 0%, #6C63FF 50%, #9D4EDD 100%)',
                    }}
                  >
                    {experience.duration}
                  </span>
                </div>

                {/* Job Title - Light Blue */}
                <h3
                  className="text-2xl md:text-3xl font-bold mb-2 pr-32"
                  style={{
                    color: '#3B82F6',
                  }}
                >
                  {experience.title}
                </h3>

                {/* Company Name - White Bold */}
                <p className="text-xl md:text-2xl font-bold text-foreground dark:text-white mb-3">
                  {experience.company}
                </p>

                {/* Location - Grey */}
                <div className="flex items-center gap-2 text-foreground/60 dark:text-white/60 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-sm md:text-base">{experience.location}</span>
                </div>

                {/* Achievements List with Green Checkmarks */}
                <ul className="space-y-3 mt-6">
                  {experience.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 text-foreground dark:text-white"
                    >
                      {/* Green Checkmark */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#22C55E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-base md:text-lg leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
