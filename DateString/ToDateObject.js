// ----------------------------------------------------------------------------
// ToDateObject
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
  /*
    *  Devuelve un objeto Date que se crea a partir de un String.
    *
    *  @param        {String}        String con la fecha a crear. Formato dd/mm/yyyy
    *  @return        {Date object}    Un objeto Date
    *  @version        1.0        -  19-03-2008
    */
    ToDateObject:function( strDate ){
        var t=strDate.split("-");
        return new Date(t[2],t[1]-1,t[0]);
    },
}

