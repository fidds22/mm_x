# Component Examples - Style Guide Implementation

**Created by:** Fidel Viera  
**Date:** December 19, 2024  
**Time:** 14:35

## 🎨 **Typography Examples**

### **Main Title (Hero)**
```jsx
<h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-primary leading-tight">
  MANOELA MADERA
</h1>
```

### **Subtitle**
```jsx
<h2 className="text-2xl md:text-4xl lg:text-5xl font-subtitle text-secondary font-light">
  Exposición Individual
</h2>
```

### **Body Text**
```jsx
<p className="text-lg md:text-xl lg:text-2xl font-body text-body leading-relaxed">
  Una exploración del color y la forma como lenguajes en movimiento.
</p>
```

### **Accent Text**
```jsx
<span className="text-accent font-semibold">
  exposición individual
</span>
```

## 🎯 **Button Examples**

### **Primary Button**
```jsx
<button className="btn-primary font-subtitle text-lg px-10 py-5">
  Ver Obras
</button>
```

### **Secondary Button**
```jsx
<button className="btn-secondary font-subtitle text-lg px-10 py-5">
  Información de la Exposición
</button>
```

## 📦 **Card Examples**

### **Glass Card**
```jsx
<div className="glass-card p-8 rounded-2xl">
  <h3 className="text-3xl font-display text-primary mb-6">
    Detalles del Evento
  </h3>
  <p className="font-body text-body leading-relaxed">
    Contenido del evento...
  </p>
</div>
```

### **Info Card with Accent**
```jsx
<div className="bg-gradient-to-r from-paint-pink/10 to-paint-blue/10 p-6 rounded-xl border border-paint-pink/20">
  <h4 className="text-xl font-subtitle text-accent mb-3">
    Manoela Madera - Exposición Individual
  </h4>
  <p className="font-body text-body mb-4">
    Descripción del evento...
  </p>
</div>
```

## 🧭 **Navigation Examples**

### **Logo**
```jsx
<div className="text-2xl md:text-3xl font-bold font-display text-highlight cursor-pointer">
  MANOELA MADERA
</div>
```

### **Nav Link**
```jsx
<button className="nav-link text-white hover:text-paint-pink transition-colors font-medium">
  Exposición
</button>
```

## 📱 **Responsive Text Examples**

### **Mobile-First Typography**
```jsx
// Title that scales from mobile to desktop
<h1 className="text-4xl md:text-6xl lg:text-8xl font-display text-primary">
  MANOELA MADERA
</h1>

// Body text that scales appropriately
<p className="text-base md:text-lg lg:text-xl font-body text-body">
  Exhibition description...
</p>
```

## 🎨 **Color Usage Examples**

### **Text Hierarchy**
```jsx
// Primary text (white)
<h1 className="text-primary">Main Title</h1>

// Secondary text (gray-300)
<h2 className="text-secondary">Subtitle</h2>

// Body text (gray-400)
<p className="text-body">Description text</p>

// Accent text (pink)
<span className="text-accent">Important highlight</span>

// Highlight text (gold)
<div className="text-highlight">Premium content</div>
```

## 🔧 **Spacing Examples**

### **Section Spacing**
```jsx
<section className="py-20"> {/* 80px vertical padding */}
  <div className="container mx-auto px-6">
    {/* Content */}
  </div>
</section>
```

### **Card Spacing**
```jsx
<div className="glass-card p-6"> {/* 24px padding */}
  <h3 className="mb-4">Title</h3> {/* 16px margin bottom */}
  <p className="mb-2">Content</p> {/* 8px margin bottom */}
</div>
```

### **Button Spacing**
```jsx
<button className="px-10 py-5"> {/* 40px horizontal, 20px vertical */}
  Button Text
</button>
```

## 🎯 **Complete Component Example**

```jsx
// Hero Section with proper typography and spacing
<section className="min-h-screen flex items-center justify-center relative">
  <div className="text-center z-10 px-6 max-w-5xl mx-auto">
    {/* Main Title */}
    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-primary mb-6 leading-tight">
      MANOELA MADERA
    </h1>
    
    {/* Subtitle */}
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-subtitle text-secondary mb-8 font-light">
      Exposición Individual
    </h2>
    
    {/* Description */}
    <p className="text-lg md:text-xl lg:text-2xl font-body text-body max-w-3xl mx-auto mb-12 leading-relaxed">
      Una exploración del color y la forma como lenguajes en movimiento.
    </p>
    
    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button className="btn-primary font-subtitle text-lg px-10 py-5">
        Ver Obras
      </button>
      <button className="btn-secondary font-subtitle text-lg px-10 py-5">
        Información de la Exposición
      </button>
    </div>
  </div>
</section>
```

---

**Last Updated:** December 19, 2024  
**Version:** 1.0  
**Status:** Active
