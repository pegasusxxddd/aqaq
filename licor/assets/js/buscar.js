var cartas_recomendadas = document.getElementById("cartas_recomendadas");
var close_calificar_md = document.getElementById("close_calificar_md");
var calificar_md = document.getElementById("calificar_md");
close_calificar_md.onclick = function(){
    calificar_md.style.display = "none";
}
var buscador_card = document.getElementById("buscador_card");
var comentario = document.getElementById("comentario");
buscador_card.onclick = function(){
    cartas_recomendadas.style.display = "block";
    comentario.style.display = "block";
}

if (buscador_card.value === "" || buscador_card.value === "null") {
    comentario.style.display = "none";
} else {
    comentario.style.display = "block";
}


document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador_card")) {
        comentario.style.display = "block";
        if (e.key === "Escape") e.target.value = ""
        
        document.querySelectorAll(".option_remd").forEach(fruta => {
            
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? fruta.classList.remove("filtro-shar")
            : fruta.classList.add("filtro-shar")
        })

    }

})

document.querySelectorAll(".option_remd").forEach(card_rmd => {
    card_rmd.onclick = function(){
        var nombre_rmd = card_rmd.querySelector(".nombre_rmd");
        var buscador_card = document.getElementById("buscador_card");
        buscador_card.value = nombre_rmd.textContent;
        cartas_recomendadas.style.display = "none";
    }
});

const estrellas = document.querySelectorAll('#estrellas i');
    const texto = document.getElementById('texto');
    var carita = document.getElementById("carita");
    var reaccion = document.getElementById("reaccion");
    const estrellasData = {
        "1": {
            reaccion: "😒",
            comentario: "Na"
        },
        "2": {
            reaccion: "😐",
            comentario: "Ummm"
        },
        "3": {
            reaccion: "😊",
            comentario: "Rico"
        },
        "4": {
            reaccion: "😎",
            comentario: "Riquisimo"
        },
        "5": {
            reaccion: "😋",
            comentario: "Riquishishishimo"
        }
    };

    estrellas.forEach(estrella => {
        estrella.addEventListener('click', () => {
            const value = estrella.getAttribute('data-value');

            estrellas.forEach(star => {
                star.classList.remove('filled');
                if (star.getAttribute('data-value') <= value) {
                    star.classList.remove('fa-regular');
                    star.classList.add('fa-solid', 'filled');
                } else {
                    star.classList.remove('fa-solid', 'filled');
                    star.classList.add('fa-regular');
                }
            });

            carita.textContent = estrellasData[value].reaccion;
            reaccion.textContent = estrellasData[value].comentario
        });
    });