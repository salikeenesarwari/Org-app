# Customization Guide

## How to Add Your Organization's Information

### 1. Update Organization Info
Edit `src/data/orgInfo.js`:
- Change organization name, tagline, and description
- Update contact information (email, phone, website)
- Modify mission statement

### 2. Add Your Books
Edit `src/data/books.js`:
- Add new books with details (title, author, description, ISBN, etc.)
- Replace placeholder images with actual book covers
- Update or remove sample books

### 3. Add Events
Edit `src/data/events.js`:
- Add upcoming and past events
- Include dates, locations, and descriptions
- Add event images (optional)

### 4. Add Photos
Edit `src/data/gallery.js`:
- Replace placeholder images with actual photos
- Add captions for each image
- Organize by categories if needed

### 5. Replace Logo
Replace these files in the `public/` folder:
- `logo.svg` - Your organization's logo
- For PNG icons, convert SVG to PNG:
  - `logo-192.png` (192x192 pixels)
  - `logo-512.png` (512x512 pixels)

### 6. Customize Colors
Edit `src/index.css`:
- Change `#2563eb` (blue) to your brand color
- Update other colors as needed

### 7. Add Real Images
Replace placeholder images:
1. Add your images to `public/images/` folder
2. Update image paths in data files
3. Use formats: JPG, PNG, or WebP

Example:
```javascript
cover: "/images/book-cover.jpg"
```

## Tips
- Keep image file sizes under 500KB for better performance
- Use descriptive file names for images
- Test on mobile devices before deploying
- Update the app title in `index.html` if needed
