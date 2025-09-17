import { createClient } from '@supabase/supabase-js'

// Configuración de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://efuwmoecotzumuczljdg.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmdXdtb2Vjb3R6dW11Y3psamRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMzk4MDQsImV4cCI6MjA3MzYxNTgwNH0.o2gHsG0Va1OpQGa07iJy-zug0qiupw1V4VlS0Q51z6A'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Tipos para TypeScript
export interface Registro {
  id?: number
  nombre: string
  email: string
  telefono?: string
  pais: string
  intereses: string[]
  experiencia: string
  newsletter: boolean
  created_at?: string
}

// Función para obtener el contador de registros
export async function getContadorRegistros(): Promise<number> {
  try {
    const { count, error } = await supabase
      .from('registros')
      .select('*', { count: 'exact', head: true })
    
    if (error) {
      console.error('Error al obtener contador:', error)
      return 0 // Número por defecto
    }
    
    return count || 0
  } catch (error) {
    console.error('Error al conectar con Supabase:', error)
    return 0
  }
}

// Función para crear un nuevo registro
export async function crearRegistro(registro: Registro): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase
      .from('registros')
      .insert([registro])
      .select()
    
    if (error) {
      console.error('Error al crear registro:', error)
      return { success: false, error: error.message }
    }
    
    return { success: true }
  } catch (error) {
    console.error('Error al conectar con Supabase:', error)
    return { success: false, error: 'Error de conexión' }
  }
}
