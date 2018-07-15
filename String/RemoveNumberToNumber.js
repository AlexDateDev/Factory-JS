// ----------------------------------------------------------------------------
// RemoveNumberToNumber
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
    *        Elimina una parte del string, despues de un numero determinado de caracteres
    *        hasta otro numero determinado de carcateres
    *
    *        @param        {String}      string donde eliminar
    *        @param        {Int}        int Numero de carcateres despues de los cuales eliminar
    *        @param        {Int}        int, Numero de caracteres a eliminar
    *        @return        {String} string sin el texto eliminado
    *        @version        1.0        -  04-01-2008
    */
       remove_num_num:function(sBase,nNumIni,nNumEliminar)
    {
            var i=this.left_num(sBase,nNumIni);
        var f = this.right_num(sBase,nNumIni+nNumEliminar);
        if( i!=""&&f!="")
        {
                return i+f;
                }
                return "";
        },
}

