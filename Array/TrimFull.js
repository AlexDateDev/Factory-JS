// ----------------------------------------------------------------------------
// TrimFull
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Arrays =
{
    /*
    *  Eliminamos todos los espacios en blanco innecesarios de todos los strings de un array
    *  No elimina los strings vacios
    *  @param:    IN: arIn: array de strings a limipar de blancos
    *  @return    Array: el array de string sin blancos superfluos en cada string
    *  @note:     Se utiliza la funcion STRING.trim
    */
    TrimFull : function(a){
        var t=new Array();
        for( var i in a){
            t[i]=STR.TrimFull(a[i]);
        }
        return t;
    }
}

