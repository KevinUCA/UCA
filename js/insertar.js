function cambiarContenido(){
    var div = document.getElementById("miDiv");
    div.innerHTML ="<h1>Nuevo titulo hecho con innerHTML</h1><p>Contenido nuevo con innerHTML</p>;
}

function cambiarContenido2(){
    var div = document.getElementById("miDiv");
}

var nuevoTexto = document.createTextNode("h1");
nuevoTexto.textContent = "Titulo nuevo 2 hecho con createTextNode";

div.appendChild(nuevoTexto);

var Parrafo = document.createElement("p");
Parrafo.textContent = "Contenido nuevo con createTextNode";

div.appendChild(Parrafo);