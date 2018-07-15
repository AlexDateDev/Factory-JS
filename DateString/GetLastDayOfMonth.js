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
    *        Devuelve el n�mero de dias que tiene un mes de un a�o determinado
    *
    *        @param        {Int}        N�mero de mes (1-12)
    *        @param        {Int}   A�o (dddd)
    *        @return        {Int}   int
    *        @version        1.0        -  19-03-2008
    */
    GetLastDayOfMonth:function(nMes,nYear){
            return new Date(nYear,nMes,0).getDate();
    },
}

