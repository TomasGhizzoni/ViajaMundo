document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("presupuesto-form");
    const producto = document.getElementById("producto");
    const plazo = document.getElementById("plazo");
    const extras = document.querySelectorAll("input[type='checkbox']");
    const presupuestoOutput = document.getElementById("presupuesto");

    formulario.addEventListener("input", function() {
        let presupuesto = parseInt(producto.value) + (parseInt(plazo.value) * 10); // Precio base + $10 por cada mes
        extras.forEach(extra => {
            if (extra.checked) {
                presupuesto += parseInt(extra.value);
            }
        });
        presupuestoOutput.textContent = "$" + presupuesto;
    });
});