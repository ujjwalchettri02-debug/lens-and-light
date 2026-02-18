# Deployment Guide - GitHub, Netlify & Vercel

Complete step-by-step guide to deploy your photography portfolio to the web.

## Prerequisites

- ✅ Git installed ([download here](https://git-scm.com/downloads))
- ✅ GitHub account ([sign up here](https://github.com))
- ✅ Your portfolio tested locally (run `npm run dev` to verify)

---

## Part 1: Push to GitHub

### Step 1: Create a GitHub Repository

1. **Go to GitHub** and log in
2. **Click the "+" icon** (top right) → **New repository**
3. **Fill in the details:**
   ```
   Repository name: photography-portfolio
   Description: My professional photography portfolio
   Visibility: Public (so it can be deployed)
   ```
4. **DON'T** initialize with README (you already have one)
5. **Click "Create repository"**

### Step 2: Connect Your Local Project to GitHub

Open your terminal in the `photography-portfolio` folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Photography portfolio with Stripe integration"

# Rename branch to main (GitHub's default)
git branch -M main

# Connect to your GitHub repository (replace with YOUR username)
git remote add origin https://github.com/YOUR_USERNAME/photography-portfolio.git

# Push your code
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

### Step 3: Verify

Refresh your GitHub repository page - you should see all your files!

---

## Part 2: Deploy to Netlify (Recommended)

Netlify is free, fast, and perfect for React apps.

### Step 1: Sign Up for Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign up** → **Sign up with GitHub**
3. Authorize Netlify to access your GitHub account

### Step 2: Create a New Site

1. **Click "Add new site"** → **Import an existing project**
2. **Choose "Deploy with GitHub"**
3. **Authorize Netlify** (if prompted)
4. **Select your repository**: `photography-portfolio`

### Step 3: Configure Build Settings

Netlify usually auto-detects these, but verify:

```
Base directory: (leave blank)
Build command: npm run build
Publish directory: dist
```

### Step 4: Deploy!

1. **Click "Deploy site"**
2. Wait 1-2 minutes for the build to complete
3. **Your site is live!** 🎉

You'll get a URL like: `https://random-name-12345.netlify.app`

### Step 5: Customize Your Domain (Optional)

**Option A: Use Netlify Subdomain**
1. Go to **Site settings** → **Domain management**
2. Click **Options** → **Edit site name**
3. Change to something like: `yourname-photography.netlify.app`

**Option B: Use Custom Domain**
1. Buy a domain (from Namecheap, GoDaddy, etc.)
2. Go to **Domain management** → **Add custom domain**
3. Follow the DNS setup instructions
4. Wait for DNS propagation (can take 24-48 hours)

### Step 6: Enable HTTPS

Netlify automatically provides free SSL certificates!
- Go to **Domain management** → **HTTPS**
- Click **Verify DNS configuration**
- SSL certificate will be issued automatically

---

## Part 3: Deploy to Vercel (Alternative)

Vercel is another excellent option, especially for React/Next.js apps.

### Step 1: Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel

### Step 2: Import Your Project

1. **Click "New Project"**
2. **Import Git Repository**
3. **Select `photography-portfolio`** from your repositories
4. **Click "Import"**

### Step 3: Configure (Auto-Detected)

Vercel automatically detects:
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

No configuration needed!

### Step 4: Deploy

1. **Click "Deploy"**
2. Wait 1-2 minutes
3. **Your site is live!** 🎉

You'll get a URL like: `https://photography-portfolio.vercel.app`

### Step 5: Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. **Add a domain**
3. Follow the DNS setup instructions

---

## Part 4: Update Your Site

After making changes to your portfolio:

### Update Process

```bash
# Make your changes to the code
# (e.g., edit photos.json, update components, etc.)

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add new photos and update pricing"

# Push to GitHub
git push
```

**That's it!** Both Netlify and Vercel automatically rebuild and deploy when you push to GitHub.

---

## Part 5: Continuous Deployment

### How It Works

1. You push code to GitHub
2. Netlify/Vercel detects the change
3. Automatically builds your site
4. Deploys the new version
5. Your site is updated in ~2 minutes

### Build Status

- **Netlify**: Check **Deploys** tab to see build status
- **Vercel**: Check **Deployments** tab

---

## Troubleshooting

### Build Failed

**Check the build logs:**
- Netlify: Go to **Deploys** → Click failed deploy → View logs
- Vercel: Go to **Deployments** → Click failed deployment → View function logs

**Common issues:**
1. **Missing dependencies**: Run `npm install` locally and commit `package-lock.json`
2. **Build errors**: Test `npm run build` locally first
3. **Environment variables**: If you added any `.env` files, add them in Netlify/Vercel settings

### Site Not Updating

1. **Check if code was pushed**: Verify on GitHub
2. **Check build status**: Look for errors in deploy logs
3. **Clear cache**: In Netlify/Vercel settings, try "Clear cache and deploy"
4. **Hard refresh**: Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac) in your browser

### Images Not Loading

1. **Check image URLs** in `photos.json`
2. **Verify images are accessible** (open URLs in browser)
3. **Check CORS settings** (if hosting images yourself)

---

## Performance Optimization

### Enable Branch Deploys

Both Netlify and Vercel support deploying from different branches:

1. Create a `staging` branch for testing
2. Deploy from `main` for production
3. Preview changes before going live

### Analytics

**Netlify Analytics** (Paid):
- Go to **Analytics** tab
- Enable for $9/month

**Vercel Analytics** (Free):
- Automatically included
- View in **Analytics** tab

**Alternative (Free):**
- Add Google Analytics to `index.html`

---

## Security Checklist

✅ **Before deploying:**
- [ ] Remove any hardcoded API keys
- [ ] Verify all Stripe links are correct
- [ ] Test payment flow end-to-end
- [ ] Check all images load properly
- [ ] Test on mobile devices
- [ ] Verify SEO meta tags in `index.html`

✅ **After deploying:**
- [ ] Test the live site thoroughly
- [ ] Make a test purchase (if using live Stripe)
- [ ] Check site on different browsers
- [ ] Verify SSL certificate (HTTPS works)
- [ ] Test contact form (if you added one)

---

## Next Steps

After deployment:

1. **Share your portfolio:**
   - Add link to Instagram bio
   - Share on social media
   - Add to email signature

2. **Monitor sales:**
   - Check Stripe dashboard regularly
   - Respond to customer inquiries
   - Track which photos sell best

3. **Keep updating:**
   - Add new photos regularly
   - Update prices based on demand
   - Improve based on customer feedback

4. **Consider adding:**
   - Google Analytics for visitor tracking
   - Contact form for inquiries
   - Blog section for photography tips
   - Newsletter signup

---

## Cost Summary

**Free tier includes:**
- ✅ Netlify: Unlimited personal projects, 100GB bandwidth/month
- ✅ Vercel: Unlimited personal projects, 100GB bandwidth/month  
- ✅ GitHub: Unlimited public repositories
- ✅ SSL Certificate: Free (automatic)

**You only pay for:**
- 💰 Custom domain: ~$10-15/year (optional)
- 💰 Stripe fees: 2.9% + $0.30 per transaction

---

## Support Resources

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)

---

Congratulations! Your photography portfolio is now live on the web! 🎉📸

Share your link and start selling your beautiful work!
