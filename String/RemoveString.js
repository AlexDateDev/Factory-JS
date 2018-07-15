// ----------------------------------------------------------------------------
// RemoveString
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
    *        Elimina una parte del string
    *
    *        @param        {String}        string donde eliminar
    *        @param        {String}        string a eliminar
    *        @return        {String}        string sin el texto eliminado
    *        @version        1.0        -  04-01-2008
    */
        get_remove_str:function(sBase,sEliminar)
    {
            return this.replace_str(sBase, sEliminar,"");
        },
}
