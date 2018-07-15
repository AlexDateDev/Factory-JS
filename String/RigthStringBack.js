// ----------------------------------------------------------------------------
// RigthStringBack
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{
        /**
    * Devuelve la parte de la derecha de un string hasta un separador empezando a buscar por la derecha
    *
    * @param        {String} String al que obtener N caracteres de las derecha
    * @param        {String} String hasta el que buscar
    * @return        {String}       Un String
    *        abc-def-ghi-jkl        => get_right_str_back(str, "-" ); => jkl
    *        abc-def-ghi-jkl        => get_right_str(str, "-" ); => def-ghi-jkl
    *        @version        1.0        -  04-01-2008
    */
        get_right_str_back:function( strBase, s)
    {
            if(strBase.lastIndexOf(s)==-1)
        {
                return "";
                }
        return strBase.substring(strBase.lastIndexOf(s)+1,strBase.length);
        },
}

