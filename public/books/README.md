# How to Add Your Books

## Step 1: Create folders for your book files

The folder structure should be:
```
public/
  ├── books/          <- Place your PDF files here
  └── images/
      └── books/      <- Place your book cover images here
```

## Step 2: Add your book files

1. **Add PDF files** to `public/books/` folder
   - Example: `book1.pdf`, `book2.pdf`, etc.
   - Supported formats: PDF (recommended), EPUB, MOBI

2. **Add book cover images** to `public/images/books/` folder
   - Example: `book1-cover.jpg`, `book2-cover.jpg`
   - Recommended size: 300x400 pixels
   - Formats: JPG, PNG, WebP

## Step 3: Update the books data

Edit `src/data/books.js` and update each book:

```javascript
{
  id: 1,
  title: "Your Book Title",
  author: "Author Name",
  description: "Book description here",
  publishedYear: "2024",
  isbn: "978-1-234567-89-0",
  cover: "/images/books/book1-cover.jpg",    // Path to cover image
  file: "/books/book1.pdf",                   // Path to PDF file
  link: "#"  // Optional: link to buy/more info
}
```

## Step 4: Test it

1. Save your changes
2. The app will auto-refresh
3. Go to the Books page
4. Click "📖 Read Book" to preview the PDF

## Features

✅ **Read Book** button - Opens PDF in a new tab for reading
✅ **View Details** button - Links to external page (optional)
✅ **Book covers** - Display beautiful cover images
✅ **Mobile-friendly** - Works on phones and tablets

## Tips

- Keep PDF files under 10MB for better performance
- Optimize images before uploading (use TinyPNG.com)
- Test the "Read Book" button to ensure PDFs load correctly
- You can add as many books as you want!

## Example with Real Data

```javascript
export const books = [
  {
    id: 1,
    title: "Abyat-e-Bahoo",
    author: "Hazrat Sultan Bahoo (RA)",
    description: "A collection of spiritual poetry expressing the journey of Divine Love",
    publishedYear: "2023",
    isbn: "978-1-234567-89-0",
    cover: "/images/books/abyat-cover.jpg",
    file: "/books/abyat-bahoo.pdf",
    link: "https://example.com/buy-book"
  }
];
```
