function cambiarContenido(){
    var div = document.getElementById("miDiv");
    div.innerHTML ="<h1>Nuevo titulo hecho con innerHTML</h1><p>Contenido nuevo con innerHTML</p>";

    function cambiarContenido2(){
        var div = document.getElementById("miDiv");
    }
    
    var nuevoTexto = document.createTextNode("Titulo Nuevo 2 hecho con createTextNode");
    
    div.appendChild(nuevoTexto);
    
    var Parrafo = document.createElement("p");
    Parrafo.textContent = "Contenido nuevo con createTextNode";
    
    div.appendChild(Parrafo);

}

function pedirGalletas(){
    // simulamos una petición al servidor
    const pedido = "Galletas de vainilla";

    // creamos la respuesta
    const respuesta = "Tu pedido de " +pedido + "ha sido enviado;"

    //mostramos la respuesta al cliente
    const elementosRespuesta = document.getElementById("respuesta");
    elementosRespuesta.textContent = respuesta;
    elementosRespuesta.style.display="block";
}