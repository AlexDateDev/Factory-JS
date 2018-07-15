// ----------------------------------------------------------------------------
// ReplaceSeparator
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

/**
*Función que sustituye el guión de als fechas por /
*PARAMETROS:
*dateIn: string de fecha "10-12-2005"
*DEVUELVE:
*string con la fecha estandarizada: "10/12/2005"
*/

function date_replace_separator( dateIn)
{
    var reExp = /^ *(\d{2})\-(\d{2})\-(\d{4}) *$/g;
    var dArray;
    if (dateIn.match(reExp))
        return dateIn.replace(reExp, "$2\/$1\/$3");
}
