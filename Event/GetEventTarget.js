// ----------------------------------------------------------------------------
// T�tulo:        GetEventTarget
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT = {
    /*
    *        Devuelve el target standarizado apra todos los navegadores
    *        @param:        event
    *        @return: element
    */
    GetTarget:function(evt){
            return evt.target?evt.target:evt.srcElement;
    }
}

