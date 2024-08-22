// Selecciona los botones por su ID
const an_encode = document.getElementById("a_encode");
const ruso_encode = document.getElementById("r_encode");

// Asigna las URLs de los archivos HTML que quieres abrir
const animal_encrURL = "encriptador1.html";
const ruso_encodeURL = "encriptador2.html";

// Añade eventos de clic a los botones
animal_encr.addEventListener("click", () => {
    window.location.href = animal_encrURL;
});

ruso_encode.addEventListener("click", () => {
    window.location.href = ruso_encodeURL;
});