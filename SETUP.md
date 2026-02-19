# Setup Instructions for Windows

## Prerequisites

You need to install Node.js to run this app. Node.js includes npm (Node Package Manager) which is required for installing dependencies.

### Install Node.js

1. **Download Node.js**
   - Go to [nodejs.org](https://nodejs.org/)
   - Download the **LTS (Long Term Support)** version (recommended)
   - Choose the Windows Installer (.msi) - 64-bit

2. **Run the Installer**
   - Double-click the downloaded file
   - Follow the installation wizard
   - Keep all default settings (including npm package manager)
   - Click "Install"
   - The installer will set up Node.js and npm

3. **Verify Installation**
   - Open a NEW PowerShell or Command Prompt window
   - Type: `node --version`
   - Type: `npm --version`
   - Both should show version numbers

---

## After Installing Node.js

Once Node.js is installed, follow these steps:

### 1. Open PowerShell in this folder
- Right-click in the Org-app folder
- Select "Open in Terminal" or "Open PowerShell window here"

### 2. Install Dependencies
```powershell
npm install
```
This will download all required packages (takes 1-2 minutes)

### 3. Start Development Server
```powershell
npm run dev
```

### 4. View Your App
- The app will open at: `http://localhost:5173`
- Open this URL in your browser
- Press `Ctrl+C` in terminal to stop the server

---

## Next Steps After Viewing the App

1. **Customize Content**
   - Edit files in `src/data/` folder
   - Add your organization's information
   - Add your books, events, and photos

2. **Deploy to Make it Shareable**
   - Follow instructions in [DEPLOYMENT.md](DEPLOYMENT.md)
   - Use Vercel (easiest option)
   - Get a shareable link that works on any device

---

## File Structure

```
Org-app/
├── src/
│   ├── components/      # Navigation, Footer
│   ├── pages/          # Home, Books, Events, Gallery
│   ├── data/           # 📝 EDIT THESE to customize content
│   │   ├── orgInfo.js   # Organization details
│   │   ├── books.js     # Your published books
│   │   ├── events.js    # Your events
│   │   └── gallery.js   # Photo gallery
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css       # Styles (change colors here)
├── public/
│   ├── images/         # 📸 Add your images here
│   └── logo.svg        # Replace with your logo
├── package.json
├── vite.config.js
└── index.html
```

---

## Troubleshooting

### "npm is not recognized"
- You need to install Node.js first (see above)
- After installing, close and reopen PowerShell

### Port already in use
- Another app is using port 5173
- The terminal will suggest an alternative port

### Changes not showing
- Save your files
- The page should auto-refresh
- If not, refresh your browser manually

---

## Quick Commands Reference

| Command | What it does |
|---------|--------------|
| `npm install` | Install dependencies (run once) |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Getting Help

- **Customization**: See [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Deployment**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **General Info**: See [README.md](README.md)

---

## Timeline to Launch

1. ✅ **Done**: App is created
2. **5 minutes**: Install Node.js
3. **2 minutes**: Run `npm install`
4. **30 minutes**: Customize your content
5. **10 minutes**: Deploy to Vercel
6. ✅ **Launch**: Share your link with the world!

Total time: About 1 hour from start to having a live, shareable app!
