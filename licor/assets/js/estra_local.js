var nombre_saludo = document.getElementById("nombre_saludo")

nombre_extraido = localStorage.getItem("nombre_completo");
nombre_saludo.textContent = nombre_extraido.split(" ")[0];

var user_i = document.getElementById("user_i")
var user_im = document.getElementById("user_im");
const img_extraido = localStorage.getItem('imagenUsuario');
user_im.src = img_extraido;

if (img_extraido === null || img_extraido === "") {
    user_i.style.display = "block";
    user_im.style.display = "none"
} else {
    // user_i.style.display = "none";
    user_im.style.display = "block"
}