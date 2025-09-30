// Utilidades esenciales para la aplicación
import type { Course, Testimonial, FAQItem } from '../types';

/**
 * Formatea un precio con la moneda especificada
 */
export function formatPrice(price: number, currency = 'USD', symbol = '$'): string {
  return `${symbol}${price.toLocaleString()}`;
}

/**
 * Calcula el descuento porcentual entre precio original y precio actual
 */
export function calculateDiscount(originalPrice: number, currentPrice: number): number {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}

/**
 * Filtra cursos por nivel
 */
export function filterCoursesByLevel(courses: Course[], level: string): Course[] {
  if (level === 'all') return courses;
  return courses.filter(course => course.level.toLowerCase() === level.toLowerCase());
}

/**
 * Filtra cursos por modalidad
 */
export function filterCoursesByModality(courses: Course[], modality: string): Course[] {
  if (modality === 'all') return courses;
  return courses.filter(course => course.modality.toLowerCase() === modality.toLowerCase());
}

/**
 * Filtra FAQ por categoría
 */
export function filterFAQByCategory(faqItems: FAQItem[], category: string): FAQItem[] {
  if (category === 'all') return faqItems;
  return faqItems.filter(item => item.category === category);
}

/**
 * Debounce function para optimizar búsquedas
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function para optimizar eventos
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}