# Deployment Guide

This guide explains how to deploy the Association BD-CN Alumni website to Vercel using GitHub Actions CI/CD pipeline.

## Prerequisites

1. GitHub repository with your code
2. Vercel account
3. Vercel CLI installed (optional, for local testing)

## Setup Steps

### 1. Connect Vercel to GitHub

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 2. Get Vercel Configuration

After connecting your repository, Vercel will provide you with:
- **Vercel Token** (for GitHub Actions)
- **Project ID**
- **Organization ID**

### 3. Set up GitHub Secrets

In your GitHub repository, go to **Settings > Secrets and variables > Actions** and add:

- `VERCEL_TOKEN`: Your Vercel token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### 4. Push to Main Branch

The CI/CD pipeline is configured to automatically deploy when you push to the `main` or `master` branch.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. **Checkout** the code
2. **Setup Node.js** (version 20)
3. **Install dependencies** with `npm ci`
4. **Run tests** (if configured)
5. **Build the project** with `npm run build`
6. **Deploy to Vercel** automatically

## Manual Deployment

If you need to deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Troubleshooting

### Build Issues
- Ensure `terser` is installed: `npm install --save-dev terser`
- Check Node.js version compatibility (requires Node 20+)
- Verify all dependencies are properly installed

### Deployment Issues
- Verify GitHub secrets are correctly set
- Check Vercel project configuration
- Ensure repository has proper permissions

### Common Errors
- **"terser not found"**: Install terser as dev dependency
- **"Build failed"**: Check console for specific error messages
- **"Deployment failed"**: Verify Vercel token and project settings

## Environment Variables

If your app needs environment variables:

1. Add them in Vercel dashboard under **Settings > Environment Variables**
2. For local development, create a `.env.local` file (not committed to git)

## Performance Optimization

The current configuration includes:
- Asset caching headers for better performance
- Security headers for protection
- Optimized build output with gzip compression

## Monitoring

- Check deployment status in GitHub Actions tab
- Monitor Vercel dashboard for deployment logs
- Set up Vercel analytics for performance monitoring 