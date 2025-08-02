# 🚀 Deployment Guide

This guide will help you deploy the Association of Bangladesh-China Alumni website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))
- Node.js installed locally (for testing)

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Prepare Your Repository

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Ensure these files are in your repository**:
   - `package.json`
   - `vite.config.js`
   - `vercel.json`
   - `index.html`
   - All source files in `src/`

### Step 2: Connect to Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**:
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your repository
   - Vercel will auto-detect Vue.js

3. **Configure Build Settings**:
   - **Framework Preset**: Vue.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)

### Step 3: Custom Domain (Optional)

1. **Add Domain**:
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain

2. **Configure DNS**:
   - Follow Vercel's DNS instructions
   - Wait for propagation (up to 24 hours)

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# From your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? [your-account]
# - Link to existing project? N
# - Project name? [auto-generated]
# - In which directory is your code located? ./
# - Want to override the settings? N
```

### Step 4: Production Deployment

```bash
vercel --prod
```

## Method 3: GitHub Integration

1. **Connect GitHub**:
   - In Vercel dashboard, go to "Settings" → "Git"
   - Connect your GitHub account

2. **Enable Auto-Deploy**:
   - Every push to `main` branch will trigger deployment
   - Pull requests create preview deployments

## 🔧 Build Configuration

### Vercel Configuration (`vercel.json`)

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check `package.json` has correct scripts
   - Ensure all dependencies are in `dependencies` (not `devDependencies`)
   - Verify Node.js version compatibility

2. **Assets Not Loading**:
   - Check file paths in `src/assets/`
   - Ensure images are in correct format (PNG, JPG, SVG)
   - Verify `vercel.json` routes configuration

3. **Routing Issues**:
   - Ensure `vercel.json` has catch-all route for SPA
   - Check that `index.html` is in root directory

4. **Performance Issues**:
   - Optimize images (compress, use WebP)
   - Enable Vercel's edge caching
   - Use CDN for static assets

### Debug Commands

```bash
# Test build locally
npm run build

# Preview build
npm run preview

# Check Vercel logs
vercel logs

# Redeploy
vercel --prod
```

## 📊 Performance Optimization

### Vercel Features

1. **Edge Caching**:
   - Static assets cached globally
   - Automatic compression
   - CDN distribution

2. **Analytics**:
   - Enable Vercel Analytics
   - Monitor Core Web Vitals
   - Track user behavior

3. **Security**:
   - Automatic HTTPS
   - Security headers
   - DDoS protection

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vue.js Deployment**: [vuejs.org/guide/deployment](https://vuejs.org/guide/deployment)
- **Vite Configuration**: [vitejs.dev/config](https://vitejs.dev/config)

---

**Happy Deploying! 🎉** 