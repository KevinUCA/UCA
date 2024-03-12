        function simularCGI() {
            // Simulación de datos enviados al servidor
            var datosEnviados = {
                usuario: "ejemplo",
                accion: "guardar",
                datos: "informacion importante"
            };

            // Simulación de solicitud al servidor (puedes realizar acciones más complejas aquí)
            // En un entorno real, deberías usar una solicitud AJAX hacia tu servidor.
            var respuestaDelServidor = simularProcesamientoEnServidor(datosEnviados);

            // Manejar la respuesta del servidor (simulada)
            document.getElementById('resultado').innerHTML = `<strong>Respuesta del servidor:</strong> ${respuestaDelServidor}`;
        }

        // Simulación de procesamiento en el servidor (puedes reemplazar esto con una solicitud AJAX real)
        function simularProcesamientoEnServidor(datos) {
            // Aquí podrías realizar operaciones del lado del servidor y devolver una respuesta
            return `Datos recibidos: ${JSON.stringify(datos)}`;
        }