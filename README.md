# Organization App

A Progressive Web App (PWA) showcasing organization information, published books, and events. Built with React and Vite.

## ✨ Features
- 📚 Browse published books with covers and details
- 📅 View upcoming and past events
- 🖼️ Photo gallery with lightbox
- 📱 Mobile-friendly and installable as an app
- ⚡ Fast and responsive
- 🆓 **100% Free to host and share**

## 🚀 Quick Start

**First time setup?** Read [SETUP.md](SETUP.md) for complete instructions.

### Prerequisites
- Node.js 16+ (Download from [nodejs.org](https://nodejs.org/))

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Build for Production
```bash
npm run build
```

## 📚 Documentation

- **[SETUP.md](SETUP.md)** - First-time setup instructions (install Node.js, run the app)
- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** - How to add your content (books, events, photos)
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy for free to Vercel, Netlify, or GitHub Pages
- **[QUICKSTART.md](QUICKSTART.md)** - Quick reference guide

## 🎨 Customization

Edit the data files in `src/data/` to add your organization's:
- **Organization Info** (`orgInfo.js`) - Name, mission, contact details
- **Books** (`books.js`) - Published books with covers and descriptions
- **Events** (`events.js`) - Upcoming and past events
- **Gallery** (`gallery.js`) - Photo gallery images

Add images to the `public/images/` folder and update paths in data files.

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed instructions.

## 🌐 Free Hosting Options

All these platforms offer **free hosting** with unlimited visitors:

### Deploy to Vercel (Recommended - Easiest)
1. Push code to GitHub
2. Sign up at [vercel.com](https://vercel.com) with GitHub
3. Click "Import Project" and select your repo
4. Click "Deploy" - Done in 2 minutes!

### Other Options
- **Netlify** - Similar to Vercel, great UI
- **GitHub Pages** - Good for static sites

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions for all platforms.
