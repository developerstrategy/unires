// Script para prevenir aria-label incorrectos en elementos de texto
document.addEventListener('DOMContentLoaded', function() {
  // Función para limpiar aria-label incorrectos
  function cleanIncorrectAriaLabels() {
    // Elementos que NO deberían tener aria-label
    const textElements = document.querySelectorAll('.js-appearText, .js-appearText2, span, div, p, h1, h2, h3, h4, h5, h6');
    
    textElements.forEach(el => {
      // Solo remover aria-label si el elemento no es interactivo
      if (el.hasAttribute('aria-label') && 
          !el.tagName.toLowerCase().match(/^(button|a|input|select|textarea)$/)) {
        el.removeAttribute('aria-label');
      }
    });
  }

  // Ejecutar inmediatamente
  cleanIncorrectAriaLabels();

  // Observar cambios en el DOM para limpiar aria-label que se añadan dinámicamente
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'aria-label') {
        const target = mutation.target;
        if (target.hasAttribute('aria-label') && 
            !target.tagName.toLowerCase().match(/^(button|a|input|select|textarea)$/)) {
          target.removeAttribute('aria-label');
        }
      }
    });
  });

  // Observar todo el documento
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['aria-label'],
    subtree: true
  });

  // También ejecutar periódicamente para asegurar limpieza
  setInterval(cleanIncorrectAriaLabels, 1000);
});
