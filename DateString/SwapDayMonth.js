// ----------------------------------------------------------------------------
// SwapDayMonth
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
  /*
    *   Cambiamos la posicion del dia y mes de una fecha formato string
    *
    *   @param        {String}
    *        @return {String}
    *        @version        1.0        -  19-03-2008
    */
    SswapDayMonth:function(s){
            var myRegExp = /(\d{2})\W(\d{2})\W(\d{4})/;
            return s.replace(myRegExp, "$2-$1-$3")
    },
}

