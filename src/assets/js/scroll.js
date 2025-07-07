// Configuración de Ukiyo para el parallax con velocidad más leve
const els = document.querySelectorAll(".ukiyo");
els.forEach((el) => {
  new Ukiyo(el, { speed: 0.5 }); // Ajuste de velocidad para un efecto más leve
});

// Inicializar Lenis
let lenis = new Lenis({
  smooth: true,
  lerp: 0.1, // Suavidad del scroll
  duration: 1, // Suavidad del scroll
  easing: (t) => t, // Curva de desplazamiento (lineal)
});

console.log("Lenis inicializado");

// Agregar la clase "scrolled" al body según la posición del scroll
lenis.on('scroll', () => {
  const currentScrollY = lenis.scroll;

  if (currentScrollY >= 250) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

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
  requestAnimationFrame(raf);
}

// Inicializar el loop de animación
requestAnimationFrame(raf);

