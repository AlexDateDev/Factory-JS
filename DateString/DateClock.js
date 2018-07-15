// ----------------------------------------------------------------------------
// DateClock
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
/*
    *         Reloj que muestra la hora actual, actualizándose cada segundo
    *
    *         @param {Input Field}        Campo donde mostrar la fecha
    *        @param        {Input Field} Campo donde mostrar la hora
    *        @version        1.0        -  19-03-2008
    *         @example dateClock( document.forms[0].fecha, document.forms[0].hora )
    */

    //var timeStr, dateStr;
    DateClock:function( fldDate, fldTime)
    {
                var now = new Date();

                // Hora
                hours = now.getHours();
                minutes = now.getMinutes();
                seconds = now.getSeconds();

                timeStr = "" + hours;
                timeStr += ((minutes < 10) ? ":0" : ":") + minutes;
                timeStr += ((seconds < 10) ? ":0" : ":") + seconds;
                fldTime.value = timeStr;

                // Fecha
                var date= now.getDate();
                month= now.getMonth() + 1;
                year= now.getYear();

                dateStr= "" + month;
                dateStr+= ((date < 10) ? "/0" : "/") + date;
                dateStr+= "/" + year;

                fldDate.value = dateStr;

                Timer= setTimeout( "Dates.DateClock()", 1000);
    },
}

