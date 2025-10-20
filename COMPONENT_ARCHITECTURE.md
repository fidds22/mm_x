# 🏗️ Component Architecture - Manoela Madera Art Exhibition Portfolio

**Created:** October 19, 2025, 8:12 PM  
**Author:** Fidel Viera  
**Last Updated:** October 19, 2025, 8:12 PM

## 📋 Component Overview

This document outlines the component architecture, patterns, and implementation details for the artistic portfolio project.

## 🎯 Component Hierarchy

```
App (_app.js)
├── Navigation.js
├── Hero.js
├── About.js
├── Projects.js (🚧 In Development)
├── Contact.js (🚧 In Development)
└── Footer.js (🚧 In Development)
```

## 🧩 Component Details

### 1. Navigation.js
**Purpose:** Mobile-first navigation with hamburger menu

**Key Features:**
- Responsive hamburger menu
- Smooth scroll navigation
- Scroll-based styling changes
- GSAP-powered animations

**Props:** None (self-contained)

**State Management:**
- `isMenuOpen` - Controls mobile menu visibility
- `scrolled` - Tracks scroll position for styling

**Key Methods:**
- `toggleMenu()` - Opens/closes mobile menu
- `scrollToSection(sectionId)` - Smooth scroll to sections

**Styling Classes:**
- `nav-link` - Navigation link styling
- `intertwining-gold` - Logo text effect
- Dynamic background based on scroll position

### 2. Hero.js
**Purpose:** Main landing section with animated paint blobs

**Key Features:**
- Animated paint blobs with GSAP
- Intertwining text effects
- Call-to-action buttons
- Scroll indicator

**Props:** None (self-contained)

**State Management:**
- Multiple refs for animation targets
- GSAP context management

**Key Methods:**
- `scrollToAbout()` - Smooth scroll to about section
- GSAP animations for text and blobs

**Animation Elements:**
- Text entrance animations (staggered)
- Paint blob floating animations
- Rotation animations for blobs
- Scroll indicator bounce

**Styling Classes:**
- `intertwining-multi` - Multi-layer text effect
- `paint-blob` - Animated blob styling
- `section-bg` - Background gradients
- `btn-primary`, `btn-secondary` - CTA buttons

### 3. About.js
**Purpose:** Exhibition information and artistic details

**Key Features:**
- Scroll-triggered animations
- Skills grid with hover effects
- Exhibition details
- Animated visual elements

**Props:** None (self-contained)

**State Management:**
- Multiple refs for animation targets
- GSAP ScrollTrigger integration

**Key Methods:**
- ScrollTrigger animations for content reveal
- Skills grid stagger animations
- Visual circle rotations

**Animation Elements:**
- Content slide-in animations
- Skills grid stagger effects
- Rotating background circles
- Hover effects on skill cards

**Data Structure:**
```javascript
const skills = [
  {
    icon: <Component />,
    title: 'String',
    description: 'String',
    color: 'text-paint-color',
    bgColor: 'bg-paint-color/20'
  }
]
```

**Styling Classes:**
- `intertwining-subtle` - Subtle text effects
- `glass-card` - Glass morphism cards
- `skill-item` - Skills grid items
- `paint-drip` - Section transitions

### 4. Projects.js (🚧 In Development)
**Purpose:** Artwork gallery with filtering system

**Planned Features:**
- Artwork grid display
- Category filtering
- Image lazy loading
- Modal lightbox
- Responsive grid layout

**Planned Props:**
- `artworks` - Array of artwork data
- `categories` - Available filter categories

**Planned State:**
- `selectedCategory` - Active filter
- `selectedArtwork` - Modal content
- `isModalOpen` - Modal visibility

### 5. Contact.js (🚧 In Development)
**Purpose:** Contact information and form

**Planned Features:**
- Contact form with validation
- Social media links
- Exhibition venue information
- Form submission handling

**Planned Props:**
- `onSubmit` - Form submission handler
- `contactInfo` - Contact details

**Planned State:**
- `formData` - Form input values
- `isSubmitting` - Form submission state
- `errors` - Validation errors

### 6. Footer.js (🚧 In Development)
**Purpose:** Footer with additional information

**Planned Features:**
- Copyright information
- Social media links
- Additional navigation
- Exhibition credits

## 🎨 Design Patterns

### Animation Patterns
1. **ScrollTrigger Integration**
   - Content reveals on scroll
   - Staggered animations for lists
   - Performance-optimized triggers

2. **GSAP Context Management**
   - Scoped animation cleanup
   - Memory leak prevention
   - Proper context reversion

3. **Timeline Animations**
   - Complex sequence management
   - Easing function optimization
   - Cross-browser compatibility

### Styling Patterns
1. **Utility-First CSS**
   - Tailwind CSS classes
   - Custom component classes
   - Responsive design utilities

2. **Glass Morphism**
   - Backdrop blur effects
   - Semi-transparent backgrounds
   - Border styling

3. **Paint Effects**
   - Custom clip-path drips
   - Animated blob shapes
   - Color gradient combinations

### Component Patterns
1. **Functional Components**
   - Modern React patterns
   - Hooks integration
   - Performance optimization

2. **Ref Management**
   - Animation target references
   - DOM element access
   - Cleanup patterns

3. **Event Handling**
   - Scroll event listeners
   - Click handlers
   - Form submissions

## 🔧 Implementation Guidelines

### Component Structure
```javascript
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Component = () => {
  const componentRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animations
    }, componentRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={componentRef}>
      {/* Component content */}
    </section>
  );
};

export default Component;
```

### Animation Best Practices
1. **Performance Optimization**
   - Use transform and opacity for animations
   - Avoid animating layout properties
   - Implement proper cleanup

2. **Accessibility**
   - Respect prefers-reduced-motion
   - Provide alternative interactions
   - Ensure keyboard navigation

3. **Responsive Design**
   - Mobile-first animations
   - Touch-friendly interactions
   - Adaptive timing

### State Management
1. **Local State**
   - Component-specific state
   - useState for simple state
   - useRef for DOM references

2. **Animation State**
   - GSAP context management
   - Timeline control
   - Event cleanup

3. **Form State**
   - Controlled components
   - Validation state
   - Submission handling

## 🚀 Performance Considerations

### Animation Performance
- GPU-accelerated properties
- RequestAnimationFrame integration
- Efficient scroll listeners
- Memory management

### Component Performance
- React.memo for expensive components
- useCallback for event handlers
- useMemo for computed values
- Lazy loading for images

### Bundle Optimization
- Dynamic imports for heavy components
- Code splitting strategies
- Tree shaking optimization
- Asset optimization

## 🔄 Development Workflow

### Component Development
1. **Planning Phase**
   - Define component purpose
   - Identify required props
   - Plan animation sequences

2. **Implementation Phase**
   - Create component structure
   - Implement functionality
   - Add animations

3. **Testing Phase**
   - Cross-browser testing
   - Performance testing
   - Accessibility testing

4. **Optimization Phase**
   - Performance optimization
   - Code cleanup
   - Documentation updates

### Code Standards
- Consistent naming conventions
- Proper prop validation
- Clean, readable code
- Performance optimization
- Accessibility compliance

---

**Note:** This architecture document should be updated whenever new components are added or existing components are significantly modified.
