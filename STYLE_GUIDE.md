# Style Guide - Manoela Madera Exhibition Website

**Created by:** Fidel Viera  
**Date:** December 19, 2024  
**Time:** 14:30

## 🎨 **Typography System**

### **Font Hierarchy**

#### **1. Display Font (Titles)**
- **Font Family:** Playfair Display
- **Usage:** Main titles, hero headings
- **Classes:** `font-display`
- **Example:** "MANOELA MADERA"

#### **2. Subtitle Font (Secondary Headings)**
- **Font Family:** Inter
- **Usage:** Subtitles, section headings, buttons
- **Classes:** `font-subtitle`
- **Example:** "Exposición Individual"

#### **3. Body Font (Content)**
- **Font Family:** Source Sans Pro
- **Usage:** Paragraphs, descriptions, general content
- **Classes:** `font-body`
- **Example:** Exhibition descriptions

### **Text Colors**

#### **Primary Colors**
- **White:** `text-white` - Main text, titles
- **Gray 300:** `text-gray-300` - Subtitles, secondary text
- **Gray 400:** `text-gray-400` - Body text, descriptions
- **Gold:** `text-paint-gold` - Accent text, highlights

#### **Accent Colors**
- **Pink:** `text-paint-pink` - Important highlights
- **Blue:** `text-paint-blue` - Secondary highlights
- **Green:** `text-paint-green` - Success states
- **Purple:** `text-paint-purple` - Special elements

## 🎨 **Color Palette**

### **Primary Colors**
```css
paint-pink: #ff1e56    /* Primary accent */
paint-blue: #00d9ff    /* Secondary accent */
paint-green: #7ed321   /* Success/positive */
paint-purple: #bd10e0  /* Special elements */
paint-orange: #f39c12  /* Warm accent */
paint-gold: #ffd700    /* Premium/highlight */
```

### **Neutral Colors**
```css
dark-900: #0a0a0a      /* Background */
dark-800: #1a1a1a      /* Cards/sections */
dark-700: #2a2a2a      /* Borders */
white: #ffffff         /* Primary text */
gray-300: #d1d5db     /* Secondary text */
gray-400: #9ca3af     /* Body text */
```

## 📐 **Spacing System**

### **Padding & Margins**
- **xs:** 0.5rem (8px)
- **sm:** 1rem (16px)
- **md:** 1.5rem (24px)
- **lg:** 2rem (32px)
- **xl:** 3rem (48px)
- **2xl:** 4rem (64px)

### **Component Spacing**
- **Section padding:** `py-20` (80px vertical)
- **Card padding:** `p-6` (24px all around)
- **Button padding:** `px-10 py-5` (40px horizontal, 20px vertical)

## 🎯 **Component Styles**

### **Buttons**

#### **Primary Button**
```css
.btn-primary {
  @apply bg-gradient-to-r from-paint-pink to-paint-blue;
  @apply px-8 py-4 rounded-full text-white font-semibold;
  @apply hover:scale-105 transition-transform duration-300 shadow-lg;
}
```

#### **Secondary Button**
```css
.btn-secondary {
  @apply border border-paint-blue px-8 py-4 rounded-full;
  @apply text-paint-blue hover:bg-paint-blue hover:text-white;
  @apply transition-all duration-300;
}
```

### **Cards**

#### **Glass Card**
```css
.glass-card {
  @apply bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl;
}
```

### **Navigation**

#### **Nav Link**
```css
.nav-link {
  @apply relative overflow-hidden transition-colors duration-300;
}

.nav-link::before {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-0.5;
  @apply bg-gradient-to-r from-paint-pink to-paint-blue;
  @apply transform -translate-x-full transition-transform duration-300;
}

.nav-link:hover::before {
  @apply translate-x-0;
}
```

## 📱 **Responsive Design**

### **Breakpoints**
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### **Typography Scale**
- **Mobile Titles:** `text-4xl md:text-6xl`
- **Desktop Titles:** `text-6xl md:text-8xl lg:text-9xl`
- **Mobile Body:** `text-base md:text-lg`
- **Desktop Body:** `text-lg md:text-xl lg:text-2xl`

## 🎨 **Visual Elements**

### **Paint Blobs**
- **Purpose:** Decorative floating elements
- **Animation:** Continuous rotation and floating
- **Colors:** All paint colors with opacity
- **Classes:** `paint-blob animate-float`

### **Paint Drips**
- **Purpose:** Section transitions
- **Colors:** Pink, blue, green, purple
- **Animation:** Drip effect on scroll
- **Classes:** `paint-drip drip-[color]`

## 🎯 **Usage Guidelines**

### **Do's**
- ✅ Use consistent spacing (multiples of 8px)
- ✅ Maintain color hierarchy (white > gray-300 > gray-400)
- ✅ Apply proper font families for each text type
- ✅ Use glass cards for content sections
- ✅ Apply hover effects consistently

### **Don'ts**
- ❌ Don't use gradient text (removed from design)
- ❌ Don't mix font families inappropriately
- ❌ Don't use colors outside the defined palette
- ❌ Don't break the spacing system
- ❌ Don't use excessive animations

## 🔧 **Implementation Notes**

### **CSS Classes**
All styles are implemented using Tailwind CSS with custom components in `globals.css`.

### **Font Loading**
Fonts are loaded via Google Fonts with proper preconnect optimization.

### **Performance**
- Fonts are loaded with `display=swap` for better performance
- Animations use CSS transforms for smooth performance
- Glass effects use backdrop-blur for modern appearance

---

**Last Updated:** December 19, 2024  
**Version:** 1.0  
**Status:** Active
