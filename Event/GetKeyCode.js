// ----------------------------------------------------------------------------
// Título:        GetKeyCode
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT = {
    // Devuelve el código del vento de teclado que se ejecuta
    GetKeyCode: function (evt) {
        return (evt.witch) ? evt.witch : evt.keyCode;
    }
}
