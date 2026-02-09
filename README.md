# Portfolio Website

A modern, professional portfolio website built with Next.js 14 (App Router), TypeScript, TailwindCSS, and Framer Motion.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 TailwindCSS for styling
- 🌙 Dark/Light theme toggle
- ✨ Framer Motion animations
- 📱 Fully responsive (mobile-first)
- 🔍 SEO optimized
- 🎯 Smooth scrolling
- 🏗️ Clean, modular component structure

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── layout/              # Layout components (Header, Footer)
│   ├── navigation/          # Navigation components
│   ├── providers/           # Context providers (Theme)
│   └── ui/                  # Reusable UI components
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Theme:** next-themes

## License

MIT
