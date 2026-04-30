# 🚀 Safe Help Services - Deployment Guide

## Quick Start (5 minutes)

1. **Download the project folder**
2. **Open terminal in project folder**
3. **Run these commands:**

```bash
npm install
npm run dev
```

Your site is now running at http://localhost:5173

---

## 📦 What's Built

✅ **Complete One-Page Site** with 8 sections:
- Navbar (mobile responsive with hamburger menu)
- Hero (with Adrian's character placeholder)
- Services (HAUL, MOVE, TECH, HELP - 4-letter verbs)
- About (veteran emphasis, mission-focused)
- Visual Section (work showcase grid)
- Google Reviews (API structure ready)
- CTA (call/text buttons)
- Contact Form (UI only, no backend yet)
- Footer

✅ **SEO Ready**
- Meta tags in index.html
- LocalBusiness schema for Google
- Open Graph tags for social sharing

✅ **Mobile Optimized**
- Breakpoints: 640px, 768px, 1024px
- Touch-friendly buttons
- Responsive grid layouts

✅ **Design System**
- Colors: Black, Gold (#FBBF24), Darkest Blue (#042C53)
- Fonts: Oswald (display) + Public Sans (body)
- No emojis - custom SVG icons only
- 8pt spacing grid

---

## 🔌 Google Reviews Setup

**Current State:** Mock data shows 3 placeholder reviews

**To Connect Real Reviews:**

1. Get Google Places API key from console.cloud.google.com
2. Find your Place ID at developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
3. Create `.env` file:
   ```
   VITE_GOOGLE_PLACES_API_KEY=your_key
   VITE_GOOGLE_PLACE_ID=your_id
   ```
4. Open `/src/components/GoogleReviews/GoogleReviews.tsx`
5. Uncomment lines 22-29 (API fetch code)
6. Comment out lines 32-54 (mock data)

---

## 🖼️ Adding Adrian's Photos

**Hero Character:**
1. Extract Adrian from flyer (use remove.bg or Photoshop)
2. Save as `/public/images/adrian-character.png`
3. Update Hero component to use image instead of placeholder

**About Section Photo:**
1. Add action photo to `/public/images/adrian-working.jpg`
2. Replace placeholder in About component

**Visual Section:**
1. Add 4 work photos to `/public/images/work/`
2. Update VisualSection component image paths

---

## 🌐 Deploy to Netlify (Easiest)

**Option 1: Drag & Drop**
1. Run `npm run build` in terminal
2. Go to app.netlify.com
3. Drag `/dist` folder to deploy area
4. Done! Site is live

**Option 2: GitHub (Auto-Deploy)**
1. Push code to GitHub repo
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Every git push auto-deploys

---

## 🔧 Common Customizations

### Change Phone Number
Search and replace `337-249-3707` across all files:
- index.html (meta tags)
- Hero.tsx
- CTA.tsx
- Contact.tsx
- Footer.tsx

### Change Colors
Edit `/src/index.css`:
```css
--color-gold: #FBBF24;        /* Your primary color */
--color-blue-darkest: #042C53; /* Your secondary */
```

### Update Service Area
Edit `index.html` line 23:
```json
"addressLocality": "Kinder",
"addressRegion": "LA",
```

---

## 📊 Performance Checklist

- [ ] Add real images (compress with tinypng.com first)
- [ ] Enable Google Reviews API
- [ ] Test on real mobile device
- [ ] Set up contact form backend (Formspree, Netlify Forms, etc.)
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

---

## 🆘 Troubleshooting

**Site won't start:**
- Delete `node_modules` folder
- Run `npm install` again
- Make sure Node.js 18+ is installed

**Build fails:**
- Check for TypeScript errors: `npm run build`
- Make sure all imports match file names exactly

**Mobile menu not working:**
- This is a React app - needs JavaScript enabled
- Test in modern browsers (Chrome, Firefox, Safari)

---

## 📱 Contact Form Backend Options

The form UI is complete but needs a backend. Choose one:

**Netlify Forms (Free)**
- Add `netlify` attribute to form tag
- Auto-processes submissions
- Free tier: 100 submissions/month

**Formspree (Free)**
- Add action URL to form
- Receives via email
- Free tier: 50 submissions/month

**Email.js (Free)**
- Pure frontend solution
- No backend needed
- Free tier: 200 emails/month

---

## ✅ Pre-Launch Checklist

- [ ] Replace all placeholder images with real photos
- [ ] Test contact form submission
- [ ] Enable Google Reviews API
- [ ] Update phone number everywhere
- [ ] Test on mobile device
- [ ] Check spelling/grammar
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain
- [ ] Submit to Google Search Console

---

**Built for Safe Help Services | USMC Veteran-Owned**
**Questions? Email the A&M Studios team**
