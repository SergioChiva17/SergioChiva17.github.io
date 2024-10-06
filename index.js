var redesSociales = document.getElementById("redesSociales");
var inicio = document.getElementById("inicio");
var miembros = document.getElementById("miembros");
var ubicacion = document.getElementById("ubicacion");
var playlist = document.getElementById("playlist");
var eventos = document.getElementById("eventos");
var merchandising = document.getElementById("merchandising");
var contacto = document.getElementById("contacto");

document.getElementById("botonRedesSociales").addEventListener("click", function() {
    

    // Oculta todos los elementos primero
    inicio.style.display = "none";
    miembros.style.display = "none";
    ubicacion.style.display = "none";
    playlist.style.display = "none";
    eventos.style.display = "none";
    merchandising.style.display = "none";
    contacto.style.display = "none";

    // Muestra solo la parte de redes sociales
    if (redesSociales.style.display === "none" || redesSociales.style.display === "") {
        redesSociales.style.display = "block";
    } 
});

document.getElementById("botonMiembros").addEventListener("click", function() {


    // Oculta todos los elementos primero
    inicio.style.display = "none";
    redesSociales.style.display = "none";
    ubicacion.style.display = "none";
    playlist.style.display = "none";
    eventos.style.display = "none";
    merchandising.style.display = "none";
    contacto.style.display = "none";

    // Muestra solo la parte Miembros
    if (miembros.style.display === "none" || miembros.style.display === "") {
        miembros.style.display = "block";
    } 
});

document.getElementById("botonUbicacion").addEventListener("click", function() {


    // Oculta todos los elementos primero
    inicio.style.display = "none";
    redesSociales.style.display = "none";
    miembros.style.display = "none";
    playlist.style.display = "none";
    eventos.style.display = "none";
    merchandising.style.display = "none";
    contacto.style.display = "none";

    // Muestra solo la parte ubicacion
    if (ubicacion.style.display === "none" || ubicacion.style.display === "") {
        ubicacion.style.display = "block";
    } 
});

document.getElementById("botonPlaylist").addEventListener("click", function() {


    // Oculta todos los elementos primero
    inicio.style.display = "none";
    redesSociales.style.display = "none";
    miembros.style.display = "none";
    ubicacion.style.display = "none";
    eventos.style.display = "none";
    merchandising.style.display = "none";
    contacto.style.display = "none";

    // Muestra solo la parte playlist
    if (playlist.style.display === "none" || playlist.style.display === "") {
        playlist.style.display = "block";
    } 
});

document.getElementById("botonEventos").addEventListener("click", function() {


    // Oculta todos los elementos primero
    inicio.style.display = "none";
    redesSociales.style.display = "none";
    miembros.style.display = "none";
    ubicacion.style.display = "none";
    playlist.style.display = "none";
    merchandising.style.display = "none";
    contacto.style.display = "none";

    // Muestra solo la parte eventos
    if (eventos.style.display === "none" || eventos.style.display === "") {
        eventos.style.display = "block";
    } 
});

document.getElementById("botonMerchandising").addEventListener("click", function() {


    // Oculta todos los elementos primero
    inicio.style.display = "none";
    redesSociales.style.display = "none";
    miembros.style.display = "none";
    ubicacion.style.display = "none";
    playlist.style.display = "none";
    eventos.style.display = "none";
    contacto.style.display = "none";

    // Muestra solo la parte merch
    if (merchandising.style.display === "none" || merchandising.style.display === "") {
        merchandising.style.display = "block";
    } 
});

document.getElementById("botonContacto").addEventListener("click", function() {


    // Oculta todos los elementos primero
    inicio.style.display = "none";
    redesSociales.style.display = "none";
    miembros.style.display = "none";
    ubicacion.style.display = "none";
    playlist.style.display = "none";
    eventos.style.display = "none";
    merchandising.style.display = "none";

    // Muestra solo la parte contacto
    if (contacto.style.display === "none" || contacto.style.display === "") {
        contacto.style.display = "block";
    } 
});