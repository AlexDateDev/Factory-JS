// ----------------------------------------------------------------------------
// Título:        GetKeyPress
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



var EVENT =
{
    /*
    *        Devuelve la tecla presionada
    *        @param:        event
    *        @return: string
    */
    GetKeyPress:function(evt)
    {
    	var e = EVENT.GetEvent(evt);
    	return EVENT.GetKeyCode(e);
    }
}

