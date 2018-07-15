<!DOCTYPE html>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>

        <p><img src="img1.jpg" /></p>

        <script type="text/javascript">
            function saludo(){
                alert("saludo");
            }
            var imagen = document.getElementsByTagName("img")[0];
            imagen.addEventListener("click", saludo, false);

            apellido.addEventListener("input", validar, false ); // Cada vez que se intoduce algo en el input

            window.addEventListener("load", comenzar, false ); // Al carga la página
            edad.addEventListener("change", cabiar_rango, false) // Cada vez que cambia
        </script>
    </body>
</html>

