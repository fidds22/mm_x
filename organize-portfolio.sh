#!/bin/bash

# 🔧 Script de Organización Automática
# Portfolio mm_x - Estructura Next.js

echo "🎨 Organizando Portfolio Automáticamente..."
echo "=========================================="

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

show_step() {
    echo -e "\n${BLUE}📋 $1${NC}"
}

show_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Verificar que estamos en la carpeta correcta
if [ ! -f "package.json" ]; then
    echo "❌ Error: No estás en la carpeta del proyecto (no se encuentra package.json)"
    echo "Ejecuta: cd /Users/igors_p3xy/Desktop/mm_x"
    exit 1
fi

show_step "Creando estructura de carpetas..."

# Crear carpetas si no existen
mkdir -p pages
mkdir -p components
mkdir -p styles
mkdir -p .github/workflows
mkdir -p public

show_success "Carpetas creadas"

show_step "Moviendo archivos a sus ubicaciones correctas..."

# Mover archivos de pages (solo si existen en la raíz)
if [ -f "_app.js" ]; then
    mv _app.js pages/ && echo "✅ _app.js → pages/"
fi

if [ -f "index.js" ]; then
    mv index.js pages/ && echo "✅ index.js → pages/"
fi

# Mover componentes
for component in About.js Contact.js Footer.js Hero.js Navigation.js Projects.js; do
    if [ -f "$component" ]; then
        mv "$component" components/ && echo "✅ $component → components/"
    fi
done

# Mover estilos
if [ -f "globals.css" ]; then
    mv globals.css styles/ && echo "✅ globals.css → styles/"
fi

# Eliminar archivos innecesarios
if [ -f "portfolio.html" ]; then
    rm portfolio.html && echo "🗑️  portfolio.html eliminado"
fi

# Crear .gitignore si no existe
if [ ! -f ".gitignore" ]; then
    cat > .gitignore << 'EOL'
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local

# Vercel
.vercel

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
Thumbs.db
EOL
    show_success ".gitignore creado"
fi

# Crear archivo de deploy para GitHub Actions
cat > .github/workflows/deploy.yml << 'EOL'
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
EOL

show_success "GitHub Actions configurado"

show_step "Verificando estructura final..."

echo ""
echo "📁 Estructura del proyecto:"
echo "=========================="
tree -I 'node_modules|.git' . 2>/dev/null || find . -type d -name node_modules -prune -o -name .git -prune -o -type f -print | sed 's|[^/]*/|- |g'

show_step "Verificando archivos en cada carpeta..."

echo ""
echo "📄 pages/:"
ls -la pages/ 2>/dev/null || echo "   (carpeta vacía o no existe)"

echo ""
echo "📄 components/:"
ls -la components/ 2>/dev/null || echo "   (carpeta vacía o no existe)"

echo ""
echo "📄 styles/:"
ls -la styles/ 2>/dev/null || echo "   (carpeta vacía o no existe)"

echo ""
echo -e "${GREEN}🎉 ¡Organización Completada!${NC}"
echo ""
echo "📋 Próximos pasos:"
echo "1. Ejecutar: npm run dev"
echo "2. Verificar que funciona en http://localhost:3000"
echo "3. Si funciona: git add . && git commit -m 'organize: Estructura Next.js' && git push"
echo ""
echo "🌐 Después hacer deploy en Vercel!"
