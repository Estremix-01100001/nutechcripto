// Constantes centralizadas para la aplicación
export const SITE_CONFIG = {
  name: 'Nutech Academy',
  description: 'Formación en IA aplicada para profesionales',
  currency: 'USD',
  currencySymbol: '$',
  contactEmail: 'info@nutechacademy.com',
  phone: '+1 (555) 123-4567',
  address: 'Silicon Valley, CA, USA'
} as const;

export const SOCIAL_MEDIA = {
  linkedin: 'https://linkedin.com/company/nutechacademy',
  twitter: 'https://twitter.com/nutechacademy',
  github: 'https://github.com/nutechacademy'
} as const;

export const PRICING = {
  defaultCurrency: 'USD',
  currencySymbol: '$',
  discountPercentage: 20,
  installmentMonths: 3,
  guaranteeDays: 30
} as const;

export const ANIMATIONS = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  }
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

export const COLORS = {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316', // orange-500
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12'
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  }
} as const;

export const COURSE_LEVELS = {
  beginner: {
    name: 'Principiante',
    color: 'bg-green-500',
    description: 'Perfecto para empezar tu carrera en IA'
  },
  intermediate: {
    name: 'Intermedio',
    color: 'bg-blue-500',
    description: 'Para profesionales con experiencia básica'
  },
  advanced: {
    name: 'Avanzado',
    color: 'bg-red-500',
    description: 'Para expertos que quieren especializarse'
  }
} as const;

export const MODALITIES = {
  live: {
    name: 'En vivo',
    description: 'Clases en tiempo real con instructores'
  },
  ondemand: {
    name: 'On-demand',
    description: 'Contenido grabado disponible 24/7'
  },
  hybrid: {
    name: 'Híbrido',
    description: 'Combinación de clases en vivo y contenido grabado'
  }
} as const;

export const FEATURES = {
  enableAnimations: true,
  enableTestimonialsCarousel: true,
  enableCourseFilters: true,
  enableReferralSystem: true,
  enableDarkMode: true
} as const;

export const SEO = {
  title: 'Nutech Academy - Formación en IA Aplicada',
  description: 'Aprende IA aplicada con casos reales. Programas prácticos que transforman tu carrera profesional.',
  keywords: ['IA', 'Inteligencia Artificial', 'Machine Learning', 'Data Science', 'Formación', 'Cursos'],
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
} as const;
