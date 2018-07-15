// ----------------------------------------------------------------------------
// GetParams
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

/**
* Obtenemos todos los valores contenidos entre varias cadenas de limitadoras de la URL
* PARAMETROS
*      IN: url; string de donde obtener los parametros
*      IN: separator: string que separa los valores
* DEVUELVE:
*      Devuelve un array con todos los valores a partir del primer separador
* EJEMPLO:
*      http://BGAR82AME005/GW/PortalCAU/EncuestaWeb.nsf/ENCWEB?OpenForm&A1&A2&B1&B2&C
*      Devuelve un array con los valores
*      A1      -> Posicion 0 del array
*      A2      -> Posicion 1 del array
*      B1      -> Posicion 2 del array
*      B2      -> Posicion 3 del array
*      C       -> Posicion 4 del array
* OBSERVACIONES:
*      Si no se encuantra el delimitador, devuelve un array vacio
*/


function get_params( url, separator )
    {
    var tmp = new Array;
    var params = new Array;
    tmp = url.split(  separator );
    for ( var idx = 1; idx < tmp.length; idx++ )
        {
        params[ idx - 1 ] = tmp[ idx ];
        };
    return params;
    };


function getUrlParams() {
    var params = {},
        e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.search.substring(1);

    while (e = r.exec(q)) params[d(e[1])] = d(e[2]);

    return params;
}

