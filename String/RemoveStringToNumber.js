// ----------------------------------------------------------------------------
// RemoveStringToNumber
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
    *        Elimina una parte del string, despues de un string hasta un numero determinado de carcateres
    *
    *        @param        {String}        string donde eliminar
    *        @param        {String}        string a partir del cual eliminar
    *        @param        {Int}        int, Numero de caracteres a eliminar
    *        @return        {String} string sin el texto eliminado
    *        @version        1.0        -  04-01-2008
    */
    remove_str_num : function(sBase,sEliminar,nNumEliminar)
    {
                var i = this.left_str(sBale,sEliminar);
                var f = this.right_num(sBase,i.lengt+nNumEliminar);
        if( i!=""&&f!="")
        {
                return i+f;
                }
        return "";
        },
}ç
