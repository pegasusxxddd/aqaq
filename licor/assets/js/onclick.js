
window.onload = function () {
    setInterval(() => {
        document.getElementById("recarga").style.display = "none";
    }, 1000);
}
//   document.addEventListener("DOMContentLoaded", function() {
//     setInterval(() => {
//         document.getElementById("recarga").remove();
//     }, 100000);
//   });
var si = document.getElementById("si");
var aga = document.getElementById("aga");
var recuerdo = document.getElementById("recuerdo");
si.onclick = function () {
    aga.play();
    recuerdo.style.display = "none";
}

var abrir_nv = document.getElementById("abrir_nv");
var navegador = document.getElementById("navegador");
var close_nv = document.getElementById("close_nv")
abrir_nv.onclick = function () {
    if (navegador.style.display === "" || navegador.style.display === "none") {
        navegador.style.display = "block";
        abrir_nv.classList.remove("fa-bars")
        abrir_nv.classList.add("fa-times")
    } else {
        navegador.style.display = "none";
        abrir_nv.classList.add("fa-bars")
        abrir_nv.classList.remove("fa-times")
    }
}

close_nv.onclick = function () {
    navegador.style.display = "none";
    abrir_nv.classList.add("fa-bars")
    abrir_nv.classList.remove("fa-times")
}

var whatsapp = document.getElementById("whatsapp");
var whatsapp_bri = document.getElementById("whatsapp_bri");

whatsapp.onclick = function () {
    whatsapp.style.display = "none";
    whatsapp_bri.style.display = "block";
    setInterval(() => {
        whatsapp_bri.style.display = "none";
        whatsapp.style.display = "block";
    }, 5000);
}


// Seleccionamos todos los elementos con la clase "login"
var loginElements = document.querySelectorAll('.login_md');

// Agregamos un evento de clic a cada elemento
loginElements.forEach(function (element) {
    element.addEventListener('click', function () {
        // Abrimos el modal con id "hola"
        document.getElementById('login').style.display = 'block';
    });
});

