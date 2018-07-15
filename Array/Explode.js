// ----------------------------------------------------------------------------
// Título:        Explode
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR={
    /*
      *        Realizamos un explode de cada valor de todo un array en otro array
    *
    *        @param         {Array} Array sobre el que hacer explode
    *        @param        {String} String separador para hacer el explode
    *          @return        {Array} Un array con todos los valores separados
    *          @version        1.0        - 08-01-2009
    *          @exemple
    *                var arIn = new Array( "A, B, C", "D, E" ); // Dos valores
    *                var arOut = ARRAY.arrExplode( arIn, "," );
    *                 // -- arOut contendri?? 5 valores, "A", "B", "C", "D", "E" y "F"
    */
    Explode : function(a,sSep){
        var a2=new Array(),x=0,p=ARR.Count(a);
        for(var k in a){
            var t=a[k].split(sSep);
            for(var i in t){
                a2[x++]=t[i];
            }
        }
        return a2;
    }
}

