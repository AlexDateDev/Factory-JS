// ----------------------------------------------------------------------------
// Título:        ToString
//
// Fecha:        17/09/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DATE={
    // Transforma un objeto Date javascrip en un string
    // si no se indica bIncludeHHMM o es false devuelve sÃ³lo el dÃºia: 25-09-2012
    // sino devuelve fecha y hora 25/09/2012 08:39
    ToString:function(oDate,bIncludeHHMM)
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
}
