// ----------------------------------------------------------------------------
// GetDay
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
   /*
    * Retorna el dia (1-31) d'una data determinada. Separador -
    *
    * @param        {String date}
    * @return         {Int}
    * @version        1.0        -  19-03-2008
    */
    GetDay:function(sDateSTD ){
        var a=sDateSTD.split( "-");
        return parseInt( a[0],10);
    },
}

