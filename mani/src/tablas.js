var tablas = document.getElementById("tablas");
var tableros = document.getElementById("tableros");

function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}
function colsemodal() {

    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

const close_modal = document.getElementById("close_modal");
const boton1 = document.getElementById('agregar_links1');
const boton2 = document.getElementById('agregar_links2');
const boton3 = document.getElementById('agregar_links3');

close_modal.addEventListener('click', colsemodal);
boton1.addEventListener('click', abrirModal);
boton2.addEventListener('click', abrirModal);
boton3.addEventListener('click', abrirModal);


function mostrarFavicon() {
    var urlInput = document.getElementById('Url').value;
    var faviconInput = document.getElementById('faviconInput');

    // Extraer el dominio de la URL
    var dominio = obtenerDominio(urlInput);

    // Construir la URL del favicon
    var faviconUrl = 'https://www.google.com/s2/favicons?domain=' + dominio;

    // Establecer el valor del campo de entrada del favicon
    faviconInput.value = faviconUrl;
}

function obtenerDominio(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}


function dalte1() {
    localStorage.removeItem("botones_tablero1");
    location.reload();
}

function dalte2() {
    localStorage.removeItem("botones_tablero2");
    location.reload();
}

function dalte3() {
    localStorage.removeItem("botones_tablero3");
    location.reload();
}

$(document).ready(function () {
    // Obtener el botón y el campo de entrada

    var guardarBtnTrb = $("#guardar_Link_Online_Trabajo");
    var linkInputTrb = $("#Link_Online_Trabajo");
    // Manejar el clic en el botón
    guardarBtnTrb.click(function () {
        // Obtener el valor del campo de entrada
        var linkValueTrb = linkInputTrb.val();

        // Verificar si el valor no está vacío
        if (linkValueTrb.trim() !== '') {
            // Guardar el valor en el localStorage
            localStorage.setItem('Link_Online_Trabajo', linkValueTrb);
            alert('Link coment guardado con éxito en el localStorage.');
        } else {
            alert('Por favor, ingrese un enlace antes de guardar.');
        }
    });
    
    var storedLinkTrb = localStorage.getItem('Link_Online_Trabajo');
    if (storedLinkTrb) {
        linkInputTrb.val(storedLinkTrb);
    }
});
