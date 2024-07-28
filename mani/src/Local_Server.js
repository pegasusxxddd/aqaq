$(document).ready(function () {
    // Cargar botones almacenados en el localStorage al iniciar
    cargarBotones();

    // Evento de clic en el botón "Agregar Btn"
    $("#Agregar").on("click", function () {
        // Obtener valores del modal
        var selectedTablero = $("#selec_tableros").val();
        var nombreBtn = $("#Nombre").val();
        var urlBtn = $("#Url").val();
        var colorBtn = $("#color").val();
        var colorBtnBac = $("#colorBtnBac").val();
        var Faviconsrc = $("#faviconInput").val();

        // Crear el contenedor div para el botón y el ícono de eliminar
        var contenedor = document.createElement("div");
        contenedor.className = "conternedora";
        contenedor.id = "btn_" + Date.now();  // Usar una marca de tiempo única como identificador

        var ImgIcon = document.createElement("img");
        ImgIcon.src = Faviconsrc;
        // Crear el botón con los valores dados
        var nuevoBtn = document.createElement("a");
        nuevoBtn.href = urlBtn;
        nuevoBtn.target = "_blank";
        nuevoBtn.className = "links";
        nuevoBtn.style.backgroundColor = colorBtnBac;
        nuevoBtn.style.color = colorBtn;
        nuevoBtn.textContent = nombreBtn;
        nuevoBtn.style.paddingLeft = '4px';
        nuevoBtn.style.width = '93%';
        nuevoBtn.style.right = '0';
        nuevoBtn.style.maxWidth = '100%';
        nuevoBtn.style.overflow = 'hidden';
        nuevoBtn.style.display = '-webkit-box';
        nuevoBtn.style.webkitBoxOrient = 'vertical';
        nuevoBtn.style.webkitLineClamp = '1';

        // Agregar el botón y el ícono de eliminar al contenedor
        contenedor.appendChild(ImgIcon);
        contenedor.appendChild(nuevoBtn);

        // Agregar el contenedor al tablero seleccionado
        $("#" + selectedTablero + " .btns_links").append(contenedor);

        // Guardar el botón en el localStorage
        guardarBoton(selectedTablero, contenedor.outerHTML);

        // Cerrar el modal (puedes ajustar esto según tu implementación)
        $("#modal").hide();
    });

    // Función para cargar botones almacenados en el localStorage
    function cargarBotones() {
        for (var i = 1; i <= 3; i++) {
            var storedButtons = JSON.parse(localStorage.getItem('botones_tablero' + i)) || [];
            for (var j = 0; j < storedButtons.length; j++) {
                var contenedor = document.createElement("div");
                contenedor.innerHTML = storedButtons[j];
                $("#" + 'tab' + i + " .btns_links").append(contenedor);
            }
        }
    }

    // Función para guardar un botón en el localStorage
    function guardarBoton(tablero, nuevoBtnHTML) {
        var storedButtons = JSON.parse(localStorage.getItem('botones_tablero' + tablero.slice(-1))) || [];
        storedButtons.push(nuevoBtnHTML);
        localStorage.setItem('botones_tablero' + tablero.slice(-1), JSON.stringify(storedButtons));
    }
});
