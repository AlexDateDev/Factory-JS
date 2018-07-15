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
                document.datos_usuario.addEventListener("input", validar_tiempo_real, false); /* Escucha para cuando se entra algo en cualquier input del form */
            }
            function validar(err){
                var elemento = err.target;
                elemento.style.background = "#FFDDDD";
            }
            function validar_tiempo_real(e){
                var elemento = e.target;
                if( elemento.validity.valid){
                    elemento.style.background= "#FFF";
                }
                else{
                    elemento.style.background= "#FFDDDD";
                }
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
                Nombre: <input pattern="[A-Z]{3}" name="nombre" id="nombre" required /><br />
                Apellido: <input type="text" name="apellido" id="apellido"  required /><br />
                <input type="submit" value="Enviar" id="enviar"/>
            </form>
        </section>

    </body>
</html>

