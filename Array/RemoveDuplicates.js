// ----------------------------------------------------------------------------
// Título:        RemoveDuplicates
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR =
{
    /*
      *    Elimina todos los valores que esten repetidos, solo deja uno de cada valor
      *
      *     @param        {Array} Array: Array con todos los valores
      *    @return        {Array}  Un array sin los duplicados
      *       @version        1.0        - 08-01-2009
      */
    RemoveDuplicates : function(a){
        var t=new Array();
        var n=0;
        for(var i in a){
            if(ARR.IndexOfValue(t,a[i])==-1){
                t[n++]=a[i];
            }
        }
        return t;
    }
}

