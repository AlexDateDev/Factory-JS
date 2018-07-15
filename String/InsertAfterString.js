// ----------------------------------------------------------------------------
// InsertAfterString
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


STRING=
{
/**
    *        Inserta un string dentro de otro string despues de un string determinado
    *
    *        @param        {String}        string original
    *        @param        {String}    string despues del cual insertar
    *        @param        {String}    string a insertar
    *        @return        {String}        string | ""
    *        @version        1.0        -  04-01-2008
    */
        insert_str_after_str:function(sBase,sBuscar,sInsertar)
        {
                var i=this.left_str(sBase,sBuscar),f=this.right_str(sBase,sBuscar);
                if(i!=""&&f!="")
                {
                return i+sInsertar+f;
                }
        return "";
        }
    }

