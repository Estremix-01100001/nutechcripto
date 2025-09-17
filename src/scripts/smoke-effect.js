/**
 * Efecto de partículas como humo para elementos interactivos
 * Sistema modular para aplicar efectos de humo a diferentes componentes
 */

export class SmokeEffect {
  constructor(particleCount = 8, animationDuration = 2000, colorTheme = 'orange') {
    this.particleCount = particleCount;
    this.animationDuration = animationDuration;
    this.colorTheme = colorTheme;
  }

  /**
   * Aplica el efecto de humo a un elemento específico
   * @param element - El elemento HTML al que aplicar el efecto
   * @param clickPosition - Posición del clic (opcional)
   */
  createSmokeEffect(element, clickPosition) {
    // Crear contenedor de partículas
    const smokeContainer = document.createElement('div');
    smokeContainer.className = `smoke-effect ${this.colorTheme}`;
    element.appendChild(smokeContainer);

    // Crear partículas
    for (let i = 0; i < this.particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Posición aleatoria o basada en el clic
      const x = clickPosition ? 
        (clickPosition.x / element.offsetWidth) * 100 : 
        Math.random() * 100;
      const y = clickPosition ? 
        (clickPosition.y / element.offsetHeight) * 100 : 
        80 + Math.random() * 20;

      particle.style.left = x + '%';
      particle.style.top = y + '%';
      particle.style.width = (10 + Math.random() * 20) + 'px';
      particle.style.height = particle.style.width;

      smokeContainer.appendChild(particle);
    }

    // Limpiar después de la animación
    setTimeout(() => {
      if (smokeContainer.parentNode) {
        smokeContainer.parentNode.removeChild(smokeContainer);
      }
    }, this.animationDuration);
  }

  /**
   * Aplica el efecto a múltiples elementos con un selector
   * @param selector - Selector CSS para los elementos
   * @param eventType - Tipo de evento (click, hover, etc.)
   */
  attachToElements(selector, eventType = 'click') {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      element.addEventListener(eventType, (e) => {
        e.preventDefault();
        
        // Obtener posición del clic si es un evento de mouse
        let clickPosition;
        if (e instanceof MouseEvent) {
          const rect = element.getBoundingClientRect();
          clickPosition = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          };
        }

        this.createSmokeEffect(element, clickPosition);
      });
    });
  }
}

/**
 * Función helper para inicializar el efecto de humo
 * @param selector - Selector CSS para los elementos
 * @param options - Opciones de configuración
 */
export function initSmokeEffect(selector, options = {}) {
  const {
    particleCount = 8,
    animationDuration = 2000,
    colorTheme = 'orange',
    eventType = 'click'
  } = options;

  const smokeEffect = new SmokeEffect(particleCount, animationDuration, colorTheme);
  smokeEffect.attachToElements(selector, eventType);
}

// Auto-inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Aplicar a las cards de cursos por defecto
  initSmokeEffect('.course-card', {
    particleCount: 8,
    animationDuration: 2000,
    colorTheme: 'orange',
    eventType: 'click'
  });
});
