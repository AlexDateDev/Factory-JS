// ----------------------------------------------------------------------------
// Título:        RemovePosition
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var ARR =
{
    /*
    *   Eliminamos una posicion del array
    *
    *   @param        {Array} Array al que elimianrle la posicii??n
    *   @param        {Int}  Valor numi??rico de la posicii??n a eliminar puede ser un integer o un string numerico nPos = (0, length-1)
    *   @return        {Array} Devuelve un nuevo array con la posicii??n eliminada
    *   @version        1.0        - 08-01-2009
    */
    RemovedPosition : function(a,nPos){
        var n=parseInt(nPos,10),t=new Array();
        for(var i in a){
            if(i!=n){
                t[ARR.Count(t)]=a[i];
            }
        }
        return t;
    }
}

