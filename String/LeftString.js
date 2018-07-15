// ----------------------------------------------------------------------------
// LeftString
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{
/**
    * Devuelve la parte de la IZQUIERDA de un string hasta un separador
    *        Sensitivo a mayusculas y minusculas
    *        Cuidado: falla con "\\"
        *        Acepta como delimitador un numero o un string.
    *        Un valor numerico negativo => empieza a contar desde la derecha i devuelve la parte izquieda
    *
    * @param        {String} String al que obtener los caracteres
    * @param         {String} String hasta el que buscar
        * @return        {String}
        *        @version        1.0        -  04-01-2008
    */
        get_left_str:function( b, s )
        {
                if(b.indexOf(s)==-1)
                {
                        return "";
                }
                else
                {
                return(b.substring(0,b.indexOf(s)));
                }
    },
}

