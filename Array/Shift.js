// ----------------------------------------------------------------------------
// Título:        Shift
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR =
{
    /*
    *        Devuelve y elimina el primer elemento del array
    */
    Shift : function(a)
    {
        var f=a[0];
        a.reverse();
        a.length = Math.max(a.length-1,0);
        a.reverse();
        return f;
    }
}


