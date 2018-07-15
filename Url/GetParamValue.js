// ----------------------------------------------------------------------------
// GetParamValue
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Viernes 12 Agosto 2011
/*
*Devuelve el valor de un parametro de una url
*PARAMETROS:
*url: url con los parametros
*param:parametro a obtener su valor
*Ejemplo:
*url_param( "var%201%3DHola%26var%202%3Dfunciona%26var%203%eDperfecto", "var 2" );
*Devuelve:funciona
*NOTA: url no escapada => "var 1=Hola&var 2=funciona&var 3=perfecto"
Comparacion en mausculas
*Formato url pagina.html?comando&param1=value1&param2=value2
*Formato NO permitiro pagina.html?param1=value1&param2=value2 => url valida en HTML pero no en NOTES
*/

function url_param( url, param )
{
    var arr = unescape( url ).split("&");
    for (i=0; i<arr.length; i++)
    {
        arrAct = arr[i].split("=");
        if( arrAct[0].toUpperCase() == param.toUpperCase() )
        {
            return arrAct[1];
        }
    }
    return null;
}

