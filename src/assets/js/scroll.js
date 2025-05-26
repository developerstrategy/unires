// Configuración de Ukiyo para el parallax
const els = document.querySelectorAll(".ukiyo");
els.forEach((el) => {
  new Ukiyo(el);
});

// Inicializar Lenis
let lenis = new Lenis({
  smooth: true,
  lerp: 0.07, // Suavidad del scroll
  duration: 1.2, // Suavidad del scroll
  pinned: true,
  easing: (t) => t, // Curva de desplazamiento (lineal)
});

// Agregar la clase "scrolled" al body según la posición del scroll
lenis.on('scroll', () => {
  const currentScrollY = lenis.scroll;

  if (currentScrollY >= 250) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

// Función para cambiar el color del body cuando una div con clase .color-dark tiene al menos un 30% visible
function updateBodyColor() {
  const darkSections = document.querySelectorAll('.color-dark');
  const windowHeight = window.innerHeight;
  let colorChanged = false;

  if (darkSections.length === 0) {
    console.log('No se encontraron elementos con la clase color-dark');
    return;
  }

  darkSections.forEach((section) => {
    if (colorChanged) return;

    const rect = section.getBoundingClientRect();
    const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
    const totalHeight = section.offsetHeight;
    const visibilityRatio = visibleHeight / totalHeight;

    if (visibilityRatio >= 0.3) {
      if (!document.body.classList.contains('js-color-dark')) {
        document.body.classList.add('js-color-dark');
        console.log('Añadida clase js-color-dark - Ratio:', visibilityRatio);
      }
      colorChanged = true;
    } else {
      if (document.body.classList.contains('js-color-dark')) {
        document.body.classList.remove('js-color-dark');
        console.log('Removida clase js-color-dark - Ratio:', visibilityRatio);
      }
    }
  });
}

// Asegúrate de llamar a la función updateBodyColor en el evento de scroll
document.addEventListener('scroll', updateBodyColor);

function updateOpacity() {
  const sections = document.querySelectorAll('.fade-opacity');
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect(); // Obtiene las coordenadas del elemento

    // Calcular cuánto del elemento está visible en el viewport
    const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
    const totalHeight = section.offsetHeight;

    // Calcular la opacidad en base a la proporción de visibilidad
    const visibilityRatio = Math.max(0, Math.min(visibleHeight / totalHeight, 1));
    section.style.opacity = visibilityRatio; // Asignar opacidad (de 0 a 1)
  });
}

// Animar el scroll con Lenis (requestAnimationFrame)
function raf(time) {
  lenis.raf(time);
  updateOpacity(); // Actualiza la opacidad en cada frame
  updateBodyColor(); // Actualiza el color del body en cada frame
}

let isScrolling = false;

document.addEventListener('scroll', () => {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame((time) => {
      raf(time);
      isScrolling = false;
    });
  }
});

// Parallax effect
const parallaxImage = document.querySelector('.parallax-img');

lenis.on('scroll', ({ scroll }) => {
  // Parallax factor (ajústalo a gusto)
  const offset = scroll * 0.3;
  parallaxImage.style.transform = `translateY(${offset}px)`;
});
