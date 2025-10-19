# 🎨 Portfolio Artístico Moderno

Un portfolio personal moderno con efectos de pintura, animaciones GSAP y diseño responsivo inspirado en arte digital vibrante.

## ✨ Características

- 🎨 **Paleta de colores vibrante** basada en artwork original
- 🌊 **Efectos de "paint dripping"** entre secciones
- ⚡ **Animaciones GSAP fluidas** con ScrollTrigger
- 📱 **Completamente responsivo** con menú móvil
- 🔤 **Tipografías modernas** (Outfit, Inter, JetBrains Mono)
- 🎯 **Optimizado para rendimiento**
- 🌐 **SEO friendly**

## 🚀 Tecnologías

- **Framework:** Next.js 14
- **Estilos:** Tailwind CSS + CSS personalizado
- **Animaciones:** GSAP + ScrollTrigger
- **Iconos:** Lucide React
- **Fuentes:** Google Fonts (Outfit, Inter, JetBrains Mono)

## 📦 Instalación

1. **Clona el repositorio:**
```bash
git clone <tu-repo>
cd portfolio-artistico
```

2. **Instala las dependencias:**
```bash
npm install
# o
yarn install
```

3. **Ejecuta el servidor de desarrollo:**
```bash
npm run dev
# o
yarn dev
```

4. **Abre tu navegador en:**
```
http://localhost:3000
```

## 🎯 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run lint     # Linter
npm run export   # Exportar sitio estático
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.js`:
```javascript
colors: {
  paint: {
    pink: '#ff1e56',
    blue: '#00d9ff', 
    green: '#7ed321',
    purple: '#bd10e0',
    orange: '#f39c12',
    gold: '#ffd700',
  }
}
```

### Fuentes
Las fuentes se configuran en `styles/globals.css`:
- **Display:** Outfit (títulos y elementos destacados)
- **Body:** Inter (texto general)
- **Mono:** JetBrains Mono (código)

### Animaciones
Las animaciones GSAP están en cada componente. Principales configuraciones:
- **Hero:** Animaciones de entrada escalonadas
- **ScrollTrigger:** Activación basada en scroll
- **Paint Drips:** Efectos de transición entre secciones

## 📱 Componentes

### Estructura
```
components/
├── Navigation.js    # Navegación con menú móvil
├── Hero.js         # Sección principal con blobs animados
├── About.js        # Sobre mí con skills
├── Projects.js     # Portfolio con filtros
├── Contact.js      # Formulario y información de contacto
└── Footer.js       # Pie de página
```

### Características por componente

**Navigation:**
- Menú hamburguesa móvil
- Scroll suave entre secciones
- Indicador de scroll

**Hero:**
- Blobs de pintura animados
- Texto con gradientes animados
- Botones de llamada a la acción

**About:**
- Animación de skills con stagger
- Círculos animados de fondo
- Grid responsivo de habilidades

**Projects:**
- Sistema de filtros
- Cards con hover effects
- Badges de tecnologías

**Contact:**
- Formulario funcional
- Enlaces sociales animados
- Información de contacto

## 🔧 Configuración

### Variables de entorno
Crea un archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://tuportfolio.com
NEXT_PUBLIC_EMAIL_SERVICE=tu-servicio-de-email
```

### Despliegue
El proyecto está optimizado para despliegue en:
- **Vercel** (recomendado para Next.js)
- **Netlify** 
- **GitHub Pages** (usando `npm run export`)

## 📈 Performance

- ⚡ **Lazy loading** de componentes
- 🖼️ **Optimización de imágenes** con Next.js
- 📦 **Bundle splitting** automático
- 🗜️ **Compresión CSS/JS**

## 🎨 Efectos Especiales

### Paint Drips
Efectos CSS con `clip-path` para simular pintura goteando:
```css
.drip-pink {
  background: linear-gradient(180deg, #ff1e56 0%, #ff1e56 60%, transparent 100%);
  clip-path: polygon(/* formas orgánicas */);
}
```

### Blobs Animados
Formas orgánicas con `border-radius` animado:
```css
@keyframes blob {
  0%, 100% { border-radius: 50% 40% 60% 30%; }
  25% { border-radius: 40% 60% 30% 50%; }
  /* ... */
}
```

### Gradientes de Texto
Texto con gradientes animados:
```css
.gradient-text {
  background: linear-gradient(45deg, #ff1e56, #00d9ff, #7ed321);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease-in-out infinite;
}
```

## 🐛 Troubleshooting

### Problemas comunes:

1. **GSAP no funciona:**
   - Verifica que `gsap.registerPlugin(ScrollTrigger)` esté en `_app.js`
   - Asegúrate de que las importaciones sean correctas

2. **Tailwind no aplica estilos:**
   - Revisa que los paths estén correctos en `tailwind.config.js`
   - Reinicia el servidor de desarrollo

3. **Fuentes no cargan:**
   - Verifica las importaciones en `styles/globals.css`
   - Comprueba la conexión a Google Fonts

## 📄 Licencia

MIT License - puedes usar este código para tus propios proyectos.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**¡Hecho con ❤️ y mucho ☕!**