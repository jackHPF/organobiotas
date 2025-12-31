# Deployment Guide

## Production Build

The production build is located in the `dist/` folder after running:

```bash
npm run build
```

## Deployment Steps

### Option 1: Vercel/Netlify (Auto-Deploy from GitHub)

If your site is connected to GitHub for auto-deployment:

1. **Check Deployment Status:**
   - Vercel: Go to https://vercel.com/dashboard
   - Netlify: Go to https://app.netlify.com
   - Look for the latest deployment and ensure it's successful

2. **Trigger Redeploy (if needed):**
   - Push an empty commit: `git commit --allow-empty -m "Trigger deployment"`
   - Or manually trigger redeploy from the dashboard

3. **Clear Browser Cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or clear browser cache completely

### Option 2: Manual Deployment

If you're using custom hosting:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload dist folder:**
   - Upload all contents of the `dist/` folder to your web server
   - Ensure `index.html` is in the root directory
   - Ensure `logo.png` is accessible at `/logo.png`

3. **Verify:**
   - Check that `https://www.organobiotas.co.in/logo.png` is accessible
   - Check browser tab for favicon

### Option 3: GitHub Pages

If using GitHub Pages:

1. **Build and deploy:**
   ```bash
   npm run build
   ```

2. **Push dist folder to gh-pages branch:**
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

## Troubleshooting

- **Favicon not showing:** Clear browser cache and hard refresh
- **404 errors:** Ensure all files from `dist/` are uploaded
- **Old version showing:** Check deployment logs and clear CDN cache if applicable

