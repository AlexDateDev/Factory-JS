// ----------------------------------------------------------------------------
// T�tulo:        GetEvent
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT = {
    // Devuelve el evento que se ejecuta
    Get: function (evt) {
        return (evt) ? evt : window.event;
    }
}
