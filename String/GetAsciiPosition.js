// ----------------------------------------------------------------------------
// GetAsciiPosition
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING=
{
/**
        * Devuelve el codigo ASCII de la posicion de un caracter. 0 es el primero
        *
        * @param {String}
        * @param {Int}
        * @return {Int}
        *        @version        1.0        -  04-01-2008
        */
        get_ascii_position:function(s,p)
        {
            return s.charCodeAt(p)
        }
}

