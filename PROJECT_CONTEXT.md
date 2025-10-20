# 🎨 Project Context - Manoela Madera Art Exhibition Portfolio

**Created:** October 19, 2025, 8:12 PM  
**Author:** Fidel Viera  
**Last Updated:** October 19, 2025, 8:12 PM

## 📋 Project Overview

This is a modern, artistic portfolio website for **Manoela Madera's individual art exhibition**. The project showcases paintings and wooden panels with vibrant color exploration, fluid lines, and organic gestures that evoke internal landscapes and collective energies.

### 🎯 Project Purpose
- **Primary Goal:** Create an immersive digital experience for an art exhibition
- **Target Audience:** Art enthusiasts, gallery visitors, potential collectors
- **Exhibition Theme:** Exploration of color and form as languages in movement
- **Artistic Focus:** Abstract contemporary art with ancestral and contemporary dialogue

## 🏗️ Project Structure

### Current Architecture
```
mm_x/
├── components/           # React components
│   ├── Navigation.js     # Mobile-first navigation with hamburger menu
│   ├── Hero.js          # Main landing with animated paint blobs
│   ├── About.js         # Exhibition information and details
│   ├── Projects.js      # Artwork gallery (to be implemented)
│   ├── Contact.js       # Contact information and form
│   └── Footer.js        # Footer component
├── pages/               # Next.js pages
│   ├── _app.js          # App wrapper with GSAP setup
│   └── index.js         # Main page
├── styles/              # Styling
│   └── globals.css      # Global styles and custom classes
├── public/              # Static assets
│   └── img/obras/       # Artwork images
└── Configuration files
```

## 🎨 Design System

### Color Palette
- **Primary Colors:**
  - Pink: `#ff1e56` (Paint Pink)
  - Blue: `#00d9ff` (Paint Blue) 
  - Green: `#7ed321` (Paint Green)
  - Purple: `#bd10e0` (Paint Purple)
  - Orange: `#f39c12` (Paint Orange)
  - Gold: `#ffd700` (Paint Gold)

### Typography
- **Display Font:** Playfair Display (serif) - for main titles
- **Subtitle Font:** Inter (sans-serif) - for subtitles and navigation
- **Body Font:** Source Sans Pro (sans-serif) - for content text

### Visual Effects
- **Paint Drips:** Organic transitions between sections
- **Animated Blobs:** Floating paint-like shapes
- **Intertwining Text:** Multi-layered text effects with color shifts
- **Glass Morphism:** Backdrop blur effects for cards

## ⚡ Technical Implementation

### Core Technologies
- **Framework:** Next.js 14 (React-based)
- **Styling:** Tailwind CSS + Custom CSS
- **Animations:** GSAP (GreenSock Animation Platform)
- **Icons:** Lucide React
- **Fonts:** Google Fonts

### Key Features Implemented
1. **Responsive Design:** Mobile-first approach
2. **Smooth Scrolling:** GSAP-powered section navigation
3. **Animated Elements:** Staggered animations on scroll
4. **Paint Effects:** Custom CSS clip-path drips
5. **Interactive Navigation:** Hamburger menu with smooth transitions

## 📱 Component Status

### ✅ Completed Components
- **Navigation.js:** Mobile hamburger menu with smooth scroll
- **Hero.js:** Animated landing section with paint blobs
- **About.js:** Exhibition details with animated skills grid
- **_app.js:** GSAP plugin registration and global setup

### 🚧 In Progress
- **Projects.js:** Artwork gallery (needs implementation)
- **Contact.js:** Contact form and information
- **Footer.js:** Footer component

### 📋 Pending Features
- Artwork gallery with filtering
- Contact form functionality
- Image optimization
- SEO optimization
- Performance optimization

## 🎭 Artistic Content

### Exhibition Details
- **Artist:** Manoela Madera
- **Type:** Individual Exhibition
- **Opening:** Thursday, October 24 at 7:00 PM
- **Venue:** Instituto de Subcultura
- **Theme:** Color and form as languages in movement

### Artwork Categories
1. **Paintings:** Wood-based works with color exploration
2. **Movement:** Fluid lines and organic gestures
3. **Symbolism:** Eyes, waves, circles, and portals as vocabulary
4. **Internal Landscapes:** Compositions evoking collective energies
5. **Contemplation:** Each piece as an object of energy
6. **Dialogue:** Balance between ancestral and contemporary

## 🔧 Development Notes

### GSAP Configuration
- ScrollTrigger plugin for scroll-based animations
- ScrollToPlugin for smooth section navigation
- Custom timing and easing functions
- Performance-optimized animations

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Performance Considerations
- Lazy loading for images
- Optimized animations
- Minimal bundle size
- Fast loading times

## 🚀 Deployment Ready Features

### Production Optimizations
- Next.js build optimization
- Image optimization
- CSS/JS minification
- Bundle splitting
- SEO meta tags

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Progressive enhancement

## 📝 Development Guidelines

### Code Standards
- Component-based architecture
- Consistent naming conventions
- Proper prop types
- Clean, readable code
- Performance optimization

### Git Workflow
- Frequent commits with descriptive messages
- Feature branches for new functionality
- Code reviews before merging
- Regular pushes to remote repository

## 🔄 Next Steps

### Immediate Tasks
1. Complete Projects.js component
2. Implement Contact.js functionality
3. Add Footer.js component
4. Optimize images and assets
5. Test responsive design

### Future Enhancements
1. Add more interactive elements
2. Implement advanced animations
3. Add accessibility features
4. Optimize for performance
5. Add analytics tracking

---

**Note:** This context file should be updated whenever significant changes are made to the project structure, components, or functionality.
