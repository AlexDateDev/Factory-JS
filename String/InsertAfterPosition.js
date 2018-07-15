// ----------------------------------------------------------------------------
// InsertAfterPosition
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2011
STRING=
{
 /**
    *        Inserta un string dentro de otro string despues de un string determinado
    *
    *        @param        {String}    string original
    *        @param        {Int}       Numero de carcateres despues de los cuales insertar
    *        @param        {String}        string a insertar
    *        @return        {String}
    *        @version        1.0        -  04-01-2008
    */
        insert_str_after_pos:function(sBase,nNum,sInsertar)
        {
            var i=this.left_num(sBase,sNum),f=this.right_num(sBase,sBase.length-nNum);
        if(i!=""&&f!="")
        {
                return i+sInsertar+f;
                }
        return "";
        }
 }

