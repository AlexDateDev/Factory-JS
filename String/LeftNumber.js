// ----------------------------------------------------------------------------
// LeftNumber
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
    * Devuelve la parte de la IZQUIERDA de un string hasta un numero determinado de caracteres empezando a buscar desde la izquierda
    * Un valor numerico negativo => empieza a contar desde la derecha i devuelve la parte izquieda
    *
    * @param        {String} String al que obtener los caracteres
    * @param        {Int}     Numero de caracteres a devolver
    * @return        {String}
    *        @version        1.0        -  04-01-2008
    */
        get_left_num:function(s,n)
        {
                return (s.slice(0,parseInt(n,10)));
        },
}
