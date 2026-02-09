#!/usr/bin/env node

/**
 * Production build check script
 * Verifies that the build completed successfully and checks for common issues
 */

const fs = require('fs')
const path = require('path')

const errors = []
const warnings = []

// Check if .next directory exists
const nextDir = path.join(process.cwd(), '.next')
if (!fs.existsSync(nextDir)) {
  errors.push('❌ .next directory not found. Build may have failed.')
} else {
  console.log('✅ .next directory exists')
}

// Check if static files exist
const staticDir = path.join(nextDir, 'static')
if (fs.existsSync(staticDir)) {
  console.log('✅ Static files generated')
} else {
  warnings.push('⚠️  Static files directory not found')
}

// Check build manifest
const buildManifest = path.join(nextDir, 'build-manifest.json')
if (fs.existsSync(buildManifest)) {
  console.log('✅ Build manifest exists')
  try {
    const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'))
    if (manifest.pages && Object.keys(manifest.pages).length > 0) {
      console.log(`✅ Found ${Object.keys(manifest.pages).length} pages in build manifest`)
    }
  } catch (e) {
    warnings.push('⚠️  Could not parse build manifest')
  }
} else {
  errors.push('❌ Build manifest not found')
}

// Check for large bundle sizes (warn if > 500KB)
const chunksDir = path.join(staticDir, 'chunks')
if (fs.existsSync(chunksDir)) {
  const chunks = fs.readdirSync(chunksDir)
  chunks.forEach((chunk) => {
    const chunkPath = path.join(chunksDir, chunk)
    const stats = fs.statSync(chunkPath)
    const sizeKB = stats.size / 1024
    if (sizeKB > 500) {
      warnings.push(`⚠️  Large chunk detected: ${chunk} (${sizeKB.toFixed(2)} KB)`)
    }
  })
}

// Summary
console.log('\n📊 Build Check Summary:')
if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed!')
  process.exit(0)
} else {
  if (errors.length > 0) {
    console.error('\n❌ Errors:')
    errors.forEach((error) => console.error(error))
  }
  if (warnings.length > 0) {
    console.warn('\n⚠️  Warnings:')
    warnings.forEach((warning) => console.warn(warning))
  }
  process.exit(errors.length > 0 ? 1 : 0)
}
