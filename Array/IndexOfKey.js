// ----------------------------------------------------------------------------
// Título:        IndexOfKey
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR =
{
    /*
    *      Busca la posicion de un indice en el array. Las comparaciones se realizan todas en
    *     mayusculas.
    *
    *     @param {Array} Array donde buscar el valor
    *       @param {string | int } Valor a buscar
    *        @return {int | -1} La posicion que ocupa el primer indice buscado, siendo 0 la
    *        primera, o -1 si no lo encuentra
    *          @version        1.0        - 08-01-2009
    */
    IndexOfKey: function(a,valFind){
          var s=valFind.toUpperCase();
        var n=0;
        for(var i in a){
               if(i.toUpperCase()==s){
                return n;
            }
            n++;
        }
        return -1;
    }
}

