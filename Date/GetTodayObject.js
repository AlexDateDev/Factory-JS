// ----------------------------------------------------------------------------
// T�tulo:        GetTodayObject
//
// Fecha:        17/09/2016
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DATE={
    // Sin horas ni minutos
    GetTodayObjectDate:function(){
        return DATE.ToObjectDate(Date.GetTodayStr());
    },
}
