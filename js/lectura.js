// Función para manejar el envío del formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Accede a los valores ingresados por el usuario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Aquí puedes realizar cualquier acción con los valores, como enviarlos a un servidor para autenticar al usuario
    console.log("Nombre de Usuario:", username);
    console.log("Contraseña:", password);
  
    // Puedes redirigir al usuario a otra página después de procesar el formulario
    window.location.href = "frames.html";
  });