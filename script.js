document.addEventListener("DOMContentLoaded", function () {
  // 1. Selecciona la sección que quieres animar
  const habilidadesSection = document.querySelector(".habilidades");

  // 2. Crea una función para manejar la intersección
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      // Si el elemento es visible en el viewport
      if (entry.isIntersecting) {
        // Añade la clase que contiene la animación
        entry.target.classList.add("in-square-top-left");

        // Deja de observar el elemento para que la animación no se repita
        observer.unobserve(entry.target);
      }
    });
  };

  // 3. Configura las opciones para el IntersectionObserver
  const options = {
    root: null, // Observa con respecto al viewport
    rootMargin: "0px",
    threshold: 0.1, // Dispara la animación cuando el 10% del elemento es visible
  };

  // 4. Crea el observador
  const observer = new IntersectionObserver(handleIntersect, options);

  // 5. Empieza a observar la sección
  observer.observe(habilidadesSection);
});