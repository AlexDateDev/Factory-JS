// ----------------------------------------------------------------------------
// Normalize
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
    /*
    *        Funcion que sustituye el guion de als fechas por /
    *        @param:                dateIn: string de fecha "10-12-2005"
    *        @return:        string con la fecha estandarizada: "10/12/2005"
    */

    Normalize:function( dateIn ){
        var reExp = /^ *(\d{2})\-(\d{2})\-(\d{4}) *$/g;
        var dArray;
        if (dateIn.match(reExp))
        return dateIn.replace(reExp, "$2\/$1\/$3");
    }
}
