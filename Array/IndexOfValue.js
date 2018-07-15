// ----------------------------------------------------------------------------
// Título:        IndexOfValue
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR={
    /*
      *      Busca la posicion de un valor en el array. Las comparaciones se realizan todas en
    *     mayusculas.
    *
      *     @param {Array} Array donde buscar el valor
      *       @param {string | int } Valor a buscar
      *        @return {int | -1} La posicii??n que ocupa el primer valor buscado, siendo 0 la
    *        primera, o -1 si no lo encuentra
    *          @version        1.0        - 08-01-2009
      */
    IndexOfValue: function(a,valFind){
          var s=valFind.toUpperCase();
        for(var i in a){
            if(a[i].toUpperCase()==s){
                return i;
            }
        }
        return -1;
    }
}

