import cipher from './ruso.js';

// Selectores
const txtMsg = document.getElementById("textoSecreto");
const count = document.getElementById("counter");
const offset = document.getElementById("claveSecreta");
const btnCipher = document.getElementById("botonCifrar");
const btnDecipher = document.getElementById("botonDescifrar");
const lblMsgResult = document.getElementById("etiquetaResultado");
const txtMsgResult = document.getElementById("textoResultado");
const btnCopy = document.getElementById("botonCopiar");
const modalC = document.getElementsByClassName("contenedorModal")[0];
const modal = document.getElementsByClassName("modal")[0];
const close = document.getElementById("cerrar");

// Eventos
/* Limitar caracteres */
txtMsg.addEventListener("keyup", () => {
    count.innerHTML = txtMsg.value.length + "/280";    
});

/* Función para cifrar */
btnCipher.addEventListener("click", () => {
    if (txtMsg.value == "") {
        alert("Ingresa tu mensaje secreto.");
    } else if (offset.value == "") {
        alert("No olvides ingresar tu clave secreta.");
    } else {
        lblMsgResult.innerHTML = "El mensaje secreto es...";
        let msgResult = cipher.encode(parseInt(offset.value), txtMsg.value);
        txtMsgResult.innerHTML = msgResult;
        abrirModal();
    }
});

/* Función para descifrar */
btnDecipher.addEventListener("click", () => {
    if (txtMsg.value == "") {
        alert("Ingresa tu mensaje secreto.");
    } else if (offset.value == "") {
        alert("Sin clave no hay secreto...");
    } else {
        lblMsgResult.innerHTML = "Lo que te quería decir es...";
        let msgResult = cipher.decode(parseInt(offset.value), txtMsg.value);
        txtMsgResult.innerHTML = msgResult;
        abrirModal();
    }
});

/* Copiar mensaje cifrado o descifrado */
btnCopy.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(txtMsgResult.value);
        btnCopy.textContent = "Copiado!";
    } catch (err) {
        console.error("Error al copiar al portapapeles: ", err);
    }
});

/* Eventos del modal */
close.addEventListener("click", () => {
    cerrarModal();
});

window.addEventListener("click", (e) => {
    if (e.target == modalC) {
        cerrarModal();
    }
});

/********Funciones */
function abrirModal() {
    modalC.classList.remove("cerrado");
    modal.classList.remove("oculto");
}

function cerrarModal() {
    modal.classList.add("oculto");
    limpiarMensaje();
    setTimeout(() => {
        btnCopy.innerHTML = "<i class='fas fa-copy'></i> Copiar";
        modalC.classList.add("cerrado");
    }, 550);
}

function limpiarMensaje() {
    txtMsg.value = "";
    txtMsgResult.innerHTML = ""; // Corregido
    count.innerHTML = "0/280";
}
