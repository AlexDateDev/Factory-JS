// ----------------------------------------------------------------------------
// Título:        GetTodayStr
//
// Fecha:        17/09/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DATE={
    GetTodayStr:function(){
        var o=new Date(),d="00"+o.getDate(),m="00"+(o.getMonth()+1),y=o.getFullYear();
        return d.slice(d.length-2,d.length)+"/"+m.slice(m.length-2,m.length)+"/"+y;
    }
}
