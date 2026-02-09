'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const education = [
    {
        degree: 'Bachelor of Technology (B.Tech CSE)',
        institution: 'Chitkara University',
        location: 'Baddi, Himachal Pradesh',
        duration: '2018 – 2022',
        score: 'CGPA 8.76',
    },
    {
        degree: '12th (ICSE Board)',
        institution: 'Christ The King Convent School',
        location: 'Pathankot, Punjab',
        duration: '2018',
        score: '77.25%',
    },
    {
        degree: '10th (ICSE Board)',
        institution: 'Christ The King Convent School',
        location: 'Pathankot, Punjab',
        duration: '2016',
        score: '79.8%',
    },
]

export function Education() {
    return (
        <section id="education" className="py-16 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <RevealOnScroll direction="fade" delay={0.1}>
                    <div className="text-center mb-12 md:mb-16">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide"
                            style={{
                                background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Education
                        </h2>
                        <p className="text-lg md:text-xl text-foreground/60 dark:text-white/60 max-w-2xl mx-auto">
                            My Academic Journey
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Education Cards */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {education.map((item, index) => (
                        <RevealOnScroll key={index} direction="fade" delay={0.1 + index * 0.1}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="rounded-2xl p-6 md:p-8 border backdrop-blur-sm bg-white/5 dark:bg-[rgba(26,30,44,0.8)] border-purple-500/50 dark:border-purple-500/50 shadow-[0_0_30px_rgba(157,78,221,0.2)] dark:shadow-[0_0_30px_rgba(157,78,221,0.2)]"
                            >
                                <div className="flex items-start gap-6">
                                    {/* Circular Icon with Gradient */}
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: 'radial-gradient(circle, #3B82F6 0%, #6C63FF 50%, #9D4EDD 100%)',
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-8 h-8"
                                        >
                                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                            <path d="M6 12v5c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-5" />
                                            <path d="M6 12l6 3M6 12l6-3" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        {/* Degree - Bright Blue */}
                                        <h3
                                            className="text-xl md:text-2xl font-bold mb-2"
                                            style={{
                                                color: '#3B82F6',
                                            }}
                                        >
                                            {item.degree}
                                        </h3>

                                        {/* Institution - Off-white */}
                                        <p className="text-lg md:text-xl text-foreground dark:text-white/90 font-medium mb-3">
                                            {item.institution}
                                        </p>

                                        {/* Location - Grey */}
                                        <div className="flex items-center gap-2 text-foreground/60 dark:text-white/60 mb-4">
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
                                            <span className="text-sm md:text-base">{item.location}</span>
                                        </div>

                                        {/* Duration and Score Tags - Gradient */}
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <span
                                                className="inline-block px-4 py-2 rounded-lg text-white text-sm font-semibold"
                                                style={{
                                                    background: 'linear-gradient(135deg, #3B82F6 0%, #6C63FF 50%, #9D4EDD 100%)',
                                                }}
                                            >
                                                {item.duration}
                                            </span>
                                            {item.score && (
                                                <span
                                                    className="inline-block px-4 py-2 rounded-lg text-white text-sm font-semibold"
                                                    style={{
                                                        background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
                                                    }}
                                                >
                                                    {item.score}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    )
}
