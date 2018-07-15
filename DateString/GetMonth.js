// ----------------------------------------------------------------------------
// GetMonth
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
   /*
    * Retorna el mes (1-13) d'una data determinada
    *
    * @param {String}
    * @return {Int}
    * @version        1.0        -  19-03-2008
    */
    GetMonth:function( sDateSTD ){
        var a=sDateSTD.split( "-");
        return parseInt( a[1],10);
    },
}

