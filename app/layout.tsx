import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { PageTransition } from '@/components/animations/PageTransition'
import { MultiLayerBackground } from '@/components/background/MultiLayerBackground'
import { ThemeScript } from './theme-script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'Kinshuk | Frontend Developer',
        template: '%s | Kinshuk',
    },
    description: 'Frontend developer with 4 years experience in React and Next.js. Building modern web applications with TypeScript, React, and Next.js.',
    keywords: [
        'Kinshuk',
        'Frontend Developer',
        'React Developer',
        'Next.js Developer',
        'TypeScript',
        'Web Developer',
        'UI Developer',
        'Frontend Engineer',
        'React',
        'Next.js',
        'JavaScript',
        'TypeScript',
        'Portfolio',
    ],
    authors: [{ name: 'Kinshuk' }],
    creator: 'Kinshuk',
    publisher: 'Kinshuk',
    metadataBase: new URL('https://kinshukmehra.dev'), // Update with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://kinshukmehra.dev', // Update with your actual domain
        siteName: 'Kinshuk | Frontend Developer',
        title: 'Kinshuk | Frontend Developer',
        description: 'Frontend developer with 4 years experience in React and Next.js. Building modern web applications with TypeScript, React, and Next.js.',
        images: [
            {
                url: '/opengraph-image', // Generated dynamically via opengraph-image.tsx
                width: 1200,
                height: 630,
                alt: 'Kinshuk - Frontend Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kinshuk | Frontend Developer',
        description: 'Frontend developer with 4 years experience in React and Next.js.',
        creator: '@kinshukmehra', // Update with your Twitter handle if available
        images: ['/opengraph-image'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
    category: 'Portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
            <body className={inter.className}>
                <ThemeScript />
                <MultiLayerBackground />
                <ThemeProvider>
                    <PageTransition>
                        {children}
                    </PageTransition>
                </ThemeProvider>
            </body>
        </html>
    )
}
