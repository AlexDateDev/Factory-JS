<!DOCTYPE html>
<html>
    <head>
        <title>Validaciones</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript">

            function comenzar(){
                var prioridadAlFormulario = true;
                document.datos_usuario.addEventListener("invalid", validar, prioridadAlFormulario);
                document.getElementById("enviar").addEventListener("click", enviar, false);
            }
            function validar(err){
                var elemento = err.target;
                elemento.style.background = "#FFDDDD";
            }
            function enviar(){
                var correcto=document.datos_usuario.checkValidity();
                if( correcto){
                    document.datos_usuario.submit();
                }
            }
            window.addEventListener("load", comenzar, false);
        </script>

    </head>


    <body>
        <section>
            <form name="datos_usuario" id="datos_usuario" method="get" >
                Nombre: <input type="text" name="nombre" id="nombre" required /><br />
                Apellido: <input type="text" name="apellido" id="apellido"  required /><br />
                Email: <input type="email" name="email" /><br />
                <input type="submit" value="Enviar" id="enviar"/>
            </form>
        </section>

    </body>
</html>

