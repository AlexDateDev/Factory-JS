// ----------------------------------------------------------------------------
// Título:        GetCoordX
//
// Fecha:         03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT =
{
        /*
        *        Función que devuelve la coordenada X del evento
        * No se puede definir Event.prototype.getCoordX = function() porque Opera no lo soporta
        *
        * @param {Event}
        * @return {Int}
        */
        get_coord_x:function(e)
        {
        	var e = EVENT.Get(evt);
                if( e.x )
                {
                        return this.e.x;
                }
                if( e.pageX )
                {
                        return e.pageX;
                }
        },
}
