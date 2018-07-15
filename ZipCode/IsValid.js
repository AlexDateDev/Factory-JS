// ----------------------------------------------------------------------------
// IsValid
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

isZipCode:function(s){
    var t=""+s;
    if(t.length!=5){return false;}
    return Factory.Validate.isInteger(t);
},
