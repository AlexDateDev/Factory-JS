// ----------------------------------------------------------------------------
// ToString
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
    /*
    *        Transforma un objeto Date a un string date
    *
    *   @param        {Date object}        Object Date
    *   @return        {String date}       string date (dd-mm-yyyy)
    *   @version        1.0        -  19-03-2008
    */
    ToString:function(o){
        var d="00"+o.getDate(),m="00"+(o.getMonth()+1),y=o.getFullYear();
        return d.slice(d.length-2,d.length)+"-"+m.slice(m.length-2,m.length)+"-"+y;
    }
};

// Transforma un objeto Date javascrip en un string
// si no se indica bIncludeHHMM o es false devuelve sólo el dúia: 25-09-2012
// sino devuelve fecha y hora 25/09/2012 08:39
toString:function(oDate,bIncludeHHMM)
{
    var d="00"+oDate.getDate(),m="00"+(oDate.getMonth()+1),y=oDate.getFullYear();
    var sd=d.slice(d.length-2,d.length)+"/"+m.slice(m.length-2,m.length)+"/"+y;
    if(bIncludeHHMM){
        h = " 00"+oDate.getHours();
        n = " 00"+oDate.getMinutes();
        sd += " "+h.slice(h.length-2,h.length)+":"+n.slice(n.length-2,n.length);
    }
    return sd;
},
