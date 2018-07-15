// ----------------------------------------------------------------------------
// IsValid
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

isDateTime:function(s){
    var d=s.split(" ");
    return Factory.Validate.isDate(d[0]) && Factory.Validate.isTime(d[1]);
},
