// ----------------------------------------------------------------------------
// LeftStringBack
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
    *        Devuelve la parte de la IZQUIERDA de un string hasta un separador
        *   empezando a buscar por la derecha
        *
    *   @param {String} String al que obtener los caracteres
    *   @param        {String} String hasta el que buscar
    *   @return        {String}
    *   @example abc#def#geh#ijk
    *            get_left_back_str         => Devuelve abc#def#geh
    *            get_left_str              => Devuelve abc
    *        @version        1.0        -  04-01-2008
    */
        get_left_str_back:function( strBase, s)
        {
                if(strBase.lastIndexOf(s)==-1)
                {
                        return "";
                }
        return strBase.substring(0, strBase.lastIndexOf(s));
        },
}

