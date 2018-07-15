// ----------------------------------------------------------------------------
// Título:        ToDateObject
//
// Fecha:        17/09/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DATE={
    // Transformamos un string dd/mm/yyy a un objeto Date
    // horas ni minutos opcionales
    ToObjectDate:function(sDate,m,h,s){
        if(!VAL.IsDate(sDate)){
            alert("Format Date error");
            return null;
        }
        var t=sDate.split('/');
        if(!m){
            return new Date(t[2],t[1]-1,t[0]);
        }
        else{
            return new Date(t[2],t[1]-1,t[0],m,h,s);
        }
    },
}
