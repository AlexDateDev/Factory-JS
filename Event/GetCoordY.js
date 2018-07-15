// ----------------------------------------------------------------------------
// Título:        GetCoordY
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT =
{
        /*
     *        Función que devuelve la coordenada X del evento
     *  NOTA: No se puede definirt Event.prototype.getCoordX = function() porque Opera no lo soporta
     *
          * @param {Event}
         * @return {Int}
     */
        get_coord_y:function(e)
        {
        	var e = EVENT.Get(evt);
                if( e.y )
                {
                        return e.y;
                }
                if( e.pageY )
                {
                        return e.pageY;
                }
        },
}

