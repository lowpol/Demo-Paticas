// CATALOGO DE MEDICAMENTOS

//VARIABLES
const catalogo = document.getElementById("productos-container");
const filtro = document.getElementById("filtro-tipo");

// Funcion para mostrar medicamentos
function mostrarMedicamentos(lista) {
  // animacion de fade out-in (suave)
  catalogo.style.opacity = "0";
  setTimeout(() => {
    catalogo.innerHTML = ""; // Limpia el contenedor

    if (lista.length === 0) {
      catalogo.innerHTML = "<p class='no-result'>No se encontraron medicamentos.</p>";
      catalogo.style.opacity = "1";
      return;
    }

    lista.forEach(med => {
      const card = document.createElement("div");
      card.classList.add("medicamento-card");

      //crearhtml para cada elemento de la lista
      card.innerHTML = `
        <img src="${med.imagen}" alt="${med.nombre}">
        <div class="info">
          <h3>${med.nombre}</h3>
          <span class="badge tipo-${med.tipo.toLowerCase().replace(/\s+/g, '-')}">${med.tipo}</span>
          <p>${med.descripcion}</p>
          <p class="precio">$${Number(med.precio).toFixed(2)}</p>
        </div>
      `;

      catalogo.appendChild(card);
    });

    // fade in
    catalogo.style.opacity = "1";
  }, 180); // tiempo del fade-out 
}

// Funcion para filtrar medicamentos
function filtrarMedicamentos() {
  const tipoSeleccionado = (filtro.value || "").trim().toLowerCase();

  if (!tipoSeleccionado || tipoSeleccionado === "todos") {   //mostrar todos los medicamentos
    mostrarMedicamentos(medicamentos);
    return;
  }

  const filtrados = medicamentos.filter(med =>
    (med.tipo || "").toLowerCase() === tipoSeleccionado  //comp a ver si es igual los strings
  );

  mostrarMedicamentos(filtrados);
}

// Inicializar pagina
document.addEventListener("DOMContentLoaded", () => {
  // render inicial
  mostrarMedicamentos(medicamentos);

  // evento filtro
  if (filtro) {
    filtro.addEventListener("change", filtrarMedicamentos);
  } else {
    console.warn("No se encontró el elemento #filtro-tipo en el DOM.");
  }
});
