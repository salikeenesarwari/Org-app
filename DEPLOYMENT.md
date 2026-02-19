# Deployment Guide

## Quick Start: Deploy to Vercel (Recommended)

Vercel offers the easiest deployment process with automatic builds and SSL certificates.

### Step-by-Step Instructions:

1. **Prepare Your Code**
   - Make sure you've customized your organization's data
   - Test locally with `npm run dev`

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and choose "Continue with GitHub"
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Wait 1-2 minutes for deployment to complete
   - Your app is live! 🎉

4. **Share Your Link**
   - Copy the deployment URL (e.g., `your-app.vercel.app`)
   - Share it with anyone - they can access it on any device
   - Users can "Add to Home Screen" on mobile for app-like experience

### Custom Domain (Optional)
- Go to your project settings in Vercel
- Click "Domains"
- Add your custom domain (requires domain ownership)

---

## Alternative: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Your app is live!

---

## Alternative: Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add to scripts section:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   
   Add homepage field (replace USERNAME and REPO):
   ```json
   "homepage": "https://USERNAME.github.io/REPO"
   ```

3. **Update vite.config.js**
   Add base URL (replace REPO):
   ```javascript
   export default defineConfig({
     base: '/REPO/',
     plugins: [...]
   });
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Save

Your app will be available at: `https://USERNAME.github.io/REPO`

---

## Mobile Installation Guide for Users

Once deployed, users can install your app on their phones:

### iPhone (iOS):
1. Open the link in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

### Android:
1. Open the link in Chrome
2. Tap the menu (⋮) in top-right corner
3. Tap "Add to Home Screen" or "Install App"
4. Tap "Add" or "Install"

The app will appear on their home screen like a native app!

---

## Updating Your Deployed App

After making changes:

**For Vercel/Netlify:**
```bash
git add .
git commit -m "Updated content"
git push
```
The site will automatically rebuild and update in 1-2 minutes!

**For GitHub Pages:**
```bash
npm run deploy
```

---

## Troubleshooting

### Build fails
- Check that all dependencies are in package.json
- Make sure Node.js version is 16 or higher
- Check console for error messages

### Images not showing
- Verify image paths start with `/` or use full URLs
- Check that images are in the `public/` folder
- Ensure image files exist and aren't too large (< 1MB recommended)

### App not updating
- Clear browser cache
- Force rebuild in Vercel/Netlify dashboard
- Wait a few minutes for CDN to update

---

## Cost: 100% FREE ✅

All these platforms offer free tiers that include:
- Unlimited bandwidth and visitors for personal projects
- Automatic SSL certificates (HTTPS)
- Global CDN for fast loading
- Automatic deployments from GitHub
- No credit card required for basic features

Your organization app can be shared with unlimited users at no cost!
