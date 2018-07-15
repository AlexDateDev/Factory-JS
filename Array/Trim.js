// ----------------------------------------------------------------------------
// Título:        Trim
//
// Fecha:        08/01/2009
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR=
{
    /*
    *  Eliminamos todos los espacios en blanco innecesarios de todos los strings de un array
    *  No elimina los strings vacios
    *  @param:    IN: arIn: array de strings a limipar de blancos
    *  @return    Array: el array de string sin blancos superfluos en cada string
    *  @note:     Se utiliza la funcion STRING.trim
    */
    Trim : function(a){
        var t=new Array();
        for( var i in a){
            t[i]=STR.Trim(a[i]);
        }
        return t;
    }
}

