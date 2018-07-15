// ----------------------------------------------------------------------------
// GetTodayString
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
/*
        *        Devuelve la fecha de hoy
        *
        *   @return        {String date} (dd-mm-yyyy)
        *   @version        1.0        -  19-03-2008
        */
        GetToday:function(){
            var o=new Date(),d="00"+o.getDate(),m="00"+(o.getMonth()+1),y=o.getFullYear();
            return d.slice(d.length-2,d.length)+"-"+m.slice(m.length-2,m.length)+"-"+y;
        },
}

