#!/bin/bash

echo "🚀 Iniciando deploy de Nutech Academy Landing Page..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en el directorio del proyecto."
    exit 1
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm ci

# Ejecutar build
echo "🔨 Construyendo proyecto..."
npm run build

# Verificar que el build fue exitoso
if [ ! -d "dist" ]; then
    echo "❌ Error: El build falló. No se generó la carpeta dist."
    exit 1
fi

echo "✅ Build completado exitosamente!"
echo "📁 Archivos generados en: dist/"
echo ""
echo "🌐 Opciones de deploy:"
echo "1. Vercel: vercel --prod"
echo "2. Netlify: netlify deploy --prod"
echo "3. GitHub Pages: Subir a repositorio y activar GitHub Pages"
echo "4. Servidor manual: Subir carpeta dist/ a tu servidor"
echo ""
echo "📖 Para más detalles, consulta DEPLOY.md"
