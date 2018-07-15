// ----------------------------------------------------------------------------
// AddDays
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
    /*
    *  suma/resta un número de días a una fecha. Numeros negativos de dias restan
    *
    *  @param        {String date}     Fecha al que sumar dias
    *  @param        {Int}        Número de días a añadir
    *  @return        {String date} Un objeto Date con la nueva fecha
    *  @version        1.0        -  19-03-2008
    */
    AddDays:function(sDate, nDays){
        var o=this.to_obj(sDate);
        o.setDate( o.getDate() + nDays));
        return this.to_str(o);
       }

}

