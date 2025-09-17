# 🚀 Configuración de Supabase + Hostgator

## 📋 Pasos para Configurar Supabase

### 1. Crear cuenta en Supabase
1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto

### 2. Configurar la base de datos
1. Ve a la sección "Table Editor"
2. Crea una nueva tabla llamada `registros` con la siguiente estructura:

```sql
CREATE TABLE registros (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  telefono VARCHAR(50),
  pais VARCHAR(100) NOT NULL,
  intereses TEXT[],
  experiencia VARCHAR(50) NOT NULL,
  newsletter BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Configurar políticas de seguridad
1. Ve a "Authentication" > "Policies"
2. Crea una política para permitir inserción:

```sql
CREATE POLICY "Allow public insert" ON registros
FOR INSERT WITH CHECK (true);
```

### 4. Obtener las credenciales
1. Ve a "Settings" > "API"
2. Copia:
   - **Project URL** (ej: https://your-project.supabase.co)
   - **anon public key** (ej: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)

### 5. Configurar variables de entorno
1. Crea un archivo `.env` en la raíz del proyecto
2. Agrega las credenciales:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🌐 Deploy en Hostgator

### 1. Preparar el proyecto para producción
```bash
npm run build
```

### 2. Subir archivos a Hostgator
1. Accede a tu cPanel de Hostgator
2. Ve a "File Manager"
3. Navega a `public_html`
4. Sube todos los archivos de la carpeta `dist/`

### 3. Configurar variables de entorno en Hostgator
1. En cPanel, ve a "Environment Variables"
2. Agrega las variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## ✅ Verificación

1. **Contador real**: Se actualiza con registros reales
2. **Base de datos**: Los registros se guardan en Supabase
3. **Hosting**: El sitio funciona en Hostgator

## 🔧 Troubleshooting

### Error de conexión a Supabase
- Verifica que las credenciales estén correctas
- Asegúrate de que las políticas de seguridad permitan inserción

### Error de build
- Ejecuta `npm run build` localmente primero
- Verifica que no haya errores de TypeScript

### Error de deploy
- Verifica que todos los archivos se subieron correctamente
- Asegúrate de que las variables de entorno estén configuradas

## 🎯 Beneficios de esta configuración

- **Contador real**: Se actualiza con registros reales
- **Base de datos**: Guarda todos los registros de usuarios
- **Escalable**: Puede manejar miles de registros
- **Gratis**: Hasta 50,000 registros/mes
- **Seguro**: Con políticas de seguridad
- **Fácil de mantener**: Panel de administración incluido
