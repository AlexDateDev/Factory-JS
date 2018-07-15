// ----------------------------------------------------------------------------
// ToArray
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{

        /**
    *        Convierte un string en un array en funcion de un separador
    *        @param {String}
    *        @param {String}
    *        @return {Array}
    *        @version        1.0        -  04-01-2008
    */
        to_array : function(s, sSep)
    {
            return (""+s).split(sSep);
        },
}

