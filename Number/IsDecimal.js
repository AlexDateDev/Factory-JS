// ----------------------------------------------------------------------------
// IsDecimal
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

isDecimal:function(s){
            var i=parseFloat(s);
            if(isNaN(i)||(""+i)!=s){return false;}
            return true;
        }