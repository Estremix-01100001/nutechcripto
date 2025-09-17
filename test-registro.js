// Test de registro con Supabase
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://efuwmoecotzumuczljdg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmdXdtb2Vjb3R6dW11Y3psamRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMzk4MDQsImV4cCI6MjA3MzYxNTgwNH0.o2gHsG0Va1OpQGa07iJy-zug0qiupw1V4VlS0Q51z6A'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testRegistro() {
  const testData = {
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    telefono: '+51 999 888 777',
    pais: 'PE',
    intereses: ['machine-learning', 'deep-learning'],
    experiencia: 'principiante',
    newsletter: true
  }

  try {
    const { data, error } = await supabase
      .from('registros')
      .insert([testData])
      .select()
    
    if (error) {
      console.log('❌ Error:', error.message)
      console.log('🔧 Detalles del error:', error)
    } else {
      console.log('✅ Registro exitoso!')
      console.log('📊 Datos insertados:', data)
    }
  } catch (err) {
    console.log('❌ Error de conexión:', err.message)
  }
}

testRegistro()
