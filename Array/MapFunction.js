// ----------------------------------------------------------------------------
// Título:        MapFunction
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR=
{
    MapFunction : function(ar, fnc){
        var a = new Array(ar.length);
        for (var i in ar){
            a[i] = fnc(ar[i]);
        }
        return a;
    }
}

