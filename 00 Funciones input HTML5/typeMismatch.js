<!DOCTYPE html>
<html>
    <head>
        <title>Validaciones estados</title>
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
                debugger;
                var cuadro_email = document.getElementById("email");
                var correcto=document.datos_usuario.checkValidity();
                if( correcto){
                    document.datos_usuario.submit();
                }
                else if( cuadro_email.validity.typeMismatch){    /* valor campo incorecto */
                    alert("Formato emial incorrecto");
                }
            }
            window.addEventListener("load", comenzar, false);
        </script>

    </head>


    <body>
        <section>
            <form name="datos_usuario" id="datos_usuario" method="get" >
                Email:<input type="email" name="email" id="email"/>
                <input type="submit" value="Enviar" id="enviar"/>
            </form>
        </section>

    </body>
</html>

