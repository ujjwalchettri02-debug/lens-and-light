# Photography Portfolio - Lens & Light

A modern, production-ready photography portfolio website built with React, Vite, and Tailwind CSS. Features a stunning dark theme, masonry gallery layout, lightbox view, and Stripe payment integration for selling digital downloads and prints.

## ✨ Features

- **Responsive Masonry Gallery**: Beautiful grid layout that adapts to any screen size
- **Lightbox View**: Click any photo to see full details, technical specs, and purchase options
- **Stripe Integration**: Secure payment processing for digital downloads and prints
- **Dark Theme**: High-contrast, photography-focused design
- **Lazy Loading**: Optimized image loading for better performance
- **Smooth Animations**: Subtle animations enhance the user experience
- **Easy Content Management**: Update photos via a simple JSON file

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your machine
- A Stripe account (for payment processing)

### Installation

1. **Clone or download this project**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

## 📸 Adding Your Photos

Edit `src/data/photos.json` to add your own photos. Each photo object should include:

```json
{
  "id": 1,
  "title": "Your Photo Title",
  "description": "Photo description",
  "category": "Landscape",
  "imageUrl": "https://your-image-url.com/image.jpg",
  "thumbnailUrl": "https://your-image-url.com/thumbnail.jpg",
  "price": 49.99,
  "stripeLink": "https://buy.stripe.com/your-payment-link",
  "technical": {
    "camera": "Camera Model",
    "lens": "Lens Model",
    "settings": "ISO, f-stop, shutter speed"
  },
  "printSizes": ["8x10", "16x20", "24x36"],
  "digitalDownload": true
}
```

### Image Hosting Options

You can host your images on:
- **Cloudinary** (recommended for photography)
- **AWS S3**
- **Google Cloud Storage**
- **Imgur** (free, easy to use)
- Any image CDN service

## 💳 Stripe Payment Setup

### Step 1: Create a Stripe Account

1. Go to [stripe.com](https://stripe.com) and sign up
2. Complete your account setup

### Step 2: Create Payment Links

For each photo you want to sell:

1. **Log into Stripe Dashboard**
2. Go to **Products** → **Add Product**
3. Fill in:
   - **Name**: Photo title (e.g., "Golden Hour Valley - 16x20 Print")
   - **Description**: Photo description
   - **Price**: Your selling price
   - **Image**: Upload the photo thumbnail
4. Click **Create Product**
5. On the product page, click **Create Payment Link**
6. Configure options:
   - Enable **Collect customer address** (for shipping prints)
   - Set **Quantity limits** if needed
7. Click **Create Link**
8. **Copy the payment link** (looks like `https://buy.stripe.com/xxxxx`)
9. **Paste it into your `photos.json` file** as the `stripeLink` value

### Step 3: Test Payments

Stripe starts in **Test Mode** by default. Use these test card numbers:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Any future expiry date and any 3-digit CVC

### Step 4: Go Live

1. In Stripe Dashboard, click **Activate Account**
2. Complete the required business information
3. Create new payment links in **Live Mode**
4. Update your `photos.json` with live payment links

## 🌐 Deployment

### Option 1: Deploy to Netlify

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/photography-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click **Add new site** → **Import an existing project**
   - Connect your GitHub account
   - Select your repository
   - Build settings (auto-detected):
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click **Deploy site**

3. **Your site is live!** Netlify provides a URL like `https://your-site-name.netlify.app`

4. **Custom Domain** (optional):
   - Go to **Site settings** → **Domain management**
   - Click **Add custom domain**
   - Follow the DNS setup instructions

### Option 2: Deploy to Vercel

1. **Push your code to GitHub** (same as above)

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click **New Project**
   - Import your GitHub repository
   - Vercel auto-detects settings (no configuration needed)
   - Click **Deploy**

3. **Your site is live!** Vercel provides a URL like `https://your-project.vercel.app`

4. **Custom Domain** (optional):
   - Go to **Project Settings** → **Domains**
   - Add your custom domain

## 📁 Project Structure

```
photography-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Gallery.jsx      # Photo gallery with masonry layout
│   │   ├── Lightbox.jsx     # Photo detail view with buy button
│   │   └── Footer.jsx       # Footer with links
│   ├── data/
│   │   └── photos.json      # Your photo data (EDIT THIS!)
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js` to customize the color scheme.

### Change Fonts

1. Update the Google Fonts link in `index.html`
2. Update the font families in `tailwind.config.js`

### Modify Layout

- **Navbar**: Edit `src/components/Navbar.jsx`
- **Hero**: Edit `src/components/Hero.jsx`
- **Gallery**: Edit `src/components/Gallery.jsx`
- **Footer**: Edit `src/components/Footer.jsx`

## 🛠️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📝 License

This project is open source and free to use for your photography portfolio.

## 💡 Tips

1. **Image Optimization**: Compress your images before uploading (use tools like TinyPNG or Squoosh)
2. **SEO**: Update meta tags in `index.html` with your business name and description
3. **Analytics**: Add Google Analytics or Plausible to track visitors
4. **Backup**: Keep a backup of your `photos.json` file
5. **Testing**: Always test payment links in Stripe Test Mode before going live

## 🆘 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify your `photos.json` syntax is valid JSON
3. Ensure all image URLs are accessible
4. Test Stripe payment links individually in Stripe Dashboard

---

Built with ❤️ for photographers
