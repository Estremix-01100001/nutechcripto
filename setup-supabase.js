// Script para configurar Supabase automáticamente
import { createClient } from '@supabase/supabase-js'

// Configuración de Supabase
const supabaseUrl = 'https://efuwmoecotzumuczljdg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmdXdtb2Vjb3R6dW11Y3psamRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMzk4MDQsImV4cCI6MjA3MzYxNTgwNH0.o2gHsG0Va1OpQGa07iJy-zug0qiupw1V4VlS0Q51z6A'

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupSupabase() {
  console.log('🚀 Configurando Supabase...')
  
  try {
    // 1. Crear la tabla registros
    console.log('📊 Creando tabla registros...')
    const { data: tableData, error: tableError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS registros (
          id SERIAL PRIMARY KEY,
          nombre TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          telefono TEXT,
          pais TEXT NOT NULL,
          intereses TEXT[],
          experiencia TEXT NOT NULL,
          newsletter BOOLEAN DEFAULT false,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      `
    })
    
    if (tableError) {
      console.log('⚠️  La tabla ya existe o hay un error:', tableError.message)
    } else {
      console.log('✅ Tabla registros creada exitosamente')
    }
    
    // 2. Crear política de seguridad
    console.log('🔐 Creando política de seguridad...')
    const { data: policyData, error: policyError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE POLICY IF NOT EXISTS "Allow public insert" ON registros
        FOR INSERT WITH CHECK (true);
      `
    })
    
    if (policyError) {
      console.log('⚠️  La política ya existe o hay un error:', policyError.message)
    } else {
      console.log('✅ Política de seguridad creada exitosamente')
    }
    
    // 3. Verificar que todo funciona
    console.log('🔍 Verificando conexión...')
    const { data: testData, error: testError } = await supabase
      .from('registros')
      .select('count', { count: 'exact', head: true })
    
    if (testError) {
      console.log('❌ Error al verificar:', testError.message)
    } else {
      console.log('✅ Conexión exitosa! Registros actuales:', testData || 0)
    }
    
    console.log('🎉 ¡Configuración completada!')
    console.log('📝 Instrucciones manuales si el script falla:')
    console.log('1. Ve a Table Editor en Supabase')
    console.log('2. Crea una tabla llamada "registros"')
    console.log('3. Agrega las columnas: id, nombre, email, telefono, pais, intereses, experiencia, newsletter, created_at')
    console.log('4. Ve a Authentication > Policies')
    console.log('5. Crea una política "Allow public insert" para INSERT')
    
  } catch (error) {
    console.log('❌ Error:', error.message)
    console.log('📝 Instrucciones manuales:')
    console.log('1. Ve a Table Editor en Supabase')
    console.log('2. Crea una tabla llamada "registros"')
    console.log('3. Agrega las columnas: id, nombre, email, telefono, pais, intereses, experiencia, newsletter, created_at')
    console.log('4. Ve a Authentication > Policies')
    console.log('5. Crea una política "Allow public insert" para INSERT')
  }
}

// Ejecutar el script
setupSupabase()
