// Script para arreglar la política de seguridad
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://efuwmoecotzumuczljdg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmdXdtb2Vjb3R6dW11Y3psamRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMzk4MDQsImV4cCI6MjA3MzYxNTgwNH0.o2gHsG0Va1OpQGa07iJy-zug0qiupw1V4VlS0Q51z6A'

const supabase = createClient(supabaseUrl, supabaseKey)

async function fixPolicy() {
  console.log('🔧 Intentando arreglar la política de seguridad...')
  
  try {
    // Intentar crear una política más permisiva
    const { data, error } = await supabase.rpc('exec_sql', {
      sql: `
        -- Eliminar política existente si existe
        DROP POLICY IF EXISTS "Allow public insert" ON registros;
        
        -- Crear nueva política más permisiva
        CREATE POLICY "Allow all operations" ON registros
        FOR ALL
        TO public
        WITH CHECK (true);
      `
    })
    
    if (error) {
      console.log('❌ Error al crear política:', error.message)
      console.log('📝 Necesitas hacer esto manualmente en Supabase:')
      console.log('1. Ve a Authentication > Policies')
      console.log('2. Selecciona la tabla "registros"')
      console.log('3. Elimina la política "Allow public insert"')
      console.log('4. Crea una nueva política:')
      console.log('   - Name: "Allow all operations"')
      console.log('   - Operation: "ALL"')
      console.log('   - Target roles: "public"')
      console.log('   - Policy definition: "true"')
    } else {
      console.log('✅ Política creada exitosamente')
    }
  } catch (err) {
    console.log('❌ Error:', err.message)
    console.log('📝 Necesitas hacer esto manualmente en Supabase:')
    console.log('1. Ve a Authentication > Policies')
    console.log('2. Selecciona la tabla "registros"')
    console.log('3. Elimina la política "Allow public insert"')
    console.log('4. Crea una nueva política:')
    console.log('   - Name: "Allow all operations"')
    console.log('   - Operation: "ALL"')
    console.log('   - Target roles: "public"')
    console.log('   - Policy definition: "true"')
  }
}

fixPolicy()
