# Vercel Deployment Guide

This project is optimized for deployment on Vercel with production build checks and CSS optimization.

## Pre-Deployment Checklist

- [ ] Update domain URLs in `app/layout.tsx` and `app/sitemap.ts`
- [ ] Generate favicon files (see FAVICON_README.md)
- [ ] Update environment variables if needed
- [ ] Run production build locally: `npm run build:check`

## Deployment Steps

### 1. Connect to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings

### 2. Configure Build Settings

Vercel will automatically detect:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install`

### 3. Environment Variables (if needed)

Add any environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL` - Your site URL (already configured in vercel.json)

### 4. Deploy

Click "Deploy" and Vercel will:
1. Install dependencies
2. Run type checking
3. Build the project
4. Deploy to production

## Build Optimizations

### Automatic Optimizations

- ✅ **CSS Purging**: Tailwind automatically removes unused CSS in production
- ✅ **SWC Minification**: Enabled for faster builds
- ✅ **Image Optimization**: Next.js Image component with AVIF/WebP support
- ✅ **Code Splitting**: Automatic route-based code splitting
- ✅ **Compression**: Gzip/Brotli compression enabled
- ✅ **Standalone Output**: Optimized for serverless deployment

### Production Build Checks

Run `npm run build:check` to verify:
- TypeScript compilation
- ESLint checks
- Build output validation
- Bundle size warnings

## Performance Features

- **Image Optimization**: Automatic format conversion (AVIF/WebP)
- **Font Optimization**: Inter font with subset loading
- **CSS Optimization**: Unused CSS purged automatically
- **JavaScript Minification**: SWC minifier enabled
- **Static Generation**: Where possible, pages are statically generated

## Monitoring

After deployment, monitor:
- Build logs in Vercel dashboard
- Performance metrics in Vercel Analytics
- Error tracking (consider adding Sentry)

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Run `npm run build:check` locally
3. Verify all dependencies are in `package.json`
4. Check TypeScript errors: `npm run type-check`

### CSS Not Purging

- Ensure Tailwind content paths include all component files
- Check `tailwind.config.ts` content array
- Verify `NODE_ENV=production` during build

### Large Bundle Size

- Run `npm run build:analyze` to analyze bundle
- Check for unnecessary dependencies
- Use dynamic imports for large components

## CI/CD Integration

The project includes a GitHub Actions workflow (`.github/workflows/build-check.yml`) that:
- Runs type checking
- Lints code
- Builds the project
- Validates build output

Enable this workflow by pushing to your repository.
