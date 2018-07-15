// ----------------------------------------------------------------------------
// Título:        Count
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR ={
    /*
    *        Devuelve el nA?mero de elemento del array
    *
    *        @param {Array} array a contar
    *        @return        {int}
    *        @version        1.0        - 08-01-2009
    */
    Count : function(a){
        var n=0;
        for(var i in a){
            n++;
        }
        return n;
    }
}

