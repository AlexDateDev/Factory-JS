// ----------------------------------------------------------------------------
// Título:        ToLowerCase
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR =
{
        /*
        *  Convierte todos los valores del array en minusculas
        *  @param:        IN: arrayIn: Array
        *  @return: Un array en minusculas
        */

    ToLowerCase: function(a){
        var t = new Array();
        for( var i in a){
            t[i]=a[i].toLowerCase( );
        }
        return t;
    }
}
