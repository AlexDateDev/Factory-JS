// ----------------------------------------------------------------------------
// Título:        IsLetter
//
// Fecha:        04/01/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Char={
    /*
    *    Determina si un caracter es letra.
    *
    *    @return {bool}
    *    @version        1.0        -  04-01-2008
    */
    isLetter:function(c){
        return (/^[a-zA-Z]$/.test(c));
    },

};

