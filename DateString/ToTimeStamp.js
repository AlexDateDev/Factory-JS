// ----------------------------------------------------------------------------
// ToTimeStamp
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
   /*
     *        Retorna la data actual com a timestamp unix. 13 digits (10 + 3 milisegonds)
     *
     *        @param {String}
     *        @return {String}
         *  @version        1.0        -  19-03-2008
     */
    ToTimeStamp:function(sDate){
        var now = this.to_obj_date(sDate);
        var y = now.getYear();
        var m = now.getUTCMonth() + 1;
        var mes = "M" + m;
        if (mes.length==2) m="0"+m;
        var d = now.getUTCDate();
        var dia = "D" + d;
        if (dia.length==2) d="0"+d;
        var H = now.getUTCHours();
        var M = now.getUTCMinutes();
        var S = now.getUTCSeconds();
        var HH = "H" + H;
        if (HH.length==2) H = "0" + H;
        var MM = "M" + M;
        if (MM.length==2) M = "0" + M;
        var SS = "S" + S;
        if (SS.length==2) S = "0" + S;
        var timestampT = "T" + y + m + d + H + M + S;
        var timestamp = timestampT.substring(1,timestampT.length);
        return(timestamp);
    }
}


