# Favicon Setup Instructions

This portfolio uses Next.js App Router's built-in favicon support. The following files are configured:

## Current Setup

- **`app/icon.tsx`** - Dynamically generates a 32x32 favicon with "KM" initials
- **`public/icon.svg`** - SVG favicon for modern browsers
- **`app/opengraph-image.tsx`** - Dynamically generates Open Graph image

## Required Favicon Files

For complete favicon support, you should generate and add the following files to the `public/` directory:

1. **favicon.ico** - Traditional favicon (16x16, 32x32, 48x48 sizes)
2. **favicon-16x16.png** - 16x16 PNG favicon
3. **favicon-32x32.png** - 32x32 PNG favicon
4. **apple-touch-icon.png** - 180x180 PNG for iOS devices

## How to Generate Favicons

### Option 1: Online Tools
1. Visit [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload your logo or generate from text
3. Download the generated files
4. Place them in the `public/` directory

### Option 2: Using Next.js Icon Generation
The `app/icon.tsx` file already generates a basic favicon. For more control, you can:
- Create a `public/favicon.ico` file manually
- Use design tools to create matching favicon files

## Notes

- The `public/favicon.ico` file is currently a placeholder
- Update the domain URLs in `app/layout.tsx` metadata when deploying
- Update Twitter handle in metadata if you have one
- The Open Graph image is generated dynamically, but you can replace it with a static image if preferred
