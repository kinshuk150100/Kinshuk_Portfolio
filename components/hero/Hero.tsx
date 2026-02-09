'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { smoothScrollTo } from '@/lib/smooth-scroll'

export function Hero() {
    const [imageError, setImageError] = useState(false)

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Premium Background with Animated Blue Light Waves */}
            <PremiumBackground />

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Profile Image with Glowing Ring */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
                            {/* Glowing Ring Effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'radial-gradient(circle, rgba(108, 99, 255, 0.4) 0%, rgba(157, 78, 221, 0.3) 50%, transparent 70%)',
                                    boxShadow: '0 0 40px rgba(108, 99, 255, 0.6), 0 0 80px rgba(157, 78, 221, 0.4), 0 0 120px rgba(0, 180, 216, 0.3)',
                                }}
                                animate={{
                                    boxShadow: [
                                        '0 0 40px rgba(108, 99, 255, 0.6), 0 0 80px rgba(157, 78, 221, 0.4), 0 0 120px rgba(0, 180, 216, 0.3)',
                                        '0 0 60px rgba(108, 99, 255, 0.8), 0 0 120px rgba(157, 78, 221, 0.6), 0 0 180px rgba(0, 180, 216, 0.4)',
                                        '0 0 40px rgba(108, 99, 255, 0.6), 0 0 80px rgba(157, 78, 221, 0.4), 0 0 120px rgba(0, 180, 216, 0.3)',
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-[#6C63FF] via-[#9D4EDD] to-[#00B4D8] p-[3px]">
                                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                                    {!imageError ? (
                                        <Image
                                            src="/profile.jpg"
                                            alt="Kinshuk"
                                            width={224}
                                            height={224}
                                            className="w-full h-full object-cover"
                                            priority
                                            unoptimized
                                            onError={() => {
                                                setImageError(true)
                                                console.error('Profile image not found at /profile.jpg')
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#6C63FF] to-[#9D4EDD] text-white font-bold text-3xl md:text-4xl">
                                            K
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Name with Gradient Shimmer Animation */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight tracking-tighter uppercase relative"
                    >
                        {/* Soft Glow Behind Text */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div
                                className="absolute w-full h-full blur-3xl opacity-30"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.4) 0%, rgba(157, 78, 221, 0.3) 50%, rgba(0, 180, 216, 0.2) 100%)',
                                }}
                            />
                        </div>
                        {/* Gradient Text with Shimmer */}
                        <span className="relative z-10 inline-block">
                            <span
                                className="bg-gradient-to-r from-[#6C63FF] via-[#9D4EDD] to-[#00B4D8] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shimmer"
                                style={{
                                    textShadow: '0 0 30px rgba(108, 99, 255, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)',
                                }}
                            >
                                KINSHUK
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mb-4"
                    >
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground dark:text-white/90 tracking-wide">
                            React.js Developer | Next.js | TypeScript | Redux
                        </h2>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mb-8"
                    >
                        <p className="text-lg md:text-xl text-foreground/70 dark:text-white/70 font-medium">
                            3+ Years Experience
                        </p>
                    </motion.div>

                    {/* Contact Row with Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-10 text-foreground/80 dark:text-white/80"
                    >
                        {/* Location */}
                        <a
                            href="https://maps.google.com/?q=Pathankot,Punjab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-foreground dark:hover:text-white transition-colors group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 group-hover:scale-110 transition-transform"
                            >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-sm md:text-base">Pathankot, Punjab</span>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+917986221055"
                            className="flex items-center gap-2 hover:text-foreground dark:hover:text-white transition-colors group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 group-hover:scale-110 transition-transform"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="text-sm md:text-base">7986221055</span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/kinshuk-mehra-881023203/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-foreground dark:hover:text-white transition-colors group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 group-hover:scale-110 transition-transform"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span className="text-sm md:text-base">LinkedIn</span>
                        </a>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16"
                    >
                        {/* Download CV - Green */}
                        <motion.a
                            href="/Kinshuk_Resume.pdf"
                            download="Kinshuk_Resume.pdf"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 bg-[#22C55E] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <span>Download CV</span>
                        </motion.a>

                        {/* LinkedIn - Blue Gradient */}
                        <motion.a
                            href="https://www.linkedin.com/in/kinshuk-mehra-881023203/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108, 99, 255, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                            style={{
                                background: 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span>LinkedIn</span>
                        </motion.a>

                        {/* Get In Touch - Outlined Neon */}
                        <motion.button
                            onClick={() => smoothScrollTo('#contact')}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 180, 216, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-transparent border-2 text-foreground dark:text-white font-semibold rounded-lg hover:bg-foreground/10 dark:hover:bg-white/10 transition-all duration-300 group"
                            style={{
                                borderColor: '#00B4D8',
                                boxShadow: '0 0 20px rgba(0, 180, 216, 0.3)',
                            }}
                        >
                            <span className="group-hover:text-[#00B4D8] transition-colors">Get In Touch</span>
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="flex flex-col items-center gap-2 text-foreground/60 dark:text-white/60"
                        >
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
                                <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// Premium Background Component
function PremiumBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dark Base */}
            <div className="absolute inset-0 bg-background" />

            {/* Abstract Diagonal Shapes */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute w-full h-full"
                    style={{
                        background: `
                            linear-gradient(135deg, transparent 0%, rgba(108, 99, 255, 0.1) 25%, transparent 50%),
                            linear-gradient(45deg, transparent 0%, rgba(157, 78, 221, 0.1) 50%, transparent 75%),
                            linear-gradient(225deg, transparent 0%, rgba(0, 180, 216, 0.1) 25%, transparent 50%)
                        `,
                    }}
                />
            </div>

            {/* Animated Blue Light Waves */}
            <div className="absolute inset-0">
                {/* Wave 1 */}
                <motion.div
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: '800px',
                        height: '800px',
                        background: 'radial-gradient(circle, rgba(108, 99, 255, 0.4) 0%, rgba(108, 99, 255, 0.2) 40%, transparent 70%)',
                        top: '-200px',
                        left: '-200px',
                    }}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 100, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                {/* Wave 2 */}
                <motion.div
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(157, 78, 221, 0.4) 0%, rgba(157, 78, 221, 0.2) 40%, transparent 70%)',
                        top: '50%',
                        right: '-150px',
                    }}
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                {/* Wave 3 */}
                <motion.div
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: '700px',
                        height: '700px',
                        background: 'radial-gradient(circle, rgba(0, 180, 216, 0.4) 0%, rgba(0, 180, 216, 0.2) 40%, transparent 70%)',
                        bottom: '-200px',
                        left: '30%',
                    }}
                    animate={{
                        x: [0, 120, 0],
                        y: [0, -100, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Soft Moving Glow Behind Hero Text */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"
                style={{
                    width: '600px',
                    height: '400px',
                    background: 'radial-gradient(ellipse, rgba(108, 99, 255, 0.3) 0%, rgba(157, 78, 221, 0.2) 40%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Subtle Particle Noise Layer */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px',
                }}
            />
        </div>
    )
}
