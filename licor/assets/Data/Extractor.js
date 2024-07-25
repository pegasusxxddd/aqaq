
var Link_Online = "https://script.google.com/macros/s/AKfycbyBMawgX_V637jmIKHOIuduJzCNHmtGxPUdJSAkx23IeJsFSkM0jOJsy5ZjAltvE5vt/exec";

function SubirBtn() {
    var tipo_decarta = $("tipo_decarta").val();
    var Img_beb = $("#Img_beb").val();
    var precio_beb = $("#precio_beb").val();
    var nombre_beb = $("#nombre_beb").val();
    var info_beb = $("#info_beb").val();
    var Etiqueta = document.getElementById("anotes_simples").innerHTML;
    if (nombre_beb.trim() !== '' && Link_Online) {
        $.ajax({
            url: Link_Online,
            method: 'POST',
            data: {
                Img_beb: Img_beb,
                precio_beb: precio_beb,
                nombre_beb: nombre_beb,
                info_beb: info_beb,
                Etiqueta_beb: Etiqueta,
                tipo_decarta: tipo_decarta,
            },
            success: function (response) {
                $('#Img_beb').val('');
                $('#precio_beb').val('');
                $('#nombre_beb').val('');
                $('#info_beb').val('');
                // $('#Etiqueta').val('');
                alert('Agregado con éxito');
                mostrarAvances();
            },
            error: function (error) {
                console.error('Error al agregar: ', error);
            }
        });
    } else {
        alert('Por favor, seleccione un tablero y asegúrese de que la URL esté guardada antes de subir el botón.');
    }
}



// var Link_Online = "https://script.google.com/macros/s/AKfycbztHtNp1evhhA9mf7E-DW4YTS9LkzGTk9EoCIYsY_a9hmRhLHLaOgZhsgu4ifipR9obog/exec";

function mostrarAvances() {

    if (Link_Online) {
        $.ajax({
            url: Link_Online,
            method: 'GET',
            success: function (response) {
                var centro = $('#centro');
                var centroMejores = $('#centro_mejores');
                centro.empty();
                centroMejores.empty();

                var cardsData = [];

                response.forEach(function (Btns) {
                    const contenedor = document.createElement("div");
                    contenedor.className = "carta";
                    contenedor.dataset.calificacion = Btns.calificacion;

                    contenedor.innerHTML = `
                    <span id="precio_trago" class="precio_trago">${Btns.precio_beb}$</span>
                    <img src="${Btns.Img_beb}" class="Img_bebida" alt="">
                    <div class="btn">
                        <button class="nombre_trago"><span class="nombre">${Btns.nombre_beb}</span> <i class='bx bxs-right-arrow box'></i></button>
                        <span class="calificacion" style="display: none;">
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fa fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <span class="calculo">(${Btns.calificacion})</span>
                        </span>
                        <div class="info_trago" style="display: none;">
                            ${Btns.Etiqueta_beb}
                        </div>
                    </div>  
                    `;

                    if (Btns.tipo_decarta === 'combos') {
                        cardsData.push({
                            element: contenedor,
                            calificacion: Btns.calificacion
                        });
                        centro.append(contenedor);
                    }
                });

                // Ordenar las cartas por calificación de mayor a menor
                cardsData.sort((a, b) => b.calificacion - a.calificacion);

                // Agregar la clase "mejor" a las tres cartas con la mayor calificación y cambiar su estructura
                for (let i = 0; i < 3 && i < cardsData.length; i++) {
                    let mejorCarta = cardsData[i].element;
                    mejorCarta.classList.add('mejor');
                    mejorCarta.innerHTML = `
                        <span id="precio_trago" class="precio_trago">${cardsData[i].element.querySelector('.precio_trago').textContent}</span>
                        <img src="${cardsData[i].element.querySelector('.Img_bebida').src}" class="Img_bebida" alt="">
                        <div class="info">
                            <h2 class="nombre_trago">${cardsData[i].element.querySelector('.nombre_trago .nombre').textContent}</h2>
                            <ul class="info_trago" style="display: none;">
                                ${cardsData[i].element.querySelector('.info_trago').innerHTML}
                            </ul>
                            <span class="calificacion">
                                <div class="stars">
                                    ${cardsData[i].element.querySelector('.stars').innerHTML}
                                </div>
                                <span class="calculo">${cardsData[i].element.querySelector('.calculo').textContent}</span>
                            </span> 
                        </div>
                    `;
                    centroMejores.append(mejorCarta);
                }

                // Aquí se asignan los eventos de clic después de que se han creado las cartas
                var cards = document.querySelectorAll('.carta');
                cards.forEach(function (element) {
                    element.addEventListener('click', function () {
                        var nombre_bebida = document.getElementById("nombre_bebida");
                        var datos = document.getElementById("datos");
                        var precio = document.getElementById("precio");
                        var img_bebida = document.getElementById("img_bebida");
                        var stars_e = document.getElementById("stars");
                        var calculo_ = document.getElementById("calculo");

                        var nombre_trago = element.querySelector(".nombre_trago");
                        var info_trago = element.querySelectorAll(".info_trago li");
                        var precio_trago = element.querySelector(".precio_trago");
                        var Img_bebida = element.querySelector(".Img_bebida");
                        var stars = element.querySelectorAll(".stars i");
                        var calculo = element.querySelector(".calculo");

                        calculo_.textContent = calculo.textContent;


                        var carrito = document.getElementById("carrito");
                        carrito.classList.add("abrierto")

                        nombre_bebida.textContent = nombre_trago.textContent;
                        datos.innerHTML = '';
                        stars_e.innerHTML = '';
                        img_bebida.src = Img_bebida.src;

                        stars.forEach(function (is){
                            var newI = document.createElement("i");
                            is.classList.forEach(function (className) {
                                newI.classList.add(className);
                            });
                            stars_e.appendChild(newI);
                        });

                        info_trago.forEach(function (li) {
                            var newLi = document.createElement('li');
                            newLi.textContent = li.textContent;
                            datos.appendChild(newLi);
                        });

                        precio.textContent = precio_trago.textContent;
                    });
                });
            },
            error: function (error) {
                console.error('Error', error);
            }
        });
    } else {
        console.log('No hay una URL guardada en el localStorage.');
    }
}

$(document).ready(function () {
    mostrarAvances();
});

document.getElementById("comprar").addEventListener("click", function(event) {
    event.preventDefault();

    var nombre_bebida = document.getElementById("nombre_bebida").textContent;
    var datosElementos = document.querySelectorAll("#datos li");
    var datos = Array.from(datosElementos).map(li => `- _${li.textContent}_`).join("\n");
    var precio = document.getElementById("precio").textContent;
    var numeroWhatsApp = "916860297";
    var texto = `*╠══ ${nombre_bebida} ══╣*\n\n*Datos:*\n${datos}\n╔═════╗\n║ *${precio}*  ║\n╚═════╝\n\n\n https://daddy-liquors.netlify.app/`;
    var mensaje = encodeURIComponent(texto);
    var enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    window.open(enlaceWhatsApp, "_blank");
});
