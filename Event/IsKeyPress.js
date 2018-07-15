// ----------------------------------------------------------------------------
// T�tulo:        IsKeyPress
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT = {
    /*
    *        Indica si se ha presionado una tecla determianda
    *        @param:        event
    *        @param:        KEY
    *        @return: bool
    */
    isKeyPress:function(evt,key){
    	var e = EVENT.Get(evt);
    	var c = EVENT.GetKeyCode(e);
        return c==key;
    }
}

