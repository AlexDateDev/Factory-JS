// ----------------------------------------------------------------------------
// IndexOf
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2011
STRING=
{
/**
        * Devuelve la posicion de un substring o -1 si no lo contioene
        *
        * @param {String}
        * @param {String}
        * @return {Int | -1}
        *        @version        1.0        -  04-01-2008
        */
    get_index_of:function(s,sFind)
    {
        if(!Factory.String.IsString(s)){
            alert("Missing string");
        }
        return s.indexOf(""+sFind);
    }
}
