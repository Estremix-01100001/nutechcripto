# 🚀 Guía para Desplegar en Hostgator

## 📁 Archivos a subir
Sube TODO el contenido de la carpeta `dist/` a tu hosting de Hostgator.

## 📂 Estructura de archivos
```
public_html/
├── index.html
├── robots.txt
├── sitemap.xml
├── .htaccess
├── _astro/
│   └── (archivos CSS y JS)
└── images/
    └── (todas las imágenes)
```

## 🔧 Configuración DNS en Hostgator

### 1. Acceder al Panel de Control
- Ve a: https://www.hostgator.com/my-account/hosting/details/sites/add
- Inicia sesión en tu cuenta

### 2. Configurar el Dominio
- Si tienes un dominio personalizado:
  - Ve a "DNS Zone Editor" o "Zona DNS"
  - Configura los siguientes registros:

```
Tipo: A
Nombre: @
Valor: [IP de tu servidor Hostgator]

Tipo: CNAME
Nombre: www
Valor: tu-dominio.com
```

### 3. Configuración de Subdominio (si usas subdominio)
- Ve a "Subdomains" en el panel de control
- Crea un subdominio (ej: landing.tu-dominio.com)
- Apunta a la carpeta `public_html`

## 📤 Métodos para Subir Archivos

### Opción 1: File Manager (Recomendado)
1. Ve a "File Manager" en el panel de Hostgator
2. Navega a `public_html/`
3. Sube todos los archivos de la carpeta `dist/`
4. Asegúrate de que `index.html` esté en la raíz

### Opción 2: FTP
1. Usa un cliente FTP como FileZilla
2. Conecta con las credenciales de Hostgator
3. Sube todo el contenido de `dist/` a `public_html/`

### Opción 3: ZIP Upload
1. Comprime la carpeta `dist/` en un ZIP
2. Sube el ZIP por File Manager
3. Extrae el contenido en `public_html/`

## ✅ Verificación Post-Despliegue

### 1. Verificar que funcione
- Visita tu dominio
- Verifica que todas las imágenes carguen
- Prueba la navegación y formularios

### 2. Verificar HTTPS
- Asegúrate de que el sitio cargue con HTTPS
- El archivo `.htaccess` incluye redirección automática

### 3. Verificar rendimiento
- Usa herramientas como GTmetrix o PageSpeed Insights
- Verifica que las imágenes se compriman correctamente

## 🔧 Configuraciones Adicionales

### SSL Certificate
- En Hostgator, ve a "SSL/TLS"
- Activa el certificado SSL gratuito
- Esto habilitará HTTPS automáticamente

### Cache
- El archivo `.htaccess` incluye configuración de caché
- Esto mejorará la velocidad de carga

### Seguridad
- El archivo `.htaccess` incluye headers de seguridad
- Esto protege tu sitio de ataques comunes

## 📞 Soporte
Si tienes problemas:
1. Verifica que todos los archivos estén en `public_html/`
2. Asegúrate de que `index.html` esté en la raíz
3. Verifica que el archivo `.htaccess` esté presente
4. Contacta al soporte de Hostgator si es necesario

## 🎯 URLs de Acceso
- Sitio principal: https://tu-dominio.com
- Con www: https://www.tu-dominio.com
- Subdominio: https://landing.tu-dominio.com (si configuraste uno)
