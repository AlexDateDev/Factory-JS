// ----------------------------------------------------------------------------
// Título:        KeyPressChange
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



var EVENT = {
    /*
    *  Función que cambia la/s tecla/s pulsadas por una determinada
    *  Capturo caracter y lo analizo
    *
    *  @param {string list}  Listado de caracteres a cambiar, el primero sera el que sustituya a los seleccionados
    *  @return {Bool} True o False si funciona correctamente o no.
    *  @example change_key_press ("/",".","-",.......)
    *
    */

    KeyPressChange: function( ){
        // -- Falta estanderizar
        if(window.event){
            keycode = window.event.keyCode;
        }
        for(var i=1, a=arguments.length;i<a; i++){
            if ( keycode == arguments[i].charCodeAt(0) ){
                window.event.keyCode=arguments[0].charCodeAt(0); //Primer argumento, por el que sustituyo
                return true;
            }
        }
        return false;
    }
}

