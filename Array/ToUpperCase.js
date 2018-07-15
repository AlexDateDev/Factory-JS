// ----------------------------------------------------------------------------
// Título:        ToUpperCase
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR =
{
        /*
        *  Convierte todos los valores del array en mayusculas
        *  @param:        IN: arrayIn: Array
        *  @return: Un array en mayusculas
        */

   ToUpperCase: function(a){
        var t = new Array();
        for( var i in a ){
            t[i]=a[i].toUpperCase( );
        }
        return t;
    }
}
