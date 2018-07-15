// ----------------------------------------------------------------------------
// Título:        SetHandle
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT = {
    /*
    *        Asigna una función a un evento de un objeto
    *        @param:        object
    *        @param:        EVENT,
    *        @param:        string function (sin parentesis)
    *        NOTA: La función que se asigna al evento, ha de ser funtion nombre(evt)
    */
    SetHandle:function( obj, eventName, functionName ){
            eval( "obj." + eventName + " = " + functionName );
    }
}

