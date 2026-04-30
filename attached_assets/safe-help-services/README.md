# Safe Help Services - One-Page React Website

Modern, mobile-responsive website for Safe Help Services - a veteran-owned handyman business in Kinder, Louisiana.

## 🎯 Features

- ✅ **SEO Optimized** - Meta tags, structured data, semantic HTML
- ✅ **Mobile-First Responsive** - Breakpoints at 640px, 768px, 1024px
- ✅ **Framer Motion Animations** - Smooth scroll animations and interactions
- ✅ **Google Reviews Integration** - Barebones structure ready for API
- ✅ **Black + Gold + Darkest Blue** - Bold, trust-building color scheme
- ✅ **No AI Slop** - Custom SVG icons, no emojis, production-quality design
- ✅ **TypeScript** - Type-safe codebase
- ✅ **CSS Modules** - Scoped, maintainable styles

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
safe-help-services/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── About/
│   │   ├── VisualSection/
│   │   ├── GoogleReviews/   # API integration ready
│   │   ├── CTA/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css            # Global styles + CSS variables
├── index.html               # SEO meta tags
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
```css
--color-black: #000000       /* Primary background */
--color-gold: #FBBF24        /* Primary accent */
--color-gold-dark: #D97706   /* Hover states */
--color-blue-darkest: #042C53 /* Veteran badge */
--color-blue-dark: #0C447C   /* Borders */
--color-white: #FFFFFF       /* Text */
--color-gray-light: #D9E2EC  /* Body text */
--color-gray-mid: #90A4AE    /* Muted text */
```

### Typography
- **Display Font**: Oswald (headers, CTAs)
- **Body Font**: Public Sans (paragraphs, UI)

### Spacing
8pt grid system: 8px, 16px, 24px, 32px, 48px, 64px, 96px

## 🔌 Google Reviews API Integration

The Google Reviews component is structured to connect to the Google Places API.

### Setup Steps:

1. **Get Google Places API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable Places API
   - Create API key

2. **Find Your Place ID**
   - Use [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
   - Search for "Safe Help Services Kinder LA"
   - Copy the Place ID

3. **Add Environment Variables**
   ```bash
   # Create .env file in root
   VITE_GOOGLE_PLACES_API_KEY=your_api_key_here
   VITE_GOOGLE_PLACE_ID=your_place_id_here
   ```

4. **Update GoogleReviews Component**
   - Open `/src/components/GoogleReviews/GoogleReviews.tsx`
   - Uncomment the API fetch code (lines 22-29)
   - Comment out the mock data (lines 32-54)

## 📱 Mobile Optimization

- Mobile-first CSS approach
- Touch-friendly tap targets (minimum 44x44px)
- Optimized images with `loading="lazy"`
- Service worker ready for PWA conversion

## 🔍 SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (LocalBusiness schema)
- [x] Semantic HTML5 elements
- [x] Alt tags on images (placeholder ready)
- [x] Mobile responsive
- [x] Fast load times

## 🚀 Deployment

### Netlify (Recommended)

```bash
# Build command
npm run build

# Publish directory
dist
```

### Vercel

```bash
# Import Git repository
# Auto-detects Vite configuration
```

### Custom Server

```bash
# Build production files
npm run build

# Upload /dist folder to server
# Configure server to serve index.html for all routes
```

## 📝 Customization

### Adding Real Photos

1. Place Adrian's character image in `/public/images/adrian-character.png`
2. Update Hero component import
3. Replace placeholder divs with `<img>` tags

### Updating Contact Information

Edit in multiple files:
- `/index.html` - Meta tags and structured data
- `/src/components/Hero/Hero.tsx` - Phone CTAs
- `/src/components/Footer/Footer.tsx` - Footer links

### Changing Colors

Update CSS variables in `/src/index.css`:

```css
:root {
  --color-gold: #YOUR_COLOR;
  --color-blue-darkest: #YOUR_COLOR;
}
```

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animation**: Framer Motion
- **Fonts**: Google Fonts (Oswald + Public Sans)

## 📄 License

© 2026 Safe Help Services. All rights reserved.
Website built by A&M Studios.

## 🆘 Support

For technical issues or customization requests:
- Email: support@amstudios.com
- Website: https://amstudios.com

---

**Built with care for Adrian Mallett | USMC Veteran | Kinder, LA**
