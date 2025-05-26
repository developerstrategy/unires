

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('barba-wrapper');
  const overlay = document.querySelector('.transition-overlay');

  barba.init({
    transitions: [
      {
        name: 'overlay-transition',
        beforeLeave() {
          // Muestra la capa de transición al inicio del cambio
          overlay.classList.remove('salida');
          overlay.classList.add('active');
        },
        leave(data) {
          // Realiza la animación de salida
          return gsap.to(data.current.container, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out'
          });
        },
        enter(data) {
          // Asegura que el nuevo contenedor esté oculto al principio
          gsap.set(data.next.container, { opacity: 0 });

          // Oculta la capa de transición después de la animación de entrada
          return gsap.to(data.next.container, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.in',
            onComplete: () => {
              overlay.classList.remove('active');
              overlay.classList.add('salida');
            }
          });
        },
        afterEnter() {
          // Restablecer el scroll al inicio
          window.scrollTo(0, 0);
        }
      }
    ]
  });
});
