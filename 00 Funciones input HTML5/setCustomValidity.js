<!DOCTYPE html>
<html>
    <head>
        <title>Validaciones</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript">
            function comenzar(){
                var nombre = document.getElementById("nombre");
                var apellido = document.getElementById("apellido");

                nombre.addEventListener("input", validar, false );
                apellido.addEventListener("input", validar, false );
                validar();
            }
            function validar(){
                if(!nombre.value && !apellido.value ){
                    nombre.setCustomValidity("Introduce nombre o apellido");
                    nombre.style.background ="#FFDDDD";
                    apellido.style.background ="#FFDDDD";
                }
                else{
                    nombre.setCustomValidity("");
                    nombre.style.background ="#FFF";
                    apellido.style.background ="#FFF";
                }
            }
            window.addEventListener("load", comenzar, false);
        </script>

    </head>


    <body>
        <section>
            <form name="miformulario" id="miformulario" method="get" >
                Nombre: <input type="text" name="nombre" id="nombre" /><br />
                Apellido: <input type="text" name="apellido" id="apellido"  /><br />
                Edad: <input type="number" name="edad" min="1"  max="100" /><br />
                <input type="submit" value="Enviar"/>
            </form>
        </section>

    </body>
</html>

