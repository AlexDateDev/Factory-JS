// ----------------------------------------------------------------------------
// GetTodayDateObject
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

var Factory={
    DateObject:{
        // Sin horas ni minutos
        GetToday:function(){
            return Factory.Date.toDateObject(Factory.Date.getToday());
        },
    }
}
