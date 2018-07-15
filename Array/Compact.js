// ----------------------------------------------------------------------------
// Título:        Compact
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR ={
    /*
      *     Elimina los valores vacios (deja los que si??lo contienen espacios)
      *
      *     @param        {Array} a compactar
      *     @return        {Array} Devuelve un array sin elementos vacios
      *     @version        1.0        - 08-01-2009
    *
    *    Cuidado: Se pierden los indices numericos cuando se eliminar valores
      */
	Compact : function(a){
        var t=new Array(),n=0;
        for(var i in a){
            if(a[i]!=""){t[n++]=a[i]}
        }
           return t;
    }
}

