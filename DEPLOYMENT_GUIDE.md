# 🚀 Deployment Guide - Manoela Madera Art Exhibition Portfolio

**Created:** October 19, 2025, 8:12 PM  
**Author:** Fidel Viera  
**Last Updated:** October 19, 2025, 8:12 PM

## 🎯 Deployment Overview

This guide covers the complete deployment process for the Manoela Madera art exhibition portfolio, including local development, staging, and production environments.

## 🛠️ Prerequisites

### Development Environment
- **Node.js:** Version 18.x or higher
- **npm:** Version 8.x or higher
- **Git:** For version control
- **Code Editor:** VS Code recommended

### Required Accounts
- **Vercel:** For hosting (recommended)
- **GitHub:** For repository hosting
- **Domain Provider:** For custom domain (optional)

## 🏠 Local Development

### Initial Setup
```bash
# Clone repository
git clone <repository-url>
cd mm_x

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands
```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# Export static site
npm run export
```

### Environment Variables
Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_EMAIL_SERVICE=your-email-service
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 🌐 Hosting Options

### 1. Vercel (Recommended)
**Best for:** Next.js applications, automatic deployments

#### Setup Process
1. **Connect Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Import project from GitHub
   - Configure build settings

2. **Environment Variables:**
   - Add environment variables in Vercel dashboard
   - Configure for production environment

3. **Custom Domain:**
   - Add custom domain in project settings
   - Configure DNS records
   - Enable SSL certificate

#### Vercel Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 2. Netlify
**Best for:** Static sites, form handling

#### Setup Process
1. **Connect Repository:**
   - Go to [netlify.com](https://netlify.com)
   - Import project from GitHub
   - Configure build settings

2. **Build Configuration:**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "18"
   ```

### 3. GitHub Pages
**Best for:** Free hosting, simple deployment

#### Setup Process
1. **Export Static Site:**
   ```bash
   npm run export
   ```

2. **Deploy to GitHub Pages:**
   - Push `out` folder to `gh-pages` branch
   - Configure GitHub Pages settings
   - Set custom domain if needed

## 🔧 Build Configuration

### Next.js Configuration
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  trailingSlash: true,
  images: {
    unoptimized: true // For static export
  }
}

module.exports = nextConfig
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export"
  }
}
```

## 🚀 Deployment Process

### 1. Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Build successful locally
- [ ] Environment variables configured
- [ ] Images optimized
- [ ] Performance optimized
- [ ] SEO meta tags added
- [ ] Analytics configured

### 2. Production Build
```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Export static files (if using static export)
npm run export
```

### 3. Deployment Steps

#### Vercel Deployment
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: prepare for production deployment"
   git push origin main
   ```

2. **Vercel Auto-Deploy:**
   - Vercel automatically detects changes
   - Builds and deploys automatically
   - Provides preview URL

3. **Custom Domain Setup:**
   - Add domain in Vercel dashboard
   - Configure DNS records
   - SSL certificate auto-generated

#### Manual Deployment
1. **Build Project:**
   ```bash
   npm run build
   ```

2. **Upload Files:**
   - Upload `.next` folder to hosting provider
   - Configure server settings
   - Set up domain and SSL

## 🔒 Security Configuration

### SSL/HTTPS Setup
- **Automatic:** Vercel and Netlify provide free SSL
- **Manual:** Configure SSL certificate with hosting provider
- **Force HTTPS:** Redirect HTTP to HTTPS

### Security Headers
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 📊 Performance Optimization

### Build Optimization
- **Code Splitting:** Automatic with Next.js
- **Image Optimization:** Next.js Image component
- **Bundle Analysis:** Analyze bundle size
- **Tree Shaking:** Remove unused code

### Runtime Optimization
- **CDN:** Use CDN for static assets
- **Caching:** Configure proper caching headers
- **Compression:** Enable gzip compression
- **Minification:** Minify CSS and JavaScript

### Performance Monitoring
```javascript
// Performance monitoring setup
export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric)
    // Send to analytics service
  }
}
```

## 🔍 Monitoring & Analytics

### Analytics Setup
1. **Google Analytics:**
   ```javascript
   // pages/_app.js
   import { Analytics } from '@vercel/analytics/react'
   
   export default function App({ Component, pageProps }) {
     return (
       <>
         <Component {...pageProps} />
         <Analytics />
       </>
     )
   }
   ```

2. **Vercel Analytics:**
   - Automatic performance monitoring
   - Real user metrics
   - Core Web Vitals tracking

### Error Monitoring
```javascript
// Error boundary setup
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
```

## 🔄 Continuous Deployment

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Environment Management
- **Development:** Local development environment
- **Staging:** Preview deployments for testing
- **Production:** Live website deployment

## 🐛 Troubleshooting

### Common Issues
1. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies installed
   - Check for TypeScript errors

2. **Deployment Issues:**
   - Verify environment variables
   - Check build output directory
   - Review hosting provider logs

3. **Performance Issues:**
   - Analyze bundle size
   - Optimize images
   - Check for memory leaks

### Debug Commands
```bash
# Check build output
npm run build

# Analyze bundle
npm run analyze

# Check for issues
npm run lint

# Test production build
npm run start
```

## 📱 Mobile Optimization

### Responsive Testing
- **Device Testing:** Test on actual devices
- **Browser Testing:** Cross-browser compatibility
- **Performance Testing:** Mobile performance optimization
- **Touch Testing:** Touch interaction optimization

### Mobile-Specific Optimizations
- **Touch Targets:** Minimum 44px touch targets
- **Viewport Configuration:** Proper viewport meta tag
- **Mobile Navigation:** Hamburger menu optimization
- **Performance:** Mobile-specific optimizations

## 🔄 Maintenance

### Regular Maintenance Tasks
- **Dependency Updates:** Keep dependencies current
- **Security Patches:** Apply security updates
- **Performance Monitoring:** Monitor Core Web Vitals
- **Backup Strategy:** Regular backups of content
- **SSL Certificate:** Monitor certificate expiration

### Monitoring Checklist
- [ ] Website uptime monitoring
- [ ] Performance metrics tracking
- [ ] Error rate monitoring
- [ ] Security vulnerability scanning
- [ ] SSL certificate status

---

**Note:** This deployment guide should be updated as hosting providers and deployment processes evolve.
