// ----------------------------------------------------------------------------
// Título:        Merge
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var ARR =
{
      /*
      *    Concatenamos dos arrays.
      *
      *    @param        {Array} Array 1 inicial
      *       @param        {Array} Array 2 a concatenar despues del 1
      *       @return        {Array} Array concatenado
    *       @version        1.0        - 08-01-2009
    *    Cuidado, se pierden los indices del segundo array
      */
    Merge : function(a1,a2){
        var t=ARR.Clone(a1);
        var n=ARR.Count(t);
        for(var i in a2){
            t[n++]=a2[i];
        }
        return t;
    }
}

