#!/usr/bin/env node

/**
 * Helper script to get Vercel configuration values
 * Run this after connecting your project to Vercel
 */

console.log(`
🚀 Vercel Configuration Helper
===============================

To set up GitHub Actions CI/CD, you need these values from Vercel:

1. VERCEL_TOKEN:
   - Go to https://vercel.com/account/tokens
   - Create a new token
   - Copy the token value

2. VERCEL_ORG_ID:
   - Go to https://vercel.com/account
   - Look for "Team ID" or "Organization ID"
   - Or run: vercel whoami

3. VERCEL_PROJECT_ID:
   - Go to your project in Vercel dashboard
   - Check the URL: https://vercel.com/[org]/[project]
   - Or run: vercel project ls

4. Add these as GitHub Secrets:
   - Go to your GitHub repository
   - Settings > Secrets and variables > Actions
   - Add each secret with the exact names above

5. Push to main branch to trigger deployment:
   git add .
   git commit -m "Add CI/CD pipeline"
   git push origin main

The GitHub Actions workflow will automatically:
✅ Build your project
✅ Run tests (if configured)
✅ Deploy to Vercel
✅ Update on every push to main/master

Need help? Check the DEPLOYMENT.md file for detailed instructions.
`); 