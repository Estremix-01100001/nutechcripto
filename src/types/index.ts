// Tipos para el sistema de cursos
export interface Course {
  id: number;
  title: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  levelColor: string;
  rating: number;
  description: string;
  duration: string;
  students: string;
  modality: 'En vivo' | 'On-demand' | 'Híbrido';
  features: string[];
  price: number;
  originalPrice: number;
}

// Tipos para testimonios
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  achievement: string;
  quote: string;
  tags: string[];
}

// Tipos para FAQ
export interface FAQCategory {
  id: string;
  name: string;
  active: boolean;
}

export interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

// Tipos para perfiles
export interface Profile {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  description: string;
  achievements: string[];
}

// Tipos para especialidades
export interface Specialization {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Tipos para instructores
export interface Instructor {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  description: string;
  expertise: string[];
  achievements: string[];
}

// Tipos para configuración
export interface SiteConfig {
  currency: string;
  currencySymbol: string;
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// Tipos para componentes reutilizables
export interface CardProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  price?: number;
  originalPrice?: number;
  buttonText?: string;
  buttonAction?: () => void;
  className?: string;
}

export interface BadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Tipos para filtros
export interface FilterOption {
  id: string;
  name: string;
  active: boolean;
}

// Tipos para animaciones
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  direction?: 'normal' | 'reverse' | 'alternate';
}
