document.addEventListener("DOMContentLoaded", () => {
  const imagenPrincipal = document.getElementById("imagen-principal");
  const miniaturas = document.querySelectorAll(".rest-imagenes img");

  miniaturas.forEach(img => {
    img.addEventListener("click", () => {
      // Cambia la imagen grande
      imagenPrincipal.src = img.src;

      // Quita clase activa a todas
      miniaturas.forEach(i => i.classList.remove("activa"));

      // Marca la actual
      img.classList.add("activa");
    });
  });
});
