// ----------------------------------------------------------------------------
// Mid
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
        * Devuelve un string comprendido entre
    *        Una posicion inicial y una longitud
    *        Un delimitador y una longitud
    *        Dos delimitadores
        * @param {String}String en donde obtener el substring
    * @param {String | Int}  Numero, posicio a partir del cual obtener el substring o Delinitador donde empezar
    * @param {String | Int}  Numero de caracteres a obtener a partir de la posicion start de str o Delimitador donde terminar o
    * @return {String}   Devuelve un string de len caracteres a partir de un aposicion determinada
    *        @version        1.0        -  04-01-2008
    */
        get_mid:function(str, start, len)
    {
        if( typeof start == "string" && typeof len == "string" )
        {
            var strTmp = new String( str );
            pI = strTmp.indexOf( start );
            pS = strTmp.indexOf( len );
            if( pI=="-1" || pS=="-1" || start == len || pS<pI)
            {
                    return "";
            }

            var indice1 = parseInt( strTmp.indexOf( start ) ) + start.length;
            var indice2 = strTmp.indexOf( len, indice1 );
            Valor = strTmp.slice( indice1, indice2 );
            return Valor;
        }
        if( typeof start == "string" && typeof len == "number" )
        {
                        if( str.indexOf( start ) == "-1")
            {
                    return "";
            }
            var indice1 = parseInt( str.indexOf( start ) ) + start.length;
            var Valor = str.slice( indice1, parseInt( indice1 ) + parseInt( len,10 ) );

            return Valor;
        }
        if( typeof start == "number" && typeof len == "number" )
        {
            var st=parseInt(start,10);
            var l=parseInt(len,10);
            if (st < 0 || l < 0)
            {
                return "";
            }

            var iEnd, iLen = str.length;
            if (st + l > iLen)
            {
                    iEnd = iLen;
            }
            else
            {
                iEnd = st + l;
            }
            return str.substring(st,iEnd);
        }
        },
}
