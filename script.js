document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
    link.addEventListener("click", () => {
      // Espaço reservado para métricas de cliques, sem rastrear visitantes.
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (document.activeElement === link) link.blur();
    });
  });
});
