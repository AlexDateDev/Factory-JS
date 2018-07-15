// ----------------------------------------------------------------------------
// GetYear
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

var Dates={
   /*
    *         Retorna l'any (yyyy) d'una data determinada
    *
    *        @param        {String date}
    *         @return {Int}
    *         @version        1.0        -  19-03-2008
    */
    GetYear:function( sDateSTD ){
        var a=sDateSTD.split( "-");
        return parseInt( a[2],10);
    },
}

