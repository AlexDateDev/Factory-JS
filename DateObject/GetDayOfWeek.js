// ----------------------------------------------------------------------------
// GetDayOfWeek
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
/**
*   Devuelve el dia de la semana de un objeto fecha
*   PARAMETROS:
*       dateObj: objeto Date( )
*   DEVUELVE:
*       lunes = 1, marter = 2, miercoles = 3, jueves = 4, vierners = 5, sabado = 6, domingo = 0
*/

    GetWeekOfDay:function( oDate ){
        var m = oDate.getMonth()+1;
        var a = oDate.getFullYear();
        var d = oDate.getDate();
        if ( m == 1 || m == 2 ) {a--; m+=12;}
        var x = Math.floor(a/100);
        var y = 2 - x + Math.floor(x/4);
        var jd = Math.floor(365.25*(a+4716)) + Math.floor(30.6001*(m+1)) + d + y - 1524.5;
        return ((jd + 1.5) % 7);
    }
}
