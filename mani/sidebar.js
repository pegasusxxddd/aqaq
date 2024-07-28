var closes = document.getElementById("close");
var ptn_pgx = document.getElementById("ptn_pgx");
closes.onclick = function () {
    if (ptn_pgx.style.display === "none" || ptn_pgx.style.display === " ") {
        ptn_pgx.style.display = "block";
        closes.innerHTML = '<i id="icon_bars" class="fa fa-times"></i>'
    } else {
        ptn_pgx.style.display = "none";
        closes.innerHTML = '<i id="icon_bars" class="fa fa-bars"></i>'
    }
}

document.querySelectorAll('.btn_pgx').forEach(button => {
    button.addEventListener('click', function () {

        ptn_pgx.style.display = "block"
        closes.innerHTML = '<i id="icon_bars" class="fa fa-times"></i>'
        let sectionToShow = this.getAttribute('data-section');
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(`.${sectionToShow}`).classList.add('active');
    });
});


var chats_ia = document.getElementById("chats_ia");
var chat_ia = document.getElementById("chat_ia");
var info_chat = document.getElementById("info_chat");

var chatUrls = {
    "Rubi": "https://www.blackbox.ai/agent/RBjEu6Rnq",
    "Profesor": "https://www.blackbox.ai/agent/Prof.PatosqxBNse",
    "Apa": "https://www.blackbox.ai/agent/PgxxrBamKC",
    "Buscador_Web": "https://www.blackbox.ai/agent/HTA8JnAiI"
};

chats_ia.onchange = function () {
    var selectedValue = chats_ia.value;
    if (chatUrls[selectedValue]) {
        chat_ia.style.display = "block";
        info_chat.style.display = "none";
        chat_ia.src = chatUrls[selectedValue];
    } else {
        chat_ia.src = "";
        chat_ia.style.display = "none";
        info_chat.style.display = "block";
    }
};


var as = document.getElementById("as");

as.onclick = function () {
    localStorage.clear()
}

