// Funcionamiento de los botones de next y back para el carrousel
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

// Selecciona todas las imágenes dentro del carrusel
let images = document.querySelectorAll(".gallery div img");

// Selecciona los elementos donde se mostrarán el título y la descripción
let imageTitle = document.getElementById("imageTitle");
let imageDescription = document.getElementById("imageDescription");

// Se añade un evento de clic a cada imagen
images.forEach(image => {
    image.addEventListener("click", function() {
        // Nos devuelve el título y la descripción de los atributos data
        let title = image.getAttribute("data-title");
        let description = image.getAttribute("data-description");

        // Actualiza el contenido del contenedor de información
        imageTitle.textContent = title;
        imageDescription.textContent = description;

        gallery.scrollIntoView({ behavior: 'smooth' });
});
});


// Declaracion de constantes para el funcionamiento del presupuesto
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("presupuesto-form");
    const producto = document.getElementById("producto");
    const plazo = document.getElementById("plazo");
    const extras = document.querySelectorAll("input[type='checkbox'][name^='extra']");
    const presupuestoOutput = document.getElementById("presupuesto");
// Operacion para dar con el presupuesto. Los valores de cada destino son valores fijos declarados en el index.
    formulario.addEventListener("input", function(event) {
        // Verifica si el evento proviene de los elementos que afectan el cálculo del presupuesto
        if (event.target.id === 'producto' || event.target.id === 'plazo' || event.target.name.startsWith('extra')) {
            let presupuesto = parseInt(producto.value) + (parseInt(plazo.value) * 10); // Precio base + $10 por cada mes
            extras.forEach(extra => {
                if (extra.checked) {
                    presupuesto += parseInt(extra.value);
                }
            });
            presupuestoOutput.textContent = "$" + presupuesto;
        }
    });
});
