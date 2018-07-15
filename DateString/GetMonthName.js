// ----------------------------------------------------------------------------
// GetMonthName
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
     /*
    *   Devuelve el nombre del mes de una fecha
    *
    *   @param        {String date}
    *        @return {String}
    *        @version        1.0        -  19-03-2008
    */
    GetMonthName:function(sDate){
        return ['Enero','Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][this.ToObject(sDate).getMonth()];
    },
}

