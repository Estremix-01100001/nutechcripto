import type { FAQCategory, FAQItem } from '../types';

export const faqCategories: FAQCategory[] = [
  { id: 'all', name: 'Todas las preguntas', active: true },
  { id: 'courses', name: 'Sobre los cursos', active: false },
  { id: 'payments', name: 'Pagos y garantías', active: false },
  { id: 'certification', name: 'Certificación', active: false },
  { id: 'referrals', name: 'Programa de referidos', active: false }
];

export const faqItems: FAQItem[] = [
  {
    id: 1,
    category: 'courses',
    question: '¿Necesito experiencia previa en programación o IA?',
    answer: 'No necesitas experiencia previa. Nuestro programa está diseñado para principiantes y profesionales que quieren aprender IA aplicada desde cero. Te guiamos paso a paso.'
  },
  {
    id: 2,
    category: 'courses',
    question: '¿Las clases son en vivo o grabadas?',
    answer: 'Combinamos ambos formatos. Las clases principales son grabadas para que puedas verlas cuando quieras, pero también tenemos sesiones en vivo semanales para resolver dudas y hacer networking.'
  },
  {
    id: 3,
    category: 'courses',
    question: '¿Qué incluye la mentoría 1:1?',
    answer: 'La mentoría 1:1 incluye sesiones personalizadas con expertos en IA, revisión de tus proyectos, feedback detallado y plan de carrera personalizado. Son 4 sesiones de 1 hora cada una.'
  },
  {
    id: 4,
    category: 'certification',
    question: '¿El certificado tiene validez oficial?',
    answer: 'Nuestro certificado es verificable mediante blockchain y reconocido por empresas líderes en tecnología. Aunque no es un título universitario, tiene gran valor en el mercado laboral.'
  },
  {
    id: 5,
    category: 'payments',
    question: '¿Puedo pagar en cuotas?',
    answer: 'Sí, ofrecemos 3 cuotas sin interés con tarjetas participantes. También aceptamos transferencias bancarias y métodos de pago locales como Yape y Plin.'
  },
  {
    id: 6,
    category: 'payments',
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos tarjetas de crédito (Visa, Mastercard), transferencias bancarias, Yape, Plin y PayPal. Todos los pagos están protegidos con encriptación SSL de grado bancario.'
  },
  {
    id: 7,
    category: 'certification',
    question: '¿Cuánto tiempo tengo para completar el programa?',
    answer: 'Tienes acceso de por vida al contenido. Puedes completar el programa a tu ritmo, aunque recomendamos seguir el cronograma sugerido para obtener mejores resultados.'
  },
  {
    id: 8,
    category: 'referrals',
    question: '¿Cómo funciona el programa de referidos?',
    answer: 'Por cada amigo que se inscriba con tu código, recibes $100 de comisión. Tu amigo también obtiene un 10% de descuento. Es una forma de ganar mientras ayudas a otros.'
  },
  {
    id: 9,
    category: 'courses',
    question: '¿Qué pasa si no puedo asistir a una clase en vivo?',
    answer: 'Todas las clases en vivo se graban y quedan disponibles en la plataforma. Puedes verlas cuando quieras y también acceder a las grabaciones de sesiones anteriores.'
  },
  {
    id: 10,
    category: 'payments',
    question: '¿Ofrecen garantía de devolución?',
    answer: 'Sí, ofrecemos 30 días de garantía de devolución. Si no estás satisfecho con el programa, te devolvemos el 100% de tu dinero sin preguntas.'
  }
];
