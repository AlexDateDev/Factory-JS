// ----------------------------------------------------------------------------
// GetDayOfWeekName
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
      /*
        *        Devuelve el nombre del dia de la semana (lunes-domingo)
        *
        *        @param        {String date}
        *        @return        {String}
        *        @version        1.0        -  19-03-2008
        */
    GetDayOfWeekName:function(sDate)
    {
        var t=this.to_obj(sDate),D=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        return D[t.getDay()];
    }
}


