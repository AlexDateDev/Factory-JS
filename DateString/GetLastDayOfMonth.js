// ----------------------------------------------------------------------------
// GetLastDayOfMonth
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
/*
    *        Devuelve el número de dias que tiene un mes de un año determinado
    *
    *        @param        {Int}        Número de mes (1-12)
    *        @param        {Int}   Año (dddd)
    *        @return        {Int}   int
    *        @version        1.0        -  19-03-2008
    */
    GetLastDayOfMonth:function(nMes,nYear){
            return new Date(nYear,nMes,0).getDate();
    },
}

