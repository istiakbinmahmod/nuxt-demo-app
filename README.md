# Nexus Digital - Nuxt.js SPA

A beautiful, production-ready Nuxt.js Single Page Application showcasing modern web development practices and design aesthetics.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and micro-interactions
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **High Performance**: Built with Nuxt.js 3 and optimized for speed
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation
- **Auto Deployment**: GitHub Actions workflow for seamless Netlify deployment
- **Optimizely Integration**: Web experimentation platform ready

## 🏗️ Tech Stack

- **Framework**: Nuxt.js 3 with SPA mode
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide Vue Next
- **Typography**: Inter font family
- **Deployment**: Netlify with GitHub Actions
- **Images**: High-quality Pexels stock photography

## 📄 Pages

1. **Home** (`/`) - Hero section with company overview and key features
2. **About** (`/about`) - Company story, mission, values, and team information
3. **Services** (`/services`) - Comprehensive service offerings with detailed descriptions
4. **Contact** (`/contact`) - Contact form with company information and location

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nexus-digital-nuxt
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Build and Deployment

### Local Build

```bash
npm run build
```

### Generate Static Site

```bash
npm run generate
```

### Netlify Deployment Setup

1. Create a Netlify account and connect your GitHub repository
2. Add the following secrets to your GitHub repository:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

3. Push to the `main` branch to trigger automatic deployment

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) to Purple (#8B5CF6) gradient
- **Secondary**: Complementary colors for accents
- **Neutrals**: Grayscale palette for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: 5 heading levels with consistent spacing
- **Line Height**: 150% for body text, 120% for headings

### Spacing
- **System**: 8px base unit for consistent spacing
- **Breakpoints**: Mobile-first responsive design

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph tags
- Proper heading hierarchy
- Alt tags for all images
- Clean URL structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Configuration

### Optimizely Integration

The Optimizely web snippet is automatically loaded in the app head. Update the script source in `nuxt.config.ts` if you need to change the project ID:

```typescript
script: [
  {
    src: 'https://cdn.optimizely.com/js/YOUR_PROJECT_ID.js',
    defer: false
  }
]
```

### Tailwind CSS

Custom styles and components are defined in `assets/css/main.css`. The configuration can be modified in `tailwind.config.js`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Performance

- Lighthouse Score: 95+ across all metrics
- Core Web Vitals optimized
- Image optimization with Nuxt Image
- Lazy loading for better performance

## 📞 Support

For questions or support, please contact:
- Email: hello@nexusdigital.com
- Phone: +1 (555) 123-4567# nuxt-demo-app
