# 🚀 Guía de Deploy - Landing Page Nutech Academy

## ✅ Build Completado
El proyecto se ha construido exitosamente y está listo para deploy.

## 📁 Archivos Generados
- **Directorio de build:** `dist/`
- **Archivo principal:** `dist/index.html`
- **Assets:** `dist/_astro/` y `dist/images/`

## 🌐 Opciones de Deploy

### 1. Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy de producción
vercel --prod
```

### 2. Netlify
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy de producción
netlify deploy --prod
```

### 3. GitHub Pages
1. Subir el código a GitHub
2. Ir a Settings > Pages
3. Seleccionar "GitHub Actions" como fuente
4. Crear workflow en `.github/workflows/deploy.yml`

### 4. Deploy Manual
1. Subir la carpeta `dist/` a tu servidor web
2. Configurar el servidor para servir desde `/nutechcripto/`

## ⚙️ Configuración
- **Base path:** `/nutechcripto`
- **Framework:** Astro
- **Build command:** `npm run build`
- **Output directory:** `dist`

## 🔧 Variables de Entorno
Si usas Supabase, asegúrate de configurar:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 📱 Características Implementadas
- ✅ Diseño responsive
- ✅ Hover effects naranjas
- ✅ Animaciones suaves
- ✅ Formulario de registro
- ✅ Integración con Supabase
- ✅ Optimización de imágenes
- ✅ SEO optimizado

## 🎯 URL de Producción
Una vez desplegado, la landing page estará disponible en:
`https://tu-dominio.com/nutechcripto/`
