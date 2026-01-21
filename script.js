let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloseleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioseleccionado = document.getElementById("precio");

//funcion que carga la info del item seleccionado
function cargar(item) {
    quitarbordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloseleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;



    precioseleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML
}
function quitarbordes() {
    var items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
        items[i].style.border = "none"
    }
}

function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarbordes();
}
document.addEventListener('input', e => {
  if (e.target.matches('#buscador')) {
    const valor = e.target.value.toLowerCase();

    document.querySelectorAll('.contenedor-foto, .serie, .descripcion, .precio').forEach(pape => {
      const texto = pape.textContent.toLowerCase();

      if (texto.includes(valor)) {
        pape.classList.remove('filtro');
      } else {
        pape.classList.add('filtro');
      }
    });
  }
});
function actualizarCantidad(evento, cambio) {
    evento.stopPropagation();

    const contador = evento.target.parentElement;
    const tarjeta = contador.closest(".contenedor-foto");

    const spanCantidad = contador.querySelector(".cantidad");
    const spanStock = tarjeta.querySelector(".stock");

    let cantidad = Number(spanCantidad.textContent);
    let stock = Number(spanStock.textContent);

    // ➕ SUMAR
    if (cambio === 1) {
        cantidad++;
        stock++;
    }

    // ➖ RESTAR
    if (cambio === -1) {
        if (cantidad === 0) return; // no permitir negativos

        cantidad--;
        stock--;
    }

    spanCantidad.textContent = cantidad;
    spanStock.textContent = stock;
}
const CODIGO_SECRETO = "admin123";
const URL_SECRETA = "https://jamb-mb.github.io/web-papeleria-cecytem/";

const inputBuscador = document.getElementById("buscador");

inputBuscador.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const texto = inputBuscador.value.trim();

        // 🔐 Código secreto
        if (texto === CODIGO_SECRETO) {
            window.location.href = URL_SECRETA;
        }
    }
});
if (texto === CODIGO_SECRETO) {
    inputBuscador.value = "";
    window.location.replace(URL_SECRETA);
}