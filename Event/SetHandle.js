// ----------------------------------------------------------------------------
// T�tulo:        SetHandle
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT = {
    /*
    *        Asigna una funci�n a un evento de un objeto
    *        @param:        object
    *        @param:        EVENT,
    *        @param:        string function (sin parentesis)
    *        NOTA: La funci�n que se asigna al evento, ha de ser funtion nombre(evt)
    */
    SetHandle:function( obj, eventName, functionName ){
            eval( "obj." + eventName + " = " + functionName );
    }
}

