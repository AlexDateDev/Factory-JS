// ----------------------------------------------------------------------------
// RigthNumber
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
    * Devuelve la parte de la DERECHA de un string hasta un numero determinado de caracteres empezando a contar desda la izquierda
    * Un valor numerico negativo => empieza a contar desde la derecha i devuelve la parte izquieda
    *
    * @param        {String} String al que obtener los caracteres
    * @param         {Int} Numero de caracteres a devolver
    * @return        {String}        Un String
    *        @version        1.0        -  04-01-2008
    */
        get_right_num:function( strBase, separator )
    {
            var resto = new String( strBase.slice( 0,  -1 * (parseInt( separator ))));
        return ( strBase.slice( parseInt( resto.length),  parseInt( resto.length) + parseInt( separator )));
        },
}
