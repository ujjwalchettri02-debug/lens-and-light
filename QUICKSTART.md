# 🚀 Quick Start Guide

Get your photography portfolio running in 5 minutes!

## What You're Building

A professional photography portfolio website with:
- ✨ Beautiful dark-themed gallery
- 🖼️ Masonry grid layout
- 🔍 Lightbox photo viewer
- 💳 Stripe payment integration
- 📱 Fully responsive design
- 🚀 Ready to deploy

## Step 1: Setup (2 minutes)

1. **Make sure you have Node.js installed**
   - Download from [nodejs.org](https://nodejs.org) (version 18 or higher)
   - Verify: Open terminal and run `node --version`

2. **Open this project folder in your terminal**
   ```bash
   cd path/to/photography-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## Step 2: Run Locally (1 minute)

```bash
npm run dev
```

Open your browser to: **http://localhost:5173**

You should see your portfolio! 🎉

## Step 3: Add Your Photos (2 minutes)

1. **Edit `src/data/photos.json`**
   
2. **Replace with your photo URLs** (you can use Unsplash, Imgur, or your own hosting)

3. **Update titles, descriptions, and prices**

Example:
```json
{
  "id": 1,
  "title": "My Amazing Landscape",
  "description": "Captured at sunset in Yosemite",
  "category": "Landscape",
  "imageUrl": "https://your-image-url.com/photo.jpg",
  "thumbnailUrl": "https://your-image-url.com/photo-thumb.jpg",
  "price": 49.99,
  "stripeLink": "https://buy.stripe.com/test_XXXXX",
  ...
}
```

4. **Save the file** - the site auto-refreshes!

## Step 4: Setup Stripe Payments (Optional)

If you want to sell photos:

1. **Read `STRIPE_SETUP.md`** for detailed instructions

2. **Quick version:**
   - Sign up at [stripe.com](https://stripe.com)
   - Create products for your photos
   - Generate payment links
   - Copy links to `photos.json`

## Step 5: Deploy (Free!)

Choose one:

### Option A: Netlify (Recommended)
1. Push to GitHub (see `DEPLOYMENT.md`)
2. Connect to Netlify
3. Deploy automatically
4. Get free HTTPS URL

### Option B: Vercel
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically
4. Get free HTTPS URL

**Full instructions in `DEPLOYMENT.md`**

---

## File Structure

```
photography-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Top navigation
│   │   ├── Hero.jsx         # Landing section
│   │   ├── Gallery.jsx      # Photo grid
│   │   ├── Lightbox.jsx     # Photo details/buy
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── photos.json      # ⭐ EDIT THIS FILE
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── README.md                # Full documentation
├── STRIPE_SETUP.md         # Payment setup guide
└── DEPLOYMENT.md           # Deploy to web guide
```

## Common Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Change Site Name
Edit `index.html`:
```html
<title>Your Name - Photography</title>
```

Edit `src/components/Navbar.jsx`:
```jsx
<h1>Your Name</h1>
```

### Change Colors
Edit `tailwind.config.js` to customize the theme

### Change Fonts
Update Google Fonts in `index.html`

---

## Need Help?

1. **Read the full README.md** for detailed documentation
2. **Check STRIPE_SETUP.md** for payment help
3. **See DEPLOYMENT.md** for hosting help
4. **Common issues:**
   - Site not loading? Check Node.js version
   - Images not showing? Verify URLs in photos.json
   - Build errors? Run `npm run build` to see details

---

## What's Next?

After your site is running:

✅ Replace sample photos with your own
✅ Set up Stripe for payments
✅ Deploy to Netlify/Vercel
✅ Share your portfolio link!

---

**Total setup time: ~5-10 minutes**

Happy selling! 📸✨
