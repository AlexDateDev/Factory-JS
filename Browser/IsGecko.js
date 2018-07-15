// ----------------------------------------------------------------------------
// Título:        IsGecko
//
// Fecha:        06/04/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Browser={
    /*
     * Devuelve true si el navegador es Gecko
     *
     * @return {bool}
     * @version        1.0        -  04-01-2008
     */
    IsGecko : function(){
        return navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1;
    }
}
