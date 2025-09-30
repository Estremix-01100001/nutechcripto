// Funciones globales para CTAs de la landing page

// Función para el CTA de transformación de carrera (Profiles)
function startTransformation() {
  // Navegar a la sección de cursos para que el usuario vea las opciones
  scrollToSection('cursos');
  
  // Efecto visual para destacar la sección
  setTimeout(() => {
    const coursesSection = document.getElementById('cursos');
    if (coursesSection) {
      coursesSection.style.transform = 'scale(1.02)';
      coursesSection.style.boxShadow = '0 0 30px rgba(249, 115, 22, 0.3)';
      coursesSection.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        coursesSection.style.transform = 'scale(1)';
        coursesSection.style.boxShadow = '';
      }, 2000);
    }
  }, 500);
}

// Función para el CTA de inversión (Investment)
function startInvestment() {
  // Navegar a la sección de inversión para mostrar las opciones
  scrollToSection('inversion');
  
  // Efecto visual para destacar la sección
  setTimeout(() => {
    const investmentSection = document.getElementById('inversion');
    if (investmentSection) {
      investmentSection.style.transform = 'scale(1.02)';
      investmentSection.style.boxShadow = '0 0 30px rgba(249, 115, 22, 0.3)';
      investmentSection.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        investmentSection.style.transform = 'scale(1)';
        investmentSection.style.boxShadow = '';
      }, 2000);
    }
  }, 500);
}

// Función para scroll a secciones (ya existente en Hero)
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
}

// Función para scroll a registro (Hero)
function scrollToRegistration() {
  scrollToSection('registro');
}

// Función para scroll a cursos (Hero)
function scrollToCourses() {
  scrollToSection('cursos');
}

// Hacer funciones globales
window.startTransformation = startTransformation;
window.startInvestment = startInvestment;
window.scrollToSection = scrollToSection;
window.scrollToRegistration = scrollToRegistration;
window.scrollToCourses = scrollToCourses;
