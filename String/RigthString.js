// ----------------------------------------------------------------------------
// RigthString
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2011
STRING =
{
/**
    *        Devuelve la parte de la DERECHA de un string hasta un separador
    *   empezando a contar desda la izquierda
    *        Sensitivo a mayusculas y minusculas
    *        Cuidadoi: falla con "\\"
    *        Acepta como delimitador un numero o un string.
    *
    *   @param        {String} String al que obtener los caracteres
    *   @param         {String} String hasta el que buscar
    *   @return {String}
    *        @version        1.0        -  04-01-2008
    */
        get_right_str:function( strBase, separator )
    {
            if(strBase.indexOf(separator) == -1 || separator == "")
        {
                return "";
                }
        else
        {
                return (strBase.substring(strBase.indexOf(separator)+separator.length, strBase.length));
                }
        },
}

