// ----------------------------------------------------------------------------
// T�tulo:        GetKeyCode
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT = {
    // Devuelve el c�digo del vento de teclado que se ejecuta
    GetKeyCode: function (evt) {
        return (evt.witch) ? evt.witch : evt.keyCode;
    }
}
